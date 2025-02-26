import React, { useState, useEffect } from 'react';
import { Brain, Clock, ArrowRight, Check, X, Flag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { sampleQuestions } from '../data/questions'; // Pastikan ini adalah array raw question
import type { PracticeConfig, QuestionResult } from '../types';

/* ===============================
   Tipe Data
   =============================== */

// Tipe data untuk raw question (soal dari database)
interface RawQuestion {
  id: number;
  variabel?: { [key: string]: string }; // contoh: { "JumlahPensilDijual": "[1-7,1]", ... }
  question: string;
  answer: string; // ekspresi, misalnya "{JumlahPensilDibeliBudi*HargaPensil}"
  explanation: string;
  category: string;
}

// Tipe data untuk processed question (soal yang sudah disubstitusi)
interface ProcessedQuestion {
  id: number;
  question: string;
  answer: number;
  explanation: string;
  category: string;
}

// Wrapper soal yang menyimpan soal raw, soal processed, dan nilai variabel yang dihasilkan
interface ProcessedQuestionWrapper {
  raw: RawQuestion;
  processed: ProcessedQuestion;
  vars: { [key: string]: number };
}

/* ===============================
   Fungsi Utilitas untuk Format Angka
   =============================== */

// Fungsi untuk menampilkan angka dengan pemisah ribuan (menggunakan locale "id-ID")
function formatNumber(num: number): string {
  return num.toLocaleString("id-ID", { maximumFractionDigits: 2 });
}

/* ===============================
   Fungsi Bantu untuk Dynamic Template
   =============================== */

// Fungsi untuk menghasilkan nilai acak berdasarkan string range, misal "[1-7,1]"
function parseRange(rangeStr: string): number {
  const match = rangeStr.match(/\[(.*?)-(.*?),(.*?)\]/);
  if (!match) {
    throw new Error("Format range tidak valid: " + rangeStr);
  }
  const min = parseFloat(match[1]);
  const max = parseFloat(match[2]);
  const step = parseFloat(match[3]);
  const steps = Math.floor((max - min) / step);
  const randomStep = Math.floor(Math.random() * (steps + 1));
  return min + randomStep * step;
}

// Fungsi untuk menggantikan placeholder {…} dalam template dengan hasil evaluasi
function substituteTemplate(template: string, vars: { [key: string]: number }): string {
  return template.replace(/\{([^}]+)\}/g, (_, expr) => {
    try {
      const func = new Function(...Object.keys(vars), `return ${expr};`);
      const result = func(...Object.values(vars));
      return result;
    } catch (error) {
      console.error("Error mengevaluasi ekspresi:", expr, error);
      return "";
    }
  });
}

// Fungsi untuk memproses raw question menjadi processed question beserta variabelnya
function processQuestion(raw: RawQuestion): ProcessedQuestionWrapper {
  if (!raw.variabel) {
    return {
      raw,
      processed: {
        id: raw.id,
        question: raw.question,
        answer: parseFloat(raw.answer),
        explanation: raw.explanation,
        category: raw.category,
      },
      vars: {},
    };
  }
  const vars: { [key: string]: number } = {};
  for (const key in raw.variabel) {
    vars[key] = parseRange(raw.variabel[key]);
  }
  const processedQuestionText = substituteTemplate(raw.question, vars);
  const processedAnswer = parseFloat(substituteTemplate(raw.answer, vars));
  const processedExplanation = substituteTemplate(raw.explanation, vars);
  return {
    raw,
    processed: {
      id: raw.id,
      question: processedQuestionText,
      answer: processedAnswer,
      explanation: processedExplanation,
      category: raw.category,
    },
    vars,
  };
}

/* ===============================
   Fungsi Bantu untuk Opsi Pilihan Ganda
   =============================== */

// Metode 1: Menghasilkan opsi berdasarkan jawaban benar dengan offset
const possibleNs = [1000000, 100000, 10000, 1000, 100, 10, 1, 0.1];
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getFactorAndN = (correctAnswer: number): { factor: number; n: number } => {
  for (let i = 0; i < possibleNs.length; i++) {
    const n = possibleNs[i];
    if (Math.abs(correctAnswer % n) < 1e-9) {
      if (n < 10) {
        return { factor: 1, n };
      } else {
        return { factor: n, n };
      }
    }
  }
  return { factor: 1, n: 1 };
};

