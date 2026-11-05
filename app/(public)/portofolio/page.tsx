"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import PortfolioCard, { PortfolioItem } from "@/components/PortfolioCard";
import ConceptModal from "@/components/ConceptModal";
import ContactModal from "@/components/ContactModal";

export type ProjectCategory =
  | "Semua Proyek"
  | "Landing Page"
  | "Company Profile"
  | "Web App / SaaS"
  | "Aplikasi Mobile"
  | "Sistem Booking"
  | "E-Commerce";

interface CategoryNavOption {
  id: ProjectCategory;
  label: string;
  icon: React.ReactNode;
}

const portfolioCategories: CategoryNavOption[] = [
  {
    id: "Semua Proyek",
    label: "Semua Proyek",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "Landing Page",
    label: "Landing Page",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4h18M7 3v4" />
      </svg>
    ),
  },
  {
    id: "Company Profile",
    label: "Company Profile",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "Web App / SaaS",
    label: "Web App / SaaS",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    id: "Aplikasi Mobile",
    label: "Aplikasi Mobile",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "Sistem Booking",
    label: "Sistem Booking",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "E-Commerce",
    label: "E-Commerce",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

const portfolioData: PortfolioItem[] = [
  {
    id: "porto-lp-1",
    category: "Landing Page",
    categoryLabel: "Landing Page",
    title: "Konsep High-Converting Landing Page",
    description:
      "Landing page modern dengan copywriting persuasif, hierarki visual terarah, dan CTA interaktif siap pakai untuk promosi Google & Meta Ads.",
    extraInfo: "Landing Page",
    features: [
      "Struktur formula AIDA untuk konversi tinggi",
      "Integrasi langsung ke WhatsApp & Form Lead",
      "Skor Google PageSpeed 95+ Mobile & Desktop",
      "A/B testing ready & tracking event analytics",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "porto-compro-1",
    category: "Company Profile",
    categoryLabel: "Company Profile",
    title: "Konsep Website Company Profile Bisnis",
    description:
      "Website profil perusahaan profesional dengan tata letak elegan, profil kepemimpinan, katalog layanan terstruktur, dan optimasi kredibilitas B2B.",
    extraInfo: "Company Profile",
    features: [
      "Hero interaktif dengan pesan brand yang kuat",
      "Katalog layanan terstruktur dan elegan",
      "Form konsultasi cepat dan terintegrasi",
      "Optimasi SEO Google & kecepatan muat halaman",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "porto-desa-karombo",
    category: "Web App / SaaS",
    categoryLabel: "Web App / SaaS",
    title: "Website Desa Karombo — Sistem Layanan Surat",
    description:
      "Platform digital pelayanan administrasi surat dan portal Desa Karombo. Memudahkan warga mengajukan permohonan surat keterangan secara online dengan dashboard verifikasi admin otomatis.",
    extraInfo: "Web App / Portal",
    image: "/assets/portfolio/desa-karombo.jpg",
    features: [
      "Pengajuan surat keterangan online cepat & praktis untuk warga",
      "Dashboard admin desa untuk verifikasi dan arsip dokumen terpusat",
      "Format surat resmi otomatis siap cetak dengan penomoran rapi",
      "Pelacakan status permohonan surat warga secara transparan",
    ],
    techStack: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
  },
  {
    id: "porto-saas-1",
    category: "Web App / SaaS",
    categoryLabel: "Web App / SaaS",
    title: "Konsep Web App & Dashboard SaaS",
    description:
      "Aplikasi web kustom berbasis cloud dengan dashboard interaktif, analitik real-time, manajemen tim terpusat, dan otentikasi pengguna aman.",
    extraInfo: "Web App / SaaS",
    features: [
      "Dashboard metrik bisnis dan grafik real-time",
      "Manajemen hak akses role-based (RBAC)",
      "Laporan ekspor data otomatis (PDF & Excel)",
      "Arsitektur cloud skalabel & API-ready",
    ],
    techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "porto-mob-raevel",
    category: "Aplikasi Mobile",
    categoryLabel: "Aplikasi Mobile",
    title: "Raevel — Aplikasi Mobile Booking Hotel & Travel",
    description:
      "Aplikasi pemesanan hotel dan akomodasi liburan modern dengan sistem loyalitas poin (Raevel Points & Priority Tier), filter villa rekomendasi, serta alur reservasi interaktif.",
    extraInfo: "Aplikasi Mobile",
    image: "/assets/portfolio/raevel-mobile.png",
    features: [
      "Sistem pencarian & reservasi hotel/villa instan",
      "Program loyalitas Raevel Points & Priority Tier",
      "Manajemen booking, riwayat reservasi & tiket",
      "Pilihan tanggal & filter akomodasi interaktif",
    ],
    techStack: ["React Native", "TypeScript", "Tailwind / NativeWind", "Node.js"],
  },
  {
    id: "porto-mob-quicktopup",
    category: "Aplikasi Mobile",
    categoryLabel: "Aplikasi Mobile",
    title: "Quick TopUp — Aplikasi Top Up Game & Digital Voucher",
    description:
      "Aplikasi mobile top-up game instan dan produk digital dengan katalog game populer (Mobile Legends, Free Fire, dll), leaderboard pembelian, dan sistem checkout otomatis 24 jam.",
    extraInfo: "Aplikasi Mobile",
    image: "/assets/portfolio/quick-topup-mobile.png",
    features: [
      "Katalog game lengkap & pilihan nominal diamond instan",
      "Leaderboard Top 10 Pembeli Terbanyak real-time",
      "Sistem pembayaran otomatis & keranjang belanja cepat",
      "Riwayat transaksi dan status pesanan terupdate 24 jam",
    ],
    techStack: ["Flutter / React Native", "Node.js", "Payment Gateway API", "PostgreSQL"],
  },
  {
    id: "porto-booking-1",
    category: "Sistem Booking",
    categoryLabel: "Sistem Booking",
    title: "Konsep Sistem Booking & Reservasi Online",
    description:
      "Sistem pemesanan jadwal otomatis untuk klinik, salon, studio foto, atau konsultasi dengan sinkronisasi kalender dan reminder otomatis.",
    extraInfo: "Sistem Booking",
    features: [
      "Pemilihan tanggal & slot waktu otomatis",
      "Notifikasi reminder via WhatsApp & Email",
      "Manajemen ketersediaan staf & ruangan",
      "Integrasi payment gateway instan",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "porto-ecom-1",
    category: "E-Commerce",
    categoryLabel: "E-Commerce",
    title: "Konsep Toko Online & E-Commerce Store",
    description:
      "Website e-commerce modern dengan katalog produk dinamis, kalkulator ongkos kirim otomatis, keranjang belanja cepat, dan checkout tanpa ribet.",
    extraInfo: "E-Commerce",
    features: [
      "Katalog produk dengan varian & filter cepat",
      "Integrasi ongkir otomatis seluruh Indonesia",
      "Checkout mudah via WhatsApp atau Payment Gateway",
      "Dashboard manajemen pesanan & inventaris",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "porto-mob-2",
    category: "Aplikasi Mobile",
    categoryLabel: "Aplikasi Mobile",
    title: "Konsep Aplikasi Manajemen Siswa & Kelas",
    description:
      "Sistem aplikasi mobile terintegrasi untuk penilaian akademik, akses materi digital offline, dan pelacakan perkembangan belajar siswa harian.",
    extraInfo: "Aplikasi Mobile",
    features: [
      "Dashboard nilai dan perkembangan siswa",
      "Fitur komunikasi guru dan wali murid",
      "Akses materi digital offline dan online",
      "Keamanan data pengguna tingkat lanjut",
    ],
    techStack: ["React Native", "Android SDK", "TypeScript"],
  },
];

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Semua Proyek");
  const [conceptModalOpen, setConceptModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<PortfolioItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Filter projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua Proyek") {
      return portfolioData;
    }
    return portfolioData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleViewConcept = (item: PortfolioItem) => {
    setSelectedConcept(item);
    setConceptModalOpen(true);
  };

  const handleConsultFromConcept = () => {
    setConceptModalOpen(false);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Portofolio" />

      {/* Main Content */}
      <main className="flex-1 pb-20 sm:pb-28">
        <div className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 space-y-12 sm:space-y-16">
          
          {/* ══════════════════════════════════════════════════════════
              SECTION 1: HERO PORTOFOLIO (SESUAI GAMBAR REFERENSI 1)
          ══════════════════════════════════════════════════════════ */}
          <section
            aria-label="Hero Portofolio"
            className="text-center max-w-4xl mx-auto pt-6 sm:pt-10 md:pt-14"
          >
            {/* Eyebrow Label: [ PORTOFOLIO ] */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">[</span>
              <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                PORTOFOLIO
              </span>
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">]</span>
            </div>

            {/* Main Heading dengan Aksen Warna IDEA.support */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.2] max-w-4xl mx-auto">
              Website dan Aplikasi yang Kami Bangun untuk{" "}
              <span className="text-[#004CD3]">Berbagai Bisnis</span>
            </h1>

            {/* Subtitle / Deskripsi */}
            <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed">
              Dari bisnis kecil hingga perusahaan — lihat berbagai proyek yang telah kami kerjakan dan bagaimana setiap solusi dirancang sesuai kebutuhan klien.
            </p>

            {/* Dua Tombol CTA */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#004CD3] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:bg-[#003B86] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Konsultasi Gratis
              </button>
              <Link
                href="/layanan"
                className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-slate-800 hover:text-[#004CD3] border border-[#D0E3F8] hover:border-[#004CD3]/60 font-semibold text-sm sm:text-base shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Lihat Paket Harga
              </Link>
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CLIENT / PARTNER MARQUEE (FULL WIDTH SEPERTI DI BERANDA)
        ══════════════════════════════════════════════════════════ */}
        <div className="w-full my-8 sm:my-12 overflow-hidden">
          <ClientLogos />
        </div>

        <div className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 space-y-10 sm:space-y-12">
          {/* ══════════════════════════════════════════════════════════
              SECTION 2: NAVIGASI KATEGORI PROYEK (SESUAI GAMBAR REFERENSI 2)
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Navigasi Kategori Proyek" className="w-full">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-full overflow-x-auto no-scrollbar scroll-smooth py-2 px-2 sm:px-4">
                <div className="w-max mx-auto">
                  <div
                    role="tablist"
                    aria-label="Kategori Portofolio"
                    className="inline-flex items-center p-1 sm:p-1.5 rounded-full border border-[#D0E3F8] bg-white shadow-xs gap-1 sm:gap-1.5"
                  >
                    {portfolioCategories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                            isActive
                              ? "bg-[#004CD3] text-white shadow-md shadow-blue-600/25"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                          }`}
                        >
                          {cat.icon}
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 3 & 4: AREA DAFTAR PROYEK (RESPONSIVE GRID)
          ══════════════════════════════════════════════════════════ */}
          <section aria-label="Daftar Portofolio Proyek">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 text-slate-500 bg-white rounded-3xl border border-[#D0E3F8] p-8 max-w-xl mx-auto shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#EDF5FE] text-[#004CD3] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Belum ada proyek dalam kategori ini
                </h3>
                <p className="text-sm text-slate-500 mb-5">
                  Silakan pilih kategori lainnya atau tampilkan seluruh proyek yang telah kami bangun.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("Semua Proyek")}
                  className="px-5 py-2 rounded-full bg-[#004CD3] text-white text-xs font-semibold hover:bg-[#003B86] transition-colors"
                >
                  Tampilkan Semua Proyek
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((item) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onViewConcept={handleViewConcept}
                  />
                ))}
              </div>
            )}
          </section>

        </div>
      </main>

      {/* Concept Detail Preview Modal */}
      {selectedConcept && (
        <ConceptModal
          isOpen={conceptModalOpen}
          onClose={() => setConceptModalOpen(false)}
          title={selectedConcept.title}
          category={selectedConcept.category}
          description={selectedConcept.description}
          features={selectedConcept.features}
          techStack={selectedConcept.techStack}
          image={selectedConcept.image}
          onConsult={handleConsultFromConcept}
        />
      )}

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceTitle={selectedConcept ? selectedConcept.title : "Portofolio"}
        category={selectedConcept?.category || "Website"}
      />

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
