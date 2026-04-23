document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const icon = mobileBtn.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Header scroll shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.classList.replace('py-4', 'py-2');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.replace('py-2', 'py-4');
        }
    });

    // Mobile menu toggle
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    };

    mobileBtn.addEventListener('click', toggleMenu);

    // Close menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Hero Carousel
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = heroSlides.length;

        const nextSlide = () => {
            heroSlides[currentSlide].classList.replace('opacity-100', 'opacity-0');
            currentSlide = (currentSlide + 1) % totalSlides;
            heroSlides[currentSlide].classList.replace('opacity-0', 'opacity-100');
        };

        setInterval(nextSlide, 6000); // Muda a cada 6 segundos
    }

    // Simple form submission feedback
    const contactForm = document.getElementById('contact_form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! (Simulação)');
            contactForm.reset();
        });
    }
});