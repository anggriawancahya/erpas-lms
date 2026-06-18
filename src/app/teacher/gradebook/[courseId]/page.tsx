'use client';

import React from 'react';
import Link from 'next/link';
import courses from '@/data/courses.json';
import grades from '@/data/gradebook.json';
import { ChevronLeft, Download, Filter, Search } from 'lucide-react';

export default function GradebookDetailPage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId);
  const courseGrades = grades.filter(g => g.course_id === params.courseId);

  if (!course) return <div className="p-10">Kursus tidak ditemukan.</div>;

  return (
    <main className="p-4 md:p-8">
      {/* Breadcrumbs / Back */}
      <Link href="/teacher/gradebook" className="btn btn-ghost btn-sm gap-2 mb-4 pl-0">
        <ChevronLeft className="w-4 h-4" /> Kembali ke Daftar
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-sm opacity-60">Rekapitulasi Nilai Seluruh Kuis</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline btn-sm gap-2">
            <Download className="w-4 h-4" /> Export Excel
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
          <input type="text" placeholder="Cari nama siswa..." className="input input-bordered w-full pl-10 input-sm" />
        </div>
        <button className="btn btn-ghost btn-sm border-base-300 gap-2">
          <Filter className="w-4 h-4" /> Filter Soal
        </button>
      </div>

      {/* Grade Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl border border-base-300">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="bg-base-200">Nama Siswa</th>
              <th className="bg-base-200">Kuis</th>
              <th className="bg-base-200 text-center">Skor</th>
              <th className="bg-base-200">Tanggal Selesai</th>
              <th className="bg-base-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {courseGrades.map((grade) => (
              <tr key={grade.id} className="hover">
                <td className="font-medium">{grade.student_name}</td>
                <td className="text-xs">{grade.quiz_title || "Kuis 1"}</td>
                <td className="text-center">
                  <div className={`badge font-bold ${
                    grade.score >= 75 ? 'badge-success text-white' : 'badge-error text-white'
                  }`}>
                    {grade.score}
                  </div>
                </td>
                <td className="text-xs opacity-70">
                  {new Date(grade.submitted_at).toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </td>
                <td>
                  <span className="text-[10px] font-bold uppercase text-success">Lulus</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
