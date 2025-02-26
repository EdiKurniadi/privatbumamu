export type Question = {
  id: number;
  question: string;
  answer: number;
  explanation: string;
  category: string;
  difficulty?: 'mudah' | 'sedang' | 'sulit';
};

export type PracticeConfig = {
  categories: string[];
  timePerQuestion: number;
  questionType: 'multiple_choice' | 'short_answer';
  numberOfQuestions: number;
  difficulty?: 'mudah' | 'sedang' | 'sulit';
  mode: "serius" | "santai";
};

export type QuestionResult = {
  questionId: number;
  category: string;
  isCorrect: boolean;
  timeSpent: number;
  userAnswer: string;
  correctAnswer: number;
};

export type Video = {
  id: number;
  title: string;
  description: string;
  driveId: string;
  thumbnail: string;
  duration: string;
};

export type VideoCategory = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videos: Video[];
};

export type TryoutPackage = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: number; // in minutes
  totalQuestions: number;
  difficulty: 'mudah' | 'sedang' | 'sulit';
  categories: string[];
  price: number;
  isPremium: boolean;
};

export type TryoutQuestion = {
  id: number;
  packageId: string;
  question: string;
  options: Record<string, number>;
  correctOption: number;
  explanation: string;
  category: string;
};

export type TryoutAnswer = {
  questionId: number;
  selectedOption: string | null;
  isMarkedForReview: boolean;
  isAnswered: boolean;
};

export type TryoutSession = {
  id: string;
  packageId: string;
  startTime: string;
  endTime: string | null;
  answers: TryoutAnswer[];
  score: number | null;
  isCompleted: boolean;
};

export type TryoutHistory = {
  id: string;
  packageId: string;
  packageTitle: string;
  date: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeUsed: number;
  difficulty: string;
};