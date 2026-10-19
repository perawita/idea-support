import pool from "@/lib/db";
import { KomentarKlien } from "@/types/admin";

export async function findKomentarKlien(includeDeleted = false): Promise<KomentarKlien[]> {
  const query = includeDeleted
    ? `SELECT kk.*, k.nama_klien 
       FROM komentar_klien_kami kk
       LEFT JOIN klien_kami k ON k.id = kk.id_klien
       ORDER BY kk.id DESC`
    : `SELECT kk.*, k.nama_klien 
       FROM komentar_klien_kami kk
       LEFT JOIN klien_kami k ON k.id = kk.id_klien
       WHERE kk.deleted_at IS NULL
       ORDER BY kk.id DESC`;

  const result = await pool.query<KomentarKlien>(query);
  return result.rows;
}

export async function findKomentarKlienById(id: number): Promise<KomentarKlien | null> {
  const result = await pool.query<KomentarKlien>(
    `SELECT kk.*, k.nama_klien 
     FROM komentar_klien_kami kk
     LEFT JOIN klien_kami k ON k.id = kk.id_klien
     WHERE kk.id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

export async function insertKomentarKlien(
  data: Omit<KomentarKlien, "id" | "nama_klien" | "created_at" | "updated_at" | "deleted_at">
): Promise<KomentarKlien> {
  const result = await pool.query<KomentarKlien>(
    `INSERT INTO komentar_klien_kami (id_klien, judul, komentar)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [data.id_klien ?? null, data.judul ?? null, data.komentar]
  );
  return result.rows[0];
}

export async function updateKomentarKlien(
  id: number,
  data: Partial<Omit<KomentarKlien, "id" | "nama_klien" | "created_at" | "updated_at" | "deleted_at">>
): Promise<KomentarKlien | null> {
  const result = await pool.query<KomentarKlien>(
    `UPDATE komentar_klien_kami
     SET
       id_klien = CASE WHEN $1::int IS NOT NULL THEN $1 ELSE id_klien END,
       judul = COALESCE($2, judul),
       komentar = COALESCE($3, komentar),
       updated_at = CURRENT_TIMESTAMP
     WHERE id = $4
     RETURNING *`,
    [
      data.id_klien !== undefined ? data.id_klien : null,
      data.judul ?? null,
      data.komentar ?? null,
      id,
    ]
  );
  return result.rows[0] || null;
}

export async function softDeleteKomentarKlien(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE komentar_klien_kami SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}

export async function restoreKomentarKlien(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE komentar_klien_kami SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NOT NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}
