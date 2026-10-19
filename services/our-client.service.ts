import * as clientRepo from "@/repositories/our-client.repository";
import { CreateClientDTO, UpdateClientDTO } from "@/types/client";

/**
 * Mengambil semua data client (opsi includeDeleted untuk halaman admin)
 * @param includeDeleted: boolean
 * @returns Promise<Client[]>
 */
export async function getAllClients(includeDeleted = false) {
    return await clientRepo.findClients(includeDeleted);
}

/**
 * Mengambil data client berdasarkan id
 * @param id: number
 * @returns Promise<Client | null>
 */
export async function getClientById(id: number) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid");
    }

    const client = await clientRepo.findClientById(id);
    if (!client) {
        throw new Error("Client tidak ditemukan");
    }

    return client;
}

/**
 * Menambah data client baru ke dalam database
 * @param payload: CreateClientDTO
 * @returns Promise<Client>
 */
export async function createNewClient(payload: CreateClientDTO) {
    const name = payload.nama_klien || payload.name;
    if (!name || name.trim() === "") {
        throw new Error("Nama client wajib diisi");
    }
    return await clientRepo.insertClient(payload);
}

/**
 * Perbarui data client berdasarkan id
 * @param id: number
 * @param payload: UpdateClientDTO
 */
export async function updateClient(id: number, payload: UpdateClientDTO) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid");
    }

    const existing = await clientRepo.findClientById(id);
    if (!existing) {
        throw new Error("Client tidak ditemukan");
    }

    return await clientRepo.updateClient(id, payload);
}

/**
 * Menghapus data client berdasarkan id dengan metode soft delete
 * @param id: number
 */
export async function deleteClient(id: number) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid");
    }

    const isDeleted = await clientRepo.softDeleteClient(id);
    if (!isDeleted) {
        throw new Error("Client tidak ditemukan atau sudah dihapus");
    }
    return { message: "Client berhasil dihapus" };
}

/**
 * Memulihkan data client yang di-soft-delete
 * @param id: number
 */
export async function restoreClient(id: number) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid");
    }

    const isRestored = await clientRepo.restoreClient(id);
    if (!isRestored) {
        throw new Error("Client tidak ditemukan atau gagal dipulihkan");
    }
    return { message: "Client berhasil dipulihkan" };
}