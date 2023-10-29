//————————————————————————————————————————————————————————//
//——————————————[ UNIVERSE-MANAGER-SCRIPT ]———————————————//
//————————————————————————————————————————————————————————//
// The universe manager script enables creation, modifying,
// and deletion of universes. Universes are home to a set
// of profiles that are lorely associated with the universe.

// This is where the universes are stored locally.
let universes = JSON.parse(localStorage.getItem("op5-universes")) || [];

// This is the current selected universe variable.
let selected_universe = '';
let selected_universe_previous = ""

//————————————————————————————————————————————————————————//
//——————————————————[ CREATE-UNIVERSE ]———————————————————//
//————————————————————————————————————————————————————————//
// This function creates a universe based on the author's
// inputted information. A pop-up will appear which will
// ask the author to type the universe's info in the input
// boxes which will determine the outcomes of it's details. 

// Get the "add_universe" button element by its id
const addUniverseButton = document.getElementById("add_universe");

// Create universe function trigger.
addUniverseButton.addEventListener("click", create_universe);
function create_universe() {
    //history.pushState(null, "", window.location.origin + "/universe/create");
    create_universe_popup();
    load_current_scheme();
}

function create_universe_popup() {
    const popup_universe_manager = document.getElementById("popup_universe_manager");

    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    // Once the create universe pop-up has been opened the
    // following code will be displayed within the
    // (class="popup_universe_manager") element in the HTML file.
    const popupHTML = `
        <div class="popup_background" id="create_universe_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt">
                <img class="icon" id="create_universe_close" src="media/icons/feather_icons/x.svg" style="position: absolute; cursor: pointer; top: 0px; right: 0px; scale: 0.30; margin: 10px; transform-origin: top right; z-index: 3000;">
                <input type="file" id="universe_image_input" accept="image/*" style="display: none;">
                <label for="universe_image_input">
                    <div class="circular_image" style="top: 30%; z-index: 4999;">
                        <img id="universe_image_apply" src="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; cursor: pointer; z-index: 30;">
                        <img id="universe_image_placeholder" src="media/icons/feather_icons/plus-circle.svg" style="opacity: 0.10;">
                    </div>
                </label>
                <div class="row" style="top: 59%; left: calc(50% - 85px); transform: translate(-50%);">
                    <div class="group" id="universe_name_group" style="top: 0px; left: 0px; z-index: 17;">
                        <div class="label_tab_popup_prompt" id="universe_name_label_tab">Name</div>
                        <div><input type="text" class="input_text_popup_prompt" id="universe_name" style="width: 175px; text-align: center;" autocomplete="off" autocorrect="off" placeholder="What is the universe's name?"></div>
                    </div>
                </div>
                <div class="information_text" id="information_text_universe_create" style="top: 70%; font-size: 9px; z-index: 4999;">What is the name and image of the universe you are creating? Both should represent the ones that the characters of that universe recognize it as. If none, what is the name of the franchise you want to create character profiles for?</div>
                <button onclick="create_universe_apply()" style="top: 180px; left: 0px; z-index: 4999;">Create</button>
            </div>
        </div>
    `;

    // This sets the html code to the popup_universe_manager
    // class.
    popup_universe_manager.innerHTML = popupHTML;

    // This make the popup visible.
    const popup = document.getElementById("create_universe_popup");
    popup.style.display = "block";

    // This defines the variables needed to make the code
    // work.
    const create_universe_close = document.getElementById("create_universe_close");
    const universe_image_input = document.getElementById("universe_image_input");
    const universe_image_apply = document.getElementById("universe_image_apply");
    const universe_image_placeholder = document.getElementById("universe_image_placeholder");

    // If all imputted data is valid when pressing the
    // "Create" button then this will trigger the
    // second function which is used to register the
    // universe to the database.
    create_universe_close.addEventListener("click", function() {
        const create_universe_popup = document.getElementById("create_universe_popup");
        //history.pushState(null, "", window.location.origin);
        create_universe_popup.style.display = "none";
    });

    // This sets the imported universe image.
    universe_image_input.addEventListener("change", function() {
        const selectedFile = universe_image_input.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                universe_image_apply.src = event.target.result;
                // This hides the placeholder "plus" icon.
                universe_image_placeholder.style.display = "none";
            };
            reader.readAsDataURL(selectedFile);
        }
    });
}

