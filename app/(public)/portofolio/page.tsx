"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import FilterPills, { FilterCategory } from "@/components/FilterPills";
import PortfolioCard, { PortfolioItem } from "@/components/PortfolioCard";
import ConceptModal from "@/components/ConceptModal";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const portfolioData: PortfolioItem[] = [
  {
    id: "porto-web-1",
    category: "Website",
    categoryLabel: "Website / Web Dev",
    title: "Konsep website bisnis",
    description:
      "Desain eksplorasi untuk website profil bisnis modern dengan tata letak bersih, navigasi cepat, dan responsif.",
    extraInfo: "Status: Konsep Digital",
    features: [
      "Hero interaktif dengan pesan brand yang kuat",
      "Katalog layanan terstruktur dan elegan",
      "Form konsultasi cepat dan terintegrasi",
      "Optimasi SEO & kecepatan muat halaman",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "porto-mob-1",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Konsep aplikasi sekolah",
    description:
      "Desain antarmuka aplikasi manajemen sekolah untuk siswa, orang tua, dan pengajar dengan alur pengguna yang intuitif.",
    extraInfo: "Status: Konsep Digital",
    features: [
      "Jadwal belajar dan absensi real-time",
      "Portal tugas dan pengumuman interaktif",
      "Notifikasi langsung ke perangkat orang tua",
      "Desain ramah anak dan mudah dipahami",
    ],
    techStack: ["React Native", "TypeScript", "Tailwind / NativeWind"],
  },
  {
    id: "porto-web-2",
    category: "Website",
    categoryLabel: "Website / Web App",
    title: "Konsep website bisnis",
    description:
      "Desain eksplorasi untuk website profil bisnis modern dengan tata letak bersih, navigasi cepat, dan responsif.",
    extraInfo: "Status: Konsep Digital",
    features: [
      "Sistem showcase portofolio dinamis",
      "Integrasi feedback dan testimoni klien",
      "Kompatibilitas multi-perangkat (desktop & tablet)",
      "Animasi mikro yang halus dan profesional",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "porto-mob-2",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Konsep aplikasi sekolah",
    description:
      "Desain antarmuka aplikasi manajemen sekolah untuk siswa, orang tua, dan pengajar dengan alur pengguna yang intuitif.",
    extraInfo: "Status: Konsep Digital",
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
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("More");
  const [conceptModalOpen, setConceptModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<PortfolioItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === "More") return true;
    return item.category === activeFilter;
  });

  const handleViewConcept = (item: PortfolioItem) => {
    setSelectedConcept(item);
    setConceptModalOpen(true);
  };

  const handleConsultFromConcept = () => {
    setConceptModalOpen(false);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EDF5FE] selection:bg-[#0062E0] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Portofolio" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* Page Header */}
        <PageHeader
          badgeText="Portofolio idea.support"
          titleBlue="Portofolio"
          titleDark="idea.support"
        >
          <FilterPills
            activeCategory={activeFilter}
            onSelectCategory={setActiveFilter}
          />
        </PageHeader>

        {/* Portfolio Grid (2 Columns on Desktop) */}
        <section
          aria-label="Daftar Portofolio"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
        >
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              Tidak ada portofolio ditemukan untuk kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onViewConcept={handleViewConcept}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Concept Preview Modal */}
      {selectedConcept && (
        <ConceptModal
          isOpen={conceptModalOpen}
          onClose={() => setConceptModalOpen(false)}
          title={selectedConcept.title}
          category={selectedConcept.category}
          description={selectedConcept.description}
          features={selectedConcept.features}
          techStack={selectedConcept.techStack}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
