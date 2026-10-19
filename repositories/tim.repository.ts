import pool from "@/lib/db";
import { TimKami } from "@/types/admin";

export async function findTim(includeDeleted = false): Promise<TimKami[]> {
  const query = includeDeleted
    ? "SELECT * FROM tim_kami ORDER BY id_tim_kami DESC"
    : "SELECT * FROM tim_kami WHERE deleted_at IS NULL ORDER BY id_tim_kami DESC";

  const result = await pool.query<TimKami>(query);
  return result.rows;
}

export async function findTimById(id: number): Promise<TimKami | null> {
  const result = await pool.query<TimKami>(
    "SELECT * FROM tim_kami WHERE id_tim_kami = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function insertTim(data: Omit<TimKami, "id_tim_kami" | "created_at" | "updated_at" | "deleted_at">): Promise<TimKami> {
  const result = await pool.query<TimKami>(
    `INSERT INTO tim_kami (foto, nama_depan, nama_belakang, peran, jabatan, linkedin, instagram)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [
      data.foto || null,
      data.nama_depan,
      data.nama_belakang,
      data.peran,
      data.jabatan,
      data.linkedin || "",
      data.instagram || "",
    ]
  );
  return result.rows[0];
}

export async function updateTim(
  id: number,
  data: Partial<Omit<TimKami, "id_tim_kami" | "created_at" | "updated_at" | "deleted_at">>
): Promise<TimKami | null> {
  const result = await pool.query<TimKami>(
    `UPDATE tim_kami
     SET
       foto = COALESCE($1, foto),
       nama_depan = COALESCE($2, nama_depan),
       nama_belakang = COALESCE($3, nama_belakang),
       peran = COALESCE($4, peran),
       jabatan = COALESCE($5, jabatan),
       linkedin = COALESCE($6, linkedin),
       instagram = COALESCE($7, instagram),
       updated_at = CURRENT_TIMESTAMP
     WHERE id_tim_kami = $8
     RETURNING *`,
    [
      data.foto !== undefined ? data.foto : null,
      data.nama_depan ?? null,
      data.nama_belakang ?? null,
      data.peran ?? null,
      data.jabatan ?? null,
      data.linkedin ?? null,
      data.instagram ?? null,
      id,
    ]
  );
  return result.rows[0] || null;
}

export async function softDeleteTim(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE tim_kami SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id_tim_kami = $1 AND deleted_at IS NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}

export async function restoreTim(id: number): Promise<boolean> {
  const result = await pool.query(
    "UPDATE tim_kami SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id_tim_kami = $1 AND deleted_at IS NOT NULL",
    [id]
  );
  return (result.rowCount ?? 0) > 0;
}