// This registers the new universe into the database.
function create_universe_apply() {
    const universeName = document.getElementById("universe_name").value;
    const universeImageURL = document.getElementById("universe_image_apply").src;

    // If the data entries are invalid, show an error text.
    if (!universeName) {
        alert("Please enter a universe name.");
        return;
    }

    // This checks if an image has been uploaded, else
    // use the default image. What ever domain is being
    // used to host OpenProfile on, adding it to this
    // list is REQUIRED to detect an invalid image.
    if (universeImageURL === "http://localhost:3000/" || universeImageURL === "https://op5.avatarkage.com/" || universeImageURL === "https://preview.openprofile.app/" || universeImageURL === "https://beta.openprofile.app/" || universeImageURL === "https://openprofile.app/")  {
        alert("Please select an image.");
        return;
    }
    
    const universe_id = generate_global_id();

    // This is the data that gets registered.
    const newuniverse = {
        name: universeName,
        url: universeImageURL,
        id: universe_id,
        profiles: [],
    };

    universes.push(newuniverse);
    // This is where the data gets registered.
    localStorage.setItem("op5-universes", JSON.stringify(universes));
    update_universe_list();

    // This hides the popup after creating the
    // universe.
    //history.pushState(null, "", window.location.origin);
    const popup = document.getElementById("create_universe_popup");
    popup.style.display = "none";

    // Clear the input fields
    document.getElementById("universe_name").value = "";
    document.getElementById("universe_image_apply").src = "";
}

//————————————————————————————————————————————————————————//
//——————————————————[ MODIFY-UNIVERSE ]———————————————————//
//————————————————————————————————————————————————————————//
// This function is used to modify the universe based on
// the author's inputted information. A pop-up will appear
// which will ask the author to type the universe's info in
// the input boxes which will determine the outcomes of
// it's details. 

// Modify universe function trigger.
function modify_universe(index) {
    modify_universe_popup(index);
    load_current_scheme();
    //history.pushState(null, "", window.location.origin + `/universe/${universe.id}/edit`);
}

function modify_universe_popup(index) {
    const popup_universe_manager = document.getElementById("popup_universe_manager");
    const universe = universes[index];

    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    // Once the modify universe pop-up has been opened the
    // following code will be displayed within the
    // (class="popup_universe_manager") element in the HTML file.
    const popupHTML = `
        <div class="popup_background" id="modify_universe_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt">
                <img class="icon" id="modify_universe_close" src="media/icons/feather_icons/x.svg" style="position: absolute; cursor: pointer; top: 0px; right: 0px; scale: 0.30; margin: 10px; transform-origin: top right; z-index: 3000;">
                <img class="icon" id="universe_delete" onclick="delete_universe(${index})" src="media/icons/feather_icons/trash-2.svg" style="position: absolute; cursor: pointer; top: 0px; left: -68px; scale: 0.30; margin: 10px; transform-origin: top right; z-index: 3000;">
                <input type="file" id="universe_image_input" accept="image/*" style="display: none;">
                <label for="universe_image_input">
                    <div class="circular_image" style="top: 30%; z-index: 4999; border: 3px solid #2a4ede;">
                        <img id="universe_image_apply" src="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; cursor: pointer; z-index: 30;">
                    </div>
                </label>
                <div class="row" style="top: 59%; left: calc(50% - 85px); transform: translate(-50%);">
                    <div class="group" id="universe_name_group" style="top: 0px; left: 0px; z-index: 17;">
                        <div class="label_tab_popup_prompt" id="universe_name_label_tab">Name</div>
                        <div><input type="text" class="input_text_popup_prompt" id="universe_name" style="width: 175px; text-align: center;" autocomplete="off" autocorrect="off" placeholder="What is the universe's name?"></div>
                    </div>
                </div>
                <div class="information_text" id="information_text_universe_create" style="top: 70%; font-size: 9px; z-index: 4999;">What is the name and image of the universe you are modifying? Both should represent the ones that the characters of that universe recognize it as. If none, what is the name of the franchise you want to create character profiles for?</div>
                <button onclick="modify_universe_apply(${index})" style="top: 180px; left: 0px; z-index: 4999;">Save</button>
            </div>
        </div>
    `;

    // This sets the html code to the popup_universe_manager
    // class.
    popup_universe_manager.innerHTML = popupHTML;

    document.getElementById("universe_name").value = universe.name;
    document.getElementById("universe_image_apply").src = universe.url;


    // This make the popup visible.
    const popup = document.getElementById("modify_universe_popup");
    popup.style.display = "block";

    // This defines the variables needed to make the code
    // work.
    const modify_universe_close = document.getElementById("modify_universe_close");
    const universe_image_input = document.getElementById("universe_image_input");
    const universe_image_apply = document.getElementById("universe_image_apply");

    // This will close the pop-up when pressing on X.
    modify_universe_close.addEventListener("click", function() {
        const modify_universe_popup = document.getElementById("modify_universe_popup");
        modify_universe_popup.style.display = "none";
        //history.pushState(null, "", window.location.origin + `/universe/${universe.id}`);
    });

    // This sets the imported universe image.
    universe_image_input.addEventListener("change", function() {
        const selectedFile = universe_image_input.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                universe_image_apply.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    });
}

