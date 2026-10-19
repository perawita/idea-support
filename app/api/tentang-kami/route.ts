import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as tentangKamiService from "@/services/tentang-kami.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await tentangKamiService.getAllTentangKami(includeDeleted);
    return successResponse(data, "Data tentang kami berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tentang-kami GET:", err);
    return errorResponse(err.message || "Gagal mengambil data tentang kami", err.statusCode || 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id || body.id_tentang_kami);
      if (!id) return errorResponse("ID tentang kami tidak valid", 400);
      const data = await tentangKamiService.restoreTentangKami(id);
      return successResponse(data, "Profil tentang kami berhasil dipulihkan");
    }

    const data = await tentangKamiService.createNewTentangKami(body);
    return successResponse(data, "Profil tentang kami berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tentang-kami POST:", err);
    return errorResponse(err.message || "Gagal menambahkan profil tentang kami", err.statusCode || 500);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_tentang_kami);
    if (!id) return errorResponse("ID tentang kami tidak valid", 400);

    const data = await tentangKamiService.updateTentangKami(id, payload);
    return successResponse(data, "Profil tentang kami berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tentang-kami PUT:", err);
    return errorResponse(err.message || "Gagal memperbarui profil tentang kami", err.statusCode || 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_tentang_kami);
    if (!id) return errorResponse("ID tentang kami tidak valid", 400);

    const data = await tentangKamiService.deleteTentangKami(id);
    return successResponse(data, "Profil tentang kami berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error tentang-kami DELETE:", err);
    return errorResponse(err.message || "Gagal menghapus profil tentang kami", err.statusCode || 500);
  }
}
