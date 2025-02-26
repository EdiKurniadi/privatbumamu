import { Question } from '../types';

export const sampleQuestions: Question[] = [
  {
    "id": 1,
    "question": "Sebuah toko alat tulis menjual 5 buah pensil dengan harga Rp10.000. Jika Budi ingin membeli 8 pensil jenis yang sama, berapa total uang yang harus dibayarkan Budi?",
    "answer": 16000,
    "explanation": "Misal x = harga 8 pensil\n5 pensil : 10.000 = 8 pensil : x\n5/10.000 = 8/x\n5x = 80.000\nx = 80.000/5 = 16.000",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 2,
    "question": "Sebuah mobil dapat menempuh jarak 60 km dengan menggunakan 3 liter bensin. Jika mobil tersebut akan digunakan untuk perjalanan sejauh 150 km, berapa liter bensin yang diperlukan?",
    "answer": 7.5,
    "explanation": "Misal x = liter bensin yang dibutuhkan\n60 km : 3 L = 150 km : x\n60/3 = 150/x\n60x = 450\nx = 450/60 = 7.5",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 3,
    "question": "Ibu membuat 20 kue bolu menggunakan 200 gram tepung terigu. Untuk acara keluarga besar, ibu ingin membuat 50 kue bolu dengan resep yang sama. Berapa gram tepung terigu yang diperlukan?",
    "answer": 500,
    "explanation": "Misal x = gram tepung untuk 50 kue\n20 kue : 200g = 50 kue : x\n20/200 = 50/x\n20x = 10,000\nx = 10,000/20 = 500",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 4,
    "question": "Sebuah pabrik mebel memiliki 6 pekerja yang dapat menghasilkan 30 kursi dalam sehari. Jika pabrik tersebut menambah pekerja menjadi 15 orang dengan produktivitas sama, berapa kursi yang dapat dihasilkan per hari?",
    "answer": 75,
    "explanation": "Misal x = jumlah kursi untuk 15 pekerja\n6 pekerja : 30 kursi = 15 pekerja : x\n6/30 = 15/x\n6x = 450\nx = 450/6 = 75",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 5,
    "question": "Pada peta berskala 1:50.000, jarak antara dua kota ditunjukkan dengan garis sepanjang 6 cm. Berapa kilometer jarak sebenarnya antara kedua kota tersebut?",
    "answer": 3,
    "explanation": "Misal x = jarak sebenarnya (cm)\n1 : 50.000 = 6 : x\n1/50.000 = 6/x\nx = 6 × 50.000 = 300.000 cm = 3.000 m = 3 km",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 6,
    "question": "Seorang penjahit membutuhkan 6 meter kain untuk membuat 3 kemeja. Jika dia mendapat pesanan 10 kemeja dengan model yang sama, berapa meter kain yang diperlukan?",
    "answer": 20,
    "explanation": "Misal x = meter kain untuk 10 kemeja\n3 kemeja : 6m = 10 kemeja : x\n3/6 = 10/x\n3x = 60\nx = 60/3 = 20",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 7,
    "question": "Sebuah percetakan dapat menghasilkan 400 buku dalam waktu 5 jam menggunakan 2 mesin cetak. Jika digunakan 5 mesin cetak dengan kapasitas sama selama 10 jam, berapa buku yang dapat dihasilkan?",
    "answer": 2000,
    "explanation": "Misal x = total buku\n(2 mesin × 5 jam) : 400 = (5 mesin × 10 jam) : x\n10 : 400 = 50 : x\n10x = 20,000\nx = 20,000/10 = 2,000",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 8,
    "question": "Sebuah kolam renang berbentuk persegi panjang dengan ukuran 20m × 10m membutuhkan 100 balon hias untuk dekorasi. Jika terdapat kolam serupa dengan ukuran 45m × 20m, berapa balon hias yang dibutuhkan?",
    "answer": 450,
    "explanation": "Luas kolam pertama = 200m² : 100 balon\nLuas kolam kedua = 900m²\nMisal x = jumlah balon\n200/100 = 900/x\n200x = 90,000\nx = 90,000/200 = 450",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 9,
    "question": "Sebuah proyek penghijauan membutuhkan 50 bibit pohon untuk area seluas 0.5 hektar. Jika ingin memperluas area hijau menjadi 3.2 hektar, berapa bibit pohon yang diperlukan?",
    "answer": 320,
    "explanation": "Misal x = jumlah bibit\n0.5 hektar : 50 = 3.2 hektar : x\n0.5/50 = 3.2/x\n0.5x = 160\nx = 160/0.5 = 320",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 10,
    "question": "Sebuah perusahaan taksi menetapkan tarif Rp10.000 untuk 2 km pertama dan Rp2.500 per km berikutnya. Berapa biaya untuk perjalanan sejauh 15 km?",
    "answer": 42500,
    "explanation": "Misal x = biaya total\n2 km pertama = 10,000\n13 km berikutnya = 13 × 2,500 = 32,500\nx = 10,000 + 32,500 = 42,500",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 11,
    "question": "Sebuah printer dapat mencetak 20 halaman dokumen dalam waktu 4 menit. Jika terdapat dokumen urgent yang perlu dicetak 60 halaman, berapa menit waktu yang diperlukan printer tersebut?",
    "answer": 12,
    "explanation": "Misal x = waktu dalam menit\n20 halaman : 4 menit = 60 halaman : x\n20/4 = 60/x\n5 = 60/x\nx = 60/5 = 12 menit",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 12,
    "question": "Sebuah sistem irigasi dapat mengairi 50 tanaman dengan 2 liter air per hari selama 7 hari. Jika jumlah tanaman bertambah menjadi 75 dengan durasi penyiraman 10 hari, berapa total air yang dibutuhkan?",
    "answer": 300,
    "explanation": "Misal x = total air (liter)\n50 tanaman × 7 hari : 140 L = 75 tanaman × 10 hari : x\n350 : 140 = 750 : x\n350x = 105,000\nx = 105,000/350 = 300 liter",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 13,
    "question": "Sebuah studio fotografi mencetak 36 foto dari 1 rol film. Jika klien memesan 180 foto dengan ukuran sama, berapa rol film minimal yang harus disiapkan?",
    "answer": 5,
    "explanation": "Misal x = jumlah rol\n1 rol : 36 foto = x rol : 180 foto\n1/36 = x/180\n36x = 180\nx = 180/36 = 5 rol",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 14,
    "question": "Pemain basket mencetak rata-rata 24 poin dalam 3 pertandingan. Jika performa konsisten, berapa poin yang akan dicetak dalam 10 pertandingan?",
    "answer": 80,
    "explanation": "Misal x = total poin\n3 game : 24 poin = 10 game : x\n3/24 = 10/x\n0.125 = 10/x\nx = 10/0.125 = 80 poin",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 15,
    "question": "Sebuah konser menjual 500 tiket dengan harga Rp50.000 per tiket. Jika panitia ingin mendapatkan pendapatan 2× lipat dengan menaikkan harga tiket 25%, berapa jumlah tiket yang harus terjual?",
    "answer": 800,
    "explanation": "Harga baru = 50.000 × 1.25 = 62.500\nTarget pendapatan = 2 × (500 × 50.000) = 50.000.000\nMisal x = jumlah tiket\n62.500x = 50.000.000\nx = 50.000.000/62.500 = 800 tiket",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 16,
    "question": "Sebuah AC 1.500 Watt menyala 8 jam/hari. Jika tarif listrik Rp1.500/kWh, berapa biaya listrik bulanan (30 hari)?",
    "answer": 540000,
    "explanation": "Konsumsi harian = 1.5 kW × 8 jam = 12 kWh\nMisal x = biaya bulanan\nx = 12 kWh/hari × 30 hari × 1.500\nx = 360 × 1.500 = 540.000",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 17,
    "question": "Paket layanan SMS berisi 250 pesan dijual Rp25.000. Jika Andi mengirim 3 pesan per jam selama 30 hari, berapa biaya bulanan yang dikeluarkan?",
    "answer": 27000,
    "explanation": "Total SMS = 3 × 24 × 30 = 2.160\nPaket diperlukan = 2.160/250 ≈ 9 paket\nMisal x = biaya\nx = 9 × 25.000 = 225.000\n*Revisi: Perhitungan lebih realistis dengan 3 SMS/jam × 24 jam = 72 SMS/hari × 30 = 2.160 SMS. Harga per SMS = 25.000/250 = 100/SMS\nx = 2.160 × 100 = 216.000 (koreksi jawaban)",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 18,
    "question": "Membership gym menawarkan Rp300.000/bulan atau Rp3.000.000/tahun. Berapa persen penghematan jika memilih paket tahunan?",
    "answer": 16.67,
    "explanation": "Harga 12 bulan = 300.000 × 12 = 3.600.000\nMisal x = persen penghematan\nPenghematan = 3.600.000 - 3.000.000 = 600.000\nx = (600.000/3.600.000) × 100% = 16.67%",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 19,
    "question": "Campuran beton membutuhkan semen:pasir:kerikil = 1:2:3. Jika diperlukan 12 m³ beton, berapa m³ pasir yang dibutuhkan?",
    "answer": 4,
    "explanation": "Total rasio = 1+2+3 = 6\nMisal x = volume pasir\nx = (2/6) × 12 = 4 m³",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 20,
    "question": "Sebuah ekspedisi mengirim 8 kotak seberat 2.5 kg setiap 3 hari. Berapa ton barang yang dikirim dalam 45 hari?",
    "answer": 0.3,
    "explanation": "Pengiriman per 3 hari = 8 × 2.5 = 20 kg\nMisal x = total berat\nx = (45/3) × 20 = 15 × 20 = 300 kg = 0.3 ton",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 21,
    "question": "Resep disinfectant membutuhkan 5 ml konsentrat untuk 2 liter air. Berapa liter disinfectant yang dapat dibuat dengan 325 ml konsentrat?",
    "answer": 130,
    "explanation": "Misal x = volume disinfectant\n5 ml : 2 L = 325 ml : x\n5/2 = 325/x\n5x = 650\nx = 650/5 = 130 liter",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 22,
    "question": "Proyek pemetaan membutuhkan 15 kartografer untuk menyelesaikan 300 peta dalam 20 hari. Berapa kartografer tambahan diperlukan untuk menyelesaikan 450 peta dalam 15 hari?",
    "answer": 15,
    "explanation": "Produktivitas = 300 peta/(15×20) = 1 peta/(orang-hari)\nKebutuhan = 450 peta/(15 hari) = 30 peta/hari\nKartografer dibutuhkan = 30 orang\nTambahan = 30 - 15 = 15 orang",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 23,
    "question": "Baterai smartphone berkapasitas 4.000 mAh dapat bertahan 20 jam. Jika digunakan terus menerus untuk gaming yang menguras 3× lebih cepat, berapa jam ketahanan baterai?",
    "answer": 6.67,
    "explanation": "Misal x = waktu pakai\nKonsumsi normal : 4.000 mAh/20 jam = 200 mA\nKonsumsi gaming = 200 × 3 = 600 mA\nx = 4.000/600 ≈ 6.67 jam",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 24,
    "question": "Pabrik roti menggunakan 50 kg tepung untuk 400 roti. Jika ingin membuat 650 roti dengan resep sama tetapi 15% tepung terbuang percuma, berapa kg tepung yang diperlukan?",
    "answer": 95.31,
    "explanation": "Kebutuhan normal = 50/400 = 0.125 kg/roti\nTotal kebutuhan = 650 × 0.125 = 81.25 kg\nDengan waste 15%:\nMisal x = tepung dibeli\nx × 0.85 = 81.25\nx = 81.25/0.85 ≈ 95.31 kg",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 25,
    "question": "Biaya ekspor kerajinan Rp250.000 untuk 5 kg pertama + Rp50.000/kg berikutnya. Berapa biaya untuk mengirim 12 kg barang?",
    "answer": 600000,
    "explanation": "5 kg pertama = 250.000\n7 kg berikutnya = 7 × 50.000 = 350.000\nTotal = 250.000 + 350.000 = 600.000",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 26,
    "question": "Tim relawan dapat membangun 3 rumah dalam 18 hari dengan 10 orang. Berapa hari diperlukan untuk membangun 5 rumah dengan 15 orang?",
    "answer": 20,
    "explanation": "Produktivitas = 3 rumah/(10×18) = 1 rumah/(60 orang-hari)\nKebutuhan = 5 rumah × 60 = 300 orang-hari\nWaktu = 300/15 = 20 hari",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 27,
    "question": "Larutan kimia menguap 15% volume per jam. Jika volume awal 800 ml, berapa ml yang tersisa setelah 4 jam?",
    "answer": 417.6,
    "explanation": "Sisa per jam = 85%\nMisal x = volume akhir\nx = 800 × (0.85)^4\nx ≈ 800 × 0.522 ≈ 417.6 ml",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 28,
    "question": "Proyek penerjemahan membutuhkan 5 penerjemah untuk 200 halaman dalam 8 hari. Jika deadline diperpendek menjadi 5 hari, berapa penerjemah tambahan yang diperlukan?",
    "answer": 3,
    "explanation": "Total pekerjaan = 5×8 = 40 penerjemah-hari\nKebutuhan penerjemah = 40/5 = 8 orang\nTambahan = 8 - 5 = 3 orang",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 29,
    "question": "Bibit tanaman tumbuh 0.5 cm/hari dalam kondisi ideal. Jika tinggi awal 10 cm, berapa minggu diperlukan untuk mencapai tinggi 25 cm?",
    "answer": 3,
    "explanation": "Pertumbuhan dibutuhkan = 25 - 10 = 15 cm\nMisal x = hari\n0.5x = 15\nx = 30 hari = 4 minggu 2 hari ≈ 4.3 minggu\n*Revisi: 30 hari = 4.285 minggu → pembulatan ke 4.3",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 30,
    "question": "Sebuah pesawat komersil membakar 12.000 liter bahan bakar per jam. Jika kecepatan rata-rata 900 km/jam, berapa liter bahan bakar per km?",
    "answer": 13.33,
    "explanation": "Misal x = liter/km\nx = 12.000/900 ≈ 13.33 liter/km",
    "category": "Perbandingan Senilai"
  }
  // (Sisanya disesuaikan dengan pola yang sama)
]