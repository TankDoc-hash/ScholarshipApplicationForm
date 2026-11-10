/**
 * ============================================================================
 * AKSHAR YOGA KENDRAA — BHARAT YOGA KRANTI
 * Google Apps Script: Folder Hierarchy Storage in Google Drive + Google Sheets
 * ============================================================================
 *
 * FOLDER STRUCTURE CREATED AUTOMATICALLY IN GOOGLE DRIVE:
 * Main Folder (1P-A_j436X4Wtn0jCElmLWiC-H0lUzJ7-)
 *   └── <Candidate Name - Reference Number>
 *         ├── application-details.txt   (Full human-readable form answers)
 *         ├── application-details.json  (Full structured JSON form answers)
 *         └── Files/
 *               ├── 01_PassportPhoto_...jpg
 *               ├── 02_Aadhaar_GovID_...jpg
 *               ├── 03_Class10_...jpg
 *               └── ...
 *
 * HOW TO UPDATE / DEPLOY IN GOOGLE SHEETS:
 * 1. Open your Google Sheet -> Extensions -> Apps Script
 * 2. Replace the code in Code.gs with this entire script and click Save (Ctrl+S)
 * 3. Click Deploy -> Manage deployments -> Edit (pencil icon) -> Version: "New version" -> Deploy
 *    (Or Deploy -> New deployment -> Web app -> Execute as: "Me", Who has access: "Anyone")
 * 4. Copy the Web App URL into `.env.local` (and Vercel Environment Variables) as:
 *    GOOGLE_SHEETS_APPLICATION_WEBHOOK_URL
 */

const SHEET_NAME = "CandidateApplications";
const MAIN_DRIVE_FOLDER_ID = "1P-A_j436X4Wtn0jCElmLWiC-H0lUzJ7-";
const ROOT_DRIVE_FOLDER_NAME = "Akshar_Yoga_Scholarship_Applications_2026";
// Optional: If running as a standalone script, you can paste your Google Sheet ID here.
// If you opened Apps Script from inside your Google Sheet (Extensions -> Apps Script), leave this empty "".
const SPREADSHEET_ID = "";

function getOrCreateRootFolder() {
  if (MAIN_DRIVE_FOLDER_ID) {
    try {
      return DriveApp.getFolderById(MAIN_DRIVE_FOLDER_ID);
    } catch (e) {
      // Fallback to folder name search if ID is inaccessible
    }
  }
  const folders = DriveApp.getFoldersByName(ROOT_DRIVE_FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(ROOT_DRIVE_FOLDER_NAME);
}

function getOrCreateMasterSpreadsheet(rootFolder) {
  // 1. If a specific Spreadsheet ID is configured, open it directly
  if (SPREADSHEET_ID) {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (e) {
      // Continue to active spreadsheet fallback
    }
  }

  // 2. If script is bound to an open Google Sheet (Extensions -> Apps Script), use it!
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) return active;
  } catch (e) {
    // Running as standalone script
  }

  // 3. Otherwise look for or create the master sheet inside the Drive folder
  const sheetFileName = "Akshar_Yoga_Scholarship_Master_Applications";
  const existingFiles = rootFolder.getFilesByName(sheetFileName);
  if (existingFiles.hasNext()) {
    return SpreadsheetApp.open(existingFiles.next());
  }
  const created = SpreadsheetApp.create(sheetFileName);
  const file = DriveApp.getFileById(created.getId());
  file.moveTo(rootFolder);
  return created;
}

