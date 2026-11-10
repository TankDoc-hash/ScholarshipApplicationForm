"use client";

import React, { useState, useEffect } from "react";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles,
  Printer,
  FolderCheck,
  Info,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import CompressedFileUploader, {
  DocumentItemStatus,
} from "@/components/CompressedFileUploader";
import { CompressedDocumentFile } from "@/utils/imageCompression";

export interface EducationRow {
  id: string;
  level: string;
  boardInstitution: string;
  yearOfPassing: string;
  certificateStatus: "Attached" | "Pending" | "N/A";
}

export interface IncomeSourceRow {
  id: string;
  earnerName: string;
  relationship: string;
  annualAmount: string;
}

export interface ApplicationFormState {
  // PAGE 1: Personal & Educational Details
  fullName: string;
  dob: string;
  age: string;
  indianCitizen: "Yes" | "No" | "";
  gender:
    | "Woman"
    | "Man"
    | "Other or self-describe"
    | "Prefer not to say"
    | "";
  genderSelfDescribe: string;
  mobileNumber: string;
  alternativeContact: string;
  email: string;
  guardianNameRelation: string;
  currentAddress: string;
  currentPinCode: string;
  sameAsCurrentAddress: boolean;
  permanentAddress: string;
  villageTownDistrictState: string;
  residenceClassification: "Rural" | "Urban" | "";
  tribalCommunity: string;
  govIdType: string;
  govIdNumber: string;
  educationRows: EducationRow[];
  languagesUnderstood: string;
  preferredInterviewLanguage: string;

  // PAGE 2: Circumstances & Support Requirements
  financialYear: string;
  totalAnnualFamilyIncome: string;
  totalHouseholdMembers: string;
  earningMembersCount: string;
  dependantsCount: string;
  incomeSources: IncomeSourceRow[];
  otherIncomeSupportDetails: string;
  incomeProofTypes: string[];
  incomeIssuingAuthority: string;
  incomeIssueDate: string;
  incomeCertRefNumber: string;
  materialIncomeChangeDetails: string;
  priorityCircumstances: string[];
  priorityCircumstanceOtherText: string;
  priorityCategoryClaimed: string[];
  priorityEvidenceStatus: "Attached" | "Pending" | "";
  presentEmploymentStatus:
    | "Student"
    | "Unemployed"
    | "Employed"
    | "Self-employed"
    | "Informal or daily-wage work"
    | "";
  monthlyIncome: string;
  canAttendCompleteCourse: "Yes" | "Need to discuss support" | "";
  leaveNocStatus:
    | "Available"
    | "To be obtained before joining"
    | "Not applicable"
    | "";
  needsSupportAssistance: "No" | "Yes" | "";
  supportAssistanceDescription: string;

  // PAGE 3: Document Statuses & Pending Note
  docStatuses: Record<string, DocumentItemStatus>;
  pendingDocumentsExplanation: string;

  // PAGE 4: Declarations & Submission
  declarationAgreed: boolean;
  declarationPlace: string;
  declarationDate: string;
  wasAssisted: boolean;
  assistedLanguageUsed: string;
  assistantNameContact: string;
  assistantConfirmedCheckbox: boolean;
}

const DEFAULT_EDUCATION_ROWS: EducationRow[] = [
  {
    id: "edu-10",
    level: "Class 10 / Equivalent",
    boardInstitution: "",
    yearOfPassing: "",
    certificateStatus: "Attached",
  },
  {
    id: "edu-12",
    level: "Class 12 / Diploma",
    boardInstitution: "",
    yearOfPassing: "",
    certificateStatus: "N/A",
  },
  {
    id: "edu-grad",
    level: "Graduation / Other",
    boardInstitution: "",
    yearOfPassing: "",
    certificateStatus: "N/A",
  },
  {
    id: "edu-yoga",
    level: "Yoga Training (if any)",
    boardInstitution: "",
    yearOfPassing: "",
    certificateStatus: "N/A",
  },
];

const DEFAULT_INCOME_SOURCES: IncomeSourceRow[] = [
  {
    id: "inc-1",
    earnerName: "",
    relationship: "",
    annualAmount: "",
  },
];

const DOCUMENT_CHECKLIST_ITEMS = [
  {
    key: "passportPhoto",
    title: "Recent Identification Photograph (Passport size)",
    subtitle:
      "Clear front-facing passport photograph (.jpg, .png; auto-compressed)",
    infoTooltip:
      "Mandatory: Upload a clear passport-size photo of the applicant.",
    required: true,
    allowNotApplicable: false,
  },
  {
    key: "govIdProof",
    title: "Aadhaar Card / Government ID Proof of Address & Age",
    subtitle:
      "Aadhaar Card, Voter ID, Driving Licence, or Passport (.pdf, .jpg, .png)",
    infoTooltip:
      "Mandatory: Upload your Aadhaar Card or Government ID showing your name, date of birth, and address.",
    required: true,
    allowNotApplicable: false,
  },
  {
    key: "class10Certificate",
    title: "Class 10 / Equivalent Certificate & Marks Sheet",
    subtitle: "Official board marks sheet or passing certificate",
    infoTooltip:
      "Mandatory: Minimum 10th standard pass certificate is required for eligibility verification.",
    required: true,
    allowNotApplicable: false,
  },
  {
    key: "additionalEducation",
    title: "Additional Course / Highest Educational Evidence",
    subtitle: "Class 12, Diploma, Degree, or prior Yoga Training certificate",
    required: false,
    allowNotApplicable: true,
  },
  {
    key: "incomeEvidence",
    title: "Income Evidence (Income Certificate / BPL Card / AAY Card)",
    subtitle:
      "Valid family income certificate, Ration/BPL/AAY card, or provisional evidence",
    infoTooltip:
      "Mandatory: Proof that annual household income is within the scholarship threshold (up to ₹3,00,000).",
    required: true,
    allowNotApplicable: false,
  },
  {
    key: "categoryDisabilityCert",
    title: "Category / Caste / Disability Certificate (if claimed)",
    subtitle:
      "SC / ST / OBC / EWS / DNT / Disability certificate if claimed on Page 2",
    required: false,
    allowNotApplicable: true,
  },
  {
    key: "nominationForm",
    title: "Nomination Form (if applying through an organization)",
    subtitle: "Endorsement or nomination letter from partner NGO / institution",
    required: false,
    allowNotApplicable: true,
  },
];

const INITIAL_FORM_STATE: ApplicationFormState = {
  fullName: "",
  dob: "",
  age: "",
  indianCitizen: "Yes",
  gender: "",
  genderSelfDescribe: "",
  mobileNumber: "",
  alternativeContact: "",
  email: "",
  guardianNameRelation: "",
  currentAddress: "",
  currentPinCode: "",
  sameAsCurrentAddress: false,
  permanentAddress: "",
  villageTownDistrictState: "",
  residenceClassification: "",
  tribalCommunity: "",
  govIdType: "Aadhaar Card",
  govIdNumber: "",
  educationRows: DEFAULT_EDUCATION_ROWS,
  languagesUnderstood: "",
  preferredInterviewLanguage: "English",

  financialYear: "2025-2026",
  totalAnnualFamilyIncome: "",
  totalHouseholdMembers: "",
  earningMembersCount: "",
  dependantsCount: "",
  incomeSources: DEFAULT_INCOME_SOURCES,
  otherIncomeSupportDetails: "",
  incomeProofTypes: [],
  incomeIssuingAuthority: "",
  incomeIssueDate: "",
  incomeCertRefNumber: "",
  materialIncomeChangeDetails: "",
  priorityCircumstances: [],
  priorityCircumstanceOtherText: "",
  priorityCategoryClaimed: [],
  priorityEvidenceStatus: "",
  presentEmploymentStatus: "",
  monthlyIncome: "",
  canAttendCompleteCourse: "Yes",
  leaveNocStatus: "Not applicable",
  needsSupportAssistance: "No",
  supportAssistanceDescription: "",

  docStatuses: {
    passportPhoto: "uploaded",
    govIdProof: "uploaded",
    class10Certificate: "uploaded",
    additionalEducation: "na",
    incomeEvidence: "uploaded",
    categoryDisabilityCert: "na",
    nominationForm: "na",
  },
  pendingDocumentsExplanation: "",

  declarationAgreed: false,
  declarationPlace: "",
  declarationDate: new Date().toISOString().split("T")[0],
  wasAssisted: false,
  assistedLanguageUsed: "",
  assistantNameContact: "",
  assistantConfirmedCheckbox: false,
};

const DRAFT_STORAGE_KEY = "akshar_byk_candidate_application_draft_v2";

function calculateAgeFromDob(dobString: string): string {
  if (!dobString) return "";
  const dob = new Date(dobString);
  if (Number.isNaN(dob.getTime())) return "";
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age >= 0 && age <= 120 ? String(age) : "";
}

function MandatoryLabel({
  text,
  tooltip,
}: {
  text: string;
  tooltip: string;
}) {
  return (
    <label className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
      <span>{text}</span>
      <span className="text-[#BD7959] font-bold">*</span>
      <span
        title={tooltip}
        aria-label={tooltip}
        className="inline-flex items-center text-[#294735]/75 hover:text-[#16261D] cursor-help transition-colors"
      >
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </span>
    </label>
  );
}

