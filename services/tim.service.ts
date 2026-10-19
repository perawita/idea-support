import * as timRepo from "@/repositories/tim.repository";
import { TimKami } from "@/types/admin";

export async function getAllTim(includeDeleted = false) {
  return await timRepo.findTim(includeDeleted);
}

export async function getTimById(id: number) {
  if (!id || id <= 0) throw new Error("ID tim tidak valid");
  const tim = await timRepo.findTimById(id);
  if (!tim) throw new Error("Anggota tim tidak ditemukan");
  return tim;
}

export async function createNewTim(data: Omit<TimKami, "id_tim_kami" | "created_at" | "updated_at" | "deleted_at">) {
  if (!data.nama_depan?.trim()) throw new Error("Nama depan wajib diisi");
  if (!data.nama_belakang?.trim()) throw new Error("Nama belakang wajib diisi");
  if (!data.peran?.trim()) throw new Error("Peran (Role) wajib dipilih");
  if (!data.jabatan?.trim()) throw new Error("Jabatan wajib diisi");

  return await timRepo.insertTim(data);
}

export async function updateTim(id: number, data: Partial<Omit<TimKami, "id_tim_kami" | "created_at" | "updated_at" | "deleted_at">>) {
  if (!id || id <= 0) throw new Error("ID tim tidak valid");
  const existing = await timRepo.findTimById(id);
  if (!existing) throw new Error("Anggota tim tidak ditemukan");

  return await timRepo.updateTim(id, data);
}

export async function deleteTim(id: number) {
  if (!id || id <= 0) throw new Error("ID tim tidak valid");
  const isDeleted = await timRepo.softDeleteTim(id);
  if (!isDeleted) throw new Error("Anggota tim tidak ditemukan atau sudah dihapus");
  return { message: "Anggota tim berhasil dihapus" };
}

export async function restoreTim(id: number) {
  if (!id || id <= 0) throw new Error("ID tim tidak valid");
  const isRestored = await timRepo.restoreTim(id);
  if (!isRestored) throw new Error("Anggota tim tidak ditemukan atau gagal dipulihkan");
  return { message: "Anggota tim berhasil dipulihkan" };
}
