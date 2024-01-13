const toggleMenu = (toggleId, navId) => {
    const toggleButton = document.getElementById(toggleId);
    const navigation = document.getElementById(navId);

    if (toggleButton && navigation) {
        toggleButton.addEventListener('click', () => {
            navigation.classList.toggle('show');
        });
    }
};

toggleMenu('nav-toggle', 'nav-menu');

const navLinks = document.querySelectorAll('.nav__link');

function handleLinkAction() {
    const navigationMenu = document.getElementById('nav-menu');
    navigationMenu.classList.remove('show');
}

navLinks.forEach(link => link.addEventListener('click', handleLinkAction));

const sections = document.querySelectorAll('section[id]');

const activateScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 58;
        const sectionId = currentSection.getAttribute('id');
        const sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', activateScroll);

const scrollRevealConfig = {
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
};

const scrollReveal = ScrollReveal(scrollRevealConfig);

scrollReveal.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
scrollReveal.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
scrollReveal.reveal('.home__social-icon', { interval: 200 });
scrollReveal.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
