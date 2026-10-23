# IDEA SUPPORT

**Project Development Standards & Repository Guidelines**

Dokumen ini merupakan pedoman pengembangan proyek IDEA SUPPORT yang wajib diikuti oleh seluruh developer dan kontributor yang memiliki akses ke repository.

Tujuannya adalah menjaga konsistensi kode, kualitas implementasi, keamanan, kemudahan pemeliharaan, serta proses kolaborasi dan deployment yang terstruktur.

---

## 1. PROJECT PROFILE

| Properti | Nilai |
|---|---|
| Project Name | `idea-support` |
| Version | `0.1.0` |
| Project Status | Initial Development |
| Repository Visibility | Private |
| License | IDEA SUPPORT Proprietary License (ISPL) v1.0 |
| Package Manager | npm |

Informasi proyek yang bersifat teknis harus mengikuti konfigurasi aktual di `package.json`.

> **Catatan:** `private: true` pada `package.json` mencegah package dipublikasikan ke npm secara tidak sengaja. Pengaturan ini tidak menjadikan repository GitHub private secara otomatis.

---

## 2. SPESIFIKASI LINGKUNGAN PENGEMBANGAN

### 2.1. Persyaratan perangkat lunak

| Software | Versi Minimum | Keterangan |
|---|---|---|
| Node.js | `>=20.x` | Runtime JavaScript |
| npm | `>=10.x` | Package manager |
| Docker | `>=29.x` | Container runtime |
| Git | Versi stabil yang mendukung workflow repository | Version control |

Gunakan versi yang kompatibel dengan dependency dan konfigurasi proyek. Apabila proyek menetapkan versi yang lebih spesifik, konfigurasi proyek menjadi acuan utama.

### 2.2. Verifikasi lingkungan

Sebelum menjalankan proyek, periksa versi software yang terpasang:

```bash
node --version
npm --version
docker --version
git --version
```

Periksa konfigurasi dependency dan script yang tersedia:

```bash
cat package.json
npm run
```

### 2.3. Instalasi dependency

Gunakan:

```bash
npm ci
```

`npm ci` direkomendasikan untuk instalasi yang konsisten berdasarkan `package-lock.json`.

Jangan menghapus atau mengubah lockfile tanpa alasan teknis yang jelas.

### 2.4. Setup dan migrasi database

Pastikan service PostgreSQL telah berjalan dan file `.env` telah dikonfigurasi berdasarkan `.env.example`.

Jalankan perintah migrasi skema database:

```bash
npm run db:migrate
```

Perintah ini akan mengeksekusi script DDL pada `scripts/schema.sql` untuk membuat tabel-tabel yang diperlukan (seperti `clients`) beserta data awalnya.

---

## 3. SPESIFIKASI PROYEK

Konfigurasi lengkap proyek ditetapkan di:

```text
./package.json
```

File tersebut menjadi sumber utama untuk informasi package, script, dependency, dan konfigurasi yang didefinisikan di dalamnya.

### Script yang Tersedia

| Script | Command | Keterangan |
|---|---|---|
| `dev` | `npm run dev` | Menjalankan server aplikasi Next.js dalam mode development |
| `build` | `npm run build` | Mengompilasi kode menjadi build production |
| `start` | `npm run start` | Menjalankan server aplikasi production hasil build |
| `lint` | `npm run lint` | Menjalankan pemeriksaan kode menggunakan ESLint |
| `db:migrate` | `npm run db:migrate` | Menjalankan migrasi skema database PostgreSQL (`scripts/migrate.ts`) |

### Ketentuan

1. Jangan mengubah nama proyek, versi package, atau konfigurasi penting tanpa alasan yang jelas.
2. Setiap penambahan dependency harus memiliki tujuan teknis yang dapat dijelaskan.
3. Hindari dependency yang tumpang tindih atau tidak lagi digunakan.
4. Jangan memperbarui seluruh dependency secara massal sebagai bagian dari perubahan fitur biasa.
5. Setiap perubahan dependency harus diuji untuk memastikan kompatibilitas.
6. Commit `package-lock.json` bersama perubahan dependency yang relevan.
7. Jangan menyimpan credential, API key, atau secret di dalam `package.json`.

Jika konfigurasi proyek berubah, dokumentasi ini harus diperbarui agar tetap sesuai dengan implementasi aktual.

---

## 4. STANDAR PENULISAN KODE

### 4.1. Prinsip umum

