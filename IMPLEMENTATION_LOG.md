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

## Minggu 2: Autentikasi & Dashboard Utama (Siswa)

### [ ] Action Items
- [X] Membuat mock data `user_profile.json`.
 - [X] Membuat mock data `schools.json`.
- [X] Mengimplementasikan Halaman Login dengan selektor Unit Sekolah.
- [X] Membuat komponen `BottomNav` untuk akses mobile.
- [X] Membuat Halaman Dashboard Siswa (Ringkasan Progres & Grid Kursus).