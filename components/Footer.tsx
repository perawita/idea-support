import React from "react";
import Link from "next/link";
import IdeaSupportLogo from "./IdeaSupportLogo";

const footerNavItems = [
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Klien Kami", href: "/klien-kami" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Tim", href: "/tim" },
  { label: "Kontak", href: "/#kontak" },
];

// Static year — update when needed or migrate to a client component for dynamic value
const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer
      id="kontak"
      aria-label="Footer"
      className="w-full mt-auto pt-10 pb-8 px-4 sm:px-6 lg:px-8 bg-[#EDF5FE]"
    >
      {/* Section Label */}
      <div className="max-w-[1298px] mx-auto mb-5">
        <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#004EB3] uppercase opacity-70">
          07 / Footer
        </p>
      </div>

      {/* Main Footer Panel */}
      <div className="max-w-[1298px] mx-auto">
        <div className="w-full rounded-2xl sm:rounded-3xl bg-[#004CD3] px-6 py-7 sm:px-10 sm:py-9 md:px-12 md:py-10">

          {/* Row 1: Logo + Tagline */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Idea.support — Beranda"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-full"
            >
              <IdeaSupportLogo variant="white" size="md" />
            </Link>

            {/* Tagline */}
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug sm:text-right">
              Wujudkan Ide Digitalmu Hari Ini
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 sm:my-7 h-px w-full bg-white/20" aria-hidden="true" />

          {/* Row 2: Nav Links + Copyright */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Navigation Links */}
            <nav aria-label="Navigasi Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-6 md:gap-x-8">
                {footerNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/90 text-sm sm:text-[14px] font-medium hover:text-white hover:underline underline-offset-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="text-white/60 text-xs sm:text-[13px] shrink-0">
              © {CURRENT_YEAR} Idea.support
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
