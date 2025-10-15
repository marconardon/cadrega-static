document.addEventListener('DOMContentLoaded', () => {

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', e => {
            e.preventDefault();
            lightbox.style.display = 'flex';
            lightboxImg.src = trigger.href;
        });
    });

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    if(lightbox) {
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Mobile navigation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    if (mobileNavToggle && mainNav && closeMenuBtn) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

});