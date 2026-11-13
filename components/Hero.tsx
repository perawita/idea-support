"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      aria-label="Hero Section"
      className="w-full pt-12 sm:pt-16 md:pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center"
    >
      {/* Main Headline (H1) */}
      <h1 className="text-[#0062E0] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.2] sm:leading-[1.18] tracking-tight max-w-4xl">
        {dict.home.heroTitle1}
        <br />
        {dict.home.heroTitle2}
        <br />
        {dict.home.heroTitle3}
      </h1>

      {/* Subtitle / Description */}
      <p className="mt-6 sm:mt-8 mb-8 sm:mb-10 text-[#666666] text-sm sm:text-[15.5px] leading-relaxed max-w-2xl sm:max-w-2xl">
        {dict.home.heroSubtitle}
      </p>

      {/* CTA Button */}
      <Link
        href="/kontak"
        className="inline-flex items-center bg-[#0062E0] hover:bg-[#004EB3] active:bg-[#003B86] text-white font-semibold text-sm sm:text-[15px] rounded-full px-8 sm:px-10 py-3 sm:py-3.5 shadow-[0_4px_20px_rgba(0,98,224,0.25)] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0062E0]"
      >
        {dict.home.heroCta}
      </Link>
    </section>
  );
}
