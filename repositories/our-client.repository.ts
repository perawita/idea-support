import pool from "@/lib/db";
import { Client, CreateClientDTO, UpdateClientDTO } from "@/types/client";


/**
 * Mengambil semua data client yang belum dihapus (deleted_at IS NULL)
 * @returns QueryResult<Client>;
 */
export async function findClients(): Promise<Client[]> {
    const result = await pool.query<Client>(
        "SELECT * FROM clients WHERE deleted_at IS NULL ORDER BY id DESC"
    );
    return result.rows;
}

/**
 * Mengambil data client berdasarkan id, jika tidak ditemukan akan mengembalikan null
 * @param id: number
 * @returns Promise<Client | null>
 */
export async function findClientById(id: number): Promise<Client | null> {
    const result = await pool.query<Client>(
        "SELECT * FROM clients WHERE id = $1 AND deleted_at IS NULL",
        [id]
    );
    return result.rows[0] || null;
}

/**
 * Membuat data client baru ke dalam database, mengembalikan data client yang baru dibuat
 * @param data 
 * @returns 
 */
export async function insertClient(data: CreateClientDTO): Promise<Client> {
    const result = await pool.query<Client>(
        "INSERT INTO clients (name, logo_url) VALUES ($1, $2) RETURNING *",
        [data.name, data.logo_url || null]
    );
    return result.rows[0];
}

/**
 * Memperbarui data client berdasarkan id, mengembalikan data client yang diperbarui atau null jika tidak ditemukan
 * @param id 
 * @param data 
 * @returns 
 */
export async function updateClient(id: number, data: UpdateClientDTO): Promise<Client | null> {
    const result = await pool.query<Client>(
        `UPDATE clients
        SET
            name = COALESCE($1, name),
            logo_url = COALESCE($2, logo_url),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $3 AND deleted_at IS NULL
        RETURNING *`,
        [data.name ?? null, data.logo_url ?? null, id]
    );
    return result.rows[0] || null;
}

/**
 * Menghapus data client berdasarkan id dengan metode soft delete (mengisi kolom deleted_at dengan timestamp saat ini), mengembalikan true jika berhasil dihapus, false jika tidak ditemukan atau sudah dihapus
 * @param id 
 * @returns 
 */
export async function softDeleteClient(id: number): Promise<boolean> {
    const result = await pool.query(
        "UPDATE clients SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NULL",
        [id]
    );
    return (result.rowCount ?? 0) > 0;
}
