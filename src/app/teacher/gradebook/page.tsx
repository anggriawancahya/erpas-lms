'use client';

import React from 'react';
import Link from 'next/link';
import courses from '@/data/courses.json';
import { ChevronRight, FileSpreadsheet } from 'lucide-react';

export default function GradebookListPage() {
  // Filter mata pelajaran untuk guru "Budi Santoso, S.Pd"
  const myCourses = courses.filter(c => c.teacher === "Budi Santoso, S.Pd");

  return (
    <main className="p-4 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-success/20 text-success p-2 rounded-lg">
          <FileSpreadsheet className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Buku Nilai</h1>
          <p className="text-sm opacity-60">Pilih mata pelajaran untuk melihat detail nilai siswa</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {myCourses.map(course => (
          <Link 
            key={course.id} 
            href={`/teacher/gradebook/${course.id}`}
            className="card bg-base-100 border border-base-300 hover:border-primary transition-all active:scale-[0.98]"
          >
            <div className="card-body p-5 flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center font-bold text-xl text-base-content/30">
                  {course.title.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{course.title}</h3>
                  <p className="text-xs opacity-60">Kelas X-A • 40 Siswa</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                Lihat Nilai <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