// This registers the new universe into the database.
function modify_universe_apply(index) {
    const universeName = document.getElementById("universe_name").value;
    const universeImageURL = document.getElementById("universe_image_apply").src;
    const universe = universes[index];
    selected_universe_previous = index

    // If the data entries are invalid, show an error text.
    if (!universeName) {
        alert("Please enter a universe name.");
        return;
    }

    // This checks if an image has been uploaded, else
    // use the default image. What ever domain is being
    // used to host OpenProfile on, adding it to this
    // list is REQUIRED to detect an invalid image.
    if (universeImageURL === "http://localhost:3000/" || universeImageURL === "https://op5.avatarkage.com/" || universeImageURL === "https://preview.openprofile.app/" || universeImageURL === "https://beta.openprofile.app/" || universeImageURL === "https://openprofile.app/")  {
        alert("Please select an image.");
        return;
    }

    // Update the values in the universe object.
    universe.name = universeName;
    universe.url = universeImageURL;

    // This hides the popup after saving the universe.
    const popup = document.getElementById("modify_universe_popup");
    popup.style.display = "none";
    //history.pushState(null, "", window.location.origin + `/universe/${universe.id}`);

    localStorage.setItem("op5-universes", JSON.stringify(universes));
    update_universe_list();
}

//————————————————————————————————————————————————————————//
//——————————————————[ DELETE-UNIVERSE ]———————————————————//
//————————————————————————————————————————————————————————//
// This function is used to delete an existing universe.
function delete_universe(index) {
    const universe = universes[index];
    const popup_universe_manager_more = document.getElementById("popup_universe_manager_more");

    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    // Once the delete universe pop-up has been opened the
    // following code will be displayed within the
    // (class="popup_universe_manager_more") element in the
    // HTML file.    
    const popupHTML = `
        <div class="popup_background" id="delete_universe_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt" style="top: 55%; height: 150px; width: 375px;">
                <img class="icon" id="delete_universe_close" src="media/icons/feather_icons/x.svg" style="position: absolute; cursor: pointer; top: 0px; right: 0px; scale: 0.30; margin: 10px; transform-origin: top right; z-index: 3000;">
                </label>
                <div class="row" style="top: 49%; left: calc(50% - 85px); transform: translate(-50%);">
                    <div class="group" id="universe_name_group" style="top: 0px; left: 0px; z-index: 17;">
                        <div class="label_tab_popup_prompt" id="universe_name_label_tab">Confirm Delete</div>
                        <div><input type="text" class="input_text_popup_prompt" id="confirm_universe_name" style="width: 175px; text-align: center;" autocomplete="off" autocorrect="off" placeholder="${universe.name}"></div>
                    </div>
                </div>
                <div class="information_text" id="information_text_universe_create" style="top: 10%; font-size: 9px; z-index: 4999;">Are you sure you want to delete this universe? Deletion is permanent and cannot be undone. To proceed, type the name of the universe below and transfer all existing profiles.</div>
                <button onclick="confirm_delete_universe(${index})" style="top: 60px; left: 0px; z-index: 4999;">Delete</button>
            </div>
        </div>
    `;

    // This sets the HTML code to the popup_universe_manager
    // class.
    popup_universe_manager_more.innerHTML = popupHTML;
    load_current_scheme();

    // This will close the pop-up when pressing on X.
    delete_universe_close.addEventListener("click", function() {
        const delete_universe_popup = document.getElementById("delete_universe_popup");
        delete_universe_popup.style.display = "none";
    });
}

// This function verifies that the user wishes
// to delete the universe. If the textbox input
// text is the same as the universe name and
// there are no profiles in the universe then it
// becomes deletable.
function confirm_delete_universe(index) {
    const universe = universes[index];
    const universeName = universe.name;
    const userInput = document.getElementById("confirm_universe_name").value;

    // This performs the checks.
    if (userInput === universeName) {
        universes.splice(index, 1);
        localStorage.setItem("op5-universes", JSON.stringify(universes));
        selected_universe = -1;
        update_universe_list();
        updateProfileList(null);

        // This hides the popup after saving the universe.
        const modify_popup = document.getElementById("modify_universe_popup");
        const delete_popup = document.getElementById("delete_universe_popup");
        popup_universe_manager_more.innerHTML = "";
        popup_universe_manager.innerHTML = "";
        modify_popup.style.display = "none";
        delete_popup.style.display = "none";
        //history.pushState(null, "", window.location.origin);
        universe_delete_message();
    } else {
        alert("Universe name does not match. Deletion canceled.");
    }
}

