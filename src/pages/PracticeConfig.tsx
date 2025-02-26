import React, { useState } from 'react';
import { Brain, Clock, Settings, BookOpen, List, AlertTriangle, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sampleQuestions } from '../data/questions';
import type { PracticeConfig } from '../types';

export default function Welcome() {
  const navigate = useNavigate();
  const [config, setConfig] = useState<PracticeConfig>({
    categories: [],
    timePerQuestion: 1,
    questionType: 'multiple_choice',
    numberOfQuestions: 5,
    mode: 'santai' // nilai default
  });
  const [showError, setShowError] = useState(false);

  // Get unique categories from questions
  const availableCategories = Array.from(
    new Set(sampleQuestions.map(q => q.category))
  );

  const handleCategoryToggle = (category: string) => {
    setShowError(false);
    setConfig(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleStartPractice = () => {
    if (config.categories.length === 0) {
      setShowError(true);
      // Scroll to topics section
      document.getElementById('topics-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Store config in sessionStorage
    sessionStorage.setItem('practiceConfig', JSON.stringify(config));
    navigate('/practice');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selamat Datang di bimbel BUMAMU
          </h1>
          <p className="text-xl text-gray-600">
            Atur sesi latihanmu sesuai kebutuhan
          </p>
        </div>

        {/* Configuration Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Topics Selection */}
          <div id="topics-section" className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Pilih Topik</h2>
            </div>
            {showError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                <p>Pilih minimal satu topik untuk memulai latihan</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`p-3 rounded-lg border transition-colors ${
                    config.categories.includes(category)
                      ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                      : 'border-gray-300 hover:border-indigo-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Gauge className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Tingkat Kesulitan (Opsional)</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setConfig(prev => ({
                  ...prev,
                  difficulty: prev.difficulty === 'mudah' ? undefined : 'mudah'
                }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.difficulty === 'mudah'
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'border-gray-300 hover:border-green-300'
                }`}
              >
                Mudah
              </button>
              <button
                onClick={() => setConfig(prev => ({
                  ...prev,
                  difficulty: prev.difficulty === 'sedang' ? undefined : 'sedang'
                }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.difficulty === 'sedang'
                    ? 'bg-yellow-100 border-yellow-500 text-yellow-700'
                    : 'border-gray-300 hover:border-yellow-300'
                }`}
              >
                Sedang
              </button>
              <button
                onClick={() => setConfig(prev => ({
                  ...prev,
                  difficulty: prev.difficulty === 'sulit' ? undefined : 'sulit'
                }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.difficulty === 'sulit'
                    ? 'bg-red-100 border-red-500 text-red-700'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                Sulit
              </button>
            </div>
          </div>

          {/* Time per Question */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Waktu per Soal</h2>
            </div>
            <select
              value={config.timePerQuestion}
              onChange={(e) => setConfig(prev => ({
                ...prev,
                timePerQuestion: Number(e.target.value)
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={1}>1 Menit</option>
              <option value={2}>2 Menit</option>
              <option value={3}>3 Menit</option>
              <option value={5}>5 Menit</option>
              <option value={10}>10 Menit</option>
              <option value={0}>Tidak Dibatasi</option>
            </select>
          </div>

          {/* Question Type */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Tipe Soal</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setConfig(prev => ({
                  ...prev,
                  questionType: 'multiple_choice'
                }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.questionType === 'multiple_choice'
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                Pilihan Ganda
              </button>
              <button
                onClick={() => setConfig(prev => ({
                  ...prev,
                  questionType: 'short_answer'
                }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.questionType === 'short_answer'
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                Isian Singkat
              </button>
            </div>
          </div>

          {/* Number of Questions */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <List className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Jumlah Soal</h2>
            </div>
            <select
              value={config.numberOfQuestions}
              onChange={(e) => setConfig(prev => ({
                ...prev,
                numberOfQuestions: Number(e.target.value)
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={5}>5 Soal</option>
              <option value={10}>10 Soal</option>
              <option value={15}>15 Soal</option>
              <option value={20}>20 Soal</option>
              <option value={0}>Tidak Dibatasi</option>
            </select>
          </div>

          {/* Practice Mode */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Gauge className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-semibold">Mode Practice</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setConfig(prev => ({ ...prev, mode: 'serius' }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.mode === 'serius'
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                Serius
              </button>
              <button
                onClick={() => setConfig(prev => ({ ...prev, mode: 'santai' }))}
                className={`p-4 rounded-lg border transition-colors ${
                  config.mode === 'santai'
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                Santai
              </button>
            </div>
          </div>


          {/* Start Button */}
          <button
            onClick={handleStartPractice}
            className="w-full bg-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Mulai Latihan
          </button>
        </div>
      </div>
    </div>
  );
}