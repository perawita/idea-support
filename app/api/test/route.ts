import {
  successResponse,
  errorResponse,
} from "@/lib/api/response";

export async function GET() {
  try {
    const test: unknown[] = [];

    return successResponse(
      test,
      "Daftar perkara berhasil diambil",
    );
  } catch {
    return errorResponse(
      "Terjadi kesalahan internal",
      500,
    );
  }
}