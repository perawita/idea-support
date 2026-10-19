// =======================================================
// Type Definitions untuk Data Admin IDEA SUPPORT
// Seluruh entitas dilengkapi kolom audit & soft delete:
// created_at, updated_at, deleted_at
// =======================================================

export interface BaseAuditFields {
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

// 1. Komentar Klien Kami
export interface KomentarKlien extends BaseAuditFields {
  id: number;
  id_klien: number | null;
  nama_klien?: string | null;
  judul: string | null;
  komentar: string;
}

// 2. Layanan
export interface Layanan extends BaseAuditFields {
  id_layanan: number;
  tipe_layanan: string;
  judul_layanan: string;
  deskripsi: string;
  kategori: string;
}

// 3. Portofolio
export interface Portofolio extends BaseAuditFields {
  id_portofolio: number;
  kategori: string;
  judul: string;
  tipe: string;
  media: string;
}

// 4. Tentang Kami
export interface TentangKami extends BaseAuditFields {
  id_tentang_kami: number;
  deskripsi: string;
}

// 5. Tim Kami
export interface TimKami extends BaseAuditFields {
  id_tim_kami: number;
  foto: string | null;
  nama_depan: string;
  nama_belakang: string;
  peran: string;
  jabatan: string;
  linkedin: string;
  instagram: string;
}

// 6. Klien Kami
export interface KlienKami extends BaseAuditFields {
  id: number;
  nama_klien: string;
  logo_klien: string | null;
}
