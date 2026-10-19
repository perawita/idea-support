"use client";

import React, { useEffect } from "react";

export interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  type,
  message,
  onClose,
  duration = 3500,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const isSuccess = type === "success";
  const isError = type === "error";

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-200 animate-in slide-in-from-top-4 fade-in max-w-md bg-white border-slate-200/80">
      <div
        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
          isSuccess
            ? "bg-emerald-100 text-emerald-600"
            : isError
            ? "bg-rose-100 text-rose-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {isSuccess && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {isError && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        {!isSuccess && !isError && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>

      <div className="flex-1 pr-2">
        <div
          className={`text-xs font-bold ${
            isSuccess
              ? "text-emerald-800"
              : isError
              ? "text-rose-800"
              : "text-blue-800"
          }`}
        >
          {isSuccess ? "Berhasil!" : isError ? "Terjadi Kesalahan!" : "Pemberitahuan"}
        </div>
        <div className="text-xs text-slate-600 leading-snug mt-0.5">
          {message}
        </div>
      </div>

      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-xs"
        aria-label="Tutup notifikasi"
      >
        ✕
      </button>
    </div>
  );
}
