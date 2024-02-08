//————————————————————————————————————————————————————————//
//———————————————[ SCHEME-MANAGER-SCRIPT ]————————————————//
//————————————————————————————————————————————————————————//
// The scheme manager script enables triggering the scheme
// manager and switching schemes based on what is registered
// below in the HTML code. To register a new custom scheme 
// read the comments towards the end of the script as they
// will guide you towards achieving that.

// The current scheme variable.
let current_scheme = '';

// This loads the script on page load so it's ready to use.
document.addEventListener("DOMContentLoaded", function () {

    //————————————————————————————————————————————————————————//
    //———————————————————[ MAIN-VARIABLES ]———————————————————//
    //————————————————————————————————————————————————————————//
    // This collects the scheme button IDs required for 
    // triggering the manager or switching to different schemes.

    // The main scheme manager element.
    const schemes_manager = document.querySelector('.schemes_manager');

    // The scheme manager trigger button ID.
    const button_scheme = document.querySelector('#button_scheme');
    const icon_scheme = document.querySelector('#icon_scheme');

    //————————————————————————————————————————————————————————//
    //———————————————————[ SCHEME-MANAGER ]———————————————————//
    //————————————————————————————————————————————————————————//
    // When clicking on the scheme button it will open the
    // scheme manager and set it's display to grid. The 
    // registered schemes will also display themselves within
    // the manager based on the HTML code below. Cicking it
    // again or outside of the manager will cause it to close.
    button_scheme.addEventListener('click', function () {
        if (schemes_manager.style.display !== 'grid') {
            // This loads in the schemes.
            generate_schemes();
            // This ensures the dynamic elements are schemed.
            load_current_scheme()
            // This displays the schemes in the manager.
            schemes_manager.style.display = 'grid';
            setTimeout(function () {
                schemes_manager.style.opacity = '1';
            }, 50);
    
            // Adds a click event listener to the document.
            const closeSchemeManager = function (event) {
                if (schemes_manager.style.display === 'grid' && !schemes_manager.contains(event.target) && event.target !== button_scheme && event.target !== icon_scheme) {
                    // Hides the scheme manager.
                    schemes_manager.style.display = 'none';
                    // Clears the scheme manager.
                    schemes_manager.innerHTML = '';
                    document.removeEventListener('click', closeSchemeManager);
                }
            };
    
            document.addEventListener('click', closeSchemeManager);
        } else {
            // Close the scheme manager if it's already open.
            schemes_manager.style.opacity = '0';
            setTimeout(function () {
                // Hides the scheme manager.
                schemes_manager.style.display = 'none';
                // Clears the scheme manager.
                schemes_manager.innerHTML = '';
            }, 200);
        }
    });
    

    // This function will load the schemes into the manager
    // based on what has been registered at the end of the
    // script.
    function generate_schemes() {

        // This prevents non-verified schemes from showing up.
        let scheme_manager_html = '';

        // This stores the initial z-index of the first scheme.
        let scheme_zindex = 999;
        schemes.forEach((scheme) => {

            // This checks the current month.
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Months are 0.
        
            // Defines the date ranges for each month.
            const January = 1;
            const February = 2;
            const March = 3;
            const April = 4;
            const May = 5;
            const June = 6;
            const July = 7;
            const August = 8;
            const September = 9;
            const October = 10;
            const November = 11;
            const December = 12;
                
            // Checks the current month and if not matching to seasonal
            // schemes to skip them until the month arrives.
            if (currentMonth !== October && scheme.id === "scheme_spooky" || currentMonth !== February && scheme.id  === "scheme_lunar" ) {
                // Blank html code when skipping schemes.
                scheme_manager_html += ``;
            } else {
                // Checks if the text color is closer to white or black
                // and sets the icon brightness based on the results.
                // Closer to white is 0% and closer to black is 100%.
                const luminance = (parseInt(scheme.text.slice(1, 3), 16) * 299 + parseInt(scheme.text.slice(3, 5), 16) * 587 + parseInt(scheme.text.slice(5, 7), 16) * 114) / 1000;
                let icon_brightness = '';

                if (luminance >= 128) {
                    // Text color is closer to white, set brightness to 100%
                    icon_brightness = 'brightness(100%)';
                } else {
                    // Text color is closer to black, set brightness to 0%
                    icon_brightness = 'brightness(0%)';
                }

                //————————————————————————————————————————————————————————//
                //—————————————————————[ HTML-CODE ]——————————————————————//
                //————————————————————————————————————————————————————————//
                // Once the scheme manager has been opened the following
                // code will be displayed within the
                // (class="schemes_manager") element in the HTML file. This
                // code will duplicate itself until all registered schemes
                // have been properly loaded into the manager.
                scheme_manager_html += `
                    <div class="schemes_backdrop" style="background-color: ${scheme.shade_1}; z-index: ${scheme_zindex};">
                        <div class="schemes_front" style="background-color: ${scheme.shade_3};">
                            <div class="scheme_button" id="${scheme.id}" title="Apply Scheme" style="background-color: ${scheme.shade_2}" 
                                onmouseover="this.style.backgroundColor='${scheme.shade_4}'" onmouseout="this.style.backgroundColor='${scheme.shade_2}'">
                                <img id="${scheme.id}" src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px; filter: ${icon_brightness};">
                            </div>
                            <img src="media/icons/feather_icons/${scheme.icon}.svg" style="scale: 0.50; transform-origin: top left; margin: 10px; filter: ${icon_brightness};">
                            <div class="scheme_text" id="scheme_name_${scheme.name}" style="background-color: ${scheme.shade_2}; color: ${scheme.text}">${scheme.name}</div>
                            ${scheme.tag !== "BETA" && scheme.tag !== "PREVIEW" ? '' : `<div class="tag" style="scale: 1.4; top: 110px; transform: translateX(14px);">${scheme.tag}</div>`}
                        </div>
                    </div>
                `;

                // This negates a number from the current z-index to
                // prevent overlapping so the next scheme can be fully
                // seen. The max supported schemes is currently 999.
                scheme_zindex--;
            }
        });

        // This displays the custom scheme import option.
        scheme_manager_html += `
            <div class="schemes_backdrop" style="background-color: #111111; z-index: 0;">
                <div class="schemes_front" style="background-color: #333333;">
                    <label for="import_custom_scheme" class="scheme_button" title="Import Scheme" style="background-color: #222222"
                        onmouseover="this.style.backgroundColor='#444444'" onmouseout="this.style.backgroundColor='#222222'">
                        <input type="file" id="import_custom_scheme" accept=".sch" style="display: none;">
                        <img id="import_custom_scheme" src="media/icons/feather_icons/upload.svg" style="transform: scale(0.30); transform-origin: top left; margin: 10px;">
                    </label>
                    <img src="media/icons/feather_icons/plus.svg" style="transform: scale(0.50); transform-origin: top left; margin: 10px;">
                    <div class="scheme_text" id="import_custom_scheme_text" style="background-color: #222222;">Add Scheme</div>
                    <div class="tag" style="scale: 1.4; top: 110px; transform: translateX(14px);">PREVIEW</div>
                </div>
            </div>
        `;
        schemes_manager.innerHTML += scheme_manager_html;

        //————————————————————————————————————————————————————————//
        //———————————————————[ IMPORT-SCHEME ]————————————————————//
        //————————————————————————————————————————————————————————//
        // When a scheme gets imported via the above html import
        // elements, the imported JSON file gets broken down into
        // variables based on the file's registered values and loads
        // these values into the apply scheme function which updates
        // the scheme base on the imported file (.sch).
        document.querySelector('#import_custom_scheme').addEventListener('change', function() {
            const fileInput = this;
            const selectedFile = fileInput.files[0];
            
            if (selectedFile) {
                const reader = new FileReader();

                reader.onload = function(event) {
                    imported_scheme = JSON.parse(event.target.result);
                    
                    if (imported_scheme) {
                        scheme_apply(imported_scheme.id, imported_scheme.icon, imported_scheme.text, imported_scheme.accent, imported_scheme.shade_1, imported_scheme.shade_2, imported_scheme.shade_3, imported_scheme.shade_4, imported_scheme.shade_5, imported_scheme.custom_html)

                        // This saves the imported scheme to local storage so it can
                        // be automatically reloaded on refresh using the
                        // "load_local_scheme()" function at the end of the script.
                        const scheme_json = JSON.stringify(imported_scheme);
                        localStorage.setItem('local_selected_scheme', scheme_json);
                        console.log("Selected scheme saved locally!");
                    }
                };

                reader.readAsText(selectedFile);
            }
        });
    }

    //————————————————————————————————————————————————————————//
    //———————————————————[ SCHEME-SWITCH ]————————————————————//
    //————————————————————————————————————————————————————————//
    // Here is where schemes get applied when the apply scheme
    // button is pressed. It listens for clicks in the scheme
    // manager and if a scheme ID is found then it selected 
    // then applies said scheme.
    schemes_manager.addEventListener('click', function (event) {
        var scheme_id = event.target.id;
        const selected_scheme = schemes.find(scheme => scheme.id === scheme_id);

        if (selected_scheme) {
            scheme_apply(selected_scheme.id, selected_scheme.icon, selected_scheme.text, selected_scheme.accent, selected_scheme.shade_1, selected_scheme.shade_2, selected_scheme.shade_3, selected_scheme.shade_4, selected_scheme.shade_5, selected_scheme.custom_html);
        
        // This saves the selected scheme to local storage so it can
        // be automatically reloaded on refresh using the
        // "load_local_scheme()" function at the end of the script.
        const scheme_json = JSON.stringify(selected_scheme);
        localStorage.setItem('local_selected_scheme', scheme_json);
        console.log("Selected scheme saved locally!");
        }
    });
});

