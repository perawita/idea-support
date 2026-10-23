"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TimKami } from "@/types/admin";
import Toast from "@/components/admin/Toast";
import ConfirmModal from "@/components/admin/ConfirmModal";
import ImageUpload from "@/components/admin/ImageUpload";

const ROLE_OPTIONS = [
  "Lead Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Project Manager",
  "Frontend Engineer",
  "Backend Engineer",
  "Fullstack Engineer",
  "Mobile Engineer",
  "DevOps / Cloud Engineer",
  "Quality Assurance (QA)",
  "Data Scientist / AI Engineer",
  "Digital Marketing & SEO",
];

export default function AdminTimPage() {
  const [data, setData] = useState<TimKami[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterPeran, setFilterPeran] = useState("Semua");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "deleted">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TimKami | null>(null);

  // Form states
  const [formFoto, setFormFoto] = useState("");
  const [formNamaDepan, setFormNamaDepan] = useState("");
  const [formNamaBelakang, setFormNamaBelakang] = useState("");
  const [formPeran, setFormPeran] = useState("Lead Engineer");
  const [formJabatan, setFormJabatan] = useState("");
  const [formLinkedin, setFormLinkedin] = useState("");
  const [formInstagram, setFormInstagram] = useState("");

  // Toast & Confirm Modal states
  const [toast, setToast] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    item: TimKami | null;
    action: "delete" | "restore";
  }>({ isOpen: false, item: null, action: "delete" });

  const perans = ["Semua", ...ROLE_OPTIONS];

  const fetchTim = useCallback(async () => {
    try {
      const res = await fetch("/api/tim?all=true");
      const json = await res.json();
      if (res.ok && json.data) {
        setData(json.data);
      } else {
        throw new Error(json.error || "Gagal mengambil data tim");
      }
    } catch (err: unknown) {
      const error = err as Error;
      setToast({
        type: "error",
        message: error.message || "Gagal menghubungi database",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const res = await fetch("/api/tim?all=true");
        const json = await res.json();
        if (!ignore && res.ok && json.data) {
          setData(json.data);
        }
      } catch (err: unknown) {
        if (!ignore) {
          const error = err as Error;
          setToast({
            type: "error",
            message: error.message || "Gagal menghubungi database",
          });
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    init();
    return () => {
      ignore = true;
    };
  }, []);

  const filteredData = data.filter((item) => {
    const fullName = `${item.nama_depan} ${item.nama_belakang}`.toLowerCase();
    const matchesSearch =
      fullName.includes(search.toLowerCase()) ||
      item.peran.toLowerCase().includes(search.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(search.toLowerCase());

    const matchesPeran =
      filterPeran === "Semua" || item.peran === filterPeran;

    const matchesStatus =
      filterStatus === "all"
        ? true
        : filterStatus === "active"
        ? !item.deleted_at
        : Boolean(item.deleted_at);

    return matchesSearch && matchesPeran && matchesStatus;
  });

  const handleOpenAddModal = () => {
    setEditingItem(null);
    setFormFoto("");
    setFormNamaDepan("");
    setFormNamaBelakang("");
    setFormPeran("Lead Engineer");
    setFormJabatan("");
    setFormLinkedin("");
    setFormInstagram("");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: TimKami) => {
    setEditingItem(item);
    setFormFoto(item.foto || "");
    setFormNamaDepan(item.nama_depan);
    setFormNamaBelakang(item.nama_belakang);
    setFormPeran(item.peran);
    setFormJabatan(item.jabatan);
    setFormLinkedin(item.linkedin);
    setFormInstagram(item.instagram);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNamaDepan.trim() || !formPeran.trim() || !formJabatan.trim()) {
      setToast({
        type: "error",
        message: "Gagal menyimpan! Mohon lengkapi nama, peran, dan jabatan anggota tim.",
      });
      return;
    }

    try {
      if (editingItem) {
        const res = await fetch("/api/tim", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_tim_kami: editingItem.id_tim_kami,
            foto: formFoto || null,
            nama_depan: formNamaDepan.trim(),
            nama_belakang: formNamaBelakang.trim(),
            peran: formPeran,
            jabatan: formJabatan.trim(),
            linkedin: formLinkedin.trim(),
            instagram: formInstagram.trim(),
          }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Gagal memperbarui data tim");

        setToast({
          type: "success",
          message: `Data anggota tim "${formNamaDepan} ${formNamaBelakang}" berhasil diperbarui!`,
        });
      } else {
        const res = await fetch("/api/tim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            foto: formFoto || null,
            nama_depan: formNamaDepan.trim(),
            nama_belakang: formNamaBelakang.trim(),
            peran: formPeran,
            jabatan: formJabatan.trim(),
            linkedin: formLinkedin.trim(),
            instagram: formInstagram.trim(),
          }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Gagal menambahkan anggota tim");

        setToast({
          type: "success",
          message: `Anggota tim "${formNamaDepan} ${formNamaBelakang}" berhasil disimpan ke database!`,
        });
      }

      await fetchTim();
      setIsModalOpen(false);
    } catch (err: unknown) {
      const error = err as Error;
      setToast({
        type: "error",
        message: error.message || "Gagal menyimpan ke database",
      });
    }
  };

  const handleOpenConfirm = (item: TimKami) => {
    const isDeleted = Boolean(item.deleted_at);
    setConfirmModal({
      isOpen: true,
      item,
      action: isDeleted ? "restore" : "delete",
    });
  };

  const handleConfirmAction = async () => {
    if (!confirmModal.item) return;
    const isDeleted = Boolean(confirmModal.item.deleted_at);
    const name = `${confirmModal.item.nama_depan} ${confirmModal.item.nama_belakang}`;

    try {
      if (isDeleted) {
        const res = await fetch("/api/tim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "restore",
            id: confirmModal.item.id_tim_kami,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Gagal memulihkan anggota tim");

        setToast({
          type: "success",
          message: `Anggota tim "${name}" berhasil dipulihkan!`,
        });
      } else {
        const res = await fetch("/api/tim", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: confirmModal.item.id_tim_kami,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Gagal menghapus anggota tim");

        setToast({
          type: "success",
          message: `Anggota tim "${name}" berhasil dihapus (Soft Delete)!`,
        });
      }

      await fetchTim();
    } catch (err: unknown) {
      const error = err as Error;
      setToast({
        type: "error",
        message: error.message || "Gagal memproses aksi pada database",
      });
    } finally {
      setConfirmModal({ isOpen: false, item: null, action: "delete" });
    }
  };


  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">
              Tabel: tim_kami
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {data.length} Anggota Tim
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Kolom: ID, Foto, Nama Depan, Nama Belakang, Peran, Jabatan, LinkedIn, Instagram, serta Wajib Audit Timestamp.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 bg-[#0062E0] hover:bg-[#004eb3] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Anggota Tim
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Cari nama, peran, jabatan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {perans.map((p) => (
              <button
                key={p}
                onClick={() => setFilterPeran(p)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  filterPeran === p
                    ? "bg-[#0062E0] text-white font-semibold shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end lg:self-auto">
          <span className="text-xs text-slate-500">Status:</span>
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filterStatus === "all" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilterStatus("active")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filterStatus === "active" ? "bg-white text-emerald-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Aktif
            </button>
            <button
              onClick={() => setFilterStatus("deleted")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filterStatus === "deleted" ? "bg-white text-rose-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Deleted
            </button>
          </div>
        </div>
      </div>

      {/* Modern Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1150px] text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                <th className="py-3.5 px-4 font-mono w-16 whitespace-nowrap">ID</th>
                <th className="py-3.5 px-4 whitespace-nowrap w-20">Foto</th>
                <th className="py-3.5 px-4 whitespace-nowrap min-w-[180px]">Nama Lengkap</th>
                <th className="py-3.5 px-4 whitespace-nowrap min-w-[140px]">Peran</th>
                <th className="py-3.5 px-4 min-w-[180px]">Jabatan</th>
                <th className="py-3.5 px-4 whitespace-nowrap min-w-[160px]">Sosial Media</th>
                <th className="py-3.5 px-4 font-mono text-emerald-800 bg-emerald-50/40 whitespace-nowrap w-44">created_at</th>
                <th className="py-3.5 px-4 font-mono text-blue-800 bg-blue-50/40 whitespace-nowrap w-44">updated_at</th>
                <th className="py-3.5 px-4 font-mono text-rose-800 bg-rose-50/40 whitespace-nowrap w-44">deleted_at</th>
                <th className="py-3.5 px-4 text-right whitespace-nowrap w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={10} className="py-10 text-center text-slate-400">
                    <div className="inline-flex items-center gap-2 text-slate-600">
                      <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                      <span>Memuat data tim dari PostgreSQL...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-slate-400">
                    Belum ada anggota tim di database. Klik tombol &quot;Tambah Anggota Tim&quot; untuk menambahkan!
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => {
                  const isDeleted = Boolean(item.deleted_at);
                  return (
                    <tr
                      key={item.id_tim_kami}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isDeleted ? "bg-rose-50/30 text-slate-400" : ""
                      }`}
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-700 whitespace-nowrap">
                        #{item.id_tim_kami}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                          {item.foto ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={item.foto}
                              alt={item.nama_depan}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="font-bold text-xs text-blue-600">
                              {item.nama_depan.charAt(0)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {item.nama_depan} {item.nama_belakang}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap leading-none bg-blue-50 text-[#0062E0] border border-blue-200 shadow-2xs">
                          {item.peran}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {item.jabatan}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {item.linkedin && (
                            <a
                              href={item.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center text-[10px] bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-md font-semibold whitespace-nowrap hover:bg-sky-100"
                            >
                              LinkedIn
                            </a>
                          )}
                          {item.instagram && (
                            <a
                              href={item.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center text-[10px] bg-pink-50 text-pink-700 border border-pink-200 px-2.5 py-1 rounded-md font-semibold whitespace-nowrap hover:bg-pink-100"
                            >
                              Instagram
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap bg-emerald-50/20">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap bg-blue-50/20">
                        {formatDate(item.updated_at)}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] whitespace-nowrap bg-rose-50/20">
                        {isDeleted ? (
                          <span className="inline-flex items-center gap-1.5 text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-full font-semibold text-[10px] whitespace-nowrap border border-rose-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                            {formatDate(item.deleted_at)}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold text-[11px] whitespace-nowrap border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Aktif
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            title="Edit Anggota Tim"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleOpenConfirm(item)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              isDeleted
                                ? "text-emerald-600 hover:bg-emerald-50"
                                : "text-rose-500 hover:bg-rose-50"
                            }`}
                            title={isDeleted ? "Pulihkan Anggota" : "Soft Delete"}
                          >
                            {isDeleted ? (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah / Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editingItem ? "Edit Data Anggota Tim" : "Tambah Anggota Tim"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ahmad"
                    value={formNamaDepan}
                    onChange={(e) => setFormNamaDepan(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Fauzan"
                    value={formNamaBelakang}
                    onChange={(e) => setFormNamaBelakang(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <ImageUpload
                label="Foto Profil Tim"
                value={formFoto}
                onChange={setFormFoto}
                shape="circle"
                helperText="Format: JPG, PNG, WebP (maks. 2MB)"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Peran (Role)
                  </label>
                  <select
                    required
                    value={formPeran}
                    onChange={(e) => setFormPeran(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                  >
                    <option value="">-- Pilih Peran / Role --</option>
                    {ROLE_OPTIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                    {formPeran && !ROLE_OPTIONS.includes(formPeran) && (
                      <option value={formPeran}>{formPeran}</option>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jabatan (Title)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Misal: Senior Fullstack Engineer"
                    value={formJabatan}
                    onChange={(e) => setFormJabatan(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    LinkedIn (Linkind)
                  </label>
                  <input
                    type="text"
                    placeholder="https://linkedin.com/in/username"
                    value={formLinkedin}
                    onChange={(e) => setFormLinkedin(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Instagram
                  </label>
                  <input
                    type="text"
                    placeholder="https://instagram.com/username"
                    value={formInstagram}
                    onChange={(e) => setFormInstagram(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div>Kolom otomatis PostgreSQL:</div>
                <div className="font-mono text-[10px] text-blue-600">
                  created_at: {editingItem ? formatDate(editingItem.created_at) : "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"}
                </div>
                <div className="font-mono text-[10px] text-blue-600">
                  updated_at: CURRENT_TIMESTAMP (otomatis terupdate)
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0062E0] hover:bg-[#004eb3] shadow-sm cursor-pointer"
                >
                  {editingItem ? "Simpan Perubahan" : "Tambahkan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Konfirmasi Hapus / Pulihkan Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={
          confirmModal.action === "delete"
            ? "Konfirmasi Hapus Anggota Tim"
            : "Konfirmasi Pulihkan Anggota Tim"
        }
        message={
          confirmModal.action === "delete"
            ? `Apakah Anda yakin ingin menghapus "${confirmModal.item?.nama_depan} ${confirmModal.item?.nama_belakang}" dari daftar tim? Data akan ditandai soft delete dan dapat dipulihkan sewaktu-waktu.`
            : `Apakah Anda yakin ingin memulihkan kembali "${confirmModal.item?.nama_depan} ${confirmModal.item?.nama_belakang}" ke daftar aktif?`
        }
        confirmLabel={
          confirmModal.action === "delete" ? "Ya, Hapus Data" : "Ya, Pulihkan Data"
        }
        variant={confirmModal.action === "delete" ? "danger" : "success"}
        onConfirm={handleConfirmAction}
        onCancel={() => setConfirmModal({ isOpen: false, item: null, action: "delete" })}
      />
    </div>
  );
}