function saveBase64FileToFolder(folder, fileObj, prefixLabel) {
  if (!fileObj || !fileObj.dataUrl) return "";
  try {
    const parts = String(fileObj.dataUrl).split(",");
    if (parts.length < 2) return "";
    const base64Data = parts[1];
    const mimeType = fileObj.mimeType || "image/jpeg";
    const decoded = Utilities.base64Decode(base64Data);
    const safeName = `${prefixLabel}_${fileObj.fileName || "document.jpg"}`;
    const blob = Utilities.newBlob(decoded, mimeType, safeName);
    const driveFile = folder.createFile(blob);
    return driveFile.getUrl();
  } catch (err) {
    return "Error saving file: " + String(err);
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const app = payload.applicationData || {};
    const files = payload.compressedFiles || {};
    const statuses = app.docStatuses || {};

    // =======================================================================
    // 1. CREATE FOLDER STRUCTURE IN GOOGLE DRIVE:
    //    Main Folder > Candidate Name > Files (plus .txt and .json)
    // =======================================================================
    const rootFolder = getOrCreateRootFolder();
    const candidateName = app.fullName || payload.name || "Candidate";
    const referenceNumber = payload.referenceNumber || "AY-BYK";
    const candidateFolderName = `${candidateName} - ${referenceNumber}`;

    const candidateFolder = rootFolder.createFolder(candidateFolderName);
    const filesSubfolder = candidateFolder.createFolder("Files");
    const driveFolderUrl = candidateFolder.getUrl();
    const filesSubfolderUrl = filesSubfolder.getUrl();

    // Save application-details.json inside Main Folder > Candidate Name
    const jsonString = JSON.stringify(
      {
        referenceNumber: referenceNumber,
        submittedAt: payload.submittedAt,
        candidateName: candidateName,
        applicationData: app,
      },
      null,
      2
    );
    const jsonFile = candidateFolder.createFile(
      "application-details.json",
      jsonString,
      MimeType.PLAIN_TEXT
    );

    // Save application-details.txt inside Main Folder > Candidate Name
    const txtString =
      payload.applicationTxtReport ||
      `Reference Number: ${referenceNumber}\nCandidate Name: ${candidateName}\nSubmitted At: ${payload.submittedAt}\n\n${jsonString}`;
    const txtFile = candidateFolder.createFile(
      "application-details.txt",
      txtString,
      MimeType.PLAIN_TEXT
    );

    // Save all uploaded compressed files inside Main Folder > Candidate Name > Files
    function resolveDocLink(key, label) {
      if (files[key] && files[key].dataUrl) {
        return saveBase64FileToFolder(filesSubfolder, files[key], label);
      }
      const st = statuses[key];
      return st ? `Status: ${String(st).toUpperCase()}` : "Not Uploaded";
    }

    const passportPhotoUrl = resolveDocLink("passportPhoto", "01_PassportPhoto");
    const aadhaarGovIdUrl = resolveDocLink("govIdProof", "02_Aadhaar_GovID");
    const class10CertUrl = resolveDocLink("class10Certificate", "03_Class10");
    const additionalEduUrl = resolveDocLink("additionalEducation", "04_HigherEdu");
    const incomeProofUrl = resolveDocLink("incomeEvidence", "05_IncomeProof");
    const categoryCertUrl = resolveDocLink(
      "categoryDisabilityCert",
      "06_CategoryCert"
    );
    const nominationFormUrl = resolveDocLink(
      "nominationForm",
      "07_NominationForm"
    );

    // =======================================================================
    // 2. POPULATE GOOGLE SHEET (BOTH FIRST TAB + "CandidateApplications" TAB)
    //    Key Columns First: Name, Phone Number, Date of Birth,
    //    1st Attachment Link (Aadhaar), 2nd Attachment Link, 3rd Attachment Link, etc.
    // =======================================================================
    const ss = getOrCreateMasterSpreadsheet(rootFolder);

    const headers = [
      "Submitted At",
      "Reference Number",
      "Name",
      "Phone Number",
      "Date of Birth",
      "Age",
      "Gender",
      "Email",
      "Aadhaar / Gov ID Type",
      "Aadhaar / Gov ID Number",
      "1st Attachment Link (Aadhaar / Gov ID)",
      "2nd Attachment Link (Passport Photo)",
      "3rd Attachment Link (Class 10 Certificate)",
      "4th Attachment Link (Income Certificate / BPL)",
      "5th Attachment Link (Additional Education)",
      "6th Attachment Link (Category / Disability Cert)",
      "7th Attachment Link (Nomination Form)",
      "Candidate Drive Folder Link",
      "Files Subfolder Link",
      "Application TXT Link",
      "Application JSON Link",
      "Parent / Guardian Name & Relation",
      "Current Address",
      "PIN Code",
      "Permanent Address",
      "Village / Town / District / State",
      "Rural / Urban",
      "Tribal Community",
      "Educational Qualifications",
      "Languages Understood",
      "Preferred Interview Language",
      "Financial Year",
      "Total Annual Family Income (INR)",
      "Household Members",
      "Earning Members",
      "Dependants Count",
      "Household Income Sources",
      "Other Income / Pension",
      "Income Proof Types",
      "Issuing Authority",
      "Issue Date / Validity",
      "Certificate Ref No",
      "Material Income Change",
      "Priority Circumstances",
      "Priority Category Claimed",
      "Priority Evidence Status",
      "Present Status",
      "Personal Monthly Income (INR)",
      "Can Attend Full 45-Day Course",
      "Leave / NOC Status",
      "Needs Support Assistance",
      "Support Assistance Details",
      "Pending Documents Explanation",
      "Declaration Agreed",
      "Place / City",
      "Declaration Date",
      "Was Assisted",
      "Assisted Language",
      "Assistant Name & Contact",
      "Assistant Confirmed",
    ];

    const eduSummary = Array.isArray(app.educationRows)
      ? app.educationRows
          .map(
            (r) =>
              `${r.level}: ${r.boardInstitution || "-"} (${
                r.yearOfPassing || "-"
              }) [${r.certificateStatus}]`
          )
          .join(" | ")
      : payload.education || "";

    const incomeSourcesSummary = Array.isArray(app.incomeSources)
      ? app.incomeSources
          .map(
            (s) =>
              `${s.earnerName || "-"} (${s.relationship || "-"}): Rs.${
                s.annualAmount || "0"
              }`
          )
          .join(" | ")
      : "";

    const row = [
      payload.submittedAt || new Date().toISOString(),
      referenceNumber,
      candidateName,
      app.mobileNumber || payload.phone || "",
      app.dob || "",
      app.age || payload.age || "",
      app.gender === "Other or self-describe"
        ? `Other: ${app.genderSelfDescribe || ""}`
        : app.gender || "",
      app.email || payload.email || "",
      app.govIdType || "Aadhaar Card",
      app.govIdNumber || "",
      aadhaarGovIdUrl,    // 1st Attachment Link (Aadhaar / Gov ID)
      passportPhotoUrl,   // 2nd Attachment Link (Passport Photo)
      class10CertUrl,     // 3rd Attachment Link (Class 10 Certificate)
      incomeProofUrl,     // 4th Attachment Link (Income Certificate / BPL)
      additionalEduUrl,   // 5th Attachment Link (Additional Education)
      categoryCertUrl,    // 6th Attachment Link (Category / Disability Cert)
      nominationFormUrl,  // 7th Attachment Link (Nomination Form)
      driveFolderUrl,
      filesSubfolderUrl,
      txtFile.getUrl(),
      jsonFile.getUrl(),
      app.guardianNameRelation || "",
      app.currentAddress || "",
      app.currentPinCode || "",
      app.permanentAddress || "",
      app.villageTownDistrictState || payload.stateCity || "",
      app.residenceClassification || "",
      app.tribalCommunity || "",
      eduSummary,
      app.languagesUnderstood || "",
      app.preferredInterviewLanguage || "",
      app.financialYear || "",
      app.totalAnnualFamilyIncome || payload.income || "",
      app.totalHouseholdMembers || "",
      app.earningMembersCount || "",
      app.dependantsCount || "",
      incomeSourcesSummary,
      app.otherIncomeSupportDetails || "",
      Array.isArray(app.incomeProofTypes)
        ? app.incomeProofTypes.join(", ")
        : "",
      app.incomeIssuingAuthority || "",
      app.incomeIssueDate || "",
      app.incomeCertRefNumber || "",
      app.materialIncomeChangeDetails || "",
      Array.isArray(app.priorityCircumstances)
        ? app.priorityCircumstances.join(", ") +
          (app.priorityCircumstanceOtherText
            ? ` (${app.priorityCircumstanceOtherText})`
            : "")
        : "",
      Array.isArray(app.priorityCategoryClaimed)
        ? app.priorityCategoryClaimed.join(", ")
        : "",
      app.priorityEvidenceStatus || "",
      app.presentEmploymentStatus || "",
      app.monthlyIncome || "",
      app.canAttendCompleteCourse || "",
      app.leaveNocStatus || "",
      app.needsSupportAssistance || "",
      app.supportAssistanceDescription || "",
      app.pendingDocumentsExplanation || "",
      app.declarationAgreed ? "YES" : "NO",
      app.declarationPlace || "",
      app.declarationDate || "",
      app.wasAssisted ? "YES" : "NO",
      app.assistedLanguageUsed || "",
      app.assistantNameContact || "",
      app.assistantConfirmedCheckbox ? "YES" : "NO",
    ];

    // Helper that ensures headers exist on a sheet tab and appends the row
    function writeRowToSheetTab(targetSheet) {
      if (!targetSheet) return;
      if (targetSheet.getLastRow() === 0) {
        targetSheet.appendRow(headers);
        targetSheet
          .getRange(1, 1, 1, headers.length)
          .setFontWeight("bold")
          .setBackground("#16261D")
          .setFontColor("#F7F2E8");
        targetSheet.setFrozenRows(1);
      }
      targetSheet.appendRow(row);
    }

    // Write to the very first tab (e.g. "Sheet1") so it's immediately visible when opening the spreadsheet
    const firstSheet = ss.getSheets()[0];
    writeRowToSheetTab(firstSheet);

    // Also write to "CandidateApplications" tab if the first tab has a different name
    if (firstSheet && firstSheet.getName() !== SHEET_NAME) {
      let namedSheet = ss.getSheetByName(SHEET_NAME);
      if (!namedSheet) {
        namedSheet = ss.insertSheet(SHEET_NAME);
      }
      writeRowToSheetTab(namedSheet);
    }

    SpreadsheetApp.flush();

    return ContentService.createTextOutput(
      JSON.stringify({
        ok: true,
        referenceNumber: referenceNumber,
        spreadsheetUrl: ss.getUrl(),
        driveFolderUrl: driveFolderUrl,
        filesSubfolderUrl: filesSubfolderUrl,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: String(err),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
