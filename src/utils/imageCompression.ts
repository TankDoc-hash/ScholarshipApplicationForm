export interface CompressedDocumentFile {
  fieldKey: string;
  fileName: string;
  mimeType: string;
  originalSize: number;
  compressedSize: number;
  dataUrl: string;
  isCompressed: boolean;
  uploadedAt: string;
}

const MAX_RAW_FILE_BYTES = 5 * 1024 * 1024; // 5 MB max input file size
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

export function formatBytes(bytes: number): string {
  if (bytes <= 0) return "0 KB";
  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${Math.round(kb)} KB`;
  }
  return `${(kb / 1024).toFixed(2)} MB`;
}

export function validateUploadFile(file: File): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() || "";
  const validExt = ["jpg", "jpeg", "png", "pdf"].includes(ext);
  const validMime = ALLOWED_MIME_TYPES.includes(file.type.toLowerCase());

  if (!validExt && !validMime) {
    return "Invalid file format. Only .JPG, .PNG, and .PDF files are allowed.";
  }

  if (file.size > MAX_RAW_FILE_BYTES) {
    return `File size (${formatBytes(file.size)}) exceeds the 5 MB maximum limit.`;
  }

  return null;
}

/**
 * Automatically compresses .jpg / .png images in the browser using HTML5 Canvas
 * before storing or uploading, reducing 3-5 MB phone photos down to ~150-350 KB.
 * PDF files are preserved as-is up to 5 MB.
 */
export async function processAndCompressFile(
  file: File,
  fieldKey: string,
  options?: { maxDimension?: number; targetMaxBytes?: number }
): Promise<CompressedDocumentFile> {
  const validationError = validateUploadFile(file);
  if (validationError) {
    throw new Error(validationError);
  }

  const isPdf =
    file.type === "application/pdf" ||
    file.name.toLowerCase().endsWith(".pdf");

  if (isPdf) {
    const dataUrl = await readFileAsDataUrl(file);
    return {
      fieldKey,
      fileName: sanitizeFileName(file.name),
      mimeType: "application/pdf",
      originalSize: file.size,
      compressedSize: file.size,
      dataUrl,
      isCompressed: false,
      uploadedAt: new Date().toISOString(),
    };
  }

  // Image compression path (.jpg, .jpeg, .png)
  const maxDimension =
    options?.maxDimension ?? (fieldKey === "passportPhoto" ? 900 : 1600);
  const targetMaxBytes = options?.targetMaxBytes ?? 320 * 1024; // ~320 KB target

  const img = await loadImageFromFile(file);
  let { width, height } = img;

  if (width > maxDimension || height > maxDimension) {
    if (width >= height) {
      height = Math.round((height * maxDimension) / width);
      width = maxDimension;
    } else {
      width = Math.round((width * maxDimension) / height);
      height = maxDimension;
    }
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    const fallbackUrl = await readFileAsDataUrl(file);
    return {
      fieldKey,
      fileName: sanitizeFileName(file.name),
      mimeType: file.type || "image/jpeg",
      originalSize: file.size,
      compressedSize: file.size,
      dataUrl: fallbackUrl,
      isCompressed: false,
      uploadedAt: new Date().toISOString(),
    };
  }

  // Fill white background for transparent PNGs converted to JPEG
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);

  // Iteratively step quality down if still larger than targetMaxBytes
  let quality = 0.78;
  let compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
  let compressedSize = estimateBase64Bytes(compressedDataUrl);

  while (compressedSize > targetMaxBytes && quality > 0.42) {
    quality -= 0.1;
    compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
    compressedSize = estimateBase64Bytes(compressedDataUrl);
  }

  const baseName = file.name.replace(/\.[^/.]+$/, "");
  const compressedFileName = `${sanitizeFileName(baseName)}-compressed.jpg`;

  return {
    fieldKey,
    fileName: compressedFileName,
    mimeType: "image/jpeg",
    originalSize: file.size,
    compressedSize,
    dataUrl: compressedDataUrl,
    isCompressed: true,
    uploadedAt: new Date().toISOString(),
  };
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to decode image file for compression."));
    };
    img.src = objectUrl;
  });
}

function estimateBase64Bytes(dataUrl: string): number {
  const base64Part = dataUrl.split(",")[1] || "";
  return Math.round((base64Part.length * 3) / 4);
}

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}
