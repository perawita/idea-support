"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Komentar Klien",
    href: "/admin/komentar-klien",
    badge: "Feedback",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    name: "Layanan",
    href: "/admin/layanan",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Portofolio",
    href: "/admin/portofolio",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Tentang Kami",
    href: "/admin/tentang-kami",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Tim Kami",
    href: "/admin/tim",
    badge: "SDM",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    name: "Klien Kami",
    href: "/admin/klien-kami",
    icon: (active) => (
      <svg
        className={`w-5 h-5 transition-colors ${
          active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 min-h-screen sticky top-0 shadow-xs z-30">
      <div>
        {/* Brand / Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0062E0] to-[#3B82F6] flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <span className="font-extrabold text-sm tracking-tight">IS</span>
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-slate-900 leading-tight">
                IDEA SUPPORT
              </div>
              <div className="text-[11px] font-medium text-blue-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Admin Portal
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="px-3 py-4">
          <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Database Tables
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#0062E0] text-white shadow-sm shadow-blue-600/30 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon(isActive)}
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Info & Quick Exit */}
      <div className="p-4 border-t border-slate-100 space-y-3">
        {/* PostgreSQL Indicator */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              PostgreSQL
            </span>
            <span className="text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              Port 5432
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Audit: <code className="text-[10px] bg-slate-200/70 px-1 py-0.5 rounded text-slate-700">created/updated/deleted_at</code>
          </div>
        </div>

        {/* View Public Website */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Lihat Web Publik
        </Link>
      </div>
    </aside>
  );
}
