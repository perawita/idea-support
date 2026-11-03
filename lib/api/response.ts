import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types/api";

export function successResponse<T>(
  data: T,
  message = "Berhasil",
  status = 200,
) {
  const body: ApiResponse<T> = {
    success: true,
    message,
    data,
  };

  return NextResponse.json(body, { status });
}

export function errorResponse(
  message: string,
  status = 400,
  errors: Record<string, string[]> | null = null,
) {
  const body: ApiResponse<never> = {
    success: false,
    message,
    data: null,
    errors,
  };

  return NextResponse.json(body, { status });
}