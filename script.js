var homeScreen = document.querySelector(".main");
var menuScreen = document.querySelector(".menu");

function menu_open() {
    if (homeScreen.style.visibility === "visible") {
        homeScreen.style.visibility = "hidden";
        menuScreen.style.visibility = "visible";
    } else {
        homeScreen.style.visibility = "visible";
        menuScreen.style.visibility = "hidden";
    }
    console.log("it happened!");
}

function close_link() {
    menuScreen.style.visibility = "hidden";
    homeScreen.style.visibility = "visible";
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 1376) {
        window.location.href = "https://mohamed1242012.github.io/Dental-website/";
    }
});
