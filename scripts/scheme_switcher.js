document.addEventListener("DOMContentLoaded", function () {
    var schemeButton = document.getElementById('button_scheme');
    var icon = document.querySelector('#icon_scheme');
    var body = document.querySelector('body');
    var top = document.querySelector('.top');
    var left = document.querySelector('.left');
    var left_bar = document.querySelector('.left_bar');
    var right = document.querySelector('.right');
    var top_button = document.querySelectorAll('.top_button');
    var top_button_2 = document.querySelectorAll('.top_button_2');
    var side_button = document.querySelectorAll('.side_button');
    var side_button_2 = document.querySelectorAll('.side_button_2');
    var page_outer = document.querySelector('.page_outer');
    var page_inner = document.querySelector('.page_inner');
    //var input_text = document.querySelectorAll('.input_text');
    //var textarea = document.querySelector('textarea');
    //var history_tab = document.querySelector('.history_tab');
    //var help_box_tab = document.querySelector('.help_box_tab');
    //var label_tab = document.querySelector('.label_tab');

    schemeButton.addEventListener('click', function () {
        if (body.style.backgroundColor === 'rgb(138, 159, 208)') {
            // Background is currently #8A9FD0 (enabled), so change to #1b1f28 (disabled)
            icon.src = "media/icons/feather_icons/sun.svg";
            body.style.backgroundColor = '#1b1f28';
            top.style.backgroundColor = '#272c39';
            left.style.backgroundColor = '#272c39';
            left_bar.style.backgroundColor = '#333a4d';
            right.style.backgroundColor = '#272c39';
            page_outer.style.backgroundColor = '#272c39';
            page_inner.style.backgroundColor = '#333a4d';
            //input_text.style.backgroundColor = '#596379';

            //textarea.style.backgroundColor = '#333a4d';
            //history_tab.style.backgroundColor = '#272c39';
            //help_box_tab.style.backgroundColor = '#333a4d';
            //label_tab.style.backgroundColor = '#272c39';

            // Loop through the top_buttons NodeList and set background color for each element
            top_button.forEach(function (button) {
                button.style.backgroundColor = '#1b1f28';
            });
            top_button_2.forEach(function (button) {
                button.style.backgroundColor = '#1b1f28';
            });
            side_button.forEach(function (button) {
                button.style.backgroundColor = '#1b1f28';
            });
            side_button_2.forEach(function (button) {
                button.style.backgroundColor = '#272c39';
            });
            //input_text.forEach(function (button) {
           //     button.style.backgroundColor = '#596379';
           //     button.style.border = '2px solid #596379';
           // });
        } else {
            // Background is currently #1b1f28 (disabled), so change to #8A9FD0 (enabled)
            icon.src = "media/icons/feather_icons/moon.svg";
            body.style.backgroundColor = '#8A9FD0';
            top.style.backgroundColor = '#99AEE2';
            left.style.backgroundColor = '#99AEE2';
            left_bar.style.backgroundColor = '#A3B9F5';
            right.style.backgroundColor = '#99AEE2';
            page_outer.style.backgroundColor = '#99AEE2';
            page_inner.style.backgroundColor = '#A3B9F5';
            //input_text.style.backgroundColor = '#bdcff5';
            
            //textarea.style.backgroundColor = '#333a4d';
            //history_tab.style.backgroundColor = '#272c39';
            //help_box_tab.style.backgroundColor = '#333a4d';
            //label_tab.style.backgroundColor = '#272c39';

            // Loop through the top_buttons NodeList and set background color for each element
            top_button.forEach(function (button) {
                button.style.backgroundColor = '#8A9FD0';
            });
            top_button_2.forEach(function (button) {
                button.style.backgroundColor = '#8A9FD0';
            });
            side_button.forEach(function (button) {
                button.style.backgroundColor = '#8A9FD0';
            });
            side_button_2.forEach(function (button) {
                button.style.backgroundColor = '#99AEE2';
            });
            //input_text.forEach(function (button) {
           //     button.style.backgroundColor = '#bdcff5';
            //    button.style.border = '2px solid #bdcff5';
           // });
        }
    });
});
