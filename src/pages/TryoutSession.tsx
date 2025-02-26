import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  AlertTriangle,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { tryoutPackages } from '../data/tryoutPackages';
import type { TryoutAnswer, TryoutPackage } from '../types';

export default function TryoutSession() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(6000); // 100 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [answers, setAnswers] = useState<TryoutAnswer[]>([]);
  const tryoutPackage = tryoutPackages.find(p => p.id === packageId);
  const [timeSpentPerQuestion, setTimeSpentPerQuestion] = useState<number[]>(
    Array(tryoutPackage?.totalQuestions || 0).fill(0)
  );
  const questionTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!tryoutPackage) {
      navigate('/tryout');
      return;
    }

    // Initialize answers array
    setAnswers(Array(tryoutPackage.totalQuestions).fill(null).map((_, index) => ({
      questionId: index + 1,
      selectedOption: null,
      isMarkedForReview: false,
      isAnswered: false
    })));
  }, [tryoutPackage, navigate]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      finishTryout();
    }
  }, [timeLeft]);


  useEffect(() => {
    // Mulai timer untuk soal saat ini
    questionTimerRef.current = setInterval(() => {
      setTimeSpentPerQuestion(prev => {
        const newTimeSpent = [...prev];
        newTimeSpent[currentQuestion] += 1;
        return newTimeSpent;
      });
    }, 1000);

    return () => {
      if (questionTimerRef.current) {
        clearInterval(questionTimerRef.current);
      }
    };
  }, [currentQuestion]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionText: string) => {
    setAnswers(prev => prev.map((ans, idx) => 
      idx === currentQuestion
        ? { ...ans, selectedOption: optionText, isAnswered: true }
        : ans
    ));
  };

  const toggleMarkForReview = () => {
    setAnswers(prev => prev.map((ans, idx) => 
      idx === currentQuestion
        ? { ...ans, isMarkedForReview: !ans.isMarkedForReview }
        : ans
    ));
  };

  const finishTryout = () => { // Simpan hasil tryout ke localStorage 
    navigate('/tryoutResult', { state: { tryoutPackage, answers, timeLeft, timeSpentPerQuestion } }); 
  };


  if (!tryoutPackage) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Confirmation Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center space-x-3 text-amber-500 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray-900">Konfirmasi Selesai</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin mengakhiri try out? Pastikan semua jawaban sudah terisi dengan benar.
            </p>
            <div className="flex space-x-3 justify-end">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Kembali
              </button>
              <button
                onClick={finishTryout}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Ya, Selesaikan
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">{tryoutPackage.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span className={`font-mono text-lg ${
                timeLeft <= 300 ? 'text-red-600 animate-pulse font-bold' : ''
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              onClick={() => setShowConfirmFinish(true)}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center space-x-2"
            >
              <Flag className="w-4 h-4" />
              <span>Selesai</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Numbers */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigasi Soal</h2>
            <div className="grid grid-cols-5 gap-2">
              {answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                    currentQuestion === index
                      ? 'bg-indigo-600 text-white'
                      : answer.isAnswered
                      ? 'bg-green-100 text-green-700'
                      : answer.isMarkedForReview
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {answer.isAnswered ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : answer.isMarkedForReview ? (
                    <HelpCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-green-100 rounded" />
                <span>Sudah dijawab</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-amber-100 rounded" />
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-gray-100 rounded" />
                <span>Belum dijawab</span>
              </div>
            </div>
          </div>

          {/* Question and Options */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Soal {currentQuestion + 1}
              </h3>
              <p className="text-gray-600">
                {tryoutPackage.questions[currentQuestion]?.text}
              </p>
            </div>

            <div className="space-y-3 mb-6">
             {/*// Render opsi jawaban*/}
              {Object.entries(tryoutPackage.questions[currentQuestion]?.options || {}).map(([optionText, score], index) => (
                <button
                  key={optionText}
                  onClick={() => handleAnswer(optionText)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    answers[currentQuestion]?.selectedOption === optionText
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span> 
                  {optionText}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={toggleMarkForReview}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  answers[currentQuestion]?.isMarkedForReview
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {answers[currentQuestion]?.isMarkedForReview ? 'Hapus Ragu-ragu' : 'Ragu-ragu'}
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentQuestion(prev => Math.min(tryoutPackage.totalQuestions - 1, prev + 1))}
                  disabled={currentQuestion === tryoutPackage.totalQuestions - 1}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}