const openEmail = () => {
    window.open(
        `https://testers.personalpay.io/`,
        "_blank"
    );
}

const isMobile = () => window.innerWidth <= 900

const messagesInit = () => {
    if (!isMobile()) {
        const container = document.querySelector('.container');
        const image = document.createElement('img');
        image.src = './assets/shape.png';
        image.alt = 'fondo';
        image.classList.add('container-image');
        container.appendChild(image);
    }
}

messagesInit();