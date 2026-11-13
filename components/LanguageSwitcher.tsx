"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";

export interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className={`inline-flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm hover:border-[#0753D9]/40 hover:shadow-md transition-all duration-200 px-2 sm:px-2.5 h-[64px] sm:h-[72px] shrink-0 select-none ${className}`}
    >
      {/* Single Toggle Button styled like the Navbar CTA / Active button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={
          language === "id"
            ? "Bahasa aktif: Indonesia. Klik untuk beralih ke English"
            : "Active language: English. Click to switch to Bahasa Indonesia"
        }
        title={
          language === "id"
            ? "Beralih ke English (EN)"
            : "Switch to Bahasa Indonesia (ID)"
        }
        className="h-[44px] sm:h-[50px] px-5 sm:px-6 min-w-[58px] sm:min-w-[66px] rounded-full bg-[#0753D9] hover:bg-[#004CD3] active:scale-95 text-white font-bold text-sm sm:text-[15px] tracking-wide shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0753D9] focus-visible:ring-offset-2"
      >
        <span
          key={language}
          className="transition-all duration-200 ease-out transform"
        >
          {language === "id" ? "ID" : "EN"}
        </span>
      </button>
    </div>
  );
}
