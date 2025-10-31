import { TryoutPackage } from '../types';

export const tryoutPackages: TryoutPackage[] = [
  {
    id: 'tka-matematika-wajib-01',
    title: 'TKA Matematika Wajib - Paket #1',
    description:
      'Paket 25 soal TKA Matematika Wajib: aljabar, geometri, trigonometri, statistika, peluang, barisan/deret, dan fungsi. Tingkat sedang dengan beberapa soal menantang.',
    thumbnail:
      'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop',
    duration: 50,
    totalQuestions: 25,
    difficulty: 'sedang',
    categories: [
      'Aljabar',
      'Geometri',
      'Trigonometri',
      'Statistika',
      'Peluang',
      'Barisan & Deret',
      'Fungsi'
    ],
    price: 0,
    isPremium: false,
    questions: [
      // 1
      {
        id: 1,
        text:
          'Rata-rata nilai $6$ siswa adalah $75$. Lima nilainya: $70,68,80,72,78$. Nilai siswa keenam adalah …',
        options: { '80': 0, '81': 0, '82': 5, '83': 0, '84': 0 },
      },
      // 2
      {
        id: 2,
        text: 'Tabel nilai ulangan dan frekuensi:\n\n| Nilai | Frekuensi |\n\n|----|---|\n\n| 60 | 2 |\n\n| 65 | 3 |\n\n| 70 | 1 |\n\n| 75 | 4 |\n\n| 80 | 2 |\n\nMedian data ($n=12$  ) adalah …',
        options: { '69,5': 0, '70': 0, '72,5': 5, '73': 0, '75': 0 },
      },
      // 3
      {
        id: 3,
        text:
          'Dua dadu bersisi $6$ dilempar bersama. Peluang jumlah mata dadu sama dengan $9$ adalah …',
        options: { '1/12': 0, '1/9': 5, '1/8': 0, '5/36': 0, '4/36': 0 },
      },
      // 4
      {
        id: 4,
        text:
          'Harga sebuah barang $\\text{Rp}\\,500{.}000$ didiskon $20\\%$, lalu dikenai PPN $11\\%$ dari harga setelah diskon. Harga akhirnya adalah …',
        options: {
          'Rp420.000': 0,
          'Rp440.000': 0,
          'Rp444.000': 5,
          'Rp450.000': 0,
          'Rp455.000': 0
        },
      },
      // 5
      {
        id: 5,
        text: 'Penyelesaian SPL: $\\begin{cases} 2x+3y=13 \\\\ x-2y=-1 \\end{cases}$ adalah …',
        options: {
          '$\\left(2,3\\right)$': 0,
          '$\\left(3,2\\right)$': 0,
          '$\\left(\\tfrac{23}{7},\\; \\tfrac{15}{7}\\right)$': 5,
          '$\\left(\\tfrac{15}{7},\\; \\tfrac{23}{7}\\right)$': 0,
          '$\\left(1,4\\right)$': 0
        },
      },
      // 6
      {
        id: 6,
        text:
          'Pertidaksamaan $x^2 - 5x + 6 \\le 0$ memiliki himpunan solusi …',
        options: {
          '$(-\\infty, 2)$': 0,
          '$[2, 3]$': 5,
          '$(2, 3)$': 0,
          '$(-\\infty, 3]$': 0,
          '$[3, \\infty)$': 0
        },
      },
      // 7
      {
        id: 7,
        text: 'Diberikan $f(x)=2x+3$ dan $g(x)=x^2-1$. Nilai $f(g(2))$ adalah …',
        options: { '5': 0, '7': 0, '9': 5, '11': 0, '13': 0 },
      },
      // 8
      {
        id: 8,
        text:
          'Barisan aritmetika dengan $a_1=5$ dan $a_3=11$. Hitung $a_2+a_4+a_6+\\cdots+a_{20}$.',
        options: { '320': 0, '340': 0, '344': 0, '350': 5, '360': 0 },
      },
      // 9
      {
        id: 9,
        text:
          'Diketahui barisan geometri (rasio positif) memenuhi $a_3=18$ dan $a_5=162$. Jumlah lima suku pertama $S_5$ adalah …',
        options: { '162': 0, '180': 0, '200': 0, '242': 5, '324': 0 },
      },
      // 10
      {
        id: 10,
        text:
          'Persamaan kuadrat berakar $2$ dan $-5$ ditulis sebagai $k(x-2)(x+5)=0$, $k\\in\\mathbb{Z}$. Jika koefisien $x$ adalah $24$, maka suku konstanta ($c$) adalah …',
        options: { '$-120$': 0, '$-100$': 0, '$-80$': 5, '$-60$': 0, '$80$': 0 },
      },
      // 11
      {
        id: 11,
        text:
          'Nilai $\\det\\begin{pmatrix}2&-3&1\\\\4&1&0\\\\-1&2&5\\end{pmatrix}$ adalah …',
        options: { '61': 0, '69': 0, '74': 0, '79': 5, '85': 0 },
      },
      // 12
      {
        id: 12,
        text:
          '$\\vec{u}=(2,-1,3)$ dan $\\vec{v}=(1,0,4)$. Nilai $\\cos\\theta$ (sudut antara $\\vec{u}$ dan $\\vec{v}$) adalah …',
        options: {
          '$\\tfrac{\\sqrt{14}}{\\sqrt{17}}$': 5,
          '$\\tfrac{7}{\\sqrt{238}}$': 0,
          '$\\tfrac{14}{\\sqrt{14}\\,\\sqrt{17}}$': 5,
          '$\\tfrac{2}{\\sqrt{17}}$': 0,
          '$\\tfrac{\\sqrt{7}}{5}$': 0
        },
      },
      // 13
      {
        id: 13,
        text:
          'Diketahui $\\sin\\theta=\\tfrac{3}{5}$ dan $\\theta$ lancip. Nilai $\\cos 2\\theta$ adalah …',
        options: {
          '$\\tfrac{7}{25}$': 5,
          '$\\tfrac{24}{25}$': 0,
          '$\\tfrac{8}{25}$': 0,
          '$\\tfrac{1}{5}$': 0,
          '$\\tfrac{9}{25}$': 0
        },
      },
      // 14
      {
        id: 14,
        text:
          'Panjang busur lingkaran berjari-jari $7$ cm dengan sudut pusat $60^\\circ$ adalah …',
        options: {
          '$7\\pi/6$': 0,
          '$7\\pi/3$': 5,
          '$14\\pi/3$': 0,
          '$7\\pi$': 0,
          '$21\\pi/2$': 0
        },
      },
      // 15
      {
        id: 15,
        text:
          'Titik $A(1,2)$, $B(5,-6)$, dan $C(-2,4)$. Luas $\\triangle ABC$ adalah … (satuan luas)',
        options: { '6': 0, '7': 0, '8': 5, '9': 0, '10': 0 },
      },
      // 16
      {
        id: 16,
        text:
          'Pada trapesium $ABCD$ dengan $AB \\parallel CD$, $\\angle A=70^\\circ$. Besar $\\angle D$ adalah …',
        options: { '$70^\\circ$': 0, '$90^\\circ$': 0, '$100^\\circ$': 0, '$110^\\circ$': 5, '$120^\\circ$': 0 },
      },
      // 17
      {
        id: 17,
        text:
          'Titik $P(2,-1)$ ditranslasi oleh $(x,y) \\mapsto (x+3, y-4)$. Citra titik $P$ adalah …',
        options: { '(5,3)': 0, '(5,-5)': 5, '(1,-5)': 0, '(-1,3)': 0, '(-1,-5)': 0 },
      },
      // 18
      {
        id: 18,
        text:
          'Diberikan data terurut: $5, 6, 7, 8, 9, 10, 10, 12$. Interkuartil (IQR $= Q_3 - Q_1$) adalah …',
        options: { '3': 0, '3,5': 5, '4': 0, '4,5': 0, '5': 0 },
      },
      // 19
      {
        id: 19,
        text:
          'Sebuah populasi $1.000$ individu tumbuh $5\\%$ per tahun. Setelah $3$ tahun banyaknya individu (pembulatan terdekat) adalah …',
        options: { '1.150': 0, '1.158': 5, '1.160': 0, '1.200': 0, '1.250': 0 },
      },
      // 20
      {
        id: 20,
        text: '$\\displaystyle \\lim_{x\\to 2} \\frac{x^2-4}{x-2} = \\; ?$',
        options: { '2': 0, '3': 0, '4': 5, '5': 0, '6': 0 },
      },
      // 21
      {
        id: 21,
        text:
          'Garis melalui $(1,2)$ dan $(5,-6)$. Persamaan garis sumbu tegak lurus (perpendicular bisector) dari ruas yang menghubungkan dua titik tersebut adalah …',
        options: {
          '$y = \\tfrac{1}{2}x - \\tfrac{7}{2}$': 5,
          '$y = -2x + 4$': 0,
          '$2y = x - 7$': 0,
          '$y = \\tfrac{1}{2}x + \\tfrac{7}{2}$': 0,
          '$y = -\\tfrac{1}{2}x - \\tfrac{7}{2}$': 0
        },
      },
      // 22
      {
        id: 22,
        text:
          'Persamaan lingkaran berpusat $(3,-2)$ dan berjari-jari $5$ adalah …',
        options: {
          '$(x+3)^2 + (y-2)^2 = 25$': 0,
          '$(x-3)^2 + (y+2)^2 = 25$': 5,
          '$(x-3)^2 + (y-2)^2 = 25$': 0,
          '$(x+3)^2 + (y+2)^2 = 5$': 0,
          '$(x-3)^2 + (y+2)^2 = 5$': 0
        },
      },
      // 23
      {
        id: 23,
        text:
          'Dari $6$ siswa akan dipilih $3$ orang sebagai panitia yang terdiri dari $1$ ketua dan $2$ anggota. Banyak cara pemilihannya adalah …',
        options: { '30': 0, '36': 0, '48': 0, '54': 0, '60': 5 },
      },
      // 24
      {
        id: 24,
        text:
          'Dua segitiga sebangun dengan perbandingan sisi $2:5$. Jika luas segitiga kecil $20\\,\\text{cm}^2$, maka luas segitiga besar adalah …',
        options: { '40': 0, '50': 0, '80': 0, '100': 0, '125': 5 },
      },
      // 25
      {
        id: 25,
        text:
          'Penyelesaian $ \\log_2(x) + \\log_2(x-2) = 4$ (domain $x>2$) adalah …',
        options: {
          '$x=4$': 0,
          '$x=1+\\sqrt{17}$': 5,
          '$x=2+\\sqrt{10}$': 0,
          '$x=2+\\sqrt{17}$': 0,
          '$x=6$': 0
        },
      }
    ]
  },
  {
    id: "tka-matematika-wajib-2",
    title: "TKA Matematika Wajib – Paket #2",
    description:
      "Paket 25 soal TKA Matematika (versi lebih sulit) bergaya UN/UTBK: aljabar berparameter, pertidaksamaan rasional, geometri 2D/3D, trigonometri identitas & koordinat, serta peluang kombinatorial.",
    thumbnail:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    duration: 50,
    totalQuestions: 25,
    difficulty: "sedang",
    categories: [
      "Bilangan",
      "Aljabar",
      "Geometri",
      "Trigonometri",
      "Statistika & Peluang",
    ],
    price: 0,
    isPremium: false,
    questions: [
      // ===== Domain 1: Bilangan, Eksponen & Logaritma =====
      {
        id: 1,
        text: "Jika $2^{x+1} = 5\,\\sqrt{2^{x}}$, maka nilai $x$ adalah...",
        options: {
          "$\\log_2\\!\\left(\\tfrac{25}{4}\\right)$": 0,
          "$2\\,\\log_2\\!\\left(\\tfrac{5}{2}\\right)$": 5,
          "$\\log_2 5$": 0,
          "$\\log_2\\!\\left(\\tfrac{5}{2}\\right)$": 0,
          "$\\log_2\\!\\left(\\tfrac{5}{4}\\right)$": 0,
        },
      },
      {
        id: 2,
        text: "Pertidaksamaan $\\log_{x} 9 > 2$ berlaku untuk...",
        options: {
          "$0 < x < 1$": 0,
          "$x > 3$": 0,
          "$1 < x < 3$": 5,
          "$x < 0$": 0,
          "semua $x > 1$": 0,
        },
      },
      {
        id: 3,
        text: "Nilai $3^{\\log_3 5 + \\log_3 4} - 2^{\\log_2 9}$ adalah...",
        options: {
          "9": 0,
          "10": 0,
          "11": 5,
          "12": 0,
          "13": 0,
        },
      },
      {
        id: 4,
        text: "Banyaknya solusi real dari $|x - 3| + |x + 1| = 10$ adalah...",
        options: {
          "0": 0,
          "1": 0,
          "2": 5,
          "3": 0,
          "tak hingga": 0,
        },
      },
      {
        id: 5,
        text: "Diketahui $\\log_2(x - 1) + \\log_2(x + 3) = 3$ dengan domain terpenuhi. Nilai $x$ adalah...",
        options: {
          "$-1 - 2\\sqrt{3}$": 0,
          "$-1 + 2\\sqrt{3}$": 5,
          "$1 + 2\\sqrt{3}$": 0,
          "$2\\sqrt{3}$": 0,
          "tidak ada": 0,
        },
      },

      // ===== Domain 2: Aljabar & Fungsi =====
      {
        id: 6,
        text: "Untuk $f(x) = x^2 - (m+2)x + (m+3)$, syarat perlu & cukup agar $f(x) > 0$ untuk semua $x \\in \\\mathbb{R}$ adalah...",
        options: {
          "$m > -1$": 0,
          "$m < -3$": 0,
          "$(m+2)^2 - 4(m+3) < 0$": 5,
          "$m > -2$ dan $\\Delta \\le 0$": 0,
          "$m \\in \\\mathbb{R}$ (sembarang)": 0,
        },
      },
      {
        id: 7,
        text: "Selesaikan pertidaksamaan $\\dfrac{x^2 - 5x + 6}{x^2 - 9} \\ge 0$. Himpunan penyelesaiannya adalah...",
        options: {
          "$(-\\infty, -3) \\cup [2, 3) \\cup (3, \\infty)$": 5,
          "$(-\\infty, -3] \\cup [2, 3] \\cup [3, \\infty)$": 0,
          "$(-\\infty, -3) \\cup (2, \\infty)$": 0,
          "$[2, \\infty)$": 0,
          "$(-\\infty, 2] \\cup [3, \\infty)$": 0,
        },
      },
      {
        id: 8,
        text: "Diberi $f(x) = \\dfrac{ax + b}{x - 1}$, $f(2) = 3$ dan $f(0) = 1$. Nilai $a + b$ adalah...",
        options: {
          "-1": 0,
          "0": 0,
          "1": 5,
          "2": 0,
          "3": 0,
        },
      },
      {
        id: 9,
        text: "Diketahui $x + y = 5$ dan $x^2 + y^2 = 13$. Banyak pasangan real $(x, y)$ adalah...",
        options: {
          "0": 0,
          "1": 0,
          "2": 5,
          "3": 0,
          "tak hingga": 0,
        },
      },
      {
        id: 10,
        text: "$g(x) = x^2 + p x + q$ memiliki titik puncak $(2, -5)$. Pasangan $(p, q)$ adalah...",
        options: {
          "$(-4, -1)$": 5,
          "$(-4, 3)$": 0,
          "$(4, -1)$": 0,
          "$(4, 3)$": 0,
          "$(-2, -1)$": 0,
        },
      },

      // ===== Domain 3: Geometri, Pengukuran & Dimensi Tiga =====
      {
        id: 11,
        text: "Segitiga $ABC$ dengan sisi $AB=13$, $BC=14$, $CA=15$. Jari-jari lingkaran luar $R$ adalah...",
        options: {
          "7": 0,
          "$65/8$": 5,
          "8": 0,
          "$15/2$": 0,
          "$13/2$": 0,
        },
      },
      {
        id: 12,
        text: "Dalam lingkaran berjari-jari $10$ cm, tali busur $AB$ menghadap sudut pusat $120^\\circ$. Luas segmen (sektor $-$ segitiga) adalah...",
        options: {
          "$(100\\pi/3) - 25\\sqrt{3}$": 5,
          "$(50\\pi/3) - 25\\sqrt{3}$": 0,
          "$(100\\pi/3) - 50\\sqrt{3}$": 0,
          "$25\\pi - 25\\sqrt{3}$": 0,
          "$(10\\pi/3) - 25\\sqrt{3}$": 0,
        },
      },
      {
        id: 13,
        text: "Balok berukuran $6 \\times 8 \\times 10$. Panjang diagonal ruang adalah...",
        options: {
          "10": 0,
          "12": 0,
          "$10\\sqrt{2}$": 5,
          "$12\\sqrt{2}$": 0,
          "\\sqrt{200}": 0,
        },
      },
      {
        id: 14,
        text: "Pada $\\triangle ABC$, pembagi sudut di $A$ memotong $BC$ di $D$. Jika $AB=10$, $AC=14$, $BC=12$, maka $BD=\u00A0...$",
        options: {
          "4": 0,
          "5": 5,
          "6": 0,
          "7": 0,
          "8": 0,
        },
      },
      {
        id: 15,
        text: "Ujung-ujung diameter sebuah lingkaran adalah $(2, -1)$ dan $(8, 3)$. Persamaan lingkaran adalah...",
        options: {
          "$(x - 5)^2 + (y - 1)^2 = 13$": 5,
          "$(x + 5)^2 + (y + 1)^2 = 13$": 0,
          "$(x - 5)^2 + (y - 1)^2 = 52$": 0,
          "$x^2 + y^2 - 10x - 2y + 11 = 0$": 0,
          "$x^2 + y^2 - 10x - 2y + 13 = 0$": 0,
        },
      },

      // ===== Domain 4: Trigonometri & Koordinat =====
      {
        id: 16,
        text: "Solusi di $(0, 2\\pi)$ untuk $\\sin(2x) = \\cos(x)$ adalah...",
        options: {
          "$\\{\\tfrac{\\pi}{6}, \\tfrac{\\pi}{2}, \\tfrac{5\\pi}{6}, \\tfrac{3\\pi}{2}\\}$": 5,
          "$\\{\\tfrac{\\pi}{3}, \\pi, \\tfrac{4\\pi}{3}\\}$": 0,
          "$\\{\\tfrac{\\pi}{2}, \\pi, \\tfrac{3\\pi}{2}\\}$": 0,
          "$\\{\\tfrac{\\pi}{6}, \\tfrac{5\\pi}{6}\\}$": 0,
          "tidak ada": 0,
        },
      },
      {
        id: 17,
        text: "Garis sumbu-sumbu (perpendicular bisector) dari ruas $AB$ dengan $A(2,5)$ dan $B(6,-3)$ adalah...",
        options: {
          "$y = \\tfrac{1}{2}x - 1$": 5,
          "$y = 2x - 7$": 0,
          "$y = -2x + 9$": 0,
          "$y = \\tfrac{1}{2}x + 1$": 0,
          "$x = 4$": 0,
        },
      },
      {
        id: 18,
        text: "Sudut antara garis $2x - y + 3 = 0$ dan $x + y - 1 = 0$ memiliki $\\tan \\theta =\u00A0...$",
        options: {
          "1": 0,
          "2": 0,
          "3": 5,
          "1/2": 0,
          "1/3": 0,
        },
      },
      {
        id: 19,
        text: "Diketahui $\\sin A + \\cos A = \\tfrac{6}{5}$ dengan $A$ lancip. Nilai $\\sin 2A$ adalah...",
        options: {
          "7/25": 0,
          "9/25": 0,
          "11/25": 5,
          "12/25": 0,
          "24/25": 0,
        },
      },
      {
        id: 20,
        text: "Titik $P(3,4)$ diputar $90^\\circ$ berlawanan jarum jam terhadap titik asal. Koordinat hasilnya adalah...",
        options: {
          "$(4, -3)$": 0,
          "$(-4, 3)$": 5,
          "$(-3, -4)$": 0,
          "$(4, 3)$": 0,
          "$(-4, -3)$": 0,
        },
      },

      // ===== Domain 5: Data, Statistika & Peluang =====
      {
        id: 21,
        text: "Dari 7 pria dan 5 wanita dipilih 4 orang acak. Peluang terpilih setidaknya 2 wanita adalah...",
        options: {
          "19/33": 5,
          "3/11": 0,
          "1/3": 0,
          "5/11": 0,
          "2/3": 0,
        },
      },
      {
        id: 22,
        text: "Kotak berisi 5 merah, 4 biru, 3 hijau. Diambil 3 tanpa pengembalian. Peluang sedikitnya dua warna muncul adalah...",
        options: {
          "41/44": 5,
          "3/44": 0,
          "5/22": 0,
          "1/11": 0,
          "21/44": 0,
        },
      },
      {
        id: 23,
        text: "Dua dadu dilempar. Diketahui jumlah $\\ge 10$. Peluang kedua dadu menunjukkan 6 adalah...",
        options: {
          "1/36": 0,
          "1/18": 0,
          "1/12": 0,
          "1/6": 5,
          "1/3": 0,
        },
      },
      {
        id: 24,
        text: "Rata-rata kelas A (20 siswa) $= 75$ dan kelas B (30 siswa) $= 82$. Rata-rata gabungan adalah...",
        options: {
          "78,2": 0,
          "79,2": 5,
          "79,5": 0,
          "80,2": 0,
          "81,0": 0,
        },
      },
      {
        id: 25,
        text: "Sebuah koin fair dilempar 5 kali. Peluang tepat 3 gambar adalah...",
        options: {
          "5/16": 5,
          "3/16": 0,
          "10/27": 0,
          "1/3": 0,
          "15/32": 0,
        },
      },
    ],
  },
  {
    id: 'tka-matematika-wajib-03',
    title: 'TKA Matematika Wajib - Paket #3',
    description:
      'Paket 25 soal TKA Matematika Wajib: bilangan, aljabar, geometri, trigonometri, statistika, peluang, barisan/deret, dan fungsi. Tingkat sedang dengan beberapa soal menantang.',
    thumbnail:
      'https://images.unsplash.com/photo-1576086217673-fddb7305e20f?q=80&w=1200&auto=format&fit=crop',
    duration: 50,
    totalQuestions: 25,
    difficulty: 'sedang',
    categories: [
      'Bilangan',
      'Aljabar',
      'Geometri',
      'Trigonometri',
      'Statistika & Peluang',
      'Barisan & Deret',
      'Fungsi'
    ],
    price: 0,
    isPremium: false,
    questions: [
      // ===== Domain 1: Bilangan, Eksponen & Logaritma =====
      {
        id: 1,
        text: 'Jika $3^{x+2} = \\frac{1}{9}$, maka nilai $x$ adalah...',
        options: { '-4': 5, '-2': 0, '0': 0, '2': 0, '4': 0 },
      },
      {
        id: 2,
        text: 'Nilai dari $\\log_2 8 + \\log_3 9 - \\log_5 25$ adalah...',
        options: { '1': 0, '2': 0, '3': 5, '4': 0, '5': 0 },
      },
      {
        id: 3,
        text: 'Himpunan penyelesaian dari $|2x - 1| = 5$ adalah...',
        options: { '$\\{-2, 3\\}$': 5, '$\\{-3, 2\\}$': 0, '$\\{-2, -3\\}$': 0, '$\\{2, 3\\}$': 0, '$\\{5\\}$': 0 },
      },
      {
        id: 4,
        text: 'Jika $x = 2\\sqrt{3}$ dan $y = 3\\sqrt{2}$, maka $x^2 + y^2 = \\dots$',
        options: { '24': 0, '30': 5, '36': 0, '42': 0, '48': 0 },
      },
      {
        id: 5,
        text: 'Bentuk sederhana dari $\\frac{2}{\\sqrt{3}-1}$ adalah...',
        options: { '$\\sqrt{3}+1$': 5, '$\\sqrt{3}-1$': 0, '$2\\sqrt{3}+2$': 0, '$2\\sqrt{3}-2$': 0, '$\\frac{\\sqrt{3}+1}{2}$': 0 },
      },

      // ===== Domain 2: Aljabar & Fungsi =====
      {
        id: 6,
        text: 'Jika $f(x) = 3x - 2$ dan $g(x) = x^2 + 1$, maka $(g \\circ f)(x)$ adalah...',
        options: { '$9x^2 - 12x + 5$': 5, '$9x^2 - 12x + 3$': 0, '$3x^2 + 1$': 0, '$3x^2 - 1$': 0, '$x^2 + 3x - 1$': 0 },
      },
      {
        id: 7,
        text: 'Penyelesaian dari sistem persamaan $x + y = 7$ dan $2x - y = 2$ adalah...',
        options: { '$(3, 4)$ ': 5, '$(4, 3)$ ': 0, '$(2, 5)$ ': 0, '$(5, 2)$ ': 0, '$(1, 6)$ ': 0 },
      },
      {
        id: 8,
        text: 'Fungsi kuadrat $f(x) = x^2 - 4x + 3$ memotong sumbu $x$ di titik...',
        options: { '$(1,0)$ dan $(3,0)$ ': 5, '(-1,0)$ dan $(-3,0)$ ': 0, '(0,1)$ dan $(0,3)$ ': 0, '(0,-1)$ dan $(0,-3)$ ': 0, '(0,3)$ ': 0 },
      },
      {
        id: 9,
        text: 'Jika $x_1$ dan $x_2$ adalah akar-akar persamaan kuadrat $x^2 - 5x + 6 = 0$, maka nilai $x_1 + x_2$ adalah...',
        options: { '-6': 0, '-5': 0, '5': 5, '6': 0, '11': 0 },
      },
      {
        id: 10,
        text: 'Himpunan penyelesaian dari pertidaksamaan $x^2 - x - 6 < 0$ adalah...',
        options: { '$(-2, 3)$ ': 5, '$(-\\infty, -2) \\cup (3, \\infty)$ ': 0, '$[-2, 3]$ ': 0, '$(-\\infty, -2] \\cup [3, \\infty)$ ': 0, '$\\\emptyset$': 0 },
      },

      // ===== Domain 3: Geometri, Pengukuran & Dimensi Tiga =====
      {
        id: 11,
        text: 'Sebuah segitiga siku-siku memiliki panjang sisi $3$ cm, $4$ cm, dan $5$ cm. Luas segitiga tersebut adalah...',
        options: { '$6 \\text{ cm}^2$': 5, '$7.5 \\text{ cm}^2$': 0, '$10 \\text{ cm}^2$': 0, '$12 \\text{ cm}^2$': 0, '$15 \\text{ cm}^2$': 0 },
      },
      {
        id: 12,
        text: 'Keliling lingkaran dengan jari-jari $7$ cm adalah...',
        options: { '$14\\pi \\text{ cm}$': 0, '$21\\pi \\text{ cm}$': 0, '$44 \\text{ cm}$': 5, '$49\\pi \\text{ cm}$': 0, '$154 \\text{ cm}$': 0 },
      },
      {
        id: 13,
        text: 'Volume kubus dengan panjang rusuk $4$ cm adalah...',
        options: { '$16 \\text{ cm}^3$': 0, '$32 \\text{ cm}^3$': 0, '$64 \\text{ cm}^3$': 5, '$128 \\text{ cm}^3$': 0, '$256 \\text{ cm}^3$': 0 },
      },
      {
        id: 14,
        text: 'Koordinat titik tengah ruas garis yang menghubungkan titik $A(2, -3)$ dan $B(6, 5)$ adalah...',
        options: { '$(4, 1)$ ': 5, '$(8, 2)$ ': 0, '$(4, 2)$ ': 0, '$(8, 1)$ ': 0, '$(2, 4)$ ': 0 },
      },
      {
        id: 15,
        text: 'Persamaan garis yang melalui titik $(1, 2)$ dan bergradien $3$ adalah...',
        options: { '$y = 3x - 1$': 5, '$y = 3x + 1$': 0, '$y = -3x + 5$': 0, '$y = -3x - 1$': 0, '$y = x + 3$': 0 },
      },

      // ===== Domain 4: Trigonometri & Koordinat =====
      {
        id: 16,
        text: 'Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ$ adalah...',
        options: { '0': 0, '$\\frac{1}{2}$': 0, '1': 5, '$\\frac{3}{2}$': 0, '$\\sqrt{3}$': 0 },
      },
      {
        id: 17,
        text: 'Jika $\\tan A = \\frac{3}{4}$ dan $A$ adalah sudut lancip, maka nilai $\\sin A$ adalah...',
        options: { '$\\frac{3}{5}$': 5, '$\\frac{4}{5}$': 0, '$\\frac{3}{4}$': 0, '$\\frac{4}{3}$': 0, '$\\frac{1}{2}$': 0 },
      },
      {
        id: 18,
        text: 'Dalam segitiga $ABC$, jika $a=8$, $b=6$, dan $\\angle C = 60^\\circ$, maka panjang sisi $c$ adalah...',
        options: { '$2\\sqrt{13}$': 5, '$2\\sqrt{10}$': 0, '$10$': 0, '$12$': 0, '$14$': 0 },
      },
      {
        id: 19,
        text: 'Koordinat kutub dari titik $(1, \\sqrt{3})$ adalah...',
        options: { '$(2, 60^\\circ)$ ': 5, '$(2, 30^\\circ)$ ': 0, '$(4, 60^\\circ)$ ': 0, '$(4, 30^\\circ)$ ': 0, '$(1, 60^\\circ)$ ': 0 },
      },
      {
        id: 20,
        text: 'Persamaan lingkaran yang berpusat di $(0,0)$ dan berjari-jari $5$ adalah...',
        options: { '$x^2 + y^2 = 5$': 0, '$x^2 + y^2 = 10$': 0, '$x^2 + y^2 = 25$': 5, '$(x-5)^2 + y^2 = 0$': 0, '$x^2 + (y-5)^2 = 0$': 0 },
      },

      // ===== Domain 5: Data, Statistika & Peluang =====
      {
        id: 21,
        text: 'Rata-rata dari data $2, 4, 6, 8, 10$ adalah...',
        options: { '4': 0, '5': 0, '6': 5, '7': 0, '8': 0 },
      },
      {
        id: 22,
        text: 'Median dari data $1, 3, 2, 5, 4$ adalah...',
        options: { '1': 0, '2': 0, '3': 5, '4': 0, '5': 0 },
      },
      {
        id: 23,
        text: 'Sebuah koin dilempar $3$ kali. Peluang muncul $2$ gambar adalah...',
        options: { '$\\frac{1}{8}$': 0, '$\\frac{1}{4}$': 0, '$\\frac{3}{8}$': 5, '$\\frac{1}{2}$': 0, '$\\frac{5}{8}$': 0 },
      },
      {
        id: 24,
        text: 'Dari $5$ orang calon pengurus, akan dipilih $3$ orang untuk menjadi ketua, sekretaris, dan bendahara. Banyak cara pemilihan adalah...',
        options: { '10': 0, '20': 0, '30': 0, '60': 5, '120': 0 },
      },
      {
        id: 25,
        text: 'Dalam sebuah kantong terdapat $4$ bola merah dan $6$ bola putih. Jika diambil $2$ bola sekaligus secara acak, peluang terambil $1$ bola merah dan $1$ bola putih adalah...',
        options: { '$\\frac{2}{15}$': 0, '$\\frac{4}{15}$': 0, '$\\frac{6}{15}$': 0, '$\\frac{8}{15}$': 5, '$\\frac{10}{15}$': 0 },
      },
    ],
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1503428593552-c0a99318a8ba?q=80&w=1200&auto=format&fit=crop',
    duration: 50,
    totalQuestions: 25,
    difficulty: 'sedang', // Keeping 'sedang' but questions are harder
    categories: [
      'Bilangan',
      'Aljabar',
      'Geometri',
      'Trigonometri',
      'Statistika & Peluang',
      'Barisan & Deret',
      'Fungsi'
    ],
    price: 0,
    isPremium: false,
    questions: [
      // ===== Domain 1: Bilangan, Eksponen & Logaritma =====
      {
        id: 1,
        text: 'Jika $4^{x+1} = 8^{2x-1}$, maka nilai $x$ adalah...',
        options: { '1/4': 0, '3/4': 0, '5/4': 5, '7/4': 0, '9/4': 0 },
      },
      {
        id: 2,
        text: 'Jika $\\log_2 3 = a$ dan $\\log_3 5 = b$, maka $\\log_{15} 20 = \\dots$',
        options: { '$\\frac{2+ab}{a(1+b)}$': 5, '$\\frac{a(1+b)}{2+ab}$': 0, '$\\frac{1+2a}{a(1+b)}$': 0, '$\\frac{a(1+b)}{1+2a}$': 0, '$\\frac{2a+b}{1+a}$': 0 },
      },
      {
        id: 3,
        text: 'Himpunan penyelesaian dari $|x-2| < |2x+1|$ adalah...',
        options: { '$(-\\infty, -3) \\cup (1/3, \\infty)$ ': 5, '(-3, 1/3)': 0, '(1/3, \\infty)': 0, '$(-\\infty, -3)$ ': 0, '($\\emptyset$)': 0 },
      },
      {
        id: 4,
        text: 'Jika $x = \\frac{1}{2+\\sqrt{3}}$, maka $x^2 - 4x + 1 = \\dots$',
        options: { '0': 5, '1': 0, '2': 0, '3': 0, '4': 0 },
      },
      {
        id: 5,
        text: 'Himpunan penyelesaian dari $\\log_2(x^2-x-2) < 2$ adalah...',
        options: { '$(-2, -1) \\cup (2, 3)$ ': 5, '(-2, 3)': 0, '(-1, 2)': 0, '$(-\\infty, -1) \\cup (2, \\infty)$ ': 0, '($\\emptyset$)': 0 },
      },

      // ===== Domain 2: Aljabar & Fungsi =====
      {
        id: 6,
        text: 'Jika $f(x) = 2x-1$ dan $(f \\circ g)(x) = 4x^2 - 10x + 5$, maka $g(x) = \\dots$',
        options: { '$2x^2 - 5x + 3$': 5, '$2x^2 - 5x + 2$': 0, '$2x^2 - 5x + 1$': 0, '$2x^2 - 5x$': 0, '$2x^2 - 5x - 1$': 0 },
      },
      {
        id: 7,
        text: 'Jika $x+y+z=6$, $2x-y+z=3$, $3x+2y-z=8$, maka nilai $x+2y-z = \\dots$',
        options: { '1': 0, '2': 0, '3': 5, '4': 0, '5': 0 },
      },
      {
        id: 8,
        text: 'Fungsi kuadrat $y = ax^2 + bx + c$ memiliki titik puncak $(1, -4)$ dan melalui titik $(0, -3)$. Nilai $a+b+c = \\dots$',
        options: { '-4': 0, '-3': 0, '-2': 5, '-1': 0, '0': 0 },
      },
      {
        id: 9,
        text: 'Jika $x_1$ dan $x_2$ adalah akar-akar persamaan $2x^2 - 6x + 3 = 0$, maka nilai $\\frac{x_1}{x_2} + \\frac{x_2}{x_1} = \\dots$',
        options: { '1': 0, '2': 0, '3': 5, '4': 0, '5': 0 },
      },
      {
        id: 10,
        text: 'Himpunan penyelesaian dari $\\frac{x-1}{x+2} \\ge 2$ adalah...',
        options: { '$[-5, -2)$ ': 5, '(-2, -1]': 0, '$(-\\infty, -5] \\cup (-2, \\infty)$ ': 0, '($\\emptyset$)': 0, '$[-5, -2]$': 0 },
      },

      // ===== Domain 3: Geometri, Pengukuran & Dimensi Tiga =====
      {
        id: 11,
        text: 'Luas segitiga yang titik-titik sudutnya adalah $A(1,1)$, $B(4,5)$, dan $C(6,2)$ adalah...',
        options: { '6.5': 0, '7': 0, '7.5': 5, '8': 0, '8.5': 0 },
      },
      {
        id: 12,
        text: 'Persamaan garis singgung lingkaran $x^2+y^2=25$ di titik $(3,4)$ adalah...',
        options: { '$3x+4y=25$': 5, '$4x+3y=25$': 0, '$3x-4y=25$': 0, '$4x-3y=25$': 0, '$x+y=7$': 0 },
      },
      {
        id: 13,
        text: 'Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6$ cm, jarak titik $A$ ke garis $CE$ adalah...',
        options: { '$2\\sqrt{3}$': 0, '$3\\sqrt{2}$': 0, '$2\\sqrt{6}$': 5, '$3\\sqrt{6}$': 0, '$4\\sqrt{3}$': 0 },
      },
      {
        id: 14,
        text: 'Titik $P(2, -3)$ dirotasikan $90^\\circ$ searah jarum jam terhadap titik pusat $(1, 0)$. Koordinat bayangan titik $P$ adalah...',
        options: { '$(4, 1)$ ': 5, '$(4, -1)$ ': 0, '(-2, 1)': 0, '(-2, -1)': 0, '(1, 4)': 0 },
      },
      {
        id: 15,
        text: 'Diketahui vektor $\\vec{a} = (2, -1, 3)$ dan $\\vec{b} = (1, 2, -1)$. Proyeksi skalar ortogonal $\\vec{a}$ pada $\\vec{b}$ adalah...',
        options: { '$\\frac{-3}{\\sqrt{6}}$': 5, '$\\frac{-1}{\\sqrt{6}}$': 0, '$\\frac{1}{\\sqrt{6}}$': 0, '$\\frac{3}{\\sqrt{6}}$': 0, '$\\frac{5}{\\sqrt{6}}$': 0 },
      },

      // ===== Domain 4: Trigonometri & Koordinat =====
      {
        id: 16,
        text: 'Bentuk sederhana dari $\\frac{\\sin x}{1+\\cos x} + \\frac{1+\\cos x}{\\sin x}$ adalah...',
        options: { '$2\\tan x$': 0, '$2\\cot x$': 0, '$2\\sec x$': 0, '$2\\csc x$': 5, '$2\\sin x$': 0 },
      },
      {
        id: 17,
        text: 'Himpunan penyelesaian dari $2\\sin^2 x - 5\\sin x + 2 = 0$ untuk $0 \\le x \\le 2\\pi$ adalah...',
        options: { '$\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\}$': 5, '$\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\}$': 0, '$\{\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}\}$': 0, '$\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\}$': 0, '$\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\}$': 0 },
      },
      {
        id: 18,
        text: 'Dalam $\\triangle ABC$, jika $a=4$, $b=6$, dan $\\angle C = 120^\\circ$, maka panjang sisi $c$ adalah...',
        options: { '$2\\sqrt{19}$': 5, '$2\\sqrt{13}$': 0, '$2\\sqrt{7}$': 0, '$2\\sqrt{5}$': 0, '$2\\sqrt{3}$': 0 },
      },
      {
        id: 19,
        text: 'Persamaan $r = 4\\cos\\theta$ dalam koordinat Kartesius adalah...',
        options: { '$x^2+y^2=4x$': 5, '$x^2+y^2=4y$': 0, '$x^2+y^2=16$': 0, '$x^2+y^2=4$': 0, '$x^2+y^2=2x$': 0 },
      },
      {
        id: 20,
        text: 'Jarak titik $(1, -2)$ ke garis $3x - 4y + 5 = 0$ adalah...',
        options: { '1': 0, '2': 0, '3': 0, '4': 5, '5': 0 },
      },

      // ===== Domain 5: Data, Statistika & Peluang =====
      {
        id: 21,
        text: 'Simpangan baku dari data $2, 4, 6, 8, 10$ adalah...',
        options: { '$\\sqrt{8}$': 5, '$\\sqrt{10}$': 0, '$\\sqrt{12}$': 0, '$\\sqrt{14}$': 0, '$\\sqrt{16}$': 0 },
      },
      {
        id: 22,
        text: 'Dari $10$ siswa, akan dipilih $3$ orang untuk mengikuti lomba. Banyak cara pemilihan adalah...',
        options: { '60': 0, '90': 0, '120': 5, '150': 0, '180': 0 },
      },
      {
        id: 23,
        text: 'Dalam sebuah kotak terdapat $5$ bola merah dan $3$ bola biru. Jika diambil $2$ bola satu per satu tanpa pengembalian, peluang terambil bola merah pada pengambilan pertama dan bola biru pada pengambilan kedua adalah...',
        options: { '$\\frac{15}{64}$': 0, '$\\frac{15}{56}$': 5, '$\\frac{15}{49}$': 0, '$\\frac{15}{36}$': 0, '$\\frac{15}{28}$': 0 },
      },
      {
        id: 24,
        text: 'Jika nilai rata-rata ujian adalah $70$ dengan simpangan baku $10$, dan nilai-nilai terdistribusi normal, maka persentase siswa yang mendapat nilai antara $60$ dan $80$ adalah sekitar...',
        options: { '$34\\%$': 0, '$68\\%$': 5, '$95\\%$': 0, '$99\\%$': 0, '$50\\%$': 0 },
      },
      {
        id: 25,
        text: 'Sebuah dadu dilempar $100$ kali. Harapan muncul mata dadu genap adalah...',
        options: { '25': 0, '30': 0, '40': 0, '50': 5, '60': 0 },
      },
    ]
  },
  {
    id: 'tka-matematika-wajib-05',
    title: 'TKA Matematika Wajib - Paket #5',
    description:
      'Paket 25 soal TKA Matematika Wajib: bilangan, aljabar, geometri, trigonometri, statistika, peluang, barisan/deret, dan fungsi. Tingkat kesulitan serupa dengan Paket #4.',
    thumbnail:
      'https://images.unsplash.com/photo-1554469384-e58ce6f13258?q=80&w=1200&auto=format&fit=crop',
    duration: 50,
    totalQuestions: 25,
    difficulty: 'sedang', // Keeping 'sedang' but questions are challenging
    categories: [
      'Bilangan',
      'Aljabar',
      'Geometri',
      'Trigonometri',
      'Statistika & Peluang',
      'Barisan & Deret',
      'Fungsi'
    ],
    price: 0,
    isPremium: false,
    questions: [
      // ===== Domain 1: Bilangan, Eksponen & Logaritma =====
      {
        id: 1,
        text: 'Jika $3^{2x-1} = \\frac{1}{27}$, maka nilai $x$ adalah...',
        options: { '-1': 5, '0': 0, '1': 0, '2': 0, '3': 0 },
      },
      {
        id: 2,
        text: 'Jika $\\log_x (\\frac{1}{8}) = -3$, maka nilai $x$ adalah...',
        options: { '1': 0, '2': 5, '3': 0, '4': 0, '5': 0 },
      },
      {
        id: 3,
        text: 'Himpunan penyelesaian dari $|3x+2| \\ge 5$ adalah...',
        options: { '$(-\\infty, -7/3] \\cup [1, \\infty)$ ': 5, '[-7/3, 1]': 0, '(1, \\infty)': 0, '$(-\\infty, -7/3)$ ': 0, '($\\emptyset$)': 0 },
      },
      {
        id: 4,
        text: 'Bentuk sederhana dari $\\frac{\\sqrt{18} + \\sqrt{8}}{\\sqrt{32} - \\sqrt{2}}$ adalah...',
        options: { '$\\frac{1}{3}$': 0, '$\\frac{2}{3}$': 0, '1': 0, '$\\frac{4}{3}$': 5, '$\\frac{5}{3}$': 0 },
      },
      {
        id: 5,
        text: 'Himpunan penyelesaian dari $\\log_3(x^2-4) > 1$ adalah...',
        options: { '$(-\\infty, -\\sqrt{7}) \\cup (\\sqrt{7}, \\infty)$ ': 5, '$(-\\sqrt{7}, \\sqrt{7})$': 0, '(-2, 2)': 0, '($\\emptyset$)': 0, '($\\sqrt{7}, \\infty$)': 0 },
      },

      // ===== Domain 2: Aljabar & Fungsi =====
      {
        id: 6,
        text: 'Jika $f(x) = x+2$ dan $(g \\circ f)(x) = x^2 + 4x + 1$, maka $g(x) = \\dots$',
        options: { '$x^2 - 3$': 5, '$x^2 - 2$': 0, '$x^2 - 1$': 0, '$x^2$': 0, '$x^2 + 1$': 0 },
      },
      {
        id: 7,
        text: 'Jika $x-y+z=4$, $2x+y-z=1$, $x+2y+z=7$, maka nilai $x+y+z = \\dots$',
        options: { '5': 0, '6': 5, '7': 0, '8': 0, '9': 0 },
      },
      {
        id: 8,
        text: 'Agar fungsi kuadrat $f(x) = x^2 + (k-1)x + 4$ selalu positif untuk setiap $x$ real, maka nilai $k$ yang memenuhi adalah...',
        options: { '$-3 < k < 5$': 5, '$k < -3$': 0, '$k > 5$': 0, '$k < -5$': 0, '$k > 3$': 0 },
      },
      {
        id: 9,
        text: 'Jika $x_1$ dan $x_2$ adalah akar-akar persamaan $x^2 - 3x + 1 = 0$, maka nilai $x_1^2 + x_2^2 = \\dots$',
        options: { '5': 0, '6': 0, '7': 5, '8': 0, '9': 0 },
      },
      {
        id: 10,
        text: 'Himpunan penyelesaian dari $\\frac{x^2-x-12}{x-2} \\le 0$ adalah...',
        options: { '$(-\\infty, -3] \\cup (2, 4]$ ': 5, '[-3, 2) \\cup [4, \\infty)': 0, '[-3, 4]': 0, '(2, 4]': 0, '$(-\\infty, -3]$': 0 },
      },

      // ===== Domain 3: Geometri, Pengukuran & Dimensi Tiga =====
      {
        id: 11,
        text: 'Dalam $\\triangle ABC$, diketahui $AB=6$ cm, $AC=10$ cm, dan $\\angle A = 30^\\circ$. Luas $\\triangle ABC$ adalah...',
        options: { '$15 \\text{ cm}^2$': 5, '$20 \\text{ cm}^2$': 0, '$25 \\text{ cm}^2$': 0, '$30 \\text{ cm}^2$': 0, '$35 \\text{ cm}^2$': 0 },
      },
      {
        id: 12,
        text: 'Jarak titik pusat lingkaran $x^2+y^2-4x+6y-12=0$ ke garis $3x-4y+5=0$ adalah...',
        options: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 5 },
      },
      {
        id: 13,
        text: 'Pada kubus $ABCD.EFGH$, sudut antara garis $AH$ dan bidang $BDHF$ adalah $\\alpha$. Nilai $\\sin \\alpha = \\dots$',
        options: { '$\\frac{1}{2}$': 0, '$\\frac{1}{2}\\sqrt{2}$': 0, '$\\frac{1}{2}\\sqrt{3}$': 0, '$\\frac{1}{3}\\sqrt{3}$': 5, '$\\frac{1}{2}\\sqrt{6}$': 0 },
      },
      {
        id: 14,
        text: 'Titik $A(2, -4)$ didilatasikan dengan pusat $O(0,0)$ dan faktor skala $k=3$. Kemudian dilanjutkan dengan translasi oleh $T = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$. Koordinat bayangan akhir titik $A$ adalah...',
        options: { '$(5, -10)$ ': 5, '$(5, -12)$ ': 0, '$(6, -10)$ ': 0, '$(6, -12)$ ': 0, '$(7, -10)$ ': 0 },
      },
      {
        id: 15,
        text: 'Diketahui vektor $\\vec{a} = (1, 2, 3)$ dan $\\vec{b} = (-1, 1, 0)$. Sudut antara vektor $\\vec{a}$ dan $\\vec{b}$ adalah...',
        options: { '$30^\\circ$': 0, '$45^\\circ$': 0, '$60^\\circ$': 0, '$90^\\circ$': 5, '$120^\\circ$': 0 },
      },

      // ===== Domain 4: Trigonometri & Koordinat =====
      {
        id: 16,
        text: 'Jika $\\tan x = p$, maka $\\sin 2x = \\dots$',
        options: { '$\\frac{2p}{1+p^2}$': 5, '$\\frac{1-p^2}{1+p^2}$': 0, '$\\frac{2p}{1-p^2}$': 0, '$\\frac{1+p^2}{2p}$': 0, '$\\frac{1-p^2}{2p}$': 0 },
      },
      {
        id: 17,
        text: 'Himpunan penyelesaian dari $\\cos 2x - \\sin x = 0$ untuk $0 \\le x \\le \\pi$ adalah...',
        options: { '$\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\}$': 5, '$\{\\frac{\\pi}{2}, \\frac{7\\pi}{6}\}$': 0, '$\{\\frac{\\pi}{6}, \\frac{\\pi}{2}\}$': 0, '$\{\\frac{\\pi}{2}, \\frac{5\\pi}{6}\}$': 0, '$\{\\frac{\\pi}{6}, \\frac{3\\pi}{2}\}$': 0 },
      },
      {
        id: 18,
        text: 'Dalam $\\triangle ABC$, jika $a=5$, $b=7$, dan $c=8$, maka nilai $\\cos A = \\dots$',
        options: { '$\\frac{1}{7}$': 5, '$\\frac{2}{7}$': 0, '$\\frac{3}{7}$': 0, '$\\frac{4}{7}$': 0, '$\\frac{5}{7}$': 0 },
      },
      {
        id: 19,
        text: 'Persamaan $x^2 + y^2 = 6x$ dalam koordinat kutub adalah...',
        options: { '$r = 6\\sin\\theta$': 0, '$r = 6\\cos\\theta$': 5, '$r = 3\\sin\\theta$': 0, '$r = 3\\cos\\theta$': 0, '$r = 6$': 0 },
      },
      {
        id: 20,
        text: 'Persamaan garis yang melalui titik $(2, -1)$ dan tegak lurus dengan garis $x + 2y - 3 = 0$ adalah...',
        options: { '$2x-y-5=0$': 5, '$2x+y-3=0$': 0, '$x-2y-4=0$': 0, '$x+2y=0$': 0, '$2x-y-3=0$': 0 },
      },

      // ===== Domain 5: Data, Statistika & Peluang =====
      {
        id: 21,
        text: 'Ragam (variansi) dari data $3, 5, 7, 9, 11$ adalah...',
        options: { '4': 0, '6': 0, '8': 5, '10': 0, '12': 0 },
      },
      {
        id: 22,
        text: 'Dari angka-angka $1, 2, 3, 4, 5$ akan dibentuk bilangan ganjil yang terdiri dari $3$ angka berbeda. Banyak bilangan yang dapat dibentuk adalah...',
        options: { '24': 0, '30': 0, '36': 5, '48': 0, '60': 0 },
      },
      {
        id: 23,
        text: 'Dalam sebuah kotak terdapat $6$ kelereng merah dan $4$ kelereng biru. Jika diambil $2$ kelereng sekaligus secara acak, peluang terambil $1$ merah dan $1$ biru adalah...',
        options: { '$\\frac{8}{15}$': 5, '$\\frac{7}{15}$': 0, '$\\frac{6}{15}$': 0, '$\\frac{5}{15}$': 0, '$\\frac{4}{15}$': 0 },
      },
      {
        id: 24,
        text: 'Nilai rata-rata ujian adalah $75$ dengan simpangan baku $5$. Jika seorang siswa mendapat nilai $85$, maka nilai Z-score siswa tersebut adalah...',
        options: { '1': 0, '1.5': 0, '2': 5, '2.5': 0, '3': 0 },
      },
      {
        id: 25,
        text: 'Sebuah kantong berisi $3$ bola merah dan $2$ bola putih. Dari kantong tersebut diambil $2$ bola sekaligus. Jika $X$ adalah variabel acak banyaknya bola merah yang terambil, maka nilai $E(X)$ adalah...',
        options: { '0.6': 0, '0.8': 0, '1': 0, '1.2': 5, '1.4': 0 },
      },
    ]
  },
  {
    id: 'tka-matematika-wajib-06',
    title: 'TKA Matematika Wajib - Paket #6',
    description:
      'Paket 25 soal TKA Matematika Wajib: bilangan, aljabar, geometri, trigonometri, statistika, peluang, barisan/deret, dan fungsi. Tingkat kesulitan serupa dengan Paket #5.',
    thumbnail:
      'https://images.unsplash.com/photo-1596495578065-6f8057530e6e?q=80&w=1200&auto=format&fit=crop',
    duration: 50,
    totalQuestions: 25,
    difficulty: 'sedang', // Keeping 'sedang' but questions are challenging
    categories: [
      'Bilangan',
      'Aljabar',
      'Geometri',
      'Trigonometri',
      'Statistika & Peluang',
      'Barisan & Deret',
      'Fungsi'
    ],
    price: 0,
    isPremium: false,
    questions: [
      // ===== Domain 1: Bilangan, Eksponen & Logaritma =====
      {
        id: 1,
        text: 'Jika $2^{x^2 - x - 2} = 1$, maka jumlah semua nilai $x$ adalah...',
        options: { '-1': 0, '0': 0, '1': 5, '2': 0, '3': 0 },
      },
      {
        id: 2,
        text: 'Jika $\\log_2 5 = a$ dan $\\log_5 3 = b$, maka $\\log_3 10 = \\dots$',
        options: { '$\\frac{1+a}{b}$': 0, '$\\frac{1+b}{a}$': 0, '$\\frac{a}{1+b}$': 0, '$\\frac{b}{1+a}$': 0, '$\\frac{1+a}{ab}$': 5 },
      },
      {
        id: 3,
        text: 'Himpunan penyelesaian dari $|x-1| + |x+2| = 5$ adalah...',
        options: { '$\{-3, 2\}$ ': 5, '$\{-2, 3\}$ ': 0, '$\{-1, 4\}$ ': 0, '$\{0, 5\}$ ': 0, '$\{-4, 1\}$ ': 0 },
      },
      {
        id: 4,
        text: 'Bentuk sederhana dari $\\frac{\\sqrt{75} - \\sqrt{3}}{\\sqrt{12} + \\sqrt{27}}$ adalah...',
        options: { '$\\frac{2}{3}$': 0, '$\\frac{3}{5}$': 0, '$\\frac{2}{5}$': 0, '$\\frac{4}{5}$': 5, '$\\frac{5}{7}$': 0 },
      },
      {
        id: 5,
        text: 'Himpunan penyelesaian dari $\\log_{\\frac{1}{2}} (2x-3) > -1$ adalah...',
        options: { '$(\\frac{3}{2}, 2)$ ': 5, '(2, \\infty)': 0, '$(-\\infty, 2)$ ': 0, '$(\\frac{3}{2}, \\infty)$ ': 0, '($\\emptyset$)': 0 },
      },

      // ===== Domain 2: Aljabar & Fungsi =====
      {
        id: 6,
        text: 'Jika $f(x) = \\frac{2x+1}{x-3}$, maka $f^{-1}(x) = \\dots$',
        options: { '$\\frac{3x+1}{x-2}$': 5, '$\\frac{3x-1}{x-2}$': 0, '$\\frac{3x+1}{2-x}$': 0, '$\\frac{3x-1}{2-x}$': 0, '$\\frac{x-1}{2x+3}$': 0 },
      },
      {
        id: 7,
        text: 'Jika $x+y-z=1$, $2x-y+2z=9$, $x+2y+3z=6$, maka nilai $x+y+z = \\dots$',
        options: { '3': 0, '4': 5, '5': 0, '6': 0, '7': 0 },
      },
      {
        id: 8,
        text: 'Jika $x_1$ dan $x_2$ adalah akar-akar persamaan $x^2 - 4x + p = 0$ dan $x_1^2 + x_2^2 = 10$, maka nilai $p = \\dots$',
        options: { '1': 0, '2': 0, '3': 5, '-1': 0, '-2': 0 },
      },
      {
        id: 9,
        text: 'Himpunan penyelesaian dari $(x-2)(x+3) \\ge x-2$ adalah...',
        options: { '$(-\\infty, -4] \\cup [2, \\infty)$ ': 5, '[-4, 2]': 0, '(-4, 2)': 0, '(2, \\infty)': 0, '$(-\\infty, -4]$': 0 },
      },
      {
        id: 10,
        text: 'Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 0 & 5 \\\\ 2 & -1 \\end{pmatrix}$. Matriks $2A - B^T$ adalah...',
        options: { '$\\begin{pmatrix} 4 & -3 \\\\ 4 & 9 \\end{pmatrix}$': 5, '$\\begin{pmatrix} 4 & -3 \\\\ 8 & 7 \\end{pmatrix}$': 0, '$\\begin{pmatrix} 4 & -3 \\\\ 4 & 7 \\end{pmatrix}$': 0, '$\\begin{pmatrix} 4 & -3 \\\\ 4 & 5 \\end{pmatrix}$': 0, '$\\begin{pmatrix} 4 & -3 \\\\ 8 & 9 \\end{pmatrix}$': 0 },
      },

      // ===== Domain 3: Geometri, Pengukuran & Dimensi Tiga =====
      {
        id: 11,
        text: 'Luas jajargenjang yang titik-titik sudutnya adalah $A(0,0)$, $B(3,1)$, $C(4,3)$, $D(1,2)$ adalah...',
        options: { '5': 0, '6': 0, '7': 5, '8': 0, '9': 0 },
      },
      {
        id: 12,
        text: 'Salah satu persamaan garis singgung lingkaran $x^2+y^2=5$ yang melalui titik $(1, -2)$ adalah...',
        options: { '$x-2y=5$': 5, '$x+2y=5$': 0, '$2x-y=5$': 0, '$2x+y=5$': 0, '$x-y=3$': 0 },
      },
      {
        id: 13,
        text: 'Pada limas beraturan $T.ABCD$ dengan alas persegi $ABCD$. Panjang $AB=6$ cm dan $TA=5$ cm. Jarak titik $A$ ke bidang $TBC$ adalah...',
        options: { '$\\frac{12}{5}$': 0, '$\\frac{18}{5}$': 0, '$\\frac{24}{5}$': 5, '$\\frac{36}{5}$': 0, '$\\frac{48}{5}$': 0 },
      },
      {
        id: 14,
        text: 'Titik $A(-2,5)$ direfleksikan terhadap garis $y = -x$. Kemudian dilanjutkan dengan rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Koordinat bayangan akhir titik $A$ adalah...',
        options: { '$(-5, -2)$ ': 5, '$(5, 2)$ ': 0, '(-2, 5)': 0, '(2, -5)': 0, '(5, -2)': 0 },
      },
      {
        id: 15,
        text: 'Diketahui vektor $\\vec{p} = (2, -3, 1)$ dan $\\vec{q} = (1, 0, -2)$. Proyeksi vektor ortogonal $\\vec{p}$ pada $\\vec{q}$ adalah...',
        options: { '$(4/5, 0, -8/5)$ ': 5, '(0, 4/5, -8/5)': 0, '(4/5, 0, 8/5)': 0, '(0, -4/5, 8/5)': 0, '(4/5, -8/5, 0)': 0 },
      },

      // ===== Domain 4: Trigonometri & Koordinat =====
      {
        id: 16,
        text: 'Nilai dari $\\frac{\\sin 75^\\circ + \\sin 15^\\circ}{\\cos 75^\\circ + \\cos 15^\\circ} = \\dots$',
        options: { '$\\frac{1}{2}\\sqrt{2}$': 0, '$\\frac{1}{2}\\sqrt{3}$': 0, '1': 5, '$\\sqrt{2}$': 0, '$\\sqrt{3}$': 0 },
      },
      {
        id: 17,
        text: 'Himpunan penyelesaian dari $\\tan x = \\tan \\frac{\\pi}{3}$ untuk $0 \\le x \\le 2\\pi$ adalah...',
        options: { '$\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\}$': 5, '$\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\}$': 0, '$\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\}$': 0, '$\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\}$': 0, '$\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\}$': 0 },
      },
      {
        id: 18,
        text: 'Dalam $\\triangle ABC$, jika $a=4$, $b=3$, dan $\\angle A = 60^\\circ$, maka nilai $\\sin B = \\dots$',
        options: { '$\\frac{1}{8}\\sqrt{3}$': 0, '$\\frac{3}{8}\\sqrt{3}$': 5, '$\\frac{1}{2}\\sqrt{3}$': 0, '$\\frac{3}{4}\\sqrt{3}$': 0, '$\\frac{3}{2}\\sqrt{3}$': 0 },
      },
      {
        id: 19,
        text: 'Persamaan $r = 2\\sin\\theta + 2\\cos\\theta$ dalam koordinat Kartesius adalah...',
        options: { '$(x-1)^2 + (y-1)^2 = 2$': 5, '$(x+1)^2 + (y-1)^2 = 2$': 0, '$(x-1)^2 + (y+1)^2 = 2$': 0, '$x^2+y^2=2$': 0, '$x^2+y^2=x+y$': 0 },
      },
      {
        id: 20,
        text: 'Jarak titik $P(1, -2, 3)$ ke bidang $2x - 3y + 6z - 7 = 0$ adalah...',
        options: { '2': 0, '3': 5, '4': 0, '5': 0, '6': 0 },
      },

      // ===== Domain 5: Data, Statistika & Peluang =====
      {
        id: 21,
        text: 'Diberikan data: $3, 4, 5, 5, 6, 7, 8, 8, 9, 10$. Kuartil atas ($Q_3$) dari data tersebut adalah...',
        options: { '7': 0, '7.5': 0, '8': 0, '8.5': 5, '9': 0 },
      },
      {
        id: 22,
        text: 'Tersedia $7$ angka $1, 2, 3, 4, 5, 6, 7$. Akan dibuat bilangan genap yang terdiri dari $3$ angka berbeda. Banyak bilangan tersebut adalah...',
        options: { '90': 5, '108': 0, '120': 0, '126': 0, '144': 0 },
      },
      {
        id: 23,
        text: 'Dua buah dadu dilempar bersama. Peluang muncul jumlah mata dadu kurang dari $5$ jika diketahui kedua mata dadu tidak sama adalah...',
        options: { '$\\frac{1}{5}$': 5, '$\\frac{2}{5}$': 0, '$\\frac{3}{5}$': 0, '$\\frac{1}{6}$': 0, '$\\frac{1}{10}$': 0 },
      },
      {
        id: 24,
        text: 'Sebuah perusahaan memproduksi bola lampu dengan rata-rata daya tahan $1000$ jam dan simpangan baku $50$ jam. Jika daya tahan bola lampu terdistribusi normal, persentase bola lampu yang daya tahannya antara $950$ jam dan $1050$ jam adalah sekitar...',
        options: { '$34\\%$': 0, '$68\\%$': 5, '$95\\%$': 0, '$99\\%$': 0, '$50\\%$': 0 },
      },
      {
        id: 25,
        text: 'Dalam permainan melempar koin, jika muncul gambar pemain mendapat $\\text{Rp}\\,2.000$, dan jika muncul angka pemain mendapat $\\text{Rp}\\,1.000$. Berapa harapan kemenangan pemain jika koin dilempar $1$ kali?',
        options: { '$\\text{Rp}\\,1.000$': 0, '$\\text{Rp}\\,1.250$': 0, '$\\text{Rp}\\,1.500$': 5, '$\\text{Rp}\\,1.750$': 0, '$\\text{Rp}\\,2.000$': 0 },
      },
    ]
  },
];
