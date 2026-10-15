import React from "react";

export interface PortfolioPreviewProps {
  category: "Website" | "Mobile";
  title: string;
}

export default function PortfolioPreview({
  category,
  title,
}: PortfolioPreviewProps) {
  if (category === "Website") {
    return (
      <div className="w-full bg-[#EDF5FE] rounded-t-[16px] border border-b-0 border-[#D0E3F8] p-5 sm:p-7 flex items-center justify-between gap-4 min-h-[200px] overflow-hidden">
        {/* Mockup Frame on Left */}
        <div className="w-full max-w-[240px] sm:max-w-[270px] bg-white rounded-xl shadow-[0_2px_12px_rgba(0,98,224,0.06)] border border-[#D0E3F8] overflow-hidden p-3 shrink-0">
          {/* Top Mockup Header Bar */}
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <span className="w-2 h-2 rounded-full bg-[#004CD3]" />
            <span className="w-5 h-1 rounded-full bg-slate-300" />
          </div>

          {/* Blue Hero Box with Underline */}
          <div className="bg-[#004CD3] rounded-lg p-3 text-white shadow-xs mb-3">
            <span className="text-[13px] font-bold tracking-tight block border-b-2 border-white pb-1 inline-block">
              Ruang untuk ide baru
            </span>
          </div>

          {/* 3 Wireframe Mockup Blocks */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#E8EFF8] rounded-md h-8" />
            <div className="bg-[#E8EFF8] rounded-md h-8" />
            <div className="bg-[#E8EFF8] rounded-md h-8" />
          </div>
        </div>

        {/* Right Label Text from Figma */}
        <div className="flex-1 text-left pl-2">
          <p className="text-[#004CD3] text-xs font-bold tracking-wider uppercase mb-1">
            ILUSTRATIF
          </p>
          <p className="text-slate-500 text-[13px] leading-relaxed">
            Eksplorasi tampilan, bukan proyek klien.
          </p>
        </div>
      </div>
    );
  }

  // Mobile App Mockup
  return (
    <div className="w-full bg-[#EDF5FE] rounded-t-[16px] border border-b-0 border-[#D0E3F8] p-5 sm:p-7 flex items-center justify-between gap-4 min-h-[200px] overflow-hidden">
      {/* Smartphone Frame on Left */}
      <div className="w-full max-w-[240px] bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,98,224,0.06)] border border-[#D0E3F8] overflow-hidden p-3 shrink-0">
        {/* Top Notch Bar */}
        <div className="flex items-center justify-between mb-2 px-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#004CD3]" />
          <span className="w-4 h-0.5 rounded-full bg-slate-300" />
        </div>

        {/* Blue Header Box with Underline */}
        <div className="bg-[#004CD3] rounded-lg p-3 text-white shadow-xs mb-3">
          <span className="text-[13px] font-bold tracking-tight block border-b-2 border-white pb-1 inline-block">
            Belajar lebih mudah
          </span>
        </div>

        {/* 3 Wireframe Mockup Blocks */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#E8EFF8] rounded-md h-8" />
          <div className="bg-[#E8EFF8] rounded-md h-8" />
          <div className="bg-[#E8EFF8] rounded-md h-8" />
        </div>
      </div>

      {/* Right Label Text from Figma */}
      <div className="flex-1 text-left pl-2">
        <p className="text-[#004CD3] text-xs font-bold tracking-wider uppercase mb-1">
          ILUSTRATIF
        </p>
        <p className="text-slate-500 text-[13px] leading-relaxed">
          Eksplorasi tampilan, bukan proyek klien.
        </p>
      </div>
    </div>
  );
}
