import React, { useState, useEffect } from 'react';
import { Brain, Clock, ArrowRight, Check, X } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  answer: number;
  explanation: string;
  category: string;
};

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "Jika 3x + 7 = 22, berapakah nilai x?",
    answer: 5,
    explanation: "3x + 7 = 22\n3x = 22 - 7\n3x = 15\nx = 5",
    category: "Aljabar"
  },
  {
    id: 2,
    question: "Berapakah hasil dari 15% dari 80?",
    answer: 12,
    explanation: "15% dari 80 = (15/100) × 80 = 12",
    category: "Persentase"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  useEffect(() => {
    if (timeLeft > 0 && timerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      checkAnswer();
    }
  }, [timeLeft, timerActive]);

  const checkAnswer = () => {
    const correct = Number(userAnswer) === sampleQuestions[currentQuestion].answer;
    setIsCorrect(correct);
    setShowResult(true);
    setTimerActive(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setShowResult(false);
      setTimeLeft(60);
      setTimerActive(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
        </div>

        {/* Practice Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Timer */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span className="text-lg font-semibold">
                Waktu: {timeLeft} detik
              </span>
            </div>
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              {sampleQuestions[currentQuestion].category}
            </span>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Soal {currentQuestion + 1}:
            </h3>
            <p className="text-lg">{sampleQuestions[currentQuestion].question}</p>
          </div>

          {/* Answer Input */}
          <div className="mb-6">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan jawabanmu..."
              disabled={showResult}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            {!showResult ? (
              <button
                onClick={checkAnswer}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Periksa Jawaban
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <span>Soal Berikutnya</span>
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
                  {sampleQuestions[currentQuestion].explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;