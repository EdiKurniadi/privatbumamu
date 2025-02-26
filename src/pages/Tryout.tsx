import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, Trophy, History, ArrowRight, Lock, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tryoutPackages } from '../data/tryoutPackages';
import type { TryoutPackage } from '../types';

// Komponen utama untuk halaman Tryout
export default function Tryout() {
  // State untuk mengelola tab yang dipilih: 'packages' atau 'history'
  const [selectedTab, setSelectedTab] = useState<'packages' | 'history'>('packages');
  // State untuk menyimpan riwayat tryout pengguna
  const [history, setHistory] = useState<TryoutHistory[]>([]);

  // Hook untuk mengambil riwayat dari localStorage setiap kali tab berubah
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('tryoutHistory') || '[]');
    setHistory(savedHistory);
  }, [selectedTab]); // Dependensi: selectedTab

  // Fungsi untuk memformat waktu dari detik ke menit dan detik
  const formatTimeUsed = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} menit ${remainingSeconds} detik`;
  };

  // Fungsi untuk memformat harga ke dalam format mata uang atau 'Gratis'
  const formatPrice = (price: number) => {
    if (price === 0) return 'Gratis';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Fungsi untuk memformat durasi dari menit ke jam dan menit
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} jam ` : ''}${remainingMinutes} menit`;
  };

  // Fungsi untuk menentukan warna berdasarkan tingkat kesulitan
  const getDifficultyColor = (difficulty: TryoutPackage['difficulty']) => {
    switch (difficulty) {
      case 'mudah':
        return 'text-green-600 bg-green-50';
      case 'sedang':
        return 'text-yellow-600 bg-yellow-50';
      case 'sulit':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // Render antarmuka pengguna
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header dengan ikon dan deskripsi */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Try Out
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Uji kemampuanmu dengan simulasi ujian yang mirip dengan kondisi sebenarnya
          </p>
        </div>

        {/* Tab untuk memilih antara paket dan riwayat */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setSelectedTab('packages')}
              className={`px-4 py-2 font-medium text-sm sm:text-base transition-colors relative ${
                selectedTab === 'packages'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Paket Try Out
              {selectedTab === 'packages' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setSelectedTab('history')}
              className={`px-4 py-2 font-medium text-sm sm:text-base transition-colors relative ${
                selectedTab === 'history'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Riwayat & Statistik
              {selectedTab === 'history' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
              )}
            </button>
          </div>
        </div>

        {/* Konten berdasarkan tab yang dipilih */}
        {selectedTab === 'packages' ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tryoutPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Detail paket tryout */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={pkg.thumbnail}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {pkg.isPremium && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-amber-900 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Lock className="w-4 h-4" />
                      <span>Premium</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(pkg.difficulty)}`}>
                      {pkg.difficulty.charAt(0).toUpperCase() + pkg.difficulty.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Timer className="w-4 h-4 mr-2" />
                      <span className="text-sm">{formatDuration(pkg.duration)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span className="text-sm">{pkg.totalQuestions} Soal</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">
                      {formatPrice(pkg.price)}
                    </span>
                    <Link
                      to={`/tryoutSession/${pkg.id}`}
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        pkg.isPremium
                          ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      <span>Mulai Try Out</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {history.length === 0 ? (
              <div className="text-center py-12">
                <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum Ada Riwayat Try Out</h3>
                <p className="text-gray-500 mb-6">
                  Mulai try out pertamamu untuk melihat statistik dan riwayat
                </p>
                <button
                  onClick={() => setSelectedTab('packages')}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <span>Lihat Paket Try Out</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Riwayat Try Out</h2>
                {history.map((entry) => (
                  <div key={entry.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{entry.packageTitle}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(entry.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(entry.difficulty)}`}>
                        {entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Skor:</span>
                        <span className="ml-2 font-medium">{entry.score}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Benar:</span>
                        <span className="ml-2 font-medium">{entry.correctAnswers}/{entry.totalQuestions}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Waktu:</span>
                        <span className="ml-2 font-medium">{formatTimeUsed(entry.timeUsed)}</span>
                      </div>
                      <div className="text-right">
                        <Link
                          to={`/tryout/results/${entry.id}`}
                          className="text-indigo-600 hover:text-indigo-700 text-sm"
                        >
                          Lihat Detail →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}