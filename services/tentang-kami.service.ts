import * as tentangKamiRepo from "@/repositories/tentang-kami.repository";
import { TentangKami } from "@/types/admin";

export async function getAllTentangKami(includeDeleted = false) {
  return await tentangKamiRepo.findTentangKami(includeDeleted);
}

export async function getTentangKamiById(id: number) {
  if (!id || id <= 0) throw new Error("ID tentang kami tidak valid");
  const data = await tentangKamiRepo.findTentangKamiById(id);
  if (!data) throw new Error("Profil tentang kami tidak ditemukan");
  return data;
}

export async function createNewTentangKami(
  data: Omit<TentangKami, "id_tentang_kami" | "created_at" | "updated_at" | "deleted_at">
) {
  if (!data.deskripsi?.trim()) {
    throw new Error("Deskripsi tentang kami wajib diisi");
  }

  return await tentangKamiRepo.insertTentangKami(data);
}

export async function updateTentangKami(
  id: number,
  data: Partial<Omit<TentangKami, "id_tentang_kami" | "created_at" | "updated_at" | "deleted_at">>
) {
  if (!id || id <= 0) throw new Error("ID tentang kami tidak valid");
  const existing = await tentangKamiRepo.findTentangKamiById(id);
  if (!existing) throw new Error("Profil tentang kami tidak ditemukan");

  return await tentangKamiRepo.updateTentangKami(id, data);
}

export async function deleteTentangKami(id: number) {
  if (!id || id <= 0) throw new Error("ID tentang kami tidak valid");
  const isDeleted = await tentangKamiRepo.softDeleteTentangKami(id);
  if (!isDeleted) throw new Error("Profil tentang kami tidak ditemukan atau sudah dihapus");
  return { message: "Profil tentang kami berhasil dihapus" };
}

export async function restoreTentangKami(id: number) {
  if (!id || id <= 0) throw new Error("ID tentang kami tidak valid");
  const isRestored = await tentangKamiRepo.restoreTentangKami(id);
  if (!isRestored) throw new Error("Profil tentang kami tidak ditemukan atau gagal dipulihkan");
  return { message: "Profil tentang kami berhasil dipulihkan" };
}
