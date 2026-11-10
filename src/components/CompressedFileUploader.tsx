"use client";

import React, { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Trash2,
  Loader2,
  AlertCircle,
  Sparkles,
  Info,
} from "lucide-react";
import {
  CompressedDocumentFile,
  formatBytes,
  processAndCompressFile,
} from "@/utils/imageCompression";

export type DocumentItemStatus = "uploaded" | "pending" | "na";

interface CompressedFileUploaderProps {
  fieldKey: string;
  indexNumber: number;
  title: string;
  subtitle?: string;
  infoTooltip?: string;
  required?: boolean;
  allowNotApplicable?: boolean;
  status: DocumentItemStatus;
  fileData: CompressedDocumentFile | null;
  onStatusChange: (status: DocumentItemStatus) => void;
  onFileProcessed: (file: CompressedDocumentFile | null) => void;
  errorMessage?: string;
}

export default function CompressedFileUploader({
  fieldKey,
  indexNumber,
  title,
  subtitle,
  infoTooltip,
  required = false,
  allowNotApplicable = true,
  status,
  fileData,
  onStatusChange,
  onFileProcessed,
  errorMessage,
}: CompressedFileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleFileSelect = async (rawFile: File | null) => {
    if (!rawFile) return;
    setLocalError(null);
    setIsCompressing(true);

    try {
      const processed = await processAndCompressFile(rawFile, fieldKey);
      onFileProcessed(processed);
      onStatusChange("uploaded");
    } catch (err) {
      setLocalError(
        err instanceof Error
          ? err.message
          : "Unable to process file. Please try another .jpg, .png, or .pdf file."
      );
    } finally {
      setIsCompressing(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] || null;
    await handleFileSelect(droppedFile);
  };

  const savingsPercent =
    fileData &&
    fileData.isCompressed &&
    fileData.originalSize > fileData.compressedSize
      ? Math.round(
          ((fileData.originalSize - fileData.compressedSize) /
            fileData.originalSize) *
            100
        )
      : 0;

  return (
    <div
      id={`field-doc_${fieldKey}`}
      className={`scroll-mt-28 rounded-xl border p-4 sm:p-5 transition-all ${
        errorMessage || localError
          ? "border-[#BD7959] bg-[#BD7959]/[0.04] ring-2 ring-[#BD7959]/30"
          : fileData && status === "uploaded"
            ? "border-[#294735]/35 bg-[#F7F2E8]/45"
            : "border-[#292D29]/15 bg-[#FFFFFF]"
      }`}
    >
      {/* Document Header & Status Pills */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16261D] text-[#E5C67E] text-xs font-bold">
            {indexNumber}
          </span>
          <div>
            <h4 className="text-sm sm:text-[15px] font-semibold text-[#16261D] leading-snug inline-flex flex-wrap items-center gap-1.5">
              <span>{title}</span>
              {required ? (
                <span className="inline-flex items-center gap-1">
                  <span className="text-[#BD7959] font-bold">*</span>
                  <span
                    title={
                      infoTooltip ||
                      `Mandatory document: Please upload ${title} (.jpg, .png, or .pdf) or mark as 'Pending' if submitting later.`
                    }
                    className="inline-flex items-center text-[#294735]/80 hover:text-[#16261D] cursor-help"
                  >
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              ) : (
                <span className="text-xs font-normal text-[#525752]">
                  (Optional)
                </span>
              )}
            </h4>
            {subtitle && (
              <p className="mt-0.5 text-xs text-[#525752] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Status Radio Selector: Upload / Pending / N/A */}
        <div
          role="radiogroup"
          aria-label={`${title} status`}
          className="inline-flex flex-wrap items-center gap-1.5 rounded-lg bg-[#F7F2E8] p-1 border border-[#292D29]/12 self-start shrink-0"
        >
          <button
            type="button"
            onClick={() => onStatusChange("uploaded")}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              status === "uploaded"
                ? "bg-[#294735] text-[#FFFFFF] shadow-2xs"
                : "text-[#525752] hover:text-[#16261D]"
            }`}
          >
            Attach File
          </button>
          <button
            type="button"
            onClick={() => {
              onStatusChange("pending");
              setLocalError(null);
            }}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              status === "pending"
                ? "bg-[#C9A45C] text-[#16261D] font-semibold shadow-2xs"
                : "text-[#525752] hover:text-[#16261D]"
            }`}
          >
            Pending
          </button>
          {allowNotApplicable && (
            <button
              type="button"
              onClick={() => {
                onStatusChange("na");
                setLocalError(null);
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                status === "na"
                  ? "bg-[#292D29] text-[#FFFFFF] shadow-2xs"
                  : "text-[#525752] hover:text-[#16261D]"
              }`}
            >
              Not Applicable
            </button>
          )}
        </div>
      </div>

      {/* Upload Dropzone or Preview when status === 'uploaded' */}
      {status === "uploaded" && (
        <div className="mt-4">
          <input
            ref={inputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
            onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
            className="sr-only"
            id={`file-upload-${fieldKey}`}
          />

          {isCompressing ? (
            <div className="flex items-center justify-center gap-3 rounded-lg border border-dashed border-[#294735]/40 bg-[#F7F2E8]/60 py-6 px-4 text-sm text-[#294735]">
              <Loader2 className="h-5 w-5 animate-spin text-[#294735]" />
              <span>Compressing & optimizing image for fast upload...</span>
            </div>
          ) : fileData ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-[#294735]/25 bg-[#FFFFFF] p-3">
              <div className="flex items-center gap-3 min-w-0">
                {fileData.mimeType.startsWith("image/") ? (
                  <img
                    src={fileData.dataUrl}
                    alt={title}
                    className="h-14 w-14 rounded-md object-cover border border-[#292D29]/15 shrink-0"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-md bg-[#294735]/10 text-[#294735] flex items-center justify-center shrink-0">
                    <FileText className="h-7 w-7" />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#294735] shrink-0" />
                    <p className="text-xs sm:text-sm font-semibold text-[#16261D] truncate">
                      {fileData.fileName}
                    </p>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#525752]">
                    <span>Final Size: {formatBytes(fileData.compressedSize)}</span>
                    {fileData.isCompressed && savingsPercent > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-xs bg-[#294735]/12 text-[#294735] font-semibold px-2 py-0.5">
                        <Sparkles className="h-3 w-3" />
                        Compressed from {formatBytes(fileData.originalSize)} (-
                        {savingsPercent}%)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="px-3 py-1.5 rounded-md border border-[#292D29]/20 text-xs font-medium text-[#292D29] hover:bg-[#F7F2E8] transition-colors"
                >
                  Replace
                </button>
                <button
                  type="button"
                  onClick={() => onFileProcessed(null)}
                  className="p-1.5 rounded-md border border-[#BD7959]/30 text-[#BD7959] hover:bg-[#BD7959]/10 transition-colors"
                  title="Remove file"
                  aria-label="Remove file"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  inputRef.current?.click();
                }
              }}
              className={`cursor-pointer rounded-lg border-2 border-dashed p-4 sm:p-5 text-center transition-colors ${
                isDragging
                  ? "border-[#294735] bg-[#294735]/10"
                  : "border-[#292D29]/25 bg-[#F7F2E8]/35 hover:border-[#294735] hover:bg-[#F7F2E8]/70"
              }`}
            >
              <UploadCloud className="mx-auto h-7 w-7 text-[#294735]" />
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#16261D]">
                Click to select or drag & drop file here
              </p>
              <p className="mt-0.5 text-[11px] text-[#525752]">
                Allowed: .JPG, .PNG, .PDF (Max 5 MB) · Photos are auto-compressed
              </p>
            </div>
          )}
        </div>
      )}

      {status === "pending" && (
        <div className="mt-3 rounded-md bg-[#C9A45C]/15 border border-[#C9A45C]/40 px-3.5 py-2 text-xs text-[#16261D]">
          Marked as <strong>Pending</strong> — Please specify the expected
          submission date below.
        </div>
      )}

      {status === "na" && (
        <div className="mt-3 rounded-md bg-[#292D29]/5 border border-[#292D29]/15 px-3.5 py-2 text-xs text-[#525752]">
          Marked as <strong>Not Applicable</strong> for this application.
        </div>
      )}

      {(localError || errorMessage) && (
        <div
          role="alert"
          className="mt-2.5 flex items-center gap-2 text-xs font-medium text-[#BD7959]"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{localError || errorMessage}</span>
        </div>
      )}
    </div>
  );
}
