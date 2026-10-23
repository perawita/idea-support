"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectOption {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const projectOptions: ProjectOption[] = [
  {
    id: "company-profile",
    title: "Company Profile",
    desc: "Branding profesional & portofolio institusi",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    title: "Toko Online / E-Commerce",
    desc: "Katalog, transaksi, & integrasi kurir",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: "sistem-informasi",
    title: "Sistem Informasi",
    desc: "Manajemen data, inventori & operasional",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: "aplikasi-web",
    title: "Aplikasi Web",
    desc: "SaaS, portal interaktif, & dashboard custom",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "landing-page",
    title: "Landing Page",
    desc: "1 eksklusif konversi iklan & pemasaran produk",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "lainnya",
    title: "Lainnya / Ide Unik",
    desc: "Eksplorasi modul kustom & integrasi API",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function KontakPage() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("landing-page");
  const [budget, setBudget] = useState<string>("");
  const [features, setFeatures] = useState<string>("");
  const [referenceUrl, setReferenceUrl] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("1 Bulan (Standar)");

  // Form Fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [agreeProposal, setAgreeProposal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Accordion toggles for FAQ
  const [faq1Open, setFaq1Open] = useState<boolean>(false);
  const [faq2Open, setFaq2Open] = useState<boolean>(true);

  const currentOption = projectOptions.find((p) => p.id === selectedProjectType) || projectOptions[4];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("project-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Kontak" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24 pt-8 sm:pt-10 px-4 sm:px-6 min-[1340px]:px-0">
        <div className="max-w-[1298px] mx-auto space-y-8">
          {/* Hero Banner Card */}
          <section
            aria-label="Hero Kontak"
            className="bg-white rounded-3xl sm:rounded-[36px] border border-[#D0E3F8] p-8 sm:p-12 text-center shadow-xs"
          >
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#004CD3] tracking-tight mb-3">
              Wujudkan Ide Digitalmu Hari Ini
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Ceritakan kebutuhan Anda. Mari mulai dari brief yang jelas.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="bg-[#004CD3] hover:bg-[#003B86] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-150 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]"
            >
              Hubungi Kami
            </button>
          </section>

          {/* Two Columns Grid */}
          <section
            id="project-form-section"
            aria-label="Formulir Brief dan Kontak"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
          >
            {/* Left Column: Hubungi Kami & Multi-Step Configurator */}
            <div className="lg:col-span-6 space-y-6">
              {/* Card 1: Hubungi Kami Overview */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
                {/* Illustration Container */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 shrink-0 relative flex items-center justify-center bg-[#EDF5FE] rounded-2xl border border-[#CBDFF5]">
                  <svg
                    className="w-16 h-16 text-[#004CD3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 9a5 5 0 00-10 0v2a2 2 0 002 2h6a2 2 0 002-2V9z"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#004CD3] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-[26px] font-bold text-slate-900 leading-tight">
                    Hubungi <span className="text-[#004CD3]">Kami</span>
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-2.5">
                    Hubungi kami untuk konsultasi gratis. Kami siap membantu kebutuhan website, branding, dan digital marketing bisnis anda dengan solusi terbaik.
                  </p>
                </div>
              </div>

              {/* Card 2: Interactive Configurator */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-8 shadow-xs space-y-7">
                {/* Step 1 */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#004CD3] text-white text-xs font-bold inline-flex items-center justify-center">
                        1
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Tentukan Jenis Proyek
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400">Pilih salah satu</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectOptions.map((opt) => {
                      const isSelected = selectedProjectType === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedProjectType(opt.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all duration-150 relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3] ${
                            isSelected
                              ? "border-[#004CD3] bg-[#F4F8FE] shadow-xs ring-1 ring-[#004CD3]"
                              : "border-[#D0E3F8] bg-white hover:bg-slate-50"
                          }`}
                        >
                          {/* Checkmark badge when selected */}
                          {isSelected && (
                            <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#004CD3] text-white flex items-center justify-center">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}

                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                              isSelected ? "bg-[#004CD3] text-white" : "bg-[#EDF5FE] text-[#004CD3]"
                            }`}
                          >
                            {opt.icon}
                          </div>
                          <div className="font-bold text-slate-900 text-xs sm:text-[13px] leading-tight pr-5">
                            {opt.title}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">
                            {opt.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#004CD3] text-white text-xs font-bold inline-flex items-center justify-center">
                      2
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">
                      Berapa anggaran yang Anda siapkan?
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mb-3.5">
                    Semua nominal adalah referensi anggaran fleksibel Anda, bukan harga paket tetap.
                  </p>

                  <div>
                    <label
                      htmlFor="budget-input"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Perkiraan Anggaran (Rp)
                    </label>
                    <input
                      id="budget-input"
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Rp Contoh: 5.000.000"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                    />
                    <p className="text-[11px] text-slate-400 mt-1.5">
                      Tuliskan perkiraan anggaran atau rentang yang Anda siapkan.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#004CD3] text-white text-xs font-bold inline-flex items-center justify-center">
                      3
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">
                      Detail Tambahan (Opsional)
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label
                        htmlFor="features-input"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Fitur utama yang dibutuhkan
                      </label>
                      <input
                        id="features-input"
                        type="text"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        placeholder="Contoh: Pembayaran Midtrans, Blog, WhatsApp button, Multi-bahasa"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label
                          htmlFor="reference-input"
                          className="block text-xs font-semibold text-slate-800 mb-1.5"
                        >
                          Referensi website yang disukai
                        </label>
                        <input
                          id="reference-input"
                          type="text"
                          value={referenceUrl}
                          onChange={(e) => setReferenceUrl(e.target.value)}
                          placeholder="https://contoh-website.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="timeline-select"
                          className="block text-xs font-semibold text-slate-800 mb-1.5"
                        >
                          Target waktu pengerjaan
                        </label>
                        <select
                          id="timeline-select"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                        >
                          <option value="1 Bulan (Standar)">1 Bulan (Standar)</option>
                          <option value="< 1 Bulan (Cepat)">&lt; 1 Bulan (Prioritas Cepat)</option>
                          <option value="2 - 3 Bulan">2 - 3 Bulan (Komprehensif)</option>
                          <option value="Fleksibel">Fleksibel / Sesuai Pembahasan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Informasi Kontak & Ceritakan Ide Anda Form */}
            <div className="lg:col-span-6 space-y-6">
              {/* Card 1: Informasi Kontak */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-8 shadow-xs">
                <h2 className="text-2xl sm:text-[26px] font-bold text-[#004CD3] leading-tight mb-6">
                  <span>Informasi </span>
                  <span className="text-slate-900">Kontak</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <a
                    href="tel:+62840653638"
                    className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#EDF5FE] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#004CD3] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#004CD3] transition-colors">
                      (+62) 840-653-638
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:ideasupport@gmail.com"
                    className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#EDF5FE] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#004CD3] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#004CD3] transition-colors truncate">
                      ideasupport@gmail.com
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/idea.support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#EDF5FE] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#004CD3] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#004CD3] transition-colors">
                      idea.support
                    </span>
                  </a>

                  {/* Website */}
                  <a
                    href="https://idea-support.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#EDF5FE] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#004CD3] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#004CD3] transition-colors">
                      .com
                    </span>
                  </a>
                </div>
              </div>

              {/* Card 2: Form Ceritakan Ide Anda */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-8 shadow-xs space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Ceritakan Ide Anda
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Berikan gambaran awal proyek Anda agar kami bisa memberikan rekomendasi yang tepat.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-[#EDF5FE] border border-[#CBDFF5] rounded-2xl p-4 space-y-1.5">
                  <div className="text-[11px] font-bold tracking-wider text-[#004CD3] uppercase">
                    RINGKASAN PILIHAN ANDA
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-[13px]">
                    <span className="text-slate-500">Tipe Proyek:</span>
                    <span className="font-semibold text-slate-900">
                      {currentOption.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-[13px]">
                    <span className="text-slate-500">Perkiraan Anggaran:</span>
                    <span className="font-semibold text-[#004CD3]">
                      {budget.trim() ? budget : "Sesuai input anggaran Anda"}
                    </span>
                  </div>
                </div>

                {/* Contact Input Fields */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-semibold text-slate-800 mb-1"
                    >
                      Nama
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Nama yang dapat kami sapa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs font-semibold text-slate-800 mb-1"
                      >
                        Email Kerja Sama
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@contoh.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                      />
                      <p className="text-[11px] text-slate-400 mt-1">
                        Gunakan email yang aktif.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="client-whatsapp"
                        className="block text-xs font-semibold text-slate-800 mb-1"
                      >
                        Nomor WhatsApp
                      </label>
                      <input
                        id="client-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="08123456789"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                      />
                      <p className="text-[11px] text-slate-400 mt-1">
                        Nomor aktif untuk kemudahan diskusi.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="client-org"
                      className="block text-xs font-semibold text-slate-800 mb-1"
                    >
                      Nama Bisnis atau Organisasi (Opsional)
                    </label>
                    <input
                      id="client-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Contoh: Kopi Nusantara / PT Maju Digital"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-message"
                      className="block text-xs font-semibold text-slate-800 mb-1"
                    >
                      Pesan / kebutuhan proyek
                    </label>
                    <textarea
                      id="client-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ceritakan kebutuhan web atau mobile..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0E3F8] bg-white text-slate-900 text-sm focus:outline-none focus:border-[#004CD3] focus:ring-1 focus:ring-[#004CD3] transition-colors"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Tuliskan tujuan dan kebutuhan utama.
                    </p>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreeProposal}
                        onChange={(e) => setAgreeProposal(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-[#004CD3] focus:ring-[#004CD3]"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        Saya ingin mendapatkan proposal estimasi rincian teknis via WhatsApp &amp; Email.
                      </span>
                    </label>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-1">
                    Bagikan gambaran awal untuk memulai diskusi. Hindari data sensitif pada pesan Anda.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#004CD3] hover:bg-[#003B86] text-white font-semibold py-3.5 rounded-xl transition-all duration-150 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]"
                  >
                    {submitted ? "Pesan Terkirim! Terima Kasih" : "Kirim Pesan"}
                  </button>

                  {/* Guarantee Note */}
                  <div className="flex items-center gap-2 pt-2 text-[11.5px] text-slate-500">
                    <svg
                      className="w-4 h-4 text-emerald-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>
                      Tidak ada harga paket yang mengikat. Penawaran akan disesuaikan dengan kebutuhan dan ruang lingkup proyek Anda.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Bottom FAQ Section */}
          <section aria-label="FAQ Mulai Proyek" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* FAQ Item 1 */}
            <div
              onClick={() => setFaq1Open(!faq1Open)}
              className="bg-white rounded-2xl border border-[#D0E3F8] p-5 sm:p-6 cursor-pointer hover:border-[#004CD3]/40 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Apa yang perlu disiapkan untuk memulai?
                </h4>
                <span className="text-[#004CD3] font-bold text-xl ml-3">
                  {faq1Open ? "−" : "+"}
                </span>
              </div>
              {faq1Open && (
                <p className="text-slate-600 text-xs sm:text-sm mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                  Siapkan gambaran bisnis atau sekolah, tujuan produk, serta kebutuhan web atau aplikasi mobile. Gunakan formulir kontak untuk membagikan brief awal.
                </p>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div
              onClick={() => setFaq2Open(!faq2Open)}
              className="bg-[#F4F8FE] rounded-2xl border border-[#CBDFF5] p-5 sm:p-6 cursor-pointer hover:border-[#004CD3]/40 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Apa yang perlu disiapkan untuk memulai?
                </h4>
                <span className="text-[#004CD3] font-bold text-xl ml-3">
                  {faq2Open ? "−" : "+"}
                </span>
              </div>
              {faq2Open && (
                <p className="text-slate-600 text-xs sm:text-sm mt-3 pt-3 border-t border-[#CBDFF5]/60 leading-relaxed">
                  Siapkan gambaran bisnis atau sekolah, tujuan produk, serta kebutuhan web atau aplikasi mobile. Gunakan formulir kontak untuk membagikan brief awal.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
