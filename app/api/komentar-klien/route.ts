import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as komentarService from "@/services/komentar-klien.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await komentarService.getAllKomentarKlien(includeDeleted);
    return successResponse(data, "Data komentar klien berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error komentar-klien GET:", err);
    return errorResponse(err.message || "Gagal mengambil data komentar klien", err.statusCode || 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id);
      if (!id) return errorResponse("ID komentar tidak valid", 400);
      const data = await komentarService.restoreKomentarKlien(id);
      return successResponse(data, "Komentar klien berhasil dipulihkan");
    }

    const data = await komentarService.createNewKomentarKlien(body);
    return successResponse(data, "Komentar klien berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error komentar-klien POST:", err);
    return errorResponse(err.message || "Gagal menambahkan komentar klien", err.statusCode || 500);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id);
    if (!id) return errorResponse("ID komentar tidak valid", 400);

    const data = await komentarService.updateKomentarKlien(id, payload);
    return successResponse(data, "Data komentar klien berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error komentar-klien PUT:", err);
    return errorResponse(err.message || "Gagal memperbarui komentar klien", err.statusCode || 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id);
    if (!id) return errorResponse("ID komentar tidak valid", 400);

    const data = await komentarService.deleteKomentarKlien(id);
    return successResponse(data, "Komentar klien berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error komentar-klien DELETE:", err);
    return errorResponse(err.message || "Gagal menghapus komentar klien", err.statusCode || 500);
  }
}
