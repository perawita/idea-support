"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  division: "Design" | "Engineering" | "Management";
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Product Design",
    role: "Lead UI/UX Designer",
    division: "Design",
    description:
      "Merancang antarmuka pengguna yang memikat, intuitif, dan selaras dengan identitas brand serta kenyamanan pengguna.",
  },
  {
    name: "Web Engineering",
    role: "Senior Frontend Engineer",
    division: "Engineering",
    description:
      "Mengembangkan website dan aplikasi web modern berbasis Next.js dengan arsitektur kode bersih dan performa tinggi.",
  },
  {
    name: "Mobile Engineering",
    role: "Mobile App Specialist",
    division: "Engineering",
    description:
      "Membangun aplikasi mobile Android dan iOS yang responsif, stabil, dan siap dipublikasikan ke toko aplikasi.",
  },
  {
    name: "Quality & Delivery",
    role: "QA & Project Specialist",
    division: "Management",
    description:
      "Memastikan pengujian menyeluruh, kepatuhan fungsionalitas, serta jadwal rilis proyek berjalan tepat waktu.",
  },
];

export default function TimPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EDF5FE] selection:bg-[#0062E0] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Tim" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24">
        <PageHeader
          badgeText="Tim idea.support"
          titleBlue="Tim"
          titleDark="idea.support"
          subtitle="Kolaborasi para profesional yang berfokus membangun produk digital berkualitas tinggi untuk pertumbuhan bisnis Anda."
        />

        <section
          aria-label="Daftar Anggota Tim"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D0E3F8] p-6 shadow-xs flex flex-col justify-between hover:border-[#0062E0]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF5FE] border border-[#D0E3F8] text-[#0062E0] flex items-center justify-center font-bold text-lg mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-[#0062E0] bg-[#EDF5FE] px-2.5 py-0.5 rounded-full border border-[#D0E3F8]">
                    {member.division}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mt-2.5 mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#0062E0] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
