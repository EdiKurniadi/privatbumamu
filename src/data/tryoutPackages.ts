import { TryoutPackage } from '../types';

export const tryoutPackages: TryoutPackage[] = [
  {
    id: 'ujian-nasional-1',
    title: 'Simulasi Ujian Nasional #1',
    description: 'Persiapkan diri menghadapi Ujian Nasional dengan paket soal yang mirip dengan UN sebenarnya',
    thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800&h=450',
    duration: 100,
    totalQuestions: 4,
    difficulty: 'sedang',
    categories: ['Aljabar', 'Geometri', 'Statistika', 'Peluang'],
    price: 0,
    isPremium: false,
    questions: [
      {
        id: 1,
        text: 'Ibukota negara Jepang adalah...',
        options: {'Osaka' : 0, 'Tokyo' : 5, 'Kyoto' : 0, 'Hiroshima' : 0, 'Sapporo' : 0},
      },
      {
        id: 2,
        text: 'Hasil dari 2 + 3 × 4 adalah...',
        options: {'20' : 0, '14' : 5, '18' : 0, '24' : 0, '10' : 0},
      },
      {
        id: 3,
        text: 'Planet terdekat dari Matahari adalah...',
        options: {'Venus' : 0, 'Mars' : 0, 'Bumi' : 0, 'Merkurius' : 5, 'Jupiter' : 0},
      },
      {
        id: 4,
        text: 'Jika x² - 5x + 6 = 0, maka nilai x adalah...',
        options: {'2 & 3' : 5, '-2 & -3' : 4, '1 & 6' : 3, '-1 & -6' : 2, '0 & 5' : 1},
      }
      // Contoh soal lainnya
    ]
  },
  {
    id: 'ujian-nasional-2',
    title: 'Simulasi Ujian Nasional #2',
    description: 'Paket soal kedua untuk persiapan UN dengan tingkat kesulitan yang lebih menantang',
    thumbnail: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&q=80&w=800&h=450',
    duration: 100,
    totalQuestions: 40,
    difficulty: 'sulit',
    categories: ['Aljabar', 'Geometri', 'Statistika', 'Peluang'],
    price: 50000,
    isPremium: true
  },
  {
    id: 'sbmptn-1',
    title: 'Simulasi SBMPTN #1',
    description: 'Latihan soal SBMPTN dengan tipe soal yang sering muncul dalam ujian masuk perguruan tinggi',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=450',
    duration: 100,
    totalQuestions: 40,
    difficulty: 'sulit',
    categories: ['Aljabar', 'Geometri', 'Kalkulus', 'Trigonometri'],
    price: 75000,
    isPremium: true
  }
];
