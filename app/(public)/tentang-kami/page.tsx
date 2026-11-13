"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import { useLanguage } from "@/lib/i18n/context";

// Data 5 Anggota Tim Inti
const teamMembers = [
  {
    name: "Agus",
    roleDefault: "BackEnd Developer",
    initials: "AG",
    accentGradient: "from-[#009EDB] via-[#0074CD] to-[#004CD3]",
  },
  {
    name: "Gibran",
    roleDefault: "BackEnd Developer",
    initials: "GB",
    accentGradient: "from-[#04132B] via-[#0A254E] to-[#004CD3]",
  },
  {
    name: "Ryan",
    roleDefault: "UI/UX Designer",
    initials: "RY",
    image: "/assets/ryan.png",
    accentGradient: "from-[#009EDB] via-[#0074CD] to-[#004CD3]",
  },
  {
    name: "Erdit",
    roleDefault: "FrontEnd Developer",
    initials: "ED",
    image: "/assets/erdit.png",
    accentGradient: "from-[#04132B] via-[#0A254E] to-[#004CD3]",
  },
  {
    name: "Agil",
    roleDefault: "FrontEnd Developer",
    initials: "AL",
    image: "/assets/agil.png",
    accentGradient: "from-[#009EDB] via-[#0074CD] to-[#004CD3]",
  },
];

