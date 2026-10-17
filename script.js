// 1. Fitur Tombol Ubah Teks
const changeTextBtn = document.querySelector('#change-text-btn');
const bioText = document.querySelector('#bio-text');

const alternateTexts = [
    "Hai lagi! Masih tahap belajar nih, jadi mohon maklum ya kalau kodenya masih sederhana. Yang penting tetep semangat ngoding! ✨",
    "Bikin web ternyata seru juga ya walau kadang bikin pusing pas nyari error-nya. Tapi seru banget pas halamannya akhirnya bisa jalan! 💻",
    "Makasih udah mampir ke profil aku ya! Semoga tugas kuliah/sekolah web-ku ini lancar dan dapet nilai bagus. Aamiin! 🙌"
];

let textIndex = 0;

changeTextBtn.addEventListener('click', () => {
    textIndex = (textIndex + 1) % alternateTexts.length;
    bioText.textContent = alternateTexts[textIndex];
});

// 2. Fitur Tombol Ganti Tema (Terang/Gelap)
const themeToggleBtn = document.querySelector('#theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Tema Terang';
    } else {
        themeToggleBtn.textContent = 'Ganti Tema';
    }
});