"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/admin") return "Overview Dashboard";
    if (pathname?.includes("komentar-klien")) return "Tabel Komentar Klien";
    if (pathname?.includes("layanan")) return "Tabel Layanan";
    if (pathname?.includes("portofolio")) return "Tabel Portofolio";
    if (pathname?.includes("tentang-kami")) return "Tabel Tentang Kami";
    if (pathname?.includes("tim")) return "Tabel Tim Kami";
    if (pathname?.includes("klien-kami")) return "Tabel Klien Kami";
    return "Admin Panel";
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Title & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-0.5">
          <span>Admin</span>
          <span>/</span>
          <span className="text-slate-600 capitalize">
            {pathname.replace("/admin", "").replace("/", "") || "Dashboard"}
          </span>
        </div>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Soft Delete Standard Indicator */}
        <div className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Audit Timestamps Active</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-9 h-9 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-xs text-blue-700">
            AD
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-slate-800 leading-tight">
              Administrator
            </div>
            <div className="text-[10px] text-slate-500">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
