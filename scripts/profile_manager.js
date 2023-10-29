let selectedProfileIndex = -1;
let currentProfileData = {};

window.addEventListener("load", () => {
    clearProfileForm();
    const edit = document.getElementById('page_1');
    edit.style.opacity = "1"
});

function addProfile() {
    if (selected_universe < 0 || selected_universe >= universes.length) {
        alert("Please select a universe to add a profile.");
        return;
    }

    // Use a window prompt to get the profile name and profile URL from the user
    const profileName = prompt("What name is this character reconized by?");
    
    // Check if the user canceled or didn't enter a name
    if (profileName === null || profileName.trim() === "") {
        alert("Please enter a valid profile name.");
        return;
    }

    const profileURL = prompt("What image is this character reconized by?");

    const cardCreator = prompt("Who is the character's original creator?");

    const cardDescription = prompt("Give a brief description of the character:");

    const cardMainTag = prompt("Give this character a primary tag:");

    const pageOuterElements = document.getElementsByClassName('page_outer');
    const pageInnerElements = document.getElementsByClassName('page_inner');
    const inputTextElements = document.getElementsByClassName('input_text');

    // Initialize a variable to store the background color
    let cardBackground = '';
    let cardAccent = '';
    let cardAccentHover = '';

    // Check if there are elements with the class name 'page_outer'
    if (pageOuterElements.length > 0) {
        // Get the first element's backgroundColor style property
        cardBackground = window.getComputedStyle(pageOuterElements[0]).backgroundColor;
    }

    if (pageInnerElements.length > 0) {
        // Get the first element's backgroundColor style property
        cardAccent = window.getComputedStyle(pageInnerElements[0]).backgroundColor;
    }

    if (inputTextElements.length > 0) {
        // Get the first element's backgroundColor style property
        cardAccentHover = window.getComputedStyle(inputTextElements[0]).backgroundColor;
    }

    const profileID = generate_global_id();

    const newProfile = {
        card_background: cardBackground,
        card_accent: cardAccent,
        card_accent_hover: cardAccentHover,
        card_creator: cardCreator,
        card_description: cardDescription,
        card_tag_1: cardMainTag,
        card_id: profileID,

        name: profileName,
        image: profileURL,
        version: "v1.0.0",
        // page_author_1
        page_author_1: document.getElementById("page_author_1").value,
        // written_date_1
        written_date_1: document.getElementById('written_date_1').value,
        // full_name
        full_name: document.getElementById("full_name").value,
        full_name_verified_source_icon: document.getElementById("full_name_verified_source_icon").href,
        full_name_time: document.getElementById("full_name_time").textContent,
        full_name_highlighted: document.getElementById("full_name").highlighted || false,
        full_name_linked: document.getElementById("full_name").linked || false,
        full_name_locked: document.getElementById("full_name").locked || false,
        full_name_disabled: document.getElementById("full_name").disabled || false,
        full_name_comments: "NOT YET AVAILABLE",
        full_name_history: document.getElementById("full_name").history || true,
    };

    // Add the new profile to the currently selected universe
    const activeuniverse = universes[selected_universe];
    activeuniverse.profiles.push(newProfile);
    localStorage.setItem("op5-universes", JSON.stringify(universes));

    // Clear the profile form
    document.getElementById("profile-name").value = "";

    // Refresh the currently selected universe (galaxy)
    selectuniverse(selected_universe);
}

function removeProfile(index) {
    if (selected_universe >= 0 && selected_universe < universes.length) {
        const profileToDelete = universes[selected_universe].profiles[index];
        const profileName = prompt(`To confirm deletion, please enter the name of the profile "${profileToDelete.name}"`);
        
        if (profileName === profileToDelete.name) {
            const confirmDelete = confirm("Are you sure you want to delete this profile?");
            if (!confirmDelete) {
                return;
            }
            universes[selected_universe].profiles.splice(index, 1);
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            selectedProfileIndex = -1;
            updateProfileList(universes[selected_universe]);
            clearProfileForm();
        } else {
            alert("Profile name does not match. Deletion canceled.");
        }
    }
}


function renameProfile(index) {
    if (selected_universe >= 0 && selected_universe < universes.length) {
        const newName = prompt("Enter a new name for the profile:");
        if (newName !== null && newName.trim() !== "") {
            universes[selected_universe].profiles[index].name = newName;
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            updateProfileList(universes[selected_universe]);
            clearProfileForm();
        }
    }
}

