let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Mostrar navbar solo cuando esté muy cerca del top
    if (currentScrollY < 10) {
        navbar.classList.remove('navbar-hidden');
    }
    // Ocultar cuando bajes más de 100px
    else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        navbar.classList.add('navbar-hidden');
    }

    lastScrollY = currentScrollY;
});




const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll suave al top
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const progressCircles = document.querySelectorAll('.progress-circle');

    // Función para animar los círculos cuando son visibles
    function animateCircles() {
        progressCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const circumference = 2 * Math.PI * 70; // Radio del círculo
            const offset = circumference - (percent / 100) * circumference;

            circle.style.strokeDashoffset = offset;
        });
    }

    // Iniciar animación cuando la página carga
    animateCircles();

    // Opcional: Animar cuando se hace scroll hasta la sección
    // (descomenta si quieres este efecto)
    /*
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCircles();
            }
        });
    });
    
    observer.observe(document.querySelector('.skills-section'));
    */
});