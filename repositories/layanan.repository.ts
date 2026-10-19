import pool from "@/lib/db";
import { Layanan } from "@/types/admin";

export async function findLayanan(includeDeleted = false): Promise<Layanan[]> {
  const query = includeDeleted
    ? "SELECT * FROM layanan ORDER BY id_layanan DESC"
    : "SELECT * FROM layanan WHERE deleted_at IS NULL ORDER BY id_layanan DESC";

  const result = await pool.query<Layanan>(query);
  return result.rows;
}

export async function findLayananById(id: number): Promise<Layanan | null> {
  const result = await pool.query<Layanan>(
    "SELECT * FROM layanan WHERE id_layanan = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function insertLayanan(
  data: Omit<Layanan, "id_layanan" | "created_at" | "updated_at" | "deleted_at">
): Promise<Layanan> {
  const result = await pool.query<Layanan>(
    `INSERT INTO layanan (tipe_layanan, judul_layanan, deskripsi, kategori)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [data.tipe_layanan, data.judul_layanan, data.deskripsi, data.kategori]
  );
  return result.rows[0];
}

export async function updateLayanan(
  id: number,
  data: Partial<Omit<Layanan, "id_layanan" | "created_at" | "updated_at" | "deleted_at">>
): Promise<Layanan | null> {
  const result = await pool.query<Layanan>(
    `UPDATE layanan
     SET
       tipe_layanan = COALESCE($1, tipe_layanan),
       judul_layanan = COALESCE($2, judul_layanan),
       deskripsi = COALESCE($3, deskripsi),
       kategori = COALESCE($4, kategori),
       updated_at = CURRENT_TIMESTAMP
     WHERE id_layanan = $5
     RETURNING *`,
    [
      data.tipe_layanan ?? null,
      data.judul_layanan ?? null,
      data.deskripsi ?? null,
      data.kategori ?? null,
      id,
    ]
  );
  return result.rows[0] || null;
}

export async function softDeleteLayanan(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE layanan SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id_layanan = $1 AND deleted_at IS NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}

export async function restoreLayanan(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE layanan SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id_layanan = $1 AND deleted_at IS NOT NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}