// When the unierse has been deleted, this will pop-up.
function universe_delete_message() {
    const popup_universe_manager = document.getElementById("popup_universe_manager");

    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    // Once the delete universe message pop-up has been
    // triggered the following code will be displayed within the
    // (class="popup_universe_manager") element in the HTML file.
    const popupHTML = `
        <div class="popup_background" id="delete_universe_message_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt" style="top: 55%; left: calc(50% + 70px); height: 75px; width: 250px;">
                <div class="information_text" id="information_text_universe_create" style="top: 15%; font-size: 9px; width: 150px; z-index: 4999;">The universe has been deleted.</div>
                <button id="delete_universe_message_close" style="top: 20px; left: 0px; z-index: 4999;">Ok</button>
            </div>
        </div>
    `;

    // This sets the HTML code to the popup_universe_manager
    // class.
    popup_universe_manager.innerHTML = popupHTML;
    load_current_scheme();

    // This will close the pop-up when pressing on the button.
    delete_universe_message_close.addEventListener("click", function() {
        const delete_universe_message_popup = document.getElementById("delete_universe_message_popup");
        delete_universe_message_popup.style.display = "none";
    });
}

// When the universe has been deleted, this will pop up a message.
function universe_delete_message() {
    const popup_universe_manager = document.getElementById("popup_universe_manager");

    // Create the universe delete message pop-up.
    const popupHTML = `
        <div class="popup_background" id="delete_universe_message_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt" style="top: 55%; left: calc(50% + 70px); height: 75px; width: 250px;">
                <div class="information_text" id="information_text_universe_create" style="top: 15%; font-size: 9px; width: 150px; z-index: 4999;">The universe has been deleted.</div>
                <button id="delete_universe_message_close" style="top: 20px; left: 0px; z-index: 4999;">Ok</button>
            </div>
        </div>
    `;

    // Set the HTML code to the popup_universe_manager element.
    popup_universe_manager.innerHTML = popupHTML;
    load_current_scheme();

    // Add an event listener to close the message pop-up when pressing the button.
    const delete_universe_message_close = document.getElementById("delete_universe_message_close");
    delete_universe_message_close.addEventListener("click", function() {
        const delete_universe_message_popup = document.getElementById("delete_universe_message_popup");
        delete_universe_message_popup.style.display = "none";
    });
}

//————————————————————————————————————————————————————————//
//——————————————————[ SELECT-UNIVERSE ]———————————————————//
//————————————————————————————————————————————————————————//
// This function is used to select an existing universe.
function select_universe(index) {
    // Remove the .selected-universe class from previously selected universe.
    const previousSelectedUniverse = document.querySelector(".profile_universe.selected-universe");
    if (previousSelectedUniverse) {
        previousSelectedUniverse.classList.remove("selected-universe");
    }

    selected_universe = index;
    localStorage.setItem("selected_universe", selected_universe.toString());
    const universe = universes[index];
    if (selected_universe !== selected_universe_previous) {
    //history.pushState(null, "", window.location.origin + `/universe/${universe.id}`);
    }

    // Add the .selected-universe class to the newly selected universe.
    const selectedUniverseElement = document.querySelector(`.profile_universe:nth-child(${index + 1})`);
    if (selectedUniverseElement) {
        selectedUniverseElement.classList.add("selected-universe");
    }

    // This updates the profiles list.
    updateProfileList(universe);
}

