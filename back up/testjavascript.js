document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.sec-content-div, .tile, .eye-grabber').forEach(section => {
    observer.observe(section);
});

const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    this.textContent = 'You Clicked Me!';
    this.style.backgroundColor = '#ff5c5c';
    this.style.transform = 'scale(1.1)';
});

let currentIndex = 0;
const images = document.querySelectorAll('.tile img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
