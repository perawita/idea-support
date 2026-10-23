import pool from "@/lib/db";
import { Portofolio } from "@/types/admin";

export async function findPortofolio(includeDeleted = false): Promise<Portofolio[]> {
  const query = includeDeleted
    ? "SELECT * FROM portofolio ORDER BY id_portofolio DESC"
    : "SELECT * FROM portofolio WHERE deleted_at IS NULL ORDER BY id_portofolio DESC";

  const result = await pool.query<Portofolio>(query);
  return result.rows;
}

export async function findPortofolioById(id: number): Promise<Portofolio | null> {
  const result = await pool.query<Portofolio>(
    "SELECT * FROM portofolio WHERE id_portofolio = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function insertPortofolio(
  data: Omit<Portofolio, "id_portofolio" | "created_at" | "updated_at" | "deleted_at">
): Promise<Portofolio> {
  const result = await pool.query<Portofolio>(
    `INSERT INTO portofolio (kategori, judul, tipe, media)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [data.kategori, data.judul, data.tipe, data.media]
  );
  return result.rows[0];
}

export async function updatePortofolio(
  id: number,
  data: Partial<Omit<Portofolio, "id_portofolio" | "created_at" | "updated_at" | "deleted_at">>
): Promise<Portofolio | null> {
  const result = await pool.query<Portofolio>(
    `UPDATE portofolio
     SET
       kategori = COALESCE($1, kategori),
       judul = COALESCE($2, judul),
       tipe = COALESCE($3, tipe),
       media = COALESCE($4, media),
       updated_at = CURRENT_TIMESTAMP
     WHERE id_portofolio = $5
     RETURNING *`,
    [
      data.kategori ?? null,
      data.judul ?? null,
      data.tipe ?? null,
      data.media ?? null,
      id,
    ]
  );
  return result.rows[0] || null;
}

export async function softDeletePortofolio(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE portofolio SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id_portofolio = $1 AND deleted_at IS NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}

export async function restorePortofolio(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE portofolio SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id_portofolio = $1 AND deleted_at IS NOT NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}
