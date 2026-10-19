"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TableCard {
  title: string;
  tableName: string;
  href: string;
  description: string;
  columns: string[];
  key: "komentar_klien_kami" | "layanan" | "portofolio" | "tentang_kami" | "tim_kami" | "klien_kami";
  color: string;
}

const tableCards: TableCard[] = [
  {
    title: "Komentar Klien Kami",
    tableName: "komentar_klien_kami",
    href: "/admin/komentar-klien",
    description: "Ulasan, testimoni, dan feedback dari klien terdaftar.",
    columns: ["id", "id_klien", "judul", "komentar", "created_at", "updated_at", "deleted_at"],
    key: "komentar_klien_kami",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Layanan",
    tableName: "layanan",
    href: "/admin/layanan",
    description: "Katalog penawaran jasa pengembangan dan desain digital.",
    columns: ["id_layanan", "tipe_layanan", "judul_layanan", "deskripsi", "kategori", "created_at", "updated_at", "deleted_at"],
    key: "layanan",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Portofolio",
    tableName: "portofolio",
    href: "/admin/portofolio",
    description: "Showcase hasil karya proyek web, mobile app, dan sistem.",
    columns: ["id_portofolio", "kategori", "judul", "tipe", "media", "created_at", "updated_at", "deleted_at"],
    key: "portofolio",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Tentang Kami",
    tableName: "tentang_kami",
    href: "/admin/tentang-kami",
    description: "Profil perusahaan, visi misi, dan deskripsi institusi.",
    columns: ["id_tentang_kami", "deskripsi", "created_at", "updated_at", "deleted_at"],
    key: "tentang_kami",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Tim Kami",
    tableName: "tim_kami",
    href: "/admin/tim",
    description: "Daftar personil, foto, jabatan, dan profil media sosial.",
    columns: ["id_tim_kami", "foto", "nama_depan", "nama_belakang", "peran", "jabatan", "linkedin", "instagram", "created_at", "updated_at", "deleted_at"],
    key: "tim_kami",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Klien Kami",
    tableName: "klien_kami",
    href: "/admin/klien-kami",
    description: "Mitra bisnis dan logo perusahaan yang bekerja sama.",
    columns: ["id", "nama_klien", "logo_klien", "created_at", "updated_at", "deleted_at"],
    key: "klien_kami",
    color: "from-rose-500 to-pink-600",
  },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function loadStats() {
      try {
        const res = await fetch("/api/admin/stats");
        const json = await res.json();
        if (!ignore && res.ok && json.data) {
          setStats(json.data);
        }
      } catch {
        // non-blocking
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    loadStats();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Banner SOP Audit Database */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-950/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            PostgreSQL Live Connected
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Database Management & Audit Control
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Seluruh tabel wajib menerapkan 3 pilar timestamp sistem:{" "}
            <code className="text-blue-200 bg-white/10 px-2 py-0.5 rounded text-xs">created_at</code>,{" "}
            <code className="text-blue-200 bg-white/10 px-2 py-0.5 rounded text-xs">updated_at</code>, dan{" "}
            <code className="text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded text-xs">deleted_at</code> (Soft Delete).
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Standard Time</span>
              <span className="font-semibold text-white">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Deletion Policy</span>
              <span className="font-semibold text-emerald-300">Soft Delete Enabled (Non-Destructive)</span>
            </div>
          </div>
        </div>

        {/* Decorative Grid BG */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      </div>

      {/* Grid of Tables */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Tabel Database Aktif
            </h3>
            <p className="text-xs text-slate-500">
              Pilih tabel untuk mengelola data, melihat kolom audit, atau menambah entri baru.
            </p>
          </div>
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            6 Tabel Terhubung PostgreSQL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tableCards.map((card) => {
            const count = stats[card.key] !== undefined ? stats[card.key] : null;

            return (
              <div
                key={card.tableName}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                    >
                      {card.title.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {loading ? "..." : `${count ?? 0} Aktif`}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {card.tableName}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Kolom yang digunakan */}
                  <div className="mb-5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                      Struktur Kolom:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {card.columns.map((col) => (
                        <span
                          key={col}
                          className={`text-[10px] px-2 py-0.5 rounded font-mono whitespace-nowrap inline-block ${
                            col === "created_at" || col === "updated_at"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold"
                              : col === "deleted_at"
                              ? "bg-rose-50 text-rose-700 border border-rose-200 font-semibold"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={card.href}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0062E0] bg-[#EDF5FE] hover:bg-[#0062E0] hover:text-white transition-all duration-150"
                >
                  <span>Buka Tabel & Kelola</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
