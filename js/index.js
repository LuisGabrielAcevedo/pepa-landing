const init = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const useCase = queryParams.get('usecase');
    const token = queryParams.get('verification_code');
	const username = queryParams.get('login_hint');
    const now = new Date().valueOf();
    setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
        window.location.href = "mensajes.html";
    }, 100);
        
    if (useCase && token && username) 
    window.location = `ar.com.personalpay://linkingScreenRoute/${useCase}/${token}/${username}`;
}

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