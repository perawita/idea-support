import * as komentarRepo from "@/repositories/komentar-klien.repository";
import { KomentarKlien } from "@/types/admin";

export async function getAllKomentarKlien(includeDeleted = false) {
  return await komentarRepo.findKomentarKlien(includeDeleted);
}

export async function getKomentarKlienById(id: number) {
  if (!id || id <= 0) throw new Error("ID komentar klien tidak valid");
  const data = await komentarRepo.findKomentarKlienById(id);
  if (!data) throw new Error("Komentar klien tidak ditemukan");
  return data;
}

export async function createNewKomentarKlien(
  data: Omit<KomentarKlien, "id" | "nama_klien" | "created_at" | "updated_at" | "deleted_at">
) {
  if (!data.komentar?.trim()) {
    throw new Error("Isi ulasan/komentar klien wajib diisi");
  }

  const payload = {
    id_klien: data.id_klien ? Number(data.id_klien) : null,
    judul: data.judul?.trim() || null,
    komentar: data.komentar.trim(),
  };

  return await komentarRepo.insertKomentarKlien(payload);
}

export async function updateKomentarKlien(
  id: number,
  data: Partial<Omit<KomentarKlien, "id" | "nama_klien" | "created_at" | "updated_at" | "deleted_at">>
) {
  if (!id || id <= 0) throw new Error("ID komentar klien tidak valid");
  const existing = await komentarRepo.findKomentarKlienById(id);
  if (!existing) throw new Error("Komentar klien tidak ditemukan");

  const payload: Partial<Omit<KomentarKlien, "id" | "nama_klien" | "created_at" | "updated_at" | "deleted_at">> = {};
  if (data.id_klien !== undefined) {
    payload.id_klien = data.id_klien ? Number(data.id_klien) : null;
  }
  if (data.judul !== undefined) {
    payload.judul = data.judul ? data.judul.trim() : null;
  }
  if (data.komentar !== undefined) {
    payload.komentar = data.komentar.trim();
  }

  return await komentarRepo.updateKomentarKlien(id, payload);
}

export async function deleteKomentarKlien(id: number) {
  if (!id || id <= 0) throw new Error("ID komentar klien tidak valid");
  const isDeleted = await komentarRepo.softDeleteKomentarKlien(id);
  if (!isDeleted) throw new Error("Komentar klien tidak ditemukan atau sudah dihapus");
  return { message: "Komentar klien berhasil dihapus" };
}

export async function restoreKomentarKlien(id: number) {
  if (!id || id <= 0) throw new Error("ID komentar klien tidak valid");
  const isRestored = await komentarRepo.restoreKomentarKlien(id);
  if (!isRestored) throw new Error("Komentar klien tidak ditemukan atau gagal dipulihkan");
  return { message: "Komentar klien berhasil dipulihkan" };
}
