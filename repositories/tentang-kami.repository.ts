import pool from "@/lib/db";
import { TentangKami } from "@/types/admin";

export async function findTentangKami(includeDeleted = false): Promise<TentangKami[]> {
  const query = includeDeleted
    ? "SELECT * FROM tentang_kami ORDER BY id_tentang_kami DESC"
    : "SELECT * FROM tentang_kami WHERE deleted_at IS NULL ORDER BY id_tentang_kami DESC";

  const result = await pool.query<TentangKami>(query);
  return result.rows;
}

export async function findTentangKamiById(id: number): Promise<TentangKami | null> {
  const result = await pool.query<TentangKami>(
    "SELECT * FROM tentang_kami WHERE id_tentang_kami = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function insertTentangKami(
  data: Omit<TentangKami, "id_tentang_kami" | "created_at" | "updated_at" | "deleted_at">
): Promise<TentangKami> {
  const result = await pool.query<TentangKami>(
    `INSERT INTO tentang_kami (deskripsi)
     VALUES ($1)
     RETURNING *`,
    [data.deskripsi]
  );
  return result.rows[0];
}

export async function updateTentangKami(
  id: number,
  data: Partial<Omit<TentangKami, "id_tentang_kami" | "created_at" | "updated_at" | "deleted_at">>
): Promise<TentangKami | null> {
  const result = await pool.query<TentangKami>(
    `UPDATE tentang_kami
     SET
       deskripsi = COALESCE($1, deskripsi),
       updated_at = CURRENT_TIMESTAMP
     WHERE id_tentang_kami = $2
     RETURNING *`,
    [data.deskripsi ?? null, id]
  );
  return result.rows[0] || null;
}

export async function softDeleteTentangKami(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE tentang_kami SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id_tentang_kami = $1 AND deleted_at IS NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}

export async function restoreTentangKami(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE tentang_kami SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id_tentang_kami = $1 AND deleted_at IS NOT NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}