Seluruh kode harus mengikuti prinsip berikut:

- **Readable:** mudah dibaca dan dipahami developer lain.
- **Maintainable:** mudah diperbaiki dan dikembangkan.
- **Consistent:** mengikuti pola dan konvensi yang sudah digunakan proyek.
- **Modular:** tanggung jawab setiap modul harus jelas.
- **Secure:** menerapkan praktik keamanan sesuai fungsi dan tingkat risiko.
- **Testable:** perubahan dapat diverifikasi melalui pengujian yang relevan.

### 4.2. Aturan penulisan

1. Gunakan penamaan variabel, fungsi, class, dan komponen yang menjelaskan tujuannya.
2. Hindari fungsi yang terlalu besar dan memiliki banyak tanggung jawab.
3. Hindari duplikasi logika yang seharusnya dapat digunakan kembali.
4. Jangan membuat abstraksi tambahan tanpa kebutuhan yang jelas.
5. Pisahkan business logic, presentation logic, dan akses data sesuai arsitektur proyek.
6. Tangani error secara eksplisit. Jangan menyembunyikan error menggunakan `catch` kosong.
7. Gunakan konfigurasi environment untuk nilai yang berbeda antarlingkungan.
8. Hapus kode mati, debug statement, dan import yang tidak digunakan sebelum menyelesaikan perubahan.
9. Gunakan formatter dan linter yang telah ditetapkan proyek jika tersedia.
10. Jangan melakukan refactor besar di luar ruang lingkup tugas tanpa persetujuan.

### 4.3. Komentar dan dokumentasi kode

Komentar harus menjelaskan alasan atau konteks yang tidak mudah dipahami dari kode, bukan sekadar mengulang apa yang dilakukan kode.

Dokumentasikan hal-hal berikut jika relevan:

- Business rule yang tidak biasa.
- Keputusan arsitektur penting.
- Kontrak API dan perubahan schema.
- Konfigurasi environment.
- Prosedur instalasi, pengujian, dan deployment.

---

## 5. ATURAN BRANCH DAN KOLABORASI

Gunakan branch terpisah sesuai tujuan perubahan.

| Branch | Fungsi |
|---|---|
| `main` | Kode stabil untuk production |
| `development` | Integrasi perubahan dan fitur |
| `staging` | Kandidat rilis untuk pengujian sebelum production |
| `feature/*` | Pengembangan fitur baru |
| `fix/*` | Perbaikan bug |
| `refactor/*` | Restrukturisasi kode |
| `hotfix/*` | Perbaikan mendesak pada production |

### Script yang Tersedia

| Script | Command | Keterangan |
|---|---|---|
| `dev` | `npm run dev` | Menjalankan server aplikasi Next.js dalam mode development |
| `build` | `npm run build` | Mengompilasi kode menjadi build production |
| `start` | `npm run start` | Menjalankan server aplikasi production hasil build |
| `lint` | `npm run lint` | Menjalankan pemeriksaan kode menggunakan ESLint |
| `db:migrate` | `npm run db:migrate` | Menjalankan migrasi skema database PostgreSQL (`scripts/migrate.ts`) |

### Ketentuan

1. Dilarang melakukan commit langsung ke `main` dan `staging`.
2. Perubahan harus melalui Pull Request.
3. Branch kerja dibuat dari branch dasar yang sesuai dengan tujuan perubahan.
4. Branch harus menggunakan nama yang jelas dan mudah ditelusuri.
5. Hapus branch fitur setelah perubahan berhasil di-merge dan tidak lagi diperlukan.
6. Perubahan arsitektur, autentikasi, otorisasi, database kritis, dan deployment harus mendapat review yang sesuai.

Branch protection atau GitHub Rulesets harus digunakan untuk menegakkan aturan ini secara teknis.

---

## 6. ATURAN COMMIT

### 6.1. Format commit

Gunakan format Conventional Commits:

```text
<type>(<scope>): <description>
```

Keterangan:

- `type`: kategori perubahan.
- `scope`: bagian proyek yang diubah, jika relevan.
- `description`: ringkasan perubahan yang spesifik.

Gunakan bahasa Inggris untuk pesan commit agar riwayat perubahan konsisten.

### 6.2. Tipe commit

