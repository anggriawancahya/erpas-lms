import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import courses from '@/data/courses.json';
import BottomNav from '@/components/BottomNav';
import { ChevronLeft, PlayCircle, FileText, FileDown, HelpCircle, CheckCircle2, Lock } from 'lucide-react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case 'pdf': return <FileDown className="w-5 h-5 text-red-500" />;
      case 'quiz': return <HelpCircle className="w-5 h-5 text-orange-500" />;
      default: return <FileText className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <main className="min-h-screen bg-base-200 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-base-100 p-4 sticky top-0 z-10 border-b border-base-300">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="btn btn-ghost btn-sm btn-circle">
            <ChevronLeft />
          </Link>
          <div>
            <h1 className="font-bold text-lg leading-tight">{course.title}</h1>
            <p className="text-xs text-base-content/60">{course.teacher}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Progress Card */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body p-4 flex-row items-center gap-4">
            <div className="radial-progress text-primary" style={{ "--value": course.progress, "--size": "3rem" } as any} role="progressbar">
              <span className="text-[10px] font-bold">{course.progress}%</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Progres Belajar</h3>
              <p className="text-xs text-base-content/60">Selesaikan semua materi untuk sertifikat</p>
            </div>
          </div>
        </div>

        {/* Syllabus Accordion */}
        <div className="space-y-2">
          <h2 className="text-md font-bold px-1">Silabus Kursus</h2>
          {course.syllabus.map((chapter, index) => (
            <div key={chapter.id} className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl">
              <input type="checkbox" defaultChecked={index === 0} /> 
              <div className="collapse-title font-medium flex items-center justify-between pr-10">
                <span>{chapter.title}</span>
              </div>
              <div className="collapse-content p-0">
                <div className="divide-y divide-base-200">
                  {chapter.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id} 
                      href={`/courses/${course.id}/lessons/${lesson.id}`}
                      className="flex items-center justify-between p-4 hover:bg-base-200 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getIcon(lesson.type)}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{lesson.title}</span>
                          <span className="text-[10px] uppercase opacity-60 font-bold">{lesson.type}</span>
                        </div>
                      </div>
                      {lesson.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <Lock className="w-4 h-4 opacity-20" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  );
}