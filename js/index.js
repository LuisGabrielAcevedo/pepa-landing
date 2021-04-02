const init = () => {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const useCase = queryParams.get('usecase');
        const token = queryParams.get('verification_code');
		const username = queryParams.get('login_hint');
        const now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location.href = "https://luisgabrielacevedo.github.io/pepa-landing/mensajes.html";
        }, 25);
        window.location = `ar.com.personalpay://linkingScreenRoute/${useCase}/${token}/${username}`;
    }
    catch(err) {
        console.log(err)
    }
}
// console.log(window.location.host)

init();