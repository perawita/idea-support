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
      role="group"
      aria-label="Language Selector"
      className={`inline-flex items-center bg-white rounded-full border border-[#D0E3F8] shadow-xs hover:border-[#0753D9]/40 hover:shadow-md transition-all duration-300 p-1 sm:p-1.5 h-[46px] sm:h-[52px] shrink-0 select-none group gap-1.5 sm:gap-2 ${className}`}
    >
      {/* Globe Icon Badge */}
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50/80 border border-blue-100/80 flex items-center justify-center text-[#0753D9] transition-all duration-300 group-hover:bg-[#0753D9] group-hover:text-white group-hover:border-[#0753D9] group-hover:scale-105 shrink-0"
        title={language === "id" ? "Pilih Bahasa" : "Select Language"}
      >
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 group-hover:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          />
        </svg>
      </div>

      {/* Segmented Track with Animated Slider Pill */}
      <div className="relative flex items-center bg-slate-100/90 rounded-full p-0.5 border border-slate-200/60 shadow-inner">
        {/* Animated Sliding Active Capsule */}
        <span
          className={`absolute top-0.5 bottom-0.5 rounded-full bg-[#0753D9] shadow-sm shadow-blue-600/30 transition-all duration-300 ease-out pointer-events-none ${
            language === "id"
              ? "left-0.5 w-[32px] sm:w-[36px]"
              : "left-[calc(100%-32.5px)] sm:left-[calc(100%-36.5px)] w-[32px] sm:w-[36px]"
          }`}
          aria-hidden="true"
        />

        {/* Button ID */}
        <button
          type="button"
          onClick={() => setLanguage("id")}
          className={`relative z-10 w-[32px] sm:w-[36px] h-[26px] sm:h-[30px] rounded-full text-xs sm:text-[13px] font-bold flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0753D9] ${
            language === "id"
              ? "text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
          aria-label="Bahasa Indonesia"
          aria-pressed={language === "id"}
        >
          ID
        </button>

        {/* Button EN */}
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`relative z-10 w-[32px] sm:w-[36px] h-[26px] sm:h-[30px] rounded-full text-xs sm:text-[13px] font-bold flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0753D9] ${
            language === "en"
              ? "text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
          aria-label="English"
          aria-pressed={language === "en"}
        >
          EN
        </button>
      </div>
    </div>
  );
}
