-- =======================================================
-- SCHEMA DATABASE IDEA SUPPORT (PostgreSQL)
-- Seluruh tabel wajib menyertakan kolom audit & soft delete:
-- created_at, updated_at, deleted_at
-- =======================================================

-- 1. Tabel Klien Kami
CREATE TABLE IF NOT EXISTS klien_kami (
    id SERIAL PRIMARY KEY,
    nama_klien VARCHAR(255) NOT NULL,
    logo_klien TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- 2. Tabel Komentar Klien Kami
CREATE TABLE IF NOT EXISTS komentar_klien_kami (
    id SERIAL PRIMARY KEY,
    id_klien INT REFERENCES klien_kami(id) ON DELETE SET NULL,
    judul VARCHAR(255) DEFAULT NULL,
    komentar TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- 3. Tabel Layanan
CREATE TABLE IF NOT EXISTS layanan (
    id_layanan SERIAL PRIMARY KEY,
    tipe_layanan VARCHAR(100) NOT NULL,
    judul_layanan VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    kategori VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- 4. Tabel Portofolio
CREATE TABLE IF NOT EXISTS portofolio (
    id_portofolio SERIAL PRIMARY KEY,
    kategori VARCHAR(100) NOT NULL,
    judul VARCHAR(255) NOT NULL,
    tipe VARCHAR(100) NOT NULL,
    media TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- 5. Tabel Tentang Kami
CREATE TABLE IF NOT EXISTS tentang_kami (
    id_tentang_kami SERIAL PRIMARY KEY,
    deskripsi TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- 6. Tabel Tim Kami
CREATE TABLE IF NOT EXISTS tim_kami (
    id_tim_kami SERIAL PRIMARY KEY,
    foto TEXT,
    nama_depan VARCHAR(255) NOT NULL,
    nama_belakang VARCHAR(255) NOT NULL,
    peran VARCHAR(100) NOT NULL,
    jabatan VARCHAR(100) NOT NULL,
    linkedin VARCHAR(100) NOT NULL,
    instagram VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);