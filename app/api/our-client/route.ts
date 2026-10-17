import { successResponse, errorResponse } from "@/lib/api/response";

import * as clientService from "@/services/our-client.service";


/**
 * Mengambil semua data client yang belum dihapus (deleted_at IS NULL)
 * Menggunakan service getAllClients() untuk mengambil data dari database
 * Jika berhasil, mengembalikan NextResponse dengan data client dan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * @returns NextResponse<ApiResponse<Client[]>> || NextResponse<ApiResponse<never>>
 */
export async function GET() {
  try {
    const data = await clientService.getAllClients();
    return successResponse(data, "Data client berhasil diambil")
  } catch (error: any) {
    console.error("Database error:", error);
    return errorResponse(error.message || "Gagal mengambil data dari database", error.statusCode || 500)
  }
}

/**
 * Menambah data client baru ke dalam database
 * Menggunakan service createNewClient() untuk menambah data ke database
 * Jika berhasil, mengembalikan NextResponse dengan data client yang baru dibuat dan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * @param request 
 * @returns NextResponse<ApiResponse<Client>> || NextResponse<ApiResponse<never>>
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = await clientService.createNewClient(payload);
    return successResponse(data, "Data client berhasil ditambahkan")
  } catch (error: any) {
    console.error("Database error:", error);
    return errorResponse(error.message || "Gagal menambahkan data ke database", error.statusCode || 500)
  }
}

