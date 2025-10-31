import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import type { TryoutPackage, TryoutAnswer, TryoutHistory } from '../types';

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

type TryoutResultState = {
  tryoutPackage: TryoutPackage;
  answers: TryoutAnswer[];
  timeLeft: number;
  timeSpentPerQuestion: number[];
};

const computeSummary = (result: TryoutResultState) => {
  const initialTime = result.tryoutPackage.duration * 60;
  const timeUsed = initialTime - result.timeLeft;
  const correctAnswers = result.answers.filter((answer, index) => {
    const question = result.tryoutPackage.questions?.[index];
    if (!question || !answer.selectedOption) {
      return false;
    }
    return question.options[answer.selectedOption] === 5;
  }).length;

  const totalScore = result.answers.reduce((sum, answer, index) => {
    const question = result.tryoutPackage.questions?.[index];
    if (!question || answer.selectedOption == null) {
      return sum;
    }
    const optionScore = question.options[answer.selectedOption];
    return typeof optionScore === 'number' ? sum + optionScore : sum;
  }, 0);

  return {
    timeUsed,
    correctAnswers,
    totalScore,
    totalQuestions: result.tryoutPackage.totalQuestions,
  };
};

export default function TryoutResults() {
  const { state } = useLocation() as { state: TryoutResultState | null };
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/tryout', { replace: true });
    }
  }, [navigate, state]);

  useEffect(() => {
    if (!state) {
      return;
    }

    const summary = computeSummary(state);
    const historyEntry: TryoutHistory = {
      id: Date.now().toString(),
      packageId: state.tryoutPackage.id,
      packageTitle: state.tryoutPackage.title,
      date: new Date().toISOString(),
      score: summary.totalScore,
      correctAnswers: summary.correctAnswers,
      totalQuestions: summary.totalQuestions,
      timeUsed: summary.timeUsed,
      difficulty: state.tryoutPackage.difficulty,
    };

    const existingHistoryRaw = localStorage.getItem('tryoutHistory');
    let existingHistory: TryoutHistory[] = [];
    if (existingHistoryRaw) {
      try {
        existingHistory = JSON.parse(existingHistoryRaw) as TryoutHistory[];
      } catch (error) {
        console.error('Failed to parse tryout history:', error);
      }
    }

    const isDuplicate = existingHistory.some(entry => entry.id === historyEntry.id);
    if (!isDuplicate) {
      const newHistory = [historyEntry, ...existingHistory];
      localStorage.setItem('tryoutHistory', JSON.stringify(newHistory));
    }
  }, [state]);

  if (!state) {
    return null;
  }

  const { tryoutPackage, answers, timeSpentPerQuestion } = state;
  const summary = computeSummary(state);
  const minutesUsed = Math.floor(summary.timeUsed / 60);
  const secondsUsed = summary.timeUsed % 60;
  const { correctAnswers, totalQuestions, totalScore } = summary;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Hasil Tryout: {tryoutPackage.title}
          </h1>
          <div className="flex items-center text-gray-500 mb-8">
            <Clock className="w-5 h-5 mr-2" />
            <span>Waktu Pengerjaan: {minutesUsed} menit {secondsUsed} detik</span>
          </div>

          {/* Ringkasan Skor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="text-green-600 font-semibold mb-2">Jawaban Benar</div>
              <div className="text-3xl font-bold">
                {correctAnswers}<span className="text-lg">/{totalQuestions}</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="text-blue-600 font-semibold mb-2">Total Skor</div>
              <div className="text-3xl font-bold">{totalScore}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl">
              <div className="text-amber-600 font-semibold mb-2">Tingkat Kesulitan</div>
              <div className="text-3xl font-bold capitalize">{tryoutPackage.difficulty}</div>
            </div>
          </div>

          {/* Detail Jawaban */}
          <h2 className="text-xl font-semibold mb-4">Detail Jawaban</h2>
          <div className="space-y-4">
            {answers.map((answer, index) => {
              const question = tryoutPackage.questions?.[index];
              const isCorrect = question && question.options[answer.selectedOption] === 5;
              const timeSpent = timeSpentPerQuestion[index]; // Waktu yang dihabiskan pada soal ini

              return (
                <div key={index} className="border rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Soal {index + 1}</h3>
                    <div className="flex items-center space-x-4">
                      {isCorrect ? (
                        <CheckCircle2 className="text-green-600 w-5 h-5" />
                      ) : (
                        <XCircle className="text-red-600 w-5 h-5" />
                      )}
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{timeSpent} detik</span>
                      </div>
                    </div>
                  </div>
                  
                  {question && (
                    <>
                      <div className="text-gray-600 mb-3">
                        <Boundary>
                          <MathText className="prose max-w-none">{question.text}</MathText>
                        </Boundary>
                      </div>
                      <div className="space-y-2">
                        <div className={`p-3 rounded-lg ${
                          isCorrect ? 'bg-green-50' : 'bg-red-50'
                        }`}>
                          <span className="font-medium">Jawaban Anda:</span>{' '}
                          <Boundary>
                            <MathText className="inline">{answer.selectedOption ?? 'Tidak dijawab'}</MathText>
                          </Boundary>
                        </div>
                        
                        {!isCorrect && (
                              Object.entries(question.options).map(([text, score]) => (
                                score === 5 && (
                                  <div key={text} className="p-3 rounded-lg bg-green-50">
                                    <span className="font-medium">Jawaban Benar:</span>{' '}
                                    <Boundary>
                                      <MathText className="inline">{text}</MathText>
                                    </Boundary>
                                  </div>
                                )
                              ))
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
