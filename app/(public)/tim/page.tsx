"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMemberItem {
  id: number;
  name: string;
  role: string;
  linkedinUrl: string;
  instagramUrl: string;
}

const teamMembers: TeamMemberItem[] = [
  {
    id: 1,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 2,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 3,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 4,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 5,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 6,
    name: "Nama anggota",
    role: "Peran / jabatan",
    linkedinUrl: "https://linkedin.com",
    instagramUrl: "https://instagram.com",
  },
];

export default function TimPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Tim" />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-24 pt-10 sm:pt-14">
        {/* Header Section */}
        <section
          aria-label="Judul Halaman Tim"
          className="text-center px-4 sm:px-6 max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          {/* Badge Pill: Tim idea.support */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 sm:px-5 py-1.5 shadow-[0_2px_10px_rgba(0,98,224,0.06)] border border-[#D0E3F8] mb-5 sm:mb-6">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#004CD3] ring-4 ring-[#D0E3F8] shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-medium text-slate-800">
              Tim idea.support
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004CD3] tracking-tight">
            Tim
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kenali tim di balik ide dan produk digital.
          </p>
        </section>

        {/* 3-Column Team Grid matching Screenshot */}
        <section
          aria-label="Daftar Anggota Tim"
          className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[28px] border border-[#D0E3F8] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Top Half: Photo Placeholder Box */}
                <div className="bg-[#EDF5FE] pt-12 pb-10 px-6 flex flex-col items-center justify-center text-center">
                  {/* Avatar Icon */}
                  <div className="w-20 h-20 rounded-full bg-[#E2EEFC] border border-[#CBDFF5] flex items-center justify-center text-slate-400 mb-4 shadow-xs">
                    <svg
                      className="w-10 h-10 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <span className="font-semibold text-slate-700 text-sm sm:text-[15px] mb-1">
                    Foto anggota
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                    PLACEHOLDER · DAPAT DIGANTI
                  </span>
                </div>

                {/* Bottom Half: Name, Role, and Social Links */}
                <div className="bg-white p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-normal mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Divider & Social Links */}
                  <div>
                    <div className="border-t border-slate-100 my-4" aria-hidden="true" />
                    <div className="flex items-center gap-6">
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#004CD3] hover:underline inline-flex items-center gap-1 group"
                      >
                        <span>LinkedIn</span>
                        <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#004CD3] hover:underline inline-flex items-center gap-1 group"
                      >
                        <span>Instagram</span>
                        <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
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
