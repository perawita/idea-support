import * as clientRepo from "@/repositories/our-client.repository";
import { CreateClientDTO, UpdateClientDTO } from "@/types/client";


/**
 * Mengambil semua data client yang belum dihapus (deleted_at IS NULL)
 * @returns Promise<Client[]>
 */
export async function getAllClients() {
    return await clientRepo.findClients();
}

/**
 * Mengambil data client berdasarkan id, jika tidak ditemukan akan mengembalikan null
 * @param id 
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
 * Menambah data client baru ke dalam database, mengembalikan data client yang baru dibuat
 * @param payload: CreateClientDTO
 * @returns Promise<Client>
 */
export async function createNewClient(payload: CreateClientDTO) {
    if (!payload.name || payload.name.trim() === "") {
        throw new Error("Nama client wajib diisi");
    }
    return await clientRepo.insertClient(payload);
}

/**
 * Perbarui data client berdasarkan id, mengembalikan data 
 * client yang diperbarui atau error jika tidak ditemukan
 * @param id: number
 * @param payload: UpdateClientDTO
 * @returns 
 */
export async function updateClient(id: number, payload: UpdateClientDTO) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid");
    }

    // memastikan data client ada sebelum update
    const existing = await clientRepo.findClientById(id);
    if (!existing) {
        throw new Error("Client tidak ditemukan");
    }

    return await clientRepo.updateClient(id, payload);
}

/**
 * Menghapus data client berdasarkan id dengan metode soft delete 
 * (mengisi kolom deleted_at dengan timestamp saat ini), mengembalikan 
 * pesan sukses atau error jika tidak ditemukan
 * @param id: number
 * @returns Message: string
 */
export async function deleteClient(id: number) {
    if (!id || id <= 0) {
        throw new Error("ID client tidak valid")
    }

    const isDeleted = await clientRepo.softDeleteClient(id);
    if (!isDeleted) {
        throw new Error("Client tidak ditemukan atau sudah dihapus")
    }
    return { Message: "Client berhasil dihapus" };
}