//————————————————————————————————————————————————————————//
//——————————————————[ SCHEME-FUNCTION ]———————————————————//
//————————————————————————————————————————————————————————//
// When the apply scheme button has been pressed the
// selected scheme fetches the data from the JSON and loads
// it into this function which replaces the color of all
// the elements listed in the element variables section
// below.

function scheme_apply(scheme_id, scheme_icon, scheme_text, scheme_accent, scheme_shade_1, scheme_shade_2, scheme_shade_3, scheme_shade_4, scheme_shade_5, scheme_custom_html) {

    // Sets current scheme variable.
    current_scheme = {
        id: scheme_id,
        icon: scheme_icon,
        text: scheme_text,
        accent: scheme_accent,
        shade_1: scheme_shade_1,
        shade_2: scheme_shade_2,
        shade_3: scheme_shade_3,
        shade_4: scheme_shade_4,
        shade_5: scheme_shade_5,
        custom_html: scheme_custom_html,
    };
    
    // Convert current_scheme to JSON string
    current_scheme = JSON.stringify(current_scheme);
    
    console.log(current_scheme);
    

    //————————————————————————————————————————————————————————//
    //—————————————————[ ELEMENT-VARIABLES ]——————————————————//
    //————————————————————————————————————————————————————————//
    // This collects the document's element IDs that will be
    // modified by the switching of schemes. If further elements
    // are added to the HTML file or HTML code that aren't part
    // of the profile pages and you want them to be modified
    // by schemes, add their IDs on a new line using the same
    // format as below. Use "All" if there are more than one of
    // the same element in the HTML file.

    // This ID is used for changing the icon seen in the scheme
    // button based off the active scheme.
    const icon_scheme = document.querySelector('#icon_scheme');

    // The below IDs are all used for changing the colors of
    // the non-profile page elements based off the active
    // scheme.
    const link = document.querySelector('link');
    const body = document.querySelector('body');
    const a = document.querySelectorAll('a');
    const button = document.querySelectorAll('button');
    const li = document.querySelectorAll('.menu li');
    const schemes_layer = document.querySelector('.schemes_layer');
    const loader_outer = document.querySelector('.loader_outer');
    const loader_inner = document.querySelector('.loader_inner');
    const loader_inner_color = document.querySelector('.loader_inner_color');
    const loading_image = document.querySelector('#loading_image')
    const loading_message = document.querySelectorAll('.loading_message');
    const loader_social_button = document.querySelectorAll('.loader_social_button')
    const icon = document.querySelectorAll('.icon')
    const banner = document.querySelectorAll('.banner')
    const top = document.querySelector('.top');
    const left = document.querySelector('.left');
    const left_inner = document.querySelector('.left_inner');
    const left_top = document.querySelector('.left_top');
    const left_top_list = document.querySelector('.left_top_list');
    const right = document.querySelector('.right');
    const bottom = document.querySelector('.bottom');
    const input_search = document.querySelectorAll('.input_search');
    const menu = document.querySelectorAll('.menu');
    const popup = document.querySelectorAll('.popup');
    const changelog = document.querySelector('#changelog');
    const popup_social_button = document.querySelectorAll('.popup_social_button')
    const side_button = document.querySelectorAll('.side_button');
    const top_button = document.querySelectorAll('.top_button');
    const bottom_button = document.querySelectorAll('.bottom_button');
    const control_buttons = document.querySelectorAll('.control_buttons');
    const notification_count = document.querySelectorAll('.notification_count');
    const modify_button = document.querySelectorAll('.modify_button');
    const schemes_manager = document.querySelector('.schemes_manager');
    const tag = document.querySelectorAll('.tag');
    const notification_dot = document.querySelectorAll('.notification_dot');
    const circle_outer = document.querySelectorAll('.circle_outer');
    const circle_inner = document.querySelectorAll('.circle_inner');
    const information_text = document.querySelectorAll('.information_text');
    const label_left = document.querySelectorAll('.label_left');
    const label_right = document.querySelectorAll('.label_right');
    const popup_prompt = document.querySelectorAll('.popup_prompt');
    const label_tab_popup_prompt = document.querySelectorAll('.label_tab_popup_prompt');
    const input_text_popup_prompt = document.querySelectorAll('.input_text_popup_prompt');
    const circular_image = document.querySelectorAll('.circular_image');
    const profile_universe = document.querySelectorAll('.profile_universe');
    const universe_image = document.querySelectorAll('#universe_image');
    
    //————————————————————————————————————————————————————————//
    //————————————————————[ SCHEME-APPLY ]————————————————————//
    //————————————————————————————————————————————————————————//
    // Here is where the scheme application process visually
    // starts using the above variables.

    // Sets the scheme icon to the scheme manager button.
    icon_scheme.src = `media/icons/feather_icons/${scheme_icon}.svg`;

    // Sets the scheme of the default elements.
    body.style.backgroundColor = scheme_shade_1;

    a.forEach((a) => {
        a.style.color = scheme_accent;
    });

    // Sets the scheme of the loader elements.
    loader_outer.style.backgroundColor = scheme_shade_1;
    loader_inner.style.border = `8px solid ${scheme_text}`;
    loader_inner_color.style.backgroundColor = scheme_text;


    loader_social_button.forEach((loader_social_button) => {
        loader_social_button.style.backgroundColor = scheme_shade_3;
        loader_social_button.addEventListener('mouseover', () => {
            loader_social_button.style.backgroundColor = scheme_shade_5;
        });
        loader_social_button.addEventListener('mouseout', () => {
            loader_social_button.style.backgroundColor = scheme_shade_3;
        });
    });

    // Checks if the text color is closer to white or black
    // and sets the icon brightness based on the results.
    // Closer to white is 0% and closer to black is 100%.
    const luminance = (parseInt(scheme_text.slice(1, 3), 16) * 299 + parseInt(scheme_text.slice(3, 5), 16) * 587 + parseInt(scheme_text.slice(5, 7), 16) * 114) / 1000;

    if (luminance >= 128) {
        // Text color is closer to white, set brightness to 100%
        icon.forEach((icon) => {
            icon.style.filter = 'brightness(100%)';
        });
    } else {
        // Text color is closer to black, set brightness to 0%
        icon.forEach((icon) => {
            icon.style.filter = 'brightness(0%)';
        });
    }

    // Checks if an image associated with the selected scheme
    // exists using the scheme ID to access the media directory
    // and if exists will update the overall application icon.
    // This is only compatible with official schemes or
    // developers who hold a privately forked version on their
    // device.

    // This removes "scheme_" from the beginning of the scheme
    // ID then uses the raw name to search the media directory
    // for an existing icon.

    const scheme_raw_name = scheme_id.replace(/^scheme_/, '');
    const loading_image_check = `media/schemes/${scheme_raw_name}/${scheme_raw_name}_app_icon.png`;

    const loading_image_new = new Image();
    loading_image_new.onload = function () {
        if (this.complete) {
            // If the image exists, apply it to loading_image.
            loading_image.src = loading_image_check;
            link.href = loading_image_check;
        }
        // Continue with the code, whether the image exists or not.
        callback(true);
    };
    loading_image_new.onerror = function () {
        // Continue with the code if the image doesn't exist.
        callback(false);
    };

    // Start loading the image.
    loading_image_new.src = loading_image_check;

    loading_message.forEach((loadingMessage) => {
        loadingMessage.style.color = scheme_text;
    });

    // Sets the scheme of the main elements.
    top.style.backgroundColor = scheme_shade_2;
    left.style.backgroundColor = scheme_shade_2;
    left_inner.style.backgroundColor = scheme_shade_3;
    left_top.style.backgroundColor = scheme_shade_2;
    left_top_list.style.backgroundColor = scheme_shade_3;
    right.style.backgroundColor = scheme_shade_2;
    bottom.style.backgroundColor = scheme_shade_2;

    // Sets the scheme of the input elements.
    input_search.forEach((input_search) => {
        input_search.style.backgroundColor = scheme_shade_1;
        input_search.addEventListener('mouseover', () => {
            input_search.style.backgroundColor = scheme_shade_4;
        });
        input_search.addEventListener('mouseout', () => {
            if (!input_search.matches(':focus')) {
                input_search.style.backgroundColor = scheme_shade_1;
            }
        });
        input_search.addEventListener('focus', () => {
            input_search.style.backgroundColor = scheme_shade_4;
        });
        input_search.addEventListener('blur', () => {
            input_search.style.backgroundColor = scheme_shade_1;
        });
    });

    input_text_popup_prompt.forEach((input_text_popup_prompt) => {
        input_text_popup_prompt.style.backgroundColor = scheme_shade_4;
        input_text_popup_prompt.addEventListener('mouseover', () => {
            input_text_popup_prompt.style.backgroundColor = scheme_shade_5;
        });
        input_text_popup_prompt.addEventListener('mouseout', () => {
            if (!input_text_popup_prompt.matches(':focus')) {
                input_text_popup_prompt.style.backgroundColor = scheme_shade_4;
            }
        });
        input_text_popup_prompt.addEventListener('focus', () => {
            input_text_popup_prompt.style.backgroundColor = scheme_shade_5;
        });
        input_text_popup_prompt.addEventListener('blur', () => {
            input_text_popup_prompt.style.backgroundColor = scheme_shade_4;
        });
    });

    // Sets the scheme of the menu elements.
    menu.forEach((menu) => {
        menu.style.backgroundColor = scheme_shade_1;
    });

    // Sets the scheme of the banner elements.
    banner.forEach((banner) => {
        banner.style.backgroundColor = scheme_accent;
    });

    // Sets the scheme of the pop-up elements.
    popup.forEach((popup) => {
        popup.style.backgroundColor = scheme_shade_2;
    });

    changelog.style.backgroundColor = scheme_shade_1;

    popup_social_button.forEach((popup_social_button) => {
        popup_social_button.style.backgroundColor = scheme_shade_1;
        popup_social_button.addEventListener('mouseover', () => {
            popup_social_button.style.backgroundColor = scheme_shade_4;
        });
        popup_social_button.addEventListener('mouseout', () => {
            popup_social_button.style.backgroundColor = scheme_shade_1;
        });
    });

    popup_prompt.forEach((popup_prompt) => {
        popup_prompt.style.backgroundColor = scheme_shade_2;
    });

    label_tab_popup_prompt.forEach((label_tab_popup_prompt) => {
        label_tab_popup_prompt.style.backgroundColor = scheme_shade_4;
    });


    // Sets the scheme of the button elements.
    button.forEach((button) => {
        button.style.backgroundColor = scheme_shade_1;
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = scheme_shade_4;
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = scheme_shade_1;
        });
    });

    side_button.forEach((side_button) => {
        side_button.style.backgroundColor = scheme_shade_1;
        side_button.addEventListener('mouseover', () => {
            side_button.style.backgroundColor = scheme_shade_4;
        });
        side_button.addEventListener('mouseout', () => {
            side_button.style.backgroundColor = scheme_shade_1;
        });
    });

    top_button.forEach((top_button) => {
        top_button.style.backgroundColor = scheme_shade_1;
        top_button.style.color = scheme_text;
        top_button.addEventListener('mouseover', () => {
            top_button.style.backgroundColor = scheme_shade_4;
        });
        top_button.addEventListener('mouseout', () => {
            top_button.style.backgroundColor = scheme_shade_1;
        });
    });

    bottom_button.forEach((bottom_button) => {
        if (bottom_button.id !== 'premium_button') {
            bottom_button.style.backgroundColor = scheme_shade_2;
        }
    });

    control_buttons.forEach((control_buttons) => {
        if (control_buttons.id !== 'app_close' && control_buttons.id !== 'app_minimize' && control_buttons.id !== 'app_hide') {
            control_buttons.style.backgroundColor = scheme_shade_1;
            control_buttons.addEventListener('mouseover', () => {
                control_buttons.style.backgroundColor = scheme_shade_4;
            });
            control_buttons.addEventListener('mouseout', () => {
                control_buttons.style.backgroundColor = scheme_shade_1;
            });
        }
    });

    notification_count.forEach((notification_count) => {
        notification_count.style.color = scheme_text;
    });

    // Sets the scheme of the app control buttons.
    control_buttons.forEach((control_buttons) => {
        if (control_buttons.id == 'app_close' || control_buttons.id == 'app_minimize' || control_buttons.id == 'app_hide') {
            control_buttons.style.backgroundColor = scheme_accent;     
        }
    });

    modify_button.forEach((modify_button) => {
        modify_button.style.backgroundColor = scheme_accent;
    });

    // Sets the scheme of the scheme manager elements.
    schemes_manager.style.backgroundColor = scheme_shade_2;
    
    // Sets the scheme of the additional elements.
    tag.forEach((tag) => {
        tag.style.backgroundColor = scheme_accent;
    });

    notification_dot.forEach((notification_dot) => {
        notification_dot.style.backgroundColor = scheme_accent;
    });

    circle_outer.forEach((circle_outer) => {
        circle_outer.style.border = `50px solid ${scheme_shade_4}`;
    });

    circle_inner.forEach((circle_inner) => {
        circle_inner.style.backgroundColor = scheme_shade_5;
    });

    information_text.forEach((information_text) => {
        information_text.style.backgroundColor = scheme_shade_1;
        information_text.style.color = scheme_text;
    });

    // Sets the scheme of the label elements.
    label_left.forEach((label_left) => {
        label_left.style.backgroundColor = scheme_accent;
    });

    label_right.forEach((label_right) => {
        label_right.style.backgroundColor = scheme_accent;
    });

    // Sets the scheme of the menu elements.
    li.forEach((li) => {
        li.style.backgroundColor = scheme_shade_1;
        li.style.color = scheme_text;
        li.addEventListener('mouseover', () => {
            li.style.backgroundColor = scheme_accent;
        });
        li.addEventListener('mouseout', () => {
            li.style.backgroundColor = scheme_shade_1;
        });
    });

    // Sets the scheme of profile elements.
    profile_universe.forEach((profile_universe) => {
        profile_universe.style.backgroundColor = scheme_shade_2;
    });

    universe_image.forEach((universe_image) => {
        universe_image.style.border = `3px solid ${scheme_accent}`;
    });

    // Sets the scheme of additional elements.
    circular_image.forEach((circular_image) => {
        circular_image.style.backgroundColor = scheme_shade_4;
        circular_image.style.border = `3px solid ${scheme_accent}`;
        circular_image.style.color = scheme_text;
        circular_image.addEventListener('mouseover', () => {
            circular_image.style.backgroundColor = scheme_shade_5;
        });
        circular_image.addEventListener('mouseout', () => {
            circular_image.style.backgroundColor = scheme_shade_4;
        });
    });

    // Sets and clears the scheme custom html code if any.
    let schemes_layer_html = ``;
    schemes_layer_html = `
        ${scheme_custom_html}
    `;
    schemes_layer.innerHTML = schemes_layer_html;
}

