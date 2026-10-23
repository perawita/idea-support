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
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`min-w-[110px] px-7 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] ${
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
