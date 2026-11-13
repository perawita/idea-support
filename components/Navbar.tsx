"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IdeaSupportLogo from "./IdeaSupportLogo";
import ContactModal from "./ContactModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/context";

export interface NavbarProps {
  activePage?: "Beranda" | "Layanan" | "Portofolio" | "Klien Kami" | "Tentang Kami" | "Tim" | "Kontak";
}

export default function Navbar({ activePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const pathname = usePathname();
  const { dict } = useLanguage();

  const navItems = [
    { key: "home", label: dict.nav.home, href: "/" },
    { key: "services", label: dict.nav.services, href: "/layanan" },
    { key: "portfolio", label: dict.nav.portfolio, href: "/portofolio" },
    { key: "about", label: dict.nav.about, href: "/tentang-kami" },
    { key: "contact", label: dict.nav.contact, href: "/kontak" },
  ];

  // Determine which nav item is currently active
  const getIsActive = (item: { key: string; href: string }) => {
    if (activePage) {
      const activeMap: Record<string, string> = {
        Beranda: "/",
        Layanan: "/layanan",
        Portofolio: "/portofolio",
        "Klien Kami": "/klien-kami",
        "Tentang Kami": "/tentang-kami",
        Tim: "/tim",
        Kontak: "/kontak",
      };
      if (activeMap[activePage] === item.href) return true;
    }
    if (!pathname) return false;
    if (item.href === "/" && pathname === "/") return true;
    if (item.href === "/layanan" && pathname.startsWith("/layanan")) return true;
    if (item.href === "/portofolio" && pathname.startsWith("/portofolio")) return true;
    if (item.href === "/tentang-kami" && pathname.startsWith("/tentang-kami")) return true;
    if (item.href === "/kontak" && pathname.startsWith("/kontak")) return true;
    return false;
  };

  return (
    <header className="w-full pt-4 md:pt-6 px-4 sm:px-6 min-[1340px]:px-0 max-w-[1298px] mx-auto relative z-50">
      <div className="w-full flex items-center gap-3 sm:gap-3.5 md:gap-4">
        <nav
          aria-label="Navigasi Utama"
          className="flex-1 min-w-0 h-[64px] sm:h-[72px] bg-white rounded-full px-3.5 sm:px-6 flex items-center justify-between shadow-sm border border-gray-100 transition-all duration-200"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]/60 rounded-full"
            aria-label="Idea.support"
          >
            <IdeaSupportLogo variant="primary" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-[15px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]/60 rounded-full px-4 py-2 ${
                    isActive
                      ? "bg-[#004CD3] text-white font-semibold shadow-xs"
                      : "text-gray-600 hover:text-[#004CD3] hover:bg-blue-50/60 font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Hubungi Kami - Desktop */}
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="hidden lg:inline-flex items-center justify-center px-5 sm:px-6 h-[48px] sm:h-[50px] bg-[#004CD3] hover:bg-[#003BAA] text-white text-[15px] font-semibold rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]/60 shadow-sm cursor-pointer whitespace-nowrap"
            >
              {dict.nav.contactUs}
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004CD3]"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Standalone Language Switcher (Pill outside Navbar Container) */}
        <LanguageSwitcher />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transition-all duration-200 ease-out"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? "bg-[#004CD3] text-white font-semibold shadow-xs"
                        : "text-gray-600 hover:bg-blue-50/60 hover:text-[#004CD3]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-gray-100 mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full block px-4 py-2.5 rounded-xl font-semibold text-base text-white bg-[#004CD3] hover:bg-[#003BAA] text-center transition-colors cursor-pointer"
              >
                {dict.nav.contactUs}
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Popup Modal Konsultasi Gratis */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceTitle={dict.contactModal.freeBadge}
        category={dict.contactModal.freeBadge}
      />
    </header>
  );
}