//————————————————————————————————————————————————————————//
//——————————————————————[ SCHEMES ]———————————————————————//
//————————————————————————————————————————————————————————//
// Here you will find all the registered schemes. Each and
// every scheme registered in here will appear in the
// scheme manager. If for any reason it doesn't, then
// scheme was improperly registered. All schemes will load
// in the registration order. If you wish to reorder them,
// simply move them around.
//
// When registering a new scheme, copy the following piece
// of code below and paste it where it says to paste at
// the bottom of the registered schemes.
//
// {
//     "name": "NAME",
//     "id": "scheme_NAME",
//     "author": "YOUR_USERNAME",
//     "version": "v5.0.054", (match current app version)
//     "tag": "TYPE", (put either RELEASE, BETA, or PREVIEW)
//     "icon": "ICON_NAME", (https://feathericons.com/)
//     "text": "HEX_CODE",
//     "accent": "HEX_CODE",
//     "shade_1": "HEX_CODE",
//     "shade_2": "HEX_CODE",
//     "shade_3": "HEX_CODE",
//     "shade_4": "HEX_CODE",
//     "shade_5": "HEX_CODE",
//     "custom_html": "<div></div>", (experienced users only)
// },
//
// When customizing your scheme, replace all in capital
// letters with your own custom value based on the text.
// Do not include the parenthesis outside of " ", ".

