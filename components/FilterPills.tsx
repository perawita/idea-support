"use client";

import React from "react";

export type FilterCategory = "More" | "Website" | "Mobile";

export interface FilterPillsProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  categories?: FilterCategory[];
}

export default function FilterPills({
  activeCategory,
  onSelectCategory,
  categories = ["More", "Website", "Mobile"],
}: FilterPillsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter Kategori"
      className="inline-flex items-center gap-4 sm:gap-6 p-1 max-w-full overflow-x-auto"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <div key={cat} className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 font-medium mb-1 tracking-tight">
              {cat} · STATIC
            </span>
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`min-w-[105px] sm:min-w-[120px] px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] ${
                isActive
                  ? "bg-[#004CD3] text-white shadow-xs hover:bg-[#003B86]"
                  : "bg-white text-[#004CD3] border border-[#004CD3] hover:bg-[#D0E3F8]/30"
              }`}
            >
              {cat}
            </button>
          </div>
        );
      })}
    </div>
  );
}
