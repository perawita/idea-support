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
      className={`inline-flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm px-3.5 sm:px-4 h-[64px] sm:h-[72px] shrink-0 select-none transition-all duration-200 ${className}`}
    >
      {/* Single Toggle Button styled exactly like the original Navbar Contact Us button */}
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
        className="inline-flex items-center justify-center px-5 py-2.5 bg-[#004CD3] hover:bg-[#003BAA] text-white text-[15px] font-semibold rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]/60 shadow-sm cursor-pointer whitespace-nowrap"
      >
        <span
          key={language}
          className="transition-all duration-150 ease-out inline-block"
        >
          {language === "id" ? "ID" : "EN"}
        </span>
      </button>
    </div>
  );
}
