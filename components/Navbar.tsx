"use client";

import React, { useState } from "react";
import IdeaSupportLogo from "./IdeaSupportLogo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Komponen Klien", href: "#klien" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Tim", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-50">
      <nav
        aria-label="Navigasi Utama"
        className="w-full bg-[#0062E0] rounded-full px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between shadow-md transition-all duration-200"
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-full"
          aria-label="Idea.support Beranda"
        >
          <IdeaSupportLogo variant="white" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-[14px] xl:text-[15px] font-medium hover:text-white/80 transition-colors focus:outline-none focus-visible:underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-[#0062E0] rounded-2xl p-5 shadow-xl border border-white/10 transition-all duration-200 ease-out"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-white font-medium text-base rounded-lg hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
