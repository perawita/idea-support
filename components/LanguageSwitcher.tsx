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
      className={`inline-flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm hover:border-[#004CD3]/40 hover:shadow-md transition-all duration-200 px-2.5 sm:px-3 h-[64px] sm:h-[72px] shrink-0 select-none ${className}`}
    >
      {/* Single Toggle Button with identical height, color, and presence as Navbar Contact Us button */}
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
        className="h-[48px] sm:h-[50px] w-[90px] sm:w-[110px] rounded-full bg-[#004CD3] hover:bg-[#003BAA] active:scale-95 text-white font-bold text-[15px] sm:text-base tracking-wider shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] focus-visible:ring-offset-2"
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
