import pool from "@/lib/db";
import { Client, CreateClientDTO, UpdateClientDTO } from "@/types/client";

/**
 * Mengambil semua data klien (dengan opsi menyertakan yang di-soft-delete)
 * @param includeDeleted: boolean
 * @returns Promise<Client[]>
 */
export async function findClients(includeDeleted = false): Promise<Client[]> {
    const query = includeDeleted
        ? "SELECT id, nama_klien, logo_klien, created_at, updated_at, deleted_at FROM klien_kami ORDER BY id DESC"
        : "SELECT id, nama_klien, logo_klien, created_at, updated_at, deleted_at FROM klien_kami WHERE deleted_at IS NULL ORDER BY id DESC";

    const result = await pool.query<Client>(query);
    return result.rows.map((row) => ({
        ...row,
        name: row.nama_klien,
        logo_url: row.logo_klien,
    }));
}

/**
 * Mengambil data klien berdasarkan id
 * @param id: number
 * @returns Promise<Client | null>
 */
export async function findClientById(id: number): Promise<Client | null> {
    const result = await pool.query<Client>(
        "SELECT id, nama_klien, logo_klien, created_at, updated_at, deleted_at FROM klien_kami WHERE id = $1",
        [id]
    );
    if (!result.rows[0]) return null;

    const row = result.rows[0];
    return {
        ...row,
        name: row.nama_klien,
        logo_url: row.logo_klien,
    };
}

/**
 * Membuat data klien baru ke dalam database
 * @param data: CreateClientDTO
 * @returns Promise<Client>
 */
export async function insertClient(data: CreateClientDTO): Promise<Client> {
    const nama = data.nama_klien || data.name || "";
    const logo = data.logo_klien ?? data.logo_url ?? null;

    const result = await pool.query<Client>(
        "INSERT INTO klien_kami (nama_klien, logo_klien) VALUES ($1, $2) RETURNING id, nama_klien, logo_klien, created_at, updated_at, deleted_at",
        [nama, logo]
    );

    const row = result.rows[0];
    return {
        ...row,
        name: row.nama_klien,
        logo_url: row.logo_klien,
    };
}

/**
 * Memperbarui data klien berdasarkan id
 * @param id: number
 * @param data: UpdateClientDTO
 * @returns Promise<Client | null>
 */
export async function updateClient(id: number, data: UpdateClientDTO): Promise<Client | null> {
    const nama = data.nama_klien ?? data.name;
    const logo = data.logo_klien ?? data.logo_url;

    const result = await pool.query<Client>(
        `UPDATE klien_kami
         SET
             nama_klien = COALESCE($1, nama_klien),
             logo_klien = COALESCE($2, logo_klien),
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $3
         RETURNING id, nama_klien, logo_klien, created_at, updated_at, deleted_at`,
        [nama ?? null, logo ?? null, id]
    );

    if (!result.rows[0]) return null;
    const row = result.rows[0];
    return {
        ...row,
        name: row.nama_klien,
        logo_url: row.logo_klien,
    };
}

/**
 * Menghapus data klien dengan metode soft delete (mengisi deleted_at)
 * @param id: number
 * @returns Promise<boolean>
 */
export async function softDeleteClient(id: number): Promise<boolean> {
    const result = await pool.query(
        "UPDATE klien_kami SET deleted_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NULL",
        [id]
    );
    return (result.rowCount ?? 0) > 0;
}

/**
 * Memulihkan data klien yang sebelumnya di-soft-delete (mengosongkan deleted_at)
 * @param id: number
 * @returns Promise<boolean>
 */
export async function restoreClient(id: number): Promise<boolean> {
    const result = await pool.query(
        "UPDATE klien_kami SET deleted_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NOT NULL",
        [id]
    );
    return (result.rowCount ?? 0) > 0;
}
