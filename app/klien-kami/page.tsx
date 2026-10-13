"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { PertaminaLogo, AquamanPoolsLogo, SuperEpicLogo } from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export default function KlienKamiPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EDF5FE] selection:bg-[#0062E0] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Klien Kami" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* Page Header */}
        <PageHeader
          badgeText="Klien idea.support"
          titleBlue="Lebih dari 10 ++ Bisnis Percaya Kami"
          titleDark="idea.support"
          subtitle="Kami bangga telah dipercaya oleh berbagai bisnis dan institusi dalam merancang serta mengembangkan produk digital berkualitas."
        />

        {/* White Horizontal Client Logos Area matching Screenshot 2 */}
        <section
          aria-label="Daftar Logo Klien"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"
        >
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-[#D0E3F8] shadow-sm py-8 sm:py-11 px-6 sm:px-10 overflow-x-auto scrollbar-none">
            {/* Desktop: Single balanced horizontal row / Mobile: Smooth horizontal scroll */}
            <div className="flex items-center justify-center sm:justify-between min-w-[650px] lg:min-w-0 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <PertaminaLogo className="h-6 sm:h-7 md:h-8" />
              </div>
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <AquamanPoolsLogo className="h-6 sm:h-7 md:h-8" />
              </div>
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <SuperEpicLogo className="h-8 sm:h-9 md:h-10" />
              </div>
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <AquamanPoolsLogo className="h-6 sm:h-7 md:h-8" />
              </div>
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <SuperEpicLogo className="h-8 sm:h-9 md:h-10" />
              </div>
              <div className="flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200">
                <AquamanPoolsLogo className="h-6 sm:h-7 md:h-8" />
              </div>
            </div>
          </div>

          {/* Client Trust Pillars Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
            <div className="bg-white rounded-2xl border border-[#D0E3F8] p-6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#EDF5FE] text-[#0062E0] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">
                Kemitraan Jangka Panjang
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                Kami mendampingi proses mulai dari fase inisiasi hingga pasca peluncuran dengan pemeliharaan teratur.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#D0E3F8] p-6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#EDF5FE] text-[#0062E0] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">
                Solusi Cepat & Terukur
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                Arsitektur kode dan desain yang fleksibel, siap beradaptasi dengan skala bisnis yang berkembang.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#D0E3F8] p-6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#EDF5FE] text-[#0062E0] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">
                Komunikasi Transparan
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                Update berkala dan laporan progres mingguan memastikan target selalu tercapai sesuai kesepakatan.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
