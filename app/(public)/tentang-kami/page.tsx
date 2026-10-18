"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import IdeaSupportLogo from "@/components/IdeaSupportLogo";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EDF5FE] selection:bg-[#0062E0] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Tentang Kami" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Main White Card matching Figma Screenshot 2 */}
          <section
            aria-label="Tentang Idea.support"
            className="bg-white rounded-3xl border border-[#D0E3F8] shadow-sm p-8 sm:p-12 lg:p-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Kolom Kiri: Official Idea.support Large Icon */}
              <div className="md:col-span-5 flex items-center justify-center py-4">
                <div className="relative p-6 sm:p-8 rounded-2xl flex items-center justify-center">
                  <IdeaSupportLogo
                    variant="primary"
                    showText={false}
                    size="2xl"
                    standalone={true}
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Kolom Kanan: Title & Company Description */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-slate-900 leading-tight mb-5">
                  Tentang <span className="text-[#0062E0]">idea.support</span>
                </h1>

                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    <strong className="text-slate-800">Idea.support</strong> adalah tim profesional yang berfokus membantu bisnis, institusi, dan pelaku usaha membangun serta mengembangkan produk digital modern melalui layanan pembuatan website dan aplikasi mobile.
                  </p>
                  <p>
                    Kami meyakini bahwa teknologi digital yang efektif berawal dari pemahaman yang mendalam terhadap kebutuhan spesifik setiap bisnis. Mulai dari perancangan konsep, arsitektur teknis, desain antarmuka pengguna (UI/UX) yang ramah, hingga implementasi kode yang bersih dan teruji.
                  </p>
                  <p>
                    Dengan proses pengerjaan yang transparan dan terstruktur dari tahap brief hingga peluncuran, kami menghadirkan produk digital yang siap pakai, andal, dan mampu memberikan dampak nyata bagi operasional bisnis Anda.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Card Kedua: Section Lanjutan Sesuai Desain Figma */}
          <section
            aria-label="Prinsip & Nilai Kerja Sama"
            className="bg-white rounded-3xl border border-[#D0E3F8] shadow-sm p-8 sm:p-12"
          >
            <div className="max-w-3xl">
              <span className="text-xs font-semibold text-[#0062E0] bg-[#EDF5FE] px-3.5 py-1 rounded-full border border-[#D0E3F8] inline-flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0062E0]" />
                Komitmen Kami
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Prinsip Pengerjaan & Dedikasi Layanan
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                Setiap proyek yang kami tangani didukung oleh standar kerja yang disiplin untuk memastikan kepuasan klien dan kualitas produk terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl bg-[#EDF5FE]/60 border border-[#D0E3F8] p-6">
                <div className="w-10 h-10 rounded-xl bg-[#0062E0] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Proses Transparan
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Brief, alur kerja, jadwal rilis, serta estimasi biaya dibahas secara terbuka sejak awal tanpa komplikasi tersembunyi.
                </p>
              </div>

              <div className="rounded-2xl bg-[#EDF5FE]/60 border border-[#D0E3F8] p-6">
                <div className="w-10 h-10 rounded-xl bg-[#0062E0] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Standar Kode & UI Modern
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Mengutamakan clean code, performa responsif, dan prinsip desain terkini agar aplikasi mudah dikembangkan ke depan.
                </p>
              </div>

              <div className="rounded-2xl bg-[#EDF5FE]/60 border border-[#D0E3F8] p-6">
                <div className="w-10 h-10 rounded-xl bg-[#0062E0] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Dukungan Berkelanjutan
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Pendampingan teknis dan konsultasi setelah produk dirilis demi kelancaran operasional harian bisnis Anda.
                </p>
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
