export type LanguageCode = "en" | "kn" | "hi" | "ta" | "te" | "mr";

export interface LanguageOption {
  code: LanguageCode;
  shortCode: string;
  mobileLabel: string;
  nativeLabel: string;
  englishLabel: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: "en",
    shortCode: "EN",
    mobileLabel: "EN - English",
    nativeLabel: "English",
    englishLabel: "English",
  },
  {
    code: "kn",
    shortCode: "Kn",
    mobileLabel: "Kn - Kannada",
    nativeLabel: "ಕನ್ನಡ",
    englishLabel: "Kannada",
  },
  {
    code: "hi",
    shortCode: "Hin",
    mobileLabel: "Hin - Hindi",
    nativeLabel: "हिन्दी",
    englishLabel: "Hindi",
  },
  {
    code: "mr",
    shortCode: "Mar",
    mobileLabel: "Mar - Marathi",
    nativeLabel: "मराठी",
    englishLabel: "Marathi",
  },
  {
    code: "ta",
    shortCode: "Tm",
    mobileLabel: "Tm - Tamil",
    nativeLabel: "தமிழ்",
    englishLabel: "Tamil",
  },
  {
    code: "te",
    shortCode: "Tl",
    mobileLabel: "Tl - Telugu",
    nativeLabel: "తెలుగు",
    englishLabel: "Telugu",
  },
];

export const CONTACT_INFO = {
  phoneRaw: "9180859064",
  phoneFormatted: "+91 91808 59064",
  telHref: "tel:+919180859064",
  whatsappHref:
    "https://wa.me/919180859064?text=Namaste%2C%20I%20would%20like%20to%20enquire%20about%20the%2045-Day%20Residential%20Yoga%20Teacher%20Training%20Certification%20(TTC)%20Scholarship.",
};

export interface WizardUITranslations {
  topBanner: string;
  topBannerBadge: string;
  programmeSubtitle: string;
  saveDraft: string;
  draftSaved: string;
  clearDraft: string;
  stepLabel: string;
  ofLabel: string;
  nextButton: string;
  prevButton: string;
  submitApplicationButton: string;
  submittingButton: string;
  requiredNote: string;
  compressionBadge: string;
  jumpToField: string;
  optionalTag: string;
  yes: string;
  no: string;
  attached: string;
  pending: string;
  notApplicable: string;
  attachFile: string;
  steps: {
    page1Short: string;
    page2Short: string;
    page3Short: string;
    page4Short: string;
  };
  page1: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec1Desc: string;
    sec2Title: string;
    sec2Desc: string;
    fullName: string;
    dob: string;
    age: string;
    indianCitizen: string;
    gender: string;
    genderOptions: {
      woman: string;
      man: string;
      other: string;
      preferNot: string;
    };
    mobileNumber: string;
    alternativeContact: string;
    email: string;
    guardianNameRelation: string;
    currentAddress: string;
    currentPinCode: string;
    permanentAddress: string;
    sameAsCurrentAddress: string;
    villageTownDistrictState: string;
    residenceClassification: string;
    rural: string;
    urban: string;
    tribalCommunity: string;
    govIdType: string;
    aadhaarNumber: string;
    govIdNumber: string;
    addQualificationRow: string;
    qualLevelCol: string;
    boardCol: string;
    yearCol: string;
    certStatusCol: string;
    languagesUnderstood: string;
    preferredInterviewLanguage: string;
  };
  page2: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec2Title: string;
    sec3Title: string;
    sec4Title: string;
    financialYear: string;
    totalAnnualFamilyIncome: string;
    householdMembers: string;
    earningMembers: string;
    dependantsCount: string;
    incomeSourcesTable: string;
    addIncomeSource: string;
    earnerNameCol: string;
    relationshipCol: string;
    annualAmountCol: string;
    otherIncomeSupport: string;
    incomeProofType: string;
    issuingAuthority: string;
    issueDateValidity: string;
    certRefNumber: string;
    materialIncomeChange: string;
    relevantCircumstances: string;
    priorityCategoryClaimed: string;
    priorityEvidenceStatus: string;
    presentStatus: string;
    monthlyIncome: string;
    canAttendCourse: string;
    needToDiscussSupport: string;
    leaveNocStatus: string;
    needsSupportQuestion: string;
    describeSupportNeeded: string;
  };
  page3: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec1Desc: string;
    dropzoneClickOrDrag: string;
    dropzoneFormats: string;
    pendingDocIdentify: string;
    docs: {
      passportPhotoTitle: string;
      passportPhotoSub: string;
      govIdProofTitle: string;
      govIdProofSub: string;
      class10Title: string;
      class10Sub: string;
      additionalEduTitle: string;
      additionalEduSub: string;
      incomeEvidenceTitle: string;
      incomeEvidenceSub: string;
      categoryCertTitle: string;
      categoryCertSub: string;
      nominationFormTitle: string;
      nominationFormSub: string;
    };
  };
  page4: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec2Title: string;
    declarationHeading: string;
    declarationText: string;
    agreeCheckboxLabel: string;
    placeCity: string;
    dateLabel: string;
    wasAssistedQuestion: string;
    assistedLanguageUsed: string;
    assistantNameContact: string;
    assistantConfirmCheckbox: string;
  };
}

