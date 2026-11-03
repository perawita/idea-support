"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const websiteOptions = [
  "Company Profile Perusahaan",
  "Toko Online / E-Commerce",
  "Sistem Informasi",
  "Aplikasi Web Custom",
  "Landing Page",
  "Lainnya / Ide Unik",
];

const budgetOptions = [
  "Di bawah Rp1.000.000",
  "Rp1.000.000 – Rp3.000.000",
  "Rp3.000.000 – Rp5.000.000",
  "Rp5.000.000 – Rp10.000.000",
  "Rp10.000.000 – Rp20.000.000",
  "Di atas Rp20.000.000",
  "Belum menentukan anggaran / Butuh konsultasi",
];

const WA_NUMBER = "6285770037803";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [websiteNeed, setWebsiteNeed] = useState("");
  const [budget, setBudget] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const pesan =
      `Halo IDEA.support, saya ingin konsultasi pembuatan website.\n\n` +
      `Nama: ${name || "-"}\n` +
      `No. WhatsApp: ${whatsapp || "-"}\n` +
      `Kebutuhan: ${websiteNeed || "-"}\n` +
      `Anggaran: ${budget || "-"}\n\n` +
      `Mohon informasi lebih lanjut mengenai layanan dan estimasi biaya. Terima kasih.`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors";

  const selectClass =
    "w-full px-4 py-3 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors appearance-none cursor-pointer";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent selection:bg-[#004CD3] selection:text-white">
      <Navbar activePage="Kontak" />

      <main className="flex-1 pb-16 sm:pb-24 pt-8 sm:pt-10 px-4 sm:px-6 min-[1340px]:px-0">
        <div className="max-w-[1298px] mx-auto">

          {/* Two-column layout */}
          <section
            id="kontak-section"
            aria-label="Kontak dan Konsultasi"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start"
          >
            {/* ── LEFT COLUMN ── */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold text-lg leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs tracking-[0.2em] uppercase">Hubungi Kami</span>
                <span className="text-[#38BDF8] font-bold text-lg leading-none">]</span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Siap bikin website bisnis yang lebih{" "}
                  <span className="text-[#004CD3]">profesional?</span>
                </h1>
                <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
                  Ceritakan kebutuhan Anda. Kami bantu arahkan solusi yang paling sesuai.
                </p>
              </div>

              {/* Contact Cards — 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#D0E3F8] p-4 hover:border-[#004CD3]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">WhatsApp</div>
                    <div className="text-xs text-slate-500 mt-0.5">+62 857-7003-7803</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/idea.support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#D0E3F8] p-4 hover:border-[#004CD3]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth={1.8}>
                      <defs>
                        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Instagram</div>
                    <div className="text-xs text-slate-500 mt-0.5">@idea.support</div>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@idea.support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#D0E3F8] p-4 hover:border-[#004CD3]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">TikTok</div>
                    <div className="text-xs text-slate-500 mt-0.5">@idea.support</div>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://idea-support.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#D0E3F8] p-4 hover:border-[#004CD3]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Website</div>
                    <div className="text-xs text-slate-500 mt-0.5">idea-support.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Konsultasi Form ── */}
            <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                Konsultasi Gratis
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Isi data singkat — langsung lanjut chat WhatsApp dengan tim kami, dibalas orang, bukan bot.
              </p>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                {/* 1. Nama */}
                <div>
                  <label htmlFor="konsul-name" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Nama
                  </label>
                  <input
                    id="konsul-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className={inputClass}
                  />
                </div>

                {/* 2. No. WhatsApp */}
                <div>
                  <label htmlFor="konsul-wa" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    No. WhatsApp
                  </label>
                  <input
                    id="konsul-wa"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className={inputClass}
                  />
                </div>

                {/* 3. Kebutuhan website */}
                <div>
                  <label htmlFor="konsul-need" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Kebutuhan website untuk
                  </label>
                  <div className="relative">
                    <select
                      id="konsul-need"
                      required
                      value={websiteNeed}
                      onChange={(e) => setWebsiteNeed(e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih jenis website</option>
                      {websiteOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 4. Rentang anggaran */}
                <div>
                  <label htmlFor="konsul-budget" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Berapa anggaran yang Anda siapkan?
                  </label>
                  <div className="relative">
                    <select
                      id="konsul-budget"
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih rentang anggaran Anda</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#004CD3] hover:bg-[#003B86] active:bg-[#003080] text-white font-semibold py-3.5 rounded-xl transition-all duration-150 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] mt-2"
                >
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp Sekarang
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-1">
                  Tanpa biaya dan tanpa komitmen — tanya-tanya dulu juga tidak masalah.
                </p>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
