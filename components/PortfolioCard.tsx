"use client";

import React from "react";
import PortfolioPreview, { ProjectCategory } from "./PortfolioPreview";

export interface PortfolioItem {
  id: string;
  category: ProjectCategory | string;
  categoryLabel?: string;
  title: string;
  description: string;
  extraInfo?: string;
  features?: string[];
  techStack?: string[];
  image?: string;
}

export interface PortfolioCardProps {
  item: PortfolioItem;
  onViewConcept: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, onViewConcept }: PortfolioCardProps) {
  // Hanya tampilkan card proyek yang sudah memiliki gambar atau foto thumbnail
  if (!item.image || !item.image.trim()) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl border border-[#D0E3F8] p-5 sm:p-6 shadow-xs hover:border-[#004CD3]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
      {/* Top Part: Mockup Preview Container */}
      <div>
        <PortfolioPreview
          category={item.category}
          title={item.title}
          image={item.image}
        />

        {/* Content Section */}
        <div className="mt-5">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className="bg-[#EDF5FE] text-[#004CD3] text-xs font-semibold px-3 py-1 rounded-full border border-[#CBDFF5] inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004CD3]" />
              {item.category}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {item.extraInfo || "Custom Solution"}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-lg sm:text-[19px] leading-snug group-hover:text-[#004CD3] transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed mt-2.5 mb-4 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <svg className="w-4 h-4 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Siap Pakai</span>
        </div>

        <button
          type="button"
          onClick={() => onViewConcept(item)}
          className="inline-flex items-center gap-1.5 border border-[#004CD3] text-[#004CD3] bg-white group-hover:bg-[#004CD3] group-hover:text-white rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] cursor-pointer shadow-2xs"
        >
          <span>Lihat Detail</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
