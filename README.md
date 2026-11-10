# Akshar Yoga Kendraa — Candidate Scholarship Application Portal

Official 4-Page Digital Candidate Application Form for the **National Scholarship Programme for 1,500 Underprivileged Youth (Bharat Yoga Kranti)** by **Akshar Yoga Kendraa**.

## Features
- **4-Step Sequential Wizard**:
  1. **Page 1**: Personal & Educational Details (with auto-calculated age, 12-digit Aadhaar validation, and dynamic qualification rows)
  2. **Page 2**: Economic Circumstances, Priority Categories, Present Status & Accessibility Support
  3. **Page 3**: Drag-and-Drop Document Checklist with **Automatic Browser Image Compression** (`~150–320 KB`)
  4. **Page 4**: Official Candidate Declaration & Assisted Application Details
- **Multilingual Support**: English, Kannada, Hindi, Marathi, Tamil, and Telugu.
- **Structured Storage (`Main Folder > Candidate Name > Files`)**:
  - Automatically creates a dedicated candidate folder containing `application-details.txt`, `application-details.json`, and a `Files/` subfolder with all compressed documents both locally and in Google Drive via [`scripts/google-apps-script-drive-sheets.js`](./scripts/google-apps-script-drive-sheets.js).
