"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  LanguageCode,
  WIZARD_TRANSLATIONS,
  WizardUITranslations,
} from "@/data/formTranslations";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: WizardUITranslations;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: WIZARD_TRANSLATIONS.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(
        "akshar_app_lang"
      ) as LanguageCode | null;
      if (saved && WIZARD_TRANSLATIONS[saved]) {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("akshar_app_lang", lang);
      document.documentElement.lang = lang === "en" ? "en-IN" : lang;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: WIZARD_TRANSLATIONS[language] || WIZARD_TRANSLATIONS.en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
