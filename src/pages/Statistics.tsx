import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Brain,
  Clock,
  BarChart3,
  Target,
  Award,
  ArrowRight,
  Timer,
  BookOpen,
  Eye,
  X
} from 'lucide-react';
import type { QuestionResult } from '../types';
import { sampleQuestions } from '../data/questions';

export default function Statistics() {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  // Pindahkan pengambilan data ke dalam state sehingga akan di-update saat komponen di-mount
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [processedQuestions, setProcessedQuestions] = useState<any[]>([]);

  // Ambil data terbaru dari sessionStorage ketika komponen di-mount
  useEffect(() => {
    const storedResults = JSON.parse(sessionStorage.getItem('practiceResults') || '[]') as QuestionResult[];
    const storedProcessed = JSON.parse(sessionStorage.getItem('processedQuestions') || '[]');
    if (storedResults.length === 0) {
      navigate('/');
      return;
    }
    setResults(storedResults);
    setProcessedQuestions(storedProcessed);
  }, [navigate]);

  // Calculate statistics
  const totalQuestions = results.length;
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const accuracy = (correctAnswers / totalQuestions) * 100;
  const averageTime = results.reduce((acc, curr) => acc + curr.timeSpent, 0) / totalQuestions;

  // Cari detail soal berdasarkan questionId dari processedQuestions
  const getProcessedQuestionDetails = (questionId: number) => {
    // Pastikan kita mencari di properti processed.id
    return processedQuestions.find((q: any) => q.processed.id === questionId);
  };

  // Hitung statistik per kategori
  const categoryStats = results.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = { total: 0, correct: 0 };
    }
    acc[curr.category].total++;
    if (curr.isCorrect) acc[curr.category].correct++;
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Question Review Modal */}
      {selectedQuestion !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">Review Soal</h3>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {getProcessedQuestionDetails(selectedQuestion) && (
              <>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Pertanyaan:</h4>
                  <p className="text-lg text-justify">
                    {getProcessedQuestionDetails(selectedQuestion)?.processed.question}
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Jawabanmu:</h4>
                  <p className="text-lg">
                    {results.find(r => r.questionId === selectedQuestion)?.userAnswer}{' '}
                    <span
                      className={
                        results.find(r => r.questionId === selectedQuestion)?.isCorrect
                          ? 'text-green-600'
                          : 'text-red-600'
                      }
                    >
                      (
                      {results.find(r => r.questionId === selectedQuestion)?.isCorrect
                        ? 'Benar'
                        : 'Salah'}
                      )
                    </span>
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Jawaban Benar:</h4>
                  <p className="text-lg">
                    {getProcessedQuestionDetails(selectedQuestion)?.processed.answer}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Pembahasan:</h4>
                  <p className="text-lg whitespace-pre-line text-justify">
                    {getProcessedQuestionDetails(selectedQuestion)?.processed.explanation}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BarChart3 className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hasil Latihanmu
          </h1>
          <p className="text-xl text-gray-600">
            Lihat bagaimana performamu dalam sesi latihan ini
          </p>
        </div>

        {/* Main Stats */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Accuracy Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-indigo-600" />
              <span className="text-3xl font-bold text-indigo-600">
                {accuracy.toFixed(1)}%
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Akurasi</h3>
            <p className="text-sm text-gray-600">
              {correctAnswers} benar dari {totalQuestions} soal
            </p>
          </div>

          {/* Time Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Timer className="w-8 h-8 text-indigo-600" />
              <span className="text-3xl font-bold text-indigo-600">
                {averageTime.toFixed(1)}s
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Rata-rata Waktu</h3>
            <p className="text-sm text-gray-600">per soal</p>
          </div>

          {/* Score Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-indigo-600" />
              <span className="text-3xl font-bold text-indigo-600">
                {Math.round((accuracy + (60 - averageTime) * 2) / 2)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Skor Total</h3>
            <p className="text-sm text-gray-600">
              Berdasarkan akurasi dan kecepatan
            </p>
          </div>
        </div>

        {/* Category Performance */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Performa per Kategori</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <div key={category} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{category}</span>
                  <span className="text-indigo-600 font-semibold">
                    {((stats.correct / stats.total) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {stats.correct} benar dari {stats.total} soal
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Results */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Clock className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Detail Jawaban</h2>
          </div>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={result.questionId}
                className="border border-gray-100 rounded-lg p-4 hover:border-indigo-200 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">Soal {index + 1}</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`font-medium ${
                          result.isCorrect ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {result.isCorrect ? 'Benar' : 'Salah'}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{result.timeSpent}s</span>
                      
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedQuestion(result.questionId)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center space-x-2"
                      title="Lihat detail"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Lihat Soal</span>
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <p className="text-gray-600">
                    Jawaban Anda: <span className="font-medium">{result.userAnswer}</span>
                  </p>
                  {!result.isCorrect && (
                    <p className="text-gray-600">
                      Jawaban Benar: <span className="font-medium">{result.correctAnswer}</span>
                    </p>
                  )}
                  <span className="text-gray-600">
                       Topik: {result.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="max-w-4xl mx-auto flex justify-center space-x-4 mb-12">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          >
            <span>Latihan Lagi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
