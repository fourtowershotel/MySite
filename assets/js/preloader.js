
window.addEventListener("load", function () {

    const t1 = document.getElementById("text1");
    const t2 = document.getElementById("text2");
    const t3 = document.getElementById("text3");
    const t4 = document.getElementById("text4");
    const preloader = document.getElementById("preloader");

    function show(el, delay) {
        setTimeout(() => {
            el.style.opacity = "1";
        }, delay);

        setTimeout(() => {
            el.style.opacity = "0";
        }, delay + 1200);
    }

    show(t1, 200);    // Hello
    show(t2, 1700);   // Welcome
    show(t3, 3200);   // To Four Towers Hotel
    show(t4, 4700);   // & Suites

    // remove preloader
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "0.6s ease";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);

    }, 6200);

});
