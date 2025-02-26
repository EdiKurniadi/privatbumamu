import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import type { TryoutPackage, TryoutAnswer } from '../types';
import { TryoutHistory } from '../types';

export default function TryoutResults() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate('/tryout');
    return null;
  }

  const { tryoutPackage, answers, timeLeft, timeSpentPerQuestion }: { 
    tryoutPackage: TryoutPackage;
    answers: TryoutAnswer[];
    timeLeft: number;
    timeSpentPerQuestion: number[]; // Terima data waktu yang dihabiskan per soal
  } = state;

  // Hitung waktu yang digunakan
  const initialTime = tryoutPackage.duration * 60; // Convert menit ke detik
  const timeUsed = initialTime - timeLeft;
  const minutesUsed = Math.floor(timeUsed / 60);
  const secondsUsed = timeUsed % 60;

  // Hitung jawaban benar
  const correctAnswers = answers.filter((answer, index) => {
    const question = tryoutPackage.questions?.[index];
    return question && answer.selectedOption 
      ? question.options[answer.selectedOption] === 5
      : false;
  }).length;

  const totalQuestions = tryoutPackage.totalQuestions;

  //menghitung total skor
  const totalScore = answers.reduce((sum, answer, index) => {
    const question = tryoutPackage.questions?.[index];
    if (question && answer.selectedOption !== null && answer.selectedOption !== undefined) {
        return sum + question.options[answer.selectedOption];
    }
    return sum;
}, 0);

  useEffect(() => {
  if (!state) return;

  const historyEntry: TryoutHistory = {
    id: Date.now().toString(),
    packageId: tryoutPackage.id,
    packageTitle: tryoutPackage.title,
    date: new Date().toISOString(),
    score: totalScore,
    correctAnswers,
    totalQuestions,
    timeUsed,
    difficulty: tryoutPackage.difficulty,
    answers
  };

  const existingHistory = JSON.parse(localStorage.getItem('tryoutHistory')) || [];
  // Cek apakah ID sudah ada di history
  const isDuplicate = existingHistory.some(entry => entry.id === historyEntry.id);
  if (!isDuplicate) {
    const newHistory = [historyEntry, ...existingHistory]; // Tambahkan di awal array
    localStorage.setItem('tryoutHistory', JSON.stringify(newHistory));
  }
}, [state]); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {/* Header Hasil */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Hasil Tryout: {tryoutPackage.title}
              </h1>
              <div className="flex items-center text-gray-500">
                <Clock className="w-5 h-5 mr-2" />
                <span>Waktu Pengerjaan: {minutesUsed} menit {secondsUsed} detik</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/tryout')}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Kembali ke Tryout
            </button>
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
                      <p className="text-gray-600 mb-3">{question.text}</p>
                      <div className="space-y-2">
                        <div className={`p-3 rounded-lg ${
                          isCorrect ? 'bg-green-50' : 'bg-red-50'
                        }`}>
                          <span className="font-medium">Jawaban Anda:</span>{' '}
                          {answer.selectedOption ?? 'Tidak dijawab'}
                        </div>
                        
                        {!isCorrect && (
                              Object.entries(question.options).map(([text, score]) => (
                                score === 5 && (
                                  <div key={text} className="p-3 rounded-lg bg-green-50">
                                    <span className="font-medium">Jawaban Benar:</span> {text}
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