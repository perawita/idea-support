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
    <div className="flex flex-col rounded-[16px] shadow-xs hover:shadow-md transition-all duration-200 group">
      {/* Top Part: Mockup Preview */}
      <PortfolioPreview category={item.category} title={item.title} />

      {/* Bottom Part: Information Card */}
      <div className="bg-white rounded-b-[16px] border border-[#D0E3F8] border-t-0 p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Header Row: Label & Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-500 font-medium">
              {item.categoryLabel}
            </span>
            <span className="bg-[#EDF5FE] text-[#0062E0] text-xs font-semibold px-3 py-1 rounded-full border border-[#D0E3F8] inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062E0]" />
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-lg sm:text-[19px] leading-tight group-hover:text-[#0062E0] transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mt-2">
            {item.description}
          </p>
        </div>

        {/* Bottom Row: Metadata & Button */}
        <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-medium">
            {item.extraInfo}
          </span>
          <button
            type="button"
            onClick={() => onViewConcept(item)}
            className="border border-[#0062E0] text-[#0062E0] bg-transparent hover:bg-[#0062E0] hover:text-white rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E0] cursor-pointer"
          >
            Lihat konsep
          </button>
        </div>
      </div>
    </div>
  );
}
