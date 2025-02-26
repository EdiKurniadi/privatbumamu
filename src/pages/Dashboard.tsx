import React from 'react';
import { Brain, BookOpen, PenTool, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Brain className="w-20 h-20 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            privat bumamu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform pembelajaran untuk mempersiapkan SKD CPNS, SNBT dan Tes Kedinasanmu
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video Pembelajaran */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-indigo-50 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Video Pembelajaran</h2>
              <p className="text-gray-600 mb-6">
                Pelajari konsep matematika melalui video pembelajaran yang interaktif 
                dan mudah dipahami
              </p>
              <Link
                to="/learning"
                className="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700"
              >
                Mulai Belajar
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Latihan Soal */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-green-50 flex items-center justify-center">
              <PenTool className="w-16 h-16 text-green-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Latihan Soal</h2>
              <p className="text-gray-600 mb-6">
                Asah kemampuanmu dengan berbagai latihan soal yang disesuaikan 
                dengan tingkat kemampuanmu
              </p>
              <Link
                to="/practice-config"
                className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700"
              >
                Mulai Latihan
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Try Out */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-amber-50 flex items-center justify-center">
              <GraduationCap className="w-16 h-16 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Try Out</h2>
              <p className="text-gray-600 mb-6">
                Uji kesiapanmu menghadapi ujian dengan simulasi try out yang 
                mirip dengan kondisi ujian sebenarnya
              </p>
              <Link
                to="/tryout"
                className="inline-flex items-center text-amber-600 font-semibold group-hover:text-amber-700"
              >
                Mulai Try Out
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-600">Video Pembelajaran</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Soal Latihan</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Paket Try Out</div>
          </div>
        </div>
      </div>
    </div>
  );
}