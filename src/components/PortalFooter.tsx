"use client";

import React from "react";
import { CONTACT_INFO } from "@/data/formTranslations";

export default function PortalFooter() {
  return (
    <footer className="bg-[#16261D] text-[#F7F2E8] border-t border-[#C9A45C]/25 mt-12 no-print">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#F7F2E8]/12">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/512X512.png"
              alt="Akshar Yoga Kendraa"
              className="h-11 w-11 rounded-full object-contain bg-[#F7F2E8]/10 p-0.5 border border-[#C9A45C]/40"
            />
            <div>
              <p className="font-editorial text-lg text-[#FFFFFF]">
                Akshar Yoga Kendraa
              </p>
              <p className="text-xs text-[#C9A45C]">
                National Scholarship Programme for 1,500 Underprivileged Youth
              </p>
            </div>
          </div>

          <div className="text-xs text-[#F7F2E8]/80 space-y-1">
            <p className="font-semibold text-[#E5C67E]">
              Centre for Sports Excellence (CSE), Bengaluru
            </p>
            <p>
              Survey No. 336, Bettahalasur Village, Jala Hobli, Yelahanka Taluk,
              Bengaluru 562157
            </p>
            <p>
              Helpline:{" "}
              <a
                href={CONTACT_INFO.telHref}
                className="text-[#E5C67E] underline hover:text-[#FFFFFF]"
              >
                {CONTACT_INFO.phoneFormatted}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F7F2E8]/60">
          <p>
            © {new Date().getFullYear()} Akshar Yoga Kendraa · Bharat Yoga
            Kranti. All rights reserved.
          </p>
          <p>
            Encrypted Digital Application · Auto-Compressed Document Upload
          </p>
        </div>
      </div>
    </footer>
  );
}
