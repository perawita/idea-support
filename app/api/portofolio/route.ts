import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api/response";
import * as portofolioService from "@/services/portofolio.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("all") === "true";
    const data = await portofolioService.getAllPortofolio(includeDeleted);
    return successResponse(data, "Data portofolio berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error portofolio GET:", err);
    return errorResponse(err.message || "Gagal mengambil data portofolio", err.statusCode || 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "restore") {
      const id = Number(body.id || body.id_portofolio);
      if (!id) return errorResponse("ID portofolio tidak valid", 400);
      const data = await portofolioService.restorePortofolio(id);
      return successResponse(data, "Portofolio berhasil dipulihkan");
    }

    const data = await portofolioService.createNewPortofolio(body);
    return successResponse(data, "Portofolio berhasil ditambahkan", 201);
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error portofolio POST:", err);
    return errorResponse(err.message || "Gagal menambahkan portofolio", err.statusCode || 500);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_portofolio);
    if (!id) return errorResponse("ID portofolio tidak valid", 400);

    const data = await portofolioService.updatePortofolio(id, payload);
    return successResponse(data, "Data portofolio berhasil diperbarui");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error portofolio PUT:", err);
    return errorResponse(err.message || "Gagal memperbarui portofolio", err.statusCode || 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = Number(payload.id || payload.id_portofolio);
    if (!id) return errorResponse("ID portofolio tidak valid", 400);

    const data = await portofolioService.deletePortofolio(id);
    return successResponse(data, "Portofolio berhasil dihapus");
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Database error portofolio DELETE:", err);
    return errorResponse(err.message || "Gagal menghapus portofolio", err.statusCode || 500);
  }
}
