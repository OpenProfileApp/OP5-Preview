// This loads the script on page load so it's ready to use.
document.addEventListener("DOMContentLoaded", function () {

    //————————————————————————————————————————————————————————//
    //———————————————————[ MAIN-VARIABLES ]———————————————————//
    //————————————————————————————————————————————————————————//
    const toggle_left_menu = document.querySelector('#toggle_left_menu');
    const left = document.querySelector('.left');
    const center = document.querySelector('.center');
    const left_inner = document.querySelector('.left_inner');
    const toggle_left_menu_option = document.querySelector('#toggle_left_menu_option');

    toggle_left_menu.addEventListener('click', function () {
        if (left_inner.style.display === 'none') {
            left_inner.style.display = 'block';
            left_inner.style.transform = "translateX(80px)";
            center.style.left = "calc(50% + 276px)";
            left_inner.style.opacity = '1';
            left.style.borderRadius = "0px";
            toggle_left_menu_option.option = "option_1";
            toggle_left_menu_option.textContent = "Hide Menu"; // TEMP ONLY
        } else {
            left_inner.style.opacity = '1';
            left_inner.style.transform = "translateX(-280px)";
            center.style.left = "calc(50% + 100px)";
            left.style.borderRadius = "0px 25px 0px 0px";
            toggle_left_menu_option.option = "option_2";
            toggle_left_menu_option.textContent = "Show Menu"; // TEMP ONLY
            setTimeout(function () {
                left_inner.style.display = 'none';
            }, 200);
        }
    });
});