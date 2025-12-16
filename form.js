// FORM.JS
document.getElementById("formKontak").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const kategori = document.getElementById("kategori");
  const pesan = document.getElementById("pesan");
  // Validasi nama
  if (nama.value.trim() === "") {
    document.getElementById("errorNama").textContent = "Nama wajib diisi.";
    valid = false;
  } else document.getElementById("errorNama").textContent = "";
  // Validasi email
  const emailPattern = /^[^ ]+@gmail\.com$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("errorEmail").textContent = "Gunakan email @gmail.com";
    valid = false;
  } else document.getElementById("errorEmail").textContent = "";
  // Validasi kategori
  if (kategori.value === "") {
    document.getElementById("errorKategori").textContent = "Pilih kategori.";
    valid = false;
  } else document.getElementById("errorKategori").textContent = "";
  // Validasi pesan
  if (pesan.value.trim().length < 10) {
    document.getElementById("errorPesan").textContent = "Minimal 10 karakter.";
    valid = false;
  } else document.getElementById("errorPesan").textContent = "";
  // Hanya kalau VALID → kirim sinyal "formSukses"
  if (valid) {
    document.dispatchEvent(new Event("formSukses"));
    e.target.reset();
  }
});