| Tipe | Kegunaan | Contoh |
|---|---|---|
| `feat` | Menambahkan fitur | `feat(auth): add login endpoint` |
| `fix` | Memperbaiki bug | `fix(chat): resolve message submission error` |
| `refactor` | Mengubah struktur kode tanpa mengubah perilaku yang dimaksud | `refactor(api): simplify service layer` |
| `ui` | Perubahan UI/UX | `ui(dashboard): improve responsive layout` |
| `test` | Menambah atau memperbaiki pengujian | `test(auth): add login validation tests` |
| `docs` | Perubahan dokumentasi | `docs(readme): update setup instructions` |
| `perf` | Peningkatan performa | `perf(api): optimize case query` |
| `build` | Dependency dan proses build | `build(docker): update production image` |
| `ci` | Pipeline integrasi berkelanjutan | `ci(github): add staging workflow` |
| `chore` | Pemeliharaan umum | `chore(repo): update editor configuration` |
| `revert` | Membatalkan commit sebelumnya | `revert: revert login validation change` |

### 6.3. Ketentuan commit

- Satu commit harus memiliki tujuan yang jelas.
- Jangan mencampur fitur, refactor besar, dan perbaikan bug yang tidak berkaitan.
- Hindari pesan generik seperti `update`, `fix bug`, `final`, atau `done`.
- Jangan memasukkan `.env`, password, token, private key, atau credential server.
- Jangan menggunakan `git push --force` pada branch bersama.
- Pastikan perubahan diperiksa dan tes yang relevan berhasil sebelum commit.
- Jangan menggunakan `--no-verify` untuk melewati pemeriksaan yang diwajibkan.
- Jika satu perubahan memerlukan beberapa commit, setiap commit harus tetap memiliki konteks yang jelas.

---

## 7. ATURAN SAAT MELAKUKAN PERUBAHAN

Setiap perubahan kode harus mengikuti tahapan berikut.

### Tahap 1. Audit

Sebelum melakukan perubahan:

1. Baca struktur proyek dan dokumentasi yang relevan.
2. Periksa implementasi yang sudah tersedia.
3. Identifikasi dependency, API, modul, dan komponen yang terdampak.
4. Periksa kemungkinan dampak terhadap fitur lain.
5. Tentukan ruang lingkup perubahan sebelum mulai coding.

Jangan mengganti implementasi yang sudah berfungsi hanya karena preferensi pribadi.

### Tahap 2. Perencanaan

Untuk perubahan kecil, cukup tentukan tujuan dan ruang lingkupnya.

Untuk perubahan besar, siapkan rencana yang mencakup:

- Masalah yang ingin diselesaikan.
- Implementasi yang akan diubah.
- File atau modul yang terdampak.
- Risiko kompatibilitas dan keamanan.
- Pengujian yang diperlukan.
- Dampak terhadap database, API, dan deployment.

Perubahan arsitektur atau schema database harus mendapat persetujuan yang sesuai sebelum diterapkan.

### Tahap 3. Implementasi

- Kerjakan perubahan hanya pada ruang lingkup yang disepakati.
- Pertahankan kompatibilitas dengan implementasi yang sudah ada, kecuali perubahan breaking memang direncanakan.
- Jangan menghapus fitur atau mengubah kontrak API tanpa analisis dampak.
- Jangan mengubah konfigurasi deployment atau dependency yang tidak berkaitan dengan tugas.
- Tambahkan atau perbarui tes jika perilaku aplikasi berubah.

### Tahap 4. Verifikasi

Sebelum membuat Pull Request:

1. Jalankan pemeriksaan lint dan format yang tersedia.
2. Jalankan unit test dan integration test yang relevan.
3. Jalankan production build jika didukung.
4. Periksa perubahan dengan `git diff`.
5. Pastikan tidak ada credential atau file yang tidak sengaja masuk.
6. Verifikasi bahwa dokumentasi sesuai dengan perubahan implementasi.

Jangan menyatakan tes berhasil jika tes tersebut belum benar-benar dijalankan.

### Tahap 5. Review dan integrasi

- Buat Pull Request dengan deskripsi yang jelas.
- Jelaskan masalah, solusi, dampak, dan pengujian yang telah dilakukan.
- Cantumkan screenshot untuk perubahan UI jika relevan.
- Tunggu persetujuan dan pemeriksaan otomatis.
- Selesaikan konflik sebelum merge.
- Perbarui dokumentasi jika perubahan memengaruhi cara penggunaan atau pemeliharaan proyek.

---

## 8. CONTOH WORKFLOW DEVELOPER