export const WIZARD_TRANSLATIONS: Record<LanguageCode, WizardUITranslations> = {
  en: {
    topBanner:
      "Bharat Yoga Kranti — Official Candidate Scholarship Application Portal",
    topBannerBadge: "100% Free Residential TTC",
    programmeSubtitle:
      "National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa",
    saveDraft: "Save Draft",
    draftSaved: "Draft Auto-Saved",
    clearDraft: "Reset Form",
    stepLabel: "Page",
    ofLabel: "of",
    nextButton: "Save & Continue to Next Page",
    prevButton: "Previous Page",
    submitApplicationButton: "Submit Official Scholarship Application",
    submittingButton: "Compressing & Submitting Application...",
    requiredNote:
      "Fields marked with * are mandatory for scholarship verification.",
    compressionBadge: "Auto-Compressed for Fast Upload",
    jumpToField: "Jump to field →",
    optionalTag: "(Optional)",
    yes: "Yes",
    no: "No",
    attached: "Attached",
    pending: "Pending",
    notApplicable: "Not Applicable",
    attachFile: "Attach File",
    steps: {
      page1Short: "1. Personal & Education",
      page2Short: "2. Circumstances & Status",
      page3Short: "3. Document Checklist",
      page4Short: "4. Declaration & Submit",
    },
    page1: {
      title: "Candidate Application — Personal and Education Details",
      subtitle:
        "National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa",
      sec1Title: "Section 1: Applicant Details",
      sec1Desc:
        "Please enter your personal details exactly as they appear on your Aadhaar Card or official government identity card.",
      sec2Title: "Section 2: Educational Qualifications",
      sec2Desc:
        "Provide details of your academic background and language proficiency.",
      fullName: "1. Full Name (as on Aadhaar / Official ID)",
      dob: "2. Date of Birth (DD/MM/YYYY)",
      age: "3. Age at Application (Years)",
      indianCitizen: "4. Indian Citizen?",
      gender: "5. Gender",
      genderOptions: {
        woman: "Woman",
        man: "Man",
        other: "Other or self-describe",
        preferNot: "Prefer not to say",
      },
      mobileNumber: "6A. Primary Mobile / WhatsApp Number",
      alternativeContact: "6B. Alternative Contact Number",
      email: "7. Email Address",
      guardianNameRelation: "8. Parent / Guardian / Spouse Name & Relationship",
      currentAddress: "9A. Current Residential Address",
      currentPinCode: "9B. Current PIN Code",
      permanentAddress: "10. Permanent Address",
      sameAsCurrentAddress: "Same as Current Address",
      villageTownDistrictState: "11. Village / Town, District, and State",
      residenceClassification: "12. Residence Classification",
      rural: "Rural",
      urban: "Urban",
      tribalCommunity: "13. Tribal Community (if claimed)",
      govIdType: "14A. Government ID Type",
      aadhaarNumber: "14B. Aadhaar Number (12 Digits)",
      govIdNumber: "14B. Government ID Number",
      addQualificationRow: "Add Qualification Row",
      qualLevelCol: "Qualification Level",
      boardCol: "Board / Institution",
      yearCol: "Year of Passing",
      certStatusCol: "Certificate Status",
      languagesUnderstood: "Languages Understood (Speak / Read / Write)",
      preferredInterviewLanguage: "Preferred Interview Language",
    },
    page2: {
      title: "Candidate Application — Economic & Personal Circumstances",
      subtitle:
        "National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa",
      sec1Title: "Section 1: Economic Circumstances",
      sec2Title: "Section 2: Priority & Relevant Circumstances",
      sec3Title: "Section 3: Present Status and Availability",
      sec4Title: "Section 4: Support & Accessibility Requirements",
      financialYear: "1. Financial Year Covered",
      totalAnnualFamilyIncome: "2. Total Annual Family Income (₹)",
      householdMembers: "3. Household Members",
      earningMembers: "4. Earning Members",
      dependantsCount: "5. Dependants Count",
      incomeSourcesTable: "6. Household Income Sources Table",
      addIncomeSource: "Add Income Earner / Source",
      earnerNameCol: "Earner / Source Name",
      relationshipCol: "Relationship to Applicant",
      annualAmountCol: "Annual Amount (₹)",
      otherIncomeSupport: "7. Other Income, Pension, or Support Details (if any)",
      incomeProofType: "8. Income Proof Type (Select all that apply)",
      issuingAuthority: "Issuing Authority",
      issueDateValidity: "Issue Date / Validity",
      certRefNumber: "Certificate Reference Number",
      materialIncomeChange: "Material Current Income Change",
      relevantCircumstances:
        "Relevant Household & Personal Circumstances (Select all that apply)",
      priorityCategoryClaimed: "Priority Category Claimed (if applicable)",
      priorityEvidenceStatus: "Priority / Category Evidence Status",
      presentStatus: "1. Present Status",
      monthlyIncome: "2. Personal Monthly Income (₹) (if any)",
      canAttendCourse: "3. Can you attend the full 45-day course?",
      needToDiscussSupport: "Need to discuss support",
      leaveNocStatus: "4. Leave / NOC Status (if employed)",
      needsSupportQuestion:
        "Do you need assistance for mobility, reading, hearing, language, learning, or residential access?",
      describeSupportNeeded:
        "Please describe the support needed (No medical diagnosis required)",
    },
    page3: {
      title: "Candidate Application — Document Uploads & Checklist",
      subtitle:
        "Upload clear photos or PDFs (.jpg, .png, .pdf up to 5 MB). Images are automatically compressed for low bandwidth.",
      sec1Title: "Official Verification Documents & Checklist",
      sec1Desc:
        "Upload each document below or mark as 'Pending / Not Applicable' if you will submit it prior to verification.",
      dropzoneClickOrDrag: "Click to select or drag & drop file here",
      dropzoneFormats:
        "Allowed: .JPG, .PNG, .PDF (Max 5 MB) · Photos are auto-compressed",
      pendingDocIdentify:
        "Identify Pending Document(s) and Expected Date of Submission",
      docs: {
        passportPhotoTitle: "Recent Identification Photograph (Passport size)",
        passportPhotoSub:
          "Clear front-facing passport photograph (.jpg, .png; auto-compressed)",
        govIdProofTitle: "Aadhaar Card / Government ID Proof of Address & Age",
        govIdProofSub:
          "Aadhaar Card, Voter ID, Driving Licence, or Passport (.pdf, .jpg, .png)",
        class10Title: "Class 10 / Equivalent Certificate & Marks Sheet",
        class10Sub: "Official board marks sheet or passing certificate",
        additionalEduTitle:
          "Additional Course / Highest Educational Evidence",
        additionalEduSub:
          "Class 12, Diploma, Degree, or prior Yoga Training certificate",
        incomeEvidenceTitle:
          "Income Evidence (Income Certificate / BPL Card / AAY Card)",
        incomeEvidenceSub:
          "Valid family income certificate, Ration/BPL/AAY card, or provisional evidence",
        categoryCertTitle:
          "Category / Caste / Disability Certificate (if claimed)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / Disability certificate if claimed on Page 2",
        nominationFormTitle:
          "Nomination Form (if applying through an organization)",
        nominationFormSub:
          "Endorsement or nomination letter from partner NGO / institution",
      },
    },
    page4: {
      title: "Candidate Application — Declarations & Submission",
      subtitle:
        "Review and confirm the official candidate declaration to complete your scholarship application.",
      sec1Title: "Section 1: Applicant Declaration",
      sec2Title: "Section 2: Assisted Application Details (Optional)",
      declarationHeading:
        "Official Candidate Declaration — Akshar Yoga Kendraa",
      declarationText:
        "I apply for a scholarship under the National Scholarship Programme for 1,500 Underprivileged Youth of Akshar Yoga Kendraa. I confirm that the information and copies submitted are true to the best of my knowledge and accurately represent my identity, educational qualifications, and annual household income. I understand that submission of this application does not guarantee automatic selection, that all particulars are subject to institutional verification, and that any false or misleading information may result in cancellation of my application or scholarship at any stage. If selected, I commit to attending the full 45-day residential training in Bengaluru and abiding by the code of conduct of Akshar Yoga Kendraa.",
      agreeCheckboxLabel:
        "I have read and agree to the above Applicant Declaration, confirm that all information and documents submitted are true, and consent to application verification.",
      placeCity: "Place / City",
      dateLabel: "Date",
      wasAssistedQuestion: "Did someone assist you in filling out this form?",
      assistedLanguageUsed: "Language used to explain the form",
      assistantNameContact: "Assistant Name and Contact Number",
      assistantConfirmCheckbox:
        "I confirm that I have accurately explained the contents of this application form to the candidate in their understood language and recorded their responses truthfully.",
    },
  },

  kn: {
    topBanner: "ಭಾರತ್ ಯೋಗ ಕ್ರಾಂತಿ — ಅಧಿಕೃತ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ಪೋರ್ಟಲ್",
    topBannerBadge: "100% ಉಚಿತ ವಸತಿ TTC",
    programmeSubtitle:
      "1,500 ಅರ್ಹ ಯುವಜನರಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮ | ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
    saveDraft: "ಡ್ರಾಫ್ಟ್ ಉಳಿಸಿ",
    draftSaved: "ಡ್ರಾಫ್ಟ್ ಸ್ವಯಂ ಉಳಿಸಲಾಗಿದೆ",
    clearDraft: "ಮರುಹೊಂದಿಸಿ",
    stepLabel: "ಪುಟ",
    ofLabel: "/",
    nextButton: "ಉಳಿಸಿ ಮತ್ತು ಮುಂದಿನ ಪುಟಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ",
    prevButton: "ಹಿಂದಿನ ಪುಟ",
    submitApplicationButton: "ಅಧಿಕೃತ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಿ",
    submittingButton: "ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
    requiredNote: "* ಗುರುತು ಮಾಡಿರುವ ವಿವರಗಳು ಕಡ್ಡಾಯವಾಗಿವೆ.",
    compressionBadge: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಂಪ್ರೆಸ್ ಮಾಡಲಾಗಿದೆ",
    jumpToField: "ಕ್ಷೇತ್ರಕ್ಕೆ ತೆರಳಿ →",
    optionalTag: "(ಐಚ್ಛಿಕ)",
    yes: "ಹೌದು",
    no: "ಇಲ್ಲ",
    attached: "ಲಗತ್ತಿಸಲಾಗಿದೆ",
    pending: "ಬಾಕಿ ಇದೆ (Pending)",
    notApplicable: "ಅನ್ವಯಿಸುವುದಿಲ್ಲ (N/A)",
    attachFile: "ಫೈಲ್ ಲಗತ್ತಿಸಿ",
    steps: {
      page1Short: "1. ವೈಯಕ್ತಿಕ ಮತ್ತು ಶಿಕ್ಷಣ",
      page2Short: "2. ಆರ್ಥಿಕ ಮತ್ತು ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
      page3Short: "3. ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್",
      page4Short: "4. ಘೋಷಣೆ ಮತ್ತು ಸಲ್ಲಿಕೆ",
    },
    page1: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ವೈಯಕ್ತಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಿವರಗಳು",
      subtitle:
        "1,500 ಅರ್ಹ ಯುವಜನರಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮ | ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
      sec1Title: "ವಿಭಾಗ 1: ಅರ್ಜಿದಾರರ ವಿವರಗಳು",
      sec1Desc:
        "ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್ ಅಥವಾ ಅಧಿಕೃತ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿರುವಂತೆ ನಿಖರವಾದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
      sec2Title: "ವಿಭಾಗ 2: ಶೈಕ್ಷಣಿಕ ವಿದ್ಯಾರ್ಹತೆಗಳು",
      sec2Desc: "ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಹಿನ್ನೆಲೆ ಮತ್ತು ಭಾಷಾ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.",
      fullName: "1. ಪೂರ್ಣ ಹೆಸರು (ಆಧಾರ್ / ಅಧಿಕೃತ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿರುವಂತೆ)",
      dob: "2. ಜನ್ಮ ದಿನಾಂಕ (DD/MM/YYYY)",
      age: "3. ಅರ್ಜಿಯ ಸಮಯದಲ್ಲಿ ವಯಸ್ಸು (ವರ್ಷಗಳು)",
      indianCitizen: "4. ಭಾರತೀಯ ಪ್ರಜೆಯೇ?",
      gender: "5. ಲಿಂಗ",
      genderOptions: {
        woman: "ಮಹಿಳೆ",
        man: "ಪುರುಷ",
        other: "ಇತರೆ / ಸ್ವಯಂ ವಿವರಿಸಿ",
        preferNot: "ಹೇಳಲು ಇಚ್ಛಿಸುವುದಿಲ್ಲ",
      },
      mobileNumber: "6A. ಪ್ರಾಥಮಿಕ ಮೊಬೈಲ್ / ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
      alternativeContact: "6B. ಪರ್ಯಾಯ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
      email: "7. ಇಮೇಲ್ ವಿಳಾಸ",
      guardianNameRelation: "8. ತಂದೆ / ತಾಯಿ / ಪೋಷಕರ / ಪತಿ-ಪತ್ನಿಯ ಹೆಸರು ಮತ್ತು ಸಂಬಂಧ",
      currentAddress: "9A. ಪ್ರಸ್ತುತ ವಾಸದ ವಿಳಾಸ",
      currentPinCode: "9B. ಪ್ರಸ್ತುತ ಪಿನ್ ಕೋಡ್ (PIN Code)",
      permanentAddress: "10. ಕಾಯಂ ವಿಳಾಸ",
      sameAsCurrentAddress: "ಪ್ರಸ್ತುತ ವಿಳಾಸದಂತೆಯೇ ಇದೆ",
      villageTownDistrictState: "11. ಗ್ರಾಮ / ಪಟ್ಟಣ, ಜಿಲ್ಲೆ ಮತ್ತು ರಾಜ್ಯ",
      residenceClassification: "12. ವಾಸಸ್ಥಳದ ವರ್ಗೀಕರಣ",
      rural: "ಗ್ರಾಮೀಣ (Rural)",
      urban: "ನಗರ (Urban)",
      tribalCommunity: "13. ಬುಡಕಟ್ಟು ಸಮುದಾಯ (ಅನ್ವಯಿಸಿದರೆ)",
      govIdType: "14A. ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿಯ ಪ್ರಕಾರ",
      aadhaarNumber: "14B. ಆಧಾರ್ ಸಂಖ್ಯೆ (12 ಅಂಕಿಗಳು)",
      govIdNumber: "14B. ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ ಸಂಖ್ಯೆ",
      addQualificationRow: "ಮತ್ತೊಂದು ವಿದ್ಯಾರ್ಹತೆ ಸೇರಿಸಿ",
      qualLevelCol: "ವಿದ್ಯಾರ್ಹತೆಯ ಹಂತ",
      boardCol: "ಮಂಡಳಿ / ಸಂಸ್ಥೆ",
      yearCol: "ಉತ್ತೀರ್ಣರಾದ ವರ್ಷ",
      certStatusCol: "ಪ್ರಮಾಣಪತ್ರದ ಸ್ಥಿತಿ",
      languagesUnderstood: "ಅರ್ಥವಾಗುವ ಭಾಷೆಗಳು (ಮಾತನಾಡಲು / ಓದಲು / ಬರೆಯಲು)",
      preferredInterviewLanguage: "ಸಂದರ್ಶನಕ್ಕೆ ಆದ್ಯತೆಯ ಭಾಷೆ",
    },
    page2: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ಆರ್ಥಿಕ ಮತ್ತು ವೈಯಕ್ತಿಕ ಪರಿಸ್ಥಿತಿಗಳು",
      subtitle:
        "1,500 ಅರ್ಹ ಯುವಜನರಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮ | ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
      sec1Title: "ವಿಭಾಗ 1: ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಕುಟುಂಬದ ಆದಾಯ",
      sec2Title: "ವಿಭಾಗ 2: ಆದ್ಯತೆ ಮತ್ತು ಸಂಬಂಧಿತ ಪರಿಸ್ಥಿತಿಗಳು",
      sec3Title: "ವಿಭಾಗ 3: ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಮತ್ತು ಲಭ್ಯತೆ",
      sec4Title: "ವಿಭಾಗ 4: ಬೆಂಬಲ ಮತ್ತು ವಿಶೇಷ ಸೌಲಭ್ಯದ ಅಗತ್ಯತೆಗಳು",
      financialYear: "1. ಆರ್ಥಿಕ ವರ್ಷ",
      totalAnnualFamilyIncome: "2. ಕುಟುಂಬದ ಒಟ್ಟು ವಾರ್ಷಿಕ ಆದಾಯ (₹)",
      householdMembers: "3. ಕುಟುಂಬದ ಒಟ್ಟು ಸದಸ್ಯರು",
      earningMembers: "4. ದುಡಿಯುವ ಸದಸ್ಯರ ಸಂಖ್ಯೆ",
      dependantsCount: "5. ಅವಲಂಬಿತರ ಸಂಖ್ಯೆ",
      incomeSourcesTable: "6. ಕುಟುಂಬದ ಆದಾಯ ಮೂಲಗಳ ಕೋಷ್ಟಕ",
      addIncomeSource: "ಆದಾಯ ಮೂಲವನ್ನು ಸೇರಿಸಿ",
      earnerNameCol: "ದುಡಿಯುವವರ / ಮೂಲದ ಹೆಸರು",
      relationshipCol: "ಅರ್ಜಿದಾರರೊಂದಿಗೆ ಸಂಬಂಧ",
      annualAmountCol: "ವಾರ್ಷಿಕ ಮೊತ್ತ (₹)",
      otherIncomeSupport: "7. ಇತರೆ ಆದಾಯ, ಪಿಂಚಣಿ ಅಥವಾ ಬೆಂಬಲದ ವಿವರಗಳು (ಇದ್ದಲ್ಲಿ)",
      incomeProofType: "8. ಆದಾಯ ಪುರಾವೆಯ ಪ್ರಕಾರ (ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ)",
      issuingAuthority: "ನೀಡಿದ ಪ್ರಾಧಿಕಾರ",
      issueDateValidity: "ನೀಡಿದ ದಿನಾಂಕ / ಮಾನ್ಯತೆ",
      certRefNumber: "ಪ್ರಮಾಣಪತ್ರದ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ",
      materialIncomeChange: "ಪ್ರಸ್ತುತ ಆದಾಯದಲ್ಲಿನ ಪ್ರಮುಖ ಬದಲಾವಣೆ",
      relevantCircumstances:
        "ಸಂಬಂಧಿತ ಕೌಟುಂಬಿಕ ಮತ್ತು ವೈಯಕ್ತಿಕ ಪರಿಸ್ಥಿತಿಗಳು (ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ)",
      priorityCategoryClaimed: "ಆದ್ಯತೆಯ ವರ್ಗ (ಅನ್ವಯಿಸಿದರೆ)",
      priorityEvidenceStatus: "ಆದ್ಯತೆ / ವರ್ಗ ಪ್ರಮಾಣಪತ್ರದ ಸ್ಥಿತಿ",
      presentStatus: "1. ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
      monthlyIncome: "2. ವೈಯಕ್ತಿಕ ಮಾಸಿಕ ಆದಾಯ (₹) (ಇದ್ದಲ್ಲಿ)",
      canAttendCourse: "3. ನೀವು ಪೂರ್ಣ 45 ದಿನಗಳ ತರಬೇತಿಗೆ ಹಾಜರಾಗಬಹುದೇ?",
      needToDiscussSupport: "ಬೆಂಬಲದ ಬಗ್ಗೆ ಚರ್ಚಿಸಬೇಕು",
      leaveNocStatus: "4. ರಜೆ / NOC ಸ್ಥಿತಿ (ಉದ್ಯೋಗದಲ್ಲಿದ್ದರೆ)",
      needsSupportQuestion:
        "ಚಲನವಲನ, ಓದುವುದು, ಶ್ರವಣ, ಭಾಷೆ, ಕಲಿಕೆ ಅಥವಾ ವಸತಿ ಪ್ರವೇಶಕ್ಕಾಗಿ ನಿಮಗೆ ವಿಶೇಷ ಸಹಾಯದ ಅಗತ್ಯವಿದೆಯೇ?",
      describeSupportNeeded:
        "ದಯವಿಟ್ಟು ಅಗತ್ಯವಿರುವ ಸಹಾಯವನ್ನು ವಿವರಿಸಿ (ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯದ ಅಗತ್ಯವಿಲ್ಲ)",
    },
    page3: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್ ಮತ್ತು ಪರಿಶೀಲನಾಪಟ್ಟಿ",
      subtitle:
        "ಸ್ಪಷ್ಟವಾದ ಫೋಟೋ ಅಥವಾ PDF ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (.jpg, .png, .pdf ಗರಿಷ್ಠ 5 MB). ಫೋಟೋಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಂಪ್ರೆಸ್ ಮಾಡಲಾಗುತ್ತದೆ.",
      sec1Title: "ಅಧಿಕೃತ ಪರಿಶೀಲನಾ ದಾಖಲೆಗಳು ಮತ್ತು ಪಟ್ಟಿ",
      sec1Desc:
        "ಪ್ರತಿ ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ 'ಬಾಕಿ ಇದೆ (Pending) / ಅನ್ವಯಿಸುವುದಿಲ್ಲ' ಎಂದು ಗುರುತಿಸಿ.",
      dropzoneClickOrDrag: "ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಡ್ರ್ಯಾಗ್ ಮಾಡಿ",
      dropzoneFormats:
        "ಅನುಮತಿಸಲಾದ ಫೈಲ್: .JPG, .PNG, .PDF (ಗರಿಷ್ಠ 5 MB) · ಫೋಟೋ ಆಟೋ-ಕಂಪ್ರೆಸ್ ಆಗುತ್ತದೆ",
      pendingDocIdentify:
        "ಬಾಕಿ ಇರುವ ದಾಖಲೆ(ಗಳು) ಮತ್ತು ಸಲ್ಲಿಸುವ ನಿರೀಕ್ಷಿತ ದಿನಾಂಕವನ್ನು ನಮೂದಿಸಿ",
      docs: {
        passportPhotoTitle: "ಇತ್ತೀಚಿನ ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಭಾವಚಿತ್ರ",
        passportPhotoSub:
          "ಮುಂಭಾಗದಿಂದ ತೆಗೆದ ಸ್ಪಷ್ಟವಾದ ಪಾಸ್‌ಪೋರ್ಟ್ ಫೋಟೋ (.jpg, .png)",
        govIdProofTitle: "ಆಧಾರ್ ಕಾರ್ಡ್ / ವಿಳಾಸ ಮತ್ತು ವಯಸ್ಸಿನ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ",
        govIdProofSub:
          "ಆಧಾರ್ ಕಾರ್ಡ್, ವೋಟರ್ ಐಡಿ, ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ಅಥವಾ ಪಾಸ್‌ಪೋರ್ಟ್ (.pdf, .jpg, .png)",
        class10Title: "10ನೇ ತರಗತಿ (SSLC) ಅಥವಾ ತತ್ಸಮಾನ ಅಂಕಪಟ್ಟಿ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರ",
        class10Sub: "ಅಧಿಕೃತ ಮಂಡಳಿಯ ಅಂಕಪಟ್ಟಿ ಅಥವಾ ಉತ್ತೀರ್ಣ ಪ್ರಮಾಣಪತ್ರ",
        additionalEduTitle: "ಹೆಚ್ಚುವರಿ ಕೋರ್ಸ್ / ಗರಿಷ್ಠ ವಿದ್ಯಾರ್ಹತೆಯ ದಾಖಲೆ",
        additionalEduSub:
          "12ನೇ ತರಗತಿ / PUC, ಡಿಪ್ಲೊಮಾ, ಪದವಿ ಅಥವಾ ಯೋಗ ತರಬೇತಿ ಪ್ರಮಾಣಪತ್ರ",
        incomeEvidenceTitle:
          "ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (Income Certificate / BPL ಕಾರ್ಡ್ / AAY ಕಾರ್ಡ್)",
        incomeEvidenceSub:
          "ಮಾನ್ಯವಾದ ಕುಟುಂಬದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ, BPL/AAY ಪಡಿತರ ಚೀಟಿ",
        categoryCertTitle:
          "ಜಾತಿ / ವರ್ಗ / ಅಂಗವಿಕಲತೆ ಪ್ರಮಾಣಪತ್ರ (ಅನ್ವಯಿಸಿದರೆ)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / ಅಂಗವಿಕಲತೆ ಪ್ರಮಾಣಪತ್ರ",
        nominationFormTitle:
          "ನಾಮನಿರ್ದೇಶನ ಪತ್ರ (ಸಂಸ್ಥೆಯ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿದ್ದರೆ)",
        nominationFormSub:
          "ಪಾಲುದಾರ NGO ಅಥವಾ ಸಂಸ್ಥೆಯಿಂದ ಶಿಫಾರಸು ಪತ್ರ",
      },
    },
    page4: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ಘೋಷಣೆಗಳು ಮತ್ತು ಅಂತಿಮ ಸಲ್ಲಿಕೆ",
      subtitle:
        "ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಅಧಿಕೃತ ಘೋಷಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ.",
      sec1Title: "ವಿಭಾಗ 1: ಅರ್ಜಿದಾರರ ಘೋಷಣೆ",
      sec2Title: "ವಿಭಾಗ 2: ಅರ್ಜಿ ಭರ್ತಿ ಮಾಡಲು ಪಡೆದ ಸಹಾಯದ ವಿವರಗಳು (ಐಚ್ಛಿಕ)",
      declarationHeading: "ಅಧಿಕೃತ ಅಭ್ಯರ್ಥಿ ಘೋಷಣೆ — ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
      declarationText:
        "ನಾನು ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರದ 1,500 ಅರ್ಹ ಯುವಜನರ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮದ ಅಡಿಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿವೇತನಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇನೆ. ನಾನು ಸಲ್ಲಿಸಿರುವ ಮಾಹಿತಿ ಮತ್ತು ದಾಖಲೆಗಳ ಪ್ರತಿಗಳು ನನ್ನ ತಿಳುವಳಿಕೆಯಂತೆ ಸತ್ಯವಾಗಿವೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ. ಯಾವುದೇ ತಪ್ಪು ಮಾಹಿತಿಯು ನನ್ನ ಅರ್ಜಿ ಅಥವಾ ವಿದ್ಯಾರ್ಥಿವೇತನದ ರದ್ದತಿಗೆ ಕಾರಣವಾಗಬಹುದು ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ಆಯ್ಕೆಯಾದಲ್ಲಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪೂರ್ಣ 45 ದಿನಗಳ ವಸತಿ ತರಬೇತಿಗೆ ಹಾಜರಾಗಲು ಬದ್ಧನಾಗಿರುತ್ತೇನೆ.",
      agreeCheckboxLabel:
        "ನಾನು ಮೇಲಿನ ಅರ್ಜಿದಾರರ ಘೋಷಣೆಯನ್ನು ಓದಿದ್ದೇನೆ ಮತ್ತು ಒಪ್ಪುತ್ತೇನೆ, ಸಲ್ಲಿಸಿದ ಎಲ್ಲಾ ಮಾಹಿತಿ ಮತ್ತು ದಾಖಲೆಗಳು ಸತ್ಯವೆಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ ಹಾಗೂ ಅರ್ಜಿ ಪರಿಶೀಲನೆಗೆ ಸಮ್ಮತಿಸುತ್ತೇನೆ.",
      placeCity: "ಸ್ಥಳ / ನಗರ",
      dateLabel: "ದಿನಾಂಕ",
      wasAssistedQuestion: "ಈ ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಲು ನಿಮಗೆ ಯಾರಾದರೂ ಸಹಾಯ ಮಾಡಿದ್ದಾರೆಯೇ?",
      assistedLanguageUsed: "ಅರ್ಜಿಯನ್ನು ವಿವರಿಸಲು ಬಳಸಿದ ಭಾಷೆ",
      assistantNameContact: "ಸಹಾಯ ಮಾಡಿದವರ ಹೆಸರು ಮತ್ತು ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
      assistantConfirmCheckbox:
        "ನಾನು ಈ ಅರ್ಜಿ ನಮೂನೆಯ ವಿವರಗಳನ್ನು ಅಭ್ಯರ್ಥಿಗೆ ಅರ್ಥವಾಗುವ ಭಾಷೆಯಲ್ಲಿ ನಿಖರವಾಗಿ ವಿವರಿಸಿದ್ದೇನೆ ಮತ್ತು ಅವರ ಉತ್ತರಗಳನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ದಾಖಲಿಸಿದ್ದೇನೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ.",
    },
  },

  hi: {
    topBanner: "भारत योग क्रांति — आधिकारिक छात्रवृत्ति आवेदन पोर्टल",
    topBannerBadge: "100% निःशुल्क आवासीय TTC",
    programmeSubtitle:
      "1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम | अक्षर योग केंद्र",
    saveDraft: "ड्राफ्ट सहेजें",
    draftSaved: "ड्राफ्ट स्वतः सहेजा गया",
    clearDraft: "फॉर्म रीसेट करें",
    stepLabel: "पृष्ठ",
    ofLabel: "में से",
    nextButton: "सहेजें और अगले पृष्ठ पर जाएं",
    prevButton: "पिछला पृष्ठ",
    submitApplicationButton: "आधिकारिक छात्रवृत्ति आवेदन जमा करें",
    submittingButton: "आवेदन जमा किया जा रहा है...",
    requiredNote: "* चिह्नित फ़ील्ड छात्रवृत्ति सत्यापन के लिए अनिवार्य हैं।",
    compressionBadge: "तेज़ अपलोड के लिए ऑटो-कम्प्रेस्ड",
    jumpToField: "फ़ील्ड पर जाएं →",
    optionalTag: "(वैकल्पिक)",
    yes: "हां",
    no: "नहीं",
    attached: "संलग्न (Attached)",
    pending: "लंबित (Pending)",
    notApplicable: "लागू नहीं (N/A)",
    attachFile: "फ़ाइल जोड़ें",
    steps: {
      page1Short: "1. व्यक्तिगत व शिक्षा विवरण",
      page2Short: "2. आर्थिक व वर्तमान स्थिति",
      page3Short: "3. दस्तावेज़ अपलोड",
      page4Short: "4. घोषणा व सबमिशन",
    },
    page1: {
      title: "अभ्यर्थी आवेदन — व्यक्तिगत और शैक्षणिक विवरण",
      subtitle:
        "1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम | अक्षर योग केंद्र",
      sec1Title: "अनुभाग 1: आवेदक का विवरण",
      sec1Desc:
        "कृपया अपना विवरण ठीक वैसे ही दर्ज करें जैसा आपके आधार कार्ड या सरकारी पहचान पत्र पर है।",
      sec2Title: "अनुभाग 2: शैक्षणिक योग्यताएं",
      sec2Desc: "अपनी शैक्षणिक योग्यता और भाषा ज्ञान का विवरण दें।",
      fullName: "1. पूरा नाम (आधार / आधिकारिक पहचान पत्र के अनुसार)",
      dob: "2. जन्म तिथि (DD/MM/YYYY)",
      age: "3. आवेदन के समय आयु (वर्ष)",
      indianCitizen: "4. क्या आप भारतीय नागरिक हैं?",
      gender: "5. लिंग",
      genderOptions: {
        woman: "महिला",
        man: "पुरुष",
        other: "अन्य / स्वयं बताएं",
        preferNot: "बताना नहीं चाहते",
      },
      mobileNumber: "6A. मुख्य मोबाइल / व्हाट्सएप नंबर",
      alternativeContact: "6B. वैकल्पिक संपर्क नंबर",
      email: "7. ईमेल पता",
      guardianNameRelation:
        "8. माता-पिता / अभिभावक / जीवनसाथी का नाम और संबंध",
      currentAddress: "9A. वर्तमान आवासीय पता",
      currentPinCode: "9B. वर्तमान पिन कोड (PIN Code)",
      permanentAddress: "10. स्थायी पता",
      sameAsCurrentAddress: "वर्तमान पते के समान",
      villageTownDistrictState: "11. गांव / शहर, ज़िला और राज्य",
      residenceClassification: "12. निवास का वर्गीकरण",
      rural: "ग्रामीण (Rural)",
      urban: "शहरी (Urban)",
      tribalCommunity: "13. जनजातीय समुदाय (यदि लागू हो)",
      govIdType: "14A. सरकारी पहचान पत्र का प्रकार",
      aadhaarNumber: "14B. आधार संख्या (12 अंक)",
      govIdNumber: "14B. सरकारी पहचान पत्र संख्या",
      addQualificationRow: "योग्यता पंक्ति जोड़ें",
      qualLevelCol: "योग्यता स्तर",
      boardCol: "बोर्ड / संस्थान",
      yearCol: "उत्तीर्ण वर्ष",
      certStatusCol: "प्रमाणपत्र स्थिति",
      languagesUnderstood: "समझी जाने वाली भाषाएं (बोलना / पढ़ना / लिखना)",
      preferredInterviewLanguage: "साक्षात्कार के लिए पसंदीदा भाषा",
    },
    page2: {
      title: "अभ्यर्थी आवेदन — आर्थिक एवं व्यक्तिगत परिस्थितियां",
      subtitle:
        "1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम | अक्षर योग केंद्र",
      sec1Title: "अनुभाग 1: आर्थिक परिस्थितियां",
      sec2Title: "अनुभाग 2: प्राथमिकता और प्रासंगिक परिस्थितियां",
      sec3Title: "अनुभाग 3: वर्तमान स्थिति और उपलब्धता",
      sec4Title: "अनुभाग 4: सहायता और सुगम्यता आवश्यकताएं",
      financialYear: "1. वित्तीय वर्ष",
      totalAnnualFamilyIncome: "2. कुल वार्षिक पारिवारिक आय (₹)",
      householdMembers: "3. कुल परिवार के सदस्य",
      earningMembers: "4. कमाने वाले सदस्य",
      dependantsCount: "5. आश्रित सदस्यों की संख्या",
      incomeSourcesTable: "6. पारिवारिक आय स्रोतों की तालिका",
      addIncomeSource: "आय स्रोत जोड़ें",
      earnerNameCol: "कमाने वाले सदस्य / स्रोत का नाम",
      relationshipCol: "आवेदक से संबंध",
      annualAmountCol: "वार्षिक राशि (₹)",
      otherIncomeSupport: "7. अन्य आय, पेंशन या सहायता विवरण (यदि कोई हो)",
      incomeProofType: "8. आय प्रमाण का प्रकार (सभी लागू चुनें)",
      issuingAuthority: "जारीकर्ता प्राधिकारी",
      issueDateValidity: "जारी करने की तिथि / वैधता",
      certRefNumber: "प्रमाणपत्र संदर्भ संख्या",
      materialIncomeChange: "वर्तमान आय में कोई बड़ा परिवर्तन",
      relevantCircumstances:
        "प्रासंगिक पारिवारिक एवं व्यक्तिगत परिस्थितियां (सभी लागू चुनें)",
      priorityCategoryClaimed: "दावा की गई प्राथमिकता श्रेणी (यदि लागू हो)",
      priorityEvidenceStatus: "प्राथमिकता / श्रेणी प्रमाण की स्थिति",
      presentStatus: "1. वर्तमान स्थिति",
      monthlyIncome: "2. व्यक्तिगत मासिक आय (₹) (यदि कोई हो)",
      canAttendCourse: "3. क्या आप पूरे 45-दिवसीय कोर्स में भाग ले सकते हैं?",
      needToDiscussSupport: "सहायता पर चर्चा करने की आवश्यकता है",
      leaveNocStatus: "4. अवकाश / NOC स्थिति (यदि कार्यरत हैं)",
      needsSupportQuestion:
        "क्या आपको चलने-फिरने, पढ़ने, सुनने, भाषा, सीखने या आवासीय सुविधा के लिए किसी सहायता की आवश्यकता है?",
      describeSupportNeeded:
        "कृपया आवश्यक सहायता का विवरण दें (किसी मेडिकल रिपोर्ट की आवश्यकता नहीं है)",
    },
    page3: {
      title: "अभ्यर्थी आवेदन — दस्तावेज़ अपलोड और जांच सूची",
      subtitle:
        "स्पष्ट फोटो या PDF (.jpg, .png, .pdf अधिकतम 5 MB) अपलोड करें। अपलोड की गई छवियां स्वतः कंप्रेस हो जाती हैं।",
      sec1Title: "आधिकारिक सत्यापन दस्तावेज़ और चेकलिस्ट",
      sec1Desc:
        "नीचे दिए गए दस्तावेज़ अपलोड करें या 'लंबित (Pending) / लागू नहीं' चुनें।",
      dropzoneClickOrDrag:
        "फ़ाइल चुनने के लिए यहां क्लिक करें या ड्रैग एंड ड्रॉप करें",
      dropzoneFormats:
        "मान्य प्रारूप: .JPG, .PNG, .PDF (अधिकतम 5 MB) · फोटो ऑटो-कम्प्रेस होती हैं",
      pendingDocIdentify:
        "लंबित दस्तावेज़(ओं) और जमा करने की संभावित तिथि बताएं",
      docs: {
        passportPhotoTitle: "हाल ही का पासपोर्ट आकार का फोटो",
        passportPhotoSub:
          "सामने से लिया गया स्पष्ट पासपोर्ट फोटो (.jpg, .png; ऑटो-कम्प्रेस्ड)",
        govIdProofTitle: "आधार कार्ड / पता एवं आयु का सरकारी पहचान प्रमाण",
        govIdProofSub:
          "आधार कार्ड, वोटर आईडी, ड्राइविंग लाइसेंस या पासपोर्ट (.pdf, .jpg, .png)",
        class10Title: "कक्षा 10 / समकक्ष प्रमाणपत्र और अंकतालिका (Marksheet)",
        class10Sub: "आधिकारिक बोर्ड अंकतालिका या उत्तीर्ण प्रमाणपत्र",
        additionalEduTitle: "अतिरिक्त कोर्स / उच्चतम शैक्षणिक प्रमाणपत्र",
        additionalEduSub:
          "कक्षा 12, डिप्लोमा, डिग्री या पूर्व योग प्रशिक्षण प्रमाणपत्र",
        incomeEvidenceTitle:
          "आय प्रमाण (आय प्रमाणपत्र / BPL कार्ड / AAY कार्ड)",
        incomeEvidenceSub:
          "मान्य पारिवारिक आय प्रमाणपत्र, राशन/BPL/AAY कार्ड",
        categoryCertTitle:
          "श्रेणी / जाति / दिव्यांगता प्रमाणपत्र (यदि दावा किया गया हो)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / दिव्यांगता प्रमाणपत्र",
        nominationFormTitle:
          "नामांकन प्रपत्र (यदि किसी संस्था के माध्यम से आवेदन कर रहे हैं)",
        nominationFormSub:
          "सहयोगी NGO या संस्थान से अनुशंसा पत्र",
      },
    },
    page4: {
      title: "अभ्यर्थी आवेदन — घोषणाएं और अंतिम सबमिशन",
      subtitle:
        "अपना छात्रवृत्ति आवेदन पूरा करने के लिए आधिकारिक घोषणा की समीक्षा करें और पुष्टि करें।",
      sec1Title: "अनुभाग 1: आवेदक की घोषणा",
      sec2Title: "अनुभाग 2: फॉर्म भरने में ली गई सहायता का विवरण (वैकल्पिक)",
      declarationHeading: "आधिकारिक अभ्यर्थी घोषणा — अक्षर योग केंद्र",
      declarationText:
        "मैं अक्षर योग केंद्र के 1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम के तहत छात्रवृत्ति के लिए आवेदन करता/करती हूं। मैं पुष्टि करता/करती हूं कि प्रस्तुत जानकारी और प्रतियां मेरी जानकारी के अनुसार सत्य हैं। मैं समझता/समझती हूं कि कोई भी गलत जानकारी किसी भी स्तर पर मेरे आवेदन या छात्रवृत्ति को रद्द करने का कारण बन सकती है, और चयनित होने पर मैं बेंगलुरु में पूरे 45-दिवसीय आवासीय प्रशिक्षण में भाग लेने के लिए प्रतिबद्ध हूं।",
      agreeCheckboxLabel:
        "मैंने उपरोक्त आवेदक घोषणा को पढ़ लिया है और मैं इससे सहमत हूं, पुष्टि करता/करती हूं कि जमा की गई सभी जानकारी और दस्तावेज़ सत्य हैं, तथा आवेदन सत्यापन के लिए सहमति देता/देती हूं।",
      placeCity: "स्थान / शहर",
      dateLabel: "दिनांक",
      wasAssistedQuestion: "क्या इस फॉर्म को भरने में किसी ने आपकी सहायता की है?",
      assistedLanguageUsed: "फॉर्म समझाने के लिए उपयोग की गई भाषा",
      assistantNameContact: "सहायक का नाम और संपर्क नंबर",
      assistantConfirmCheckbox:
        "मैं पुष्टि करता/करती हूं कि मैंने इस आवेदन पत्र की सामग्री को उम्मीदवार को उनकी समझ में आने वाली भाषा में सही-सही समझाया है और उनके उत्तरों को सच्चाई से दर्ज किया है।",
    },
  },

  ta: {
    topBanner:
      "பாரத் யோகா கிராந்தி — அதிகாரப்பூர்வ உதவித்தொகை விண்ணப்பப் படிவம்",
    topBannerBadge: "100% இலவச உறைவிடப் பயிற்சி",
    programmeSubtitle:
      "1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டம் | அக்ஷர் யோகா கேந்திரா",
    saveDraft: "வரைவைச் சேமி",
    draftSaved: "வரைவு தானாகச் சேமிக்கப்பட்டது",
    clearDraft: "மீட்டமை",
    stepLabel: "பக்கம்",
    ofLabel: "/",
    nextButton: "சேமித்து அடுத்த பக்கத்திற்குச் செல்லவும்",
    prevButton: "முந்தைய பக்கம்",
    submitApplicationButton: "உதவித்தொகை விண்ணப்பத்தைச் சமர்ப்பிக்கவும்",
    submittingButton: "விண்ணப்பம் சமர்ப்பிக்கப்படுகிறது...",
    requiredNote: "* குறியிடப்பட்ட புலங்கள் கட்டாயமானவை.",
    compressionBadge: "தானாகச் சுருக்கப்பட்டது (Auto-Compressed)",
    jumpToField: "புலத்திற்குச் செல் →",
    optionalTag: "(விருப்பத்தேர்வு)",
    yes: "ஆம்",
    no: "இல்லை",
    attached: "இணைக்கப்பட்டுள்ளது",
    pending: "நிலுவையில் (Pending)",
    notApplicable: "பொருந்தாது (N/A)",
    attachFile: "கோப்பை இணைக்கவும்",
    steps: {
      page1Short: "1. தனிப்பட்ட & கல்வி விவரம்",
      page2Short: "2. பொருளாதார & தற்போதைய நிலை",
      page3Short: "3. ஆவணங்கள் பதிவேற்றம்",
      page4Short: "4. உறுதிமொழி & சமர்ப்பிப்பு",
    },
    page1: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — தனிப்பட்ட மற்றும் கல்வி விவரங்கள்",
      subtitle:
        "1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டம் | அக்ஷர் யோகா கேந்திரா",
      sec1Title: "பிரிவு 1: விண்ணப்பதாரர் விவரங்கள்",
      sec1Desc:
        "உங்கள் ஆதார் அட்டை அல்லது அரசு அடையாள அட்டையில் உள்ளவாறு விவரங்களைத் துல்லியமாக நிரப்பவும்.",
      sec2Title: "பிரிவு 2: கல்வித் தகுதிகள்",
      sec2Desc: "உங்கள் கல்வித் தகுதி மற்றும் மொழித் திறன் விவரங்களை வழங்கவும்.",
      fullName: "1. முழுப் பெயர் (ஆதார் / அரசு அடையாள அட்டையில் உள்ளபடி)",
      dob: "2. பிறந்த தேதி (DD/MM/YYYY)",
      age: "3. விண்ணப்பிக்கும்போது வயது (ஆண்டுகள்)",
      indianCitizen: "4. இந்தியக் குடிமகனா?",
      gender: "5. பாலினம்",
      genderOptions: {
        woman: "பெண்",
        man: "ஆண்",
        other: "மற்றவை / சுய விவரம்",
        preferNot: "குறிப்பிட விரும்பவில்லை",
      },
      mobileNumber: "6A. முதன்மை மொபைல் / வாட்ஸ்அப் எண்",
      alternativeContact: "6B. மாற்றுத் தொடர்பு எண்",
      email: "7. மின்னஞ்சல் முகவரி",
      guardianNameRelation:
        "8. பெற்றோர் / பாதுகாவலர் / வாழ்க்கைத்துணை பெயர் மற்றும் உறவுமுறை",
      currentAddress: "9A. தற்போதைய குடியிருப்பு முகவரி",
      currentPinCode: "9B. தற்போதைய அஞ்சல் குறியீடு (PIN Code)",
      permanentAddress: "10. நிரந்தர முகவரி",
      sameAsCurrentAddress: "தற்போதைய முகவரியே",
      villageTownDistrictState: "11. கிராமம் / நகரம், மாவட்டம் மற்றும் மாநிலம்",
      residenceClassification: "12. இருப்பிட வகைப்பாடு",
      rural: "கிராமப்புறம் (Rural)",
      urban: "நகர்ப்புறம் (Urban)",
      tribalCommunity: "13. பழங்குடியினர் சமூகம் (பொருந்தினால்)",
      govIdType: "14A. அரசு அடையாள அட்டை வகை",
      aadhaarNumber: "14B. ஆதார் எண் (12 இலக்கங்கள்)",
      govIdNumber: "14B. அரசு அடையாள அட்டை எண்",
      addQualificationRow: "கல்வித் தகுதி வரிசையைச் சேர்க்கவும்",
      qualLevelCol: "கல்வித் தகுதி நிலை",
      boardCol: "வாரியம் / கல்வி நிறுவனம்",
      yearCol: "தேர்ச்சி பெற்ற ஆண்டு",
      certStatusCol: "சான்றிதழ் நிலை",
      languagesUnderstood: "புரியும் மொழிகள் (பேச / படிக்க / எழுத)",
      preferredInterviewLanguage: "நேர்காணலுக்கு விரும்பும் மொழி",
    },
    page2: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — பொருளாதார மற்றும் தனிப்பட்ட சூழ்நிலைகள்",
      subtitle:
        "1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டம் | அக்ஷர் யோகா கேந்திரா",
      sec1Title: "பிரிவு 1: பொருளாதாரச் சூழ்நிலைகள்",
      sec2Title: "பிரிவு 2: முன்னுரிமை மற்றும் தொடர்புடைய சூழ்நிலைகள்",
      sec3Title: "பிரிவு 3: தற்போதைய நிலை மற்றும் வருகை",
      sec4Title: "பிரிவு 4: ஆதரவு மற்றும் அணுகல் தேவைகள்",
      financialYear: "1. நிதியாண்டு",
      totalAnnualFamilyIncome: "2. மொத்த ஆண்டு குடும்ப வருமானம் (₹)",
      householdMembers: "3. குடும்ப உறுப்பினர்கள் எண்ணிக்கை",
      earningMembers: "4. வருமானம் ஈட்டும் உறுப்பினர்கள்",
      dependantsCount: "5. சார்ந்திருப்போர் எண்ணிக்கை",
      incomeSourcesTable: "6. குடும்ப வருமான ஆதாரங்கள் அட்டவணை",
      addIncomeSource: "வருமான ஆதாரத்தைச் சேர்க்கவும்",
      earnerNameCol: "வருமானம் ஈட்டுபவர் / ஆதாரத்தின் பெயர்",
      relationshipCol: "விண்ணப்பதாரருடன் உறவுமுறை",
      annualAmountCol: "ஆண்டுத் தொகை (₹)",
      otherIncomeSupport: "7. பிற வருமானம், ஓய்வூதியம் அல்லது ஆதரவு விவரங்கள்",
      incomeProofType: "8. வருமானச் சான்று வகை (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)",
      issuingAuthority: "வழங்கிய அதிகாரி",
      issueDateValidity: "வழங்கிய தேதி / செல்லுபடியாகும் காலம்",
      certRefNumber: "சான்றிதழ் குறிப்பு எண்",
      materialIncomeChange: "தற்போதைய வருமானத்தில் ஏற்பட்டுள்ள முக்கிய மாற்றம்",
      relevantCircumstances:
        "தொடர்புடைய குடும்ப மற்றும் தனிப்பட்ட சூழ்நிலைகள் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)",
      priorityCategoryClaimed: "முன்னுரிமைப் பிரிவு (பொருந்தினால்)",
      priorityEvidenceStatus: "முன்னுரிமை / பிரிவுச் சான்றிதழ் நிலை",
      presentStatus: "1. தற்போதைய நிலை",
      monthlyIncome: "2. தனிப்பட்ட மாத வருமானம் (₹) (இருப்பின்)",
      canAttendCourse: "3. முழு 45-நாள் பயிற்சியிலும் கலந்துகொள்ள முடியுமா?",
      needToDiscussSupport: "ஆதரவு குறித்து ஆலோசிக்க வேண்டும்",
      leaveNocStatus: "4. விடுப்பு / NOC நிலை (பணியில் இருந்தால்)",
      needsSupportQuestion:
        "நடமாட்டம், வாசிப்பு, கேட்டல், மொழி, கற்றல் அல்லது தங்குமிட வசதிக்கு உங்களுக்கு உதவி தேவைப்படுகிறதா?",
      describeSupportNeeded:
        "தேவைப்படும் உதவியை விவரிக்கவும் (மருத்துவச் சான்றிதழ் தேவையில்லை)",
    },
    page3: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — ஆவணங்கள் பதிவேற்றம்",
      subtitle:
        "தெளிவான புகைப்படம் அல்லது PDF (.jpg, .png, .pdf அதிகபட்சம் 5 MB) பதிவேற்றவும். புகைப்படங்கள் தானாகச் சுருக்கப்படும்.",
      sec1Title: "சரிபார்ப்பு ஆவணங்கள் மற்றும் பட்டியல்",
      sec1Desc:
        "ஆவணங்களைப் பதிவேற்றவும் அல்லது 'நிலுவையில் (Pending) / பொருந்தாது' எனக் குறிப்பிடவும்.",
      dropzoneClickOrDrag:
        "கோப்பைத் தேர்ந்தெடுக்க இங்கே கிளிக் செய்யவும் அல்லது இழுத்து விடவும்",
      dropzoneFormats:
        "அனுமதிக்கப்பட்டவை: .JPG, .PNG, .PDF (அதிகபட்சம் 5 MB) · புகைப்படங்கள் தானாகச் சுருக்கப்படும்",
      pendingDocIdentify:
        "நிலுவையில் உள்ள ஆவணம்(கள்) மற்றும் சமர்ப்பிக்கும் எதிர்பார்க்கப்படும் தேதியைக் குறிப்பிடவும்",
      docs: {
        passportPhotoTitle: "சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம்",
        passportPhotoSub:
          "தெளிவான பாஸ்போர்ட் அளவு புகைப்படம் (.jpg, .png; தானாகச் சுருக்கப்படும்)",
        govIdProofTitle: "ஆதார் அட்டை / முகவரி மற்றும் வயதுக்கான அரசு அடையாளச் சான்று",
        govIdProofSub:
          "ஆதார் அட்டை, வாக்காளர் அட்டை, ஓட்டுநர் உரிமம் அல்லது பாஸ்போர்ட் (.pdf, .jpg, .png)",
        class10Title: "10-ஆம் வகுப்பு / சமமான சான்றிதழ் மற்றும் மதிப்பெண் பட்டியல்",
        class10Sub: "அதிகாரப்பூர்வ வாரிய மதிப்பெண் பட்டியல் அல்லது தேர்ச்சிச் சான்றிதழ்",
        additionalEduTitle: "கூடுதல் கல்வி / உயர்கல்விச் சான்றிதழ்",
        additionalEduSub:
          "12-ஆம் வகுப்பு, டிப்ளமோ, பட்டப்படிப்பு அல்லது யோகா பயிற்சிச் சான்றிதழ்",
        incomeEvidenceTitle:
          "வருமானச் சான்று (வருமானச் சான்றிதழ் / BPL அட்டை / AAY அட்டை)",
        incomeEvidenceSub:
          "செல்லுபடியாகும் குடும்ப வருமானச் சான்றிதழ் அல்லது BPL/AAY குடும்ப அட்டை",
        categoryCertTitle:
          "சாதி / பிரிவு / மாற்றுத்திறனாளிச் சான்றிதழ் (கோரப்பட்டால்)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / மாற்றுத்திறனாளிச் சான்றிதழ்",
        nominationFormTitle:
          "பரிந்துரைப் படிவம் (நிறுவனம் மூலம் விண்ணப்பித்தால்)",
        nominationFormSub:
          "தன்னார்வத் தொண்டு நிறுவனம் அல்லது அமைப்பின் பரிந்துரைக் கடிதம்",
      },
    },
    page4: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — உறுதிமொழி மற்றும் சமர்ப்பிப்பு",
      subtitle:
        "உங்கள் விண்ணப்பத்தை நிறைவு செய்ய உறுதிமொழியைப் படித்து உறுதிப்படுத்தவும்.",
      sec1Title: "பிரிவு 1: விண்ணப்பதாரர் உறுதிமொழி",
      sec2Title: "பிரிவு 2: படிவம் நிரப்ப உதவியவர் விவரங்கள் (விருப்பத்தேர்வு)",
      declarationHeading:
        "அதிகாரப்பூர்வ விண்ணப்பதாரர் உறுதிமொழி — அக்ஷர் யோகா கேந்திரா",
      declarationText:
        "அக்ஷர் யோகா கேந்திராவின் 1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டத்தின் கீழ் நான் விண்ணப்பிக்கிறேன். நான் சமர்ப்பித்துள்ள தகவல்கள் மற்றும் ஆவண நகல்கள் அனைத்தும் என் அறிவுக்கு எட்டியவரை உண்மையானவை என உறுதிப்படுத்துகிறேன். தேர்ந்தெடுக்கப்பட்டால் பெங்களூருவில் நடைபெறும் முழு 45-நாள் உறைவிடப் பயிற்சியில் கலந்துகொள்வேன் என உறுதியளிக்கிறேன்.",
      agreeCheckboxLabel:
        "மேலே உள்ள விண்ணப்பதாரர் உறுதிமொழியைப் படித்து ஏற்றுக்கொள்கிறேன், சமர்ப்பிக்கப்பட்ட அனைத்துத் தகவல்களும் ஆவணங்களும் உண்மையானவை என உறுதிப்படுத்துகிறேன், மேலும் விண்ணப்பச் சரிபார்ப்புக்குச் சம்மதிக்கிறேன்.",
      placeCity: "இடம் / நகரம்",
      dateLabel: "தேதி",
      wasAssistedQuestion: "இந்தப் படிவத்தை நிரப்ப உங்களுக்கு யாராவது உதவினார்களா?",
      assistedLanguageUsed: "படிவத்தை விளக்கப் பயன்படுத்தப்பட்ட மொழி",
      assistantNameContact: "உதவியவரின் பெயர் மற்றும் தொலைபேசி எண்",
      assistantConfirmCheckbox:
        "இந்த விண்ணப்பப் படிவத்தின் விவரங்களை விண்ணப்பதாரருக்குப் புரியும் மொழியில் துல்லியமாக விளக்கி, அவரது பதில்களை உண்மையாகப் பதிவு செய்துள்ளேன் என உறுதிப்படுத்துகிறேன்.",
    },
  },

  te: {
    topBanner: "భారత్ యోగా క్రాంతి — అధికారిక స్కాలర్‌షిప్ దరఖాస్తు పోర్టల్",
    topBannerBadge: "100% ఉచిత రెసిడెన్షియల్ TTC",
    programmeSubtitle:
      "1,500 మంది యువత కోసం జాతీయ స్కాలర్‌షిప్ కార్యక్రమం | అక్షర్ యోగా కేంద్ర",
    saveDraft: "డ్రాఫ్ట్ సేవ్ చేయండి",
    draftSaved: "డ్రాఫ్ట్ ఆటో-సేవ్ చేయబడింది",
    clearDraft: "రీసెట్ చేయండి",
    stepLabel: "పేజీ",
    ofLabel: "/",
    nextButton: "సేవ్ చేసి తదుపరి పేజీకి వెళ్లండి",
    prevButton: "మునుపటి పేజీ",
    submitApplicationButton: "అధికారిక స్కాలర్‌షిప్ దరఖాస్తును సమర్పించండి",
    submittingButton: "దరఖాస్తు సమర్పించబడుతోంది...",
    requiredNote: "* గుర్తు ఉన్న ఫీల్డ్‌లు తప్పనిసరి.",
    compressionBadge: "ఆటో-కంప్రెస్ చేయబడింది (Auto-Compressed)",
    jumpToField: "ఫీల్డ్‌కు వెళ్లండి →",
    optionalTag: "(ఐచ్ఛికం)",
    yes: "అవును",
    no: "కాదు",
    attached: "జతచేయబడింది",
    pending: "పెండింగ్ (Pending)",
    notApplicable: "వర్తించదు (N/A)",
    attachFile: "ఫైల్ జోడించండి",
    steps: {
      page1Short: "1. వ్యక్తిగత & విద్యా వివరాలు",
      page2Short: "2. ఆర్థిక & ప్రస్తుత స్థితి",
      page3Short: "3. డాక్యుమెంట్ల అప్‌లోడ్",
      page4Short: "4. డిక్లరేషన్ & సమర్పణ",
    },
    page1: {
      title: "అభ్యర్థి దరఖాస్తు — వ్యక్తిగత మరియు విద్యా వివరాలు",
      subtitle:
        "1,500 మంది యువత కోసం జాతీయ స్కాలర్‌షిప్ కార్యక్రమం | అక్షర్ యోగా కేంద్ర",
      sec1Title: "విభాగం 1: దరఖాస్తుదారుని వివరాలు",
      sec1Desc:
        "మీ ఆధార్ కార్డు లేదా అధికారిక ప్రభుత్వ గుర్తింపు కార్డులో ఉన్నట్లుగా వివరాలను నమోదు చేయండి.",
      sec2Title: "విభాగం 2: విద్యార్హతలు",
      sec2Desc: "మీ విద్యార్హతలు మరియు భాషా వివరాలను అందించండి.",
      fullName: "1. పూర్తి పేరు (ఆధార్ / అధికారిక గుర్తింపు కార్డు ప్రకారం)",
      dob: "2. పుట్టిన తేదీ (DD/MM/YYYY)",
      age: "3. దరఖాస్తు సమయానికి వయస్సు (సంవత్సరాలు)",
      indianCitizen: "4. భారతీయ పౌరులా?",
      gender: "5. లింగం",
      genderOptions: {
        woman: "మహిళ",
        man: "పురుషుడు",
        other: "ఇతర / స్వయంగా వివరించండి",
        preferNot: "చెప్పడం ఇష్టం లేదు",
      },
      mobileNumber: "6A. ప్రాథమిక మొబైల్ / వాట్సాప్ నంబర్",
      alternativeContact: "6B. ప్రత్యామ్నాయ ఫోన్ నంబర్",
      email: "7. ఈమెయిల్ చిరునామా",
      guardianNameRelation:
        "8. తల్లిదండ్రులు / సంరక్షకులు / జీవిత భాగస్వామి పేరు మరియు సంబంధం",
      currentAddress: "9A. ప్రస్తుత నివాస చిరునామా",
      currentPinCode: "9B. ప్రస్తుత పిన్ కోడ్ (PIN Code)",
      permanentAddress: "10. శాశ్వత చిరునామా",
      sameAsCurrentAddress: "ప్రస్తుత చిరునామా వలెనే",
      villageTownDistrictState: "11. గ్రామం / పట్టణం, జిల్లా మరియు రాష్ట్రం",
      residenceClassification: "12. నివాస వర్గీకరణ",
      rural: "గ్రామీణ (Rural)",
      urban: "పట్టణ (Urban)",
      tribalCommunity: "13. గిరిజన సముదాయం (వర్తిస్తే)",
      govIdType: "14A. ప్రభుత్వ గుర్తింపు కార్డు రకం",
      aadhaarNumber: "14B. ఆధార్ నంబర్ (12 అంకెలు)",
      govIdNumber: "14B. ప్రభుత్వ గుర్తింపు కార్డు నంబర్",
      addQualificationRow: "మరొక విద్యార్హత వరుసను జోడించండి",
      qualLevelCol: "విద్యార్హత స్థాయి",
      boardCol: "బోర్డు / సంస్థ",
      yearCol: "ఉత్తీర్ణత సంవత్సరం",
      certStatusCol: "సర్టిఫికెట్ స్థితి",
      languagesUnderstood: "అర్థమయ్యే భాషలు (మాట్లాడటం / చదవడం / రాయడం)",
      preferredInterviewLanguage: "ఇంటర్వ్యూ కోసం ప్రాధాన్య భాష",
    },
    page2: {
      title: "అభ్యర్థి దరఖాస్తు — ఆర్థిక మరియు వ్యక్తిగత పరిస్థితులు",
      subtitle:
        "1,500 మంది యువత కోసం జాతీయ స్కాలర్‌షిప్ కార్యక్రమం | అక్షర్ యోగా కేంద్ర",
      sec1Title: "విభాగం 1: ఆర్థిక పరిస్థితులు",
      sec2Title: "విభాగం 2: ప్రాధాన్యత & సంబంధిత పరిస్థితులు",
      sec3Title: "విభాగం 3: ప్రస్తుత స్థితి మరియు లభ్యత",
      sec4Title: "విభాగం 4: సహాయక మరియు సదుపాయ అవసరాలు",
      financialYear: "1. ఆర్థిక సంవత్సరం",
      totalAnnualFamilyIncome: "2. మొత్తం వార్షిక కుటుంబ ఆదాయం (₹)",
      householdMembers: "3. మొత్తం కుటుంబ సభ్యులు",
      earningMembers: "4. సంపాదించే సభ్యుల సంఖ్య",
      dependantsCount: "5. ఆధారపడిన వారి సంఖ్య",
      incomeSourcesTable: "6. కుటుంబ ఆదాయ వనరుల పట్టిక",
      addIncomeSource: "ఆదాయ వనరును జోడించండి",
      earnerNameCol: "సంపాదించే వ్యక్తి / వనరు పేరు",
      relationshipCol: "దరఖాస్తుదారుతో సంబంధం",
      annualAmountCol: "వార్షిక మొత్తం (₹)",
      otherIncomeSupport: "7. ఇతర ఆదాయం, పెన్షన్ లేదా సహాయ వివరాలు (ఏవైనా ఉంటే)",
      incomeProofType: "8. ఆదాయ ధృవీకరణ రకం (వర్తించేవన్నీ ఎంచుకోండి)",
      issuingAuthority: "జారీ చేసిన అధికారి",
      issueDateValidity: "జారీ తేదీ / చెల్లుబాటు",
      certRefNumber: "సర్టిఫికెట్ రిఫరెన్స్ నంబర్",
      materialIncomeChange: "ప్రస్తుత ఆదాయంలో ఏదైనా ముఖ్యమైన మార్పు",
      relevantCircumstances:
        "సంబంధిత కుటుంబ మరియు వ్యక్తిగత పరిస్థితులు (వర్తించేవన్నీ ఎంచుకోండి)",
      priorityCategoryClaimed: "ప్రాధాన్యత కేటగిరీ (వర్తిస్తే)",
      priorityEvidenceStatus: "ప్రాధాన్యత / కేటగిరీ సర్టిఫికెట్ స్థితి",
      presentStatus: "1. ప్రస్తుత స్థితి",
      monthlyIncome: "2. వ్యక్తిగత నెలవారీ ఆదాయం (₹) (ఉంటే)",
      canAttendCourse: "3. పూర్తి 45-రోజుల కోర్సుకు హాజరు కాగలరా?",
      needToDiscussSupport: "సహాయం గురించి చర్చించాలి",
      leaveNocStatus: "4. సెలవు / NOC స్థితి (ఉద్యోగంలో ఉంటే)",
      needsSupportQuestion:
        "కదలిక, చదవడం, వినడం, భాష, నేర్చుకోవడం లేదా వసతి సదుపాయం కోసం మీకు ఏదైనా సహాయం అవసరమా?",
      describeSupportNeeded:
        "దయచేసి అవసరమైన సహాయాన్ని వివరించండి (వైద్య నిర్ధారణ అవసరం లేదు)",
    },
    page3: {
      title: "అభ్యర్థి దరఖాస్తు — డాక్యుమెంట్ అప్‌లోడ్‌లు & చెక్‌లిస్ట్",
      subtitle:
        "స్పష్టమైన ఫోటోలు లేదా PDF (.jpg, .png, .pdf గరిష్టంగా 5 MB) అప్‌లోడ్ చేయండి. ఫోటోలు ఆటోమేటిక్‌గా కంప్రెస్ చేయబడతాయి.",
      sec1Title: "అధికారిక ధృవీకరణ పత్రాలు & చెక్‌లిస్ట్",
      sec1Desc:
        "ప్రతి డాక్యుమెంట్‌ను అప్‌లోడ్ చేయండి లేదా 'పెండింగ్ (Pending) / వర్తించదు' అని ఎంచుకోండి.",
      dropzoneClickOrDrag:
        "ఫైల్‌ను ఎంచుకోవడానికి ఇక్కడ క్లిక్ చేయండి లేదా డ్రాగ్ & డ్రాప్ చేయండి",
      dropzoneFormats:
        "అనుమతించబడినవి: .JPG, .PNG, .PDF (గరిష్టంగా 5 MB) · ఫోటోలు ఆటో-కంప్రెస్ అవుతాయి",
      pendingDocIdentify:
        "పెండింగ్‌లో ఉన్న డాక్యుమెంట్(లు) మరియు సమర్పించే ఆశించిన తేదీని పేర్కొనండి",
      docs: {
        passportPhotoTitle: "ఇటీవలి పాస్‌పోర్ట్ సైజు ఫోటో",
        passportPhotoSub:
          "ముందు నుండి తీసిన స్పష్టమైన పాస్‌పోర్ట్ ఫోటో (.jpg, .png)",
        govIdProofTitle: "ఆధార్ కార్డు / చిరునామా & వయస్సు ప్రభుత్వ గుర్తింపు కార్డు",
        govIdProofSub:
          "ఆధార్ కార్డు, ఓటర్ ఐడి, డ్రైవింగ్ లైసెన్స్ లేదా పాస్‌పోర్ట్ (.pdf, .jpg, .png)",
        class10Title: "10వ తరగతి / తత్సమాన సర్టిఫికెట్ మరియు మార్కుల జాబితా",
        class10Sub: "అధికారిక బోర్డు మార్కుల జాబితా లేదా ఉత్తీర్ణత సర్టిఫికెట్",
        additionalEduTitle: "అదనపు కోర్సు / అత్యున్నత విద్యార్హత సర్టిఫికెట్",
        additionalEduSub:
          "12వ తరగతి / ఇంటర్, డిప్లొమా, డిగ్రీ లేదా యోగా శిక్షణ సర్టిఫికెట్",
        incomeEvidenceTitle:
          "ఆదాయ రుజువు (ఆదాయ ధృవీకరణ పత్రం / BPL కార్డు / AAY కార్డు)",
        incomeEvidenceSub:
          "చెల్లుబాటు అయ్యే కుటుంబ ఆదాయ సర్టిఫికెట్ లేదా BPL/AAY రేషన్ కార్డు",
        categoryCertTitle:
          "కేటగిరీ / కుల / వికలాంగుల సర్టిఫికెట్ (వర్తిస్తే)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / వికలాంగుల సర్టిఫికెట్",
        nominationFormTitle:
          "నామినేషన్ ఫారమ్ (సంస్థ ద్వారా దరఖాస్తు చేస్తుంటే)",
        nominationFormSub:
          "భాగస్వామ్య NGO లేదా సంస్థ నుండి సిఫార్సు లేఖ",
      },
    },
    page4: {
      title: "అభ్యర్థి దరఖాస్తు — డిక్లరేషన్లు & సమర్పణ",
      subtitle:
        "మీ స్కాలర్‌షిప్ దరఖాస్తును పూర్తి చేయడానికి డిక్లరేషన్‌ను సమీక్షించి నిర్ధారించండి.",
      sec1Title: "విభాగం 1: దరఖాస్తుదారుని డిక్లరేషన్",
      sec2Title: "విభాగం 2: దరఖాస్తు నింపడంలో సహాయం వివరాలు (ఐచ్ఛికం)",
      declarationHeading: "అధికారిక అభ్యర్థి డిక్లరేషన్ — అక్షర్ యోగా కేంద్ర",
      declarationText:
        "అక్షర్ యోగా కేంద్ర నిర్వహిస్తున్న 1,500 మంది యువత జాతీయ స్కాలర్‌షిప్ కార్యక్రమం కింద నేను దరఖాస్తు చేస్తున్నాను. నేను సమర్పించిన సమాచారం మరియు పత్రాలు నాకు తెలిసినంత వరకు నిజమైనవని ధృవీకరిస్తున్నాను. ఎంపికైతే బెంగళూరులో పూర్తి 45-రోజుల రెసిడెన్షియల్ శిక్షణకు హాజరవుతానని తెలియజేస్తున్నాను.",
      agreeCheckboxLabel:
        "నేను పైన పేర్కొన్న దరఖాస్తుదారుని డిక్లరేషన్‌ను చదివాను మరియు అంగీకరిస్తున్నాను, సమర్పించిన సమాచారం మరియు పత్రాలన్నీ నిజమైనవని ధృవీకరిస్తున్నాను మరియు దరఖాస్తు పరిశీలనకు సమ్మతిస్తున్నాను.",
      placeCity: "స్థలం / నగరం",
      dateLabel: "తేదీ",
      wasAssistedQuestion: "ఈ ఫారమ్ నింపడంలో మీకు ఎవరైనా సహాయం చేశారా?",
      assistedLanguageUsed: "ఫారమ్ వివరించడానికి ఉపయోగించిన భాష",
      assistantNameContact: "సహాయకుని పేరు మరియు ఫోన్ నంబర్",
      assistantConfirmCheckbox:
        "నేను ఈ దరఖాస్తు ఫారమ్‌లోని వివరాలను అభ్యర్థికి అర్థమయ్యే భాషలో ఖచ్చితంగా వివరించానని మరియు వారి సమాధానాలను నిజాయితీగా నమోదు చేశానని ధృవీకరిస్తున్నాను.",
    },
  },

  mr: {
    topBanner: "भारत योग क्रांती — अधिकृत शिष्यवृत्ती अर्ज पोर्टल",
    topBannerBadge: "१००% मोफत निवासी TTC",
    programmeSubtitle:
      "१,५०० वंचित तरुणांसाठी राष्ट्रीय शिष्यवृत्ती उपक्रम | अक्षर योग केंद्र",
    saveDraft: "ड्राफ्ट सेव्ह करा",
    draftSaved: "ड्राफ्ट ऑटो-सेव्ह झाला",
    clearDraft: "रीसेट करा",
    stepLabel: "पान",
    ofLabel: "/",
    nextButton: "सेव्ह करा आणि पुढील पानावर जा",
    prevButton: "मागील पान",
    submitApplicationButton: "अधिकृत शिष्यवृत्ती अर्ज सबमिट करा",
    submittingButton: "अर्ज सबमिट होत आहे...",
    requiredNote: "* चिन्हांकित रकाने भरणे अनिवार्य आहे.",
    compressionBadge: "जलद अपलोडसाठी ऑटो-कम्प्रेस्ड",
    jumpToField: "रकान्यावर जा →",
    optionalTag: "(ऐच्छिक)",
    yes: "होय",
    no: "नाही",
    attached: "जोडलेले (Attached)",
    pending: "प्रलंबित (Pending)",
    notApplicable: "लागू नाही (N/A)",
    attachFile: "फाईल जोडा",
    steps: {
      page1Short: "१. वैयक्तिक व शिक्षण",
      page2Short: "२. आर्थिक व सध्याची स्थिती",
      page3Short: "३. कागदपत्रे अपलोड",
      page4Short: "४. प्रतिज्ञापत्र व सबमिशन",
    },
    page1: {
      title: "उमेदवार अर्ज — वैयक्तिक आणि शैक्षणिक तपशील",
      subtitle:
        "१,५०० वंचित तरुणांसाठी राष्ट्रीय शिष्यवृत्ती उपक्रम | अक्षर योग केंद्र",
      sec1Title: "विभाग १: अर्जदाराचा तपशील",
      sec1Desc:
        "कृपया तुमच्या आधार कार्ड किंवा अधिकृत सरकारी ओळखपत्राप्रमाणे अचूक माहिती भरा.",
      sec2Title: "विभाग २: शैक्षणिक पात्रता",
      sec2Desc: "तुमची शैक्षणिक पार्श्वभूमी आणि अवगत भाषांचा तपशील द्या.",
      fullName: "१. पूर्ण नाव (आधार / अधिकृत ओळखपत्राप्रमाणे)",
      dob: "२. जन्मतारीख (DD/MM/YYYY)",
      age: "३. अर्जाच्या वेळी वय (वर्षे)",
      indianCitizen: "४. भारतीय नागरिक आहात का?",
      gender: "५. लिंग",
      genderOptions: {
        woman: "महिला",
        man: "पुरुष",
        other: "इतर / स्वतः नमूद करा",
        preferNot: "सांगू इच्छित नाही",
      },
      mobileNumber: "6A. मुख्य मोबाईल / व्हॉट्सॲप नंबर",
      alternativeContact: "6B. पर्यायी संपर्क क्रमांक",
      email: "७. ईमेल पत्ता",
      guardianNameRelation: "८. पालक / पती-पत्नीचे नाव आणि नाते",
      currentAddress: "9A. सध्याचा निवासी पत्ता",
      currentPinCode: "9B. सध्याचा पिन कोड (PIN Code)",
      permanentAddress: "१०. कायमस्वरूपी पत्ता",
      sameAsCurrentAddress: "सध्याच्या पत्त्याप्रमाणेच",
      villageTownDistrictState: "११. गाव / शहर, जिल्हा आणि राज्य",
      residenceClassification: "१२. निवासाचे वर्गीकरण",
      rural: "ग्रामीण (Rural)",
      urban: "शहरी (Urban)",
      tribalCommunity: "१३. आदिवासी समुदाय (लागू असल्यास)",
      govIdType: "14A. सरकारी ओळखपत्राचा प्रकार",
      aadhaarNumber: "14B. आधार क्रमांक (१२ अंक)",
      govIdNumber: "14B. सरकारी ओळखपत्र क्रमांक",
      addQualificationRow: "शैक्षणिक पात्रता ओळ जोडा",
      qualLevelCol: "पात्रता स्तर",
      boardCol: "मंडळ / संस्था",
      yearCol: "उत्तीर्ण वर्ष",
      certStatusCol: "प्रमाणपत्र स्थिती",
      languagesUnderstood: "समजणाऱ्या भाषा (बोलणे / वाचणे / लिहिणे)",
      preferredInterviewLanguage: "मुलाखतीसाठी पसंतीची भाषा",
    },
    page2: {
      title: "उमेदवार अर्ज — आर्थिक आणि वैयक्तिक परिस्थिती",
      subtitle:
        "१,५०० वंचित तरुणांसाठी राष्ट्रीय शिष्यवृत्ती उपक्रम | अक्षर योग केंद्र",
      sec1Title: "विभाग १: आर्थिक परिस्थिती",
      sec2Title: "विभाग २: प्राधान्य आणि संबंधित परिस्थिती",
      sec3Title: "विभाग ३: सध्याची स्थिती आणि उपलब्धता",
      sec4Title: "विभाग ४: सहाय्य आणि सुविधा आवश्यकता",
      financialYear: "१. आर्थिक वर्ष",
      totalAnnualFamilyIncome: "२. एकूण वार्षिक कौटुंबिक उत्पन्न (₹)",
      householdMembers: "३. घरातील एकूण सदस्य",
      earningMembers: "४. कमावते सदस्य",
      dependantsCount: "५. अवलंबित सदस्यांची संख्या",
      incomeSourcesTable: "६. कौटुंबिक उत्पन्नाच्या स्रोतांचा तक्ता",
      addIncomeSource: "उत्पन्न स्रोत जोडा",
      earnerNameCol: "कमावत्या व्यक्तीचे / स्रोताचे नाव",
      relationshipCol: "अर्जदाराशी नाते",
      annualAmountCol: "वार्षिक रक्कम (₹)",
      otherIncomeSupport: "७. इतर उत्पन्न, पेन्शन किंवा मदतीचा तपशील (असल्यास)",
      incomeProofType: "८. उत्पन्नाच्या पुराव्याचा प्रकार (लागू असलेले सर्व निवडा)",
      issuingAuthority: "देणारे प्राधिकरण",
      issueDateValidity: "दिलेली तारीख / वैधता",
      certRefNumber: "प्रमाणपत्र संदर्भ क्रमांक",
      materialIncomeChange: "सध्याच्या उत्पन्नातील महत्त्वाचा बदल",
      relevantCircumstances:
        "संबंधित कौटुंबिक आणि वैयक्तिक परिस्थिती (लागू असलेले सर्व निवडा)",
      priorityCategoryClaimed: "प्राधान्य प्रवर्ग (लागू असल्यास)",
      priorityEvidenceStatus: "प्राधान्य / प्रवर्ग पुराव्याची स्थिती",
      presentStatus: "१. सध्याची स्थिती",
      monthlyIncome: "२. वैयक्तिक मासिक उत्पन्न (₹) (असल्यास)",
      canAttendCourse: "३. तुम्ही पूर्ण ४५-दिवसीय अभ्यासक्रमास उपस्थित राहू शकता का?",
      needToDiscussSupport: "मदतीबाबत चर्चा करण्याची गरज आहे",
      leaveNocStatus: "४. रजा / NOC स्थिती (नोकरीत असल्यास)",
      needsSupportQuestion:
        "हालचाल, वाचन, श्रवण, भाषा, अध्ययन किंवा निवासासाठी तुम्हाला विशेष मदतीची गरज आहे का?",
      describeSupportNeeded:
        "कृपया आवश्यक असलेल्या मदतीचे वर्णन करा (वैद्यकीय निदानाची आवश्यकता नाही)",
    },
    page3: {
      title: "उमेदवार अर्ज — कागदपत्रे अपलोड आणि तपासणी यादी",
      subtitle:
        "स्पष्ट फोटो किंवा PDF (.jpg, .png, .pdf कमाल 5 MB) अपलोड करा. फोटो आपोआप कॉम्प्रेस केले जातात.",
      sec1Title: "अधिकृत पडताळणी कागदपत्रे आणि यादी",
      sec1Desc:
        "खालील कागदपत्रे अपलोड करा किंवा 'प्रलंबित (Pending) / लागू नाही' निवडा.",
      dropzoneClickOrDrag:
        "फाईल निवडण्यासाठी येथे क्लिक करा किंवा ड्रॅग अँड ड्रॉप करा",
      dropzoneFormats:
        "मान्य फॉरमॅट: .JPG, .PNG, .PDF (कमाल 5 MB) · फोटो ऑटो-कम्प्रेस होतात",
      pendingDocIdentify:
        "प्रलंबित कागदपत्र(त्रे) आणि सादर करण्याची अपेक्षित तारीख नमूद करा",
      docs: {
        passportPhotoTitle: "अलीकडील पासपोर्ट आकाराचा फोटो",
        passportPhotoSub:
          "समोरून काढलेला स्पष्ट पासपोर्ट फोटो (.jpg, .png; ऑटो-कम्प्रेस्ड)",
        govIdProofTitle: "आधार कार्ड / पत्ता आणि वयाचा सरकारी ओळख पुरावा",
        govIdProofSub:
          "आधार कार्ड, मतदान कार्ड, ड्रायव्हिंग लायसन्स किंवा पासपोर्ट (.pdf, .jpg, .png)",
        class10Title: "इयत्ता १० वी / समकक्ष प्रमाणपत्र आणि गुणपत्रिका",
        class10Sub: "अधिकृत मंडळाची गुणपत्रिका किंवा उत्तीर्ण प्रमाणपत्र",
        additionalEduTitle: "अतिरिक्त अभ्यासक्रम / उच्चतम शैक्षणिक पुरावा",
        additionalEduSub:
          "इयत्ता १२ वी, डिप्लोमा, पदवी किंवा पूर्व योग प्रशिक्षण प्रमाणपत्र",
        incomeEvidenceTitle:
          "उत्पन्नाचा पुरावा (उत्पन्नाचा दाखला / BPL कार्ड / AAY कार्ड)",
        incomeEvidenceSub:
          "वैध कौटुंबिक उत्पन्नाचा दाखला किंवा BPL/AAY रेशन कार्ड",
        categoryCertTitle:
          "जात / प्रवर्ग / दिव्यांग प्रमाणपत्र (लागू असल्यास)",
        categoryCertSub:
          "SC / ST / OBC / EWS / DNT / दिव्यांग प्रमाणपत्र",
        nominationFormTitle:
          "नामांकन अर्ज (संस्थेमार्फत अर्ज करत असल्यास)",
        nominationFormSub:
          "सहकारी NGO किंवा संस्थेचे शिफारस पत्र",
      },
    },
    page4: {
      title: "उमेदवार अर्ज — प्रतिज्ञापत्र आणि अंतिम सबमिशन",
      subtitle:
        "तुमचा शिष्यवृत्ती अर्ज पूर्ण करण्यासाठी अधिकृत प्रतिज्ञापत्र तपासा आणि पुष्टी करा.",
      sec1Title: "विभाग १: अर्जदाराचे प्रतिज्ञापत्र",
      sec2Title: "विभाग २: अर्ज भरण्यास घेतलेल्या मदतीचा तपशील (ऐच्छिक)",
      declarationHeading: "अधिकृत उमेदवार प्रतिज्ञापत्र — अक्षर योग केंद्र",
      declarationText:
        "मी अक्षर योग केंद्राच्या १,५०० वंचित तरुणांसाठीच्या राष्ट्रीय शिष्यवृत्ती उपक्रमांतर्गत शिष्यवृत्तीसाठी अर्ज करत आहे. मी सादर केलेली माहिती आणि कागदपत्रांच्या प्रती माझ्या माहितीनुसार खऱ्या आहेत याची मी पुष्टी करतो/करते. निवड झाल्यास बेंगळुरू येथील पूर्ण ४५-दिवसांच्या निवासी प्रशिक्षणास उपस्थित राहण्यास मी बांधील आहे.",
      agreeCheckboxLabel:
        "मी वरील अर्जदाराचे प्रतिज्ञापत्र वाचले आहे आणि मला ते मान्य आहे, सादर केलेली सर्व माहिती आणि कागदपत्रे खरी असल्याची मी पुष्टी करतो/करते आणि अर्ज पडताळणीस संमती देतो/देते.",
      placeCity: "ठिकाण / शहर",
      dateLabel: "दिनांक",
      wasAssistedQuestion: "हा अर्ज भरण्यासाठी तुम्हाला कोणी मदत केली का?",
      assistedLanguageUsed: "अर्ज समजावून सांगण्यासाठी वापरलेली भाषा",
      assistantNameContact: "मदतनीसाचे नाव आणि संपर्क क्रमांक",
      assistantConfirmCheckbox:
        "मी पुष्टी करतो/करते की मी या अर्जातील माहिती उमेदवारास त्यांच्या समजणाऱ्या भाषेत अचूकपणे समजावून सांगितली आहे आणि त्यांची उत्तरे प्रामाणिकपणे नोंदवली आहेत.",
    },
  },
};
