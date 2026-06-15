export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  school_unit: string;
  avatar?: string;
  class?: string;
}

export interface SchoolUnit {
  id: string;
  name: string;
  logo?: string;
}

export type LessonType = 'Teks' | 'Video' | 'PDF' | 'Kuis';
export type LessonStatus = 'completed' | 'available' | 'locked';

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  status: LessonStatus;
  content_url?: string;
  quiz_id?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  teacher: string;
  description: string;
  thumbnail: string;
  progress: number;
  chapters: Chapter[];
}