// This JSON contains the list of registered schemes.
const schemes = [
    {
        // Official dark mode
        "name": "Midnight",
        "id": "scheme_midnight",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "BETA",
        "icon": "moon",
        "text": "#ffffff",
        "accent": "#2A4EDE",
        "shade_1": "#14161E",
        "shade_2": "#1C1F2A",
        "shade_3": "#222635",
        "shade_4": "#303548",
        "shade_5": "#394057",
        "custom_html": "<div></div>"
    },
    {
        // Official light mode
        "name": "Daylight",
        "id": "scheme_daylight",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "PREVIEW",
        "icon": "sun",
        "text": "#000000",
        "accent": "#2A4EDE",
        "shade_1": "#FFFFFF",
        "shade_2": "#E0E0E0",
        "shade_3": "#CCCCCC",
        "shade_4": "#B0B0B0",
        "shade_5": "#A0A0A0",
        "custom_html": "<div></div>"
    },
    {
        // Original classic scheme
        "name": "Classic",
        "id": "scheme_classic",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "PREVIEW",
        "icon": "watch",
        "text": "#ffffff",
        "accent": "#bd3332",
        "shade_1": "#1b1f28",
        "shade_2": "#bd3332",
        "shade_3": "#333a4d",
        "shade_4": "#596379",
        "shade_5": "#768099",
        "custom_html": "<div></div>"
    },    
    {
        // Premium scheme
        "name": "Coffee",
        "id": "scheme_premium",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "BETA",
        "icon": "coffee",
        "text": "#ffffff",
        "accent": "#D4A20C",
        "shade_1": "#0A0903",
        "shade_2": "#1E1D1A",
        "shade_3": "#2D2A23",
        "shade_4": "#3C372D",
        "shade_5": "#4D4635",
        "custom_html": "<div></div>"
    },
    {
        // Anime scheme
        "name": "Kawaii",
        "id": "scheme_kawaii",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "PREVIEW",
        "icon": "mail",
        "text": "#ffffff",
        "accent": "#FF99CC",
        "shade_1": "#FFEBF1",
        "shade_2": "#FFD6E4",
        "shade_3": "#FFC0D7",
        "shade_4": "#FFABCA",
        "shade_5": "#FF95BD",
        "custom_html": "<div></div>"
    },
    {
        // Seasonal October scheme
        "name": "Spooky",
        "id": "scheme_spooky",
        "author": "OpenProfile",
        "version": "v5.0.058",
        "tag": "BETA",
        "icon": "cloud-lightning",
        "text": "#ffffff",
        "accent": "#F77117",
        "shade_1": "#100C1C",
        "shade_2": "#210F2B",
        "shade_3": "#2D1A37",
        "shade_4": "#392245",
        "shade_5": "#472B55",
        "custom_html": `
            <div class="seasonal_spooky" style="display: block;">
                <img style="position: fixed; left: 0px; top: 0px; scale: 0.1; transform-origin: top left; z-index: 8000; opacity: 0.85; pointer-events: none;" src="media/images/openprofile/spooky/cobweb.png">
                <img style="position: fixed; right: -475px; top: 0px; scale: 0.1; transform: scaleX(-1); transform-origin: top left; z-index: 8000; opacity: 0.85; pointer-events: none;" src="media/images/openprofile/spooky/cobweb.png">
            </div>
        `
    },
    {
        // Lunar scheme
        "name": "Lunar",
        "id": "scheme_lunar",
        "author": "OpenProfile",
        "version": "v5.0.075",
        "tag": "PREVIEW",
        "icon": "wind",
        "text": "#ffffff",
        "accent": "#f2b932",
        "shade_1": "#1B0303",
        "shade_2": "#4f0d0d",
        "shade_3": "#6a0f0f",
        "shade_4": "#851717",
        "shade_5": "#9d1818",
        "custom_html": "<div></div>"
    },
    // When registering a new scheme, position your 
    // typing indicator above this comment to the right
    // of the comma, press enter, then paste the scheme
    // template.
];