function loadProfile(index) {
    const activeuniverse = universes[selected_universe];
    const loadButton = document.querySelector("#profile-list li:nth-child(" + (index + 1) + ") button:nth-of-type(1)");

    if (loadButton.textContent === "Load Profile") {
        if (selectedProfileIndex !== index) {
            if (selectedProfileIndex !== -1) {
                const currentProfile = activeuniverse.profiles[selectedProfileIndex];
                // page author 1
                const page_author_1_changed = document.getElementById("page_author_1").value !== (currentProfile.page_author_1 || "");
                // written date 1
                const written_date_1_changed = document.getElementById('written_date_1').value !== (currentProfile.written_date_1 || "");
                // full name
                const full_name_changed = document.getElementById("full_name").value !== (currentProfile.full_name || "");
                const full_name_verified_source_icon_changed = document.getElementById("full_name_verified_source_icon").href !== (currentProfile.full_name_verified_source_icon || "");
                const full_name_time_changed = document.getElementById("full_name_time").textContent !== (currentProfile.full_name || "");
                const full_name_highlighted_changed = document.getElementById("full_name").highlighted !== (currentProfile.full_name_highlighted || false);
                const full_name_linked_changed = document.getElementById("full_name").linked !== (currentProfile.full_name_linked || false);
                const full_name_locked_changed = document.getElementById("full_name").locked !== (currentProfile.full_name_locked || false);
                const full_name_disabled_changed = document.getElementById("full_name").disabled !== (currentProfile.full_name_disabled || false);
                // COMMENTS LATER
                const full_name_history_changed = document.getElementById("full_name").history !== (currentProfile.full_name_history || true);

                if (
                    // page_author_1
                    page_author_1_changed ||
                    // written_page_1
                    written_date_1_changed ||
                    // full_name
                    full_name_changed ||
                    full_name_verified_source_icon_changed ||
                    full_name_time_changed ||
                    full_name_highlighted_changed ||
                    full_name_linked_changed ||
                    full_name_locked_changed ||
                    full_name_disabled_changed ||
                    // COMMENTS LATER
                    full_name_history_changed

                ) {
                    const confirmLoad = confirm("Loading a new profile without saving changes will discard any unsaved data. Do you want to continue?");
                    if (!confirmLoad) {
                        return;
                    }
                }
            }

            selectedProfileIndex = index;
            currentProfileData = { ...activeuniverse.profiles[selectedProfileIndex] };
            // page author
            document.getElementById("page_author_1").value = currentProfileData.page_author_1 || "";
            // written date 1
            document.getElementById('written_date_1').value = currentProfileData.written_date_1 || "";
            // full_name
            document.getElementById("full_name").value = currentProfileData.full_name || "";

            // Change the button text to "Save" and update its click handler
            loadButton.textContent = "Save";
        }
    } else if (loadButton.textContent === "Save") {
        // If the button is in "Save" mode, trigger the saveProfile function
        saveProfile();
        setTimeout(function () {
            clearProfileForm();
        }, 100); 
        
        // Reset the previous button to "Load Profile"
        const previousLoadButton = document.querySelector("#profile-list li:nth-child(" + (selectedProfileIndex + 1) + ") button:nth-of-type(1)");
        if (previousLoadButton) {
            previousLoadButton.textContent = "Load Profile";
            previousLoadButton.onclick = () => loadProfile(selectedProfileIndex);
        }

        // Reset the current button to "Load Profile"
        loadButton.textContent = "Load Profile";
        loadButton.onclick = () => loadProfile(index);
    }
}

function saveProfile() {
    const activeuniverse = universes[selected_universe];
    const profile = activeuniverse.profiles[selectedProfileIndex];
    // page author 1
    profile.page_author_1 = document.getElementById("page_author_1").value;
    // written date 1
    profile.written_date_1 = document.getElementById('written_date_1').value;
    // full_name
    profile.full_name = document.getElementById("full_name").value;
    profile.full_name_verified_source_icon = document.getElementById("full_name_verified_source_icon").href;
    profile.full_name_time = document.getElementById("full_name_time").textContent;
    profile.full_name_highlighted = document.getElementById("full_name").highlighted || false;
    profile.full_name_linked = document.getElementById("full_name").linked || false;
    profile.full_name_locked = document.getElementById("full_name").locked || false;
    profile.full_name_disabled = document.getElementById("full_name").disabled || false;
    profile.full_name_history = document.getElementById("full_name").history || false;

    // Save the updated data to localStorage
    localStorage.setItem("op5-universes", JSON.stringify(universes));

    selectedProfileIndex = -1;
    currentProfileData = {};

    const loadButton = document.querySelector("#profile-list li:nth-child(" + (selectedProfileIndex + 1) + ") button:nth-of-type(1)");
    if (loadButton) {
        loadButton.textContent = "Load Profile";
        loadButton.onclick = () => loadProfile(selectedProfileIndex);
    }

    updateProfileList(activeuniverse);
}

