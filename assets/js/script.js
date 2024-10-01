// Smooth scroll functionality
const links = document.querySelectorAll('.nav-link');
for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to reveal tiles with fade-in effect on scroll
const tiles = document.querySelectorAll('.tile');

function revealTiles() {
    const windowHeight = window.innerHeight;
    tiles.forEach(tile => {
        const tileTop = tile.getBoundingClientRect().top;
        if (tileTop < windowHeight - 100) {
            tile.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealTiles);

// Propose Functionality
const loveButton = document.getElementById('loveButton');
const proposalMessage = document.getElementById('proposalMessage');
const loveAudio = document.getElementById('loveAudio');

function propose() {
    proposalMessage.textContent = "I Love You, Mercy 💖 No Amount Of Words Can Express How I Feel For You. Will You Make Me The Happiest Man On Earth And Be My Girlfriend?";
    proposalMessage.classList.add('fade-in'); // Add fade-in class for visibility
    loveButton.disabled = true; // Disable the button
    loveButton.style.opacity = '0.5'; // Reduce button opacity
    loveAudio.play();
}

// Loading screen hide after window load
window.onload = function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
};

// Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("background-slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();
