"use client";

import React from "react";
import { Phone, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  LANGUAGE_OPTIONS,
  LanguageCode,
  CONTACT_INFO,
} from "@/data/formTranslations";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.766.461 3.49 1.337 5.012L2 22l5.122-1.343a9.97 9.97 0 0 0 4.906 1.292h.004c5.522 0 10.007-4.485 10.007-10.008C22.039 6.485 17.554 2 12.031 2Zm5.822 14.129c-.246.693-1.43 1.326-1.995 1.411-.513.077-1.184.11-1.91-.12-.441-.14-1.007-.327-1.73-.64-3.045-1.315-5.033-4.38-5.185-4.583-.152-.203-1.238-1.647-1.238-3.142 0-1.495.783-2.23 1.061-2.534.278-.304.606-.38.808-.38.202 0 .404.002.581.011.186.009.436-.071.682.521.246.593.834 2.053.909 2.205.076.152.126.33.025.533-.101.203-.151.33-.303.507-.152.177-.319.396-.455.532-.152.152-.31.316-.133.62.177.304.786 1.297 1.688 2.101 1.16 1.034 2.138 1.355 2.441 1.507.303.152.48.127.657-.076.177-.203.758-.887.96-1.191.202-.304.404-.253.682-.152.278.101 1.768.834 2.071.986.303.152.505.228.581.355.076.127.076.735-.17 1.428Z" />
    </svg>
  );
}

export default function PortalHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#16261D] text-[#F7F2E8] border-b border-[#C9A45C]/25 shadow-sm no-print">
      {/* Top Institutional Ribbon */}
      <div className="bg-[#101C15] border-b border-[#F7F2E8]/10 px-4 py-1.5 text-[11px] sm:text-xs">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
            <span className="font-medium text-[#E5C67E] tracking-wide">
              {t.topBanner}
            </span>
          </div>
          <span className="hidden sm:inline-block rounded-xs bg-[#D5B472] text-[#16261D] font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider">
            {t.topBannerBadge}
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/assets/512X512.png"
            alt="Akshar Yoga Kendraa Emblem"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-contain bg-[#F7F2E8]/10 p-0.5 border border-[#C9A45C]/40 shrink-0"
          />
          <div className="min-w-0">
            <p className="font-editorial text-base sm:text-lg text-[#FFFFFF] leading-tight truncate">
              Akshar Yoga Kendraa
            </p>
            <p className="text-[11px] sm:text-xs text-[#C9A45C] truncate">
              Bharat Yoga Kranti · Candidate Scholarship Portal
            </p>
          </div>
        </div>

        {/* Language Switcher & Helpline Icons */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Desktop Language Pill Bar */}
          <div
            role="group"
            aria-label="Select Language"
            className="hidden md:inline-flex items-center rounded-sm bg-[#F7F2E8]/10 border border-[#C9A45C]/30 p-0.5"
          >
            {LANGUAGE_OPTIONS.map((opt) => {
              const active = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLanguage(opt.code)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors ${
                    active
                      ? "bg-[#C9A45C] text-[#16261D] font-bold"
                      : "text-[#F7F2E8]/85 hover:text-[#FFFFFF] hover:bg-[#F7F2E8]/10"
                  }`}
                  title={`${opt.nativeLabel} (${opt.englishLabel})`}
                >
                  {opt.nativeLabel}
                </button>
              );
            })}
          </div>

          {/* Mobile Language Dropdown */}
          <div className="relative md:hidden flex items-center">
            <Globe
              className="h-3.5 w-3.5 text-[#C9A45C] absolute left-2.5 pointer-events-none"
              aria-hidden="true"
            />
            <select
              aria-label="Select Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="appearance-none rounded-sm bg-[#F7F2E8]/10 border border-[#C9A45C]/35 pl-7 pr-5 py-1.5 text-xs font-semibold text-[#F7F2E8] focus:outline-none focus:border-[#C9A45C]"
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <option
                  key={opt.code}
                  value={opt.code}
                  className="bg-[#16261D] text-[#F7F2E8]"
                >
                  {opt.nativeLabel} ({opt.shortCode})
                </option>
              ))}
            </select>
          </div>

          {/* Call Helpline Button */}
          <a
            href={CONTACT_INFO.telHref}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#C9A45C]/35 bg-[#F7F2E8]/10 text-[#E5C67E] hover:bg-[#C9A45C] hover:text-[#16261D] transition-colors"
            title={`Admissions Helpline: ${CONTACT_INFO.phoneFormatted}`}
            aria-label="Call Admissions Helpline"
          >
            <Phone className="h-4 w-4" />
          </a>

          {/* WhatsApp Helpline Button */}
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#C9A45C]/35 bg-[#294735] text-[#F7F2E8] hover:bg-[#C9A45C] hover:text-[#16261D] transition-colors"
            title="WhatsApp Scholarship Helpline"
            aria-label="WhatsApp Scholarship Helpline"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
