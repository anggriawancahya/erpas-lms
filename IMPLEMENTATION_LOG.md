# Log Implementasi ERPAS LMS

## Minggu 1: Setup Infrastruktur & Struktur Folder

### [X] Inisialisasi Proyek
- Framework: Next.js 14+ (App Router).
- Bahasa: TypeScript.
- Styling: Tailwind CSS.

### [X] Konfigurasi UI Library
- Library: **DaisyUI** telah terpasang dan dikonfigurasi di `tailwind.config.ts`.
- Theme: Default menggunakan tema `light` dan `winter`.

### [X] Pembersihan Halaman Utama
- File `src/app/page.tsx` telah dibersihkan dari boilerplate Vercel.

### [X] Mock Data
 - [X] Definisi Type Interface di `src/types/index.ts`.

## Minggu 2: Autentikasi & Dashboard Utama (Siswa) - SELESAI

### [X] Action Items
- [X] Membuat mock data `user_profile.json`.
 - [X] Membuat mock data `schools.json`.
- [X] Mengimplementasikan Halaman Login dengan selektor Unit Sekolah.
- [X] Membuat komponen `BottomNav` untuk akses mobile.
- [X] Membuat Halaman Dashboard Siswa (Ringkasan Progres & Grid Kursus).

## Minggu 3: Konten & Ruang Belajar - SELESAI

### [ ] Action Items
- [X] Standarisasi struktur data `courses.json` dengan detail silabus.
- [X] Mengimplementasikan Halaman Daftar Isi Kursus (`/courses/[id]`) dengan Silabus Accordion.
- [X] Membuat Halaman Ruang Belajar (Lesson Player) untuk Video & Teks.
- [X] Integrasi navigasi antar materi (Tandai Selesai).

## Minggu 4: Evaluasi & Panel Pengajar (In Progress)

### [ ] Action Items
- [X] Membuat Halaman Modul Kuis dengan Timer dan Navigasi Soal.
- [ ] Membuat Halaman Buku Nilai (Gradebook) untuk Guru.
- [ ] Implementasi Dasbor Pengajar (Ringkasan Kelas & Siswa).
- [ ] Uji Coba Alur End-to-End (Siswa Login -> Belajar -> Kuis -> Guru Lihat Nilai).