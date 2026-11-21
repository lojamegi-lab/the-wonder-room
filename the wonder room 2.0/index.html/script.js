
// THE WONDER ROOM 2.0

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('.navbar a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal sections when scrolling
    const sections = document.querySelectorAll('.section, .timeline');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Footer year
    const copyright = document.querySelector('.copyright');

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} THE WONDER ROOM. ALL RIGHTS RESERVED.`;
    }

});
