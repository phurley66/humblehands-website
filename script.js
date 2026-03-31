// ── Active Nav Link on Scroll ──────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a:not(.nav-booking)');

window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ── Fade-In Animation on Scroll ────────────────
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(function (element) {
    observer.observe(element);
});
