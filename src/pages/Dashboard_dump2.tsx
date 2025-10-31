import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, FileText, GraduationCap, Users, Rocket } from 'lucide-react';


export default function Dashboard() {
  return (
    <div className="relative">
      {/* NAVBAR STICKY */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-600">
        <div className="container mx-auto px-20 py-5 flex justify-between items-center">
          <div className="flex items-center text-xl font-bold text-white">
            <Brain className="w-6 h-6 mr-2 text-white-400" />
            <span>Privat Bumamu</span>
          </div>
          
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-amber-300 transition">
              Home
            </Link>
            <Link to="/learning" className="text-white hover:text-amber-300 transition">
              Learning
            </Link>
            <Link to="/practice-config" className="text-white hover:text-amber-300 transition">
              Practice
            </Link>
            <Link to="/tryout" className="text-white hover:text-amber-300 transition">
              Try Out
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="container mx-auto px-20 flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-semibold leading-relaxed mb-4 text-indigo-900">
              Belajar jadi lebih mudah
              <br />
              Bersama Privat Bumamu
            </h1>
            <p className="text-base md:text-lg mb-6 text-indigo-700">
              Dapatkan pengalaman belajar yang seru bersama master teacher terbaik
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6283125444947"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 transition"
              >
                Ayo Daftarkan Dirimu
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center relative">
            <div className="relative w-64 h-64">
              <Rocket 
                className="w-full h-full text-indigo-600 animate-float"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 bg-indigo-600/10 blur-2xl rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* MANFAAT SECTION */}
      <section className="min-h-screen bg-indigo-50 flex items-center">
        <div className="container mx-auto px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            Bersama Privat Bumamu
            <br />
            Belajarmu makin Seru!
          </h2>
          <p className="md:text-lg text-indigo-700 max-w-2xl mx-auto mb-10">
            Temukan pengalaman belajar yang intens dan inspiratif dengan Privat Bumamu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Manfaat 1 */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">
                <BookOpen className="w-12 h-12 mx-auto text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                Belajar Seru
              </h3>
              <p className="text-gray-600">
                Belajar bareng super teacher dan teman ambis untuk mewujudkan mimpi.
              </p>
            </div>

            {/* Manfaat 2 */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">
                <FileText className="w-12 h-12 mx-auto text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                Materi Terupdate
              </h3>
              <p className="text-gray-600">
                Materi yang terus diperbarui dan relevan dengan perkembangan terbaru.
              </p>
            </div>

            {/* Manfaat 3 */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">
                <GraduationCap className="w-12 h-12 mx-auto text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                Try Out
              </h3>
              <p className="text-gray-600">
                Uji kemampuanmu dengan simulasi try out yang realistis.
              </p>
            </div>

            {/* Manfaat 4 */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">
                <Users className="w-12 h-12 mx-auto text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                Bestie Ambis
              </h3>
              <p className="text-gray-600">
                Belajar bersama teman-teman yang saling mendukung untuk sukses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TAMBAHAN */}
      <section className="min-h-screen bg-indigo-100 flex items-center">
        <div className="container mx-auto px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            Statistik Kami
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Video Pembelajaran</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Soal Latihan</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Paket Try Out</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}