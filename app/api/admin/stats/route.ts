import pool from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET() {
  try {
    const [klien, tim, layanan, portofolio, tentang, komentar] = await Promise.all([
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM klien_kami WHERE deleted_at IS NULL"),
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM tim_kami WHERE deleted_at IS NULL"),
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM layanan WHERE deleted_at IS NULL"),
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM portofolio WHERE deleted_at IS NULL"),
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM tentang_kami WHERE deleted_at IS NULL"),
      pool.query<{ count: string }>("SELECT COUNT(*) AS count FROM komentar_klien_kami WHERE deleted_at IS NULL"),
    ]);

    const stats = {
      klien_kami: parseInt(klien.rows[0]?.count || "0", 10),
      tim_kami: parseInt(tim.rows[0]?.count || "0", 10),
      layanan: parseInt(layanan.rows[0]?.count || "0", 10),
      portofolio: parseInt(portofolio.rows[0]?.count || "0", 10),
      tentang_kami: parseInt(tentang.rows[0]?.count || "0", 10),
      komentar_klien_kami: parseInt(komentar.rows[0]?.count || "0", 10),
    };

    return successResponse(stats, "Statistik database berhasil diambil");
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Database stats error:", err);
    return errorResponse(err.message || "Gagal mengambil statistik database", 500);
  }
}
