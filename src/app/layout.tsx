import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PortalHeader from "@/components/PortalHeader";
import PortalFooter from "@/components/PortalFooter";

export const metadata: Metadata = {
  title:
    "Candidate Scholarship Application | Bharat Yoga Kranti — Akshar Yoga Kendraa",
  description:
    "Official 4-Step Candidate Application Form for the National Scholarship Programme for 1,500 Underprivileged Youth | Akshar Yoga Kendraa.",
  icons: {
    icon: [
      { url: "/assets/512X512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/assets/512X512.png",
    apple: "/assets/512X512.png",
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
        <link rel="icon" href="/assets/512X512.png" type="image/png" />
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
