// const init = () => {
//     const queryParams = new URLSearchParams(window.location.search);
//     const useCase = queryParams.get('usecase');
//     const token = queryParams.get('verification_code');
// 	const username = queryParams.get('login_hint');
//     const now = new Date().valueOf();
//     setTimeout(function () {
//         window.location.href = "mensajes.html";
//     }, 100);
        
//     if (useCase && token && username) 
//     window.location = `ar.com.personalpay://linkingScreenRoute/${useCase}/${token}/${username}`;
// }


const init = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const route = queryParams.get('route');
    setTimeout(function () {
        window.location.href = window.innerWidth < 600 ? "https://play.google.com/store/apps/details?id=ar.com.personalpay " : "mensajes.html";
    }, 1000);
    window.location = `ar.com.personalpay://linkingRoutes/${route}/email`;
}

init();