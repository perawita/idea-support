"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Tentang Kami" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24 pt-8 sm:pt-10 px-4 sm:px-6 min-[1340px]:px-0">
        <div className="max-w-[1298px] mx-auto space-y-10 sm:space-y-12">
          {/* Main Hero Card: Tentang idea.support */}
          <section
            aria-label="Tentang Idea.support"
            className="bg-white rounded-3xl sm:rounded-[36px] border border-[#D0E3F8] shadow-xs p-8 sm:p-12 lg:p-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Kolom Kiri: Official Idea.support Brand Monogram */}
              <div className="md:col-span-4 lg:col-span-3 flex items-center justify-center">
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
                  <img
                    src="/idea-support-icon.png"
                    alt="Logo idea.support"
                    className="w-full h-full object-contain drop-shadow-xs transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Kolom Kanan: Title & Company Description */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center text-left">
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-slate-900 leading-tight mb-4 flex items-center flex-wrap gap-2">
                  <span>Tentang</span>
                  <span className="text-[#004CD3] inline-flex items-center gap-1.5">
                    idea.support
                    <span className="inline-grid grid-cols-2 gap-0.5 ml-0.5" aria-hidden="true">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#004CD3]" />
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#004CD3]" />
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#004CD3]" />
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#004CD3]" />
                    </span>
                  </span>
                </h1>

                <div className="text-slate-700 text-sm sm:text-[15px] leading-relaxed space-y-3 font-normal">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset&apos;s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Service */}
          <section aria-label="Layanan Service">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Solusi Cepat & Cerdas */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#004CD3] text-white flex items-center justify-center mb-6 shadow-sm">
                    {/* Lightbulb Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v1m0 0v1m0-1h1m-1 0h-1m2-15a6 6 0 00-6 6c0 2.22 1.2 4.16 3 5.2V16a1 1 0 001 1h4a1 1 0 001-1v-1.8c1.8-1.04 3-2.98 3-5.2a6 6 0 00-6-6z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2.5">
                    Solusi Cepat & Cerdas
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Solusi cepat & cerdas, tersedia di hari yang sama*
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-400">
                    *disesuaikan dengan layanan
                  </span>
                </div>
              </div>

              {/* Card 2: Harga Terjangkau */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#004CD3] text-white flex items-center justify-center mb-6 shadow-sm">
                    {/* Chat Bubble with Sparkle Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2.5">
                    Harga Terjangkau
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Konsultasi bebas biaya dengan harga layanan yang terjangkau untuk berbagai skala usaha
                  </p>
                </div>
              </div>

              {/* Card 3: Lengkap dan Praktis */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#004CD3] text-white flex items-center justify-center mb-6 shadow-sm">
                    {/* Thumbs Up Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2.5">
                    Lengkap dan Praktis
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Solusi branding No Repot No Rempong mulai dari website hingga digital marketing
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Cara Kerja */}
          <section aria-label="Cara Kerja Idea.support">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Cara Kerja
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Konsultasi */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D0E3F8] p-6 flex items-center gap-4 sm:gap-5 shadow-xs hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EDF5FE] border border-[#CBDFF5] flex items-center justify-center shrink-0 p-3 shadow-inner">
                  <svg
                    className="w-8 h-8 text-[#004CD3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <rect x="7" y="2" width="10" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="11" y1="14" x2="13" y2="14" strokeLinecap="round" />
                    <path d="M5 16l3 2 3-1 2 5 3-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">
                    Konsultasi
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Klien konsultasi dengan tim NDA &amp; membayar DP.
                  </p>
                </div>
              </div>

              {/* Card 2: Desain No Repot */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D0E3F8] p-6 flex items-center gap-4 sm:gap-5 shadow-xs hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EDF5FE] border border-[#CBDFF5] flex items-center justify-center shrink-0 p-3 shadow-inner">
                  <svg
                    className="w-8 h-8 text-[#004CD3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <rect x="4" y="6" width="16" height="12" rx="3" strokeLinecap="round" />
                    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                    <path d="M12 2v4M2 12h2M20 12h2" strokeLinecap="round" />
                    <path d="M9 15c1 .6 2 .6 3 0" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">
                    Desain No Repot
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Tim NDA membuat desain sesuai kebutuhan klien.
                  </p>
                </div>
              </div>

              {/* Card 3: Desain Siap Guna */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D0E3F8] p-6 flex items-center gap-4 sm:gap-5 shadow-xs hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EDF5FE] border border-[#CBDFF5] flex items-center justify-center shrink-0 p-3 shadow-inner">
                  <svg
                    className="w-8 h-8 text-[#004CD3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="14" cy="8" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">
                    Desain Siap Guna
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Klien melunasi pembayaran &amp; desain siap digunakan.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
