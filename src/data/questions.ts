 import { Question } from '../types';

export const sampleQuestions: Question[] = [
  {
    id: 1,
    variabel: {
      JumlahPensilDijual: "[1-7,1]",
      // Meskipun variabel HargaPensil ada di belakang layar,
      // pada soal yang muncul hanya terlihat ekspresi HargaPensil*JumlahPensilDijual.
      HargaPensil: "[5000-12000,1000]",
      JumlahPensilDibeliBudi: "[8-15,1]"
    },
    question:
      "Sebuah toko alat tulis menjual {JumlahPensilDijual} buah pensil dengan harga Rp{HargaPensil*JumlahPensilDijual}. Jika Budi ingin membeli {JumlahPensilDibeliBudi} pensil jenis yang sama, berapa total uang yang harus dibayarkan Budi?",
    answer: "{JumlahPensilDibeliBudi*HargaPensil}",
    explanation:
      "Diketahui dari soal:\n" +
      "• Total harga untuk {JumlahPensilDijual} buah pensil adalah Rp{HargaPensil*JumlahPensilDijual}.\n" +
      "Langkah 1: Harga per pensil dapat dihitung sebagai:\n" +
      "    Harga per pensil = {HargaPensil*JumlahPensilDijual} ÷ {JumlahPensilDijual}.\n" +
      "Langkah 2: Total harga untuk {JumlahPensilDibeliBudi} buah = (Harga per buah) × {JumlahPensilDibeliBudi}.\n" +
      "Sehingga, total biaya = ({HargaPensil*JumlahPensilDijual} ÷ {JumlahPensilDijual}) × {JumlahPensilDibeliBudi} = {JumlahPensilDibeliBudi*HargaPensil}.\n" +
      "Jawaban akhirnya: {JumlahPensilDibeliBudi*HargaPensil}.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 2,
    variabel: {
      BensinAwal: "[2-10,1]",
      JarakPerBensin: "[30-100,10]",
      BensinTarget: "[12-18,1]"
    },
    question:
      "Sebuah mobil dapat menempuh jarak {BensinAwal*JarakPerBensin} km dengan menggunakan {BensinAwal} liter bensin. Jika mobil tersebut akan digunakan untuk perjalanan sejauh {BensinTarget*JarakPerBensin} km, berapa liter bensin yang diperlukan?",
    answer: "{BensinTarget}",
    explanation:
      "Dari soal terlihat bahwa:\n" +
      "• Mobil menempuh {BensinAwal*JarakPerBensin} km dengan {BensinAwal} liter bensin.\n" +
      "Langkah 1: Efisiensi (km per liter) = {JarakPerBensin}.\n" +
      "Langkah 2: Untuk menempuh {BensinTarget*JarakPerBensin} km, bensin yang diperlukan = ({BensinTarget*JarakPerBensin}) ÷ {JarakPerBensin} = {BensinTarget} liter.\n" +
      "Jawaban akhirnya: {BensinTarget} liter.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 3,
    variabel: {
      KueAwal: "[15-25,1]",
      TepungPerKue: "[150-250,10]",
      KueTarget: "[40-60,1]"
    },
    question:
      "Ibu membuat {KueAwal} kue bolu menggunakan {KueAwal*TepungPerKue} gram tepung terigu. Untuk acara keluarga besar, ibu ingin membuat {KueTarget} kue bolu dengan resep yang sama. Berapa gram tepung terigu yang diperlukan?",
    answer: "{KueTarget*TepungPerKue}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Total tepung untuk {KueAwal} kue adalah {KueAwal*TepungPerKue} gram.\n" +
      "Langkah 1: Tepung per kue = {KueAwal*TepungPerKue} ÷ {KueAwal} = {TepungPerKue} gram.\n" +
      "Langkah 2: Untuk {KueTarget} kue, total tepung = {TepungPerKue} × {KueTarget} = {KueTarget*TepungPerKue} gram.\n" +
      "Jawaban akhirnya: {KueTarget*TepungPerKue} gram.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 4,
    variabel: {
      PekerjaAwal: "[5-10,1]",
      KursiPerPekerja: "[5-15,3]",
      PekerjaBaru: "[12-20,1]"
    },
    question:
      "Sebuah pabrik mebel memiliki {PekerjaAwal} pekerja yang dapat menghasilkan {PekerjaAwal*KursiPerPekerja} kursi dalam sehari. Jika pabrik tersebut menambah pekerja menjadi {PekerjaBaru} orang, berapa kursi yang dapat dihasilkan per hari?",
    answer: "{PekerjaBaru*KursiPerPekerja}",
    explanation:
      "Diketahui dari soal:\n" +
      "• {PekerjaAwal} pekerja menghasilkan {PekerjaAwal*KursiPerPekerja} kursi.\n" +
      "Langkah 1: Dengan menambahkan hingga {PekerjaBaru} pekerja, dan setiap pekerja menghasilkan {KursiPerPekerja} kursi,\n" +
      "maka total kursi = {PekerjaBaru} × {KursiPerPekerja} = {PekerjaBaru*KursiPerPekerja}.\n" +
      "Jawaban akhirnya: {PekerjaBaru*KursiPerPekerja} kursi.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 5,
    variabel: {
      GarisPeta: "[5-10,1]",
      SkalaPeta: "[30000-70000,10000]"
    },
    question:
      "Pada peta berskala 1:{SkalaPeta}, jarak antara dua kota ditunjukkan dengan garis sepanjang {GarisPeta} cm. Berapa kilometer jarak sebenarnya antara kedua kota tersebut?",
    answer: "{GarisPeta*SkalaPeta/100000}",
    explanation:
      "Diketahui dari soal:\n" +
      "• Skala peta 1:{SkalaPeta} berarti 1 cm pada peta mewakili {SkalaPeta} cm di dunia nyata.\n" +
      "Langkah 1: Jarak sebenarnya (dalam cm) = {GarisPeta} × {SkalaPeta}.\n" +
      "Langkah 2: Karena 100.000 cm = 1 km, maka jarak dalam km = ({GarisPeta}×{SkalaPeta}) ÷ 100000.\n" +
      "Jawaban akhirnya: {GarisPeta*SkalaPeta/100000} km.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 6,
    variabel: {
      KemejaAwal: "[2-7,1]",
      KainPerKemeja: "[4-8,1]",
      KemejaPesanan: "[8-15,1]"
    },
    question:
      "Seorang penjahit membutuhkan {KainPerKemeja*KemejaAwal} meter kain untuk membuat {KemejaAwal} kemeja. Jika dia mendapat pesanan {KemejaPesanan} kemeja dengan model yang sama, berapa meter kain yang diperlukan?",
    answer: "{KemejaPesanan*KainPerKemeja}",
    explanation:
      "Dari soal terlihat:\n" +
      "• Untuk {KemejaAwal} kemeja, total kain = {KainPerKemeja*KemejaAwal} meter.\n" +
      "Langkah 1: Kain per kemeja = {KainPerKemeja*KemejaAwal} ÷ {KemejaAwal} = {KainPerKemeja} meter.\n" +
      "Langkah 2: Untuk {KemejaPesanan} kemeja, total kain = {KainPerKemeja} × {KemejaPesanan} = {KemejaPesanan*KainPerKemeja} meter.\n" +
      "Jawaban akhirnya: {KemejaPesanan*KainPerKemeja} meter.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 7,
    variabel: {
      BukuPerJamPerMesin: "[30-50,2]",
      JamAwal: "[4-6,1]",
      MesinAwal: "[1-3,1]",
      MesinBaru: "[4-6,1]",
      JamBaru: "[8-12,1]"
    },
    question:
      "Sebuah percetakan dapat menghasilkan {BukuPerJamPerMesin*JamAwal*MesinAwal} buku dalam waktu {JamAwal} jam menggunakan {MesinAwal} mesin cetak. Jika digunakan {MesinBaru} mesin cetak dengan kapasitas sama selama {JamBaru} jam, berapa buku yang dapat dihasilkan?",
    answer: "{BukuPerJamPerMesin*JamBaru*MesinBaru}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Awalnya, {MesinAwal} mesin cetak menghasilkan {BukuPerJamPerMesin*JamAwal*MesinAwal} buku dalam {JamAwal} jam.\n" +
      "Langkah 1: Setiap mesin memiliki produktivitas {BukuPerJamPerMesin} buku/jam.\n" +
      "Langkah 2: Dengan {MesinBaru} mesin yang beroperasi selama {JamBaru} jam, total buku = {MesinBaru} × {JamBaru} × {BukuPerJamPerMesin} = {BukuPerJamPerMesin*JamBaru*MesinBaru} buku.\n" +
      "Jawaban akhirnya: {BukuPerJamPerMesin*JamBaru*MesinBaru} buku.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 8,
    variabel: {
      Panjang1: "[15-25,1]",
      Lebar1: "[8-12,1]",
      Balon1: "[80-120,5]",
      FaktorPanjang: "[1-3,1]",
      FaktorLebar: "[2-4,1]"
    },
    question:
      "Sebuah kolam renang berbentuk persegi panjang dengan ukuran {Panjang1} m × {Lebar1} m membutuhkan {Balon1} balon hias untuk dekorasi. Jika terdapat kolam serupa dengan ukuran {Panjang1*FaktorPanjang} m × {Lebar1*FaktorLebar} m, berapa balon hias yang dibutuhkan?",
    answer: "{Balon1*FaktorPanjang*FaktorLebar}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Kolam pertama berukuran {Panjang1} m × {Lebar1} m dan menggunakan {Balon1} balon.\n" +
      "Langkah 1: Luas kolam pertama = {Panjang1} × {Lebar1}.\n" +
      "Langkah 2: Kolam kedua berukuran {Panjang1*FaktorPanjang} m × {Lebar1*FaktorLebar} m, sehingga luasnya = {Panjang1}×{Lebar1}×{FaktorPanjang}×{FaktorLebar}.\n" +
      "Langkah 3: Karena jumlah balon berbanding lurus dengan luas, balon yang dibutuhkan = {Balon1} × {FaktorPanjang} × {FaktorLebar} = {Balon1*FaktorPanjang*FaktorLebar}.\n" +
      "Jawaban akhirnya: {Balon1*FaktorPanjang*FaktorLebar} balon.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 9,
    variabel: {
      BibitAwal: "[40-80,10]",
      AreaAwal: "[0.5-1.5,0.1]",
      FaktorArea: "[1.5-4,0.5]"
    },
    question:
      "Sebuah proyek penghijauan membutuhkan {BibitAwal} bibit pohon untuk area seluas {AreaAwal} hektar. Jika ingin memperluas area hijau menjadi {AreaAwal*FaktorArea} hektar, berapa bibit pohon yang diperlukan?",
    answer: "{BibitAwal*FaktorArea}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Untuk {AreaAwal} hektar, diperlukan {BibitAwal} bibit pohon.\n" +
      "Langkah 1: Rasio bibit per hektar = {BibitAwal} ÷ {AreaAwal}.\n" +
      "Langkah 2: Area yang ditargetkan = {AreaAwal} × {FaktorArea} hektar.\n" +
      "Langkah 3: Total bibit = (Rasio) × (Area target) = ({BibitAwal} ÷ {AreaAwal}) × ({AreaAwal}×{FaktorArea}) = {BibitAwal*FaktorArea}.\n" +
      "Jawaban akhirnya: {BibitAwal*FaktorArea} bibit.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 10,
    variabel: {
      TarifAwal: "[8000-12000,1000]",
      KmAwal: "[1-3,1]",
      TarifPerKm: "[2000-3000,500]",
      Jarak: "[10-20,1]"
    },
    question:
      "Sebuah perusahaan taksi menetapkan tarif Rp{TarifAwal} untuk {KmAwal} km pertama dan Rp{TarifPerKm} per km berikutnya. Berapa biaya untuk perjalanan sejauh {Jarak} km?",
    answer: "{TarifAwal + TarifPerKm*(Jarak - KmAwal)}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Tarif untuk {KmAwal} km pertama adalah Rp{TarifAwal}.\n" +
      "Langkah 1: Sisa jarak = {Jarak} - {KmAwal} km.\n" +
      "Langkah 2: Biaya untuk sisa jarak = {TarifPerKm} × ({Jarak} - {KmAwal}).\n" +
      "Langkah 3: Total biaya = {TarifAwal} + {TarifPerKm}×({Jarak} - {KmAwal}) = {TarifAwal + TarifPerKm*(Jarak - KmAwal)}.\n" +
      "Jawaban akhirnya: {TarifAwal + TarifPerKm*(Jarak - KmAwal)}.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 11,
    variabel: {
      HalamanAwal: "[15-25,1]",
      WaktuPerHalaman: "[10-40,5]",
      HalamanTarget: "[50-70,1]"
    },
    question:
      "Sebuah printer dapat mencetak {HalamanAwal} halaman dokumen dalam waktu {HalamanAwal*WaktuPerHalaman} detik. Jika terdapat dokumen urgent yang perlu dicetak {HalamanTarget} halaman, berapa detik waktu yang diperlukan printer tersebut?",
    answer: "{HalamanTarget*WaktuPerHalaman}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Printer mencetak {HalamanAwal} halaman dalam {HalamanAwal*WaktuPerHalaman} detik.\n" +
      "Langkah 1: Waktu per halaman = ({HalamanAwal*WaktuPerHalaman}) ÷ {HalamanAwal} = {WaktuPerHalaman} detik.\n" +
      "Langkah 2: Total waktu untuk {HalamanTarget} halaman = {WaktuPerHalaman} × {HalamanTarget} = {HalamanTarget*WaktuPerHalaman} detik.\n" +
      "Jawaban akhirnya: {HalamanTarget*WaktuPerHalaman} detik.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 12,
    variabel: {
      AirPerTanamanPerHari: "[120-160,10]",
      TanamanAwal: "[4-8,1]",
      HariAwal: "[5-8,1]",
      TanamanTarget: "[9-15,1]",
      HariTarget: "[8-12,1]"
    },
    question:
      "Sebuah sistem irigasi dapat mengairi {TanamanAwal} tanaman dengan total {AirPerTanamanPerHari*TanamanAwal*HariAwal} liter air selama {HariAwal} hari. Jika jumlah tanaman bertambah menjadi {TanamanTarget} dengan durasi penyiraman {HariTarget} hari, berapa total air yang dibutuhkan?",
    answer: "{AirPerTanamanPerHari*TanamanTarget*HariTarget}",
    explanation:
      "Diketahui:\n" +
      "• Sistem irigasi mengairi {TanamanAwal} tanaman dengan {AirPerTanamanPerHari*TanamanAwal*HariAwal} liter.\n" +
      "Langkah 1: Air per tanaman per hari = {AirPerTanamanPerHari} liter.\n" +
      "Langkah 2: Untuk {TanamanTarget} tanaman selama {HariTarget} hari, total air = {AirPerTanamanPerHari} × {TanamanTarget} × {HariTarget} = {AirPerTanamanPerHari*TanamanTarget*HariTarget} liter.\n" +
      "Jawaban akhirnya: {AirPerTanamanPerHari*TanamanTarget*HariTarget} liter.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 13,
    variabel: {
      FotoPerRol: "[30-40,1]",
      RolAwal: "[1-6,1]",
      RolTarget: "[15-25,1]"
    },
    question:
      "Sebuah studio fotografi mencetak {FotoPerRol*RolAwal} foto dari {RolAwal} rol film. Jika klien memesan {FotoPerRol*RolTarget} foto dengan ukuran sama, berapa rol film minimal yang harus disiapkan?",
    answer: "{RolTarget}",
    explanation:
      "Dari soal diketahui:\n" +
      "• Studio mencetak {FotoPerRol*RolAwal} foto dari {RolAwal} rol film.\n" +
      "Langkah 1: Setiap rol film menghasilkan {FotoPerRol} foto.\n" +
      "Langkah 2: Untuk mencapai total foto {FotoPerRol*RolTarget}, jumlah rol = (Total foto yang dipesan) ÷ {FotoPerRol} = {FotoPerRol*RolTarget} ÷ {FotoPerRol} = {RolTarget}.\n" +
      "Jawaban akhirnya: {RolTarget} rol film.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 14,
    variabel: {
      PoinPerPertandingan: "[20-30,1]",
      PertandinganAwal: "[2-4,1]",
      PertandinganTarget: "[8-12,1]"
    },
    question:
      "Pemain basket mencetak total {PertandinganAwal*PoinPerPertandingan} poin dalam {PertandinganAwal} pertandingan. Jika performa konsisten, berapa poin yang akan dicetak dalam {PertandinganTarget} pertandingan?",
    answer: "{PoinPerPertandingan*PertandinganTarget}",
    explanation:
      "Dari soal terlihat:\n" +
      "• Total poin dalam {PertandinganAwal} pertandingan = {PertandinganAwal*PoinPerPertandingan}.\n" +
      "Langkah 1: Rata-rata poin per pertandingan = ({PertandinganAwal*PoinPerPertandingan}) ÷ {PertandinganAwal} = {PoinPerPertandingan}.\n" +
      "Langkah 2: Total poin untuk {PertandinganTarget} pertandingan = {PoinPerPertandingan} × {PertandinganTarget} = {PoinPerPertandingan*PertandinganTarget}.\n" +
      "Jawaban akhirnya: {PoinPerPertandingan*PertandinganTarget} poin.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 15,
    variabel: {
      TiketAwal: "[400-600,50]",
      HargaAwal: "[40000-60000,5000]",
      KenaikanPersen: "[20-30,5]",
      PendapatanKali: "[2-4,1]"
    },
    question:
      "Sebuah konser menjual {TiketAwal} tiket dengan harga Rp{HargaAwal} per tiket. Jika panitia ingin mendapatkan pendapatan {PendapatanKali}× lipat dengan menaikkan harga tiket {KenaikanPersen}%, berapa jumlah tiket yang harus terjual?",
    answer: "{TiketAwal*PendapatanKali/(1+KenaikanPersen/100)}",
    explanation:
      "Pada soal terlihat:\n" +
      "• Total pendapatan awal = {TiketAwal} × {HargaAwal}.\n" +
      "Langkah 1: Harga baru per tiket setelah kenaikan = {HargaAwal} × (1 + {KenaikanPersen}/100).\n" +
      "Langkah 2: Agar pendapatan menjadi {PendapatanKali}× lipat, diperlukan pendapatan = {PendapatanKali} × ({TiketAwal} × {HargaAwal}).\n" +
      "Langkah 3: Jumlah tiket yang harus terjual = (Pendapatan target) ÷ (Harga baru per tiket) = ({TiketAwal}×{PendapatanKali}×{HargaAwal}) ÷ ({HargaAwal}×(1+{KenaikanPersen}/100)) = {TiketAwal*PendapatanKali/(1+KenaikanPersen/100)}.\n" +
      "Jawaban akhirnya: {TiketAwal*PendapatanKali/(1+KenaikanPersen/100)} tiket.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 16,
    variabel: {
      DayaAC: "[1000-3000,500]",
      JamHarian: "[6-12,1]",
      TarifListrik: "[1000-2000,500]",
      Hari: "[28-31,1]"
    },
    question:
      "Sebuah AC {DayaAC} Watt menyala {JamHarian} jam/hari. Jika tarif listrik Rp{TarifListrik}/kWh, berapa biaya listrik bulanan (selama {Hari} hari)?",
    answer: "{(DayaAC/1000)*JamHarian*Hari*TarifListrik}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Konsumsi AC per hari = ({DayaAC}/1000) kW × {JamHarian} jam = {(DayaAC/1000)*JamHarian} kWh.\n" +
      "Langkah 2: Total konsumsi selama {Hari} hari = {(DayaAC/1000)*JamHarian*Hari} kWh.\n" +
      "Langkah 3: Biaya listrik = {(DayaAC/1000)*JamHarian*Hari} × {TarifListrik} = {(DayaAC/1000)*JamHarian*Hari*TarifListrik}.\n" +
      "Jawaban akhirnya: {(DayaAC/1000)*JamHarian*Hari*TarifListrik} (satuan mata uang).",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 17,
    variabel: {
      JumlahPesanPaket: "[200-300,50]",
      HargaPaket: "[20000-30000,5000]",
      PesanPerJam: "[2-5,1]",
      Hari: "[28-31,1]"
    },
    question:
      "Paket layanan SMS berisi {JumlahPesanPaket} pesan dijual Rp{HargaPaket}. Jika Andi mengirim {PesanPerJam} pesan per jam selama 24 jam setiap hari selama {Hari} hari, berapa biaya bulanan yang dikeluarkan?",
    answer: "{PesanPerJam*24*Hari*(HargaPaket/JumlahPesanPaket)}",
    explanation:
      "Diketahui dari soal:\n" +
      "Langkah 1: Total SMS yang dikirim = {PesanPerJam} × 24 × {Hari}.\n" +
      "Langkah 2: Harga per SMS = {HargaPaket} ÷ {JumlahPesanPaket}.\n" +
      "Langkah 3: Total biaya = (Total SMS) × (Harga per SMS) = {PesanPerJam}×24×{Hari}×({HargaPaket}/{JumlahPesanPaket}) = {PesanPerJam*24*Hari*(HargaPaket/JumlahPesanPaket)}.\n" +
      "Jawaban akhirnya: {PesanPerJam*24*Hari*(HargaPaket/JumlahPesanPaket)}.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 18,
    variabel: {
      HargaBulanan: "[250000-350000,50000]",
      HargaTahunan: "[2500000-3500000,500000]"
    },
    question:
      "Membership gym menawarkan Rp{HargaBulanan}/bulan atau Rp{HargaTahunan}/tahun. Berapa persen penghematan jika memilih paket tahunan?",
    answer: "{((HargaBulanan*12 - HargaTahunan)/(HargaBulanan*12))*100}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Total biaya 12 bulan = {HargaBulanan} × 12 = {HargaBulanan*12}.\n" +
      "Langkah 2: Penghematan = {HargaBulanan*12} - {HargaTahunan}.\n" +
      "Langkah 3: Persen penghematan = (({HargaBulanan*12} - {HargaTahunan}) ÷ {HargaBulanan*12}) × 100 = {((HargaBulanan*12 - HargaTahunan)/(HargaBulanan*12))*100}%.\n" +
      "Jawaban akhirnya: {((HargaBulanan*12 - HargaTahunan)/(HargaBulanan*12))*100}%.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 19,
    variabel: {
      RasioSemen: "[1-3,1]",
      RasioPasir: "[3-5,1]",
      RasioKerikil: "[5-9,1]",
      FaktorVolumeBeton: "[10-15,1]"
    },
    question:
      "Campuran beton membutuhkan semen : pasir : kerikil = {RasioSemen} : {RasioPasir} : {RasioKerikil}. Jika diperlukan {(RasioSemen+RasioPasir+RasioKerikil)*FaktorVolumeBeton} m³ beton, berapa m³ pasir yang dibutuhkan?",
    answer: "{RasioPasir*FaktorVolumeBeton}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Total bagian = {RasioSemen} + {RasioPasir} + {RasioKerikil}.\n" +
      "Langkah 2: Total beton yang diperlukan = (Total bagian) × {FaktorVolumeBeton} m³.\n" +
      "Langkah 3: Bagian pasir = (RasioPasir ÷ Total bagian) × (Total beton).\n" +
      "Karena operasi tersebut menghasilkan {RasioPasir} × {FaktorVolumeBeton},\n" +
      "Jawaban akhirnya: {RasioPasir*FaktorVolumeBeton} m³ pasir.",
    category: "Perbandingan Senilai",
    level: "sulit"
  },
  {
    id: 20,
    variabel: {
      Kotak: "[6-10,1]",
      BeratPerKotak: "[2-5,0.5]",
      HariAwal: "[3-5,1]",
      FaktorHari: "[10-20,1]"
    },
    question:
      "Sebuah ekspedisi mengirim {Kotak} kotak seberat {BeratPerKotak} kg setiap {HariAwal} hari. Berapa ton barang yang dikirim dalam {HariAwal*FaktorHari} hari?",
    answer: "{FaktorHari*Kotak*BeratPerKotak/1000}",
    explanation:
      "Diketahui dari soal:\n" +
      "Langkah 1: Setiap siklus (setiap {HariAwal} hari), berat yang dikirim = {Kotak} × {BeratPerKotak} kg.\n" +
      "Langkah 2: Dalam {HariAwal*FaktorHari} hari, terdapat {FaktorHari} siklus.\n" +
      "Langkah 3: Total berat = {FaktorHari} × ({Kotak}×{BeratPerKotak}) kg.\n" +
      "Langkah 4: Konversi ke ton = (Total berat) ÷ 1000 = {FaktorHari*Kotak*BeratPerKotak/1000} ton.\n" +
      "Jawaban akhirnya: {FaktorHari*Kotak*BeratPerKotak/1000} ton.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 21,
    variabel: {
      Konsentrat: "[4-6,1]",
      AirPerCampuran: "[2-3,1]",
      KonsentratTersedia: "[300-350,25]"
    },
    question:
      "Resep disinfectant membutuhkan {Konsentrat} ml konsentrat untuk {AirPerCampuran} liter air. Berapa liter disinfectant yang dapat dibuat dengan {KonsentratTersedia} ml konsentrat?",
    answer: "{(KonsentratTersedia/Konsentrat)*AirPerCampuran}",
    explanation:
      "Dari soal terlihat:\n" +
      "Langkah 1: Rasio resep = {Konsentrat} ml per {AirPerCampuran} liter.\n" +
      "Langkah 2: Dengan {KonsentratTersedia} ml yang tersedia, jumlah paket = {KonsentratTersedia} ÷ {Konsentrat}.\n" +
      "Langkah 3: Total disinfectant = (Jumlah paket) × {AirPerCampuran} liter = ({KonsentratTersedia}/{Konsentrat}) × {AirPerCampuran}.\n" +
      "Jawaban akhirnya: {(KonsentratTersedia/Konsentrat)*AirPerCampuran} liter.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 22,
    variabel: {
      KartograferAwal: "[10-20,5]",
      PetaAwal: "[300-400,50]",
      HariAwal: "[15-25,5]",
      PetaTarget: "[400-500,50]",
      HariTarget: "[10-20,5]"
    },
    question:
      "Proyek pemetaan membutuhkan {KartograferAwal} kartografer untuk menyelesaikan {PetaAwal} peta dalam {HariAwal} hari. Berapa kartografer tambahan yang diperlukan untuk menyelesaikan {PetaTarget} peta dalam {HariTarget} hari?",
    answer: "{(PetaTarget*KartograferAwal*HariAwal)/(PetaAwal*HariTarget) - KartograferAwal}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Dalam proyek awal, {PetaAwal} peta diselesaikan oleh {KartograferAwal} kartografer dalam {HariAwal} hari.\n" +
      "Langkah 2: Jumlah kartografer yang diperlukan agar dapat menyelesaikan {PetaTarget} peta dalam {HariTarget} hari = ({PetaTarget}×{KartograferAwal}×{HariAwal}) ÷ ({PetaAwal}×{HariTarget}).\n" +
      "Langkah 3: Kartografer tambahan = (Jumlah yang diperlukan) - {KartograferAwal} = {(PetaTarget*KartograferAwal*HariAwal)/(PetaAwal*HariTarget) - KartograferAwal}.\n" +
      "Jawaban akhirnya: {(PetaTarget*KartograferAwal*HariAwal)/(PetaAwal*HariTarget) - KartograferAwal} orang.",
    category: "Perbandingan Senilai",
    level: "sulit"
  },
  {
    id: 23,
    variabel: {
      Kapasitas: "[3500-4500,500]",
      WaktuNormal: "[15-25,5]",
      FaktorGaming: "[2-4,1]"
    },
    question:
      "Baterai smartphone berkapasitas {Kapasitas} mAh dapat bertahan {WaktuNormal} jam. Jika digunakan terus menerus untuk gaming yang menguras {FaktorGaming}× lebih cepat, berapa jam ketahanan baterai?",
    answer: "{WaktuNormal/FaktorGaming}",
    explanation:
      "Diketahui:\n" +
      "Langkah 1: Pada kondisi normal, baterai bertahan {WaktuNormal} jam.\n" +
      "Langkah 2: Untuk gaming, konsumsi meningkat {FaktorGaming}×, sehingga ketahanan = {WaktuNormal} ÷ {FaktorGaming}.\n" +
      "Jawaban akhirnya: {WaktuNormal/FaktorGaming} jam.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 24,
    variabel: {
      TepungAwal: "[40-60,5]",
      RotiAwal: "[350-450,50]",
      RotiTarget: "[600-700,50]",
      Waste: "[10-20,5]"
    },
    question:
      "Pabrik roti menggunakan {TepungAwal} kg tepung untuk {RotiAwal} roti. Jika ingin membuat {RotiTarget} roti dengan resep yang sama tetapi {Waste}% tepung terbuang percuma, berapa kg tepung yang diperlukan?",
    answer: "{(RotiTarget*(TepungAwal/RotiAwal))/(1 - Waste/100)}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Tepung per roti = {TepungAwal} ÷ {RotiAwal} kg.\n" +
      "Langkah 2: Kebutuhan ideal untuk {RotiTarget} roti = ({TepungAwal} ÷ {RotiAwal}) × {RotiTarget}.\n" +
      "Langkah 3: Karena ada waste sebesar {Waste}%, tepung yang harus disiapkan = (Kebutuhan ideal) ÷ (1 - {Waste}/100) = ({RotiTarget}×({TepungAwal}/{RotiAwal})) ÷ (1 - {Waste}/100).\n" +
      "Jawaban akhirnya: {(RotiTarget*(TepungAwal/RotiAwal))/(1 - Waste/100)} kg.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 25,
    variabel: {
      BiayaPertama: "[200000-300000,50000]",
      KgPertama: "[4-6,1]",
      BiayaPerKg: "[40000-60000,5000]",
      KgTotal: "[10-15,1]"
    },
    question:
      "Biaya ekspor kerajinan Rp{BiayaPertama} untuk {KgPertama} kg pertama + Rp{BiayaPerKg}/kg berikutnya. Berapa biaya untuk mengirim {KgTotal} kg barang?",
    answer: "{BiayaPertama + BiayaPerKg*(KgTotal - KgPertama)}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Biaya untuk {KgPertama} kg pertama = {BiayaPertama}.\n" +
      "Langkah 2: Sisa berat = {KgTotal} - {KgPertama} kg, dengan biaya per kg = {BiayaPerKg}.\n" +
      "Langkah 3: Total biaya = {BiayaPertama} + {BiayaPerKg} × ({KgTotal} - {KgPertama}) = {BiayaPertama + BiayaPerKg*(KgTotal - KgPertama)}.\n" +
      "Jawaban akhirnya: {BiayaPertama + BiayaPerKg*(KgTotal - KgPertama)}.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 26,
    variabel: {
      RumahAwal: "[3-4,1]",
      HariAwal: "[15-20,1]",
      OrangAwal: "[8-12,1]",
      RumahTarget: "[5-6,1]",
      OrangTarget: "[12-18,1]"
    },
    question:
      "Tim relawan dapat membangun {RumahAwal} rumah dalam {HariAwal} hari dengan {OrangAwal} orang. Berapa hari diperlukan untuk membangun {RumahTarget} rumah dengan {OrangTarget} orang?",
    answer: "{(RumahTarget*HariAwal*OrangAwal)/(RumahAwal*OrangTarget)}",
    explanation:
      "Diketahui:\n" +
      "• Awalnya, {RumahAwal} rumah dibangun dalam {HariAwal} hari oleh {OrangAwal} orang.\n" +
      "Langkah 1: Produktivitas = {RumahAwal} rumah dalam {HariAwal} hari.\n" +
      "Langkah 2: Dengan {OrangTarget} orang, waktu yang dibutuhkan = ({RumahTarget} × {HariAwal} × {OrangAwal}) ÷ ({RumahAwal} × {OrangTarget}).\n" +
      "Jawaban akhirnya: {(RumahTarget*HariAwal*OrangAwal)/(RumahAwal*OrangTarget)} hari.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 27,
    variabel: {
      VolumeAwal: "[700-900,50]",
      PersenHilang: "[10-20,5]",
      Jam: "[3-5,1]"
    },
    question:
      "Larutan kimia menguap {PersenHilang}% volume per jam. Jika volume awal {VolumeAwal} ml, berapa ml yang tersisa setelah {Jam} jam?",
    answer: "{VolumeAwal*(1 - PersenHilang/100)^Jam}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Setiap jam, volume berkurang sehingga tersisa faktor = (1 - {PersenHilang}/100).\n" +
      "Langkah 2: Setelah {Jam} jam, volume tersisa = {VolumeAwal} × (1 - {PersenHilang}/100)^{Jam}.\n" +
      "Jawaban akhirnya: {VolumeAwal*(1 - PersenHilang/100)^Jam} ml.",
    category: "Perbandingan Senilai",
    level: "sedang"
  },
  {
    id: 28,
    variabel: {
      PenerjemahAwal: "[4-6,1]",
      HalamanAwal: "[180-220,10]",
      HariAwal: "[7-9,1]",
      HariTarget: "[4-6,1]"
    },
    question:
      "Proyek penerjemahan membutuhkan {PenerjemahAwal} penerjemah untuk menyelesaikan {HalamanAwal} halaman dalam {HariAwal} hari. Jika deadline diperpendek menjadi {HariTarget} hari, berapa penerjemah tambahan yang diperlukan?",
    answer: "{PenerjemahAwal*(HariAwal/HariTarget - 1)}",
    explanation:
      "Diketahui dari soal:\n" +
      "Langkah 1: Awalnya, {HalamanAwal} halaman diselesaikan oleh {PenerjemahAwal} penerjemah dalam {HariAwal} hari.\n" +
      "Langkah 2: Untuk menyelesaikan {HalamanAwal} halaman dalam {HariTarget} hari, jumlah penerjemah yang diperlukan = {PenerjemahAwal} × ({HariAwal} ÷ {HariTarget}).\n" +
      "Langkah 3: Penerjemah tambahan = (Jumlah yang diperlukan) - {PenerjemahAwal} = {PenerjemahAwal} × ({HariAwal}/{HariTarget} - 1).\n" +
      "Jawaban akhirnya: {PenerjemahAwal*(HariAwal/HariTarget - 1)} orang.",
    category: "Perbandingan Senilai",
    level: "sulit"
  },
  {
    id: 29,
    variabel: {
      PertumbuhanHarian: "[0.3-0.7,0.1]",
      TinggiAwal: "[8-12,1]",
      TinggiTarget: "[20-30,1]"
    },
    question:
      "Bibit tanaman tumbuh {PertumbuhanHarian} cm/hari dalam kondisi ideal. Jika tinggi awal {TinggiAwal} cm, berapa minggu diperlukan untuk mencapai tinggi {TinggiTarget} cm?",
    answer: "{(TinggiTarget - TinggiAwal)/(PertumbuhanHarian*7)}",
    explanation:
      "Diketahui dari soal:\n" +
      "Langkah 1: Pertumbuhan yang dibutuhkan = {TinggiTarget} - {TinggiAwal} cm.\n" +
      "Langkah 2: Waktu (hari) = ({TinggiTarget} - {TinggiAwal}) ÷ {PertumbuhanHarian}.\n" +
      "Langkah 3: Waktu (minggu) = (Waktu hari) ÷ 7 = ({TinggiTarget} - {TinggiAwal}) ÷ ({PertumbuhanHarian}×7).\n" +
      "Jawaban akhirnya: {(TinggiTarget - TinggiAwal)/(PertumbuhanHarian*7)} minggu.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },
  {
    id: 30,
    variabel: {
      BahanBakarPerJam: "[10000-14000,1000]",
      Kecepatan: "[800-1000,50]"
    },
    question:
      "Sebuah pesawat komersil membakar {BahanBakarPerJam} liter bahan bakar per jam. Jika kecepatan rata-rata {Kecepatan} km/jam, berapa liter bahan bakar yang digunakan per km?",
    answer: "{BahanBakarPerJam/Kecepatan}",
    explanation:
      "Dari soal diketahui:\n" +
      "Langkah 1: Dalam 1 jam, pesawat menempuh {Kecepatan} km dan membakar {BahanBakarPerJam} liter.\n" +
      "Langkah 2: Bahan bakar per km = {BahanBakarPerJam} ÷ {Kecepatan} = {BahanBakarPerJam/Kecepatan} liter/km.\n" +
      "Jawaban akhirnya: {BahanBakarPerJam/Kecepatan} liter per km.",
    category: "Perbandingan Senilai",
    level: "mudah"
  },// Soal Perbandingan Tidak Senilai (Inverse Proportionality)
  {
    id: 1,
    variabel: {
      WaktuAwal: "[2-5,1]",
      KecepatanAwal: "[60-100,10]",
      KecepatanBaru: "[80-140,10]"
    },
    question:
      "Sebuah mobil menempuh jarak tertentu dalam {WaktuAwal} jam dengan kecepatan {KecepatanAwal} km/jam. Jika kecepatan dinaikkan menjadi {KecepatanBaru} km/jam, berapa jam waktu yang diperlukan untuk menempuh jarak yang sama?",
    answer: "{WaktuAwal*KecepatanAwal/KecepatanBaru}",
    explanation:
      "Karena jarak yang ditempuh tetap, waktu tempuh berbanding terbalik dengan kecepatan. Jarak = {WaktuAwal} × {KecepatanAwal}, sehingga waktu baru = (Jarak) ÷ {KecepatanBaru} = {WaktuAwal} × ({KecepatanAwal}/{KecepatanBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },
  {
    id: 2,
    variabel: {
      PompaAwal: "[2-4,1]",
      WaktuAwal: "[6-10,1]",
      PompaBaru: "[5-8,1]"
    },
    question:
      "Jika {PompaAwal} pompa dapat mengisi sebuah kolam dalam {WaktuAwal} jam, berapa jam yang dibutuhkan jika digunakan {PompaBaru} pompa?",
    answer: "{WaktuAwal*PompaAwal/PompaBaru}",
    explanation:
      "Volume kolam tetap, sehingga waktu pengisian berbanding terbalik dengan jumlah pompa. Dengan penambahan pompa, waktu baru = {WaktuAwal} × ({PompaAwal}/{PompaBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },
  {
    id: 3,
    variabel: {
      PekerjaAwal: "[5-10,1]",
      HariAwal: "[10-15,1]",
      PekerjaBaru: "[11-20,1]"
    },
    question:
      "Sebuah proyek diselesaikan dalam {HariAwal} hari oleh {PekerjaAwal} pekerja. Jika jumlah pekerja ditingkatkan menjadi {PekerjaBaru}, berapa hari yang diperlukan untuk menyelesaikan proyek yang sama?",
    answer: "{HariAwal*PekerjaAwal/PekerjaBaru}",
    explanation:
      "Total upaya kerja (hari × pekerja) adalah konstan. Oleh karena itu, hari baru = {HariAwal} × ({PekerjaAwal}/{PekerjaBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },
  {
    id: 4,
    variabel: {
      MesinAwal: "[1-3,1]",
      WaktuAwal: "[30-60,5]",
      MesinBaru: "[4-6,1]"
    },
    question:
      "Sebuah percetakan menyelesaikan pencetakan dokumen dalam {WaktuAwal} menit menggunakan {MesinAwal} mesin. Jika percetakan menambah mesin menjadi {MesinBaru}, berapa menit yang diperlukan untuk menyelesaikan dokumen yang sama?",
    answer: "{WaktuAwal*MesinAwal/MesinBaru}",
    explanation:
      "Dengan bertambahnya jumlah mesin, waktu pencetakan berkurang secara berbanding terbalik. Waktu baru = {WaktuAwal} × ({MesinAwal}/{MesinBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  {
    id: 5,
    variabel: {
      MesinAwal: "[2-4,1]",
      JamAwal: "[8-12,1]",
      MesinBaru: "[5-7,1]"
    },
    question:
      "Sebuah pabrik dengan {MesinAwal} mesin memproduksi barang dalam {JamAwal} jam. Jika jumlah mesin ditambah menjadi {MesinBaru}, berapa jam yang dibutuhkan untuk memproduksi jumlah barang yang sama?",
    answer: "{JamAwal*MesinAwal/MesinBaru}",
    explanation:
      "Karena laju produksi meningkat seiring bertambahnya mesin, waktu yang diperlukan berkurang secara terbalik: waktu baru = {JamAwal} × ({MesinAwal}/{MesinBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  // {
  //   id: 6,
  //   variabel: {
  //     EfisiensiAwal: "[10-15,1]",
  //     BahanAwal: "[8-12,1]",
  //     EfisiensiBaru: "[16-20,1]"
  //   },
  //   question:
  //     "Sebuah mobil dengan efisiensi {EfisiensiAwal} km/liter membutuhkan {BahanAwal} liter bahan bakar untuk menempuh jarak tertentu. Berapa liter bahan bakar yang diperlukan oleh mobil dengan efisiensi {EfisiensiBaru} km/liter untuk jarak yang sama?",
  //   answer: "{BahanAwal*(EfisiensiAwal/EfisiensiBaru)}",
  //   explanation:
  //     "Jarak tetap, sehingga konsumsi bahan bakar berbanding terbalik dengan efisiensi. Dengan demikian, bahan bakar baru = {BahanAwal} × ({EfisiensiAwal}/{EfisiensiBaru}).",
  //   category: "Perbandingan Tidak Senilai",
  //   level: "sedang"
  // },
  {
    id: 7,
    variabel: {
      JamAwal: "[6-8,1]",
      HariAwal: "[10-15,1]",
      JamBaru: "[9-12,1]"
    },
    question:
      "Sebuah tim yang bekerja {JamAwal} jam per hari menyelesaikan tugas dalam {HariAwal} hari. Jika tim bekerja {JamBaru} jam per hari, berapa hari yang diperlukan untuk menyelesaikan tugas yang sama?",
    answer: "{HariAwal*JamAwal/JamBaru}",
    explanation:
      "Total jam kerja yang diperlukan tetap, sehingga hari baru = (Total jam kerja) ÷ {JamBaru} = ({HariAwal}×{JamAwal}) ÷ {JamBaru}.",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },
  {
    id: 8,
    variabel: {
      KecepatanAwal: "[10-20,1]",
      WaktuAwal: "[30-60,5]",
      KecepatanBaru: "[30-50,1]"
    },
    question:
      "Dengan kecepatan internet {KecepatanAwal} Mbps, sebuah file diunduh dalam {WaktuAwal} menit. Berapa menit yang diperlukan untuk mengunduh file yang sama jika kecepatan meningkat menjadi {KecepatanBaru} Mbps?",
    answer: "{WaktuAwal*KecepatanAwal/KecepatanBaru}",
    explanation:
      "Ukuran file tetap, sehingga waktu unduh berbanding terbalik dengan kecepatan. Waktu baru = {WaktuAwal} × ({KecepatanAwal}/{KecepatanBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },
  {
    id: 9,
    variabel: {
      PipaAwal: "[2-3,1]",
      WaktuAwal: "[30-45,5]",
      PipaBaru: "[4-6,1]"
    },
    question:
      "Dua pipa dapat mengisi sebuah kolam dalam {WaktuAwal} menit. Jika jumlah pipa ditambah menjadi {PipaBaru}, berapa menit waktu yang diperlukan untuk mengisi kolam?",
    answer: "{WaktuAwal*PipaAwal/PipaBaru}",
    explanation:
      "Waktu pengisian berbanding terbalik dengan jumlah pipa yang bekerja. Dengan demikian, waktu baru = {WaktuAwal} × ({PipaAwal}/{PipaBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  {
    id: 10,
    variabel: {
      OvenAwal: "[1-2,1]",
      WaktuAwal: "[5-10,1]",
      OvenBaru: "[3-4,1]"
    },
    question:
      "Sebuah bakery menggunakan {OvenAwal} oven untuk memanggang kue dan memerlukan {WaktuAwal} jam untuk menyelesaikan pesanan. Jika jumlah oven ditambah menjadi {OvenBaru}, berapa jam yang diperlukan untuk menyelesaikan pesanan yang sama?",
    answer: "{WaktuAwal*OvenAwal/OvenBaru}",
    explanation:
      "Karena jumlah oven dan waktu berbanding terbalik, penambahan oven akan mengurangi waktu yang dibutuhkan: waktu baru = {WaktuAwal} × ({OvenAwal}/{OvenBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "mudah"
  },

  // --- 10 Soal tambahan ---
  {
    id: 11,
    variabel: {
      WaktuAwal: "[10-15,1]",
      KecepatanAwal: "[10-15,1]",
      KecepatanBaru: "[5-9,1]"
    },
    question:
      "Seorang pelari menyelesaikan lomba 100 meter dalam {WaktuAwal} detik dengan kecepatan rata-rata {KecepatanAwal} m/s. Jika karena kelelahan kecepatan rata-ratanya turun menjadi {KecepatanBaru} m/s, berapa detik yang diperlukan untuk menyelesaikan lomba tersebut?",
    answer: "{WaktuAwal*KecepatanAwal/KecepatanBaru}",
    explanation:
      "Jarak lomba tetap (100 meter). Karena {WaktuAwal} = 100 ÷ {KecepatanAwal}, maka waktu baru = 100 ÷ {KecepatanBaru} = {WaktuAwal} × ({KecepatanAwal}/{KecepatanBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  {
    id: 12,
    variabel: {
      PelayanAwal: "[4-8,1]",
      WaktuAwal: "[20-30,1]",
      PelayanBaru: "[2-3,1]"
    },
    question:
      "Sebuah restoran dengan {PelayanAwal} pelayan mampu melayani sejumlah tamu dalam {WaktuAwal} menit. Jika hanya tersedia {PelayanBaru} pelayan, berapa menit yang diperlukan untuk melayani tamu yang sama?",
    answer: "{WaktuAwal*PelayanAwal/PelayanBaru}",
    explanation:
      "Jumlah tamu yang harus dilayani tetap, sehingga waktu yang diperlukan berbanding terbalik dengan jumlah pelayan. Waktu baru = {WaktuAwal} × ({PelayanAwal}/{PelayanBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  // {
  //   id: 13,
  //   variabel: {
  //     DebitAwal: "[100-200,10]",
  //     WaktuAwal: "[30-45,5]",
  //     DebitBaru: "[50-90,10]"
  //   },
  //   question:
  //     "Sebuah pompa mengalirkan air dengan debit {DebitAwal} liter/menit dan mengisi kolam dalam {WaktuAwal} menit. Jika debit pompa menurun menjadi {DebitBaru} liter/menit, berapa menit yang diperlukan untuk mengisi kolam yang sama?",
  //   answer: "{WaktuAwal*DebitAwal/DebitBaru}",
  //   explanation:
  //     "Volume kolam tetap, sehingga waktu pengisian berbanding terbalik dengan debit. Waktu baru = {WaktuAwal} × ({DebitAwal}/{DebitBaru}).",
  //   category: "Perbandingan Tidak Senilai",
  //   level: "sedang"
  // },
  {
    id: 14,
    variabel: {
      TenagaAwal: "[10-15,1]",
      HariAwal: "[20-30,1]",
      TenagaBaru: "[5-9,1]"
    },
    question:
      "Sebuah proyek konstruksi dapat diselesaikan dalam {HariAwal} hari oleh {TenagaAwal} pekerja. Jika hanya tersedia {TenagaBaru} pekerja, berapa hari yang diperlukan untuk menyelesaikan proyek tersebut?",
    answer: "{HariAwal*TenagaAwal/TenagaBaru}",
    explanation:
      "Total pekerjaan tetap, sehingga waktu yang dibutuhkan berbanding terbalik dengan jumlah pekerja. Hari baru = {HariAwal} × ({TenagaAwal}/{TenagaBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  // {
  //   id: 15,
  //   variabel: {
  //     HariAwal: "[5-10,1]",
  //     HalamanPerHariAwal: "[20-30,1]",
  //     HalamanPerHariBaru: "[10-15,1]"
  //   },
  //   question:
  //     "Seorang penulis menyelesaikan naskah dengan kecepatan {HalamanPerHariAwal} halaman per hari dalam waktu {HariAwal} hari. Jika produktivitas menurun menjadi {HalamanPerHariBaru} halaman per hari, berapa hari yang diperlukan untuk menyelesaikan naskah yang sama?",
  //   answer: "{HariAwal*HalamanPerHariAwal/HalamanPerHariBaru}",
  //   explanation:
  //     "Total halaman naskah = {HariAwal} × {HalamanPerHariAwal}. Dengan kecepatan baru, waktu yang dibutuhkan = (Total halaman) ÷ {HalamanPerHariBaru} = {HariAwal} × ({HalamanPerHariAwal}/{HalamanPerHariBaru}).",
  //   category: "Perbandingan Tidak Senilai",
  //   level: "sedang"
  // },
  {
    id: 16,
    variabel: {
      WaktuAwal: "[30-45,5]",
      ProdukAwal: "[100-150,10]",
      ProdukBaru: "[50-80,10]"
    },
    question:
      "Sebuah pabrik menghasilkan {ProdukAwal} unit produk dalam {WaktuAwal} menit. Jika performa mesin menurun sehingga produksi dalam waktu yang sama menjadi {ProdukBaru} unit, berapa menit yang dibutuhkan untuk menghasilkan {ProdukAwal} unit produk?",
    answer: "{WaktuAwal*ProdukAwal/ProdukBaru}",
    explanation:
      "Total produk yang harus dihasilkan tetap, sehingga waktu yang diperlukan berbanding terbalik dengan laju produksi. Waktu baru = {WaktuAwal} × ({ProdukAwal}/{ProdukBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sulit"
  },
  {
    id: 17,
    variabel: {
      WaktuAwal: "[3-5,1]",
      KecepatanAwal: "[80-100,5]",
      KecepatanBaru: "[40-70,5]"
    },
    question:
      "Sebuah kereta api menempuh rute dalam {WaktuAwal} jam dengan kecepatan {KecepatanAwal} km/jam. Jika karena faktor teknis kecepatan turun menjadi {KecepatanBaru} km/jam, berapa jam yang diperlukan untuk menyelesaikan rute tersebut?",
    answer: "{WaktuAwal*KecepatanAwal/KecepatanBaru}",
    explanation:
      "Jarak yang ditempuh tetap, sehingga waktu baru = {WaktuAwal} × ({KecepatanAwal}/{KecepatanBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sedang"
  },
  {
    id: 18,
    variabel: {
      DataAwal: "[1000-1500,100]",
      WaktuAwal: "[8-12,1]",
      MesinAwal: "[4-6,1]",
      MesinBaru: "[2-3,1]"
    },
    question:
      "Sebuah perusahaan memproses {DataAwal} data dalam {WaktuAwal} jam menggunakan {MesinAwal} komputer. Jika hanya tersedia {MesinBaru} komputer, berapa jam yang diperlukan untuk memproses data yang sama?",
    answer: "{WaktuAwal*MesinAwal/MesinBaru}",
    explanation:
      "Jumlah data yang harus diproses tetap, sehingga waktu yang dibutuhkan berbanding terbalik dengan jumlah komputer. Waktu baru = {WaktuAwal} × ({MesinAwal}/{MesinBaru}).",
    category: "Perbandingan Tidak Senilai",
    level: "sulit"
  },
  // {
  //   id: 19,
  //   variabel: {
  //     UnitAwal: "[500-600,50]",
  //     JamAwal: "[10-12,1]",
  //     ShiftAwal: "[3-4,1]",
  //     ShiftBaru: "[1-2,1]"
  //   },
  //   question:
  //     "Sebuah pabrik dengan {ShiftAwal} shift kerja memproduksi {UnitAwal} unit barang dalam {JamAwal} jam. Jika hanya {ShiftBaru} shift yang tersedia, berapa jam yang diperlukan untuk memproduksi jumlah barang yang sama?",
  //   answer: "{JamAwal*ShiftAwal/ShiftBaru}",
  //   explanation:
  //     "Jumlah barang yang diproduksi tetap, sehingga waktu yang diperlukan berbanding terbalik dengan jumlah shift. Waktu baru = {JamAwal} × ({ShiftAwal}/{ShiftBaru}).",
  //   category: "Perbandingan Tidak Senilai",
  //   level: "sulit"
  // },
  // {
  //   id: 20,
  //   variabel: {
  //     KonsumsiAwal: "[500-700,50]",
  //     JamAwal: "[2-3,1]",
  //     JamBaru: "[3-4,1]"
  //   },
  //   question:
  //     "Sebuah pesawat mengkonsumsi {KonsumsiAwal} liter bahan bakar per jam dan menyelesaikan penerbangan dalam {JamAwal} jam. Jika karena kondisi cuaca penerbangan memakan waktu {JamBaru} jam untuk jarak yang sama, berapa liter bahan bakar yang digunakan per jam?",
  //   answer: "{(KonsumsiAwal*JamAwal)/JamBaru}",
  //   explanation:
  //     "Total bahan bakar yang digunakan tetap = {KonsumsiAwal} × {JamAwal}. Jika waktu penerbangan menjadi {JamBaru} jam, maka konsumsi per jam baru = (Total bahan bakar) ÷ {JamBaru} = ({KonsumsiAwal}×{JamAwal}) ÷ {JamBaru}.",
  //   category: "Perbandingan Tidak Senilai",
  //   level: "sulit"
  // }
];