"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";

export interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language Selector"
      className={`inline-flex items-center justify-center bg-white rounded-full border border-[#D0E3F8] shadow-xs px-3 sm:px-4 h-[44px] sm:h-[52px] min-w-[82px] sm:w-[100px] shrink-0 gap-1.5 text-xs sm:text-[14px] select-none transition-all duration-200 hover:border-[#0753D9]/40 ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`transition-all duration-200 cursor-pointer focus:outline-none focus-visible:underline ${
          language === "id"
            ? "text-[#0753D9] font-bold tracking-wide"
            : "text-slate-400 font-medium hover:text-slate-600"
        }`}
        aria-label="Ganti ke Bahasa Indonesia"
        aria-pressed={language === "id"}
      >
        ID
      </button>

      <span className="text-slate-300 font-light text-xs sm:text-sm select-none" aria-hidden="true">
        /
      </span>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`transition-all duration-200 cursor-pointer focus:outline-none focus-visible:underline ${
          language === "en"
            ? "text-[#0753D9] font-bold tracking-wide"
            : "text-slate-400 font-medium hover:text-slate-600"
        }`}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
