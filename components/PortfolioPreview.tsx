"use client";

import React from "react";

export type ProjectCategory =
  | "Semua Proyek"
  | "Landing Page"
  | "Company Profile"
  | "Web App / SaaS"
  | "Aplikasi Mobile"
  | "Sistem Booking"
  | "E-Commerce"
  | "Website"
  | "Mobile";

export interface PortfolioPreviewProps {
  category: ProjectCategory | string;
  title: string;
  image?: string;
}

export default function PortfolioPreview({
  category,
  title,
  image,
}: PortfolioPreviewProps) {
  // If an actual image path is provided
  if (image) {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-colors">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  // 1. Landing Page Mockup (High-converting browser page)
  if (category === "Landing Page") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Browser Top Bar */}
        <div className="bg-white rounded-t-xl border border-[#CBDFF5] px-3 py-2 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="w-32 sm:w-40 h-2.5 rounded-full bg-slate-100 mx-auto" />
          <span className="w-3 h-3 rounded-full bg-[#004CD3]/20" />
        </div>

        {/* Browser Page Body */}
        <div className="bg-white rounded-b-xl border-x border-b border-[#CBDFF5] p-3.5 flex-1 flex flex-col justify-between shadow-2xs">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-[#004CD3] to-[#0284C7] rounded-lg p-3 sm:p-3.5 text-white shadow-xs">
            <div className="w-20 h-1.5 rounded-full bg-white/40 mb-2" />
            <p className="text-xs sm:text-[13px] font-bold leading-tight">
              Tingkatkan Penjualan Bisnis Anda
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="bg-white text-[#004CD3] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                Mulai Sekarang
              </span>
              <div className="w-12 h-1 rounded-full bg-white/30" />
            </div>
          </div>

          {/* 3 Value Proposition Blocks */}
          <div className="grid grid-cols-3 gap-2 mt-2.5">
            <div className="bg-[#EDF5FE] rounded-md p-2 flex flex-col gap-1 border border-[#D0E3F8]/50">
              <div className="w-4 h-4 rounded-full bg-[#004CD3]/20" />
              <div className="w-full h-1.5 rounded-full bg-slate-200" />
            </div>
            <div className="bg-[#EDF5FE] rounded-md p-2 flex flex-col gap-1 border border-[#D0E3F8]/50">
              <div className="w-4 h-4 rounded-full bg-[#004CD3]/20" />
              <div className="w-full h-1.5 rounded-full bg-slate-200" />
            </div>
            <div className="bg-[#EDF5FE] rounded-md p-2 flex flex-col gap-1 border border-[#D0E3F8]/50">
              <div className="w-4 h-4 rounded-full bg-[#004CD3]/20" />
              <div className="w-full h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Company Profile Mockup
  if (category === "Company Profile" || category === "Website") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Browser Header Bar */}
        <div className="bg-white rounded-t-xl border border-[#CBDFF5] px-3 py-2 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-1.5 rounded-full bg-slate-200" />
            <div className="w-10 h-1.5 rounded-full bg-slate-200" />
            <div className="w-10 h-1.5 rounded-full bg-[#004CD3]" />
          </div>
        </div>

        {/* Corporate Body */}
        <div className="bg-white rounded-b-xl border-x border-b border-[#CBDFF5] p-3.5 flex-1 flex flex-col justify-between shadow-2xs">
          {/* Corporate Header Section */}
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#004CD3] tracking-wider">
                Profil Perusahaan
              </span>
              <p className="text-xs sm:text-[13px] font-bold text-slate-800 leading-tight">
                Membangun Solusi Terpercaya
              </p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#004CD3]/10 text-[#004CD3] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          {/* 2 Stat Cards */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-[#EDF5FE] rounded-lg p-2 border border-[#CBDFF5]/60">
              <span className="text-[11px] font-bold text-[#004CD3]">120+ Proyek</span>
              <div className="w-full h-1 rounded-full bg-slate-200 mt-1" />
            </div>
            <div className="bg-[#EDF5FE] rounded-lg p-2 border border-[#CBDFF5]/60">
              <span className="text-[11px] font-bold text-emerald-600">99.8% Uptime</span>
              <div className="w-full h-1 rounded-full bg-slate-200 mt-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Web App / SaaS Dashboard Mockup
  if (category === "Web App / SaaS") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Dashboard Shell with Sidebar + Main */}
        <div className="w-full h-full bg-white rounded-xl border border-[#CBDFF5] flex overflow-hidden shadow-2xs">
          {/* Mini Sidebar */}
          <div className="w-10 sm:w-12 bg-slate-900 flex flex-col items-center py-2.5 gap-2 shrink-0">
            <div className="w-5 h-5 rounded-md bg-[#004CD3] flex items-center justify-center text-white text-[9px] font-bold">
              ID
            </div>
            <div className="w-4 h-1 rounded-full bg-slate-700 mt-1" />
            <div className="w-4 h-1 rounded-full bg-[#004CD3]" />
            <div className="w-4 h-1 rounded-full bg-slate-700" />
            <div className="w-4 h-1 rounded-full bg-slate-700" />
          </div>

          {/* Main Dashboard Workspace */}
          <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between bg-slate-50/60">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
              <span className="text-[11px] font-bold text-slate-800">
                Analitik SaaS
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-700">
                +24.8% Live
              </span>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 gap-1.5 my-1.5">
              <div className="bg-white rounded-md p-1.5 border border-slate-200 shadow-2xs">
                <span className="text-[9px] text-slate-400 block">Pengguna</span>
                <span className="text-xs font-bold text-slate-900">12,450</span>
              </div>
              <div className="bg-white rounded-md p-1.5 border border-slate-200 shadow-2xs">
                <span className="text-[9px] text-slate-400 block">Konversi</span>
                <span className="text-xs font-bold text-[#004CD3]">89.2%</span>
              </div>
            </div>

            {/* Mini Bar Chart Mockup */}
            <div className="bg-white rounded-md p-2 border border-slate-200 flex items-end justify-between gap-1 h-12">
              <div className="w-3 bg-[#E2EEFC] rounded-t-sm h-4" />
              <div className="w-3 bg-[#CBDFF5] rounded-t-sm h-7" />
              <div className="w-3 bg-[#93C5FD] rounded-t-sm h-6" />
              <div className="w-3 bg-[#60A5FA] rounded-t-sm h-9" />
              <div className="w-3 bg-[#004CD3] rounded-t-sm h-11" />
              <div className="w-3 bg-[#003B86] rounded-t-sm h-8" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Aplikasi Mobile Mockup (Vertical smartphone frame)
  if (category === "Aplikasi Mobile" || category === "Mobile") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex items-center justify-center overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Smartphone Mockup Frame */}
        <div className="w-[125px] sm:w-[140px] bg-white rounded-2xl border-2 border-slate-800 p-2 shadow-md flex flex-col justify-between h-[92%] relative">
          {/* Dynamic Island / Speaker Notch */}
          <div className="w-8 h-1.5 rounded-full bg-slate-900 mx-auto mb-1.5" />

          {/* App Header */}
          <div className="bg-gradient-to-r from-[#004CD3] to-[#0284C7] rounded-lg p-2 text-white shadow-xs">
            <span className="text-[10px] font-bold block leading-tight">
              Aplikasi Pintar
            </span>
            <div className="w-12 h-1 rounded-full bg-white/40 mt-1" />
          </div>

          {/* App Grid Content */}
          <div className="grid grid-cols-2 gap-1.5 my-2">
            <div className="bg-[#EDF5FE] rounded-md h-7 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CD3]" />
            </div>
            <div className="bg-[#EDF5FE] rounded-md h-7 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
            </div>
          </div>

          {/* Bottom Nav Bar */}
          <div className="flex items-center justify-around pt-1 border-t border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#004CD3]" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* Floating Feature Pill on Right */}
        <div className="hidden sm:flex flex-col ml-4 space-y-1.5">
          <span className="text-[10px] font-bold text-[#004CD3] uppercase tracking-wider">
            iOS &amp; Android
          </span>
          <p className="text-xs font-semibold text-slate-800">
            Native Experience
          </p>
          <div className="w-20 h-1.5 rounded-full bg-slate-200" />
        </div>
      </div>
    );
  }

  // 5. Sistem Booking Mockup (Interactive Calendar & Time Slots)
  if (category === "Sistem Booking") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Calendar Card Shell */}
        <div className="w-full h-full bg-white rounded-xl border border-[#CBDFF5] p-3 flex flex-col justify-between shadow-2xs">
          {/* Header Month / Title */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Jadwal Reservasi
            </span>
            <span className="text-[9px] font-semibold text-[#004CD3] bg-[#EDF5FE] px-2 py-0.5 rounded-full">
              Otomatis
            </span>
          </div>

          {/* Time Slot Selector */}
          <div>
            <span className="text-[9px] text-slate-400 font-medium block mb-1.5">
              Pilih Slot Waktu Tersedia:
            </span>
            <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
              <span className="text-[10px] text-center py-1 rounded bg-slate-100 text-slate-600 font-medium">
                09:00
              </span>
              <span className="text-[10px] text-center py-1 rounded bg-[#004CD3] text-white font-bold shadow-2xs">
                11:00 ✓
              </span>
              <span className="text-[10px] text-center py-1 rounded bg-slate-100 text-slate-600 font-medium">
                14:00
              </span>
              <span className="text-[10px] text-center py-1 rounded bg-slate-100 text-slate-600 font-medium">
                16:00
              </span>
            </div>
          </div>

          {/* Booking Confirmation Action */}
          <div className="bg-[#EDF5FE] rounded-lg p-2 flex items-center justify-between border border-[#CBDFF5]/60 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-slate-700">Slot Terkonfirmasi</span>
            </div>
            <span className="text-[9px] font-bold text-white bg-[#004CD3] px-2 py-0.5 rounded-full">
              Sync Calendar
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 6. E-Commerce Mockup (Store Catalog & Cart)
  if (category === "E-Commerce") {
    return (
      <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative border border-[#CBDFF5]/60 group-hover:border-[#004CD3]/40 transition-all">
        {/* Store Shell */}
        <div className="w-full h-full bg-white rounded-xl border border-[#CBDFF5] p-3 flex flex-col justify-between shadow-2xs">
          {/* Store Navbar */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-900">
              Toko Online Store
            </span>
            <div className="flex items-center gap-1 bg-[#EDF5FE] text-[#004CD3] px-2 py-0.5 rounded-full text-[9px] font-bold">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Keranjang (2)
            </div>
          </div>

          {/* Product Items */}
          <div className="grid grid-cols-2 gap-2 my-1">
            <div className="bg-[#EDF5FE] rounded-lg p-2 border border-[#CBDFF5]/60 flex flex-col justify-between">
              <div className="w-full h-7 bg-white rounded flex items-center justify-center">
                <span className="text-[9px] text-[#004CD3] font-bold">Produk A</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-900">Rp 199k</span>
                <span className="text-[8px] bg-emerald-100 text-emerald-700 px-1 rounded font-bold">Ready</span>
              </div>
            </div>

            <div className="bg-[#EDF5FE] rounded-lg p-2 border border-[#CBDFF5]/60 flex flex-col justify-between">
              <div className="w-full h-7 bg-white rounded flex items-center justify-center">
                <span className="text-[9px] text-[#004CD3] font-bold">Produk B</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-900">Rp 249k</span>
                <span className="text-[8px] bg-emerald-100 text-emerald-700 px-1 rounded font-bold">Ready</span>
              </div>
            </div>
          </div>

          {/* Checkout Bar */}
          <div className="bg-[#004CD3] text-white rounded-lg p-1.5 text-center text-[10px] font-bold shadow-2xs">
            Checkout Instan &amp; Hitung Ongkir Otomatis
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Generic
  return (
    <div className="w-full aspect-[16/10] bg-[#EDF5FE] rounded-2xl p-4 sm:p-5 flex items-center justify-center border border-[#CBDFF5]/60">
      <div className="text-center">
        <span className="text-xs font-bold text-[#004CD3] uppercase tracking-wider block mb-1">
          {category}
        </span>
        <p className="text-slate-800 text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
}