Contoh berikut digunakan untuk mengerjakan fitur baru dari branch `development`.

```bash
# 1. Pindah ke branch development
git switch development

# Atau buat branch jika belum tersedia
git checkout -b <nama-branch-baru>

# 2. Sinkronisasi dengan repository remote
git pull --ff-only origin development

# 3. Buat branch fitur
git switch -c feature/case-timeline

# 4. Periksa perubahan
git status
git diff

# 5. Jalankan pengujian yang relevan
npm test
npm run build

# 6. Stage file yang memang diubah
git add src/ tests/

# 7. Buat commit
git commit -m "feat(case): add case timeline"

# 8. Kirim branch ke GitHub
git push -u origin feature/case-timeline
```

Perintah pengujian di atas merupakan contoh. Pastikan script `test` dan `build` memang tersedia di `package.json` sebelum menjalankannya. Sesuaikan direktori `src/` dan `tests/` dengan struktur proyek aktual.

Setelah push, buat Pull Request dengan target `development`.

---

## 9. ATURAN RELEASE

Proyek menggunakan Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Contoh:

| Versi | Makna |
|---|---|
| `1.0.0` | Rilis stabil awal |
| `1.1.0` | Penambahan fitur yang kompatibel |
| `1.1.1` | Perbaikan bug yang kompatibel |
| `2.0.0` | Perubahan breaking yang memerlukan major version baru |

### Sebelum release

1. Pastikan seluruh Pull Request telah direview.
2. Pastikan pemeriksaan CI, tes, dan production build lulus.
3. Verifikasi konfigurasi environment production.
4. Pastikan migrasi database dan backup siap.
5. Uji autentikasi, otorisasi, dan alur penting aplikasi.
6. Periksa dependency dan risiko keamanan.
7. Perbarui `CHANGELOG.md`.
8. Tetapkan nomor versi dan buat Git tag.
9. Deploy melalui pipeline yang telah disetujui.
10. Verifikasi health aplikasi dan fungsi kritis setelah deployment.
11. Siapkan dan dokumentasikan prosedur rollback.

### Script yang Tersedia

| Script | Command | Keterangan |
|---|---|---|
| `dev` | `npm run dev` | Menjalankan server aplikasi Next.js dalam mode development |
| `build` | `npm run build` | Mengompilasi kode menjadi build production |
| `start` | `npm run start` | Menjalankan server aplikasi production hasil build |
| `lint` | `npm run lint` | Menjalankan pemeriksaan kode menggunakan ESLint |
| `db:migrate` | `npm run db:migrate` | Menjalankan migrasi skema database PostgreSQL (`scripts/migrate.ts`) |

### Ketentuan release

- Release harus dapat ditelusuri ke commit dan tag yang spesifik.
- Jangan menandai rilis sebagai berhasil sebelum verifikasi pascadeploy selesai.
- Perubahan konfigurasi dan database harus menjadi bagian dari rencana rilis.
- Perbaikan mendesak harus mengikuti prosedur hotfix yang telah ditetapkan.
- Hindari mengubah isi rilis yang sudah dipublikasikan tanpa membuat versi koreksi yang dapat ditelusuri.

---

## 10. ATURAN DEPLOYMENT

### Development

- Digunakan untuk integrasi perubahan harian.
- Deployment dapat dilakukan otomatis setelah merge ke `development`.
- Kegagalan pemeriksaan harus diperbaiki sebelum perubahan dipromosikan.

### Staging

- Digunakan untuk pengujian integrasi, UAT, dan validasi kandidat rilis.
- Kandidat rilis harus berasal dari perubahan yang sudah disetujui.
- Gunakan konfigurasi dan data pengujian yang terpisah dari production.
- Kegagalan pengujian harus diselesaikan sebelum promosi ke production.

### Production

- Deployment hanya dilakukan dari versi yang sudah disetujui.
- Perubahan production harus melewati kontrol akses dan persetujuan rilis.
- Gunakan secret khusus production.
- Pastikan monitoring, backup, dan rollback tersedia sesuai tingkat risiko.
- Setelah deployment, lakukan smoke test dan periksa log aplikasi.
- Jika terjadi kegagalan kritis, hentikan rollout atau lakukan rollback sesuai prosedur.

> Nama branch tidak otomatis membuat lingkungan deployment terpisah. Konfigurasi CI/CD, server, credential, dan target deployment harus ditetapkan secara eksplisit.

