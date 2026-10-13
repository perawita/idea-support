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
  const isWebsite = service.category === "Website";

  return (
    <div className="bg-white rounded-[16px] border border-[#D0E3F8] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#0062E0]/40 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 font-medium">
            {service.categoryLabel}
          </span>
          <span className="bg-[#EDF5FE] text-[#0062E0] text-xs font-semibold px-3 py-1 rounded-full border border-[#D0E3F8] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0062E0]" />
            {service.category}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#EDF5FE] border border-[#D0E3F8] text-[#0062E0] flex items-center justify-center shrink-0 group-hover:bg-[#0062E0] group-hover:text-white transition-colors duration-200">
            {isWebsite ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg sm:text-[19px] leading-tight group-hover:text-[#0062E0] transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mt-2">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Button */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
        <span className="text-xs text-slate-500 font-medium">
          {service.extraInfo}
        </span>
        <button
          type="button"
          onClick={() => onContact(service)}
          className="border border-[#0062E0] text-[#0062E0] bg-transparent hover:bg-[#0062E0] hover:text-white rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E0] cursor-pointer"
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
