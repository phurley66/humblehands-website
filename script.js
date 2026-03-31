const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a:not(.nav-booking)');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
