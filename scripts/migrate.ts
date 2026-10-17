import fs from "fs";
import path from "path";
import pool from "../lib/db";

async function runMigration() {
    try {
        const schemaPath = path.join(process.cwd(), "scripts", "schema.sql");
        const sql = fs.readFileSync(schemaPath, "utf-8");

        console.log("Menjalankan migrasi schema...");
        await pool.query(sql);
        console.log("✓ Tabel berhasil dibuat di database!");
    } catch (error) {
        console.error("Gagal menjalankan migrasi:", error);
    } finally {
        await pool.end();
    }
}

runMigration();