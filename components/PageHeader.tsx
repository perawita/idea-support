import React from "react";

export interface PageHeaderProps {
  badgeText: string;
  titleBlue: string;
  titleDark?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  badgeText,
  titleBlue,
  titleDark = "idea.support",
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="w-full pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Small Badge Pill */}
      <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 sm:px-5 py-1.5 shadow-[0_2px_10px_rgba(0,98,224,0.06)] border border-[#D0E3F8] mb-5 sm:mb-6 transition-transform hover:scale-[1.02] duration-150">
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#0062E0] ring-4 ring-[#D0E3F8] shrink-0"
          aria-hidden="true"
        />
        <span className="text-xs sm:text-[13.5px] font-medium text-[#1e293b]">
          {badgeText}
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-tight text-center leading-[1.2] flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
        <span className="text-[#0062E0]">{titleBlue}</span>
        {titleDark && <span className="text-[#171717]">{titleDark}</span>}
      </h1>

      {/* Subtitle if available */}
      {subtitle && (
        <p className="mt-4 text-[#666666] text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Filter pills or action buttons */}
      {children && <div className="mt-6 sm:mt-8 w-full flex justify-center">{children}</div>}
    </section>
  );
}