//————————————————————————————————————————————————————————//
//————————————————————[ SCHEME-LOAD ]—————————————————————//
//————————————————————————————————————————————————————————//
// This function is made to be used externally to load the
// locally saved scheme on app reload. Each time a scheme
// is applied it will overwrite the previous save.
function load_local_scheme() {
    const loaded_scheme_json = localStorage.getItem('local_selected_scheme');
    console.log("Locally saved scheme applied!");

    if (loaded_scheme_json) {
        const loaded_scheme = JSON.parse(loaded_scheme_json);
        scheme_apply(loaded_scheme.id, loaded_scheme.icon, loaded_scheme.text, loaded_scheme.accent, loaded_scheme.shade_1, loaded_scheme.shade_2, loaded_scheme.shade_3, loaded_scheme.shade_4, loaded_scheme.shade_5, loaded_scheme.custom_html);
    }
}

// This function is made to be used externally to load the
// active scheme for dynamic elements. Each time a scheme
// is applied it will NOT overwrite the previous save.
function load_current_scheme() {
    const loaded_scheme_json = current_scheme

    if (loaded_scheme_json) {
        const loaded_scheme = JSON.parse(loaded_scheme_json);
        scheme_apply(loaded_scheme.id, loaded_scheme.icon, loaded_scheme.text, loaded_scheme.accent, loaded_scheme.shade_1, loaded_scheme.shade_2, loaded_scheme.shade_3, loaded_scheme.shade_4, loaded_scheme.shade_5, loaded_scheme.custom_html);
    }
}

// This function is made to be used externally to apply an
// official scheme via ID. This function will NOT overwrite
// the local save.
function load_specific_scheme(schemeId) {
    const loaded_specific_scheme = schemes.find((scheme) => scheme.id === schemeId);

    if (loaded_specific_scheme) {
        scheme_apply(loaded_specific_scheme.id, loaded_specific_scheme.icon, loaded_specific_scheme.text, loaded_specific_scheme.accent, loaded_specific_scheme.shade_1, loaded_specific_scheme.shade_2, loaded_specific_scheme.shade_3, loaded_specific_scheme.shade_4, loaded_specific_scheme.shade_5, loaded_specific_scheme.custom_html);

    } else {
        console.log(`Scheme with ID ${schemeId} not found.`);
    }
}

// YOU HAVE REACHED THE END OF THE SCRIPT! IF YOU BELIEVE
// ERRORS ARE PRESENT, PLEASE REPORT IT TO US OR CONTRIBUTE
// A FIX TO IT. THANK YOU!
//
// GITHUB: https://github.com/OpenProfileApp/OP5-Preview