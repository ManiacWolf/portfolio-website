// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top button functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.documentElement.style.setProperty('--bg-light', '#1f2937');
        document.documentElement.style.setProperty('--bg-white', '#374151');
        document.documentElement.style.setProperty('--text-dark', '#f9fafb');
        document.documentElement.style.setProperty('--text-light', '#d1d5db');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        document.body.style.backgroundColor = '#111827';
    } else {
        document.documentElement.style.setProperty('--bg-light', '#f9fafb');
        document.documentElement.style.setProperty('--bg-white', '#ffffff');
        document.documentElement.style.setProperty('--text-dark', '#1f2937');
        document.documentElement.style.setProperty('--text-light', '#6b7280');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.style.backgroundColor = '#ffffff';
    }
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing animation for hero section
const heroTitle = document.querySelector('.hero h1');
const heroTagline = document.querySelector('.hero .tagline');

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(heroTitle, 'Ankur Bansal', 150);
        setTimeout(() => {
            typeWriter(heroTagline, 'Full Stack & Backend Developer | Python | React | Node.js', 20);
        }, 1500);
    }, 500);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Interactive skill progress animation
const skillCategories = document.querySelectorAll('.skill-category');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
            
            // Add staggered animation for skill items
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.opacity = '1';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

skillCategories.forEach(category => {
    category.style.transform = 'translateY(30px)';
    category.style.opacity = '0';
    category.style.transition = 'all 0.6s ease';
    
    const skillItems = category.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.transform = 'scale(0.8)';
        item.style.opacity = '0';
        item.style.transition = 'all 0.3s ease';
    });
    
    skillObserver.observe(category);
});

// Add dynamic copyright year
const currentYear = new Date().getFullYear();
document.querySelector('.footer p').innerHTML = `© ${currentYear} Ankur Bansal. No rights reserved.`;