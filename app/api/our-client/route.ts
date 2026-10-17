/**
 * API route untuk mengelola data client, termasuk mengambil semua data client, 
 * mengambil data client berdasarkan id, menambah data client baru, memperbarui data client, dan menghapus data client dengan metode soft delete.
 * Menggunakan service getAllClients(), getClientById(), createNewClient(), 
 * updateClient(), dan deleteClient() untuk berinteraksi dengan database.
 * Mengembalikan NextResponse dengan data client atau pesan error sesuai hasil operasi.
 * 
 * Semua method API route ini menggunakan format request dan response JSON,
 * dan mengembalikan status code sesuai hasil operasi (200 untuk sukses, 400 untuk request tidak valid, 404 untuk data tidak ditemukan, 500 untuk error server).
 * 
 * Format request dan response JSON dapat dilihat pada contoh di masing-masing method GET, POST, PUT, dan DELETE.
 * 
 * Full response JSON format:
 * {
 *   "data": <data client atau null>,
 *   "message": <pesan sukses atau error>,
 *   "error": <pesan error atau null>,
 *   "statusCode": <status code HTTP>
 * }
 * 
 * 
 * Example request and response for GET /api/our-client:
 * Example usage:
 * GET /api/our-client
 * POST /api/our-client
 * PUT /api/our-client
 * DELETE /api/our-client
 * 
 * @module @services/our-client.service
 * @module @repositories/our-client.repository
 * @module @lib/api/response
 * @module @app/api/our-client/route
 * @module @types/Client
 * @module @types/CreateClientDTO
 * @module @types/UpdateClientDTO
 * @module @types/ApiResponse
 * @module @types/NextResponse
 * 
 * --- IGNORE ---
 * @module app/api/our-client/route
 * @module services/our-client.service
 * @module repositories/our-client.repository
 * @module lib/api/response
 * @module types/Client
 * @module types/CreateClientDTO
 * @module types/UpdateClientDTO
 * @module types/ApiResponse
 * @module types/NextResponse
 */



import { successResponse, errorResponse } from "@/lib/api/response";

import * as clientService from "@/services/our-client.service";


/**
 * Mengambil semua data client yang belum dihapus (deleted_at IS NULL)
 * Menggunakan service getAllClients() untuk mengambil data dari database
 * Jika berhasil, mengembalikan NextResponse dengan data client dan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * contoh request: GET /api/our-client
 * contoh response sukses: 
 * { 
 *  "data": 
 *      [ 
 *        { 
 *          "id": 1,
 *           "name": "Client A",
 *           "logo_url": "https://example.com/logo-a.png",
 *           "created_at": "2023-01-01T00:00:00.000Z", 
 *           "updated_at": "2023-01-01T00:00:00.000Z" },
 *        { 
 *          "id": 2, 
 *          "name": "Client B", 
 *          "logo_url": null, 
 *          "created_at": "2023-01-02T00:00:00.000Z", 
 *          "updated_at": "2023-01-02T00:00:00.000Z" 
 *        } 
 *      ], 
 *      "message": "Data client berhasil diambil" 
 * }
 * contoh response error: { "error": "Gagal mengambil data dari database", "statusCode": 500 }
 * 
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
 * Method POST digunakan untuk melakukan aksi tertentu pada data client, seperti mengambil 
 * data client berdasarkan id, menambah data client baru, atau memperbarui data client
 * Menggunakan service getClientById(), createNewClient(), atau updateClient() sesuai aksi yang diminta
 * Jika berhasil, mengembalikan NextResponse dengan data client dan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * request body harus berisi field "action" yang menentukan aksi yang akan dilakukan
 * contoh request body:
 * {
 *   "action": "getClientById",
 *   "id": 1
 * }
 * contoh response sukses: 
 * {
 *   "data": {
 *     "id": 1,
 *     "name": "Client A",
 *     "logo_url": "https://example.com/logo-a.png",
 *     "created_at": "2023-01-01T00:00:00.000Z",
 *     "updated_at": "2023-01-01T00:00:00.000Z"
 *   },
 *   "message": "Data client berhasil diambil"
 * }
 * contoh response error: { "error": "Client tidak ditemukan", "statusCode": 404 }
 * @param request: Request
 * @returns NextResponse<ApiResponse<Client>> || NextResponse<ApiResponse<never>>
 */
