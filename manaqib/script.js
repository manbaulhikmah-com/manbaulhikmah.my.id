const readings = [
  "Bacaan Hadroh",
  "Surat Yasin",
  "Surat Al-Fath",
  "Surat Al-Waqi’ah",
  "Surat Al-Mulk",
  "Surat Asy-Syam",
  "Surat Al-Insyirah",
  "Surat Al-Qadr",
  "Surat Az-Zalzalah",
  "Surat An-Nasr",
  "Bacaan Tahlil Manaqib",
  "Doa Manaqib"
];

const cards = document.getElementById("cards");
const title = document.getElementById("title");
const content = document.getElementById("content");
const bacaanSection = document.getElementById("bacaan");

let currentIndex = 0;
let fontSize = 28;

readings.forEach((name, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "reading-card";
  card.innerHTML = `
    <span>${String(index + 1).padStart(2, "0")}</span>
    <strong>${name}</strong>
    <small>Klik untuk membaca</small>
  `;

  card.addEventListener("click", () => {
    currentIndex = index;
    showReading();
    bacaanSection.scrollIntoView({ behavior: "smooth" });
  });

  cards.appendChild(card);
});

function showReading() {
  title.textContent = readings[currentIndex];

  content.innerHTML = `
    <p class="placeholder">
      Tempat isi <strong>${readings[currentIndex]}</strong> akan ditambahkan di sini.
    </p>
  `;

  document.querySelectorAll(".reading-card").forEach((card, index) => {
    card.classList.toggle("selected", index === currentIndex);
  });

  document.getElementById("prev").disabled = currentIndex === 0;
  document.getElementById("next").disabled = currentIndex === readings.length - 1;
}

document.getElementById("back").addEventListener("click", () => {
  document.getElementById("daftar").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showReading();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < readings.length - 1) {
    currentIndex++;
    showReading();
  }
});

document.getElementById("minus").addEventListener("click", () => {
  fontSize = Math.max(18, fontSize - 2);
  content.style.fontSize = `${fontSize}px`;
});

document.getElementById("plus").addEventListener("click", () => {
  fontSize = Math.min(50, fontSize + 2);
  content.style.fontSize = `${fontSize}px`;
});

document.getElementById("night").addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
});

document.getElementById("menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

document.getElementById("year").textContent = new Date().getFullYear();

showReading();
