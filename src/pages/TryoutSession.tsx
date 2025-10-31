import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, Flag, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { tryoutPackages } from '../data/tryoutPackages.ts';
import type { TryoutAnswer } from '../types';

// --- Math rendering deps ---
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

/** Simple error boundary so satu soal rusak tidak crash seluruh halaman */
class Boundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; msg?: string }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err: any) {
    return { hasError: true, msg: String(err) };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          Terjadi kesalahan saat merender soal/teks. {this.state.msg}
        </div>
      );
    }
    return this.props.children as any;
  }
}

function MathText({ children, className }: { children: string | number; className?: string }) {
  // Paksa ke string agar aman ketika opsi berupa number (mis. 9, 10, dst.)
  const content = useMemo(() => String(children ?? ''), [children]);
  // Deteksi ringan apakah ada delimiter TeX
  const maybeHasMath = /\$|\\\(|\\\)|\\\[|\\\]/.test(content);
  return (
    <div className={className}>
      {maybeHasMath ? (
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {content}
        </ReactMarkdown>
      ) : (
        <span>{content}</span>
      )}
    </div>
  );
}

export default function TryoutSession() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3000); // 100 minutes
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [answers, setAnswers] = useState<TryoutAnswer[]>([]);
  const tryoutPackage = tryoutPackages.find((p) => p.id === packageId);
  const [timeSpentPerQuestion, setTimeSpentPerQuestion] = useState<number[]>(
    Array(tryoutPackage?.totalQuestions || 0).fill(0)
  );
  const questionTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!tryoutPackage) {
      navigate('/tryout');
      return;
    }
    setAnswers(
      Array(tryoutPackage.totalQuestions)
        .fill(null)
        .map((_, index) => ({
          questionId: index + 1,
          selectedOption: null,
          isMarkedForReview: false,
          isAnswered: false,
        }))
    );
  }, [tryoutPackage, navigate]);

  const finishTryout = useCallback(() => {
    if (!tryoutPackage) return;
    navigate('/tryoutResult', {
      state: { tryoutPackage, answers, timeLeft, timeSpentPerQuestion },
    });
  }, [answers, navigate, timeLeft, timeSpentPerQuestion, tryoutPackage]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    finishTryout();
  }, [finishTryout, timeLeft]);

  useEffect(() => {
    // Timer per-soal
    questionTimerRef.current = setInterval(() => {
      setTimeSpentPerQuestion((prev) => {
        const next = [...prev];
        if (currentQuestion >= 0 && currentQuestion < next.length) next[currentQuestion] += 1;
        return next;
      });
    }, 1000);
    return () => {
      if (questionTimerRef.current) clearInterval(questionTimerRef.current);
      questionTimerRef.current = null;
    };
  }, [currentQuestion]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionText: string) => {
    setAnswers((prev) =>
      prev.map((ans, idx) =>
        idx === currentQuestion ? { ...ans, selectedOption: optionText, isAnswered: true } : ans
      )
    );
  };

  const toggleMarkForReview = () => {
    setAnswers((prev) =>
      prev.map((ans, idx) =>
        idx === currentQuestion ? { ...ans, isMarkedForReview: !ans.isMarkedForReview } : ans
      )
    );
  };

  if (!tryoutPackage) return null;

  const q = tryoutPackage.questions[currentQuestion];
  const optionEntries = useMemo(() => Object.entries(q?.options || {}), [q]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {showConfirmFinish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center space-x-3 text-amber-500 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray-900">Konfirmasi Selesai</h3>
            </div>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin mengakhiri try out? Pastikan semua jawaban sudah terisi.</p>
            <div className="flex space-x-3 justify-end">
              <button onClick={() => setShowConfirmFinish(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Kembali</button>
              <button onClick={finishTryout} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">Ya, Selesaikan</button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">{tryoutPackage.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span className={`font-mono text-lg ${timeLeft <= 300 ? 'text-red-600 animate-pulse font-bold' : ''}`}>{formatTime(timeLeft)}</span>
            </div>
            <button onClick={() => setShowConfirmFinish(true)} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center space-x-2">
              <Flag className="w-4 h-4" />
              <span>Selesai</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                  title={`Soal ${index + 1}`}
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
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center space-x-2"><div className="w-4 h-4 bg-green-100 rounded" /><span>Sudah dijawab</span></div>
              <div className="flex items-center space-x-2"><div className="w-4 h-4 bg-amber-100 rounded" /><span>Ragu-ragu</span></div>
              <div className="flex items-center space-x-2"><div className="w-4 h-4 bg-gray-100 rounded" /><span>Belum dijawab</span></div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Soal {currentQuestion + 1}</h3>
              <Boundary>
                <MathText className="prose max-w-none text-gray-800">{q?.text || ''}</MathText>
              </Boundary>
            </div>

            <div className="space-y-3 mb-6">
              {optionEntries.map(([optionText], index) => (
                <button
                  // ⚠️ gunakan key stabil berbasis index saja (hindari menyisipkan optionText ber-LaTeX agar tidak bentrok parsing template literal)
                  key={`${currentQuestion}-${index}`}
                  onClick={() => handleAnswer(String(optionText))}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    answers[currentQuestion]?.selectedOption === optionText
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  <Boundary>
                    <MathText className="inline">{optionText}</MathText>
                  </Boundary>
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
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentQuestion((prev) => Math.min((tryoutPackage.totalQuestions || 1) - 1, prev + 1))}
                  disabled={currentQuestion === (tryoutPackage.totalQuestions || 1) - 1}
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
