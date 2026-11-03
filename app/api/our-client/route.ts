import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as clientService from "@/services/our-client.service";

/**
 * Mengambil semua data client
 * Mendukung query param ?all=true untuk menyertakan data yang terhapus (soft delete)
 * GET /api/our-client?all=true
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await clientService.getAllClients(includeDeleted);
    return successResponse(data, "Data client berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error:", err);
    return errorResponse(err.message || "Gagal mengambil data dari database", err.statusCode || 500);
  }
}

/**
 * Menambah client baru atau aksi spesifik (restore/getClientById)
 * POST /api/our-client
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id);
      if (!id) {
        return errorResponse("ID client tidak ditemukan dalam payload", 400);
      }
      const data = await clientService.restoreClient(id);
      return successResponse(data, "Client berhasil dipulihkan");
    }

    if (body.action === "getClientById") {
      const id = Number(body.id);
      if (!id) {
        return errorResponse("ID client tidak ditemukan dalam payload", 400);
      }
      const data = await clientService.getClientById(id);
      return successResponse(data, "Data client berhasil diambil");
    }

    // Default: create new client
    const data = await clientService.createNewClient(body);
    return successResponse(data, "Data client berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error:", err);
    return errorResponse(err.message || "Gagal menambahkan data ke database", err.statusCode || 500);
  }
}

/**
 * Memperbarui data client berdasarkan id
 * PUT /api/our-client
 */
export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id);
    if (!id) {
      return errorResponse("ID client tidak ditemukan dalam payload", 400);
    }
    const data = await clientService.updateClient(id, payload);
    return successResponse(data, "Data client berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error:", err);
    return errorResponse(err.message || "Gagal memperbarui data di database", err.statusCode || 500);
  }
}

/**
 * Menghapus data client (soft delete) berdasarkan id
 * DELETE /api/our-client
 */
export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id);
    if (!id) {
      return errorResponse("ID client tidak ditemukan dalam payload", 400);
    }
    const data = await clientService.deleteClient(id);
    return successResponse(data, "Data client berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error:", err);
    return errorResponse(err.message || "Gagal menghapus data di database", err.statusCode || 500);
  }
}
