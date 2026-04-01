// ── Wait for page to fully load ────────────────
document.addEventListener('DOMContentLoaded', function () {

    // ── Active Nav Link on Scroll ──────────────
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

    // ── Fade-In Animation on Scroll ────────────
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function (element) {
        observer.observe(element);
    });

    // ── Trigger fade-in for elements already in view on page load ──
    setTimeout(function () {
        fadeElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }, 100);
});
