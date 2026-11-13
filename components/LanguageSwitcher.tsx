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
      className={`inline-flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm hover:border-[#0753D9]/40 hover:shadow-md transition-all duration-200 px-2 sm:px-2.5 h-[64px] sm:h-[72px] shrink-0 select-none ${className}`}
    >
      {/* Segmented Track with Animated Slider Pill */}
      <div className="relative flex items-center bg-slate-100/90 rounded-full p-1 sm:p-1.5 border border-slate-200/60 shadow-inner">
        {/* Animated Sliding Active Capsule */}
        <span
          className={`absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 rounded-full bg-[#0753D9] shadow-sm shadow-blue-600/30 transition-all duration-300 ease-out pointer-events-none ${
            language === "id"
              ? "left-1 sm:left-1.5"
              : "left-[calc(100%-48px)] sm:left-[calc(100%-58px)]"
          } w-[44px] sm:w-[52px]`}
          aria-hidden="true"
        />

        {/* Button ID */}
        <button
          type="button"
          onClick={() => setLanguage("id")}
          className={`relative z-10 w-[44px] sm:w-[52px] h-[38px] sm:h-[44px] rounded-full text-sm sm:text-[15px] font-bold flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0753D9] ${
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
          className={`relative z-10 w-[44px] sm:w-[52px] h-[38px] sm:h-[44px] rounded-full text-sm sm:text-[15px] font-bold flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0753D9] ${
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