const generateOptionsMethod1 = (correctAnswer: number): number[] => {
  const optionSet = new Set<number>();
  optionSet.add(correctAnswer);
  const { factor, n } = getFactorAndN(correctAnswer);
  while (optionSet.size < 5) {
    let offset = 0;
    while (offset === 0) {
      offset = Math.floor(Math.random() * 21) - 10; // nilai antara -10 sampai +10
    }
    const candidate = correctAnswer + offset * factor;
    if (candidate < n / 10) continue;
    optionSet.add(candidate);
  }
  return shuffleArray(Array.from(optionSet));
};

// Metode 2: Menghasilkan opsi dengan "mengambil ulang" nilai variabel
const generateOptionsMethod2 = (
  raw: RawQuestion,
  originalVars: { [key: string]: number }
): number[] => {
  if (!raw.variabel) return [];
  const candidates = new Set<number>();
  for (const key in raw.variabel) {
    const match = raw.variabel[key].match(/\[(.*?)-(.*?),(.*?)\]/);
    if (!match) continue;
    const step = parseFloat(match[3]);
    for (const offset of [-3, 3]) {
      const newVars = { ...originalVars };
      newVars[key] = originalVars[key] + offset * step;
      try {
        const func = new Function(...Object.keys(newVars), `return ${raw.answer};`);
        const candidate = func(...Object.values(newVars));
        candidates.add(candidate);
      } catch (error) {
        console.error("Error evaluasi opsi metode 2:", error);
      }
    }
  }
  return Array.from(candidates);
};

const generateMCOptions = (wrapper: ProcessedQuestionWrapper): number[] => {
  const correctAnswer = wrapper.processed.answer;
  const options1 = generateOptionsMethod1(correctAnswer);
  const options2 = wrapper.raw.variabel
    ? generateOptionsMethod2(wrapper.raw, wrapper.vars)
    : [];
  const combined = new Set<number>([correctAnswer, ...options1, ...options2]);
  const combinedArray = shuffleArray(Array.from(combined));
  let finalOptions: number[] = [];
  if (combined.size <= 5) {
    finalOptions = Array.from(combined);
  } else {
    finalOptions.push(correctAnswer);
    const filtered = combinedArray.filter((opt) => opt !== correctAnswer);
    finalOptions = [correctAnswer, ...filtered.slice(0, 4)];
  }
  return shuffleArray(finalOptions);
};

/* ===============================
   Komponen Practice
   =============================== */

