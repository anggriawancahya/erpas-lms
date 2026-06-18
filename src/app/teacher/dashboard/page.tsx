'use client';

import React from 'react';
import Link from 'next/link';
import courses from '@/data/courses.json';
import { Users, BookOpen, GraduationCap, Plus, ListChecks, ChevronRight } from 'lucide-react';

export default function TeacherDashboard() {
  // Mock: Mengambil data mata pelajaran yang diampu oleh Budi Santoso
  const teacherName = "Budi Santoso, S.Pd";
  const myCourses = courses.filter(c => c.teacher === teacherName);

  return (
    <main className="min-h-screen">
      {/* Header Guru */}
      <div className="bg-primary text-primary-content p-8 rounded-b-[3rem] shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Selamat Datang, {teacherName}!</h1>
            <p className="opacity-80 text-sm">Unit: SMA 1 Yayasan • NIP: 198501012010121001</p>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary-content ring-offset-base-100 ring-offset-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" alt="profile" />
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <Users className="w-5 h-5 mb-2 opacity-70" />
            <div className="text-2xl font-bold">120</div>
            <div className="text-[10px] uppercase font-bold opacity-70">Total Siswa</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <BookOpen className="w-5 h-5 mb-2 opacity-70" />
            <div className="text-2xl font-bold">{myCourses.length}</div>
            <div className="text-[10px] uppercase font-bold opacity-70">Mata Pelajaran</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <GraduationCap className="w-5 h-5 mb-2 opacity-70" />
            <div className="text-2xl font-bold">82%</div>
            <div className="text-[10px] uppercase font-bold opacity-70">Rerata Kuis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <ListChecks className="w-5 h-5 mb-2 opacity-70" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-[10px] uppercase font-bold opacity-70">Tugas Baru</div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 space-y-8">
        {/* Aksi Cepat */}
        <section>
          <h2 className="text-lg font-bold mb-4">Aksi Cepat</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button className="btn btn-outline border-dashed flex-none flex-col h-auto py-4 px-8 gap-2 bg-base-100">
              <Plus className="w-6 h-6 text-primary" />
              <span className="text-xs">Materi Baru</span>
            </button>
            <Link href="/teacher/gradebook" className="btn btn-outline border-dashed flex-none flex-col h-auto py-4 px-8 gap-2 bg-base-100 text-base-content">
              <ListChecks className="w-6 h-6 text-success" />
              <span className="text-xs">Buku Nilai</span>
            </Link>
          </div>
        </section>

        {/* Daftar Kelas yang Diampu */}
        <section>
          <h2 className="text-lg font-bold mb-4">Kelas Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myCourses.map(course => (
              <div key={course.id} className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{course.title}</h3>
                      <p className="text-sm opacity-60">Matematika • Kelas X-A</p>
                    </div>
                    <div className="badge badge-accent badge-outline text-[10px] font-bold">AKTIF</div>
                  </div>
                  
                  <div className="card-actions justify-end mt-6 pt-4 border-t border-base-200 gap-2">
                    <button className="btn btn-ghost btn-sm text-xs">Kelola Materi</button>
                    <Link href={`/teacher/gradebook/${course.id}`} className="btn btn-primary btn-sm text-xs">
                      Lihat Nilai <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
