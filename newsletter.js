const form = document.getElementById("formKontak");
const notif = document.getElementById("notifikasi");
const checkbox = document.getElementById("langganan");

// 🔔 Notifikasi ketika form sukses (Keaktifan 13)
form.addEventListener("submit", () => {
  if (form.classList.contains("success")) {
    notif.textContent = "📨 Pesan Anda berhasil terkirim — Terima kasih!";
    notif.style.display = "block";

    setTimeout(() => {
      notif.style.display = "none";
    }, 3500);
  }
});

// 💌 Jika newsletter dicentang, tampilkan pemberitahuan
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    notif.textContent = "💌 Terima kasih telah berlangganan newsletter!";
    notif.style.display = "block";

    setTimeout(() => {
      notif.style.display = "none";
    }, 3500);
  }
});
