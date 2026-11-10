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
  };
  page2: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec2Title: string;
    sec3Title: string;
    sec4Title: string;
  };
  page3: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec1Desc: string;
  };
  page4: {
    title: string;
    subtitle: string;
    sec1Title: string;
    sec2Title: string;
    sec3Title: string;
    declarationText: string;
  };
}

export const WIZARD_TRANSLATIONS: Record<LanguageCode, WizardUITranslations> = {
  en: {
    topBanner: "Bharat Yoga Kranti — Official Candidate Scholarship Application Portal",
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
    requiredNote: "Fields marked with * are mandatory for scholarship verification.",
    compressionBadge: "Auto-Compressed for Fast Upload",
    steps: {
      page1Short: "1. Personal & Education",
      page2Short: "2. Circumstances & Motivation",
      page3Short: "3. Document Checklist",
      page4Short: "4. Declarations & Submit",
    },
    page1: {
      title: "Candidate Application — Personal and Education Details",
      subtitle:
        "National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa",
      sec1Title: "Section 1: Applicant Details",
      sec1Desc:
        "Please enter your personal details exactly as they appear on your official government identity card.",
      sec2Title: "Section 2: Educational Qualifications",
      sec2Desc:
        "Provide details of your academic background and language proficiency.",
    },
    page2: {
      title: "Candidate Application — Circumstances & Motivation",
      subtitle:
        "National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa",
      sec1Title: "Section 1: Economic Circumstances",
      sec2Title: "Section 2: Priority & Relevant Circumstances",
      sec3Title: "Section 3: Employment and Availability",
      sec4Title: "Section 4: Motivation & Support Requirements",
    },
    page3: {
      title: "Candidate Application — Document Uploads & Checklist",
      subtitle:
        "Upload clear photos or PDFs (.jpg, .png, .pdf up to 5 MB). Images are automatically compressed for low bandwidth.",
      sec1Title: "Official Verification Documents & Checklist",
      sec1Desc:
        "Upload each document below or mark as 'Pending / Not Applicable' if you will submit it prior to verification.",
    },
    page4: {
      title: "Candidate Application — Declarations & Submission",
      subtitle:
        "Review and sign the official candidate declaration to complete your scholarship application.",
      sec1Title: "Section 1: Applicant Declaration",
      sec2Title: "Section 2: Assisted Application Details (Optional)",
      sec3Title: "Section 3: Supporting Employment Declarations (Form G1 / G2)",
      declarationText:
        "I apply for a scholarship under the National Scholarship Programme for 1,500 Underprivileged Youth of Akshar Yoga Kendraa. I confirm that the information and copies submitted are true to the best of my knowledge and accurately represent my identity, educational qualifications, and annual household income. I understand that submission of this application does not guarantee automatic selection, that all particulars are subject to institutional verification, and that any false or misleading information may result in cancellation of my application or scholarship at any stage. If selected, I commit to attending the full 45-day residential training in Bengaluru and abiding by the code of conduct of Akshar Yoga Kendraa.",
    },
  },
  kn: {
    topBanner: "ಭಾರತ್ ಯೋಗ ಕ್ರಾಂತಿ — ಅಧಿಕೃತ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ಪೋರ್ಟಲ್",
    topBannerBadge: "100% ಉಚಿತ ವಸತಿ ತರಬೇತಿ",
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
    compressionBadge: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಕುಚಿತಗೊಳಿಸಲಾಗಿದೆ (Compressed)",
    steps: {
      page1Short: "1. ವೈಯಕ್ತಿಕ ಮತ್ತು ಶಿಕ್ಷಣ",
      page2Short: "2. ಆರ್ಥಿಕ ಸ್ಥಿತಿ ಮತ್ತು ಪ್ರೇರಣೆ",
      page3Short: "3. ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್",
      page4Short: "4. ಘೋಷಣೆ ಮತ್ತು ಸಲ್ಲಿಕೆ",
    },
    page1: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ವೈಯಕ್ತಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಿವರಗಳು",
      subtitle:
        "1,500 ಅರ್ಹ ಯುವಜನರಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮ | ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
      sec1Title: "ವಿಭಾಗ 1: ಅರ್ಜಿದಾರರ ವಿವರಗಳು",
      sec1Desc: "ನಿಮ್ಮ ಅಧಿಕೃತ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿರುವಂತೆ ನಿಖರವಾದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
      sec2Title: "ವಿಭಾಗ 2: ಶೈಕ್ಷಣಿಕ ವಿದ್ಯಾರ್ಹತೆಗಳು",
      sec2Desc: "ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಹಿನ್ನೆಲೆ ಮತ್ತು ಭಾಷಾ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.",
    },
    page2: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಪ್ರೇರಣೆ",
      subtitle:
        "1,500 ಅರ್ಹ ಯುವಜನರಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮ | ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರ",
      sec1Title: "ವಿಭಾಗ 1: ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಕುಟುಂಬದ ಆದಾಯ",
      sec2Title: "ವಿಭಾಗ 2: ಆದ್ಯತೆ ಮತ್ತು ಸಂಬಂಧಿತ ಪರಿಸ್ಥಿತಿಗಳು",
      sec3Title: "ವಿಭಾಗ 3: ಉದ್ಯೋಗ ಮತ್ತು ಲಭ್ಯತೆ",
      sec4Title: "ವಿಭಾಗ 4: ಪ್ರೇರಣೆ ಮತ್ತು ಬೆಂಬಲದ ಅಗತ್ಯತೆಗಳು",
    },
    page3: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್ ಮತ್ತು ಪರಿಶೀಲನಾಪಟ್ಟಿ",
      subtitle:
        "ಸ್ಪಷ್ಟವಾದ ಫೋಟೋ ಅಥವಾ PDF ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (.jpg, .png, .pdf ಗರಿಷ್ಠ 5 MB). ಫೋಟೋಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಂಪ್ರೆಸ್ ಮಾಡಲಾಗುತ್ತದೆ.",
      sec1Title: "ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್ ಮತ್ತು ಸ್ಥಿತಿ",
      sec1Desc: "ಪ್ರತಿ ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ 'ಬಾಕಿ ಇದೆ (Pending)' ಎಂದು ಗುರುತಿಸಿ.",
    },
    page4: {
      title: "ಅಭ್ಯರ್ಥಿ ಅರ್ಜಿ — ಘೋಷಣೆಗಳು ಮತ್ತು ಅಂತಿಮ ಸಲ್ಲಿಕೆ",
      subtitle:
        "ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಅಧಿಕೃತ ಘೋಷಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ.",
      sec1Title: "ವಿಭಾಗ 1: ಅರ್ಜಿದಾರರ ಘೋಷಣೆ",
      sec2Title: "ವಿಭಾಗ 2: ಅರ್ಜಿ ಭರ್ತಿ ಮಾಡಲು ಪಡೆದ ಸಹಾಯದ ವಿವರಗಳು (ಐಚ್ಛಿಕ)",
      sec3Title: "ವಿಭಾಗ 3: ಉದ್ಯೋಗ ಸಂಬಂಧಿತ ಘೋಷಣೆಗಳು (Form G1 / G2)",
      declarationText:
        "ನಾನು ಅಕ್ಷರ ಯೋಗ ಕೇಂದ್ರದ 1,500 ಅರ್ಹ ಯುವಜನರ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಾರ್ಯಕ್ರಮದ ಅಡಿಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿವೇತನಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇನೆ. ನಾನು ಸಲ್ಲಿಸಿರುವ ಮಾಹಿತಿ ಮತ್ತು ದಾಖಲೆಗಳ ಪ್ರತಿಗಳು ನನ್ನ ತಿಳುವಳಿಕೆಯಂತೆ ಸತ್ಯವಾಗಿವೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ. ಯಾವುದೇ ತಪ್ಪು ಮಾಹಿತಿಯು ನನ್ನ ಅರ್ಜಿ ಅಥವಾ ವಿದ್ಯಾರ್ಥಿವೇತನದ ರದ್ದತಿಗೆ ಕಾರಣವಾಗಬಹುದು ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ಆಯ್ಕೆಯಾದಲ್ಲಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪೂರ್ಣ 45 ದಿನಗಳ ವಸತಿ ತರಬೇತಿಗೆ ಹಾಜರಾಗಲು ಬದ್ಧನಾಗಿರುತ್ತೇನೆ.",
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
    steps: {
      page1Short: "1. व्यक्तिगत व शिक्षा विवरण",
      page2Short: "2. आर्थिक स्थिति व प्रेरणा",
      page3Short: "3. दस्तावेज़ अपलोड",
      page4Short: "4. घोषणा व सबमिशन",
    },
    page1: {
      title: "अभ्यर्थी आवेदन — व्यक्तिगत और शैक्षणिक विवरण",
      subtitle:
        "1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम | अक्षर योग केंद्र",
      sec1Title: "अनुभाग 1: आवेदक का विवरण",
      sec1Desc: "कृपया अपना विवरण ठीक वैसे ही दर्ज करें जैसा आपके सरकारी पहचान पत्र पर है।",
      sec2Title: "अनुभाग 2: शैक्षणिक योग्यताएं",
      sec2Desc: "अपनी शैक्षणिक योग्यता और भाषा ज्ञान का विवरण दें।",
    },
    page2: {
      title: "अभ्यर्थी आवेदन — परिस्थितियां और प्रेरणा",
      subtitle:
        "1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम | अक्षर योग केंद्र",
      sec1Title: "अनुभाग 1: आर्थिक परिस्थितियां",
      sec2Title: "अनुभाग 2: प्राथमिकता और प्रासंगिक परिस्थितियां",
      sec3Title: "अनुभाग 3: रोजगार और उपलब्धता",
      sec4Title: "अनुभाग 4: प्रेरणा और सहायता आवश्यकताएं",
    },
    page3: {
      title: "अभ्यर्थी आवेदन — दस्तावेज़ अपलोड और जांच सूची",
      subtitle:
        "स्पष्ट फोटो या PDF (.jpg, .png, .pdf अधिकतम 5 MB) अपलोड करें। अपलोड की गई छवियां स्वतः कंप्रेस हो जाती हैं।",
      sec1Title: "आधिकारिक सत्यापन दस्तावेज़ और चेकलिस्ट",
      sec1Desc: "नीचे दिए गए दस्तावेज़ अपलोड करें या 'लंबित (Pending) / लागू नहीं' चुनें।",
    },
    page4: {
      title: "अभ्यर्थी आवेदन — घोषणाएं और अंतिम सबमिशन",
      subtitle:
        "अपना छात्रवृत्ति आवेदन पूरा करने के लिए आधिकारिक घोषणा की समीक्षा करें और हस्ताक्षर करें।",
      sec1Title: "अनुभाग 1: आवेदक की घोषणा",
      sec2Title: "अनुभाग 2: फॉर्म भरने में सहायता का विवरण (वैकल्पिक)",
      sec3Title: "अनुभाग 3: सहायक रोजगार घोषणाएं (Form G1 / G2)",
      declarationText:
        "मैं अक्षर योग केंद्र के 1,500 वंचित युवाओं के लिए राष्ट्रीय छात्रवृत्ति कार्यक्रम के तहत छात्रवृत्ति के लिए आवेदन करता/करती हूं। मैं पुष्टि करता/करती हूं कि प्रस्तुत जानकारी और प्रतियां मेरी जानकारी के अनुसार सत्य हैं। मैं समझता/समझती हूं कि कोई भी गलत जानकारी किसी भी स्तर पर मेरे आवेदन या छात्रवृत्ति को रद्द करने का कारण बन सकती है, और चयनित होने पर मैं बेंगलुरु में पूरे 45-दिवसीय आवासीय प्रशिक्षण में भाग लेने के लिए प्रतिबद्ध हूं।",
    },
  },
  ta: {
    topBanner: "பாரத் யோகா கிராந்தி — அதிகாரப்பூர்வ உதவித்தொகை விண்ணப்பப் படிவம்",
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
    submitApplicationButton: "உதவித்தொகை விண்ணப்பத்தை சமர்ப்பிக்கவும்",
    submittingButton: "விண்ணப்பம் சமர்ப்பிக்கப்படுகிறது...",
    requiredNote: "* குறியிடப்பட்ட புலங்கள் கட்டாயமானவை.",
    compressionBadge: "தானாக சுருக்கப்பட்டது (Auto-Compressed)",
    steps: {
      page1Short: "1. தனிப்பட்ட & கல்வி விவரம்",
      page2Short: "2. பொருளாதார நிலை & நோக்கம்",
      page3Short: "3. ஆவணங்கள் பதிவேற்றம்",
      page4Short: "4. உறுதிமொழி & சமர்ப்பிப்பு",
    },
    page1: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — தனிப்பட்ட மற்றும் கல்வி விவரங்கள்",
      subtitle:
        "1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டம் | அக்ஷர் யோகா கேந்திரா",
      sec1Title: "பிரிவு 1: விண்ணப்பதாரர் விவரங்கள்",
      sec1Desc: "உங்கள் அரசு அடையாள அட்டையில் உள்ளவாறு விவரங்களைத் துல்லியமாக நிரப்பவும்.",
      sec2Title: "பிரிவு 2: கல்வித் தகுதிகள்",
      sec2Desc: "உங்கள் கல்வித் தகுதி மற்றும் மொழித் திறன் விவரங்களை வழங்கவும்.",
    },
    page2: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — சூழ்நிலைகள் மற்றும் நோக்கம்",
      subtitle:
        "1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டம் | அக்ஷர் யோகா கேந்திரா",
      sec1Title: "பிரிவு 1: பொருளாதாரச் சூழ்நிலைகள்",
      sec2Title: "பிரிவு 2: முன்னுரிமை மற்றும் தொடர்புடைய சூழ்நிலைகள்",
      sec3Title: "பிரிவு 3: வேலைவாய்ப்பு மற்றும் வருகை",
      sec4Title: "பிரிவு 4: நோக்கம் மற்றும் ஆதரவுத் தேவைகள்",
    },
    page3: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — ஆவணங்கள் பதிவேற்றம்",
      subtitle:
        "தெளிவான புகைப்படம் அல்லது PDF (.jpg, .png, .pdf அதிகபட்சம் 5 MB) பதிவேற்றவும். புகைப்படங்கள் தானாகச் சுருக்கப்படும்.",
      sec1Title: "சரிபார்ப்பு ஆவணங்கள் மற்றும் பட்டியல்",
      sec1Desc: "ஆவணங்களைப் பதிவேற்றவும் அல்லது 'நிலுவையில் (Pending)' எனக் குறிப்பிடவும்.",
    },
    page4: {
      title: "விண்ணப்பதாரர் விண்ணப்பம் — உறுதிமொழி மற்றும் சமர்ப்பிப்பு",
      subtitle:
        "உங்கள் விண்ணப்பத்தை நிறைவு செய்ய உறுதிமொழியைப் படித்து கையொப்பமிடவும்.",
      sec1Title: "பிரிவு 1: விண்ணப்பதாரர் உறுதிமொழி",
      sec2Title: "பிரிவு 2: படிவம் நிரப்ப உதவியவர் விவரங்கள் (விருப்பத்திற்குரியது)",
      sec3Title: "பிரிவு 3: வேலைவாய்ப்பு உறுதிமொழிப் படிவங்கள் (Form G1 / G2)",
      declarationText:
        "அக்ஷர் யோகா கேந்திராவின் 1,500 இளைஞர்களுக்கான தேசிய உதவித்தொகைத் திட்டத்தின் கீழ் நான் விண்ணப்பிக்கிறேன். நான் சமர்ப்பித்துள்ள தகவல்கள் மற்றும் ஆவண நகல்கள் அனைத்தும் என் அறிவுக்கு எட்டியவரை உண்மையானவை என உறுதிப்படுத்துகிறேன். தேர்ந்தெடுக்கப்பட்டால் பெங்களூருவில் நடைபெறும் முழு 45 நாள் உறைவிடப் பயிற்சியில் கலந்துகொள்வேன் என உறுதியளிக்கிறேன்.",
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
    steps: {
      page1Short: "1. వ్యక్తిగత & విద్యా వివరాలు",
      page2Short: "2. ఆర్థిక స్థితి & ప్రేరణ",
      page3Short: "3. డాక్యుమెంట్ల అప్‌లోడ్",
      page4Short: "4. డిక్లరేషన్ & సమర్పణ",
    },
    page1: {
      title: "అభ్యర్థి దరఖాస్తు — వ్యక్తిగత మరియు విద్యా వివరాలు",
      subtitle:
        "1,500 మంది యువత కోసం జాతీయ స్కాలర్‌షిప్ కార్యక్రమం | అక్షర్ యోగా కేంద్ర",
      sec1Title: "విభాగం 1: దరఖాస్తుదారుని వివరాలు",
      sec1Desc: "మీ ప్రభుత్వ గుర్తింపు కార్డులో ఉన్నట్లుగా వివరాలను నమోదు చేయండి.",
      sec2Title: "విభాగం 2: విద్యార్హతలు",
      sec2Desc: "మీ విద్యార్హతలు మరియు భాషా వివరాలను అందించండి.",
    },
    page2: {
      title: "అభ్యర్థి దరఖాస్తు — పరిస్థితులు & ప్రేరణ",
      subtitle:
        "1,500 మంది యువత కోసం జాతీయ స్కాలర్‌షిప్ కార్యక్రమం | అక్షర్ యోగా కేంద్ర",
      sec1Title: "విభాగం 1: ఆర్థిక పరిస్థితులు",
      sec2Title: "విభాగం 2: ప్రాధాన్యత & సంబంధిత పరిస్థితులు",
      sec3Title: "విభాగం 3: ఉపాధి మరియు లభ్యత",
      sec4Title: "విభాగం 4: ప్రేరణ & సహాయక అవసరాలు",
    },
    page3: {
      title: "అభ్యర్థి దరఖాస్తు — డాక్యుమెంట్ అప్‌లోడ్‌లు & చెక్‌లిస్ట్",
      subtitle:
        "స్పష్టమైన ఫోటోలు లేదా PDF (.jpg, .png, .pdf గరిష్టంగా 5 MB) అప్‌లోడ్ చేయండి. ఫోటోలు ఆటోమేటిక్‌గా కంప్రెస్ చేయబడతాయి.",
      sec1Title: "ధృవీకరణ పత్రాలు & చెక్‌లిస్ట్",
      sec1Desc: "ప్రతి డాక్యుమెంట్‌ను అప్‌లోడ్ చేయండి లేదా 'పెండింగ్ (Pending)' అని ఎంచుకోండి.",
    },
    page4: {
      title: "అభ్యర్థి దరఖాస్తు — డిక్లరేషన్లు & సమర్పణ",
      subtitle:
        "మీ స్కాలర్‌షిప్ దరఖాస్తును పూర్తి చేయడానికి డిక్లరేషన్‌ను సమీక్షించి సంతకం చేయండి.",
      sec1Title: "విభాగం 1: దరఖాస్తుదారుని డిక్లరేషన్",
      sec2Title: "విభాగం 2: దరఖాస్తు నింపడంలో సహాయం వివరాలు (ఐచ్ఛికం)",
      sec3Title: "విభాగం 3: ఉపాధి డిక్లరేషన్లు (Form G1 / G2)",
      declarationText:
        "అక్షర్ యోగా కేంద్ర నిర్వహిస్తున్న 1,500 మంది యువత జాతీయ స్కాలర్‌షిప్ కార్యక్రమం కింద నేను దరఖాస్తు చేస్తున్నాను. నేను సమర్పించిన సమాచారం మరియు పత్రాలు నాకు తెలిసినంత వరకు నిజమైనవని ధృవీకరిస్తున్నాను. ఎంపికైతే బెంగళూరులో పూర్తి 45 రోజుల రెసిడెన్షియల్ శిక్షణకు హాజరవుతానని తెలియజేస్తున్నాను.",
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
    steps: {
      page1Short: "१. वैयक्तिक व शिक्षण",
      page2Short: "२. आर्थिक स्थिती व प्रेरणा",
      page3Short: "३. कागदपत्रे अपलोड",
      page4Short: "४. प्रतिज्ञापत्र व सबमिशन",
    },
    page1: {
      title: "उमेदवार अर्ज — वैयक्तिक आणि शैक्षणिक तपशील",
      subtitle:
        "१,५०० वंचित तरुणांसाठी राष्ट्रीय शिष्यवृत्ती उपक्रम | अक्षर योग केंद्र",
      sec1Title: "विभाग १: अर्जदाराचा तपशील",
      sec1Desc: "कृपया तुमच्या अधिकृत सरकारी ओळखपत्राप्रमाणे अचूक माहिती भरा.",
      sec2Title: "विभाग २: शैक्षणिक पात्रता",
      sec2Desc: "तुमची शैक्षणिक पार्श्वभूमी आणि अवगत भाषांचा तपशील द्या.",
    },
    page2: {
      title: "उमेदवार अर्ज — परिस्थिती आणि प्रेरणा",
      subtitle:
        "१,५०० वंचित तरुणांसाठी राष्ट्रीय शिष्यवृत्ती उपक्रम | अक्षर योग केंद्र",
      sec1Title: "विभाग १: आर्थिक परिस्थिती",
      sec2Title: "विभाग २: प्राधान्य आणि संबंधित परिस्थिती",
      sec3Title: "विभाग ३: रोजगार आणि उपलब्धता",
      sec4Title: "विभाग ४: प्रेरणा आणि सहाय्य आवश्यकता",
    },
    page3: {
      title: "उमेदवार अर्ज — कागदपत्रे अपलोड आणि तपासणी यादी",
      subtitle:
        "स्पष्ट फोटो किंवा PDF (.jpg, .png, .pdf कमाल 5 MB) अपलोड करा. फोटो आपोआप कॉम्प्रेस केले जातात.",
      sec1Title: "अधिकृत पडताळणी कागदपत्रे",
      sec1Desc: "खालील कागदपत्रे अपलोड करा किंवा 'प्रलंबित (Pending)' निवडा.",
    },
    page4: {
      title: "उमेदवार अर्ज — प्रतिज्ञापत्र आणि अंतिम सबमिशन",
      subtitle:
        "तुमचा शिष्यवृत्ती अर्ज पूर्ण करण्यासाठी अधिकृत प्रतिज्ञापत्र तपासा आणि स्वाक्षरी करा.",
      sec1Title: "विभाग १: अर्जदाराचे प्रतिज्ञापत्र",
      sec2Title: "विभाग २: अर्ज भरण्यास घेतलेल्या मदतीचा तपशील (ऐच्छिक)",
      sec3Title: "विभाग ३: रोजगारविषयक घोषणापत्रे (Form G1 / G2)",
      declarationText:
        "मी अक्षर योग केंद्राच्या १,५०० वंचित तरुणांसाठीच्या राष्ट्रीय शिष्यवृत्ती उपक्रमांतर्गत शिष्यवृत्तीसाठी अर्ज करत आहे. मी सादर केलेली माहिती आणि कागदपत्रांच्या प्रती माझ्या माहितीनुसार खऱ्या आहेत याची मी पुष्टी करतो/करते. निवड झाल्यास बेंगळुरू येथील पूर्ण ४५ दिवसांच्या निवासी प्रशिक्षणास उपस्थित राहण्यास मी बांधील आहे.",
    },
  },
};
