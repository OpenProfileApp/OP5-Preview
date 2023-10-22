//————————————————————————————————————————————————————————//
//———————————————[ SCHEME-MANAGER-SCRIPT ]————————————————//
//————————————————————————————————————————————————————————//
// The scheme manager script enables triggering the scheme
// manager and switching schemes based on what is registered
// below in the HTML code. To register a new custom scheme 
// read the comments below as they will guide you towards 
// achieving that.

// This loads the script on page load so it's ready to use.
document.addEventListener("DOMContentLoaded", function () {

    //————————————————————————————————————————————————————————//
    //———————————————————[ MAIN-VARIABLES ]———————————————————//
    //————————————————————————————————————————————————————————//
    // This collects the scheme button IDs required for 
    // triggering the manager or switching to different schemes.

    // The scheme manager trigger button ID.
    const button_scheme = document.querySelector('#button_scheme');

    // Below are the button IDs to trigger different schemes.
    // When registering a new scheme create a new line in the
    // same format as below and choose an ID for your scheme 
    // button. The ID will also be used when registering the
    // scheme in the HTML code which can be found further below.
    // Your ID should look something like this
    // "apply_scheme_NAME" whereas "NAME" is replaced with
    // whatever you want to call the scheme.
    const apply_scheme_midnight = document.querySelector('#apply_scheme_midnight');
    const apply_scheme_daylight = document.querySelector('#apply_scheme_daylight');
    const apply_scheme_spooky = document.querySelector('#apply_scheme_spooky');
    const apply_scheme_classic = document.querySelector('#apply_scheme_classic');
    const apply_scheme_premium = document.querySelector('#apply_scheme_premium');

    //————————————————————————————————————————————————————————//
    //—————————————————[ ELEMENT-VARIABLES ]——————————————————//
    //————————————————————————————————————————————————————————//
    // This collects the document's element IDs that will be
    // modified by the switching of schemes. If further elements
    // are added to the HTML file or HTML code that aren't part
    // of the profile pages and you want them to be modified
    // by schemes, add their IDs on a new line using the same
    // format as below.

    // This ID is used for changing the icon seen in the scheme
    // button based off the active scheme.
    const icon_scheme = document.querySelector('#icon_scheme');

    // The below IDs are all used for changing the colors of
    // the non-profile page elements based off the active
    // scheme.
    const body = document.querySelector('body');
    const loader_outer = document.querySelector('.loader_outer');
    const loader_inner = document.querySelector('.loader_inner');
    const loader_inner_color = document.querySelector('.loader_inner_color');
    const loading_image = document.querySelector('#loading_image')
    const loading_message = document.querySelectorAll('.loading_message');
    const loader_social_button = document.querySelectorAll('.loader_social_button')
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
    const profile_group = document.querySelectorAll('.profile_group');
    const profile_universe = document.querySelectorAll('.profile_universe');
    const delete_button = document.querySelectorAll('.delete_button');
    const delete_button_2 = document.querySelectorAll('.delete_button_2');
    const schemes_manager = document.querySelector('.schemes_manager');
    const schemes_backdrop = document.querySelectorAll('.schemes_backdrop');
    const schemes_front = document.querySelectorAll('.schemes_backdrop:hover .schemes_front');
    const tag = document.querySelectorAll('.tag');
    const notification_dot = document.querySelectorAll('.notification_dot');
    const circle_outer = document.querySelectorAll('.circle_outer');
    const circle_inner = document.querySelectorAll('.circle_inner');
    const information_text = document.querySelectorAll('.information_text');

    //————————————————————————————————————————————————————————//
    //—————————————————[ SPECIAL-VARIABLES ]——————————————————//
    //————————————————————————————————————————————————————————//
    // This collects the "special" element IDs that are
    // dedicated solely to specific schemes. These will more so
    // be for seasonal schemes but if you wish to add your own
    // dedicated elements to your scheme, you can add these
    // below in the HTML code. If you know the ID you're gonna
    // use for them, create a new line below and register the
    // ID in the same format as the rest. You can add a comment
    // by doing "//TEXT" where as "TEXT" is your own text to
    // seperate and label which scheme the element belongs too
    // for easier finding and readiblity.
    const seasonal_spooky = document.querySelectorAll('.seasonal_spooky');



    button_scheme.addEventListener('click', function () {
        // Call the scheme_midnight function to apply the midnight scheme
        if (schemes_manager.style.display !== "grid") {
        schemes_manager.style.display = "grid"
        setTimeout(function() {
    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    schemes_manager.innerHTML = `
            <div class="schemes_backdrop">
            <div class="schemes_front">
                <div class="scheme_button" id="apply_scheme_midnight" title="Load Scheme" style="background-color: #272c39;" onmouseover="this.style.backgroundColor='#596379'" onmouseout="this.style.backgroundColor='#272c39'">
                    <img id="apply_scheme_midnight" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <img src="media/icons/feather_icons/moon.svg" style="scale: 0.50; transform-origin: top left; margin: 10px;">
                <div class="scheme_text" id="scheme_name_midnight" style="background-color: #272c39;">Midnight</div>
                <div class="tag" style="left: 114px; top: 105px; scale: 0.8; z-index: 301;">PREVIEW</div>
            </div>
        </div>

        <div class="schemes_backdrop" style="background-color: #8a9fd0;">
            <div class="schemes_front" style="background-color: #a3b9f5;">
                <div class="scheme_button" id="apply_scheme_daylight" onclick="" title="Load Scheme" style="background-color: #99aee2;" onmouseover="this.style.backgroundColor='#bdcff5'" onmouseout="this.style.backgroundColor='#99aee2'">
                    <img id="apply_scheme_daylight" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <img src="media/icons/feather_icons/sun.svg" style="scale: 0.50; transform-origin: top left; margin: 10px;">
                <div class="scheme_text" id="scheme_name_daylight" style="background-color: #99aee2;">Daylight</div>
                <div class="tag" style="left: 114px; top: 105px; scale: 0.8; z-index: 301;">PREVIEW</div>
            </div>
        </div>

        <div class="schemes_backdrop" style="background-color: #171228;">
            <div class="schemes_front" style="background-color: #302b44;">
                <div class="scheme_button" id="apply_scheme_spooky" onclick="" title="Load Scheme" style="background-color: #242036;" onmouseover="this.style.backgroundColor='#514b67'" onmouseout="this.style.backgroundColor='#242036'">
                    <img id="apply_scheme_spooky" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <img src="media/icons/feather_icons/cloud-lightning.svg" style="scale: 0.50; transform-origin: top left; margin: 10px;">
                <div class="scheme_text" id="scheme_name_spooky" style="background-color: #242036;">Spooky</div>
                <div class="tag" style="left: 114px; top: 105px; scale: 0.8; z-index: 301;">PREVIEW</div>
            </div>
        </div>

        <div class="schemes_backdrop" style="background-color: #881a1a; opacity: 0.35;">
            <div class="schemes_front" style="background-color: #bd3332;">
                <div class="scheme_button" id="apply_scheme_classic" onclick="" title="Load Scheme" style="background-color: #9c1f1f;" onmouseover="this.style.backgroundColor='#be3b3b'" onmouseout="this.style.backgroundColor='#9c1f1f'">
                    <img id="apply_scheme_classic" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <img src="media/icons/feather_icons/watch.svg" style="scale: 0.50; transform-origin: top left; margin: 10px;">
                <div class="scheme_text" style="background-color: #9c1f1f; font-size: 14px; top: 74px;">Classic (coming soon)</div>
                <div class="tag" style="left: 114px; top: 105px; scale: 0.8; z-index: 301;">PREVIEW</div>
            </div>
        </div>

        <div class="schemes_backdrop" style="background-color: #A77E25; opacity: 0.35;">
            <div class="schemes_front" style="background-color: #bd9335;">
                <div class="scheme_button" id="apply_scheme_premium" onclick="" title="Load Scheme" style="background-color: #E1A932;" onmouseover="this.style.backgroundColor='#f5bc42'" onmouseout="this.style.backgroundColor='#E1A932'">
                    <img id="apply_scheme_premium" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <img src="media/icons/feather_icons/dollar-sign.svg" style="scale: 0.50; transform-origin: top left; margin: 10px;">
                <div class="scheme_text" style="background-color: #E1A932; font-size: 13px; top: 76px;">Premium (coming soon)</div>
                <div class="tag" style="left: 114px; top: 105px; scale: 0.8; z-index: 301;">PREVIEW</div>
            </div>
        </div>

        <div class="schemes_backdrop" style="opacity: 0;">
            <div class="schemes_front"></div>
        </div>
        <div class="schemes_backdrop" style="opacity: 0;">
            <div class="schemes_front"></div>
        </div>
        <div class="schemes_backdrop" style="opacity: 0;">
            <div class="schemes_front"></div>
        </div>
        <div class="schemes_backdrop" style="opacity: 0;">
            <div class="schemes_front"></div>
        </div>
            `;
            schemes_manager.style.opacity = "1"
        }, 50);
        } else {
            schemes_manager.style.opacity = "0"
            setTimeout(function() {
                schemes_manager.style.display = "none";
                schemes_manager.innerHTML = ``;
            }, 200);            
        }
    });

    
    // Assuming you've already inserted the dynamic HTML content into the schemes_manager

    schemes_manager.addEventListener('click', function (event) {
        if (event.target.id === 'apply_scheme_midnight') {
            scheme_apply("moon", "#14161E", "#1C1F2A", "#222635", "#222635", "#222635", "#292A3B");
        } else if (event.target.id === 'apply_scheme_daylight') {
            scheme_apply("sun", "#A2B3C2", "#B3C6D3", "#C4D8E4", "#D6EAF6", "#E7F7FF", "#F5FAFF");
        } else if (event.target.id === 'apply_scheme_spooky') {
            scheme_apply("cloud-lightning", "#16141A", "#1C1825", "#201C2A", "#252033", "#2A243A", "#2F283F", "#f77117");
        } else if (event.target.id === 'apply_scheme_classic') {
            scheme_apply("watch", "#131119", "#191522", "#1D1927", "#221C2E", "#271F35", "#2C233B");
        }
    });


    function scheme_apply(icon, scheme_shade_1, scheme_shade_2, scheme_shade_3, scheme_shade_4, scheme_shade_5, scheme_accent) {
        icon_scheme.src = `media/icons/feather_icons/${icon}.svg`;
        body.style.backgroundColor = scheme_shade_1;
        loader_outer.style.backgroundColor = scheme_shade_2;
        loader_inner.style.border = `8px solid #ffffff`;
        loader_inner_color.style.backgroundColor = `#ffffff`;
        loading_image.src = `media/images/openprofile/spooky/op_spooky_favicon.png`;
        loading_message.forEach((loadingMessage) => {
            loadingMessage.style.color = `#ffffff`;
        });
        loader_social_button.forEach((loader_social_button) => {
            loader_social_button.style.backgroundColor = scheme_shade_3;
            loader_social_button.addEventListener('mouseover', () => {
                loader_social_button.style.backgroundColor = scheme_shade_4;
                loader_social_button.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
            });
            loader_social_button.addEventListener('mouseout', () => {
                loader_social_button.style.backgroundColor = scheme_shade_3;
                loader_social_button.style.boxShadow = '';
            });
        });
        seasonal_spooky.forEach((seasonal_spooky) => {
            seasonal_spooky.style.display = `block`;
        });
        top.style.backgroundColor = scheme_shade_3;
        top.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
        left.style.backgroundColor = scheme_shade_3;
        left.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
        left_bar.style.backgroundColor = scheme_shade_4;
        left_bar.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
        left_top.style.backgroundColor = scheme_shade_4;
        left_top.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
        left_top_2.style.backgroundColor = scheme_shade_4;
        left_top_2.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
        right.style.backgroundColor = scheme_shade_2;
        right.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        input_search.forEach((input_search) => {
            input_search.style.backgroundColor = scheme_shade_3;
            input_search.addEventListener('mouseover', () => {
                input_search.style.backgroundColor = scheme_shade_5;
                input_search.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
            });
            input_search.addEventListener('mouseout', () => {
                if (!input_search.matches(':focus')) {
                    input_search.style.backgroundColor = scheme_shade_3;
                    input_search.style.boxShadow = '';
                }
            });
            input_search.addEventListener('focus', () => {
                input_search.style.backgroundColor = scheme_shade_5;
                input_search.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
            });
            input_search.addEventListener('blur', () => {
                input_search.style.backgroundColor = scheme_shade_3;
                input_search.style.boxShadow = '';
            });
        });
        context_menu.forEach((context_menu) => {
            context_menu.style.backgroundColor = scheme_shade_2;
            context_menu.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        });
        popup.forEach((popup) => {
            popup.style.backgroundColor = scheme_shade_2;
        });
        changelog.style.backgroundColor = scheme_shade_1;
        side_button.forEach((side_button) => {
            side_button.style.backgroundColor = scheme_shade_2;
            side_button.addEventListener('mouseover', () => {
                side_button.style.backgroundColor = scheme_shade_4;
                side_button.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
            });
            side_button.addEventListener('mouseout', () => {
                side_button.style.backgroundColor = scheme_shade_2;
                side_button.style.boxShadow = '';
            });
        });
        side_button_2.forEach((side_button_2) => {
            side_button_2.style.backgroundColor = scheme_shade_3;
            side_button_2.addEventListener('mouseover', () => {
                side_button_2.style.backgroundColor = scheme_shade_5;
                side_button_2.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
            });
            side_button_2.addEventListener('mouseout', () => {
                side_button_2.style.backgroundColor = scheme_shade_3;
                side_button_2.style.boxShadow = '';
            });
        });
        top_button.forEach((top_button) => {
            top_button.style.backgroundColor = scheme_shade_2;
            top_button.addEventListener('mouseover', () => {
                top_button.style.backgroundColor = scheme_shade_4;
                top_button.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
            });
            top_button.addEventListener('mouseout', () => {
                top_button.style.backgroundColor = scheme_shade_2;
                top_button.style.boxShadow = '';
            });
        });
        profile_group.forEach((profile_group) => {
            profile_group.addEventListener('mouseover', () => {
                profile_group.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
            });
            profile_group.addEventListener('mouseout', () => {
                profile_group.style.boxShadow = '';
            });
        });
        profile_universe.forEach((profile_universe) => {
            profile_universe.addEventListener('mouseover', () => {
                profile_universe.style.boxShadow = `0px 0px 8px ${scheme_shade_3}`;
            });
            profile_universe.addEventListener('mouseout', () => {
                profile_universe.style.boxShadow = '';
            });
        });
        delete_button.forEach((delete_button) => {
            delete_button.style.backgroundColor = scheme_shade_4;
            delete_button.addEventListener('mouseover', () => {
                delete_button.style.backgroundColor = scheme_shade_5;
            });
            delete_button.addEventListener('mouseout', () => {
                delete_button.style.backgroundColor = scheme_shade_4;
            });
        });
        delete_button_2.forEach((delete_button_2) => {
            delete_button_2.style.backgroundColor = scheme_shade_3;
            delete_button_2.addEventListener('mouseover', () => {
                delete_button_2.style.backgroundColor = scheme_shade_5;
            });
            delete_button_2.addEventListener('mouseout', () => {
                delete_button_2.style.backgroundColor = scheme_shade_3;
            });
        });
        schemes_manager.style.backgroundColor = scheme_shade_3;
        schemes_manager.style.boxShadow = `0px 0px 8px ${scheme_shade_1}`;
        schemes_backdrop.forEach((schemes_backdrop) => {
            schemes_backdrop.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
        });
        schemes_front.forEach((schemes_front) => {
            schemes_front.addEventListener('mouseover', () => {
                schemes_front.style.boxShadow = `0px 0px 8px ${scheme_shade_2}`;
            });
            schemes_front.addEventListener('mouseout', () => {
                schemes_front.style.boxShadow = '';
            });
        });
        tag.forEach((tag) => {
            tag.style.backgroundColor = scheme_accent;
        });
        notification_dot.forEach((notification_dot) => {
            notification_dot.style.backgroundColor = scheme_accent;
        });
        circle_outer.forEach((circle_outer) => {
            circle_outer.style.backgroundColor = scheme_shade_4;
        });
        circle_inner.forEach((circle_inner) => {
            circle_inner.style.backgroundColor = scheme_shade_5;
        });
        information_text.forEach((information_text) => {
            information_text.style.backgroundColor = scheme_shade_2;
        });
    }    
});
