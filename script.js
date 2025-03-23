// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
const form = document.querySelector('.contact-form form');
const nameInput = document.querySelector('.contact-form input[type="text"]');
const emailInput = document.querySelector('.contact-form input[type="email"]');
const messageTextarea = document.querySelector('.contact-form textarea');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        return;
    }

    if (messageTextarea.value.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Submit the form or handle it via AJAX
    console.log('Form submitted successfully!');
    // Here you can add AJAX code to send the form data to your server
});

// Responsive navigation (if needed)
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle'); // Add a button with class nav-toggle

if (navToggle) {
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Optional: Add buttons for manual navigation
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 1000);