"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import FilterPills, { FilterCategory } from "@/components/FilterPills";
import ServiceCard, { ServiceItem } from "@/components/ServiceCard";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const servicesData: ServiceItem[] = [
  {
    id: "web-1",
    category: "Website",
    categoryLabel: "Website / Web Dev",
    title: "Pembuatan Website",
    description:
      "Website untuk bisnis dan sekolah, dari brief sampai rilis dengan hasil yang rapi dan siap dipakai.",
    extraInfo: "Web & produk digital",
  },
  {
    id: "mob-1",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Aplikasi Mobile",
    description:
      "Produk digital dalam aplikasi mobile untuk kebutuhan bisnis dan sekolah.",
    extraInfo: "Web & produk digital",
  },
  {
    id: "web-2",
    category: "Website",
    categoryLabel: "Website / Web Dev",
    title: "Pembuatan Website",
    description:
      "Website untuk bisnis dan sekolah, dari brief sampai rilis dengan hasil yang rapi dan siap dipakai.",
    extraInfo: "Web & produk digital",
  },
  {
    id: "mob-2",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Aplikasi Mobile",
    description:
      "Produk digital dalam aplikasi mobile untuk kebutuhan bisnis dan sekolah.",
    extraInfo: "Web & produk digital",
  },
];

export default function LayananPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("More");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((item) => {
    if (activeFilter === "More") return true;
    return item.category === activeFilter;
  });

  // Group into pairs of 2 so each pair is wrapped in an outer white card matching the design
  const groupedPairs: ServiceItem[][] = [];
  for (let i = 0; i < filteredServices.length; i += 2) {
    groupedPairs.push(filteredServices.slice(i, i + 2));
  }

  const handleContact = (service: ServiceItem) => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Layanan" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* Page Header */}
        <PageHeader
          badgeText="Layanan idea.support"
          titleBlue="Layanan"
          titleDark="idea.support"
        >
          <FilterPills
            activeCategory={activeFilter}
            onSelectCategory={setActiveFilter}
          />
        </PageHeader>

        {/* Services Section with Outer White Containers */}
        <section
          aria-label="Daftar Layanan"
          className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 mt-4 space-y-8"
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 text-slate-500 bg-white rounded-3xl border border-[#D0E3F8] p-8">
              Tidak ada layanan ditemukan untuk kategori ini.
            </div>
          ) : (
            groupedPairs.map((pair, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl sm:rounded-[36px] border border-[#D0E3F8] p-6 sm:p-8 shadow-xs"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {pair.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onContact={handleContact}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceTitle={selectedService?.title}
        category={selectedService?.category}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