//————————————————————————————————————————————————————————//
//————————————————[ UPDATE-UNIVERSE-LIST ]————————————————//
//————————————————————————————————————————————————————————//
// This function is used to select an existing universe.
function update_universe_list() {
    const universe_list = document.getElementById("universe_list");
    //————————————————————————————————————————————————————————//
    //—————————————————————[ HTML-CODE ]——————————————————————//
    //————————————————————————————————————————————————————————//
    // Once the delete universe message pop-up has been
    // triggered the following code will be displayed within the
    // (class="popup_universe_manager") element in the HTML file.
    universe_list.innerHTML = universes.map((universe, index) => `
                <div class="profile_universe" id="" title="${universe.name || '<i>Unknown Universe</i>'} (${universe.id})" onclick="select_universe(${index})";>
                    <img id="universe_image" src="${universe.url || 'media/images/openprofile/preview/op_preview_512.jpeg'}" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; cursor: pointer; border-radius: 50%; border: 3px solid #2a4ede;">
                    <div class="modify_button" style="scale: 0.35;" onclick="modify_universe(${index})" title="Edit Universe">
                        <img src="media/icons/feather_icons/edit-2.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                    </div>
                    <div class="tag" id="" style="scale: 0.8; top: 39px;">PREVIEW</div>
                </div>
    `).join("");
    load_current_scheme();
}

// This loads in the universe.
update_universe_list();

// Other universe-related functions
// ADD A WAY TO TRANSFER UNIVERSES
// Add a way to promote universes
// Add stories to universes

// YOU HAVE REACHED THE END OF THE SCRIPT! IF YOU BELIEVE
// ERRORS ARE PRESENT, PLEASE REPORT IT TO US OR CONTRIBUTE
// A FIX TO IT. THANK YOU!
//
// GITHUB: https://github.com/OpenProfileApp/OP5-Preview




// Variable to store the index of the right-clicked universe
let right_clicked_index = -1;

// Define universeMenu
const universeMenu = document.getElementById("universe_menu"); // Your universe menu element

// Add a contextmenu event listener to the entire page for right-clicks
document.addEventListener("contextmenu", (e) => {
    const clickedProfileUniverse = e.target.closest(".profile_universe");
    if (clickedProfileUniverse) {
        e.preventDefault();
        right_clicked_index = Array.from(clickedProfileUniverse.parentNode.children).indexOf(clickedProfileUniverse);

        // Define the menu content based on the clicked universe
        const menuContent = `
            <ul>
                <li class="menu_option" id="universe_create_story">Create Story</li>
                    <img class="icon" id="universe_create_story_icon" src="media/icons/feather_icons/plus-circle.svg" style="position: absolute; top: 0px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                <li class="menu_option" id="universe_create_profile" onclick="addProfile()">Create Profile</li>
                    <img class="icon" id="universe_create_profile_icon" src="media/icons/feather_icons/plus.svg" style="position: absolute; top: 21px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                <li class="menu_option" id="universe_modify" onclick="modify_universe(${right_clicked_index})">Edit Universe</li>
                    <img class="icon" id="universe_modify_icon" src="media/icons/feather_icons/edit-2.svg" style="position: absolute; top: 42px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                <li class="menu_option" id="universe_delete" onclick="delete_universe(${right_clicked_index})">Delete Universe</li>
                    <img class="icon" id="universe_delete_icon" src="media/icons/feather_icons/trash-2.svg" style="position: absolute; top: 63px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                <hr style="opacity: 0.15; width: 85%">
                <li class="menu_option" id="universe_moderate" onclick="ADD MODERATE HERE">Moderate Universe</li>
                    <img class="icon" id="universe_moderate_icon" src="media/icons/feather_icons/shield.svg" style="position: absolute; top: 94px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                <li class="menu_option" id="universe_verify" onclick="ADD VERIFY HERE">Verify Universe</li>
                    <img class="icon" id="universe_verify_icon" src="media/icons/feather_icons/check-circle.svg" style="position: absolute; top: 115px; left: 0px; scale: 0.11; transform-origin: top left; margin: 9px; z-index: 9001; pointer-events: none;">
                </ul>
            <div class="tag" style="scale: 0.7; top: 136px; left: 50px;">PREVIEW</div>
        `;

        const posX = e.clientX;
        const posY = e.clientY;

        // Set the menu options based on the mouse's location and clicked universe
        universeMenu.style.display = "block";
        universeMenu.style.left = posX + "px";
        universeMenu.style.top = posY + "px";
        universeMenu.innerHTML = menuContent;
        load_current_scheme();
        
        // Add a global event listener to close the context menu on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                universeMenu.style.display = "none";
            }
        });

        // Add a global event listener to close the context menu when clicking elsewhere
        document.addEventListener("click", (e) => {
            if (universeMenu.style.display === "block" && !universeMenu.contains(e.target)) {
                universeMenu.style.display = "none";
            }
        });

        // Event listener to close the context menu when scrolling
        window.addEventListener("scroll", () => {
            universeMenu.style.display = "none";
        });

    } else {
        universeMenu.style.display = "none"; // Hide the context menu if clicked outside
        right_clicked_index = -1; // Reset the index
    }
});