import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="hero bg-base-100 rounded-box shadow-xl max-w-2xl p-8 text-center">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold text-primary">ERPAS LMS</h1>
          <p className="py-6 text-lg">
            Prototipe Sistem Manajemen Pembelajaran Yayasan (Mobile-Ready).
            <br />
            Proyek ini sedang dalam tahap inisialisasi infrastruktur.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="card bg-base-200 p-4">
              <span className="font-bold">Status Minggu 2</span>
              <span className="badge badge-success mt-2 italic">Dashboard & Auth Selesai</span>
            </div>
            <div className="card bg-base-200 p-4">
              <span className="font-bold">Tahap Selanjutnya</span>
              <span className="badge badge-primary mt-2">Course Detail & Lesson Player</span>
            </div>
          </div>

          <Link href="/login" className="btn btn-primary mt-8 btn-wide">
            Mulai Bekerja
          </Link>
        </div>
      </div>
    </main>
  );
}
