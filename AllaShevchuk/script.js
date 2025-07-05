document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    const body = document.body;

    const talkButton = document.querySelector('.hero-section .btn-primary');
    if (talkButton) {
        talkButton.addEventListener('click', function() {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            body.classList.toggle('no-scroll');
            hamburgerBtn.classList.toggle('open');
        });

        const navLinks = mainNav.querySelectorAll('.nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('open');
                body.classList.remove('no-scroll');
                hamburgerBtn.classList.remove('open');
            });
        });
    }
});