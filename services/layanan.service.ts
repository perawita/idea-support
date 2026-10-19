import * as layananRepo from "@/repositories/layanan.repository";
import { Layanan } from "@/types/admin";

export async function getAllLayanan(includeDeleted = false) {
  return await layananRepo.findLayanan(includeDeleted);
}

export async function getLayananById(id: number) {
  if (!id || id <= 0) throw new Error("ID layanan tidak valid");
  const data = await layananRepo.findLayananById(id);
  if (!data) throw new Error("Layanan tidak ditemukan");
  return data;
}

export async function createNewLayanan(
  data: Omit<Layanan, "id_layanan" | "created_at" | "updated_at" | "deleted_at">
) {
  if (!data.judul_layanan?.trim()) throw new Error("Judul layanan wajib diisi");
  if (!data.tipe_layanan?.trim()) throw new Error("Tipe layanan wajib diisi");
  if (!data.deskripsi?.trim()) throw new Error("Deskripsi layanan wajib diisi");
  if (!data.kategori?.trim()) throw new Error("Kategori layanan wajib diisi");

  return await layananRepo.insertLayanan(data);
}

export async function updateLayanan(
  id: number,
  data: Partial<Omit<Layanan, "id_layanan" | "created_at" | "updated_at" | "deleted_at">>
) {
  if (!id || id <= 0) throw new Error("ID layanan tidak valid");
  const existing = await layananRepo.findLayananById(id);
  if (!existing) throw new Error("Layanan tidak ditemukan");

  return await layananRepo.updateLayanan(id, data);
}

export async function deleteLayanan(id: number) {
  if (!id || id <= 0) throw new Error("ID layanan tidak valid");
  const isDeleted = await layananRepo.softDeleteLayanan(id);
  if (!isDeleted) throw new Error("Layanan tidak ditemukan atau sudah dihapus");
  return { message: "Layanan berhasil dihapus" };
}

export async function restoreLayanan(id: number) {
  if (!id || id <= 0) throw new Error("ID layanan tidak valid");
  const isRestored = await layananRepo.restoreLayanan(id);
  if (!isRestored) throw new Error("Layanan tidak ditemukan atau gagal dipulihkan");
  return { message: "Layanan berhasil dipulihkan" };
}
