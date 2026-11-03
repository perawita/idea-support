import React from "react";

export interface PageHeaderProps {
  badgeText: string;
  titleBlue?: string;
  titleDark?: string;
  titleCustom?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  badgeText,
  titleBlue,
  titleDark,
  titleCustom,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="w-full pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Section Label — bracket style */}
      <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
        <span className="text-[#38BDF8] text-lg sm:text-xl leading-none">[</span>
        <span className="text-[#004CD3] text-xs sm:text-sm tracking-[0.2em] uppercase font-bold">
          {badgeText}
        </span>
        <span className="text-[#38BDF8] text-lg sm:text-xl leading-none">]</span>
      </div>

      {/* Main Heading */}
      {titleCustom ? (
        <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-tight text-center leading-[1.2]">
          {titleCustom}
        </h1>
      ) : (
        <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-tight text-center leading-[1.2] flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {titleBlue && <span className="text-[#004CD3]">{titleBlue}</span>}
          {titleDark === "idea.support" ? (
            <span className="text-[#171717] font-semibold">idea.support</span>
          ) : (
            titleDark && <span className="text-[#171717]">{titleDark}</span>
          )}
        </h1>
      )}

      {/* Subtitle if available */}
      {subtitle && (
        <p className="mt-4 text-[#666666] text-sm sm:text-[15.5px] max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Filter pills or action buttons */}
      {children && <div className="mt-6 sm:mt-8 w-full flex justify-center">{children}</div>}
    </section>
  );
}
