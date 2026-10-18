"use client";

import { useState } from "react";
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
      "Website untuk kebutuhan bisnis dan portofolio dengan tampilan yang modern dan responsif.",
    extraInfo: "Fitur & modul digital",
  },
  {
    id: "mob-1",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi digital dalam aplikasi bisnis dan sekolah berbasis Android & iOS.",
    extraInfo: "Fitur & modul digital",
  },
  {
    id: "web-2",
    category: "Website",
    categoryLabel: "Website / Web App",
    title: "Pembuatan Website",
    description:
      "Website untuk kebutuhan bisnis dan portofolio dengan tampilan yang modern dan responsif.",
    extraInfo: "Fitur & modul digital",
  },
  {
    id: "mob-2",
    category: "Mobile",
    categoryLabel: "Mobile / Android",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi digital dalam aplikasi bisnis dan sekolah berbasis Android & iOS.",
    extraInfo: "Fitur & modul digital",
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

  const handleContact = (service: ServiceItem) => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EDF5FE] selection:bg-[#0062E0] selection:text-white">
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

        {/* Services Grid (2 Columns on Desktop) */}
        <section
          aria-label="Daftar Layanan"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              Tidak ada layanan ditemukan untuk kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onContact={handleContact}
                />
              ))}
            </div>
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
