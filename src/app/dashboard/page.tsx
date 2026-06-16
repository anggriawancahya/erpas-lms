import React from 'react';
import Link from 'next/link';
import courses from '@/data/courses.json';
import userProfile from '@/data/user_profile.json';
import BottomNav from '@/components/BottomNav';

export default function StudentDashboard() {
  // Mock active course (first one)
  const activeCourse = courses[0];

  return (
    <main className="min-h-screen bg-base-200 pb-20 lg:pb-0">
      {/* Header / Profile Summary */}
      <div className="bg-primary text-primary-content p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Halo, {userProfile.full_name}!</h1>
            <p className="text-sm opacity-80">{userProfile.school_name} • Kelas {userProfile.class}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Lanjutkan Belajar Widget */}
        <section>
          <h2 className="text-lg font-bold mb-3">Lanjutkan Belajar</h2>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">{activeCourse.title}</h3>
                  <p className="text-xs text-base-content/60">Terakhir: {activeCourse.last_lesson}</p>
                </div>
                <div className="badge badge-secondary">{activeCourse.progress}%</div>
              </div>
              <progress className="progress progress-primary w-full" value={activeCourse.progress} max="100"></progress>
              <div className="card-actions justify-end mt-2">
                <Link href={`/courses/${activeCourse.id}`} className="btn btn-primary btn-sm rounded-lg">
                  Lanjut
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Daftar Kursus Grid */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Mata Pelajaran</h2>
            <button className="btn btn-ghost btn-xs">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="card card-side bg-base-100 shadow-sm border border-base-300 active:scale-95 transition-transform">
                  <figure className="w-24 bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl italic font-serif text-accent">
                      {course.title.charAt(0)}
                    </span>
                  </figure>
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm">{course.title}</h3>
                    <p className="text-xs text-base-content/60">{course.teacher}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-sm">{course.progress}%</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <BottomNav />
    </main>
  );
}
