import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import courses from '@/data/courses.json';
import { ChevronLeft, ChevronRight, CheckCircle, PlayCircle, FileText, Menu } from 'lucide-react';

export default function LessonPlayerPage({ params }: { params: { id: string, lessonId: string } }) {
  const course = courses.find((c) => c.id === params.id);
  
  // Mencari lesson di dalam silabus
  let currentLesson: any = null;
  let nextLesson: any = null;
  let prevLesson: any = null;
  
  const allLessons = course?.syllabus.flatMap(chapter => chapter.lessons) || [];
  const currentIndex = allLessons.findIndex(l => l.id === params.lessonId);

  if (currentIndex !== -1) {
    currentLesson = allLessons[currentIndex];
    prevLesson = allLessons[currentIndex - 1];
    nextLesson = allLessons[currentIndex + 1];
  }

  if (!course || !currentLesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-100 flex flex-col">
      {/* Top Navigation */}
      <div className="navbar bg-base-100 border-b border-base-300 px-4 sticky top-0 z-20">
        <div className="flex-1 flex items-center gap-2">
          <Link href={`/courses/${course.id}`} className="btn btn-ghost btn-sm btn-circle">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary opacity-70">
              {course.title}
            </span>
            <h1 className="text-sm font-bold truncate max-w-[200px] md:max-w-md">
              {currentLesson.title}
            </h1>
          </div>
        </div>
        <div className="flex-none">
          <label htmlFor="lesson-drawer" className="btn btn-ghost btn-sm btn-circle lg:hidden">
            <Menu className="w-5 h-5" />
          </label>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Content Renderer */}
            {currentLesson.type === 'video' ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Mock Video
                  title="Lesson Video"
                  allowFullScreen
                ></iframe>
              </div>
            ) : currentLesson.type === 'quiz' ? (
              <div className="card bg-primary/10 border border-primary/20 text-center p-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-primary text-primary-content rounded-full">
                    <PlayCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold">Siap untuk Kuis?</h2>
                  <p className="max-w-xs opacity-70">Uji pemahamanmu tentang materi ini sekarang.</p>
                  <button className="btn btn-primary mt-4">Mulai Kuis Sekarang</button>
                </div>
              </div>
            ) : (
              <div className="prose prose-sm md:prose-base max-w-none">
                <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="bg-base-200 p-4 rounded-lg my-6 italic border-l-4 border-primary">
                  &quot;Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia.&quot; - Nelson Mandela
                </div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Materi ini membahas dasar-dasar yang penting untuk memahami bab selanjutnya. Pastikan Anda mencatat poin-poin utama sebelum melanjutkan ke kuis atau materi video.</p>
              </div>
            )}

            {/* Bottom Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-base-200 mt-12 pb-20">
              {prevLesson ? (
                <Link href={`/courses/${course.id}/lessons/${prevLesson.id}`} className="btn btn-outline btn-sm gap-2">
                  <ChevronLeft className="w-4 h-4" /> Sebelumnya
                </Link>
              ) : <div />}

              <div className="flex gap-2">
                <button className="btn btn-success btn-sm text-white gap-2">
                  <CheckCircle className="w-4 h-4" /> Selesai
                </button>
                {nextLesson && (
                  <Link href={`/courses/${course.id}/lessons/${nextLesson.id}`} className="btn btn-primary btn-sm gap-2">
                    Lanjut <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation (Desktop) / Drawer (Mobile placeholder logic) */}
        <div className="hidden lg:block w-80 bg-base-200 border-l border-base-300 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-bold text-sm mb-4">Konten Kursus</h3>
            <div className="space-y-4">
              {course.syllabus.map((chapter) => (
                <div key={chapter.id} className="space-y-1">
                  <h4 className="text-xs font-bold opacity-50 px-2 uppercase">{chapter.title}</h4>
                  {chapter.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/courses/${course.id}/lessons/${lesson.id}`}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm transition-colors ${
                        lesson.id === params.lessonId 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-300'
                      }`}
                    >
                      {lesson.type === 'video' ? <PlayCircle className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      <span className="truncate">{lesson.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}