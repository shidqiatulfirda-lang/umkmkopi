// === NOTIFIKASI PEMBUKA (tetap jalan) ===
alert("Selamat datang di UMKM Kopi Nusantara! Nikmati aroma dan cita rasa kopi lokal ☕");


// ========================
//  TESTIMONI (AMAN untuk semua halaman)
// ========================
const ulTestimoni = document.getElementById("listTestimoni");
if (ulTestimoni) {
  const testimoni = [
    "Kopinya wangi banget!",
    "Rasa strong, cocok buat begadang.",
    "Packaging rapi dan aman.",
    "Harga bersahabat, kualitas mantap!",
    "Fast respon & pengiriman cepat🔥"
  ];

  testimoni.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ulTestimoni.appendChild(li);
  });
}


// ========================
//  CEK USIA (AMAN untuk semua halaman)
// ========================
function cekUsia() {
  const usiaInput = document.getElementById("usiaInput");
  const hasilDiv = document.getElementById("hasilUsia");

  // Jika halaman tidak punya fitur usia → hentikan
  if (!usiaInput || !hasilDiv) return;

  let usia = usiaInput.value;
  let hasil = "";

  if (usia < 13) hasil = "Kategori: Anak-anak";
  else if (usia <= 17) hasil = "Kategori: Remaja";
  else if (usia <= 60) hasil = "Kategori: Dewasa";
  else hasil = "Kategori: Lansia";

  hasilDiv.textContent = hasil;
}


// ========================
//  HITUNG TOTAL BELANJA
// ========================
function hitungTotal() {
  const jumlah = document.getElementById("jumlahBeli");
  const hasilTotal = document.getElementById("hasilTotal");

  // Jika halaman tidak punya fitur belanja → hentikan
  if (!jumlah || !hasilTotal) return;

  let harga = 45000;
  let total = jumlah.value * harga;

  hasilTotal.textContent = "Total: Rp " + total.toLocaleString();
}


// ========================
//  LOGIKA UMUM WEBSITE (variabel, operasi dasar, console)
// ========================
const namaUMKM = "Kopi Nusantara";
console.log("Nama UMKM:", namaUMKM);

let jumlahProduk = 8;
jumlahProduk += 3;
console.log("Jumlah produk sekarang:", jumlahProduk);

let produkArabica = 5;
let produkRobusta = 6;
console.log("Total produk:", produkArabica + produkRobusta);
