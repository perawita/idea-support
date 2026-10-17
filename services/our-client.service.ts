import * as clientRepo from "@/repositories/our-client.repository";
import { CreateClientDTO, UpdateClientDTO } from "@/types/client";

// logic ambil semua client
export async function getAllClients() {
    return await clientRepo.findClients();
}

// logic ambil client by id (validasi id)
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

// logic tambah client (terdapat validasi data wajib)
export async function createNewClient(payload: CreateClientDTO) {
    if (!payload.name || payload.name.trim() === "") {
        throw new Error("Nama client wajib diisi");
    }
    return await clientRepo.insertClient(payload);
}

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

// export async function getAllClients() {
//     // panggil fungsi dari repositories
//     const clients = await clientRepo.getClientsFromDb();
//     return clients;
// }