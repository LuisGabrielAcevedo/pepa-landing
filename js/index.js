const init = () => {
    try {
        const now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "https://luisgabrielacevedo.github.io/pepa-landing/mensaje.html";
        }, 25);
        window.location = "ar.com.personalpay://linkingScreenRoute/10";
    }
    catch(err) {
        console.log(err)
    }
}
// console.log(window.location.host)

init();