export async function POST(request: Request) {
  const body = await request.json();
  switch(body.action) {
    case "getClientById":
      try {
        const payload = await request.json();
        const data = await clientService.getClientById(payload.id);
        return successResponse(data, "Data client berhasil diambil")
      } catch (error: any) {
        console.error("Database error:", error);
        return errorResponse(error.message || "Gagal mengambil data dari database", error.statusCode || 500)
      }
    case "createNewClient":
      try {
        const payload = await request.json();
        const id = payload.id;
        if (!id) {
          return errorResponse("ID client tidak ditemukan dalam payload", 400);
        }
        const data = await clientService.createNewClient(payload);
        return successResponse(data, "Data client berhasil ditambahkan")
      } catch (error: any) {
        console.error("Database error:", error);
        return errorResponse(error.message || "Gagal menambahkan data ke database", error.statusCode || 500)
      }
    case "updateClient":
      try {
        const payload = await request.json();
        const id = payload.id;
        if (!id) {
          return errorResponse("ID client tidak ditemukan dalam payload", 400);
        }
        const data = await clientService.updateClient(id, payload);
        return successResponse(data, "Data client berhasil diperbarui")
      } catch (error: any) {
        console.error("Database error:", error);
        return errorResponse(error.message || "Gagal memperbarui data di database", error.statusCode || 500)
      }
    default:
      return errorResponse("Aksi tidak valid", 400) 
  }
}


/**
 * Memperbarui data client berdasarkan id
 * Menggunakan service updateClient() untuk memperbarui data di database
 * Jika berhasil, mengembalikan NextResponse dengan data client yang diperbarui dan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * contoh request body:
 * {
 *   "id": 1,
 *   "name": "Client A Updated",
 *   "logo_url": "https://example.com/logo-a-updated.png"
 * }
 * contoh response sukses:
 * {
 *   "data": {
 *     "id": 1,
 *     "name": "Client A Updated",
 *     "logo_url": "https://example.com/logo-a-updated.png",
 *     "created_at": "2023-01-01T00:00:00.000Z",
 *     "updated_at": "2023-01-02T00:00:00.000Z"
 *   },
 *   "message": "Data client berhasil diperbarui"
 * }
 * contoh response error: { "error": "Client tidak ditemukan", "statusCode": 404 }
 * @param request: Request
 * @returns NextResponse<ApiResponse<Client>> || NextResponse<ApiResponse<never>>
 */
export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    const id = payload.id;
    if (!id) {
      return errorResponse("ID client tidak ditemukan dalam payload", 400);
    }
    const data = await clientService.updateClient(id, payload);
    return successResponse(data, "Data client berhasil diperbarui")
  } catch (error: any) {
    console.error("Database error:", error);
    return errorResponse(error.message || "Gagal memperbarui data di database", error.statusCode || 500)
  }
}


/**
 * Menghapsu data client berdasarkan id dengan metode soft delete (mengisi kolom deleted_at dengan timestamp saat ini)
 * Menggunakan service deleteClient() untuk menghapus data di database
 * Jika berhasil, mengembalikan NextResponse dengan pesan sukses
 * Jika gagal, mengembalikan NextResponse dengan pesan error dan status code
 * contoh request body:
 * {
 *   "id": 1
 * }
 * contoh response sukses:
 * {
 *   "message": "Client berhasil dihapus"
 * }
 * contoh response error: { "error": "Client tidak ditemukan atau sudah dihapus", "statusCode": 404 }
 * @param request: Request
 * @returns NextResponse<ApiResponse<Client>> || NextResponse<ApiResponse<never>>
 */
export async function DELETE(request: Request) {
  try {
    const payload = await request.json();
    const id = payload.id;
    if (!id) {
      return errorResponse("ID client tidak ditemukan dalam payload", 400);
    }
    const data = await clientService.deleteClient(id);
    return successResponse(data, "Data client berhasil dihapus")
  } catch (error: any) {
    console.error("Database error:", error);
    return errorResponse(error.message || "Gagal menghapus data di database", error.statusCode || 500)
  }
}

