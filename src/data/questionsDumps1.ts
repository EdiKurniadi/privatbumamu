import { Question } from '../types';

export const sampleQuestions: Question[] = [
  {
    "id": 1,
    "variabel" : {
      "JumlahPensilDijual" : "[1-7,1]",
      "HargaPensil" : "[5000-12000,1000]",
      "JumlahPensilDibeliBudi" : "[8-15,1]"
    },
    "question": "Sebuah toko alat tulis menjual {JumlahPensilDijual} buah pensil dengan harga Rp{HargaPensil*JumlahPensilDijual}. Jika Budi ingin membeli {JumlahPensilDibeliBudi} pensil jenis yang sama, berapa total uang yang harus dibayarkan Budi?",
    "answer": "{JumlahPensilDibeliBudi*HargaPensil}",
    "explanation": "Misalkan x adalah total biaya yang harus dibayarkan oleh Budi. Karena {JumlahPensilDijual} buah pensil dijual seharga Rp{HargaPensil*JumlahPensilDijual}, maka harga per pensil adalah Rp({HargaPensil*JumlahPensilDijual}/{JumlahPensilDijual}) = Rp{HargaPensil}. Dengan demikian, untuk membeli {JumlahPensilDibeliBudi} pensil, total biayanya adalah x = {JumlahPensilDibeliBudi} × Rp{HargaPensil} = Rp{JumlahPensilDibeliBudi*HargaPensil}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 2,
    "variabel": {
      "BensinAwal": "[2-10,1]",
      "JarakPerBensin": "[30-100,10]",
      "BensinTarget": "[12-18,1]"
    },
    "question": "Sebuah mobil dapat menempuh jarak {BensinAwal*JarakPerBensin} km dengan menggunakan {BensinAwal} liter bensin. Jika mobil tersebut akan digunakan untuk perjalanan sejauh {BensinTarget*JarakPerBensin} km, berapa liter bensin yang diperlukan?",
    "answer": "{BensinTarget}",
    "explanation": "Misal x = liter bensin yang dibutuhkan.\nDiketahui: {JarakAwal} km memerlukan {BensinAwal} L, sehingga per km diperlukan {BensinAwal}/{JarakAwal} L.\nUntuk {JarakTarget} km, x = {JarakTarget} × ({BensinAwal}/{JarakAwal}) = {JarakTarget*BensinAwal/JarakAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 3,
    "variabel": {
      "KueAwal": "[15-25,1]",
      "TepungPerKue": "[150-250,10]",
      "KueTarget": "[40-60,1]"
    },
    "question": "Ibu membuat {KueAwal} kue bolu menggunakan {KueAwal*TepungPerKue} gram tepung terigu. Untuk acara keluarga besar, ibu ingin membuat {KueTarget} kue bolu dengan resep yang sama. Berapa gram tepung terigu yang diperlukan?",
    "answer": "{KueTarget*TepungPerKue}",
    "explanation": "Misal x = gram tepung yang dibutuhkan.\nDiketahui {KueAwal} kue memerlukan {TepungAwal} gram, sehingga per kue memerlukan {TepungAwal}/{KueAwal} gram.\nUntuk {KueTarget} kue, x = {KueTarget} × ({TepungAwal}/{KueAwal}) = {KueTarget*TepungAwal/KueAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 4,
    "variabel": {
      "PekerjaAwal": "[5-10,1]",
      "KursiPerPekerja": "[5-15,3]",
      "PekerjaBaru": "[12-20,1]"
    },
    "question": "Sebuah pabrik mebel memiliki {PekerjaAwal} pekerja yang dapat menghasilkan {PekerjaAwal*KursiPerPekerja} kursi dalam sehari. Jika pabrik tersebut menambah pekerja menjadi {PekerjaBaru} orang, berapa kursi yang dapat dihasilkan per hari?",
    "answer": "{PekerjaBaru*KursiPerPekerja}",
    "explanation": "Dengan produktivitas yang sama, kursi per hari berbanding lurus dengan jumlah pekerja.\nJadi, x = {KursiAwal} × ({PekerjaBaru}/{PekerjaAwal}) = {PekerjaBaru*KursiAwal/PekerjaAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 5,
    "variabel": {
      "GarisPeta": "[5-10,1]",
      "SkalaPeta": "[30000-70000,10000]"
    },
    "question": "Pada peta berskala 1:{SkalaPeta}, jarak antara dua kota ditunjukkan dengan garis sepanjang {GarisPeta} cm. Berapa kilometer jarak sebenarnya antara kedua kota tersebut?",
    "answer": "{GarisPeta*SkalaPeta/100000}",
    "explanation": "Jarak sebenarnya (dalam cm) = {GarisPeta} × {SkalaPeta}.\nKonversi: 100.000 cm = 1 km.\nSehingga, x = ({GarisPeta}×{SkalaPeta})/100000 = {GarisPeta*SkalaPeta/100000} km.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 6,
    "variabel": {
      "KemejaAwal": "[2-7,1]",
      "KainPerKemeja": "[4-8,1]",
      "KemejaPesanan": "[8-15,1]"
    },
    "question": "Seorang penjahit membutuhkan {KainPerKemeja*KemejaAwal} meter kain untuk membuat {KemejaAwal} kemeja. Jika dia mendapat pesanan {KemejaPesanan} kemeja dengan model yang sama, berapa meter kain yang diperlukan?",
    "answer": "{KemejaPesanan*KainPerKemeja}",
    "explanation": "Diketahui: {KemejaAwal} kemeja memerlukan {KainAwal} m kain, jadi per kemeja = {KainAwal}/{KemejaAwal} m.\nUntuk {KemejaPesanan} kemeja, x = {KemejaPesanan} × ({KainAwal}/{KemejaAwal}) = {KemejaPesanan*KainAwal/KemejaAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 7,
    "variabel": {
      "BukuPerJamPerMesin": "[30-50,2]",
      "JamAwal": "[4-6,1]",
      "MesinAwal": "[1-3,1]",
      "MesinBaru": "[4-6,1]",
      "JamBaru": "[8-12,1]"
    },
    "question": "Sebuah percetakan dapat menghasilkan {BukuPerJamPerMesin*JamAwal*MesinAwal} buku dalam waktu {JamAwal} jam menggunakan {MesinAwal} mesin cetak. Jika digunakan {MesinBaru} mesin cetak dengan kapasitas sama selama {JamBaru} jam, berapa buku yang dapat dihasilkan?",
    "answer": "{BukuPerJamPerMesin*JamBaru*MesinBaru}",
    "explanation": "Produktivitas awal = {BukuAwal} buku / ({MesinAwal}×{JamAwal}) jam.\nDengan {MesinBaru} mesin dan {JamBaru} jam, x = {MesinBaru}×{JamBaru}×({BukuAwal}/({MesinAwal}×{JamAwal})) = {MesinBaru*JamBaru*BukuAwal/(MesinAwal*JamAwal)} buku.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 8,
    "variabel": {
      "Panjang1": "[15-25,1]",
      "Lebar1": "[8-12,1]",
      "Balon1": "[80-120,5]",
      "FaktorPanjang": "[1-3,1]",
      "FaktorLebar": "[1-4,1]"
    },
    "question": "Sebuah kolam renang berbentuk persegi panjang dengan ukuran {Panjang1} m × {Lebar1} m membutuhkan {Balon1} balon hias untuk dekorasi. Jika terdapat kolam serupa dengan ukuran {Panjang1*FaktorPanjang} m × {Lebar1*FaktorLebar} m, berapa balon hias yang dibutuhkan?",
    "answer": "{Balon1*FaktorPanjang*FaktorLebar}",
    "explanation": "Luas kolam pertama = {Panjang1}×{Lebar1} m² dan dihias dengan {Balon1} balon.\nLuas kolam kedua = {Panjang2}×{Lebar2} m².\nJumlah balon yang diperlukan = {Balon1}×({Panjang2}×{Lebar2})/({Panjang1}×{Lebar1}) = {Balon1*(Panjang2*Lebar2)/(Panjang1*Lebar1)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 9,
    "variabel": {
      "BibitAwal": "[40-80,10]",
      "AreaAwal": "[0.5-1.5,0.1]",
      "FaktorArea": "[1.5-4,0.5]"
    },
    "question": "Sebuah proyek penghijauan membutuhkan {BibitAwal} bibit pohon untuk area seluas {AreaAwal} hektar. Jika ingin memperluas area hijau menjadi {AreaAwal*FaktorArea} hektar, berapa bibit pohon yang diperlukan?",
    "answer": "{BibitAwal*FaktorArea}",
    "explanation": "Rasio bibit per hektar = {BibitAwal}/{AreaAwal}.\nUntuk {AreaTarget} hektar, x = {BibitAwal}/{AreaAwal} × {AreaTarget} = {BibitAwal*AreaTarget/AreaAwal} bibit.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 10,
    "variabel": {
      "TarifAwal": "[8000-12000,1000]",
      "KmAwal": "[1-3,1]",
      "TarifPerKm": "[2000-3000,500]",
      "Jarak": "[10-20,1]"
    },
    "question": "Sebuah perusahaan taksi menetapkan tarif Rp{TarifAwal} untuk {KmAwal} km pertama dan Rp{TarifPerKm} per km berikutnya. Berapa biaya untuk perjalanan sejauh {Jarak} km?",
    "answer": "{TarifAwal + TarifPerKm*(Jarak - KmAwal)}",
    "explanation": "Biaya untuk {KmAwal} km pertama = Rp{TarifAwal}.\nSisa jarak = {Jarak} - {KmAwal} km dengan biaya Rp{TarifPerKm} per km.\nSehingga, total biaya = {TarifAwal} + {TarifPerKm}×({Jarak} - {KmAwal}) = {TarifAwal + TarifPerKm*(Jarak - KmAwal)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 11,
    "variabel": {
      "HalamanAwal": "[15-25,1]",
      "WaktuPerHalaman": "[10-40,5]",
      "HalamanTarget": "[50-70,1]"
    },
    "question": "Sebuah printer dapat mencetak {HalamanAwal} halaman dokumen dalam waktu {HalamanAwal*WaktuPerHalaman} detik. Jika terdapat dokumen urgent yang perlu dicetak {HalamanTarget} halaman, berapa detik waktu yang diperlukan printer tersebut?",
    "answer": "{HalamanTarget*WaktuPerHalaman}",
    "explanation": "Diketahui: {HalamanAwal} halaman dicetak dalam {WaktuAwal} detik, sehingga per halaman = {WaktuAwal}/{HalamanAwal} detik.\nUntuk {HalamanTarget} halaman, x = {HalamanTarget} × ({WaktuAwal}/{HalamanAwal}) = {HalamanTarget*WaktuAwal/HalamanAwal} detik.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 12,
    "variabel": {
      "AirPerTanamanPerHari": "[120-160,10]",
      "TanamanAwal": "[4-8,1]",
      "HariAwal": "[5-8,1]",
      "TanamanTarget": "[9-15,1]",
      "HariTarget": "[8-12,1]"
    },
    "question": "Sebuah sistem irigasi dapat mengairi {TanamanAwal} tanaman dengan total {AirPerTanamanPerHari*TanamanAwal*HariAwal} liter air selama {HariAwal} hari. Jika jumlah tanaman bertambah menjadi {TanamanTarget} dengan durasi penyiraman {HariTarget} hari, berapa total air yang dibutuhkan?",
    "answer": "{AirPerTanamanPerHari*TanamanTarget*HariTarget}",
    "explanation": "Total air awal = {AirAwal} liter untuk {TanamanAwal} tanaman selama {HariAwal} hari.\nUntuk {TanamanTarget} tanaman selama {HariTarget} hari, x = {AirAwal} × ({TanamanTarget}×{HariTarget})/({TanamanAwal}×{HariAwal}) = {AirAwal*(TanamanTarget*HariTarget)/(TanamanAwal*HariAwal)} liter.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 13,
    "variabel": {
      "FotoPerRol": "[30-40,1]",
      "RolAwal" : "[1-6,1]"
      "RolTarget": "[15-25,1]"
    },
    "question": "Sebuah studio fotografi mencetak {FotoPerRol*RolAwal} foto dari {RolAwal} rol film. Jika klien memesan {FotoPerRol*RolTarget} foto dengan ukuran sama, berapa rol film minimal yang harus disiapkan?",
    "answer": "{RolTarget}",
    "explanation": "Setiap rol menghasilkan {FotoPerRol} foto.\nJumlah rol yang diperlukan = {FotoPesanan} ÷ {FotoPerRol} = {FotoPesanan/FotoPerRol} rol.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 14,
    "variabel": {
      "PoinPerPertandingan": "[20-30,1]",
      "PertandinganAwal": "[2-4,1]",
      "PertandinganTarget": "[8-12,1]"
    },
    "question": "Pemain basket mencetak total {PertandinganAwal*PoinPerPertandingan} poin dalam {PertandinganAwal} pertandingan. Jika performa konsisten, berapa poin yang akan dicetak dalam {PertandinganTarget} pertandingan?",
    "answer": "{PoinPerPertandingan*PertandinganTarget}",
    "explanation": "Rata-rata poin per pertandingan = {PoinTotal}/{PertandinganAwal}.\nUntuk {PertandinganTarget} pertandingan, total poin = {PoinTotal}×({PertandinganTarget}/{PertandinganAwal}) = {PoinTotal*PertandinganTarget/PertandinganAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 15,
    "variabel": {
      "TiketAwal": "[400-600,50]",
      "HargaAwal": "[40000-60000,5000]",
      "KenaikanPersen": "[20-30,5]",
      "PendapatanKali": "[2-4,1]"
    },
    "question": "Sebuah konser menjual {TiketAwal} tiket dengan harga Rp{HargaAwal} per tiket. Jika panitia ingin mendapatkan pendapatan {PendapatanKali}× lipat dengan menaikkan harga tiket {KenaikanPersen}%, berapa jumlah tiket yang harus terjual?",
    "answer": "{TiketAwal*PendapatanKali/(1+KenaikanPersen/100)}",
    "explanation": "Harga baru per tiket = {HargaAwal} × (1 + {KenaikanPersen}/100).\nTarget pendapatan = {PendapatanKali} × ({TiketAwal} × {HargaAwal}).\nJumlah tiket yang harus terjual = Target pendapatan ÷ (Harga baru) = {TiketAwal*PendapatanKali/(1+KenaikanPersen/100)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 16,
    "variabel": {
      "DayaAC": "[1000-3000,500]",
      "JamHarian": "[6-12,1]",
      "TarifListrik": "[1000-2000,500]",
      "Hari": "[28-31,1]"
    },
    "question": "Sebuah AC {DayaAC} Watt menyala {JamHarian} jam/hari. Jika tarif listrik Rp{TarifListrik}/kWh, berapa biaya listrik bulanan (selama {Hari} hari)?",
    "answer": "{(DayaAC/1000)*JamHarian*Hari*TarifListrik}",
    "explanation": "Konsumsi per hari = ({DayaAC}/1000) kW × {JamHarian} jam = {(DayaAC/1000)*JamHarian} kWh.\nSelama {Hari} hari, total kWh = {(DayaAC/1000)*JamHarian*Hari}.\nBiaya = total kWh × Rp{TarifListrik} = {(DayaAC/1000)*JamHarian*Hari*TarifListrik}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 17,
    "variabel": {
      "JumlahPesanPaket": "[200-300,50]",
      "HargaPaket": "[20000-30000,5000]",
      "PesanPerJam": "[2-5,1]",
      "Hari": "[28-31,1]"
    },
    "question": "Paket layanan SMS berisi {JumlahPesanPaket} pesan dijual Rp{HargaPaket}. Jika Andi mengirim {PesanPerJam} pesan per jam selama 24 jam setiap hari selama {Hari} hari, berapa biaya bulanan yang dikeluarkan?",
    "answer": "{PesanPerJam*24*Hari*(HargaPaket/JumlahPesanPaket)}",
    "explanation": "Total SMS yang dikirim = {PesanPerJam} × 24 × {Hari}.\nHarga per SMS = {HargaPaket} ÷ {JumlahPesanPaket}.\nMaka, total biaya = (Total SMS) × (Harga per SMS) = {PesanPerJam*24*Hari*(HargaPaket/JumlahPesanPaket)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 18,
    "variabel": {
      "HargaBulanan": "[250000-350000,50000]",
      "HargaTahunan": "[2500000-3500000,500000]"
    },
    "question": "Membership gym menawarkan Rp{HargaBulanan}/bulan atau Rp{HargaTahunan}/tahun. Berapa persen penghematan jika memilih paket tahunan?",
    "answer": "{((HargaBulanan*12 - HargaTahunan)/(HargaBulanan*12))*100}",
    "explanation": "Harga 12 bulan = {HargaBulanan} × 12 = {HargaBulanan*12}.\nPenghematan = {HargaBulanan*12} - {HargaTahunan}.\nPersen penghematan = (Penghematan ÷ {HargaBulanan*12}) × 100 = {((HargaBulanan*12 - HargaTahunan)/(HargaBulanan*12))*100}%.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 19,
    "variabel": {
      "RasioSemen": "[1-3,1]",
      "RasioPasir": "[3-5,1]",
      "RasioKerikil": "[5-9,1]",
      "FaktorVolumeBeton": "[10-15,1]"
    },
    "question": "Campuran beton membutuhkan semen:pasir:kerikil = {RasioSemen}:{RasioPasir}:{RasioKerikil}. Jika diperlukan {(RasioSemen+RasioPasir+RasioKerikil)*VolumeBeton} m³ beton, berapa m³ pasir yang dibutuhkan?",
    "answer": "{RasioPasir*VolumeBeton}",
    "explanation": "Total rasio = {RasioSemen}+{RasioPasir}+{RasioKerikil} = 6.\nMaka, bagian pasir = {RasioPasir}/6.\nVolume pasir = {VolumeBeton} × ({RasioPasir}/6) = {(RasioPasir/(RasioSemen+RasioPasir+RasioKerikil))*VolumeBeton} m³.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 20,
    "variabel": {
      "Kotak": "[6-10,1]",
      "BeratPerKotak": "[2-5,0.5]",
      "HariAwal": "[3-5,1]",
      "FaktorHari": "[10-20,1]"
    },
    "question": "Sebuah ekspedisi mengirim {Kotak} kotak seberat {BeratPerKotak} kg setiap {HariAwal} hari. Berapa ton barang yang dikirim dalam {HariAwal*FaktorHari} hari?",
    "answer": "{FaktorHari*Kotak*BeratPerKotak/1000}",
    "explanation": "Setiap {IntervalHari} hari, berat terkirim = {Kotak} × {BeratPerKotak} kg.\nDalam {TotalHari} hari, jumlah siklus = {TotalHari}/{IntervalHari}.\nTotal berat = ({TotalHari}/{IntervalHari}) × ({Kotak}×{BeratPerKotak}) kg, yang dikonversi ke ton = nilai tersebut/1000.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 21,
    "variabel": {
      "Konsentrat": "[4-6,1]",
      "AirPerCampuran": "[2-3,1]",
      "KonsentratTersedia": "[300-350,25]"
    },
    "question": "Resep disinfectant membutuhkan {Konsentrat} ml konsentrat untuk {AirPerCampuran} liter air. Berapa liter disinfectant yang dapat dibuat dengan {KonsentratTersedia} ml konsentrat?",
    "answer": "{(KonsentratTersedia/Konsentrat)*AirPerCampuran}",
    "explanation": "Perbandingan resep: {Konsentrat} ml : {AirPerCampuran} L.\nJika tersedia {KonsentratTersedia} ml, maka volume disinfectant x = ({KonsentratTersedia}/{Konsentrat}) × {AirPerCampuran} = {(KonsentratTersedia/Konsentrat)*AirPerCampuran} liter.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 22,
    "variabel": {
      "KartograferAwal": "[10-20,5]",
      "PetaAwal": "[300-400,50]",
      "HariAwal": "[15-25,5]",
      "PetaTarget": "[400-500,50]",
      "HariTarget": "[10-20,5]"
    },
    "question": "Proyek pemetaan membutuhkan {KartograferAwal} kartografer untuk menyelesaikan {PetaAwal} peta dalam {HariAwal} hari. Berapa kartografer tambahan yang diperlukan untuk menyelesaikan {PetaTarget} peta dalam {HariTarget} hari?",
    "answer": "{(PetaTarget*KartograferAwal*HariAwal)/(PetaAwal*HariTarget) - KartograferAwal}",
    "explanation": "Produktivitas awal = {PetaAwal} peta / ({KartograferAwal}×{HariAwal}) per kartografer per hari.\nUntuk menyelesaikan {PetaTarget} peta dalam {HariTarget} hari, diperlukan kartografer = ({PetaTarget}×{KartograferAwal}×{HariAwal})/({PetaAwal}×{HariTarget}).\nKartografer tambahan = nilai tersebut - {KartograferAwal} = {(PetaTarget*KartograferAwal*HariAwal)/(PetaAwal*HariTarget) - KartograferAwal}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 23,
    "variabel": {
      "Kapasitas": "[3500-4500,500]",
      "WaktuNormal": "[15-25,5]",
      "FaktorGaming": "[2-4,1]"
    },
    "question": "Baterai smartphone berkapasitas {Kapasitas} mAh dapat bertahan {WaktuNormal} jam. Jika digunakan terus menerus untuk gaming yang menguras {FaktorGaming}× lebih cepat, berapa jam ketahanan baterai?",
    "answer": "{WaktuNormal/FaktorGaming}",
    "explanation": "Konsumsi normal = {Kapasitas}/{WaktuNormal} mAh per jam.\nSaat gaming, konsumsi = ({Kapasitas}/{WaktuNormal})×{FaktorGaming}.\nKetahanan baterai = {Kapasitas} ÷ (({Kapasitas}/{WaktuNormal})×{FaktorGaming}) = {WaktuNormal}/{FaktorGaming} jam.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 24,
    "variabel": {
      "TepungAwal": "[40-60,5]",
      "RotiAwal": "[350-450,50]",
      "RotiTarget": "[600-700,50]",
      "Waste": "[10-20,5]"
    },
    "question": "Pabrik roti menggunakan {TepungAwal} kg tepung untuk {RotiAwal} roti. Jika ingin membuat {RotiTarget} roti dengan resep yang sama tetapi {Waste}% tepung terbuang percuma, berapa kg tepung yang diperlukan?",
    "answer": "{(RotiTarget*(TepungAwal/RotiAwal))/(1 - Waste/100)}",
    "explanation": "Kebutuhan tepung per roti = {TepungAwal}/{RotiAwal} kg.\nUntuk {RotiTarget} roti, kebutuhan ideal = {RotiTarget}×({TepungAwal}/{RotiAwal}).\nMengingat waste {Waste}%, jumlah tepung yang harus disediakan = (Kebutuhan ideal)/(1 - {Waste}/100) = {(RotiTarget*(TepungAwal/RotiAwal))/(1 - Waste/100)} kg.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 25,
    "variabel": {
      "BiayaPertama": "[200000-300000,50000]",
      "KgPertama": "[4-6,1]",
      "BiayaPerKg": "[40000-60000,5000]",
      "KgTotal": "[10-15,1]"
    },
    "question": "Biaya ekspor kerajinan Rp{BiayaPertama} untuk {KgPertama} kg pertama + Rp{BiayaPerKg}/kg berikutnya. Berapa biaya untuk mengirim {KgTotal} kg barang?",
    "answer": "{BiayaPertama + BiayaPerKg*(KgTotal - KgPertama)}",
    "explanation": "Untuk {KgPertama} kg pertama, biaya = Rp{BiayaPertama}.\nSisa berat = {KgTotal} - {KgPertama} kg dengan biaya Rp{BiayaPerKg} per kg.\nTotal biaya = {BiayaPertama} + {BiayaPerKg}×({KgTotal} - {KgPertama}) = {BiayaPertama + BiayaPerKg*(KgTotal - KgPertama)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 26,
    "variabel": {
      "RumahAwal": "[3-4,1]",
      "HariAwal": "[15-20,1]",
      "OrangAwal": "[8-12,1]",
      "RumahTarget": "[5-6,1]",
      "OrangTarget": "[12-18,1]"
    },
    "question": "Tim relawan dapat membangun {RumahAwal} rumah dalam {HariAwal} hari dengan {OrangAwal} orang. Berapa hari diperlukan untuk membangun {RumahTarget} rumah dengan {OrangTarget} orang?",
    "answer": "{(RumahTarget*HariAwal*OrangAwal)/(RumahAwal*OrangTarget)}",
    "explanation": "Produktivitas awal = {RumahAwal} rumah dalam {HariAwal} hari oleh {OrangAwal} orang.\nUntuk {RumahTarget} rumah dengan {OrangTarget} orang, waktu yang dibutuhkan x = ({RumahTarget}×{HariAwal}×{OrangAwal})/({RumahAwal}×{OrangTarget}) = {(RumahTarget*HariAwal*OrangAwal)/(RumahAwal*OrangTarget)} hari.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 27,
    "variabel": {
      "VolumeAwal": "[700-900,50]",
      "PersenHilang": "[10-20,5]",
      "Jam": "[3-5,1]"
    },
    "question": "Larutan kimia menguap {PersenHilang}% volume per jam. Jika volume awal {VolumeAwal} ml, berapa ml yang tersisa setelah {Jam} jam?",
    "answer": "{VolumeAwal*(1 - PersenHilang/100)^Jam}",
    "explanation": "Setiap jam, tersisa (100 - {PersenHilang})% dari volume sebelumnya.\nSetelah {Jam} jam, volume akhir = {VolumeAwal} × (1 - {PersenHilang}/100)^{Jam} = {VolumeAwal*(1 - PersenHilang/100)^Jam} ml.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 28,
    "variabel": {
      "PenerjemahAwal": "[4-6,1]",
      "HalamanAwal": "[180-220,10]",
      "HariAwal": "[7-9,1]",
      "HariTarget": "[4-6,1]"
    },
    "question": "Proyek penerjemahan membutuhkan {PenerjemahAwal} penerjemah untuk menyelesaikan {HalamanAwal} halaman dalam {HariAwal} hari. Jika deadline diperpendek menjadi {HariTarget} hari, berapa penerjemah tambahan yang diperlukan?",
    "answer": "{PenerjemahAwal*(HariAwal/HariTarget - 1)}",
    "explanation": "Asumsikan produktivitas tetap, maka jumlah penerjemah yang diperlukan = {PenerjemahAwal}×({HariAwal}/{HariTarget}).\nPenerjemah tambahan = ({PenerjemahAwal}×({HariAwal}/{HariTarget})) - {PenerjemahAwal} = {PenerjemahAwal*(HariAwal/HariTarget - 1)}.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 29,
    "variabel": {
      "PertumbuhanHarian": "[0.3-0.7,0.1]",
      "TinggiAwal": "[8-12,1]",
      "TinggiTarget": "[20-30,1]"
    },
    "question": "Bibit tanaman tumbuh {PertumbuhanHarian} cm/hari dalam kondisi ideal. Jika tinggi awal {TinggiAwal} cm, berapa minggu diperlukan untuk mencapai tinggi {TinggiTarget} cm?",
    "answer": "{(TinggiTarget - TinggiAwal)/(PertumbuhanHarian*7)}",
    "explanation": "Pertumbuhan yang dibutuhkan = {TinggiTarget} - {TinggiAwal} cm.\nDengan pertumbuhan {PertumbuhanHarian} cm/hari, waktu dalam hari = ({TinggiTarget} - {TinggiAwal})/{PertumbuhanHarian}.\nDalam minggu, x = (({TinggiTarget} - {TinggiAwal})/{PertumbuhanHarian})/7 = {(TinggiTarget - TinggiAwal)/(PertumbuhanHarian*7)} minggu.",
    "category": "Perbandingan Senilai"
  },
  {
    "id": 30,
    "variabel": {
      "BahanBakarPerJam": "[10000-14000,1000]",
      "Kecepatan": "[800-1000,50]"
    },
    "question": "Sebuah pesawat komersil membakar {BahanBakarPerJam} liter bahan bakar per jam. Jika kecepatan rata-rata {Kecepatan} km/jam, berapa liter bahan bakar yang digunakan per km?",
    "answer": "{BahanBakarPerJam/Kecepatan}",
    "explanation": "Dalam 1 jam, bahan bakar yang terbakar = {BahanBakarPerJam} liter untuk menempuh {Kecepatan} km.\nMaka, bahan bakar per km = {BahanBakarPerJam}/{Kecepatan} = {BahanBakarPerJam/Kecepatan} liter/km.",
    "category": "Perbandingan Senilai"
  }

  // (Sisanya disesuaikan dengan pola yang sama)
]


