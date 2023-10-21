document.addEventListener("DOMContentLoaded", function () {

    const button_scheme = document.querySelector('#button_scheme');
    const apply_scheme_midnight = document.querySelector('#apply_scheme_midnight');
    const apply_scheme_daylight = document.querySelector('#apply_scheme_daylight');
    const apply_scheme_spooky = document.querySelector('#apply_scheme_spooky');
    const apply_scheme_classic = document.querySelector('#apply_scheme_classic');

    const icon_scheme = document.querySelector('#icon_scheme');
    const body = document.querySelector('body');
    const loader_outer = document.querySelector('.loader_outer');
    const loader_inner = document.querySelector('.loader_inner');
    const loader_inner_color = document.querySelector('.loader_inner_color');
    const loading_image = document.querySelector('#loading_image')
    const loading_message = document.querySelectorAll('.loading_message');
    const loader_social_button = document.querySelectorAll('.loader_social_button')
    const seasonal_spooky = document.querySelectorAll('.seasonal_spooky');
    const top = document.querySelector('.top');
    const left = document.querySelector('.left');
    const left_bar = document.querySelector('.left_bar');
    const left_top = document.querySelector('.left_top');
    const left_top_2 = document.querySelector('.left_top_2');
    const right = document.querySelector('.right');
    const input_search = document.querySelectorAll('.input_search');
    const context_menu = document.querySelectorAll('.context-menu');
    const popup = document.querySelectorAll('.popup');
    const changelog = document.querySelector('#changelog');
    const side_button = document.querySelectorAll('.side_button');
    const side_button_2 = document.querySelectorAll('.side_button_2');
    const top_button = document.querySelectorAll('.top_button');
    const top_button_2 = document.querySelectorAll('.top_button_2');
    const profile_group = document.querySelectorAll('.profile_group');
    const profile_universe = document.querySelectorAll('.profile_universe');
    const delete_button = document.querySelectorAll('.delete_button');
    const delete_button_2 = document.querySelectorAll('.delete_button_2');
    const schemes_manager = document.querySelector('.schemes_manager');
    const schemes_backdrop = document.querySelectorAll('.schemes_backdrop');
    const schemes_front = document.querySelectorAll('.schemes_backdrop:hover .schemes_front');

    button_scheme.addEventListener('click', function () {
        // Call the scheme_midnight function to apply the midnight scheme
        if (schemes_manager.style.display !== "grid") {
        schemes_manager.style.display = "grid"
        setTimeout(function() {
            schemes_manager.style.opacity = "1"
        }, 50);
        } else {
            schemes_manager.style.opacity = "0"
            setTimeout(function() {
                schemes_manager.style.display = "none";
            }, 200);            
        }
    });

    /// SCHEME CHANGE - MIDNIGHT
    apply_scheme_midnight.addEventListener('click', function () {
        scheme_apply("moon", "#12141a", "#1b1f28", "#272c39", "#333a4d", "#596379", "#768099");
    });

    /// SCHEME CHANGE - DAYLIGHT
    apply_scheme_daylight.addEventListener('click', function () {
        scheme_apply("sun", "#68789d", "#8a9fd0", "#99aee2", "#a3b9f5", "#bdcff5", "#d1deff");
    });

    /// SCHEME CHANGE - SPOOKY
    apply_scheme_spooky.addEventListener('click', function () {
        scheme_apply("cloud-lightning", "#0f0c1a", "#171228", "#242036", "#302b44", "#514b67", "#726c87");
    });

    function scheme_apply(icon, scheme_shade_0, scheme_shade_1, scheme_shade_2, scheme_shade_3, scheme_shade_4, scheme_shade_5) {
        icon_scheme.src = `media/icons/feather_icons/${icon}.svg`;
        body.style.backgroundColor = scheme_shade_1;
        loader_outer.style.backgroundColor = scheme_shade_1;
        loader_inner.style.border = `8px solid #ffffff`;
        loader_inner_color.style.backgroundColor = `#ffffff`;
        loading_image.src = `media/images/openprofile/spooky/op_spooky_favicon.png`;
        loading_message.forEach((loadingMessage) => {
            loadingMessage.style.color = `#ffffff`;
        });
        loader_social_button.forEach((loader_social_button) => {
            loader_social_button.style.backgroundColor = scheme_shade_2;
            loader_social_button.addEventListener('mouseover', () => {
                loader_social_button.style.backgroundColor = scheme_shade_3;
                loader_social_button.style.boxShadow = `0px 0px 8px ${scheme_shade_0}`;
            });
            loader_social_button.addEventListener('mouseout', () => {
                loader_social_button.style.backgroundColor = scheme_shade_2;
                loader_social_button.style.boxShadow = '';
            });
        });
        seasonal_spooky.forEach((seasonal_spooky) => {
            seasonal_spooky.style.display = `block`;
        });
        top.style.backgroundColor = scheme_shade_2;
        top.style.boxShadow = `0px 0px 8px ${scheme_shade_0}`;
        left.style.backgroundColor = scheme_shade_2;
        left.style.boxShadow = `0px 0px 8px ${scheme_shade_0}`;
        left_bar.style.backgroundColor = scheme_shade_3;
        left_bar.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        left_top.style.backgroundColor = scheme_shade_3;
        left_top.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        left_top_2.style.backgroundColor = scheme_shade_3;
        left_top_2.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        right.style.backgroundColor = scheme_shade_2;
        right.style.boxShadow = `0px 0px 8px ${scheme_shade_0}`;
        input_search.forEach((input_search) => {
            input_search.style.backgroundColor = scheme_shade_2;
            input_search.addEventListener('mouseover', () => {
                input_search.style.backgroundColor = scheme_shade_4;
                input_search.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
            });
            input_search.addEventListener('mouseout', () => {
                if (!input_search.matches(':focus')) {
                    input_search.style.backgroundColor = scheme_shade_2;
                    input_search.style.boxShadow = ``;
                }
            });
            input_search.addEventListener('focus', () => {
                input_search.style.backgroundColor = scheme_shade_4;
                input_search.style.boxShadow = `"0px 0px 8px" ${scheme_shade_2}`;
            });
            input_search.addEventListener('blur', () => {
                input_search.style.backgroundColor = scheme_shade_2;
                input_search.style.boxShadow = '';
            });
        });
        context_menu.forEach((context_menu) => {
            context_menu.style.backgroundColor = scheme_shade_1;
            context_menu.style.boxShadow = `"0px 0px 8px" ${scheme_shade_0}`;
        });
        popup.forEach((popup) => {
            popup.style.backgroundColor = scheme_shade_1;
        });
        changelog.style.backgroundColor = scheme_shade_0;
        side_button.forEach((side_button) => {
            side_button.style.backgroundColor = scheme_shade_1;
            side_button.addEventListener('mouseover', () => {
                side_button.style.backgroundColor = scheme_shade_3;
                side_button.style.boxShadow = `"0px 0px 8px" ${scheme_shade_1}`;
            });
            side_button.addEventListener('mouseout', () => {
                side_button.style.backgroundColor = scheme_shade_1;
                side_button.style.boxShadow = '';
            });
        });
        side_button_2.forEach((side_button_2) => {
            side_button_2.style.backgroundColor = scheme_shade_2;
            side_button_2.addEventListener('mouseover', () => {
                side_button_2.style.backgroundColor = scheme_shade_4;
                side_button_2.style.boxShadow = `"0px 0px 8px" ${scheme_shade_2}`;
            });
            side_button_2.addEventListener('mouseout', () => {
                side_button_2.style.backgroundColor = scheme_shade_2;
                side_button_2.style.boxShadow = '';
            });
        });
        top_button.forEach((top_button) => {
            top_button.style.backgroundColor = scheme_shade_1;
            top_button.addEventListener('mouseover', () => {
                top_button.style.backgroundColor = scheme_shade_3;
                top_button.style.boxShadow = `"0px 0px 8px" ${scheme_shade_2}`;
            });
            top_button.addEventListener('mouseout', () => {
                top_button.style.backgroundColor = scheme_shade_1;
                top_button.style.boxShadow = '';
            });
        });
        top_button_2.forEach((top_button_2) => {
            top_button_2.style.backgroundColor = scheme_shade_1;
        });
        profile_group.forEach((profile_group) => {
            profile_group.addEventListener('mouseover', () => {
                profile_group.style.boxShadow = `"0px 0px 8px" ${scheme_shade_1}`;
            });
            profile_group.addEventListener('mouseout', () => {
                profile_group.style.boxShadow = '';
            });
        });
        profile_universe.forEach((profile_universe) => {
            profile_universe.addEventListener('mouseover', () => {
                profile_universe.style.boxShadow = `"0px 0px 8px" ${scheme_shade_2}`;
            });
            profile_universe.addEventListener('mouseout', () => {
                profile_universe.style.boxShadow = '';
            });
        });
        delete_button.forEach((delete_button) => {
            delete_button.style.backgroundColor = scheme_shade_3
            delete_button.addEventListener('mouseover', () => {
                delete_button.style.backgroundColor = scheme_shade_4;
            });
            delete_button.addEventListener('mouseout', () => {
                delete_button.style.backgroundColor = scheme_shade_3;
            });
        });
        delete_button_2.forEach((delete_button_2) => {
            delete_button_2.style.backgroundColor = scheme_shade_2
            delete_button_2.addEventListener('mouseover', () => {
                delete_button_2.style.backgroundColor = scheme_shade_4;
            });
            delete_button_2.addEventListener('mouseout', () => {
                delete_button_2.style.backgroundColor = scheme_shade_2;
            });
        });
        schemes_manager.style.backgroundColor = scheme_shade_2;
        schemes_manager.style.boxShadow = `"0px 0px 8px" ${scheme_shade_0}`;
        schemes_backdrop.forEach((schemes_backdrop) => {
            schemes_backdrop.style.boxShadow = `"0px 0px 8px" ${scheme_shade_1}`;
        });
        schemes_front.forEach((schemes_front) => {
            schemes_front.addEventListener('mouseover', () => {
                schemes_front.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
            });
            schemes_front.addEventListener('mouseout', () => {
                schemes_front.style.boxShadow = '';
            });
        });
    };
});