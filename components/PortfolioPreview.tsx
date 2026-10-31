import React from "react";

export interface PortfolioPreviewProps {
  category: "Website" | "Mobile";
  title: string;
}

export default function PortfolioPreview({
  category,
}: PortfolioPreviewProps) {
  if (category === "Website") {
    return (
      <div className="w-full bg-[#EDF5FE] rounded-2xl p-5 sm:p-7 flex items-center justify-between gap-4 sm:gap-6 min-h-[210px] overflow-hidden">
        {/* Browser Mockup on Left */}
        <div className="w-[230px] sm:w-[260px] bg-white rounded-xl border border-[#CBDFF5] p-3 sm:p-3.5 shrink-0 shadow-xs">
          {/* Top Mockup Header Bar */}
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <span className="w-2 h-2 rounded-full bg-[#004CD3]" />
            <span className="w-7 h-1 rounded-full bg-slate-200" />
          </div>

          {/* Blue Hero Box with Underline */}
          <div className="bg-[#004CD3] rounded-lg p-3 text-white mb-3 shadow-xs">
            <span className="text-xs sm:text-[13px] font-bold tracking-tight border-b-2 border-white pb-0.5 inline-block">
              Ruang untuk ide baru
            </span>
          </div>

          {/* 3 Wireframe Mockup Blocks */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#E2EEFC] rounded-md h-8" />
            <div className="bg-[#E2EEFC] rounded-md h-8" />
            <div className="bg-[#E2EEFC] rounded-md h-8" />
          </div>
        </div>

        {/* Right Label Text */}
        <div className="flex-1 text-left pl-1 sm:pl-2">
          <p className="text-[#004CD3] text-xs font-bold tracking-wider uppercase mb-1">
            ILUSTRATIF
          </p>
          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
            Eksplorasi tampilan, bukan proyek klien.
          </p>
        </div>
      </div>
    );
  }

  // Mobile App Mockup (Vertical smartphone frame)
  return (
    <div className="w-full bg-[#EDF5FE] rounded-2xl p-5 sm:p-7 flex items-center justify-between gap-4 sm:gap-6 min-h-[210px] overflow-hidden">
      {/* Smartphone Frame on Left */}
      <div className="w-[125px] sm:w-[145px] bg-white rounded-2xl sm:rounded-[24px] border border-[#CBDFF5] p-2.5 sm:p-3 shrink-0 shadow-xs flex flex-col">
        {/* Top Notch Bar */}
        <div className="w-6 h-1 rounded-full bg-slate-200 mx-auto mb-2.5" />

        {/* Blue Header Box with Underline */}
        <div className="bg-[#004CD3] rounded-lg p-2.5 text-white mb-2.5 shadow-xs">
          <span className="text-[11px] sm:text-xs font-bold tracking-tight border-b-2 border-white pb-0.5 inline-block leading-tight">
            Belajar lebih mudah
          </span>
        </div>

        {/* 3 Wireframe Mockup Blocks side-by-side */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-[#E2EEFC] rounded-md h-8" />
          <div className="bg-[#E2EEFC] rounded-md h-8" />
          <div className="bg-[#E2EEFC] rounded-md h-8" />
        </div>
      </div>

      {/* Right Label Text */}
      <div className="flex-1 text-left pl-1 sm:pl-2">
        <p className="text-[#004CD3] text-xs font-bold tracking-wider uppercase mb-1">
          ILUSTRATIF
        </p>
        <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
          Eksplorasi tampilan, bukan proyek klien.
        </p>
      </div>
    </div>
  );
}
