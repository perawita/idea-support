import * as portofolioRepo from "@/repositories/portofolio.repository";
import { Portofolio } from "@/types/admin";

export async function getAllPortofolio(includeDeleted = false) {
  return await portofolioRepo.findPortofolio(includeDeleted);
}

export async function getPortofolioById(id: number) {
  if (!id || id <= 0) throw new Error("ID portofolio tidak valid");
  const data = await portofolioRepo.findPortofolioById(id);
  if (!data) throw new Error("Portofolio tidak ditemukan");
  return data;
}

export async function createNewPortofolio(
  data: Omit<Portofolio, "id_portofolio" | "created_at" | "updated_at" | "deleted_at">
) {
  if (!data.judul?.trim()) throw new Error("Judul portofolio wajib diisi");
  if (!data.kategori?.trim()) throw new Error("Kategori portofolio wajib diisi");
  if (!data.tipe?.trim()) throw new Error("Tipe portofolio wajib diisi");
  if (!data.media?.trim()) throw new Error("Media / Gambar portofolio wajib diupload");

  return await portofolioRepo.insertPortofolio(data);
}

export async function updatePortofolio(
  id: number,
  data: Partial<Omit<Portofolio, "id_portofolio" | "created_at" | "updated_at" | "deleted_at">>
) {
  if (!id || id <= 0) throw new Error("ID portofolio tidak valid");
  const existing = await portofolioRepo.findPortofolioById(id);
  if (!existing) throw new Error("Portofolio tidak ditemukan");

  return await portofolioRepo.updatePortofolio(id, data);
}

export async function deletePortofolio(id: number) {
  if (!id || id <= 0) throw new Error("ID portofolio tidak valid");
  const isDeleted = await portofolioRepo.softDeletePortofolio(id);
  if (!isDeleted) throw new Error("Portofolio tidak ditemukan atau sudah dihapus");
  return { message: "Portofolio berhasil dihapus" };
}

export async function restorePortofolio(id: number) {
  if (!id || id <= 0) throw new Error("ID portofolio tidak valid");
  const isRestored = await portofolioRepo.restorePortofolio(id);
  if (!isRestored) throw new Error("Portofolio tidak ditemukan atau gagal dipulihkan");
  return { message: "Portofolio berhasil dipulihkan" };
}
