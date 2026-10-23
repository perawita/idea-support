"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { PertaminaLogo, AquamanPoolsLogo, SuperEpicLogo } from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export default function KlienKamiPage() {
  const logos = [
    { id: "pertamina-1", component: <PertaminaLogo /> },
    { id: "aquaman-1", component: <AquamanPoolsLogo /> },
    { id: "super-epic-1", component: <SuperEpicLogo /> },
    { id: "aquaman-2", component: <AquamanPoolsLogo /> },
    { id: "pertamina-2", component: <PertaminaLogo /> },
    { id: "aquaman-3", component: <AquamanPoolsLogo /> },
    { id: "super-epic-2", component: <SuperEpicLogo /> },
    { id: "aquaman-4", component: <AquamanPoolsLogo /> },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#0062E0] selection:text-white">
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

        {/* White Horizontal Client Logos Area with Infinite Moving Animation */}
        <section
          aria-label="Daftar Logo Klien"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"
        >
          <div className="relative w-full bg-white rounded-2xl sm:rounded-3xl border border-[#D0E3F8] shadow-sm py-7 sm:py-10 px-4 sm:px-6 overflow-hidden">
            {/* Subtle gradient edge masks for smooth fade in/out */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
            />

            {/* Marquee Track Container (Moves right to left like homepage) */}
            <div
              className="client-logo-marquee-container relative w-full overflow-hidden py-2.5 sm:py-3"
              style={{ "--client-logo-speed": "28s" } as React.CSSProperties}
            >
              <div className="client-logo-marquee flex items-center opacity-90 transition-opacity hover:opacity-100">
                {/* Track 1: Original Track */}
                <div className="flex items-center shrink-0 justify-around gap-10 sm:gap-14 md:gap-16 lg:gap-20 pr-10 sm:pr-14 md:pr-16 lg:pr-20">
                  {logos.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center shrink-0 px-2 transition-transform duration-200 hover:scale-105"
                    >
                      {item.component}
                    </div>
                  ))}
                </div>

                {/* Track 2: Duplicate Track for seamless infinite loop */}
                <div
                  aria-hidden="true"
                  className="flex items-center shrink-0 justify-around gap-10 sm:gap-14 md:gap-16 lg:gap-20 pr-10 sm:pr-14 md:pr-16 lg:pr-20"
                >
                  {logos.map((item) => (
                    <div
                      key={`dup-${item.id}`}
                      className="flex items-center justify-center shrink-0 px-2 transition-transform duration-200 hover:scale-105"
                    >
                      {item.component}
                    </div>
                  ))}
                </div>
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
