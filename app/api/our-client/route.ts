import { successResponse, errorResponse } from "@/lib/api/response";

import * as clientService from "@/services/our-client.service";

export async function GET() {
  try {
    // eksekusi service untuk melihat isi tabel
    const data = await clientService.getAllClients();
    return successResponse(data, "Data client berhasil diambil")
  } catch (error: any) {
    console.error("Database error:", error);
    return errorResponse(error.message || "Gagal mengambil data dari database", error.statusCode || 500)
  }
}

// export async function GET() {
//   try {
//     const test: unknown[] = [];

//     return successResponse(
//       test,
//       "Daftar perkara berhasil diambil",
//     );
//   } catch {
//     return errorResponse(
//       "Terjadi kesalahan internal",
//       500,
//     );
//   }
// }