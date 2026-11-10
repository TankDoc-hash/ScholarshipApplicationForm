import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzNiP56qzCNSV5MfNIGWt0IDk0-Q0RmMzHN3e7oE3FOpyuVZ4csvCLIJm1RL4axBxXcqA/exec";

const FILE_FIELD_PREFIXES: Record<string, string> = {
  passportPhoto: "01_Passport_Photo",
  govIdProof: "02_Aadhaar_Gov_ID",
  class10Certificate: "03_Class10_Certificate",
  additionalEducation: "04_Additional_Education",
  incomeEvidence: "05_Income_Evidence",
  categoryDisabilityCert: "06_Category_Disability_Cert",
  nominationForm: "07_Nomination_Form",
};

function sanitizeFolderName(raw: string): string {
  return raw
    .trim()
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
    .replace(/\s+/g, " ");
}

function buildHumanReadableTxt(
  referenceNumber: string,
  submittedAt: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: Record<string, any>,
  savedFileNames: string[]
): string {
  const eduLines = Array.isArray(form.educationRows)
    ? form.educationRows
        .map(
          (
            r: {
              level: string;
              boardInstitution: string;
              yearOfPassing: string;
              certificateStatus: string;
            },
            i: number
          ) =>
            `  ${i + 1}. ${r.level}: ${r.boardInstitution || "N/A"} | Year: ${
              r.yearOfPassing || "N/A"
            } | Status: ${r.certificateStatus}`
        )
        .join("\n")
    : "  None";

  const incomeLines = Array.isArray(form.incomeSources)
    ? form.incomeSources
        .map(
          (
            s: {
              earnerName: string;
              relationship: string;
              annualAmount: string;
            },
            i: number
          ) =>
            `  ${i + 1}. ${s.earnerName || "N/A"} (${
              s.relationship || "N/A"
            }) — ₹${s.annualAmount || "0"}/year`
        )
        .join("\n")
    : "  None";

  return [
    "============================================================================",
    "AKSHAR YOGA KENDRAA — BHARAT YOGA KRANTI",
    "National Scholarship Programme for 1,500 Underprivileged Youth",
    "CANDIDATE APPLICATION RECORD",
    "============================================================================",
    `Reference Number : ${referenceNumber}`,
    `Submitted At     : ${submittedAt}`,
    "",
    "----------------------------------------------------------------------------",
    "PAGE 1: PERSONAL & EDUCATIONAL DETAILS",
    "----------------------------------------------------------------------------",
    `1. Full Name (as on Official ID) : ${form.fullName || ""}`,
    `2. Date of Birth                 : ${form.dob || ""}`,
    `3. Age at Application            : ${form.age || ""}`,
    `4. Indian Citizen                : ${form.indianCitizen || ""}`,
    `5. Gender                        : ${
      form.gender === "Other or self-describe"
        ? `Other (${form.genderSelfDescribe || ""})`
        : form.gender || ""
    }`,
    `6A. Primary Mobile / WhatsApp    : ${form.mobileNumber || ""}`,
    `6B. Alternative Contact          : ${form.alternativeContact || "N/A"}`,
    `7. Email Address                 : ${form.email || "N/A"}`,
    `8. Parent / Guardian / Spouse    : ${form.guardianNameRelation || ""}`,
    `9A. Current Address              : ${form.currentAddress || ""}`,
    `9B. Current PIN Code             : ${form.currentPinCode || ""}`,
    `10. Permanent Address            : ${form.permanentAddress || ""}`,
    `11. Village/Town, District, State: ${form.villageTownDistrictState || ""}`,
    `12. Residence Classification     : ${form.residenceClassification || ""}`,
    `13. Tribal Community             : ${form.tribalCommunity || "N/A"}`,
    `14A. Government ID Type          : ${form.govIdType || ""}`,
    `14B. Aadhaar / Gov ID Number     : ${form.govIdNumber || ""}`,
    "",
    "Educational Qualifications:",
    eduLines,
    `Languages Understood             : ${form.languagesUnderstood || ""}`,
    `Preferred Interview Language     : ${form.preferredInterviewLanguage || ""}`,
    "",
    "----------------------------------------------------------------------------",
    "PAGE 2: ECONOMIC CIRCUMSTANCES & AVAILABILITY",
    "----------------------------------------------------------------------------",
    `1. Financial Year Covered        : ${form.financialYear || ""}`,
    `2. Total Annual Family Income    : ₹${form.totalAnnualFamilyIncome || "0"}`,
    `3. Total Household Members       : ${form.totalHouseholdMembers || "N/A"}`,
    `4. Earning Members Count         : ${form.earningMembersCount || "N/A"}`,
    `5. Dependants Count              : ${form.dependantsCount || "N/A"}`,
    "6. Household Income Sources:",
    incomeLines,
    `7. Other Income / Pension        : ${form.otherIncomeSupportDetails || "N/A"}`,
    `8. Income Proof Types            : ${
      Array.isArray(form.incomeProofTypes)
        ? form.incomeProofTypes.join(", ")
        : "N/A"
    }`,
    `   - Issuing Authority           : ${form.incomeIssuingAuthority || "N/A"}`,
    `   - Issue Date / Validity       : ${form.incomeIssueDate || "N/A"}`,
    `   - Certificate Ref Number      : ${form.incomeCertRefNumber || "N/A"}`,
    `   - Material Income Change      : ${form.materialIncomeChangeDetails || "N/A"}`,
    `Priority & Relevant Circumstances: ${
      Array.isArray(form.priorityCircumstances)
        ? form.priorityCircumstances.join(", ") +
          (form.priorityCircumstanceOtherText
            ? ` (${form.priorityCircumstanceOtherText})`
            : "")
        : "N/A"
    }`,
    `Priority Category Claimed        : ${
      Array.isArray(form.priorityCategoryClaimed)
        ? form.priorityCategoryClaimed.join(", ")
        : "N/A"
    }`,
    `Priority Evidence Status         : ${form.priorityEvidenceStatus || "N/A"}`,
    `Present Status                   : ${form.presentEmploymentStatus || ""}`,
    `Personal Monthly Income (₹)      : ${form.monthlyIncome || "0"}`,
    `Can Attend Complete 45-Day Course: ${form.canAttendCompleteCourse || ""}`,
    `Leave / NOC Status               : ${form.leaveNocStatus || "N/A"}`,
    `Needs Mobility/Learning Support  : ${form.needsSupportAssistance || "No"}`,
    `Support Details                  : ${
      form.supportAssistanceDescription || "N/A"
    }`,
    "",
    "----------------------------------------------------------------------------",
    "PAGE 3: DOCUMENT CHECKLIST & UPLOADED FILES",
    "----------------------------------------------------------------------------",
    `Document Statuses                : ${JSON.stringify(
      form.docStatuses || {},
      null,
      2
    )}`,
    `Pending Documents Explanation    : ${
      form.pendingDocumentsExplanation || "None"
    }`,
    `Saved Compressed Files in /Files : ${
      savedFileNames.length > 0 ? savedFileNames.join(", ") : "None attached"
    }`,
    "",
    "----------------------------------------------------------------------------",
    "PAGE 4: DECLARATIONS & SUBMISSION",
    "----------------------------------------------------------------------------",
    `Applicant Declaration Agreed     : ${form.declarationAgreed ? "YES" : "NO"}`,
    `Place / City                     : ${form.declarationPlace || ""}`,
    `Date                             : ${form.declarationDate || ""}`,
    `Was Assisted                     : ${form.wasAssisted ? "YES" : "NO"}`,
    ...(form.wasAssisted
      ? [
          `Assisted Language Used           : ${form.assistedLanguageUsed || ""}`,
          `Assistant Name & Contact         : ${form.assistantNameContact || ""}`,
          `Assistant Confirmed              : ${
            form.assistantConfirmedCheckbox ? "YES" : "NO"
          }`,
        ]
      : []),
    "============================================================================",
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { form, files } = body;

    if (!form || !form.fullName || !form.mobileNumber) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Applicant Full Name and Mobile Number are required to submit the application.",
        },
        { status: 400 }
      );
    }

    const referenceNumber = `AY-BYK-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;
    const submittedAt = new Date().toISOString();

    // =========================================================================
    // 1. LOCAL FOLDER STRUCTURE:
    //    Main Folder (Scholarship_Applications_Data)
    //      └── <Candidate Name - ReferenceNumber>
    //            ├── application-details.txt
    //            ├── application-details.json
    //            └── Files/
    //                  ├── 01_Passport_Photo_...jpg
    //                  ├── 02_Aadhaar_Gov_ID_...jpg
    //                  └── ...
    // =========================================================================
    let localCandidateFolderPath: string | null = null;
    const savedFileNames: string[] = [];

    try {
      const mainFolderPath = path.join(
        process.cwd(),
        "Scholarship_Applications_Data"
      );
      const candidateFolderName = sanitizeFolderName(
        `${form.fullName} - ${referenceNumber}`
      );
      const candidateFolderPath = path.join(
        mainFolderPath,
        candidateFolderName
      );
      const filesSubfolderPath = path.join(candidateFolderPath, "Files");

      await fs.mkdir(filesSubfolderPath, { recursive: true });
      localCandidateFolderPath = candidateFolderPath;

      // Save each compressed uploaded file inside Main Folder > Candidate Name > Files/
      if (files && typeof files === "object") {
        for (const [fieldKey, fileObj] of Object.entries(files)) {
          const typedFile = fileObj as {
            fileName?: string;
            dataUrl?: string;
          } | null;
          if (typedFile && typedFile.dataUrl) {
            const parts = String(typedFile.dataUrl).split(",");
            if (parts.length >= 2) {
              const buffer = Buffer.from(parts[1], "base64");
              const prefix = FILE_FIELD_PREFIXES[fieldKey] || fieldKey;
              const safeFileName = sanitizeFolderName(
                `${prefix}_${typedFile.fileName || "document.jpg"}`
              );
              const targetFilePath = path.join(
                filesSubfolderPath,
                safeFileName
              );
              await fs.writeFile(targetFilePath, buffer);
              savedFileNames.push(safeFileName);
            }
          }
        }
      }

      // Save structured JSON & human-readable TXT in Main Folder > Candidate Name/
      const jsonRecord = {
        referenceNumber,
        submittedAt,
        candidateName: form.fullName,
        mobileNumber: form.mobileNumber,
        aadhaarOrGovIdType: form.govIdType,
        aadhaarOrGovIdNumber: form.govIdNumber,
        savedFilesInFilesFolder: savedFileNames,
        formDetails: form,
      };

      const txtContent = buildHumanReadableTxt(
        referenceNumber,
        submittedAt,
        form,
        savedFileNames
      );

      await fs.writeFile(
        path.join(candidateFolderPath, "application-details.json"),
        JSON.stringify(jsonRecord, null, 2),
        "utf-8"
      );
      await fs.writeFile(
        path.join(candidateFolderPath, "application-details.txt"),
        txtContent,
        "utf-8"
      );
    } catch (fsErr) {
      console.warn(
        "Local folder creation skipped (e.g., read-only serverless environment):",
        fsErr
      );
    }

    // =========================================================================
    // 2. GOOGLE DRIVE + GOOGLE SHEETS WEBHOOK SYNC
    //    Also creates: Main Folder > Candidate Name > Files (plus .txt & .json) in Google Drive
    // =========================================================================
    const webhookUrl =
      process.env.GOOGLE_SHEETS_APPLICATION_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL;

    let googleSheetsSynced = false;
    let driveFolderUrl: string | null = null;

    if (webhookUrl) {
      try {
        const txtContentForDrive = buildHumanReadableTxt(
          referenceNumber,
          submittedAt,
          form,
          savedFileNames
        );

        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          body: JSON.stringify({
            formType: "CANDIDATE_DETAILED_APPLICATION_4PAGE",
            referenceNumber,
            submittedAt,
            name: form.fullName,
            age: form.age,
            stateCity: form.villageTownDistrictState,
            phone: form.mobileNumber,
            email: form.email,
            education: Array.isArray(form.educationRows)
              ? form.educationRows
                  .map(
                    (r: {
                      level: string;
                      boardInstitution: string;
                      yearOfPassing: string;
                      certificateStatus: string;
                    }) =>
                      `${r.level}: ${r.boardInstitution || "N/A"} (${
                        r.yearOfPassing || "-"
                      }) [${r.certificateStatus}]`
                  )
                  .join(" | ")
              : "",
            income: `₹${form.totalAnnualFamilyIncome} (FY ${form.financialYear})`,
            motivation: `Present Status: ${
              form.presentEmploymentStatus || "-"
            } | Course Availability: ${form.canAttendCompleteCourse || "Yes"}`,
            consent: Boolean(form.declarationAgreed),
            applicationData: form,
            applicationTxtReport: txtContentForDrive,
            compressedFiles: files || {},
          }),
        });

        if (res.ok) {
          googleSheetsSynced = true;
          const resJson = await res.json().catch(() => null);
          if (resJson?.driveFolderUrl) {
            driveFolderUrl = resJson.driveFolderUrl;
          }
        }
      } catch (err) {
        console.error("Google Sheets & Drive webhook sync error:", err);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        referenceNumber,
        submittedAt,
        localCandidateFolderPath,
        savedFileNames,
        googleSheetsSynced,
        driveFolderUrl,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Application submission error:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Unable to process your application right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
