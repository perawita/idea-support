import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as timService from "@/services/tim.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await timService.getAllTim(includeDeleted);
    return successResponse(data, "Data tim berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tim GET:", err);
    return errorResponse(err.message || "Gagal mengambil data tim", err.statusCode || 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id);
      if (!id) return errorResponse("ID tim tidak valid", 400);
      const data = await timService.restoreTim(id);
      return successResponse(data, "Anggota tim berhasil dipulihkan");
    }

    const data = await timService.createNewTim(body);
    return successResponse(data, "Anggota tim berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tim POST:", err);
    return errorResponse(err.message || "Gagal menambahkan anggota tim", err.statusCode || 500);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_tim_kami);
    if (!id) return errorResponse("ID tim tidak valid", 400);

    const data = await timService.updateTim(id, payload);
    return successResponse(data, "Data anggota tim berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tim PUT:", err);
    return errorResponse(err.message || "Gagal memperbarui anggota tim", err.statusCode || 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_tim_kami);
    if (!id) return errorResponse("ID tim tidak valid", 400);

    const data = await timService.deleteTim(id);
    return successResponse(data, "Anggota tim berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tim DELETE:", err);
    return errorResponse(err.message || "Gagal menghapus anggota tim", err.statusCode || 500);
  }
}