export default function Practice() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [config, setConfig] = useState<PracticeConfig | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<ProcessedQuestionWrapper[]>([]);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [options, setOptions] = useState<number[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    // Reset data latihan sebelumnya
    sessionStorage.removeItem('practiceResults');
    sessionStorage.removeItem('processedQuestions');
    
    const savedConfig = sessionStorage.getItem("practiceConfig");
    if (!savedConfig) {
      navigate("/");
      return;
    }
    const parsedConfig = JSON.parse(savedConfig) as PracticeConfig;
    setConfig(parsedConfig);

    // Filter soal berdasarkan kategori dan tingkat kesulitan (jika dipilih)
    let filteredRaw = sampleQuestions.filter((q: RawQuestion) => {
      const matchCategory = parsedConfig.categories.includes(q.category);
      const matchDifficulty = parsedConfig.difficulty ? q.level === parsedConfig.difficulty : true;
      return matchCategory && matchDifficulty;
    });

    // Acak soal yang telah difilter
    filteredRaw = shuffleArray(filteredRaw);

    // Jika numberOfQuestions tidak 0, ambil sejumlah soal sesuai pilihan pengguna
    if (parsedConfig.numberOfQuestions !== 0) {
      filteredRaw = filteredRaw.slice(0, parsedConfig.numberOfQuestions);
    }

    const processed = filteredRaw.map((q: RawQuestion) => processQuestion(q));
    setFilteredQuestions(processed);
    // Simpan array processed ke sessionStorage dengan nama key 'processedQuestions'
    sessionStorage.setItem('processedQuestions', JSON.stringify(processed));
    setTimeLeft(parsedConfig.timePerQuestion * 60);
    setStartTime(Date.now());
  }, [navigate]);


  useEffect(() => {
    if (
      config &&
      config.questionType === "multiple_choice" &&
      filteredQuestions.length > 0
    ) {
      const wrapper = filteredQuestions[currentQuestionIndex];
      const newOptions = generateMCOptions(wrapper);
      setOptions(newOptions);
    }
  }, [config, currentQuestionIndex, filteredQuestions]);

  useEffect(() => {
    if (config?.timePerQuestion === 0) {
      setTimerActive(false);
      return;
    }
    if (timeLeft > 0 && timerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      checkAnswer(true);
    }
  }, [timeLeft, timerActive]);

  const checkAnswer = (triggeredByTimeOut = false) => {
    const correct = Number(userAnswer) === filteredQuestions[currentQuestionIndex].processed.answer;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    setIsCorrect(correct);
    setShowResult(true);
    setTimerActive(false);
    setShowNotification(true);
    // Tampilkan notifikasi selama 2 detik
    setTimeout(() => {
      setShowNotification(false);
      // Jika mode "serius" dan waktu habis, langsung lanjut ke soal berikutnya
      if (triggeredByTimeOut && config.mode === 'serius') {
        nextQuestion();
      }
    }, 2000);
    setResults(prev => [
      ...prev,
      {
        questionId: filteredQuestions[currentQuestionIndex].processed.id,
        category: filteredQuestions[currentQuestionIndex].processed.category,
        isCorrect: correct,
        timeSpent,
        userAnswer,
        correctAnswer: filteredQuestions[currentQuestionIndex].processed.answer
      }
    ]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setShowResult(false);
      if (config?.timePerQuestion !== 0) {
        setTimeLeft(config.timePerQuestion * 60);
        setTimerActive(true);
      }
      setStartTime(Date.now());
    } else {
      finishPractice();
    }
  };

  const finishPractice = () => {
    sessionStorage.setItem("practiceResults", JSON.stringify(results));
    navigate("/statistics");
  };

  if (!config || filteredQuestions.length === 0) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Notification */}
      {showNotification && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-1000
                     text-white"
          // Gunakan background berbeda sesuai kondisi:
          style={{
            backgroundColor: timeLeft <= 0 ? "#ef4444" : isCorrect ? "#10b981" : "#ef4444",
          }}
        >
          <div className="flex items-center space-x-3">
            {timeLeft <= 0 ? (
              <>
                <div>
                  <p className="font-semibold">Waktu Habis!</p>
                  <p className="text-sm opacity-90">Silakan lanjut ke soal berikutnya.</p>
                </div>
              </>
            ) : isCorrect ? (
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
                  <p className="font-semibold">Jawaban Salah!</p>
                  <p className="text-sm opacity-90">Coba lagi di soal berikutnya.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}


      {/*notifikasi waktu sisa 10 detik*/}
      { (timeLeft <= 10 && timeLeft > 0) && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Border Kiri */}
          <div
            className="absolute top-0 left-0 h-full animate-pulse"
            style={{
              width: "40%",
              background: "linear-gradient(to right, rgba(239,68,68,0.1), rgba(239,68,68,0.001))",
            }}
          />
          {/* Border Kanan */}
          <div
            className="absolute top-0 right-0 h-full animate-pulse"
            style={{
              width: "40%",
              background: "linear-gradient(to left, rgba(239,68,68,0.1), rgba(239,68,68,0.001))",
            }}
          />
          {/* Border Atas */}
          <div
            className="absolute top-0 left-0 w-full animate-pulse"
            style={{
              height: "40%",
              background: "linear-gradient(to bottom, rgba(239,68,68,0.1), rgba(239,68,68,0.001))",
            }}
          />
          {/* Border Bawah */}
          <div
            className="absolute bottom-0 left-0 w-full animate-pulse"
            style={{
              height: "40%",
              background: "linear-gradient(to top, rgba(239,68,68,0.1), rgba(239,68,68,0.001))",
            }}
          />
        </div>
      )}



      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Berlatih Matematika</h1>
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
                  Waktu: {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              </div>
            )}
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
              {filteredQuestions[currentQuestionIndex].processed.category}
            </span>
          </div>

          {/* Question and Answer Section (Vertikal) */}
          <div className="mb-8">
            {/* Question */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Soal {currentQuestionIndex + 1}:
              </h3>
              <p className="text-lg" style={{ textAlign: "justify" }}>
                {filteredQuestions[currentQuestionIndex].processed.question}
              </p>
            </div>
            {/* Answer */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Jawaban:</h3>
              {config.questionType === "short_answer" ? (
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
                  {options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setUserAnswer(String(option))}
                      className={`w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50 ${
                        userAnswer === String(option)
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-300"
                      }`}
                      disabled={showResult}
                    >
                      {formatNumber(option)}
                    </button>
                  ))}
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
                <span>
                  {currentQuestionIndex < filteredQuestions.length - 1 ? "Soal Berikutnya" : "Selesai"}
                </span>
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
                <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
                  {filteredQuestions[currentQuestionIndex].processed.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
