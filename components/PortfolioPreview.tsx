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
      <div className="w-full bg-[#EDF5FE] rounded-t-[16px] border border-b-0 border-[#D0E3F8] p-5 sm:p-6 flex items-center justify-center min-h-[200px] overflow-hidden relative group-hover:bg-[#E5EFFC] transition-colors">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-[0_4px_20px_rgba(0,98,224,0.08)] border border-[#D0E3F8] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-200">
          {/* Browser Navigation Bar */}
          <div className="bg-[#F0F4F8] px-3 py-2 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-slate-400 font-mono tracking-tight border border-slate-200/60 max-w-[170px] truncate">
              idea.support/preview
            </div>
            <div className="w-6" />
          </div>

          {/* Browser Content Body */}
          <div className="p-3.5 bg-white">
            {/* Blue Banner with exact Figma text "Ruang untuk ide baru" */}
            <div className="bg-[#0062E0] rounded-lg p-3 text-white shadow-xs mb-2.5">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-tight block">
                Ruang untuk ide baru
              </span>
              <span className="text-[9px] text-white/80 block mt-0.5">
                Solusi platform digital modern
              </span>
            </div>

            {/* Wireframe Mockup Blocks */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#EDF5FE] border border-[#D0E3F8]/60 rounded-md p-1.5 h-10 flex flex-col justify-center">
                <div className="w-6 h-1.5 bg-[#0062E0]/40 rounded-full mb-1" />
                <div className="w-10 h-1 bg-slate-300 rounded-full" />
              </div>
              <div className="bg-[#EDF5FE] border border-[#D0E3F8]/60 rounded-md p-1.5 h-10 flex flex-col justify-center">
                <div className="w-6 h-1.5 bg-[#0062E0]/40 rounded-full mb-1" />
                <div className="w-10 h-1 bg-slate-300 rounded-full" />
              </div>
              <div className="bg-[#EDF5FE] border border-[#D0E3F8]/60 rounded-md p-1.5 h-10 flex flex-col justify-center">
                <div className="w-6 h-1.5 bg-[#0062E0]/40 rounded-full mb-1" />
                <div className="w-10 h-1 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile App Mockup
  return (
    <div className="w-full bg-[#EDF5FE] rounded-t-[16px] border border-b-0 border-[#D0E3F8] p-5 sm:p-6 flex items-center justify-center min-h-[200px] overflow-hidden relative group-hover:bg-[#E5EFFC] transition-colors">
      <div className="w-36 sm:w-40 bg-[#1C2C42] rounded-[22px] p-2 shadow-[0_4px_20px_rgba(0,98,224,0.12)] border border-slate-700 transform group-hover:scale-[1.02] transition-transform duration-200">
        {/* Smartphone Speaker Notch */}
        <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mb-1.5" />

        {/* Smartphone Screen */}
        <div className="bg-white rounded-[16px] p-2.5 overflow-hidden flex flex-col justify-between h-40 sm:h-44">
          <div>
            {/* Header with Title */}
            <div className="bg-[#0062E0] rounded-md px-2 py-1.5 text-white shadow-xs mb-2 flex items-center justify-between">
              <span className="text-[9px] font-bold truncate max-w-[85px]">
                {title.replace("Konsep ", "")}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Content Wireframe Blocks */}
            <div className="space-y-1.5">
              <div className="bg-[#EDF5FE] border border-[#D0E3F8]/60 rounded p-1.5 flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#0062E0]/30 shrink-0" />
                <div className="space-y-0.5 flex-1">
                  <div className="w-12 h-1 bg-slate-400 rounded-full" />
                  <div className="w-8 h-1 bg-slate-200 rounded-full" />
                </div>
              </div>
              <div className="bg-[#EDF5FE] border border-[#D0E3F8]/60 rounded p-1.5 flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#0062E0]/30 shrink-0" />
                <div className="space-y-0.5 flex-1">
                  <div className="w-14 h-1 bg-slate-400 rounded-full" />
                  <div className="w-6 h-1 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Pill */}
          <div className="bg-[#0062E0] text-white text-[9px] font-semibold py-1 px-2 rounded-full text-center mt-2 shadow-xs">
            Buka Aplikasi
          </div>
        </div>
      </div>
    </div>
  );
}
