"use client";

import React from "react";
import PortfolioPreview from "./PortfolioPreview";

export interface PortfolioItem {
  id: string;
  category: "Website" | "Mobile";
  categoryLabel: string;
  title: string;
  description: string;
  extraInfo: string;
  features?: string[];
  techStack?: string[];
}

export interface PortfolioCardProps {
  item: PortfolioItem;
  onViewConcept: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, onViewConcept }: PortfolioCardProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Part: Mockup Preview in separate rounded light-blue box */}
      <PortfolioPreview category={item.category} title={item.title} />

      {/* Bottom Part: Information Card in separate rounded white card with border */}
      <div className="bg-white rounded-2xl border border-[#D0E3F8] p-5 sm:p-6 mt-4 flex flex-col justify-between flex-1 shadow-xs">
        <div>
          {/* Header Row: Globe Icon & Category Badge */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#EDF5FE] text-[#004CD3] flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
              </svg>
            </div>

            <span className="bg-[#EDF5FE] text-[#004CD3] text-xs font-semibold px-3 py-1 rounded-full border border-[#CBDFF5] inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004CD3]" />
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-[17px] sm:text-lg leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-[13px] leading-relaxed mt-2 mb-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Row: Metadata & Button */}
        <div className="flex items-center justify-between pt-3 mt-auto">
          <span className="text-[12px] text-slate-400 font-medium">
            {item.extraInfo}
          </span>
          <button
            type="button"
            onClick={() => onViewConcept(item)}
            className="border border-[#004CD3] text-[#004CD3] bg-white hover:bg-[#004CD3] hover:text-white rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] cursor-pointer"
          >
            Lihat konsep
          </button>
        </div>
      </div>
    </div>
  );
}