function openProfileInNewTab() {
    const profileData = currentProfileData;
    if (profileData) {
        const profileName = profileData.name || "Untitled Profile";
        const profileContent = JSON.stringify(profileData, null, 2);

        const newTab = window.open();
        newTab.document.write(`<pre>${profileName}\n${profileContent}</pre>`);
    }
}

function updateProfileList(activeuniverse) {
    const profileList = document.getElementById("profile-list");
    profileList.innerHTML = "";

    if (activeuniverse) {
        activeuniverse.profiles.forEach((profile, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <button onclick="loadProfile(${index})" style="display: none;">Load Profile</button>
                <button onclick="renameProfile(${index})" style="display: none;">Rename</button>
                <button onclick="removeProfile(${index})" style="display: none;">Remove</button>

            <div class="profile_group" style="background-color: ${profile.card_background}; z-index: 5">
                <div class="profile_image">
                    <img src="${profile.image || 'media/images/openprofile/preview/op_preview_512.jpeg'}" style="min-width: 100px; min-height: 100px; max-width: 100px; max-height: 100px; transform-origin: top left; border-radius: 5px;">
                </div>
                <div class="profile_button" id="load_database_profile" onclick="loadProfile(${index})" title="Load Profile" style="left: 246px; top: 9px; scale: 0.75; background-color: ${profile.card_accent}; z-index: 3;" onmouseover="this.style.backgroundColor='${profile.card_accent_hover}'" onmouseout="this.style.backgroundColor='${profile.card_accent}'">
                    <img src="media/icons/feather_icons/download.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <div class="modify_button" onclick="removeProfile(${index})" title="Delete Profile">
                    <img src="media/icons/feather_icons/x.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                </div>
                <div class="profile_text" style="max-width: 125px; max-height: 20px;">${profile.name}</div>
                <div class="profile_text" style="top: 36px; font-size: 12px; opacity: 0.85; max-width: 125px; max-height: 18px;">${profile.card_creator || '<i>Unknown</i>'}</div>
                <div class="profile_text" style="top: 55px; font-size: 10px; opacity: 0.65; max-width: 166px; max-height: 58px;">${profile.card_description || '<i>This character does not have a description.</i>'}</div>
                <div class="profile_tag" id="" style="width: 60; background-color: ${profile.card_accent};" onmouseover="this.style.backgroundColor='${profile.card_accent_hover}'" onmouseout="this.style.backgroundColor='${profile.card_accent}'">#${profile.card_tag_1 || 'uncategorized'}</div>
                <div class="tag" id="" style="top: 142px; scale: 1.1;">8% Completed</div>
                <div class="profile_text" style="top: 113px; left: 18px; font-size: 8px; opacity: 0.85; max-width: 166px; max-height: 18px;">${profile.card_id}</div>
            </div>
            `;
            profileList.appendChild(listItem);
        });
    }
    load_current_scheme()
}

function clearProfileForm() {
    // page author 1
    document.getElementById("page_author_1").value = "";
    // written date 1
    document.getElementById('written_date_1').value = "";
    // full_name
    document.getElementById("full_name").value = "";
    document.getElementById("full_name_verified_source_icon").href = "";
    document.getElementById("full_name_time").textContent = "";
    TimestampPosition('full_name');
    document.getElementById("full_name").highlighted = false;
    const full_name_highlighted = false;
    color_option2('full_name', full_name_highlighted);
    document.getElementById("full_name").linked = false;
    const full_name_linked = false;
    source_option2('full_name', full_name_linked);
    document.getElementById("full_name").locked = false;
    const full_name_locked = false;
    lock_option2('full_name', full_name_locked)
    document.getElementById("full_name").disabled = false;
    const full_name_disabled = false;
    disable_option2('full_name', full_name_disabled)
    // COMMENTS LATER
    document.getElementById("full_name").history = true;
    const full_name_history = true;
    history_option2('full_name', full_name_history);
}

updateuniverseList();
updateProfileList(null);