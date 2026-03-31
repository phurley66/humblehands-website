// Get all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Listen for scroll events
window.addEventListener('scroll', () => {
    let current = '';

    // Check which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update the active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
