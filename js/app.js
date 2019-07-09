document.addEventListener('DOMContentLoaded', function () {
    // reveal
    const sr = ScrollReveal()
    sr.reveal('.hero__picture, .hero__title, .hero__description, .hero-btn', {
        delay: 150,
        duration: 1000,
        distance: '60px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'bottom',
        interval: 150
    })

    sr.reveal('.feature-item, .testimonial-item', {
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        interval: 100,
    })

    sr.reveal('.service-item--left', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'top',
        interval: 100,
    })

    sr.reveal('.service-item--right', {
        duration: 800,
        distance: '40px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'right',
        interval: 100,
    })

    /*sr.reveal('.contact', {
        duration: 500,
        distance: '40px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'top',
        interval: 100,
    })

    sr.reveal('.contact__title, .contact__description, .contact__form', {
        delay: 150,
        duration: 1000,
        distance: '60px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'bottom',
        interval: 150
    })*/

    // header
    document.querySelector('#header__trigger').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#header').classList.toggle('header--mobile')
    })
})