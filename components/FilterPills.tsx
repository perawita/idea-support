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
      className="inline-flex items-center gap-2 sm:gap-3 p-1 rounded-full max-w-full overflow-x-auto"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E0] ${
              isActive
                ? "bg-[#0062E0] text-white shadow-sm hover:bg-[#004eb3]"
                : "bg-white text-[#0062E0] border border-[#0062E0]/25 hover:bg-[#D0E3F8]/30"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
