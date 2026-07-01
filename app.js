// 1. Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#343a40" },
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": { "enable": true, "speed": 1.5, "opacity_min": 0.2, "sync": false }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": { "enable": true, "speed": 10, "size_min": 0.1, "sync": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 130,
            "color": "#343a40",
            "opacity": 0.5,
            "width": 1.2
        },
        "move": {
            "enable": true,
            "speed": 2.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": { "distance": 120, "duration": 0.4 },
            "push": { "particles_nb": 6 }
        }
    },
    "retina_detect": true
});

// 2. Universal Scroll Observer for ALL Cards
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

// Select both skill cards and project cards
const allCards = document.querySelectorAll('.skill-card, .project-card');

allCards.forEach((card, index) => {
    // Add staggered delay so they pop up one after the other
    card.style.transitionDelay = `${(index % 3) * 150}ms`; 
    scrollObserver.observe(card);

    // Remove delay after animation so hover states are instant
    card.addEventListener('transitionend', () => {
        card.style.transitionDelay = '0ms';
    });
});