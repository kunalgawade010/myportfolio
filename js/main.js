// DOM Elements
const header = document.getElementById('header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.querySelector('.back-to-top');
const timelineItems = document.querySelectorAll('.timeline-item');
const formGroups = document.querySelectorAll('.form-group');
const contactForm = document.getElementById('contact-form');

// Header scroll effect
function toggleHeaderBackground() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Back to top button visibility
function toggleBackToTopButton() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Mobile navigation toggle
function toggleNavigation() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close navigation when a link is clicked
function closeNavOnClick() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// Animate elements when they come into view
function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    // Timeline items
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < triggerBottom) {
            item.classList.add('visible');
        }
    });
    
    // Form groups
    formGroups.forEach(group => {
        const groupTop = group.getBoundingClientRect().top;
        
        if (groupTop < triggerBottom) {
            group.classList.add('visible');
        }
    });
}

// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop - 80;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    closeNavOnClick();
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // In a real scenario, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Log the form data for demonstration
    console.log('Form submission:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset the form
    contactForm.reset();
}

// Event Listeners
window.addEventListener('scroll', toggleHeaderBackground);
window.addEventListener('scroll', toggleBackToTopButton);
window.addEventListener('scroll', animateOnScroll);
navToggle.addEventListener('click', toggleNavigation);
navLinks.forEach(link => link.addEventListener('click', smoothScroll));

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Initialize animations
animateOnScroll();

// Preload background images
function preloadImages() {
    const images = [
        // Add any background images that need preloading here
    ];
    
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    toggleHeaderBackground();
    toggleBackToTopButton();
});