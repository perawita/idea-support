import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types/api";

/**
 * Standard HTTP Response Helpers
 * Digunakan di layer app/api untuk menyeragamkan format output JSON ke frontend.
 */

// Respons sukses (GET/POST/PUT/DELETE) dengan opsional metadata pagination
export function successResponse<T>(
  data: T,
  message = "Berhasil",
  status = 200,
  meta?: { page: number; limit: number; total: number } | null
) {
  return NextResponse.json({ success: true, message, data, meta: meta || null }, { status });
}

// Respons gagal/validasi error (HTTP 400 Bad Request)
export function errorResponse(
  message: string,
  errors: Record<string, string[]> | number | null = null,
) {
  const body: ApiResponse<never> = {
    success: false,
    message,
    data: null,
    errors,
  };

  return NextResponse.json(body, { status: 400 });
}

// Respons data tidak ada di database (HTTP 404 Not Found)
export function notFoundResponse(
  message: string = "Data Tidak Ditemukan",
  errors: Record<string, string[]> | null = null
) {
  const body: ApiResponse<never> = {
    success: false,
    message,
    data: null,
    errors
  };
  return NextResponse.json(body, { status: 404 });
}