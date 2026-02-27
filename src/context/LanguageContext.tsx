"use client";

import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import id from "@/locales/id.json";

type Lang = "en" | "id";

const translations = { en, id };

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}