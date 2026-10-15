"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IdeaSupportLogo from "./IdeaSupportLogo";

export interface NavbarProps {
  activePage?: "Layanan" | "Portofolio" | "Klien Kami" | "Tentang Kami" | "Tim" | "Kontak";
}

interface NavItem {
  label: "Layanan" | "Portofolio" | "Klien Kami" | "Tentang Kami" | "Tim" | "Kontak";
  href: string;
}

const navItems: NavItem[] = [
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Klien Kami", href: "/klien-kami" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Tim", href: "/tim" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Navbar({ activePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine which nav item is currently active
  const getIsActive = (item: NavItem) => {
    if (activePage) {
      return activePage === item.label;
    }
    if (!pathname) return false;
    if (item.href === "/layanan" && pathname.startsWith("/layanan")) return true;
    if (item.href === "/portofolio" && pathname.startsWith("/portofolio")) return true;
    if (item.href === "/klien-kami" && pathname.startsWith("/klien-kami")) return true;
    if (item.href === "/tentang-kami" && pathname.startsWith("/tentang-kami")) return true;
    if (item.href === "/tim" && pathname.startsWith("/tim")) return true;
    return false;
  };

  return (
    <header className="w-full pt-6 md:pt-[45px] px-4 sm:px-6 min-[1340px]:px-0 max-w-[1298px] mx-auto relative z-50">
      <nav
        aria-label="Navigasi Utama"
        className="w-full h-[64px] sm:h-[75px] bg-[#004CD3] rounded-[41px] px-6 sm:px-8 lg:px-9 flex items-center justify-between shadow-md transition-all duration-200"
        style={{ opacity: 1 }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-full"
          aria-label="Idea.support Beranda"
        >
          <IdeaSupportLogo variant="white" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                  isActive
                    ? "bg-white text-[#004CD3] font-semibold px-6 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-xs"
                    : "text-white hover:text-white/85 font-medium px-1 py-1"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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
          className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-[#004CD3] rounded-2xl p-4 shadow-xl border border-white/10 transition-all duration-200 ease-out"
        >
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? "bg-white text-[#004CD3] font-semibold shadow-xs"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
