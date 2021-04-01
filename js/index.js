const openEmail = () => {
    window.open(
        `https://testers.personalpay.io/`,
        "_blank"
      );
}

const init = () => {
    const now = new Date().valueOf();
    setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
        // window.location = "https://itunes.apple.com/appdir";
    }, 25);
    window.location = "https://ar.com.personalpay/linkingScreenRoute/10";
}


init();