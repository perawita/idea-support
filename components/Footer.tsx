import React from "react";
import Link from "next/link";
import IdeaSupportLogo from "./IdeaSupportLogo";

const WA_NUMBER = "6285770037803";
const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer
      id="kontak"
      aria-label="Footer"
      className="w-full mt-auto bg-[#004CD3] text-white border-t border-[#003B86] relative overflow-hidden"
    >
      <div className="w-full max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16 pt-16 sm:pt-20 pb-0 relative z-10">
        {/* Top 3-Column Layout — Full & Spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          
          {/* 1. Left Column: Brand Info (~4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <Link
              href="/"
              aria-label="Idea.support — Beranda"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
            >
              <IdeaSupportLogo variant="white" size="md" />
            </Link>

            <p className="text-blue-100/90 text-xs sm:text-[13.5px] leading-relaxed max-w-sm font-normal">
              Jasa pembuatan website dan aplikasi profesional untuk bisnis, UMKM, brand, dan perusahaan di seluruh Indonesia.
            </p>
          </div>

          {/* 2. Middle Column: Layanan (~4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase mb-5">
              LAYANAN
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3">
              {/* Sub-column 1 */}
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Website Landing Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Website Company Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Website E-Commerce
                  </Link>
                </li>
              </ul>

              {/* Sub-column 2 */}
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Website Sistem Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Web App &amp; SaaS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan"
                    className="text-blue-100/85 hover:text-white text-xs sm:text-[13.5px] transition-colors duration-150 block"
                  >
                    Website Custom Sistem
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Right Column: Hubungi Kami Cards (~4 cols, 2x2 Grid) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase mb-5">
              HUBUNGI KAMI
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003B86] border border-white/15 hover:border-white/30 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 transition-all hover:bg-[#003478] group shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs sm:text-[13px] group-hover:text-emerald-300 transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-[11px] text-blue-100 truncate mt-0.5">
                    +62 857-7003-7803
                  </div>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/idea.support"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003B86] border border-white/15 hover:border-white/30 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 transition-all hover:bg-[#003478] group shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#footer-ig-grad-blue)" strokeWidth={1.8}>
                    <defs>
                      <linearGradient id="footer-ig-grad-blue" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs sm:text-[13px] group-hover:text-pink-200 transition-colors">
                    Instagram
                  </div>
                  <div className="text-[11px] text-blue-100 truncate mt-0.5">
                    @idea.support
                  </div>
                </div>
              </a>

              {/* TikTok Card */}
              <a
                href="https://tiktok.com/@idea.support"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003B86] border border-white/15 hover:border-white/30 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 transition-all hover:bg-[#003478] group shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs sm:text-[13px] group-hover:text-cyan-200 transition-colors">
                    TikTok
                  </div>
                  <div className="text-[11px] text-blue-100 truncate mt-0.5">
                    @idea.support
                  </div>
                </div>
              </a>

              {/* Website Card */}
              <a
                href="https://idea-support.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003B86] border border-white/15 hover:border-white/30 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 transition-all hover:bg-[#003478] group shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs sm:text-[13px] group-hover:text-sky-200 transition-colors">
                    Website
                  </div>
                  <div className="text-[11px] text-blue-100 truncate mt-0.5">
                    idea-support.com
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 sm:my-12 h-px w-full bg-white/20" aria-hidden="true" />

        {/* Bottom Bar (Copyright & Kebijakan Privasi) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
          <p className="text-xs sm:text-[13px] text-blue-100/90 text-center sm:text-left">
            © {CURRENT_YEAR} Idea.support — Semua hak cipta dilindungi.
          </p>

          <Link
            href="/kebijakan-privasi"
            className="text-xs sm:text-[13px] text-blue-100/90 hover:text-white transition-colors"
          >
            Kebijakan Privasi
          </Link>
        </div>

        {/* Giant Watermark Brand Text at the Bottom — Tone-on-Tone Deep Blue (#003582 on #004CD3) */}
        <div className="w-full select-none pointer-events-none mt-6 sm:mt-10 pb-4 sm:pb-6">
          <svg
            viewBox="0 0 1200 210"
            className="w-full h-auto block select-none pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="165"
              textAnchor="middle"
              fill="#003582"
              fontSize="170"
              fontWeight="900"
              letterSpacing="-0.03em"
              style={{ fontFamily: "inherit" }}
            >
              Idea.support
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
