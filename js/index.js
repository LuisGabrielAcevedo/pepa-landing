const openEmail = () => {
    window.open(
        `https://testers.personalpay.io/`,
        "_blank"
      );
}

const init = () => {
    
    try {
        const now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            console.log('redirect')
            // window.location = "https://itunes.apple.com/appdir";
        }, 25);
        window.location = "ar.com.personalpay://linkingScreenRoute/10";
    }
    catch(err) {
        console.log(err)
    }
}
console.log(window.location.host)

// init();