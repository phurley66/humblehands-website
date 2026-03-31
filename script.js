// Get all sections with IDs and nav links (excluding booking button)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a:not(.nav-booking)');

// Listen for scroll events
window.addEventListener('scroll', function() {
    let current = '';

    // Check which section is currently in view
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update the active class on nav links
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
