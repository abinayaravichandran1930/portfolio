// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /*==================== SHOW / HIDE MOBILE MENU ====================*/
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show'); // Add or remove 'show' class
            });
        }
    }
    showMenu('nav-toggle', 'nav-menu');

    /*==================== REMOVE MENU ON LINK CLICK ====================*/
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show');
        });
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 60, // Adjust offset if needed
                  sectionId = current.getAttribute('id'),
                  navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /*==================== SCROLL REVEAL ====================*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        // reset: true // uncomment if you want animations to repeat
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

});
