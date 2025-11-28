// Countdown to November 29th
function updateCountdown() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 10, 29); // November is 10 (0-indexed)
    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = birthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('countdownOutput').textContent = `Days until SONU's birthday: ${diffDays}`;
}
updateCountdown();
setInterval(updateCountdown, 86400000); // Update daily

// Play music
document.getElementById('playMusicBtn').addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    music.play();
});

// Generate wish
document.getElementById('generateWishBtn').addEventListener('click', function() {
    const wishes = [
        "Happy Birthday SONU! May your day be as awesome as you are! 🎉",
        "SONU, wishing you a year full of joy, laughter, and cake! 🎂",
        "Cheers to you, SONU! Here's to new adventures on November 29th! 🥳",
        "Happy Birthday SONU! You're the best brother ever! 🎈",
        "To SONU: May all your wishes come true today and always! 🍰"
    ];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wishOutput').textContent = randomWish;
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}
document.getElementById('nextBtn').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
document.getElementById('prevBtn').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000); // Auto-slide every 3 seconds