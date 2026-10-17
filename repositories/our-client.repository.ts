import pool from "@/lib/db";
import { Client, CreateClientDTO, UpdateClientDTO } from "@/types/client";

export async function findClients(): Promise<Client[]> {
    const result = await pool.query<Client>(
        "SELECT * FROM clients WHERE deleted_at IS NULL ORDER BY id DESC"
    );
    return result.rows;
}

// READ (Berdasarkan id)
export async function findClientById(id: number): Promise<Client | null> {
    const result = await pool.query<Client>(
        "SELECT * FROM clients WHERE id = $1 AND deleted_at IS NULL",
        [id]
    );
    return result.rows[0] || null;
}

// CREATE
export async function insertClient(data: CreateClientDTO): Promise<Client> {
    const result = await pool.query<Client>(
        "INSERT INTO clients (name, logo_url) VALUES ($1, $2) RETURNING *",
        [data.name, data.logo_url || null]
    );
    return result.rows[0];
}

// UPDATE
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

// DELETE (Soft delete)
export async function softDeleteClient(id: number): Promise<boolean> {
    const result = await pool.query(
        "UPDATE clients SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NULL",
        [id]
    );
    return (result.rowCount ?? 0) > 0;
}
// export async function getClientsFromDb() {
//     // eksekusi query
//     const result = await pool.query("SELECT * FROM clients ORDER BY id DESC");
//     return result.rows;
// }