---

## 11. KEAMANAN DAN PENGELOLAAN SECRET

1. Jangan pernah menyimpan secret atau credential dalam source code.
2. Gunakan environment variable atau secret manager.
3. Jangan mengunggah file `.env` yang berisi nilai rahasia.
4. Sediakan `.env.example` yang hanya berisi nama variabel dan nilai contoh yang aman.
5. Pisahkan secret untuk development, staging, dan production.
6. Batasi hak akses repository dan server berdasarkan tanggung jawab.
7. Jika secret terlanjur masuk ke repository, segera rotasi atau cabut secret tersebut. Menghapus file dari commit terbaru saja tidak menghapus seluruh riwayatnya.
8. Jangan menggunakan data sensitif production untuk pengujian tanpa dasar dan perlindungan yang sesuai.

---

## 12. DOKUMENTASI DAN PERUBAHAN KONFIGURASI

Perbarui dokumentasi yang relevan setiap kali perubahan memengaruhi:

- Instalasi dan setup proyek.
- Environment variable.
- API dan integrasi eksternal.
- Schema atau migrasi database.
- Dependency dan perintah build.
- Prosedur release atau deployment.
- Perilaku fitur yang digunakan developer atau pengguna.

Dokumentasi harus sesuai dengan implementasi aktual, bukan rencana yang belum dikerjakan.

---

## 13. KEPATUHAN TERHADAP PEDOMAN

Seluruh developer dan kontributor wajib mengikuti pedoman ini.

Tech Lead atau penanggung jawab repository berwenang menetapkan standar teknis, menentukan kebutuhan review tambahan, dan menyetujui pengecualian yang beralasan.

Pengecualian harus memiliki alasan yang jelas, ruang lingkup terbatas, dan dokumentasi jika berdampak terhadap keamanan, kualitas, atau deployment.

Ketentuan ini harus ditegakkan melalui konfigurasi repository, review, dan pipeline otomatis sejauh memungkinkan, bukan hanya mengandalkan kepatuhan manual.

---

## ATURAN PENULISAN CHANGELOG.md

`CHANGELOG.md` merupakan dokumentasi resmi yang mencatat perubahan penting pada setiap versi proyek IDEA SUPPORT.

Setiap developer wajib mengikuti standar penulisan changelog agar riwayat perubahan dapat dipahami, dilacak, dan digunakan sebagai referensi saat melakukan maintenance maupun release.

### 1. Prinsip Penulisan

- Gunakan bahasa Inggris yang jelas, ringkas, dan konsisten.
- Catat perubahan yang benar-benar sudah diimplementasikan.
- Jelaskan perubahan berdasarkan dampaknya terhadap fitur, sistem, developer, atau pengguna.
- Hindari duplikasi catatan perubahan.
- Jangan menjadikan changelog sebagai salinan seluruh riwayat commit.
- Jangan mencantumkan credential, token, data pribadi, atau informasi infrastruktur sensitif.
- Jangan mengubah catatan release terdahulu kecuali untuk memperbaiki kesalahan faktual.

### 2. Kategori Perubahan

Gunakan kategori berikut sesuai jenis perubahan:

| Kategori | Fungsi |
|---|---|
| `Added` | Penambahan fitur atau kemampuan baru |
| `Changed` | Perubahan perilaku atau implementasi yang sudah ada |
| `Deprecated` | Fitur yang direncanakan untuk dihapus |
| `Removed` | Penghapusan fitur atau komponen |
| `Fixed` | Perbaikan bug |
| `Security` | Perbaikan atau peningkatan keamanan |

Hanya gunakan kategori yang memiliki perubahan nyata. Jangan mempertahankan kategori kosong pada release yang dipublikasikan.

### 3. Format Changelog

Gunakan struktur berikut:

```markdown
# Changelog

All notable changes to this project are documented in this file.

This changelog follows Keep a Changelog principles
and Semantic Versioning.

## [Unreleased]

### Added
- Add a new feature.

### Changed
- Update an existing feature.

### Fixed
- Fix a known issue.

## [1.0.0] - YYYY-MM-DD

### Added
- Add the initial stable application release.
```

`Unreleased` digunakan untuk mencatat perubahan yang sudah selesai diimplementasikan tetapi belum menjadi bagian dari release stabil.

Contoh di atas hanya format. Ganti setiap deskripsi dengan perubahan aktual dan hapus kategori yang tidak digunakan.

