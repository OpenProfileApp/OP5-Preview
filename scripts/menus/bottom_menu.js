// This loads the script on page load so it's ready to use.

let selected_bottom_button = null;

document.addEventListener("DOMContentLoaded", function () {

    //————————————————————————————————————————————————————————//
    //———————————————————[ MAIN-VARIABLES ]———————————————————//
    //————————————————————————————————————————————————————————//
    const bottom_buttons = document.querySelectorAll('.bottom_button');
    const accent = 'YourAccentColor'; // Define your accent color here

    bottom_buttons.forEach((button) => {
        button.addEventListener('click', function () {
            if (selected_bottom_button === button) {
                // Deselect the button
                button.style.backgroundColor = "initial"; // Restore the original background color
                selected_bottom_button = null;
            } else {
                // Deselect the previously selected button
                if (selected_bottom_button) {
                    selected_bottom_button.style.backgroundColor = "initial"; // Restore the original background color
                }
                // Select the clicked button
                button.style.backgroundColor = "#2a4ede"; // Change the background color
                load_individual_element_scheme(button.id, "accent");
                selected_bottom_button = button;

                // Log the id of the clicked button
                console.log("Clicked button id: " + button.id);
            }
        });
    });
});