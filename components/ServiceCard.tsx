"use client";

import React from "react";

export interface ServiceItem {
  id: string;
  category: "Website" | "Mobile";
  categoryLabel: string;
  title: string;
  description: string;
  extraInfo: string;
}

export interface ServiceCardProps {
  service: ServiceItem;
  onContact: (service: ServiceItem) => void;
}

export default function ServiceCard({ service, onContact }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#D0E3F8] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#004CD3]/40 transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Top Header Row: Globe Icon on Left & Category Badge on Right */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#EDF5FE] text-[#004CD3] flex items-center justify-center shrink-0">
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
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 text-lg sm:text-[20px] leading-tight mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Bottom Row: Metadata & Button */}
      <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
        <span className="text-xs text-slate-400 font-medium">
          {service.extraInfo}
        </span>
        <button
          type="button"
          onClick={() => onContact(service)}
          className="border border-[#004CD3] text-[#004CD3] bg-white hover:bg-[#004CD3] hover:text-white rounded-full px-6 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] cursor-pointer"
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