export default function ScholarshipApplicationWizard() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<ApplicationFormState>(INITIAL_FORM_STATE);
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, CompressedDocumentFile | null>
  >({
    passportPhoto: null,
    govIdProof: null,
    class10Certificate: null,
    additionalEducation: null,
    incomeEvidence: null,
    categoryDisabilityCert: null,
    nominationForm: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pageBannerError, setPageBannerError] = useState<string | null>(null);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceNumber: string;
    submittedAt: string;
    localCandidateFolderPath?: string | null;
    driveFolderUrl?: string | null;
    compressedCount: number;
  } | null>(null);

  // Load saved draft from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.form) {
            setForm((prev) => ({
              ...prev,
              ...parsed.form,
              declarationDate:
                parsed.form.declarationDate ||
                new Date().toISOString().split("T")[0],
            }));
          }
          if (parsed?.step && [1, 2, 3, 4].includes(parsed.step)) {
            setCurrentStep(parsed.step);
          }
          if (parsed?.savedAt) {
            setDraftSavedAt(parsed.savedAt);
          }
        }
      } catch {
        // Ignore corrupted draft
      }
    }
  }, []);

  // Auto-save text fields to localStorage whenever form changes
  useEffect(() => {
    if (typeof window !== "undefined" && !submissionResult) {
      const timeout = setTimeout(() => {
        try {
          const timestamp = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          window.localStorage.setItem(
            DRAFT_STORAGE_KEY,
            JSON.stringify({
              form,
              step: currentStep,
              savedAt: timestamp,
            })
          );
          setDraftSavedAt(timestamp);
        } catch {
          // Ignore storage quota errors
        }
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [form, currentStep, submissionResult]);

  // Keep Permanent Address synced if "Same as Current Address" is checked
  useEffect(() => {
    if (form.sameAsCurrentAddress) {
      const combined = form.currentPinCode
        ? `${form.currentAddress} - PIN: ${form.currentPinCode}`
        : form.currentAddress;
      setForm((prev) => ({
        ...prev,
        permanentAddress: combined,
      }));
    }
  }, [form.sameAsCurrentAddress, form.currentAddress, form.currentPinCode]);

  const updateField = <K extends keyof ApplicationFormState>(
    key: K,
    value: ApplicationFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    }
    setPageBannerError(null);
  };

  const toggleCheckboxArray = (
    key:
      | "incomeProofTypes"
      | "priorityCircumstances"
      | "priorityCategoryClaimed",
    item: string
  ) => {
    setForm((prev) => {
      const list = prev[key];
      const exists = list.includes(item);
      return {
        ...prev,
        [key]: exists ? list.filter((x) => x !== item) : [...list, item],
      };
    });
  };

  const handleManualSaveDraft = () => {
    if (typeof window !== "undefined") {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      window.localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({
          form,
          step: currentStep,
          savedAt: timestamp,
        })
      );
      setDraftSavedAt(timestamp);
    }
  };

  const handleClearDraft = () => {
    if (
      typeof window !== "undefined" &&
      window.confirm(
        "Are you sure you want to reset all form fields and start fresh?"
      )
    ) {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      setForm(INITIAL_FORM_STATE);
      setUploadedFiles({
        passportPhoto: null,
        govIdProof: null,
        class10Certificate: null,
        additionalEducation: null,
        incomeEvidence: null,
        categoryDisabilityCert: null,
        nominationForm: null,
      });
      setErrors({});
      setPageBannerError(null);
      setCurrentStep(1);
    }
  };

  // Navigate & focus directly on the first field with an error
  const scrollToErrorField = (errorKey: string) => {
    if (typeof window === "undefined") return;
    setTimeout(() => {
      const targetEl = document.getElementById(`field-${errorKey}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
        const focusable = targetEl.querySelector<HTMLElement>(
          "input, select, textarea, button"
        );
        if (focusable) {
          focusable.focus({ preventScroll: true });
        }
      }
    }, 60);
  };

  // Step-by-Step Validation
  const validateStep = (step: 1 | 2 | 3 | 4): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.fullName.trim()) {
        newErrors.fullName = "Full Name (as on official ID) is required.";
      }
      if (!form.dob) {
        newErrors.dob = "Date of Birth is required.";
      }
      const numericAge = Number(form.age);
      if (!form.age || Number.isNaN(numericAge) || numericAge < 15) {
        newErrors.age = "Please enter a valid age (18+ recommended).";
      }
      if (!form.indianCitizen) {
        newErrors.indianCitizen = "Please select citizenship status.";
      }
      if (!form.gender) {
        newErrors.gender = "Please select a gender option.";
      }
      if (
        form.gender === "Other or self-describe" &&
        !form.genderSelfDescribe.trim()
      ) {
        newErrors.genderSelfDescribe = "Please specify your gender description.";
      }
      const digits = form.mobileNumber.replace(/\D/g, "");
      if (digits.length < 10) {
        newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
      }
      if (form.email.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.trim())) {
          newErrors.email = "Please enter a valid email address.";
        }
      }
      if (!form.guardianNameRelation.trim()) {
        newErrors.guardianNameRelation =
          "Parent / Guardian / Spouse Name & Relationship is required.";
      }
      if (!form.currentAddress.trim()) {
        newErrors.currentAddress = "Current Address is required.";
      }
      if (!/^\d{6}$/.test(form.currentPinCode.trim())) {
        newErrors.currentPinCode = "Please enter a valid 6-digit PIN code.";
      }
      if (!form.permanentAddress.trim()) {
        newErrors.permanentAddress = "Permanent Address is required.";
      }
      if (!form.villageTownDistrictState.trim()) {
        newErrors.villageTownDistrictState =
          "Village / Town, District, and State is required.";
      }
      if (!form.residenceClassification) {
        newErrors.residenceClassification =
          "Please select Rural or Urban classification.";
      }

      if (form.govIdType === "Aadhaar Card") {
        const aadhaarDigits = form.govIdNumber.replace(/\D/g, "");
        if (aadhaarDigits.length !== 12) {
          newErrors.govIdNumber =
            "Please enter a valid 12-digit Aadhaar Card number.";
        }
      } else if (!form.govIdNumber.trim() || form.govIdNumber.trim().length < 4) {
        newErrors.govIdNumber =
          "Please enter your full Government ID number.";
      }

      if (!form.languagesUnderstood.trim()) {
        newErrors.languagesUnderstood =
          "Please enter the languages you understand.";
      }
      if (!form.preferredInterviewLanguage.trim()) {
        newErrors.preferredInterviewLanguage =
          "Please specify your preferred interview language.";
      }
    }

    if (step === 2) {
      if (
        !form.totalAnnualFamilyIncome.trim() ||
        Number(form.totalAnnualFamilyIncome) < 0
      ) {
        newErrors.totalAnnualFamilyIncome =
          "Total Annual Family Income (₹) is required.";
      }
      if (!form.presentEmploymentStatus) {
        newErrors.presentEmploymentStatus =
          "Please select your present status.";
      }
      if (!form.canAttendCompleteCourse) {
        newErrors.canAttendCompleteCourse =
          "Please confirm your availability for the 45-day course.";
      }
      if (
        form.needsSupportAssistance === "Yes" &&
        !form.supportAssistanceDescription.trim()
      ) {
        newErrors.supportAssistanceDescription =
          "Please describe the support or accommodation needed.";
      }
    }

    if (step === 3) {
      for (const item of DOCUMENT_CHECKLIST_ITEMS) {
        const st = form.docStatuses[item.key];
        if (st === "uploaded" && !uploadedFiles[item.key]) {
          if (item.required) {
            newErrors[`doc_${item.key}`] =
              `Please upload ${item.title} or mark it as 'Pending' if you will submit it later.`;
          } else {
            newErrors[`doc_${item.key}`] =
              `Please attach a file or switch status to 'Pending' or 'Not Applicable'.`;
          }
        }
      }

      const hasAnyPending = Object.values(form.docStatuses).some(
        (st) => st === "pending"
      );
      if (hasAnyPending && !form.pendingDocumentsExplanation.trim()) {
        newErrors.pendingDocumentsExplanation =
          "Since one or more documents are marked 'Pending', please list the pending document(s) and expected submission date.";
      }
    }

    if (step === 4) {
      if (!form.declarationAgreed) {
        newErrors.declarationAgreed =
          "Please check the box to confirm that you agree to the declaration above.";
      }
      if (!form.declarationPlace.trim()) {
        newErrors.declarationPlace = "Place / City is required.";
      }
      if (form.wasAssisted) {
        if (!form.assistedLanguageUsed.trim()) {
          newErrors.assistedLanguageUsed =
            "Please enter the language used to explain the form.";
        }
        if (!form.assistantNameContact.trim()) {
          newErrors.assistantNameContact =
            "Please enter the Assistant's Name and Contact.";
        }
        if (!form.assistantConfirmedCheckbox) {
          newErrors.assistantConfirmedCheckbox =
            "Please check the assistant confirmation box.";
        }
      }
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      setPageBannerError(
        `Please complete or correct the ${errorKeys.length} highlighted mandatory field(s) below.`
      );
      scrollToErrorField(errorKeys[0]);
      return false;
    }

    setPageBannerError(null);
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      const next = Math.min(4, currentStep + 1) as 1 | 2 | 3 | 4;
      setCurrentStep(next);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handlePrevStep = () => {
    const prev = Math.max(1, currentStep - 1) as 1 | 2 | 3 | 4;
    setCurrentStep(prev);
    setPageBannerError(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setPageBannerError(null);

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form,
          files: uploadedFiles,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setPageBannerError(
          data.message ||
            "Unable to submit application right now. Please verify your fields and try again."
        );
        setIsSubmitting(false);
        return;
      }

      if (typeof window !== "undefined") {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      }

      const compressedCount = Object.values(uploadedFiles).filter(
        (f) => f !== null
      ).length;

      setSubmissionResult({
        referenceNumber: data.referenceNumber,
        submittedAt: data.submittedAt,
        localCandidateFolderPath: data.localCandidateFolderPath || null,
        driveFolderUrl: data.driveFolderUrl || null,
        compressedCount,
      });
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setPageBannerError(
        "Network error while submitting application. Your draft is safely saved—please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasAnyPendingDoc = Object.values(form.docStatuses).some(
    (s) => s === "pending"
  );

  // Format Aadhaar number neatly with spaces as 1234 5678 9012 while typing
  const handleGovIdInput = (raw: string) => {
    if (form.govIdType === "Aadhaar Card") {
      const digits = raw.replace(/\D/g, "").slice(0, 12);
      const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
      updateField("govIdNumber", formatted);
    } else {
      updateField("govIdNumber", raw.toUpperCase().slice(0, 20));
    }
  };

  // =========================================================================
  // SUCCESS SCREEN AFTER FINAL SUBMISSION
  // =========================================================================
  if (submissionResult) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-[#FFFFFF] border border-[#294735]/25 shadow-[0_20px_50px_rgba(22,38,29,0.1)] overflow-hidden">
          <div className="bg-[#16261D] text-[#F7F2E8] px-6 sm:px-10 py-8 border-b border-[#C9A45C]/30">
            <div className="inline-flex items-center gap-2 rounded-xs bg-[#D5B472] text-[#16261D] font-bold px-3 py-1 text-xs uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" />
              Official Scholarship Application Submitted
            </div>
            <h1 className="mt-4 font-editorial text-2xl sm:text-4xl text-[#FFFFFF]">
              Namaste, {form.fullName}!
            </h1>
            <p className="mt-2 text-sm text-[#E5C67E]">
              Application Reference ID:{" "}
              <strong className="font-mono text-base text-[#FFFFFF] bg-[#F7F2E8]/15 px-2.5 py-0.5 rounded">
                {submissionResult.referenceNumber}
              </strong>
            </p>
          </div>

          <div className="p-6 sm:p-10 space-y-6 text-[#292D29]">
            <div className="rounded-xl bg-[#F7F2E8] border border-[#C9A45C]/40 p-5 space-y-3 text-sm sm:text-[15px] leading-relaxed">
              <p className="font-semibold text-[#16261D]">Namaste!</p>
              <p>
                Thank you for expressing your interest in{" "}
                <strong>
                  Bharath Yoga Kranti National Yoga Education and Scholarship
                  Initiative
                </strong>
                .
              </p>
              <p>
                We are delighted that you have taken the first step towards
                exploring this opportunity to learn, experience, and deepen your
                understanding of Yoga.
              </p>
              <p>
                Our team will review your enquiry and get in touch with you
                shortly to guide you through the next steps. We look forward to
                connecting with you!
              </p>
              <p className="font-semibold text-[#294735] pt-1">
                Team Akshar Yoga.
              </p>
            </div>

            {/* Application Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-[#F7F2E8]/40 rounded-xl p-4 border border-[#292D29]/12">
              <div>
                <span className="text-[#525752] block">Applicant Name:</span>
                <strong className="text-[#16261D]">{form.fullName}</strong>
              </div>
              <div>
                <span className="text-[#525752] block">Registered Mobile:</span>
                <strong className="text-[#16261D]">{form.mobileNumber}</strong>
              </div>
              <div>
                <span className="text-[#525752] block">Location:</span>
                <strong className="text-[#16261D]">
                  {form.villageTownDistrictState} ({form.residenceClassification})
                </strong>
              </div>
              <div>
                <span className="text-[#525752] block">
                  Documents Processed & Compressed:
                </span>
                <strong className="text-[#294735]">
                  {submissionResult.compressedCount} file(s) attached
                </strong>
              </div>
            </div>

            {/* Saved Folder Hierarchy Info */}
            <div className="flex items-start gap-3 rounded-xl bg-[#294735]/10 border border-[#294735]/25 p-4 text-xs sm:text-sm text-[#16261D]">
              <FolderCheck className="h-5 w-5 text-[#294735] shrink-0 mt-0.5" />
              <div className="space-y-1 min-w-0">
                <p className="font-semibold text-[#16261D]">
                  Application Stored in Candidate Folder Structure:
                </p>
                <p className="font-mono text-xs text-[#294735] break-all">
                  Scholarship_Applications_Data / {form.fullName} -{" "}
                  {submissionResult.referenceNumber} /
                </p>
                <ul className="text-xs text-[#525752] list-disc list-inside space-y-0.5 pt-1">
                  <li>
                    <code>application-details.txt</code> (Formatted text record)
                  </li>
                  <li>
                    <code>application-details.json</code> (Structured JSON record)
                  </li>
                  <li>
                    <code>Files/</code> ({submissionResult.compressedCount}{" "}
                    compressed uploaded document(s))
                  </li>
                </ul>
                {submissionResult.driveFolderUrl && (
                  <p className="pt-2">
                    <a
                      href={submissionResult.driveFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#294735] underline hover:text-[#16261D]"
                    >
                      Open Candidate Folder in Google Drive →
                    </a>
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#292D29]/12 flex flex-wrap items-center justify-between gap-3 no-print">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-lg border border-[#294735] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#294735] hover:bg-[#294735]/5 transition-colors"
              >
                <Printer className="h-4 w-4" />
                Print / Save Acknowledgement PDF
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmissionResult(null);
                  setForm(INITIAL_FORM_STATE);
                  setUploadedFiles({
                    passportPhoto: null,
                    govIdProof: null,
                    class10Certificate: null,
                    additionalEducation: null,
                    incomeEvidence: null,
                    categoryDisabilityCert: null,
                    nominationForm: null,
                  });
                  setCurrentStep(1);
                }}
                className="text-xs font-semibold uppercase tracking-wider text-[#294735] underline hover:text-[#16261D]"
              >
                Submit Another Candidate Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const stepHeaderInfo = {
    1: t.page1,
    2: t.page2,
    3: t.page3,
    4: t.page4,
  }[currentStep];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-10">
      {/* =====================================================================
          TOP PROGRESS STEPPER & AUTO-SAVE BAR
      ===================================================================== */}
      <div className="rounded-xl bg-[#FFFFFF] border border-[#292D29]/15 shadow-xs p-4 sm:p-5 mb-6 no-print">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#292D29]/10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-xs bg-[#16261D] text-[#E5C67E] text-xs font-bold px-2.5 py-1 uppercase tracking-wider">
              {t.stepLabel} {currentStep} {t.ofLabel} 4
            </span>
            <span className="text-xs text-[#525752] hidden sm:inline-flex items-center gap-1">
              <Info className="h-3.5 w-3.5 text-[#294735]" />
              {t.requiredNote}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {draftSavedAt && (
              <span className="text-[11px] text-[#294735] font-medium flex items-center gap-1">
                <Check className="h-3.5 w-3.5" />
                {t.draftSaved} ({draftSavedAt})
              </span>
            )}
            <button
              type="button"
              onClick={handleManualSaveDraft}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#294735]/30 bg-[#F7F2E8]/70 hover:bg-[#F7F2E8] px-2.5 py-1 text-xs font-semibold text-[#16261D] transition-colors"
            >
              <Save className="h-3.5 w-3.5 text-[#294735]" />
              {t.saveDraft}
            </button>
            <button
              type="button"
              onClick={handleClearDraft}
              className="inline-flex items-center gap-1 rounded-md border border-[#BD7959]/30 px-2 py-1 text-xs font-medium text-[#BD7959] hover:bg-[#BD7959]/10 transition-colors"
              title={t.clearDraft}
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.clearDraft}</span>
            </button>
          </div>
        </div>

        {/* 4-Step Visual Progress Stepper */}
        <ol className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {(
            [
              { step: 1, label: t.steps.page1Short },
              { step: 2, label: t.steps.page2Short },
              { step: 3, label: t.steps.page3Short },
              { step: 4, label: t.steps.page4Short },
            ] as const
          ).map((item) => {
            const isCompleted = currentStep > item.step;
            const isCurrent = currentStep === item.step;
            return (
              <li key={item.step}>
                <button
                  type="button"
                  onClick={() => {
                    if (item.step < currentStep) {
                      setCurrentStep(item.step);
                      setPageBannerError(null);
                    } else if (item.step > currentStep) {
                      if (validateStep(currentStep)) {
                        setCurrentStep(item.step);
                      }
                    }
                  }}
                  className={`w-full text-left rounded-lg p-2.5 sm:p-3 border transition-all flex items-center gap-2.5 ${
                    isCurrent
                      ? "bg-[#16261D] text-[#FFFFFF] border-[#C9A45C] shadow-xs"
                      : isCompleted
                        ? "bg-[#294735]/10 text-[#16261D] border-[#294735]/30 hover:bg-[#294735]/15"
                        : "bg-[#F7F2E8]/50 text-[#525752] border-[#292D29]/10 hover:bg-[#F7F2E8]"
                  }`}
                >
                  <span
                    className={`h-6 w-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                      isCurrent
                        ? "bg-[#C9A45C] text-[#16261D]"
                        : isCompleted
                          ? "bg-[#294735] text-[#FFFFFF]"
                          : "bg-[#292D29]/15 text-[#292D29]"
                    }`}
                  >
                    {isCompleted ? <Check className="h-3.5 w-3.5" /> : item.step}
                  </span>
                  <span className="text-xs font-semibold truncate">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Continuous Progress Bar */}
        <div className="mt-3.5 h-1.5 w-full rounded-full bg-[#ECE4D4] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#294735] to-[#C9A45C] transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* =====================================================================
          CURRENT PAGE BANNER HEADER
      ===================================================================== */}
      <div className="rounded-t-2xl bg-[#16261D] text-[#F7F2E8] px-6 sm:px-8 py-6 border-b-2 border-[#C9A45C]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C67E]">
            {t.stepLabel} {currentStep} {t.ofLabel} 4 · Official Digital Form
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#E5C67E] bg-[#F7F2E8]/10 px-2.5 py-0.5 rounded-full">
            <Sparkles className="h-3 w-3 text-[#C9A45C]" />
            {t.compressionBadge}
          </span>
        </div>
        <h1 className="mt-2 font-editorial text-2xl sm:text-3xl text-[#FFFFFF]">
          {stepHeaderInfo.title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-[#F7F2E8]/80">
          {stepHeaderInfo.subtitle}
        </p>
      </div>

      {/* Validation Error Alert Banner */}
      {pageBannerError && (
        <div
          role="alert"
          onClick={() => {
            const firstKey = Object.keys(errors)[0];
            if (firstKey) scrollToErrorField(firstKey);
          }}
          className="cursor-pointer bg-[#BD7959]/15 border-x border-b border-[#BD7959] px-6 py-3.5 flex items-center justify-between gap-3 text-sm text-[#16261D]"
        >
          <div className="flex items-center gap-2.5">
            <AlertCircle className="h-5 w-5 text-[#BD7959] shrink-0" />
            <p className="font-semibold text-[#16261D]">{pageBannerError}</p>
          </div>
          <span className="text-xs font-semibold underline text-[#BD7959] shrink-0">
            {t.jumpToField}
          </span>
        </div>
      )}

      {/* =====================================================================
          WIZARD FORM BODY (PAGES 1 TO 4)
      ===================================================================== */}
      <form
        onSubmit={handleFinalSubmit}
        noValidate
        className="rounded-b-2xl bg-[#FFFFFF] border-x border-b border-[#292D29]/15 shadow-[0_18px_40px_rgba(22,38,29,0.07)] p-5 sm:p-8 space-y-8"
      >
        {/* ===================================================================
            PAGE 1: PERSONAL & EDUCATIONAL DETAILS
        =================================================================== */}
        {currentStep === 1 && (
          <div className="space-y-8">
            {/* Section 1: Applicant Details */}
            <section aria-labelledby="p1-sec1-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p1-sec1-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page1.sec1Title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#525752]">
                  {t.page1.sec1Desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                {/* 1. Full Name */}
                <div
                  id="field-fullName"
                  className="sm:col-span-6 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.fullName}
                    tooltip="Mandatory: Enter your full legal name exactly as printed on your Aadhaar or Government ID card."
                  />
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Enter full legal name"
                    className={`akshar-input ${
                      errors.fullName ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Date of Birth */}
                <div id="field-dob" className="sm:col-span-3 scroll-mt-28">
                  <MandatoryLabel
                    text={t.page1.dob}
                    tooltip="Mandatory: Select your Date of Birth as recorded on your Aadhaar or 10th marks card."
                  />
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => {
                      const newDob = e.target.value;
                      updateField("dob", newDob);
                      const calcAge = calculateAgeFromDob(newDob);
                      if (calcAge) {
                        updateField("age", calcAge);
                      }
                    }}
                    className={`akshar-input ${
                      errors.dob ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.dob && (
                    <p className="mt-1 text-xs text-[#BD7959]">{errors.dob}</p>
                  )}
                </div>

                {/* 3. Age at Application */}
                <div id="field-age" className="sm:col-span-3 scroll-mt-28">
                  <MandatoryLabel
                    text={t.page1.age}
                    tooltip="Mandatory: Applicant must be 18 years or above at the time of joining."
                  />
                  <input
                    type="number"
                    min={15}
                    max={100}
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    placeholder="Auto-calculated"
                    className={`akshar-input ${
                      errors.age ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.age && (
                    <p className="mt-1 text-xs text-[#BD7959]">{errors.age}</p>
                  )}
                </div>

                {/* 4. Indian Citizen? */}
                <div
                  id="field-indianCitizen"
                  className="sm:col-span-4 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.indianCitizen}
                    tooltip="Mandatory: Confirm whether you are an Indian citizen."
                  />
                  <div className="flex items-center gap-5 pt-1">
                    {(
                      [
                        { val: "Yes", label: t.yes },
                        { val: "No", label: t.no },
                      ] as const
                    ).map((opt) => (
                      <label
                        key={opt.val}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#292D29]"
                      >
                        <input
                          type="radio"
                          name="indianCitizen"
                          checked={form.indianCitizen === opt.val}
                          onChange={() => updateField("indianCitizen", opt.val)}
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.indianCitizen && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.indianCitizen}
                    </p>
                  )}
                </div>

                {/* 5. Gender */}
                <div id="field-gender" className="sm:col-span-8 scroll-mt-28">
                  <MandatoryLabel
                    text={t.page1.gender}
                    tooltip="Mandatory: Select your gender for residential hostel allocation."
                  />
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    {(
                      [
                        { val: "Woman", label: t.page1.genderOptions.woman },
                        { val: "Man", label: t.page1.genderOptions.man },
                        {
                          val: "Other or self-describe",
                          label: t.page1.genderOptions.other,
                        },
                        {
                          val: "Prefer not to say",
                          label: t.page1.genderOptions.preferNot,
                        },
                      ] as const
                    ).map((opt) => (
                      <label
                        key={opt.val}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#292D29]"
                      >
                        <input
                          type="radio"
                          name="gender"
                          checked={form.gender === opt.val}
                          onChange={() => updateField("gender", opt.val)}
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {form.gender === "Other or self-describe" && (
                    <div
                      id="field-genderSelfDescribe"
                      className="mt-2.5 max-w-xs scroll-mt-28"
                    >
                      <input
                        type="text"
                        value={form.genderSelfDescribe}
                        onChange={(e) =>
                          updateField("genderSelfDescribe", e.target.value)
                        }
                        placeholder="Please self-describe..."
                        className={`akshar-input ${
                          errors.genderSelfDescribe ? "akshar-input-error" : ""
                        }`}
                      />
                      {errors.genderSelfDescribe && (
                        <p className="mt-1 text-xs text-[#BD7959]">
                          {errors.genderSelfDescribe}
                        </p>
                      )}
                    </div>
                  )}
                  {errors.gender && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.gender}
                    </p>
                  )}
                </div>

                {/* 6. Mobile Number & Alternative Contact */}
                <div
                  id="field-mobileNumber"
                  className="sm:col-span-4 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.mobileNumber}
                    tooltip="Mandatory: Enter an active 10-digit Indian mobile number for interview and selection calls."
                  />
                  <input
                    type="tel"
                    value={form.mobileNumber}
                    onChange={(e) =>
                      updateField("mobileNumber", e.target.value)
                    }
                    placeholder="10-digit mobile number"
                    className={`akshar-input ${
                      errors.mobileNumber ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page1.alternativeContact}{" "}
                    <span className="text-xs font-normal text-[#525752]">
                      {t.optionalTag}
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={form.alternativeContact}
                    onChange={(e) =>
                      updateField("alternativeContact", e.target.value)
                    }
                    placeholder="Optional alternate phone"
                    className="akshar-input"
                  />
                </div>

                {/* 7. Email Address */}
                <div id="field-email" className="sm:col-span-4 scroll-mt-28">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page1.email}{" "}
                    <span className="text-xs font-normal text-[#525752]">
                      {t.optionalTag}
                    </span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="name@example.com"
                    className={`akshar-input ${
                      errors.email ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#BD7959]">{errors.email}</p>
                  )}
                </div>

                {/* 8. Parent / Guardian / Spouse Name & Relationship */}
                <div
                  id="field-guardianNameRelation"
                  className="sm:col-span-12 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.guardianNameRelation}
                    tooltip="Mandatory: Provide the full name of your Father, Mother, Guardian, or Spouse along with your relationship."
                  />
                  <input
                    type="text"
                    value={form.guardianNameRelation}
                    onChange={(e) =>
                      updateField("guardianNameRelation", e.target.value)
                    }
                    placeholder="e.g., Sri Ramesh Kumar (Father) / Smt. Savitha (Mother)"
                    className={`akshar-input ${
                      errors.guardianNameRelation ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.guardianNameRelation && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.guardianNameRelation}
                    </p>
                  )}
                </div>

                {/* 9. Current Address & PIN Code */}
                <div
                  id="field-currentAddress"
                  className="sm:col-span-9 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.currentAddress}
                    tooltip="Mandatory: Enter your complete current residential address."
                  />
                  <textarea
                    rows={2}
                    value={form.currentAddress}
                    onChange={(e) =>
                      updateField("currentAddress", e.target.value)
                    }
                    placeholder="House/Door No., Street, Locality, Post Office"
                    className={`akshar-input ${
                      errors.currentAddress ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.currentAddress && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.currentAddress}
                    </p>
                  )}
                </div>

                <div
                  id="field-currentPinCode"
                  className="sm:col-span-3 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.currentPinCode}
                    tooltip="Mandatory: Enter your 6-digit postal PIN code."
                  />
                  <input
                    type="text"
                    maxLength={6}
                    value={form.currentPinCode}
                    onChange={(e) =>
                      updateField(
                        "currentPinCode",
                        e.target.value.replace(/\D/g, "").slice(0, 6)
                      )
                    }
                    placeholder="6-digit PIN"
                    className={`akshar-input ${
                      errors.currentPinCode ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.currentPinCode && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.currentPinCode}
                    </p>
                  )}
                </div>

                {/* 10. Permanent Address */}
                <div
                  id="field-permanentAddress"
                  className="sm:col-span-12 scroll-mt-28"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <MandatoryLabel
                      text={t.page1.permanentAddress}
                      tooltip="Mandatory: Enter your permanent address or tick 'Same as Current Address'."
                    />
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#294735]">
                      <input
                        type="checkbox"
                        checked={form.sameAsCurrentAddress}
                        onChange={(e) =>
                          updateField("sameAsCurrentAddress", e.target.checked)
                        }
                        className="h-4 w-4 rounded accent-[#294735]"
                      />
                      <span>{t.page1.sameAsCurrentAddress}</span>
                    </label>
                  </div>
                  <textarea
                    rows={2}
                    value={form.permanentAddress}
                    disabled={form.sameAsCurrentAddress}
                    onChange={(e) =>
                      updateField("permanentAddress", e.target.value)
                    }
                    placeholder="Enter permanent address with PIN code"
                    className={`akshar-input disabled:bg-[#F7F2E8]/60 ${
                      errors.permanentAddress ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.permanentAddress && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.permanentAddress}
                    </p>
                  )}
                </div>

                {/* 11. Village / Town, District, and State */}
                <div
                  id="field-villageTownDistrictState"
                  className="sm:col-span-6 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.villageTownDistrictState}
                    tooltip="Mandatory: Mention your Village/Town, District, and State."
                  />
                  <input
                    type="text"
                    value={form.villageTownDistrictState}
                    onChange={(e) =>
                      updateField("villageTownDistrictState", e.target.value)
                    }
                    placeholder="e.g., Yelahanka, Bengaluru Urban, Karnataka"
                    className={`akshar-input ${
                      errors.villageTownDistrictState
                        ? "akshar-input-error"
                        : ""
                    }`}
                  />
                  {errors.villageTownDistrictState && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.villageTownDistrictState}
                    </p>
                  )}
                </div>

                {/* 12. Residence Classification */}
                <div
                  id="field-residenceClassification"
                  className="sm:col-span-3 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.residenceClassification}
                    tooltip="Mandatory: Indicate whether your residence falls under a Rural or Urban area."
                  />
                  <div className="flex items-center gap-5 pt-1.5">
                    {(
                      [
                        { val: "Rural", label: t.page1.rural },
                        { val: "Urban", label: t.page1.urban },
                      ] as const
                    ).map((opt) => (
                      <label
                        key={opt.val}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#292D29]"
                      >
                        <input
                          type="radio"
                          name="residenceClassification"
                          checked={form.residenceClassification === opt.val}
                          onChange={() =>
                            updateField("residenceClassification", opt.val)
                          }
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.residenceClassification && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.residenceClassification}
                    </p>
                  )}
                </div>

                {/* 13. Tribal Community (if claimed) */}
                <div className="sm:col-span-3">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page1.tribalCommunity}
                  </label>
                  <input
                    type="text"
                    value={form.tribalCommunity}
                    onChange={(e) =>
                      updateField("tribalCommunity", e.target.value)
                    }
                    placeholder="Specify if applicable"
                    className="akshar-input"
                  />
                </div>

                {/* 14. Government ID Type & Full Aadhaar / ID Number */}
                <div className="sm:col-span-6">
                  <MandatoryLabel
                    text={t.page1.govIdType}
                    tooltip="Mandatory: Select the Government ID you are providing for identity verification."
                  />
                  <select
                    value={form.govIdType}
                    onChange={(e) => {
                      updateField("govIdType", e.target.value);
                      updateField("govIdNumber", "");
                    }}
                    className="akshar-input"
                  >
                    <option value="Aadhaar Card">Aadhaar Card (12-digit)</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Driving Licence">Driving Licence</option>
                    <option value="Passport">Passport</option>
                    <option value="Other">Other Official Government ID</option>
                  </select>
                </div>

                <div
                  id="field-govIdNumber"
                  className="sm:col-span-6 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={
                      form.govIdType === "Aadhaar Card"
                        ? t.page1.aadhaarNumber
                        : t.page1.govIdNumber
                    }
                    tooltip={
                      form.govIdType === "Aadhaar Card"
                        ? "Mandatory: Enter your complete 12-digit Aadhaar Card number."
                        : "Mandatory: Enter your complete official Government ID number."
                    }
                  />
                  <input
                    type="text"
                    value={form.govIdNumber}
                    onChange={(e) => handleGovIdInput(e.target.value)}
                    placeholder={
                      form.govIdType === "Aadhaar Card"
                        ? "e.g., 1234 5678 9012"
                        : "Enter full Government ID number"
                    }
                    className={`akshar-input font-mono tracking-wider ${
                      errors.govIdNumber ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.govIdNumber && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.govIdNumber}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Section 2: Educational Qualifications */}
            <section aria-labelledby="p1-sec2-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2
                    id="p1-sec2-heading"
                    className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                  >
                    {t.page1.sec2Title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[#525752]">
                    {t.page1.sec2Desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    updateField("educationRows", [
                      ...form.educationRows,
                      {
                        id: `edu-${Date.now()}`,
                        level: "",
                        boardInstitution: "",
                        yearOfPassing: "",
                        certificateStatus: "Attached",
                      },
                    ])
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#294735] bg-[#294735]/5 hover:bg-[#294735]/10 px-3 py-1.5 text-xs font-semibold text-[#294735] transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  {t.page1.addQualificationRow}
                </button>
              </div>

              {/* Responsive Qualification Table */}
              <div className="overflow-x-auto rounded-xl border border-[#292D29]/15">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#16261D] text-[#E5C67E] text-xs uppercase tracking-wider">
                      <th className="py-3 px-3.5 font-semibold">
                        {t.page1.qualLevelCol}
                      </th>
                      <th className="py-3 px-3.5 font-semibold">
                        {t.page1.boardCol}
                      </th>
                      <th className="py-3 px-3.5 font-semibold w-32">
                        {t.page1.yearCol}
                      </th>
                      <th className="py-3 px-3.5 font-semibold">
                        {t.page1.certStatusCol}
                      </th>
                      <th className="py-3 px-2 w-10" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#292D29]/12 bg-[#FFFFFF] text-sm">
                    {form.educationRows.map((row, idx) => (
                      <tr key={row.id} className="hover:bg-[#F7F2E8]/40">
                        <td className="p-2.5 align-top">
                          <input
                            type="text"
                            value={row.level}
                            onChange={(e) => {
                              const updated = [...form.educationRows];
                              updated[idx] = {
                                ...row,
                                level: e.target.value,
                              };
                              updateField("educationRows", updated);
                            }}
                            placeholder="e.g., Class 10 / Diploma"
                            className="akshar-input font-medium"
                          />
                        </td>
                        <td className="p-2.5 align-top">
                          <input
                            type="text"
                            value={row.boardInstitution}
                            onChange={(e) => {
                              const updated = [...form.educationRows];
                              updated[idx] = {
                                ...row,
                                boardInstitution: e.target.value,
                              };
                              updateField("educationRows", updated);
                            }}
                            placeholder="School / Board / University name"
                            className="akshar-input"
                          />
                        </td>
                        <td className="p-2.5 align-top">
                          <input
                            type="number"
                            min={1970}
                            max={2030}
                            value={row.yearOfPassing}
                            onChange={(e) => {
                              const updated = [...form.educationRows];
                              updated[idx] = {
                                ...row,
                                yearOfPassing: e.target.value.slice(0, 4),
                              };
                              updateField("educationRows", updated);
                            }}
                            placeholder="YYYY"
                            className="akshar-input"
                          />
                        </td>
                        <td className="p-2.5 align-middle">
                          <div className="flex flex-wrap items-center gap-3">
                            {(
                              [
                                { val: "Attached", label: t.attached },
                                { val: "Pending", label: t.pending },
                                { val: "N/A", label: t.notApplicable },
                              ] as const
                            ).map((st) => (
                              <label
                                key={st.val}
                                className="inline-flex items-center gap-1.5 cursor-pointer text-xs font-medium text-[#292D29]"
                              >
                                <input
                                  type="radio"
                                  name={`cert-status-${row.id}`}
                                  checked={row.certificateStatus === st.val}
                                  onChange={() => {
                                    const updated = [...form.educationRows];
                                    updated[idx] = {
                                      ...row,
                                      certificateStatus: st.val,
                                    };
                                    updateField("educationRows", updated);
                                  }}
                                  className="h-3.5 w-3.5 accent-[#294735]"
                                />
                                <span>{st.label}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                        <td className="p-2.5 align-middle text-center">
                          {form.educationRows.length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                updateField(
                                  "educationRows",
                                  form.educationRows.filter(
                                    (r) => r.id !== row.id
                                  )
                                )
                              }
                              className="p-1.5 text-[#BD7959] hover:bg-[#BD7959]/10 rounded-md"
                              title="Remove row"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Languages Understood & Preferred Interview Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div
                  id="field-languagesUnderstood"
                  className="scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.languagesUnderstood}
                    tooltip="Mandatory: List the languages you can speak, read, or write."
                  />
                  <input
                    type="text"
                    value={form.languagesUnderstood}
                    onChange={(e) =>
                      updateField("languagesUnderstood", e.target.value)
                    }
                    placeholder="e.g., Kannada, Hindi, English"
                    className={`akshar-input ${
                      errors.languagesUnderstood ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.languagesUnderstood && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.languagesUnderstood}
                    </p>
                  )}
                </div>

                <div
                  id="field-preferredInterviewLanguage"
                  className="scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page1.preferredInterviewLanguage}
                    tooltip="Mandatory: Choose the language in which you would like your selection interview conducted."
                  />
                  <select
                    value={form.preferredInterviewLanguage}
                    onChange={(e) =>
                      updateField("preferredInterviewLanguage", e.target.value)
                    }
                    className={`akshar-input ${
                      errors.preferredInterviewLanguage
                        ? "akshar-input-error"
                        : ""
                    }`}
                  >
                    <option value="English">English</option>
                    <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                    <option value="Hindi">Hindi (हिन्दी)</option>
                    <option value="Tamil">Tamil (தமிழ்)</option>
                    <option value="Telugu">Telugu (తెలుగు)</option>
                    <option value="Marathi">Marathi (मराठी)</option>
                    <option value="Other Regional Language">
                      Other Regional Language
                    </option>
                  </select>
                  {errors.preferredInterviewLanguage && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.preferredInterviewLanguage}
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
            PAGE 2: CIRCUMSTANCES & SUPPORT REQUIREMENTS
        =================================================================== */}
        {currentStep === 2 && (
          <div className="space-y-8">
            {/* Section 1: Economic Circumstances */}
            <section aria-labelledby="p2-sec1-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p2-sec1-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page2.sec1Title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-3">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page2.financialYear}
                  </label>
                  <select
                    value={form.financialYear}
                    onChange={(e) =>
                      updateField("financialYear", e.target.value)
                    }
                    className="akshar-input"
                  >
                    <option value="2025-2026">2025–2026</option>
                    <option value="2024-2025">2024–2025</option>
                    <option value="2026-2027">2026–2027</option>
                  </select>
                </div>

                <div
                  id="field-totalAnnualFamilyIncome"
                  className="sm:col-span-3 scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page2.totalAnnualFamilyIncome}
                    tooltip="Mandatory: Enter total annual household income from all sources in INR (must be up to ₹3,00,000 for scholarship eligibility)."
                  />
                  <input
                    type="number"
                    min={0}
                    value={form.totalAnnualFamilyIncome}
                    onChange={(e) =>
                      updateField("totalAnnualFamilyIncome", e.target.value)
                    }
                    placeholder="e.g., 120000"
                    className={`akshar-input ${
                      errors.totalAnnualFamilyIncome ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.totalAnnualFamilyIncome && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.totalAnnualFamilyIncome}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page2.householdMembers}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={form.totalHouseholdMembers}
                    onChange={(e) =>
                      updateField("totalHouseholdMembers", e.target.value)
                    }
                    placeholder="e.g., 4"
                    className="akshar-input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page2.earningMembers}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={form.earningMembersCount}
                    onChange={(e) =>
                      updateField("earningMembersCount", e.target.value)
                    }
                    placeholder="e.g., 1"
                    className="akshar-input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page2.dependantsCount}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={form.dependantsCount}
                    onChange={(e) =>
                      updateField("dependantsCount", e.target.value)
                    }
                    placeholder="e.g., 3"
                    className="akshar-input"
                  />
                </div>
              </div>

              {/* 6. Household Income Sources Table */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D]">
                    {t.page2.incomeSourcesTable}
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      updateField("incomeSources", [
                        ...form.incomeSources,
                        {
                          id: `inc-${Date.now()}`,
                          earnerName: "",
                          relationship: "",
                          annualAmount: "",
                        },
                      ])
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#294735] bg-[#294735]/5 hover:bg-[#294735]/10 px-3 py-1.5 text-xs font-semibold text-[#294735]"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    {t.page2.addIncomeSource}
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#292D29]/15">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#16261D] text-[#E5C67E] text-xs uppercase tracking-wider">
                        <th className="py-2.5 px-3.5 font-semibold">
                          {t.page2.earnerNameCol}
                        </th>
                        <th className="py-2.5 px-3.5 font-semibold">
                          {t.page2.relationshipCol}
                        </th>
                        <th className="py-2.5 px-3.5 font-semibold">
                          {t.page2.annualAmountCol}
                        </th>
                        <th className="py-2.5 px-2 w-10" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#292D29]/12 bg-[#FFFFFF] text-sm">
                      {form.incomeSources.map((row, idx) => (
                        <tr key={row.id}>
                          <td className="p-2.5">
                            <input
                              type="text"
                              value={row.earnerName}
                              onChange={(e) => {
                                const updated = [...form.incomeSources];
                                updated[idx] = {
                                  ...row,
                                  earnerName: e.target.value,
                                };
                                updateField("incomeSources", updated);
                              }}
                              placeholder="Name of family member or source"
                              className="akshar-input"
                            />
                          </td>
                          <td className="p-2.5">
                            <input
                              type="text"
                              value={row.relationship}
                              onChange={(e) => {
                                const updated = [...form.incomeSources];
                                updated[idx] = {
                                  ...row,
                                  relationship: e.target.value,
                                };
                                updateField("incomeSources", updated);
                              }}
                              placeholder="e.g., Father / Mother / Self"
                              className="akshar-input"
                            />
                          </td>
                          <td className="p-2.5">
                            <input
                              type="number"
                              min={0}
                              value={row.annualAmount}
                              onChange={(e) => {
                                const updated = [...form.incomeSources];
                                updated[idx] = {
                                  ...row,
                                  annualAmount: e.target.value,
                                };
                                updateField("incomeSources", updated);
                              }}
                              placeholder="₹ Annual amount"
                              className="akshar-input"
                            />
                          </td>
                          <td className="p-2.5 text-center">
                            {form.incomeSources.length > 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  updateField(
                                    "incomeSources",
                                    form.incomeSources.filter(
                                      (r) => r.id !== row.id
                                    )
                                  )
                                }
                                className="p-1.5 text-[#BD7959] hover:bg-[#BD7959]/10 rounded-md"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7. Other Income, Pension, or Support details */}
              <div>
                <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                  {t.page2.otherIncomeSupport}
                </label>
                <input
                  type="text"
                  value={form.otherIncomeSupportDetails}
                  onChange={(e) =>
                    updateField("otherIncomeSupportDetails", e.target.value)
                  }
                  placeholder="Describe any pension, government transfer, or seasonal agricultural income"
                  className="akshar-input"
                />
              </div>

              {/* 8. Income Proof Type & Subfields */}
              <div className="rounded-xl bg-[#F7F2E8]/60 border border-[#292D29]/12 p-4 space-y-4">
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-2">
                    {t.page2.incomeProofType}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {[
                      "Income Certificate",
                      "BPL Card",
                      "AAY (Antyodaya Anna Yojana)",
                      "Other provisional evidence",
                    ].map((proof) => (
                      <label
                        key={proof}
                        className="flex items-center gap-2 rounded-lg border border-[#292D29]/15 bg-[#FFFFFF] px-3 py-2 text-xs sm:text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form.incomeProofTypes.includes(proof)}
                          onChange={() =>
                            toggleCheckboxArray("incomeProofTypes", proof)
                          }
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{proof}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#16261D] mb-1">
                      {t.page2.issuingAuthority}
                    </label>
                    <input
                      type="text"
                      value={form.incomeIssuingAuthority}
                      onChange={(e) =>
                        updateField("incomeIssuingAuthority", e.target.value)
                      }
                      placeholder="e.g., Tahsildar / Revenue Dept"
                      className="akshar-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#16261D] mb-1">
                      {t.page2.issueDateValidity}
                    </label>
                    <input
                      type="date"
                      value={form.incomeIssueDate}
                      onChange={(e) =>
                        updateField("incomeIssueDate", e.target.value)
                      }
                      className="akshar-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#16261D] mb-1">
                      {t.page2.certRefNumber}
                    </label>
                    <input
                      type="text"
                      value={form.incomeCertRefNumber}
                      onChange={(e) =>
                        updateField("incomeCertRefNumber", e.target.value)
                      }
                      placeholder="RD / Cert Reference No."
                      className="akshar-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#16261D] mb-1">
                      {t.page2.materialIncomeChange}
                    </label>
                    <input
                      type="text"
                      value={form.materialIncomeChangeDetails}
                      onChange={(e) =>
                        updateField(
                          "materialIncomeChangeDetails",
                          e.target.value
                        )
                      }
                      placeholder="Any recent change in family income"
                      className="akshar-input"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Priority & Relevant Circumstances */}
            <section aria-labelledby="p2-sec2-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p2-sec2-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page2.sec2Title}
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-2">
                    {t.page2.relevantCircumstances}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Low-income daily-wage / agricultural-labour household",
                      "Unemployed / underemployed",
                      "Without parental support",
                      "Single-parent / women-headed household with financial hardship",
                      "Disability-related financial hardship",
                      "Other",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-start gap-2.5 rounded-lg border border-[#292D29]/15 bg-[#F7F2E8]/40 p-3 text-xs sm:text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form.priorityCircumstances.includes(item)}
                          onChange={() =>
                            toggleCheckboxArray("priorityCircumstances", item)
                          }
                          className="mt-0.5 h-4 w-4 accent-[#294735] shrink-0"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                  {form.priorityCircumstances.includes("Other") && (
                    <div className="mt-2.5">
                      <input
                        type="text"
                        value={form.priorityCircumstanceOtherText}
                        onChange={(e) =>
                          updateField(
                            "priorityCircumstanceOtherText",
                            e.target.value
                          )
                        }
                        placeholder="Please specify other relevant circumstance..."
                        className="akshar-input"
                      />
                    </div>
                  )}
                </div>

                {/* Priority Category Claimed */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-2">
                    {t.page2.priorityCategoryClaimed}
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "SC",
                      "ST",
                      "OBC",
                      "EWS",
                      "DNT",
                      "Nomadic / Semi-Nomadic",
                      "Person with disability",
                      "Other",
                    ].map((cat) => (
                      <label
                        key={cat}
                        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs sm:text-sm cursor-pointer transition-colors ${
                          form.priorityCategoryClaimed.includes(cat)
                            ? "border-[#294735] bg-[#294735]/10 font-semibold text-[#16261D]"
                            : "border-[#292D29]/15 bg-[#FFFFFF] text-[#292D29]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.priorityCategoryClaimed.includes(cat)}
                          onChange={() =>
                            toggleCheckboxArray("priorityCategoryClaimed", cat)
                          }
                          className="h-3.5 w-3.5 accent-[#294735]"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Evidence Status */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page2.priorityEvidenceStatus}
                  </label>
                  <div className="flex items-center gap-6">
                    {(
                      [
                        { val: "Attached", label: t.attached },
                        { val: "Pending", label: t.pending },
                      ] as const
                    ).map((st) => (
                      <label
                        key={st.val}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#292D29]"
                      >
                        <input
                          type="radio"
                          name="priorityEvidenceStatus"
                          checked={form.priorityEvidenceStatus === st.val}
                          onChange={() =>
                            updateField("priorityEvidenceStatus", st.val)
                          }
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{st.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Present Status and Availability */}
            <section aria-labelledby="p2-sec3-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p2-sec3-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page2.sec3Title}
                </h2>
              </div>

              <div className="space-y-4">
                <div
                  id="field-presentEmploymentStatus"
                  className="scroll-mt-28"
                >
                  <MandatoryLabel
                    text={t.page2.presentStatus}
                    tooltip="Mandatory: Select your current occupation or student status."
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {(
                      [
                        "Student",
                        "Unemployed",
                        "Employed",
                        "Self-employed",
                        "Informal or daily-wage work",
                      ] as const
                    ).map((st) => (
                      <label
                        key={st}
                        className={`flex items-center gap-2 rounded-lg border p-2.5 text-xs sm:text-sm cursor-pointer ${
                          form.presentEmploymentStatus === st
                            ? "border-[#294735] bg-[#294735]/10 font-semibold text-[#16261D]"
                            : "border-[#292D29]/15 bg-[#FFFFFF]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="presentEmploymentStatus"
                          checked={form.presentEmploymentStatus === st}
                          onChange={() =>
                            updateField("presentEmploymentStatus", st)
                          }
                          className="h-4 w-4 accent-[#294735]"
                        />
                        <span>{st}</span>
                      </label>
                    ))}
                  </div>
                  {errors.presentEmploymentStatus && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.presentEmploymentStatus}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                      {t.page2.monthlyIncome}
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={form.monthlyIncome}
                      onChange={(e) =>
                        updateField("monthlyIncome", e.target.value)
                      }
                      placeholder="e.g., 0 or 8000"
                      className="akshar-input"
                    />
                  </div>

                  <div
                    id="field-canAttendCompleteCourse"
                    className="scroll-mt-28"
                  >
                    <MandatoryLabel
                      text={t.page2.canAttendCourse}
                      tooltip="Mandatory: Confirm your availability for the complete 45-day residential training in Bengaluru."
                    />
                    <div className="flex flex-wrap gap-4 pt-1.5">
                      {(
                        [
                          { val: "Yes", label: t.yes },
                          {
                            val: "Need to discuss support",
                            label: t.page2.needToDiscussSupport,
                          },
                        ] as const
                      ).map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-[#292D29]"
                        >
                          <input
                            type="radio"
                            name="canAttendCompleteCourse"
                            checked={form.canAttendCompleteCourse === opt.val}
                            onChange={() =>
                              updateField("canAttendCompleteCourse", opt.val)
                            }
                            className="h-4 w-4 accent-[#294735]"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-2">
                      {t.page2.leaveNocStatus}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {(
                        [
                          "Available",
                          "To be obtained before joining",
                          "Not applicable",
                        ] as const
                      ).map((opt) => (
                        <label
                          key={opt}
                          className="inline-flex items-center gap-1.5 cursor-pointer text-xs text-[#292D29]"
                        >
                          <input
                            type="radio"
                            name="leaveNocStatus"
                            checked={form.leaveNocStatus === opt}
                            onChange={() => updateField("leaveNocStatus", opt)}
                            className="h-3.5 w-3.5 accent-[#294735]"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Accessibility & Support Requirements (3 descriptive questions removed as requested) */}
            <section aria-labelledby="p2-sec4-heading" className="space-y-4">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p2-sec4-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page2.sec4Title}
                </h2>
              </div>

              <div className="rounded-xl bg-[#F7F2E8]/60 border border-[#292D29]/12 p-4 space-y-3">
                <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D]">
                  {t.page2.needsSupportQuestion}
                </label>
                <div className="flex items-center gap-6">
                  {(
                    [
                      { val: "No", label: t.no },
                      { val: "Yes", label: t.yes },
                    ] as const
                  ).map((opt) => (
                    <label
                      key={opt.val}
                      className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#292D29]"
                    >
                      <input
                        type="radio"
                        name="needsSupportAssistance"
                        checked={form.needsSupportAssistance === opt.val}
                        onChange={() =>
                          updateField("needsSupportAssistance", opt.val)
                        }
                        className="h-4 w-4 accent-[#294735]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>

                {form.needsSupportAssistance === "Yes" && (
                  <div
                    id="field-supportAssistanceDescription"
                    className="pt-2 scroll-mt-28"
                  >
                    <MandatoryLabel
                      text={t.page2.describeSupportNeeded}
                      tooltip="Mandatory when 'Yes' is selected: Describe the practical assistance needed during residential stay."
                    />
                    <textarea
                      rows={2}
                      value={form.supportAssistanceDescription}
                      onChange={(e) =>
                        updateField(
                          "supportAssistanceDescription",
                          e.target.value
                        )
                      }
                      placeholder="Describe any practical accommodation or learning assistance helpful during residential stay..."
                      className={`akshar-input ${
                        errors.supportAssistanceDescription
                          ? "akshar-input-error"
                          : ""
                      }`}
                    />
                    {errors.supportAssistanceDescription && (
                      <p className="mt-1 text-xs text-[#BD7959]">
                        {errors.supportAssistanceDescription}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
            PAGE 3: DOCUMENT UPLOADS & CHECKLIST
        =================================================================== */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="border-b border-[#292D29]/12 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-editorial text-xl sm:text-2xl text-[#16261D]">
                  {t.page3.sec1Title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#525752]">
                  {t.page3.sec1Desc}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#294735]/10 border border-[#294735]/25 px-3 py-1.5 text-xs font-semibold text-[#294735] self-start">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Images Compressed Client-Side (~200–350 KB)
              </div>
            </div>

            {/* Document Uploaders */}
            <div className="grid grid-cols-1 gap-4">
              {DOCUMENT_CHECKLIST_ITEMS.map((item, idx) => {
                const localizedDocs: Record<
                  string,
                  { title: string; subtitle: string }
                > = {
                  passportPhoto: {
                    title: t.page3.docs.passportPhotoTitle,
                    subtitle: t.page3.docs.passportPhotoSub,
                  },
                  govIdProof: {
                    title: t.page3.docs.govIdProofTitle,
                    subtitle: t.page3.docs.govIdProofSub,
                  },
                  class10Certificate: {
                    title: t.page3.docs.class10Title,
                    subtitle: t.page3.docs.class10Sub,
                  },
                  additionalEducation: {
                    title: t.page3.docs.additionalEduTitle,
                    subtitle: t.page3.docs.additionalEduSub,
                  },
                  incomeEvidence: {
                    title: t.page3.docs.incomeEvidenceTitle,
                    subtitle: t.page3.docs.incomeEvidenceSub,
                  },
                  categoryDisabilityCert: {
                    title: t.page3.docs.categoryCertTitle,
                    subtitle: t.page3.docs.categoryCertSub,
                  },
                  nominationForm: {
                    title: t.page3.docs.nominationFormTitle,
                    subtitle: t.page3.docs.nominationFormSub,
                  },
                };
                const docText = localizedDocs[item.key] || {
                  title: item.title,
                  subtitle: item.subtitle,
                };
                return (
                  <CompressedFileUploader
                    key={item.key}
                    fieldKey={item.key}
                    indexNumber={idx + 1}
                    title={docText.title}
                    subtitle={docText.subtitle}
                    infoTooltip={item.infoTooltip}
                    required={item.required}
                    allowNotApplicable={item.allowNotApplicable}
                    status={form.docStatuses[item.key] || "uploaded"}
                    fileData={uploadedFiles[item.key] || null}
                    onStatusChange={(newStatus) => {
                      setForm((prev) => ({
                        ...prev,
                        docStatuses: {
                          ...prev.docStatuses,
                          [item.key]: newStatus,
                        },
                      }));
                      if (errors[`doc_${item.key}`]) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next[`doc_${item.key}`];
                          return next;
                        });
                      }
                    }}
                    onFileProcessed={(fileObj) => {
                      setUploadedFiles((prev) => ({
                        ...prev,
                        [item.key]: fileObj,
                      }));
                      if (errors[`doc_${item.key}`]) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next[`doc_${item.key}`];
                          return next;
                        });
                      }
                    }}
                    errorMessage={errors[`doc_${item.key}`]}
                  />
                );
              })}
            </div>

            {/* Pending Document Explanation */}
            <div
              id="field-pendingDocumentsExplanation"
              className={`scroll-mt-28 rounded-xl border p-5 transition-colors ${
                hasAnyPendingDoc
                  ? "border-[#C9A45C] bg-[#C9A45C]/12"
                  : "border-[#292D29]/15 bg-[#F7F2E8]/40"
              }`}
            >
              {hasAnyPendingDoc ? (
                <MandatoryLabel
                  text={t.page3.pendingDocIdentify}
                  tooltip="Mandatory when any document above is marked 'Pending': Specify which document is pending and when you will submit it."
                />
              ) : (
                <label className="block text-xs sm:text-sm font-semibold text-[#16261D] mb-1.5">
                  {t.page3.pendingDocIdentify} {t.optionalTag}
                </label>
              )}
              <input
                type="text"
                value={form.pendingDocumentsExplanation}
                onChange={(e) =>
                  updateField("pendingDocumentsExplanation", e.target.value)
                }
                placeholder="e.g., Income Certificate applied at Tahsildar office — expected by 25/11/2026"
                className={`akshar-input ${
                  errors.pendingDocumentsExplanation ? "akshar-input-error" : ""
                }`}
              />
              {errors.pendingDocumentsExplanation && (
                <p className="mt-1 text-xs text-[#BD7959]">
                  {errors.pendingDocumentsExplanation}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ===================================================================
            PAGE 4: DECLARATIONS & SUBMISSION
        =================================================================== */}
        {currentStep === 4 && (
          <div className="space-y-8">
            {/* Section 1: Applicant Declaration */}
            <section aria-labelledby="p4-sec1-heading" className="space-y-5">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p4-sec1-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page4.sec1Title}
                </h2>
              </div>

              {/* Official Standard Declaration Scroll Box */}
              <div className="rounded-xl bg-[#F7F2E8] border border-[#C9A45C]/50 p-5 text-xs sm:text-sm leading-relaxed text-[#16261D] space-y-2">
                <p className="font-semibold uppercase tracking-wider text-[11px] text-[#294735]">
                  {t.page4.declarationHeading}
                </p>
                <p>{t.page4.declarationText}</p>
              </div>

              {/* User Agreement Checkbox (Replaces thumbprint / signature box) */}
              <div id="field-declarationAgreed" className="scroll-mt-28">
                <label
                  className={`flex items-start gap-3 cursor-pointer rounded-xl border p-4 transition-colors ${
                    errors.declarationAgreed
                      ? "border-[#BD7959] bg-[#BD7959]/[0.05]"
                      : "border-[#294735]/35 bg-[#294735]/5 hover:bg-[#294735]/10"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.declarationAgreed}
                    onChange={(e) =>
                      updateField("declarationAgreed", e.target.checked)
                    }
                    className="mt-0.5 h-5 w-5 accent-[#294735] shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#16261D] leading-relaxed inline-flex flex-wrap items-center gap-1.5">
                    <span>{t.page4.agreeCheckboxLabel}</span>
                    <span className="text-[#BD7959] font-bold">*</span>
                    <span
                      title="Mandatory: Check this box to confirm your agreement to the Applicant Declaration."
                      className="inline-flex items-center text-[#294735]/80 cursor-help"
                    >
                      <Info className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </label>
                {errors.declarationAgreed && (
                  <p className="mt-1.5 text-xs font-medium text-[#BD7959]">
                    {errors.declarationAgreed}
                  </p>
                )}
              </div>

              {/* Place & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div id="field-declarationPlace" className="scroll-mt-28">
                  <MandatoryLabel
                    text={t.page4.placeCity}
                    tooltip="Mandatory: Enter the town or city from where you are submitting this application."
                  />
                  <input
                    type="text"
                    value={form.declarationPlace}
                    onChange={(e) =>
                      updateField("declarationPlace", e.target.value)
                    }
                    placeholder="e.g., Bengaluru / Mysuru"
                    className={`akshar-input ${
                      errors.declarationPlace ? "akshar-input-error" : ""
                    }`}
                  />
                  {errors.declarationPlace && (
                    <p className="mt-1 text-xs text-[#BD7959]">
                      {errors.declarationPlace}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#16261D] mb-1.5">
                    {t.page4.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={form.declarationDate}
                    onChange={(e) =>
                      updateField("declarationDate", e.target.value)
                    }
                    className="akshar-input bg-[#F7F2E8]/50"
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Assisted Application Details (Optional) */}
            <section aria-labelledby="p4-sec2-heading" className="space-y-4">
              <div className="border-b border-[#292D29]/12 pb-3">
                <h2
                  id="p4-sec2-heading"
                  className="font-editorial text-xl sm:text-2xl text-[#16261D]"
                >
                  {t.page4.sec2Title}
                </h2>
              </div>

              <label className="inline-flex items-center gap-2.5 cursor-pointer text-sm font-medium text-[#16261D]">
                <input
                  type="checkbox"
                  checked={form.wasAssisted}
                  onChange={(e) => updateField("wasAssisted", e.target.checked)}
                  className="h-4 w-4 accent-[#294735]"
                />
                <span>{t.page4.wasAssistedQuestion}</span>
              </label>

              {form.wasAssisted && (
                <div className="rounded-xl bg-[#F7F2E8]/60 border border-[#292D29]/15 p-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      id="field-assistedLanguageUsed"
                      className="scroll-mt-28"
                    >
                      <MandatoryLabel
                        text={t.page4.assistedLanguageUsed}
                        tooltip="Mandatory when assisted: Enter the language used to explain the form to the applicant."
                      />
                      <input
                        type="text"
                        value={form.assistedLanguageUsed}
                        onChange={(e) =>
                          updateField("assistedLanguageUsed", e.target.value)
                        }
                        placeholder="e.g., Kannada / Hindi"
                        className={`akshar-input ${
                          errors.assistedLanguageUsed
                            ? "akshar-input-error"
                            : ""
                        }`}
                      />
                      {errors.assistedLanguageUsed && (
                        <p className="mt-1 text-xs text-[#BD7959]">
                          {errors.assistedLanguageUsed}
                        </p>
                      )}
                    </div>

                    <div
                      id="field-assistantNameContact"
                      className="scroll-mt-28"
                    >
                      <MandatoryLabel
                        text={t.page4.assistantNameContact}
                        tooltip="Mandatory when assisted: Enter the full name and phone number of the person who assisted."
                      />
                      <input
                        type="text"
                        value={form.assistantNameContact}
                        onChange={(e) =>
                          updateField("assistantNameContact", e.target.value)
                        }
                        placeholder="Full Name & 10-digit Phone"
                        className={`akshar-input ${
                          errors.assistantNameContact
                            ? "akshar-input-error"
                            : ""
                        }`}
                      />
                      {errors.assistantNameContact && (
                        <p className="mt-1 text-xs text-[#BD7959]">
                          {errors.assistantNameContact}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    id="field-assistantConfirmedCheckbox"
                    className="scroll-mt-28"
                  >
                    <label className="inline-flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm font-medium text-[#16261D]">
                      <input
                        type="checkbox"
                        checked={form.assistantConfirmedCheckbox}
                        onChange={(e) =>
                          updateField(
                            "assistantConfirmedCheckbox",
                            e.target.checked
                          )
                        }
                        className="mt-0.5 h-4 w-4 accent-[#294735] shrink-0"
                      />
                      <span>
                        {t.page4.assistantConfirmCheckbox}{" "}
                        <span className="text-[#BD7959]">*</span>
                      </span>
                    </label>
                    {errors.assistantConfirmedCheckbox && (
                      <p className="mt-1 text-xs text-[#BD7959]">
                        {errors.assistantConfirmedCheckbox}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {/* ===================================================================
            BOTTOM WIZARD NAVIGATION FOOTER
        =================================================================== */}
        <div className="pt-6 border-t border-[#292D29]/15 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#294735] bg-transparent hover:bg-[#294735]/5 px-5 py-3 text-sm font-semibold text-[#294735] transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              {t.prevButton}
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#294735] hover:bg-[#1e3527] text-[#F7F2E8] px-6 py-3.5 text-sm font-semibold shadow-sm transition-colors"
            >
              <span>{t.nextButton}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#16261D] hover:bg-[#294735] text-[#FFFFFF] border border-[#C9A45C] px-7 py-3.5 text-sm sm:text-base font-semibold shadow-md transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-[#C9A45C]" />
                  <span>{t.submittingButton}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-5 w-5 text-[#C9A45C]" />
                  <span>{t.submitApplicationButton}</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
