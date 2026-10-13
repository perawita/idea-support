"use client";

import React, { useEffect } from "react";

export interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: "Website" | "Mobile";
  description: string;
  features?: string[];
  techStack?: string[];
  onConsult?: () => void;
}

export default function ConceptModal({
  isOpen,
  onClose,
  title,
  category,
  description,
  features = ["Tampilan Modern & Responsif", "Optimasi Performa Tinggi", "Struktur Navigasi Intuitif"],
  techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  onConsult,
}: ConceptModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D0E3F8] relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Tutup modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-[#0062E0] bg-[#EDF5FE] px-3.5 py-1 rounded-full border border-[#D0E3F8] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0062E0]" />
            {category}
          </span>
          <span className="text-xs text-slate-400 font-medium">Concept Preview</span>
        </div>

        <h3 id="concept-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Interactive Mockup Preview Display */}
        <div className="bg-[#EDF5FE] rounded-2xl p-6 border border-[#D0E3F8] mb-6 flex flex-col items-center justify-center min-h-[220px]">
          {category === "Website" ? (
            <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-[#D0E3F8] overflow-hidden">
              <div className="bg-[#F0F4F8] px-3 py-2 border-b border-slate-200 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="mx-auto bg-white rounded px-4 py-0.5 text-[10px] text-slate-400 font-mono">
                  https://idea.support/concept/{title.toLowerCase().replace(/\s+/g, "-")}
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="bg-[#0062E0] rounded-lg p-4 text-white text-center font-bold text-sm mb-3">
                  Ruang untuk ide baru
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#EDF5FE] rounded h-12 flex items-center justify-center text-[10px] text-[#0062E0] font-medium">Fitur 1</div>
                  <div className="bg-[#EDF5FE] rounded h-12 flex items-center justify-center text-[10px] text-[#0062E0] font-medium">Fitur 2</div>
                  <div className="bg-[#EDF5FE] rounded h-12 flex items-center justify-center text-[10px] text-[#0062E0] font-medium">Fitur 3</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-44 bg-[#1C2C42] rounded-[24px] p-2.5 shadow-lg border border-slate-700">
              <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mb-2" />
              <div className="bg-white rounded-[18px] p-3 text-center">
                <div className="bg-[#0062E0] rounded-lg p-2.5 text-white font-bold text-xs mb-3">
                  Mobile UI
                </div>
                <div className="space-y-1.5 mb-3">
                  <div className="bg-[#EDF5FE] rounded h-4 w-full" />
                  <div className="bg-[#EDF5FE] rounded h-4 w-3/4 mx-auto" />
                </div>
                <div className="bg-[#0062E0] text-white text-[10px] py-1.5 rounded-full font-semibold">
                  Akses Fitur
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
            Fitur Utama & Keunggulan
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <svg className="w-4 h-4 text-[#0062E0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              if (onConsult) onConsult();
            }}
            className="flex-1 bg-[#0062E0] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#004eb3] transition-colors shadow-sm text-center"
          >
            Konsultasikan Konsep Ini
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
