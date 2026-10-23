import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as layananService from "@/services/layanan.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await layananService.getAllLayanan(includeDeleted);
    return successResponse(data, "Data layanan berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error layanan GET:", err);
    return errorResponse(err.message || "Gagal mengambil data layanan", err.statusCode || 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id || body.id_layanan);
      if (!id) return errorResponse("ID layanan tidak valid", 400);
      const data = await layananService.restoreLayanan(id);
      return successResponse(data, "Layanan berhasil dipulihkan");
    }

    const data = await layananService.createNewLayanan(body);
    return successResponse(data, "Layanan berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error layanan POST:", err);
    return errorResponse(err.message || "Gagal menambahkan layanan", err.statusCode || 500);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_layanan);
    if (!id) return errorResponse("ID layanan tidak valid", 400);

    const data = await layananService.updateLayanan(id, payload);
    return successResponse(data, "Data layanan berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error layanan PUT:", err);
    return errorResponse(err.message || "Gagal memperbarui layanan", err.statusCode || 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_layanan);
    if (!id) return errorResponse("ID layanan tidak valid", 400);

    const data = await layananService.deleteLayanan(id);
    return successResponse(data, "Layanan berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error layanan DELETE:", err);
    return errorResponse(err.message || "Gagal menghapus layanan", err.statusCode || 500);
  }
}
