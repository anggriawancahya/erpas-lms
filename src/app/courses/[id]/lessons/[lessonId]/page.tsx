'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import courses from '@/data/courses.json';
import { ChevronLeft, ChevronRight, Send, Clock, AlertCircle } from 'lucide-react';

export default function QuizPage({ params }: { params: { id: string, lessonId: string } }) {
  const router = useRouter();
  const course = courses.find((c) => c.id === params.id);
  const lesson = course?.syllabus.flatMap(c => c.lessons).find(l => l.id === params.lessonId);

  // State management
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState((lesson?.duration_minutes || 15) * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!course || !lesson || lesson.type !== 'quiz') {
    return <div className="p-10 text-center">Data kuis tidak ditemukan.</div>;
  }

  const questions = lesson.questions || [];
  const currentQuestion = questions[currentQuestionIdx];

  const handleAnswerSelect = (optionIdx: number) => {
    setAnswers({ ...answers, [currentQuestionIdx]: optionIdx });
  };

  const handleSubmit = () => {
    const confirm = window.confirm("Apakah Anda yakin ingin mengumpulkan jawaban?");
    if (confirm) {
      setIsSubmitted(true);
      // Di sini nantinya akan ada logika simpan nilai ke API/Mock
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-xl max-w-md w-full text-center p-8">
          <div className="flex justify-center mb-4">
            <div className="bg-success/20 text-success p-4 rounded-full">
              <Send className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Kuis Selesai!</h2>
          <p className="mt-2 text-base-content/70">Jawaban Anda telah berhasil dikirim. Guru akan meninjau hasilnya di buku nilai.</p>
          <div className="mt-8 space-y-3">
            <Link href={`/courses/${course.id}`} className="btn btn-primary w-full">Kembali ke Kursus</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 flex flex-col">
      {/* Header Kuis */}
      <div className="navbar bg-base-100 border-b border-base-300 px-4 sticky top-0 z-20">
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-primary">{lesson.title}</span>
            <h1 className="text-sm font-bold">Soal {currentQuestionIdx + 1} dari {questions.length}</h1>
          </div>
        </div>
        <div className="flex-none gap-4">
          <div className={`flex items-center gap-2 font-mono font-bold px-3 py-1 rounded-full ${timeLeft < 60 ? 'bg-error text-error-content animate-pulse' : 'bg-base-200'}`}>
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Area Soal */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-lg font-medium leading-relaxed">
                {currentQuestion.question}
              </p>
            </div>

            {/* Pilihan Jawaban */}
            <div className="space-y-3">
              {currentQuestion.options.map((option: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all text-left ${
                    answers[currentQuestionIdx] === idx
                      ? 'border-primary bg-primary/5 ring-1 ring-primary'
                      : 'border-base-300 hover:border-primary/50'
                  }`}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 border font-bold ${
                    answers[currentQuestionIdx] === idx ? 'bg-primary text-primary-content' : 'bg-base-200'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              ))}
            </div>

            {/* Navigasi Bawah */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-200">
              <button
                disabled={currentQuestionIdx === 0}
                onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                className="btn btn-ghost btn-sm gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Sebelumnya
              </button>

              {currentQuestionIdx === questions.length - 1 ? (
                <button onClick={handleSubmit} className="btn btn-success btn-sm text-white gap-2 px-6">
                  Kirim Jawaban <Send className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                  className="btn btn-primary btn-sm gap-2 px-6"
                >
                  Berikutnya <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Grid Navigasi Soal (Desktop & Mobile Bottom) */}
        <div className="w-full lg:w-72 bg-base-200 p-4 border-t lg:border-t-0 lg:border-l border-base-300">
          <h3 className="font-bold text-xs uppercase opacity-50 mb-4">Navigasi Soal</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIdx(idx)}
                className={`h-10 rounded-lg text-sm font-bold flex items-center justify-center transition-colors ${
                  currentQuestionIdx === idx
                    ? 'bg-primary text-primary-content ring-2 ring-primary ring-offset-2'
                    : answers[idx] !== undefined
                    ? 'bg-success text-success-content'
                    : 'bg-base-100 hover:bg-base-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 bg-info/10 rounded-lg flex gap-3 text-xs leading-tight">
            <AlertCircle className="w-4 h-4 text-info shrink-0" />
            <p>Jawaban disimpan secara otomatis. Klik tombol kirim jika sudah yakin.</p>
          </div>
        </div>
      </div>
    </main>
  );
}