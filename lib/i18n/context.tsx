"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Language, Translations } from "./types";
import { idTranslations } from "./id";
import { enTranslations } from "./en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Translations;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "idea_support_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage safely on client mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "id") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      // Ignore localStorage access restrictions if any
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore errors
    }
  };

  const dict = useMemo(() => {
    return language === "en" ? enTranslations : idTranslations;
  }, [language]);

  // Nested property lookup helper: t("nav.home")
  const t = (path: string, fallback?: string): string => {
    const keys = path.split(".");
    let current: any = dict;
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return typeof current === "string" ? current : fallback || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback if used outside provider during SSR/testing
    return {
      language: "id" as Language,
      setLanguage: () => {},
      dict: idTranslations,
      t: (path: string, fallback?: string) => fallback || path,
    };
  }
  return context;
}