### 4. Aturan Penulisan Entri

Setiap entri harus menjelaskan perubahan secara spesifik.

Contoh yang benar:

- `Added email verification to the authentication flow.`
- `Changed the homepage layout to improve mobile usability.`
- `Fixed an incorrect redirect after successful authentication.`
- `Removed the deprecated legacy endpoint.`
- `Enforced authorization checks on protected API routes.`

Hindari deskripsi yang tidak jelas, seperti:

- `Update project.`
- `Fix bug.`
- `Improve code.`
- `Various changes.`
- `Final update.`

Jika perubahan memengaruhi API, database, konfigurasi, atau kompatibilitas, jelaskan dampaknya dan sertakan instruksi migrasi jika diperlukan.

### 5. Aturan Pengelolaan Unreleased

1. Tambahkan catatan perubahan yang bermakna ketika perubahan selesai dan digabungkan ke workflow pengembangan.
2. Tempatkan catatan pada kategori yang sesuai.
3. Perbarui entri yang sudah ada jika perubahan masih berkaitan, daripada membuat duplikasi.
4. Jangan mencatat ide, rencana, atau fitur yang belum diimplementasikan sebagai perubahan selesai.
5. Saat menyiapkan release, pindahkan catatan yang relevan ke bagian versi baru.
6. Hapus placeholder dan pastikan tidak ada informasi yang belum diverifikasi sebelum release dipublikasikan.

### 6. Aturan Versi dan Tanggal

Gunakan Semantic Versioning dengan format:

`MAJOR.MINOR.PATCH`

- **MAJOR:** perubahan yang tidak kompatibel dengan versi sebelumnya.
- **MINOR:** penambahan fitur yang tetap kompatibel.
- **PATCH:** perbaikan bug yang tetap kompatibel.

Format judul release:

```markdown
## [1.1.0] - 2026-10-11
```

Gunakan nomor versi dan tanggal rilis yang sebenarnya. Jangan menetapkan tanggal rilis sebelum jadwal rilis dikonfirmasi.

### 7. Aturan Breaking Changes

Perubahan yang tidak kompatibel harus ditandai dengan jelas.

Contoh:

```markdown
### Changed
- **BREAKING:** Replaced the legacy API authentication format.
  Existing integrations must update their authentication requests.
```

Jika perubahan membutuhkan migrasi database, pembaruan konfigurasi, atau penyesuaian integrasi, sertakan instruksi yang relevan.

### 8. Aturan Security

Catatan keamanan harus menjelaskan peningkatan yang telah diterapkan tanpa membocorkan credential, data pribadi, detail eksploitasi, atau kerentanan yang belum siap dipublikasikan.

Koordinasikan pengungkapan informasi keamanan sensitif dengan penanggung jawab proyek sebelum memublikasikannya.

### 9. Tanggung Jawab Tim

**Developer**
- Mencatat perubahan yang relevan.
- Memastikan catatan sesuai dengan implementasi aktual.

**Reviewer**
- Memeriksa ketepatan dan kejelasan entri changelog.
- Memastikan tidak ada catatan yang duplikat atau menyesatkan.

**Tech Lead / Release Owner**
- Memvalidasi nomor versi dan catatan release.
- Memastikan changelog sesuai dengan perubahan yang akan dirilis.

### 10. Checklist Sebelum Release

- [ ] Semua entri mencerminkan perubahan yang benar-benar diimplementasikan.
- [ ] Placeholder dan kategori kosong telah dihapus.
- [ ] Perubahan telah dikelompokkan berdasarkan kategori.
- [ ] Nomor versi mengikuti Semantic Versioning.
- [ ] Tanggal release telah diverifikasi.
- [ ] Breaking changes dan instruksi migrasi telah didokumentasikan.
- [ ] Pengujian yang relevan telah selesai.
- [ ] Isi changelog sesuai dengan kode yang akan dirilis.
- [ ] Git tag dan GitHub Release menggunakan versi yang sama.

**Ketentuan:** Changelog merupakan bagian dari dokumentasi release resmi IDEA SUPPORT. Release tidak boleh dinyatakan selesai sebelum nomor versi, tanggal, catatan perubahan, dan Git tag diverifikasi.


**IDEA SUPPORT**

*Build Together, Grow Further*

Repository Development Standards  
ISPL v1.0 · Copyright © 2026 IDEA SUPPORT. All rights reserved.