// Icons for 4 Work Principles
const principleIcons = [
  <svg key="1" className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="2" className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" strokeLinecap="round" />
  </svg>,
  <svg key="3" className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="4" className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

const workflowStepPositions: ("top" | "bottom")[] = ["top", "bottom", "top", "bottom", "top", "bottom"];

export default function TentangKamiPage() {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Tentang Kami" />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 sm:pb-24 pt-6 sm:pt-10">
        <div className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 space-y-16 sm:space-y-24">
          
          {/* ══════════════════════════════════════════════════════════
              SECTION 1: HERO TENTANG KAMI
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Hero Tentang Kami" className="text-center max-w-4xl mx-auto pt-4 sm:pt-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">[</span>
              <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                {dict.about.badge}
              </span>
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">]</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.18]">
              {dict.about.heroTitle1}{" "}
              <span className="text-[#004CD3]">{dict.about.heroTitle2}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed">
              {dict.about.heroSubtitle}
            </p>

            {/* Team Avatar Pill Badge */}
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-white px-4 sm:px-5 py-2.5 rounded-full border border-[#D0E3F8] shadow-xs hover:border-[#004CD3]/40 hover:shadow-md transition-all">
              <div className="flex -space-x-2 overflow-hidden">
                {teamMembers.map((member, idx) => (
                  member.image ? (
                    <img
                      key={idx}
                      src={member.image}
                      alt={member.name}
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover object-top shadow-2xs grayscale contrast-105"
                    />
                  ) : (
                    <div
                      key={idx}
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-[#EDF5FE] border border-[#CBDFF5] overflow-hidden flex items-center justify-center font-bold text-[10px] sm:text-xs text-[#004CD3] shadow-2xs"
                    >
                      {member.initials}
                    </div>
                  )
                ))}
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">{dict.about.teamPillTitle}</span>
                <span className="text-slate-300 mx-1.5 font-normal">·</span>
                <span className="text-slate-500">{dict.about.teamPillSub}</span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: CERITA KAMI (2 KOLOM: CERITA & 3 CARD STATISTIK)
          ══════════════════════════════════════════════════════════ */}
          <section
            aria-label="Cerita Kami"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Kolom Kiri: Cerita Perusahaan (~7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold text-base leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs tracking-[0.2em] uppercase">
                  {dict.about.storyBadge}
                </span>
                <span className="text-[#38BDF8] font-bold text-base leading-none">]</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {dict.about.storyTitle}
              </h2>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                <p>{dict.about.storyP1}</p>
                <p>{dict.about.storyP2}</p>
                <p>{dict.about.storyP3}</p>
              </div>
            </div>

            {/* Kolom Kanan: 3 Statistik Card Vertikal (~5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Tahun Berdiri */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-7 shadow-xs hover:border-[#004CD3]/60 hover:shadow-md transition-all group">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight group-hover:text-[#004CD3] transition-colors">
                  {dict.about.stats.yearFounded}
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  {dict.about.stats.yearFoundedLabel}
                </div>
              </div>

              {/* Card 2: Website Dikerjakan */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-7 shadow-xs hover:border-[#004CD3]/60 hover:shadow-md transition-all group">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span className="group-hover:text-[#004CD3] transition-colors">
                    {dict.about.stats.websitesDone.replace("+", "")}
                  </span>
                  <span className="text-[#004CD3] font-bold text-3xl sm:text-4xl">+</span>
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  {dict.about.stats.websitesDoneLabel}
                </div>
              </div>

              {/* Card 3: Garansi Revisi */}
              <div className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-7 shadow-xs hover:border-[#004CD3]/60 hover:shadow-md transition-all group">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span className="group-hover:text-[#004CD3] transition-colors">
                    {dict.about.stats.guarantee.replace("%", "")}
                  </span>
                  <span className="text-[#38BDF8] font-bold text-3xl sm:text-4xl">%</span>
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  {dict.about.stats.guaranteeLabel}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: CLIENT / PARTNER (FULL WIDTH SEPERTI DI BERANDA)
        ══════════════════════════════════════════════════════════ */}
        <div className="w-full my-12 sm:my-16 overflow-hidden">
          <ClientLogos />
        </div>

        <div className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 space-y-16 sm:space-y-24">
          {/* ══════════════════════════════════════════════════════════
              SECTION 4: TIM KAMI (5 ANGGOTA TIM DALAM SATU BARIS)
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Tim Kami">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[#38BDF8] font-bold text-lg leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {dict.about.teamBadge}
                </span>
                <span className="text-[#38BDF8] font-bold text-lg leading-none">]</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {dict.about.teamTitle}
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                {dict.about.teamSubtitle}
              </p>
            </div>

            {/* 5 Column Grid pada Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {teamMembers.map((member, idx) => {
                const localizedRole = dict.about.teamRoles[member.name] || member.roleDefault;
                return (
                  <div
                    key={idx}
                    className="group flex flex-col items-center text-center transition-all duration-300"
                  >
                    {/* Arched Capsule Container - Stadium Pill rounded-full */}
                    <div className={`w-full aspect-[1/2.2] max-h-[420px] rounded-full bg-gradient-to-b ${member.accentGradient} flex flex-col justify-between items-center shadow-md shadow-blue-900/15 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-600/25 transition-all duration-300 relative overflow-hidden`}>
                      
                      {/* Top Text inside Capsule (Name & Role) */}
                      <div className="pt-6 sm:pt-7 text-center z-20 w-full px-3">
                        <h4 className="font-bold text-white text-base sm:text-lg tracking-tight leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-white/90 leading-snug mt-1 font-normal line-clamp-2">
                          {localizedRole}
                        </p>
                      </div>

                      {/* Portrait Photo or Stylized Silhouette */}
                      <div className="absolute inset-x-0 bottom-0 top-[22%] z-10 flex items-end justify-center overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top drop-shadow-2xl grayscale contrast-105 group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-end pb-8 sm:pb-10">
                            <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-t-full bg-white/10 backdrop-blur-xs border border-white/20 flex flex-col items-center justify-end overflow-hidden shadow-inner">
                              <svg
                                className="w-16 h-16 sm:w-20 sm:h-20 text-white/90 drop-shadow-sm -mb-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Subtle Gradient Glow effect */}
                      <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none z-15" />
                    </div>

                    {/* Bottom Text (Outside Capsule) */}
                    <div className="mt-3.5 text-center">
                      <h3 className="font-bold text-slate-900 text-base sm:text-[17px] group-hover:text-[#004CD3] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#004CD3] font-semibold mt-0.5">
                        {localizedRole}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 5: PRINSIP KERJA KAMI (4 CARD)
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Prinsip Kerja Kami">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[#38BDF8] font-bold text-lg leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {dict.about.principlesBadge}
                </span>
                <span className="text-[#38BDF8] font-bold text-lg leading-none">]</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {dict.about.principlesTitle}
              </h2>
              {dict.about.principlesSubtitle && (
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {dict.about.principlesSubtitle}
                </p>
              )}
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dict.about.principles.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#D0E3F8] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 hover:border-[#004CD3]/60 transition-all duration-300 group"
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-[#EDF5FE] border border-[#CBDFF5] flex items-center justify-center mb-5 group-hover:bg-[#004CD3] group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {principleIcons[idx] || principleIcons[0]}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl group-hover:text-[#004CD3] transition-colors mb-2.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 6: PROSES KERJA (HORIZONTAL 6 TAHAPAN TIMELINE)
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Alur Proses Kerja">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[#38BDF8] font-bold text-lg leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {dict.about.processBadge}
                </span>
                <span className="text-[#38BDF8] font-bold text-lg leading-none">]</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {dict.about.processTitle}
              </h2>
            </div>

            {/* Desktop View: Horizontal Timeline dengan Posisi Teks Selang-Seling (Atas / Bawah) */}
            <div className="hidden md:block relative py-12">
              {/* Horizontal Connecting Center Line */}
              <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-[#CBDFF5]" aria-hidden="true" />

              <div className="grid grid-cols-6 gap-3 lg:gap-4 relative z-10">
                {dict.about.processSteps.map((item, idx) => {
                  const isTop = workflowStepPositions[idx] === "top";
                  return (
                    <div key={idx} className="flex flex-col items-center justify-center min-h-[340px]">
                      {/* Top Content Slot */}
                      <div className="h-[140px] flex flex-col justify-end text-center px-1">
                        {isTop && (
                          <div className="space-y-1.5 animate-fadeIn">
                            <h4 className="font-bold text-slate-900 text-sm lg:text-[15px] leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] lg:text-xs text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                            {/* Tiny vertical tick down */}
                            <div className="w-0.5 h-3 bg-[#004CD3] mx-auto mt-1" />
                          </div>
                        )}
                      </div>

                      {/* Middle Circle Node */}
                      <div className="my-2 shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#004CD3] text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-blue-600/30 ring-4 ring-white hover:scale-110 transition-transform duration-200 cursor-default">
                          {item.step}
                        </div>
                      </div>

                      {/* Bottom Content Slot */}
                      <div className="h-[140px] flex flex-col justify-start text-center px-1">
                        {!isTop && (
                          <div className="space-y-1.5 animate-fadeIn">
                            {/* Tiny vertical tick up */}
                            <div className="w-0.5 h-3 bg-[#004CD3] mx-auto mb-1" />
                            <h4 className="font-bold text-slate-900 text-sm lg:text-[15px] leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] lg:text-xs text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet View: Vertical Timeline */}
            <div className="md:hidden relative pl-6 space-y-8 before:absolute before:top-3 before:bottom-3 before:left-3.5 before:w-0.5 before:bg-[#CBDFF5]">
              {dict.about.processSteps.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4">
                  {/* Step Circle */}
                  <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-[#004CD3] text-white font-bold text-xs flex items-center justify-center shadow-md ring-4 ring-white shrink-0">
                    {item.step}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl border border-[#D0E3F8] p-5 shadow-xs flex-1">
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 7: CTA KONSULTASI (IDENTITAS DESAIN IDEA.SUPPORT)
          ══════════════════════════════════════════════════════════ */}
          <section
            aria-label="Ajakan Konsultasi"
            className="bg-white rounded-3xl sm:rounded-[36px] border border-[#D0E3F8] p-8 sm:p-12 lg:p-16 text-center shadow-xs relative overflow-hidden"
          >
            {/* Ambient Background Accent */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-sky-400/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[#38BDF8] font-bold text-lg leading-none">[</span>
                <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {dict.about.badge}
                </span>
                <span className="text-[#38BDF8] font-bold text-lg leading-none">]</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {dict.about.ctaTitle}
              </h2>

              <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                {dict.about.ctaSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-[#004CD3] hover:bg-[#003B86] text-white text-sm sm:text-base font-semibold rounded-full shadow-md shadow-blue-500/20 transition-all duration-150"
                >
                  {dict.about.ctaBtn}
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-semibold rounded-full shadow-md shadow-slate-200 border border-slate-200 transition-all duration-150"
                >
                  {dict.services.ctaBanner.btnPortfolio}
                </Link>
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
