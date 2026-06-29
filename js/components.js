fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        iniciarMenuMovil();
    })
    .catch(error => console.error(error));

const contacto = document.getElementById('contacto');

if (contacto) {
    fetch('contacto-section.html')
        .then(response => response.text())
        .then(data => {
            contacto.innerHTML = data;
        });
}

const footer = document.getElementById('footer');

if (footer) {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
}

function iniciarMenuMovil() {
    const nav = document.querySelector('.nav');
    const menuButton = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelectorAll('.links a');

    if (!nav || !menuButton) return;

    const cerrarMenu = () => {
        nav.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú');
    };

    menuButton.addEventListener('click', () => {
        const estaAbierto = nav.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open', estaAbierto);
        menuButton.setAttribute('aria-expanded', estaAbierto ? 'true' : 'false');
        menuButton.setAttribute('aria-label', estaAbierto ? 'Cerrar menú' : 'Abrir menú');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 950) cerrarMenu();
    });
}
