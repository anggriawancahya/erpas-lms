import React from 'react';
import { Home, ListChecks, BookOpen, Settings } from 'lucide-react';
import Link from 'next/link';

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <div className="flex-1 pb-20">
        {children}
      </div>

      {/* Bottom Nav khusus Pengajar */}
      <div className="btm-nav btm-nav-md border-t bg-base-100 z-50">
        <Link href="/teacher/dashboard" className="text-primary">
          <Home className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Beranda</span>
        </Link>
        <Link href="/teacher/gradebook">
          <ListChecks className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Nilai</span>
        </Link>
        <Link href="/teacher/courses">
          <BookOpen className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Materi</span>
        </Link>
        <Link href="/teacher/settings">
          <Settings className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Akun</span>
        </Link>
      </div>
    </div>
  );
}
