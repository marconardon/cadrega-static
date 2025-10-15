document.addEventListener('DOMContentLoaded', () => {

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && lightboxTriggers.length > 0 && closeBtn) {
        lightboxTriggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                e.preventDefault();
                const imgSrc = trigger.getAttribute('href');
                lightboxImg.setAttribute('src', imgSrc);
                lightbox.style.display = 'flex';
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
            lightboxImg.setAttribute('src', ''); // Clear src for performance
        }

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', e => {
            // Close lightbox if the background is clicked, but not the image itself
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (navToggle && mainNav) {
        // This is a basic toggle. A real implementation would be more complex,
        // creating a proper mobile menu overlay.
        navToggle.addEventListener('click', () => {
            alert('Menu mobile da implementare!');
        });
    }
});