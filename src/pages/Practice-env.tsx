import React, { useState, useEffect } from 'react';
import { Brain, Clock, ArrowRight, Check, X, Flag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { sampleQuestions } from '../data/questions';
import type { PracticeConfig, QuestionResult } from '../types';

export default function Practice() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [config, setConfig] = useState<PracticeConfig | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState(sampleQuestions);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Get config from sessionStorage
    const savedConfig = sessionStorage.getItem('practiceConfig');
    if (!savedConfig) {
      navigate('/');
      return;
    }

    const parsedConfig = JSON.parse(savedConfig) as PracticeConfig;
    setConfig(parsedConfig);

    // Filter questions based on selected categories and limit
    const filtered = sampleQuestions
      .filter(q => parsedConfig.categories.includes(q.category))
      .slice(0, parsedConfig.numberOfQuestions === 0 ? undefined : parsedConfig.numberOfQuestions);
    
    setFilteredQuestions(filtered);
    // Set initial timer based on config
    setTimeLeft(parsedConfig.timePerQuestion * 60);
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (config?.timePerQuestion === 0) {
      setTimerActive(false);
      return;
    }

    if (timeLeft > 0 && timerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      checkAnswer();
    }
  }, [timeLeft, timerActive]);

  const checkAnswer = () => {
    const correct = Number(userAnswer) === filteredQuestions[currentQuestion].answer;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    setIsCorrect(correct);
    setShowResult(true);
    setTimerActive(false);
    setShowNotification(true);

    // Auto-hide notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    // Save question result
    setResults(prev => [...prev, {
      questionId: filteredQuestions[currentQuestion].id,
      category: filteredQuestions[currentQuestion].category,
      isCorrect: correct,
      timeSpent,
      userAnswer,
      correctAnswer: filteredQuestions[currentQuestion].answer
    }]);
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setShowResult(false);
      if (config?.timePerQuestion !== 0) {
        setTimeLeft(config?.timePerQuestion ? config.timePerQuestion * 60 : 60);
        setTimerActive(true);
      }
      setStartTime(Date.now());
    } else {
      finishPractice();
    }
  };

  const finishPractice = () => {
    sessionStorage.setItem('practiceResults', JSON.stringify(results));
    navigate('/statistics');
  };

  if (!config) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
            showNotification ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } ${
            isCorrect
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          <div className="flex items-center space-x-3">
            {isCorrect ? (
              <>
                <Check className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Jawaban Benar!</p>
                  <p className="text-sm opacity-90">Bagus sekali, lanjutkan!</p>
                </div>
              </>
            ) : (
              <>
                <X className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Jawaban Salah</p>
                  <p className="text-sm opacity-90">Jangan menyerah, coba lagi!</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Berlatih Matematika
          </h1>
          <p className="text-xl text-gray-600">
            Tingkatkan kemampuan matematikamu dengan latihan soal interaktif
          </p>
          <Link
            to="/editor"
            className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Kelola Soal
          </Link>
        </div>

        {/* Practice Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Timer and Category */}
          <div className="flex items-center justify-between mb-6">
            {config.timePerQuestion !== 0 && (
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="text-lg font-semibold">
                  Waktu: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            )}
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
              {filteredQuestions[currentQuestion].category}
            </span>
          </div>

          {/* Question and Answer Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Question Side */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Soal {currentQuestion + 1}:
              </h3>
              <p className="text-lg">{filteredQuestions[currentQuestion].question}</p>
            </div>

            {/* Answer Side */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Jawaban:</h3>
              {config.questionType === 'short_answer' ? (
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Masukkan jawabanmu..."
                  disabled={showResult}
                />
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => setUserAnswer(String(filteredQuestions[currentQuestion].answer))}
                    className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                    disabled={showResult}
                  >
                    {filteredQuestions[currentQuestion].answer}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            {!showResult ? (
              <div className="flex space-x-3">
                <button
                  onClick={checkAnswer}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Periksa Jawaban
                </button>
                {config.numberOfQuestions === 0 && (
                  <button
                    onClick={finishPractice}
                    className="flex items-center space-x-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Selesai</span>
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <span>{currentQuestion < filteredQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesai'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result and Explanation */}
          {showResult && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                {isCorrect ? (
                  <>
                    <Check className="w-6 h-6 text-green-500" />
                    <span className="text-green-500 font-semibold">Benar!</span>
                  </>
                ) : (
                  <>
                    <X className="w-6 h-6 text-red-500" />
                    <span className="text-red-500 font-semibold">
                      Maaf, jawaban kurang tepat
                    </span>
                  </>
                )}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Pembahasan:</h4>
                <p className="whitespace-pre-line">
                  {filteredQuestions[currentQuestion].explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}