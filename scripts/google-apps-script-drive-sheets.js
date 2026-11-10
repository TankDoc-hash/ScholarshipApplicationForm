/**
 * ============================================================================
 * AKSHAR YOGA KENDRAA — BHARAT YOGA KRANTI
 * Google Apps Script: Folder Hierarchy Storage in Google Drive + Google Sheets
 * ============================================================================
 *
 * FOLDER STRUCTURE CREATED AUTOMATICALLY IN GOOGLE DRIVE:
 * Main Folder (Akshar_Yoga_Scholarship_Applications_2026)
 *   └── <Candidate Name - Reference Number>
 *         ├── application-details.txt   (Full human-readable form answers)
 *         ├── application-details.json  (Full structured JSON form answers)
 *         └── Files/
 *               ├── 01_PassportPhoto_...jpg
 *               ├── 02_GovID_...jpg
 *               ├── 03_Class10_...jpg
 *               └── ...
 *
 * HOW TO DEPLOY (100% FREE):
 * 1. Open your Google Sheet -> Extensions -> Apps Script
 * 2. Paste this entire script into Code.gs and click Save
 * 3. Click Deploy -> New deployment (Type: "Web app", Execute as: "Me", Who has access: "Anyone")
 * 4. Copy the Web App URL into `.env.local` as GOOGLE_SHEETS_APPLICATION_WEBHOOK_URL
 */

const SHEET_NAME = "CandidateApplications";
const ROOT_DRIVE_FOLDER_NAME = "Akshar_Yoga_Scholarship_Applications_2026";

function getOrCreateRootFolder() {
  const folders = DriveApp.getFoldersByName(ROOT_DRIVE_FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(ROOT_DRIVE_FOLDER_NAME);
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
    const candidateFolderName = `${app.fullName || payload.name || "Candidate"} - ${
      payload.referenceNumber || "AY-BYK"
    }`;
    const candidateFolder = rootFolder.createFolder(candidateFolderName);
    const filesSubfolder = candidateFolder.createFolder("Files");
    const driveFolderUrl = candidateFolder.getUrl();
    const filesSubfolderUrl = filesSubfolder.getUrl();

    // Save application-details.json inside Main Folder > Candidate Name
    const jsonString = JSON.stringify(
      {
        referenceNumber: payload.referenceNumber,
        submittedAt: payload.submittedAt,
        candidateName: app.fullName,
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
      `Reference Number: ${payload.referenceNumber}\nCandidate Name: ${app.fullName}\nSubmitted At: ${payload.submittedAt}\n\n${jsonString}`;
    const txtFile = candidateFolder.createFile(
      "application-details.txt",
      txtString,
      MimeType.PLAIN_TEXT
    );

    // Save all uploaded compressed files inside Main Folder > Candidate Name > Files
    function resolveDocColumn(key, label) {
      if (files[key] && files[key].dataUrl) {
        return saveBase64FileToFolder(filesSubfolder, files[key], label);
      }
      return `Status: ${(statuses[key] || "N/A").toUpperCase()}`;
    }

    const doc1Url = resolveDocColumn("passportPhoto", "01_PassportPhoto");
    const doc2Url = resolveDocColumn("govIdProof", "02_Aadhaar_GovID");
    const doc3Url = resolveDocColumn("class10Certificate", "03_Class10");
    const doc4Url = resolveDocColumn("additionalEducation", "04_HigherEdu");
    const doc5Url = resolveDocColumn("incomeEvidence", "05_IncomeProof");
    const doc6Url = resolveDocColumn("categoryDisabilityCert", "06_CategoryCert");
    const doc7Url = resolveDocColumn("nominationForm", "07_NominationForm");

    // =======================================================================
    // 2. LOG SUMMARY ROW IN GOOGLE SHEETS
    // =======================================================================
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    const headers = [
      "Submitted At",
      "Reference Number",
      "Candidate Drive Folder URL",
      "Files Subfolder URL",
      "application-details.txt URL",
      "application-details.json URL",
      "Full Name",
      "Date of Birth",
      "Age",
      "Indian Citizen",
      "Gender",
      "Mobile Number",
      "Alternative Contact",
      "Email",
      "Guardian Name & Relation",
      "Current Address",
      "Current PIN",
      "Permanent Address",
      "Village / Town / District / State",
      "Residence Classification",
      "Tribal Community",
      "Gov ID Type",
      "Aadhaar / Gov ID Number",
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
      "Monthly Income (INR)",
      "Can Attend Full 45-Day Course",
      "Leave / NOC Status",
      "Needs Support Assistance",
      "Support Assistance Details",
      "1. Passport Photo URL",
      "2. Aadhaar / Gov ID URL",
      "3. Class 10 Certificate URL",
      "4. Additional Education URL",
      "5. Income Evidence URL",
      "6. Category/Disability Cert URL",
      "7. Nomination Form URL",
      "Pending Documents Explanation",
      "Declaration Agreed",
      "Place / City",
      "Declaration Date",
      "Was Assisted",
      "Assisted Language",
      "Assistant Name & Contact",
      "Assistant Confirmed",
    ];

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }

    const eduSummary = Array.isArray(app.educationRows)
      ? app.educationRows
          .map(
            (r) =>
              `${r.level}: ${r.boardInstitution || "-"} (${
                r.yearOfPassing || "-"
              }) [${r.certificateStatus}]`
          )
          .join(" | ")
      : "";

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
      payload.referenceNumber || "",
      driveFolderUrl,
      filesSubfolderUrl,
      txtFile.getUrl(),
      jsonFile.getUrl(),
      app.fullName || "",
      app.dob || "",
      app.age || "",
      app.indianCitizen || "",
      app.gender === "Other or self-describe"
        ? `Other: ${app.genderSelfDescribe || ""}`
        : app.gender || "",
      app.mobileNumber || "",
      app.alternativeContact || "",
      app.email || "",
      app.guardianNameRelation || "",
      app.currentAddress || "",
      app.currentPinCode || "",
      app.permanentAddress || "",
      app.villageTownDistrictState || "",
      app.residenceClassification || "",
      app.tribalCommunity || "",
      app.govIdType || "",
      app.govIdNumber || "",
      eduSummary,
      app.languagesUnderstood || "",
      app.preferredInterviewLanguage || "",
      app.financialYear || "",
      app.totalAnnualFamilyIncome || "",
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
      doc1Url,
      doc2Url,
      doc3Url,
      doc4Url,
      doc5Url,
      doc6Url,
      doc7Url,
      app.pendingDocumentsExplanation || "",
      app.declarationAgreed ? "YES" : "NO",
      app.declarationPlace || "",
      app.declarationDate || "",
      app.wasAssisted ? "YES" : "NO",
      app.assistedLanguageUsed || "",
      app.assistantNameContact || "",
      app.assistantConfirmedCheckbox ? "YES" : "NO",
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        ok: true,
        referenceNumber: payload.referenceNumber,
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
