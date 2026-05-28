// === DATA AWAL ===
let totalKasToko = 500000; // Saldo awal laci kasir
let hargaBeras = 15000;
let jumlahBeli = 3; // Membeli 3 kg beras
let biayaAdmin = 2000;

// 1. OPERATOR ARITMATIKA (+ dan *)
// Menghitung total belanja: (Harga x Jumlah) + Biaya Admin
let totalBelanja = (hargaBeras * jumlahBeli) + biayaAdmin; 

// 2. OPERATOR PENUGASAN (+=)
// Uang kas toko bertambah karena ada pembayaran dari pembeli
totalKasToko += totalBelanja; 

// 3. OPERATOR PEMBANDING (>=)
// Toko punya promo: Jika belanja minimal Rp 45.000, dapat bonus sabun cuci piring
let syaratBonus = 45000;
let dapatBonus = totalBelanja >= syaratBonus;

// === MENAMPILKAN HASIL KE HALAMAN WEB ===
// Mengambil elemen HTML berdasarkan ID "output"
let outputDiv = document.getElementById("output");

// Memasukkan konten teks & HTML baru ke dalam elemen tersebut
outputDiv.innerHTML = `
    <p><strong>Harga Beras/kg:</strong> Rp ${hargaBeras}</p>
    <p><strong>Jumlah Beli:</strong> ${jumlahBeli} kg</p>
    <p><strong>Biaya Admin:</strong> Rp ${biayaAdmin}</p>
    <hr>
    <p><strong>Total Belanja:</strong> Rp ${totalBelanja}</p>
    <p><strong>Dapat Bonus Hadiah?</strong> ${dapatBonus ? "Ya, Selamat!" : "Tidak, Belum Cukup"}</p>
    <hr>
    <p><strong>Total Saldo Kas Toko Sekarang:</strong> Rp ${totalKasToko}</p>
`;