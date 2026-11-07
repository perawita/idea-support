"use client";

import React, { useEffect, useState } from "react";

export interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check stored preference or system preference
    const stored = localStorage.getItem("idea-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("idea-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("idea-theme", "light");
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`w-[54px] sm:w-[60px] h-[30px] sm:h-[34px] rounded-full bg-slate-200/70 border border-slate-300/60 p-1 flex items-center shrink-0 ${className}`}
        aria-hidden="true"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-xs" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      title={isDark ? "Mode Terang (Light Mode)" : "Mode Gelap (Dark Mode)"}
      className={`group relative w-[56px] sm:w-[64px] h-[32px] sm:h-[36px] rounded-full p-1 flex items-center shrink-0 cursor-pointer select-none transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] hover:scale-105 active:scale-95 shadow-sm hover:shadow-md ${
        isDark
          ? "bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0A0F1D] border border-blue-500/40 shadow-blue-950/50"
          : "bg-gradient-to-r from-sky-100 via-[#E0EFFF] to-blue-200 border border-[#99C7F7] shadow-blue-900/10"
      } ${className}`}
    >
      {/* Decorative Track Details */}
      {/* Stars in Dark Mode (Left side of track) */}
      <div
        className={`absolute left-2.5 flex items-center gap-1 pointer-events-none transition-all duration-500 ${
          isDark
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-2 scale-75"
        }`}
        aria-hidden="true"
      >
        <span className="w-1 h-1 rounded-full bg-amber-200/80 animate-pulse" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-xs shadow-white animate-pulse delay-100" />
      </div>

      {/* Clouds in Light Mode (Right side of track) */}
      <div
        className={`absolute right-2.5 flex items-center gap-0.5 pointer-events-none transition-all duration-500 ${
          isDark
            ? "opacity-0 translate-x-2 scale-75"
            : "opacity-100 translate-x-0 scale-100"
        }`}
        aria-hidden="true"
      >
        <svg
          className="w-4 h-4 text-sky-400/70"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>

      {/* Ripple ring effect when clicked */}
      {isAnimating && (
        <span
          className="absolute inset-0 rounded-full border-2 border-amber-400/60 dark:border-blue-400/60 animate-ping pointer-events-none opacity-75"
          aria-hidden="true"
        />
      )}

      {/* Sliding Knob with Spring Animation & Rotation */}
      <div
        className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isDark
            ? "translate-x-[24px] sm:translate-x-[28px] bg-gradient-to-tr from-slate-200 via-indigo-100 to-white text-indigo-950 shadow-indigo-500/40 ring-1 ring-white/60 rotate-[360deg]"
            : "translate-x-0 bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-amber-950 shadow-amber-500/50 ring-1 ring-amber-300 rotate-0"
        }`}
      >
        {isDark ? (
          /* Crescent Moon Icon */
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-950 fill-current transform -rotate-12 transition-transform duration-300"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.3 2a10 10 0 0 0-.19 1.4 10 10 0 0 0 10 10c.5 0 .97-.07 1.43-.19a10.02 10.02 0 0 1-10 10.8A10 10 0 0 1 12.3 2z" />
          </svg>
        ) : (
          /* Radiant Sun Icon with Rotating Rays */
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-950 fill-current group-hover:rotate-45 transition-transform duration-500"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.29-1.29zm-13.78 1.41a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.29 1.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.29-1.29zm13.78-13.78a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.29 1.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.29-1.29z" />
          </svg>
        )}
      </div>
    </button>
  );
}
