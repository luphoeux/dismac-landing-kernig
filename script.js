document.addEventListener('DOMContentLoaded', () => {
    // Back to Top Button Logic
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Placeholder for Scratch Card Logic (if you plan to add it later)
    // const canvas = document.getElementById('scratch-canvas');
    // ...
    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu && closeMenuBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
