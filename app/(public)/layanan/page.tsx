"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/context";

export default function LayananPage() {
  const { language, dict } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("company-profile");
  const [pricingModel, setPricingModel] = useState<"project" | "retainer">("project");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedTab(serviceId);
    const targetElement = document.getElementById("paket-harga-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icons for 6 Service Categories
  const serviceIcons: Record<string, React.ReactNode> = {
    "landing-page": (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
    "company-profile": (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    ecommerce: (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    "sistem-booking": (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    saas: (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    custom: (
      <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  const serviceTabIcons: Record<string, React.ReactNode> = {
    "landing-page": (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
    "company-profile": (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    ecommerce: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    "sistem-booking": (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    saas: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    custom: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  const serviceTabKeys = ["landing-page", "company-profile", "ecommerce", "sistem-booking", "saas", "custom"];

  const activeCategoryPlans =
    dict.services.plans[selectedTab] ||
    dict.services.plans["company-profile"] ||
    dict.services.plans["landing-page"];

  const industryStandards = language === "en" ? [
    {
      title: "Zero Vendor Lock-In",
      desc: "Full Git repository access, design assets, and production credentials belong 100% to you.",
    },
    {
      title: "Scalable Architecture",
      desc: "Built on clean modern code ready to scale into web apps or enterprise platforms anytime.",
    },
    {
      title: "Exclusive Bespoke Design",
      desc: "No cookie-cutter templates or bloated page builders. Handcrafted to your exact brand guidelines.",
    },
    {
      title: "Direct Engineer Support",
      desc: "Direct communication with Lead Developers via dedicated WhatsApp group — never slow support bots.",
    },
  ] : [
    {
      title: "Zero Vendor Lock-In",
      desc: "Akses repositori Git penuh, file aset Figma, dan kredensial hosting sepenuhnya diserahkan kepada Anda.",
    },
    {
      title: "Arsitektur Scalable",
      desc: "Dibangun di atas fondasi kode bersih yang siap ditingkatkan kapan saja menjadi web app atau platform SaaS.",
    },
    {
      title: "Desain Eksklusif",
      desc: "Tanpa template pasaran atau tema WordPress lambat. Dirancang unik sesuai brand guide Anda.",
    },
    {
      title: "Dukungan Teknis Langsung",
      desc: "Komunikasi via grup WhatsApp langsung dengan Lead Developer, bukan perantara bot tiket support lambat.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Layanan" />

      {/* Main Content */}
      <main className="flex-1 pb-0">
        {/* SECTION INFORMASI LAYANAN (LIGHT CARDS) */}
        <section aria-label="Informasi Layanan" className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 pt-8 sm:pt-12 md:pt-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">[</span>
              <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                {dict.services.badge}
              </span>
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {dict.services.heroTitle}
            </h2>
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.services.heroSubtitle}
            </p>
          </div>

          {/* 6 Cards Grid (3 Kolom Desktop, 2 Kolom Tablet, 1 Kolom Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {dict.services.cards.map((service) => {
              const isSelected = selectedTab === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`group relative overflow-hidden bg-white rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-600/15 cursor-pointer ${
                    isSelected
                      ? "border-[#004CD3] shadow-lg ring-2 ring-[#004CD3]/25"
                      : "border-[#D0E3F8]/90 hover:border-[#004CD3]/70 shadow-xs"
                  }`}
                >
                  {/* Kilauan Cahaya Shimmer Menyapu saat Hover */}
                  <div className="card-shimmer" />

                  {/* Efek Garis Aksen Atas yang Melebar Halus */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                      isSelected
                        ? "bg-[#004CD3] opacity-100"
                        : "bg-[#004CD3] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  <div>
                    {/* Icon Box with Smooth Scale & Dynamic Elevation */}
                    <div className="w-12 h-12 rounded-2xl bg-[#EDF5FE] border border-[#CBDFF5]/60 flex items-center justify-center mb-5 group-hover:bg-[#004CD3] group-hover:border-[#004CD3] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md group-hover:shadow-blue-600/30 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-200">
                        {serviceIcons[service.id] || serviceIcons["landing-page"]}
                      </div>
                    </div>

                    {/* Title dengan Animasi Warna */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004CD3] transition-colors duration-200">
                        {service.name}
                      </h3>
                      {service.badge && (
                        <span className="text-[10px] font-bold text-[#004CD3] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full shrink-0">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <div className="border-t border-slate-100 pt-5 mb-5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {language === "en" ? "KEY FEATURES:" : "FITUR UTAMA:"}
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CD3] group-hover/item:scale-150 group-hover/item:bg-[#003B86] transition-transform duration-200 shrink-0" />
                            <span className="group-hover/item:text-slate-900 group-hover/item:translate-x-0.5 transition-all duration-150">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Action dengan Animated Pill Button Appearance */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#004CD3] group-hover:text-[#003B86]">
                    <span className="tracking-tight group-hover:font-bold transition-all">
                      {language === "en" ? "View Plans & Pricing" : "Lihat Paket & Estimasi Harga"}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#004CD3] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <span className="text-xs leading-none group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTAINER DARK THEME UNTUK DETAIL PRICING & FITUR (FULL WIDTH SCREEN DENGAN TEKSTUR GRID + DOTS) */}
        <div
          id="paket-harga-section"
          className="w-full mt-20 text-white py-16 sm:py-20 lg:py-24 border-y border-slate-800/80 relative"
          style={{
            backgroundColor: "#0d1527",
            backgroundImage: `
              radial-gradient(circle at 16px 16px, rgba(147, 197, 253, 0.065) 1.8px, transparent 0),
              linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px, 96px 96px, 96px 96px",
          }}
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 1. Category Bar Pills */}
            <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none">
              <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#121c33]/90 rounded-full border border-slate-700/60 shadow-inner">
                {serviceTabKeys.map((tabId) => {
                  const isActive = selectedTab === tabId;
                  const label = dict.services.tabLabels[tabId] || tabId;
                  return (
                    <button
                      key={tabId}
                      onClick={() => setSelectedTab(tabId)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0052cc] text-white shadow-lg shadow-blue-600/40 font-semibold"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-slate-400"}>
                        {serviceTabIcons[tabId]}
                      </span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Billing Toggle / Sub-tabs */}
            <div className="flex items-center justify-center gap-2 mt-6 mb-10">
              <div className="inline-flex items-center bg-[#121c33]/90 p-1.5 rounded-full border border-slate-700/60">
                <button
                  onClick={() => setPricingModel("project")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    pricingModel === "project"
                      ? "bg-[#0052cc] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {language === "en" ? "Project-Based" : "Project-Based"}
                </button>
                <button
                  onClick={() => setPricingModel("retainer")}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    pricingModel === "retainer"
                      ? "bg-[#0052cc] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{language === "en" ? "Monthly Retainer" : "Monthly Retainer"}</span>
                  <span className="bg-blue-900/80 text-blue-300 text-[10px] px-1.5 py-0.5 rounded font-bold">
                    {language === "en" ? "SAVE 20%" : "HEMAT 20%"}
                  </span>
                </button>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-300 bg-[#121c33]/90 px-3.5 py-1.5 rounded-full border border-slate-700/60">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {language === "en" ? "Quarterly Promo" : "Promo Kuartal Ini"}
              </span>
            </div>

            {/* 3. Three Pricing Cards (Dinamis Sesuai Kategori yang Dipilih) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              
              {/* CARD 1: STARTER / LITE */}
              {(() => {
                const plan = activeCategoryPlans.starter;
                return (
                  <div className="bg-[#111c38]/70 rounded-[28px] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#60A5FA] tracking-wider uppercase mb-1.5">
                        {activeCategoryPlans.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-slate-300 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-slate-700/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-slate-400 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-slate-200" : "text-slate-400"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-800">
                      <Link
                        href="/kontak"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <span>→</span>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{plan.footerServer}</span>
                        <span className="text-blue-400 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* CARD 2: GROWTH / PRO (HIGHLIGHTED / POPULAR) */}
              {(() => {
                const plan = activeCategoryPlans.growth;
                return (
                  <div className="bg-[#0f214d] rounded-[28px] border-2 border-[#0062E0] p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-900/50 scale-[1.02] transform transition-all duration-300 hover:scale-[1.03]">
                    {/* Badge Rekomendasi (Paling Populer) */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-md shadow-amber-500/30 border border-amber-200/80">
                        <svg className="w-3 h-3 text-slate-950 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span>
                          {language === "en" ? "MOST POPULAR & RECOMMENDED" : "PALING POPULER & DIREKOMENDASIKAN"}
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#93C5FD] tracking-wider uppercase mb-1.5 mt-2 sm:mt-0">
                        {activeCategoryPlans.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-blue-200 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-blue-200/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-blue-900/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-blue-300/40 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-blue-50" : "text-blue-300/40"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-blue-900/60">
                      <Link
                        href="/kontak"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0062E0] hover:bg-[#004EB3] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/40 transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-blue-300">
                        <span>{plan.footerServer}</span>
                        <span className="text-amber-300 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* CARD 3: SCALE / ELITE */}
              {(() => {
                const plan = activeCategoryPlans.scale;
                return (
                  <div className="bg-[#111c38]/70 rounded-[28px] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#60A5FA] tracking-wider uppercase mb-1.5">
                        {activeCategoryPlans.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-slate-300 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-slate-700/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-slate-400 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-slate-200" : "text-slate-400"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-800">
                      <Link
                        href="/kontak"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{plan.footerServer}</span>
                        <span className="text-blue-400 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* 4. Section: Semua Paket Sudah Termasuk Standar Industri */}
            <div className="mt-20 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">
                {language === "en"
                  ? "TRUSTED BY 120+ STARTUPS, BRANDS & AGENCIES"
                  : "DIPERCAYA 120+ STARTUP, BRAND FMCG, DAN AGENSI DIGITAL"}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
                {language === "en"
                  ? "All Packages Include idea.support Industry Standards"
                  : "Semua Paket Sudah Termasuk Standar Industri idea.support"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                {/* Feature 1 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{industryStandards[0].title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{industryStandards[0].desc}</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{industryStandards[1].title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{industryStandards[1].desc}</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0l13-13a2.828 2.828 0 00-4-4L3 17" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{industryStandards[2].title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{industryStandards[2].desc}</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{industryStandards[3].title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{industryStandards[3].desc}</p>
                </div>
              </div>
            </div>

            {/* 5. Pertanyaan Umum (FAQ) */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-[#38BDF8] font-bold text-sm leading-none">[</span>
                  <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase">
                    {dict.services.faq.badge}
                  </span>
                  <span className="text-[#38BDF8] font-bold text-sm leading-none">]</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {dict.services.faq.title}
                </h3>
                {dict.services.faq.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
                    {dict.services.faq.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {dict.services.faq.items.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-medium text-xs sm:text-sm text-slate-200 hover:text-white cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 ml-4">
                        {openFaq === idx ? "▲" : "▼"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Banner Bawah: Butuh Spesifikasi Khusus di Luar Paket Ini? */}
            <div className="mt-16 bg-gradient-to-r from-blue-950 via-[#004CD3]/30 to-blue-950 border border-blue-600/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  {language === "en" ? "CUSTOM & ENTERPRISE" : "KUSTOM & SKALA BESAR"}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {dict.services.ctaBanner.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {dict.services.ctaBanner.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold rounded-full shadow transition-all"
                >
                  <svg className="w-4 h-4 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{dict.services.ctaBanner.btnConsult}</span>
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center px-5 py-2.5 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-full transition-all"
                >
                  {dict.services.ctaBanner.btnPortfolio}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
