import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PortalHeader from "@/components/PortalHeader";
import PortalFooter from "@/components/PortalFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://scholarship-application-form-one.vercel.app"),
  title:
    "Candidate Scholarship Application | Bharat Yoga Kranti — Akshar Yoga Kendraa",
  description:
    "Official 4-Step Candidate Application Form for the National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa.",
  icons: {
    icon: [
      { url: "/assets/512X512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/assets/512X512.png?v=2",
    apple: "/assets/512X512.png?v=2",
  },
  openGraph: {
    title:
      "Candidate Scholarship Application | Bharat Yoga Kranti — Akshar Yoga Kendraa",
    description:
      "Official 4-Step Candidate Application Form for the National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa.",
    url: "https://scholarship-application-form-one.vercel.app",
    siteName: "Akshar Yoga Kendraa",
    images: [
      {
        url: "/assets/share-logo.png?v=2",
        width: 512,
        height: 512,
        alt: "Akshar Yoga Kendraa — Bharat Yoga Kranti Scholarship Application",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Candidate Scholarship Application | Bharat Yoga Kranti — Akshar Yoga Kendraa",
    description:
      "Official 4-Step Candidate Application Form for the National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa.",
    images: ["/assets/share-logo.png?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="antialiased">
      <head>
        <link rel="icon" href="/assets/512X512.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/512X512.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F2E8] text-[#292D29]">
        <LanguageProvider>
          <PortalHeader />
          <main className="flex-1">{children}</main>
          <PortalFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
