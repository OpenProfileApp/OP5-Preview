let universes = JSON.parse(localStorage.getItem("op5-universes")) || [];
let selecteduniverseIndex = -1;
let selectedProfileIndex = -1;
let currentProfileData = {};

window.addEventListener("load", () => {
    clearProfileForm();
    const edit = document.getElementById('page_1');
    edit.style.opacity = "1"
});

function createuniverse(name, url) {
    const universeName = name || prompt("Enter a name for the new universe:");
    if (!universeName) return;

    const universeurl = url || prompt("Enter a url for the universe's image:");

    const newuniverse = {
        name: universeName,
        url: universeurl,
        profiles: [],
    };

    universes.push(newuniverse);
    localStorage.setItem("op5-universes", JSON.stringify(universes));
    updateuniverseList();
}

function selectuniverse(index) {
    // Remove the .selected-universe class from previously selected universe
    const previousSelectedUniverse = document.querySelector(".profile_universe.selected-universe");
    if (previousSelectedUniverse) {
        previousSelectedUniverse.classList.remove("selected-universe");
    }

    selecteduniverseIndex = index;
    localStorage.setItem("selecteduniverseIndex", selecteduniverseIndex.toString());
    const universe = universes[index];

    // Add the .selected-universe class to the newly selected universe
    const selectedUniverseElement = document.querySelector(`.profile_universe:nth-child(${index + 1})`);
    if (selectedUniverseElement) {
        selectedUniverseElement.classList.add("selected-universe");
    }

    updateProfileList(universe);
}

function renameuniverse(index) {
    const universe = universes[index];
    if (universe) {
        const newName = prompt("Enter a new name for the universe:", universe.name);
        if (newName !== null && newName.trim() !== "") {
            const newurl = prompt("Enter a url for the universe's image:", universe.url);

            universe.name = newName;
            universe.url = newurl;
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            updateuniverseList();
        }
    }
}

function removeuniverse(index) {
    const universe = universes[index];
    const universeName = universe.name;
    const userInput = prompt(`To confirm deletion, please enter the name of the universe "${universeName}"`);

    if (userInput === universeName) {
        const confirmDelete = confirm("Are you sure you want to delete this universe?");
        if (confirmDelete) {
            universes.splice(index, 1);
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            selecteduniverseIndex = -1;
            updateuniverseList();
            updateProfileList(null);
        }
    } else {
        alert("universe name does not match. Deletion canceled.");
    }
}

function updateuniverseList() {
    const universeList = document.getElementById("universe-list");
    universeList.innerHTML = universes.map((universe, index) => `
                <div class="profile_universe" id="" title="${universe.name || '<i>Unknown Universe</i>'}" onclick="selectuniverse(${index})";>
                    <img src="${universe.url || 'media/images/openprofile/preview/op_preview_512.jpeg'}" style="transform-origin: top left; min-width: 50px; min-height: 50px; max-width: 50px; max-height: 50px; border-radius: 50%;">
                    <div class="delete_button" style="scale: 0.35;" onclick="removeuniverse(${index})" title="Delete Universe">
                        <img src="media/icons/feather_icons/x.svg" style="scale: 0.30; transform-origin: top left; margin: 10px;">
                    </div>
                    <div class="tag" id="" style="scale: 0.8; top: 39px;">PREVIEW</div>
                </div>
    `).join("");
}

function addProfile() {
    if (selecteduniverseIndex < 0 || selecteduniverseIndex >= universes.length) {
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

    const minNumber = 1000000000000000;
    const maxNumber = 9999999999999999;
    const profileID = generate_global_id(minNumber, maxNumber);

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

        // first_name
        first_name: document.getElementById("first_name").value,
        first_name_verified_source_icon: document.getElementById("first_name_verified_source_icon").href,
        first_name_time: document.getElementById("first_name_time").textContent,
        first_name_highlighted: document.getElementById("first_name").highlighted || false,
        first_name_linked: document.getElementById("first_name").linked || false,
        first_name_locked: document.getElementById("first_name").locked || false,
        first_name_disabled: document.getElementById("first_name").disabled || false,
        first_name_comments: "NOT YET AVAILABLE",
        first_name_history: document.getElementById("first_name").history || true,

        // middle_name
        middle_name: document.getElementById("middle_name").value,
        middle_name_verified_source_icon: document.getElementById("middle_name_verified_source_icon").href,
        middle_name_time: document.getElementById("middle_name_time").textContent,
        middle_name_highlighted: document.getElementById("middle_name").highlighted || false,
        middle_name_linked: document.getElementById("middle_name").linked || false,
        middle_name_locked: document.getElementById("middle_name").locked || false,
        middle_name_disabled: document.getElementById("middle_name").disabled || false,
        middle_name_comments: "NOT YET AVAILABLE",
        middle_name_history: document.getElementById("middle_name").history || true,

        // last_name
        last_name: document.getElementById("last_name").value,
        last_name_verified_source_icon: document.getElementById("last_name_verified_source_icon").href,
        last_name_time: document.getElementById("last_name_time").textContent,
        last_name_highlighted: document.getElementById("last_name").highlighted || false,
        last_name_linked: document.getElementById("last_name").linked || false,
        last_name_locked: document.getElementById("last_name").locked || false,
        last_name_disabled: document.getElementById("last_name").disabled || false,
        last_name_comments: "NOT YET AVAILABLE",
        last_name_history: document.getElementById("last_name").history || true,

        // nickname
        nickname: document.getElementById("nickname").value,
        nickname_verified_source_icon: document.getElementById("nickname_verified_source_icon").href,
        nickname_time: document.getElementById("nickname_time").textContent,
        nickname_highlighted: document.getElementById("nickname").highlighted || false,
        nickname_linked: document.getElementById("nickname").linked || false,
        nickname_locked: document.getElementById("nickname").locked || false,
        nickname_disabled: document.getElementById("nickname").disabled || false,
        nickname_comments: "NOT YET AVAILABLE",
        nickname_history: document.getElementById("nickname").history || true,

        // alias
        alias: document.getElementById("alias").value,
        alias_verified_source_icon: document.getElementById("alias_verified_source_icon").href,
        alias_time: document.getElementById("alias_time").textContent,
        alias_highlighted: document.getElementById("alias").highlighted || false,
        alias_linked: document.getElementById("alias").linked || false,
        alias_locked: document.getElementById("alias").locked || false,
        alias_disabled: document.getElementById("alias").disabled || false,
        alias_comments: "NOT YET AVAILABLE",
        alias_history: document.getElementById("alias").history || true,

        // alter_ego
        alter_ego: document.getElementById("alter_ego").value,
        alter_ego_verified_source_icon: document.getElementById("alter_ego_verified_source_icon").href,
        alter_ego_time: document.getElementById("alter_ego_time").textContent,
        alter_ego_highlighted: document.getElementById("alter_ego").highlighted || false,
        alter_ego_linked: document.getElementById("alter_ego").linked || false,
        alter_ego_locked: document.getElementById("alter_ego").locked || false,
        alter_ego_disabled: document.getElementById("alter_ego").disabled || false,
        alter_ego_comments: "NOT YET AVAILABLE",
        alter_ego_history: document.getElementById("alter_ego").history || true,

        // prefix
        prefix: document.getElementById("prefix").value,
        prefix_verified_source_icon: document.getElementById("prefix_verified_source_icon").href,
        prefix_time: document.getElementById("prefix_time").textContent,
        prefix_highlighted: document.getElementById("prefix").highlighted || false,
        prefix_linked: document.getElementById("prefix").linked || false,
        prefix_locked: document.getElementById("prefix").locked || false,
        prefix_disabled: document.getElementById("prefix").disabled || false,
        prefix_comments: "NOT YET AVAILABLE",
        prefix_history: document.getElementById("prefix").history || true,

        // suffix
        suffix: document.getElementById("suffix").value,
        suffix_verified_source_icon: document.getElementById("suffix_verified_source_icon").href,
        suffix_time: document.getElementById("suffix_time").textContent,
        suffix_highlighted: document.getElementById("suffix").highlighted || false,
        suffix_linked: document.getElementById("suffix").linked || false,
        suffix_locked: document.getElementById("suffix").locked || false,
        suffix_disabled: document.getElementById("suffix").disabled || false,
        suffix_comments: "NOT YET AVAILABLE",
        suffix_history: document.getElementById("suffix").history || true,

        // former_name
        former_name: document.getElementById("former_name").value,
        former_name_verified_source_icon: document.getElementById("former_name_verified_source_icon").href,
        former_name_time: document.getElementById("former_name_time").textContent,
        former_name_highlighted: document.getElementById("former_name").highlighted || false,
        former_name_linked: document.getElementById("former_name").linked || false,
        former_name_locked: document.getElementById("former_name").locked || false,
        former_name_disabled: document.getElementById("former_name").disabled || false,
        former_name_comments: "NOT YET AVAILABLE",
        former_name_history: document.getElementById("former_name").history || true,

        // name_origin
        name_origin: document.getElementById("name_origin").value,
        name_origin_verified_source_icon: document.getElementById("name_origin_verified_source_icon").href,
        name_origin_time: document.getElementById("name_origin_time").textContent,
        name_origin_highlighted: document.getElementById("name_origin").highlighted || false,
        name_origin_linked: document.getElementById("name_origin").linked || false,
        name_origin_locked: document.getElementById("name_origin").locked || false,
        name_origin_disabled: document.getElementById("name_origin").disabled || false,
        name_origin_comments: "NOT YET AVAILABLE",
        name_origin_history: document.getElementById("name_origin").history || true,

        // personal_thoughts_name
        personal_thoughts_name: document.getElementById("personal_thoughts_name").value,
        personal_thoughts_name_verified_source_icon: document.getElementById("personal_thoughts_name_verified_source_icon").href,
        personal_thoughts_name_time: document.getElementById("personal_thoughts_name_time").textContent,
        personal_thoughts_name_highlighted: document.getElementById("personal_thoughts_name").highlighted || false,
        personal_thoughts_name_linked: document.getElementById("personal_thoughts_name").linked || false,
        personal_thoughts_name_locked: document.getElementById("personal_thoughts_name").locked || false,
        personal_thoughts_name_disabled: document.getElementById("personal_thoughts_name").disabled || false,
        personal_thoughts_name_comments: "NOT YET AVAILABLE",
        personal_thoughts_name_history: document.getElementById("personal_thoughts_name").history || true,
    };

    // Add the new profile to the currently selected universe
    const activeuniverse = universes[selecteduniverseIndex];
    activeuniverse.profiles.push(newProfile);
    localStorage.setItem("op5-universes", JSON.stringify(universes));

    // Clear the profile form
    document.getElementById("profile-name").value = "";

    // Refresh the currently selected universe (galaxy)
    selectuniverse(selecteduniverseIndex);
}

function removeProfile(index) {
    if (selecteduniverseIndex >= 0 && selecteduniverseIndex < universes.length) {
        const profileToDelete = universes[selecteduniverseIndex].profiles[index];
        const profileName = prompt(`To confirm deletion, please enter the name of the profile "${profileToDelete.name}"`);
        
        if (profileName === profileToDelete.name) {
            const confirmDelete = confirm("Are you sure you want to delete this profile?");
            if (!confirmDelete) {
                return;
            }
            universes[selecteduniverseIndex].profiles.splice(index, 1);
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            selectedProfileIndex = -1;
            updateProfileList(universes[selecteduniverseIndex]);
            clearProfileForm();
        } else {
            alert("Profile name does not match. Deletion canceled.");
        }
    }
}


function renameProfile(index) {
    if (selecteduniverseIndex >= 0 && selecteduniverseIndex < universes.length) {
        const newName = prompt("Enter a new name for the profile:");
        if (newName !== null && newName.trim() !== "") {
            universes[selecteduniverseIndex].profiles[index].name = newName;
            localStorage.setItem("op5-universes", JSON.stringify(universes));
            updateProfileList(universes[selecteduniverseIndex]);
            clearProfileForm();
        }
    }
}

function loadProfile(index) {
    const activeuniverse = universes[selecteduniverseIndex];
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

                // first_name
                const first_name_changed = document.getElementById("first_name").value !== (currentProfile.first_name || "");
                const first_name_verified_source_icon_changed = document.getElementById("first_name_verified_source_icon").href !== (currentProfile.first_name_verified_source_icon || "");
                const first_name_time_changed = document.getElementById("first_name_time").textContent !== (currentProfile.first_name || "");
                const first_name_highlighted_changed = document.getElementById("first_name").highlighted !== (currentProfile.first_name_highlighted || false);
                const first_name_linked_changed = document.getElementById("first_name").linked !== (currentProfile.first_name_linked || false);
                const first_name_locked_changed = document.getElementById("first_name").locked !== (currentProfile.first_name_locked || false);
                const first_name_disabled_changed = document.getElementById("first_name").disabled !== (currentProfile.first_name_disabled || false);
                // COMMENTS LATER
                const first_name_history_changed = document.getElementById("first_name").history !== (currentProfile.first_name_history || true);

                // middle_name
                const middle_name_changed = document.getElementById("middle_name").value !== (currentProfile.middle_name || "");
                const middle_name_verified_source_icon_changed = document.getElementById("middle_name_verified_source_icon").href !== (currentProfile.middle_name_verified_source_icon || "");
                const middle_name_time_changed = document.getElementById("middle_name_time").textContent !== (currentProfile.middle_name || "");
                const middle_name_highlighted_changed = document.getElementById("middle_name").highlighted !== (currentProfile.middle_name_highlighted || false);
                const middle_name_linked_changed = document.getElementById("middle_name").linked !== (currentProfile.middle_name_linked || false);
                const middle_name_locked_changed = document.getElementById("middle_name").locked !== (currentProfile.middle_name_locked || false);
                const middle_name_disabled_changed = document.getElementById("middle_name").disabled !== (currentProfile.middle_name_disabled || false);
                // COMMENTS LATER
                const middle_name_history_changed = document.getElementById("middle_name").history !== (currentProfile.middle_name_history || true);

                // last_name
                const last_name_changed = document.getElementById("last_name").value !== (currentProfile.last_name || "");
                const last_name_verified_source_icon_changed = document.getElementById("last_name_verified_source_icon").href !== (currentProfile.last_name_verified_source_icon || "");
                const last_name_time_changed = document.getElementById("last_name_time").textContent !== (currentProfile.last_name || "");
                const last_name_highlighted_changed = document.getElementById("last_name").highlighted !== (currentProfile.last_name_highlighted || false);
                const last_name_linked_changed = document.getElementById("last_name").linked !== (currentProfile.last_name_linked || false);
                const last_name_locked_changed = document.getElementById("last_name").locked !== (currentProfile.last_name_locked || false);
                const last_name_disabled_changed = document.getElementById("last_name").disabled !== (currentProfile.last_name_disabled || false);
                // COMMENTS LATER
                const last_name_history_changed = document.getElementById("last_name").history !== (currentProfile.last_name_history || true);

                // nickname
                const nickname_changed = document.getElementById("nickname").value !== (currentProfile.nickname || "");
                const nickname_verified_source_icon_changed = document.getElementById("nickname_verified_source_icon").href !== (currentProfile.nickname_verified_source_icon || "");
                const nickname_time_changed = document.getElementById("nickname_time").textContent !== (currentProfile.nickname || "");
                const nickname_highlighted_changed = document.getElementById("nickname").highlighted !== (currentProfile.nickname_highlighted || false);
                const nickname_linked_changed = document.getElementById("nickname").linked !== (currentProfile.nickname_linked || false);
                const nickname_locked_changed = document.getElementById("nickname").locked !== (currentProfile.nickname_locked || false);
                const nickname_disabled_changed = document.getElementById("nickname").disabled !== (currentProfile.nickname_disabled || false);
                // COMMENTS LATER
                const nickname_history_changed = document.getElementById("nickname").history !== (currentProfile.nickname_history || true);

                // alias
                const alias_changed = document.getElementById("alias").value !== (currentProfile.alias || "");
                const alias_verified_source_icon_changed = document.getElementById("alias_verified_source_icon").href !== (currentProfile.alias_verified_source_icon || "");
                const alias_time_changed = document.getElementById("alias_time").textContent !== (currentProfile.alias || "");
                const alias_highlighted_changed = document.getElementById("alias").highlighted !== (currentProfile.alias_highlighted || false);
                const alias_linked_changed = document.getElementById("alias").linked !== (currentProfile.alias_linked || false);
                const alias_locked_changed = document.getElementById("alias").locked !== (currentProfile.alias_locked || false);
                const alias_disabled_changed = document.getElementById("alias").disabled !== (currentProfile.alias_disabled || false);
                // COMMENTS LATER
                const alias_history_changed = document.getElementById("alias").history !== (currentProfile.alias_history || true);

                // alter_ego
                const alter_ego_changed = document.getElementById("alter_ego").value !== (currentProfile.alter_ego || "");
                const alter_ego_verified_source_icon_changed = document.getElementById("alter_ego_verified_source_icon").href !== (currentProfile.alter_ego_verified_source_icon || "");
                const alter_ego_time_changed = document.getElementById("alter_ego_time").textContent !== (currentProfile.alter_ego || "");
                const alter_ego_highlighted_changed = document.getElementById("alter_ego").highlighted !== (currentProfile.alter_ego_highlighted || false);
                const alter_ego_linked_changed = document.getElementById("alter_ego").linked !== (currentProfile.alter_ego_linked || false);
                const alter_ego_locked_changed = document.getElementById("alter_ego").locked !== (currentProfile.alter_ego_locked || false);
                const alter_ego_disabled_changed = document.getElementById("alter_ego").disabled !== (currentProfile.alter_ego_disabled || false);
                // COMMENTS LATER
                const alter_ego_history_changed = document.getElementById("alter_ego").history !== (currentProfile.alter_ego_history || true);

                // prefix
                const prefix_changed = document.getElementById("prefix").value !== (currentProfile.prefix || "");
                const prefix_verified_source_icon_changed = document.getElementById("prefix_verified_source_icon").href !== (currentProfile.prefix_verified_source_icon || "");
                const prefix_time_changed = document.getElementById("prefix_time").textContent !== (currentProfile.prefix || "");
                const prefix_highlighted_changed = document.getElementById("prefix").highlighted !== (currentProfile.prefix_highlighted || false);
                const prefix_linked_changed = document.getElementById("prefix").linked !== (currentProfile.prefix_linked || false);
                const prefix_locked_changed = document.getElementById("prefix").locked !== (currentProfile.prefix_locked || false);
                const prefix_disabled_changed = document.getElementById("prefix").disabled !== (currentProfile.prefix_disabled || false);
                // COMMENTS LATER
                const prefix_history_changed = document.getElementById("prefix").history !== (currentProfile.prefix_history || true);

                // suffix
                const suffix_changed = document.getElementById("suffix").value !== (currentProfile.suffix || "");
                const suffix_verified_source_icon_changed = document.getElementById("suffix_verified_source_icon").href !== (currentProfile.suffix_verified_source_icon || "");
                const suffix_time_changed = document.getElementById("suffix_time").textContent !== (currentProfile.suffix || "");
                const suffix_highlighted_changed = document.getElementById("suffix").highlighted !== (currentProfile.suffix_highlighted || false);
                const suffix_linked_changed = document.getElementById("suffix").linked !== (currentProfile.suffix_linked || false);
                const suffix_locked_changed = document.getElementById("suffix").locked !== (currentProfile.suffix_locked || false);
                const suffix_disabled_changed = document.getElementById("suffix").disabled !== (currentProfile.suffix_disabled || false);
                // COMMENTS LATER
                const suffix_history_changed = document.getElementById("suffix").history !== (currentProfile.suffix_history || true);

                // former_name
                const former_name_changed = document.getElementById("former_name").value !== (currentProfile.former_name || "");
                const former_name_verified_source_icon_changed = document.getElementById("former_name_verified_source_icon").href !== (currentProfile.former_name_verified_source_icon || "");
                const former_name_time_changed = document.getElementById("former_name_time").textContent !== (currentProfile.former_name || "");
                const former_name_highlighted_changed = document.getElementById("former_name").highlighted !== (currentProfile.former_name_highlighted || false);
                const former_name_linked_changed = document.getElementById("former_name").linked !== (currentProfile.former_name_linked || false);
                const former_name_locked_changed = document.getElementById("former_name").locked !== (currentProfile.former_name_locked || false);
                const former_name_disabled_changed = document.getElementById("former_name").disabled !== (currentProfile.former_name_disabled || false);
                // COMMENTS LATER
                const former_name_history_changed = document.getElementById("former_name").history !== (currentProfile.former_name_history || true);

                // name_origin
                const name_origin_changed = document.getElementById("name_origin").value !== (currentProfile.name_origin || "");
                const name_origin_verified_source_icon_changed = document.getElementById("name_origin_verified_source_icon").href !== (currentProfile.name_origin_verified_source_icon || "");
                const name_origin_time_changed = document.getElementById("name_origin_time").textContent !== (currentProfile.name_origin || "");
                const name_origin_highlighted_changed = document.getElementById("name_origin").highlighted !== (currentProfile.name_origin_highlighted || false);
                const name_origin_linked_changed = document.getElementById("name_origin").linked !== (currentProfile.name_origin_linked || false);
                const name_origin_locked_changed = document.getElementById("name_origin").locked !== (currentProfile.name_origin_locked || false);
                const name_origin_disabled_changed = document.getElementById("name_origin").disabled !== (currentProfile.name_origin_disabled || false);
                // COMMENTS LATER
                const name_origin_history_changed = document.getElementById("name_origin").history !== (currentProfile.name_origin_history || true);

                // personal_thoughts_name
                const personal_thoughts_name_changed = document.getElementById("personal_thoughts_name").value !== (currentProfile.personal_thoughts_name || "");
                const personal_thoughts_name_verified_source_icon_changed = document.getElementById("personal_thoughts_name_verified_source_icon").href !== (currentProfile.personal_thoughts_name_verified_source_icon || "");
                const personal_thoughts_name_time_changed = document.getElementById("personal_thoughts_name_time").textContent !== (currentProfile.personal_thoughts_name || "");
                const personal_thoughts_name_highlighted_changed = document.getElementById("personal_thoughts_name").highlighted !== (currentProfile.personal_thoughts_name_highlighted || false);
                const personal_thoughts_name_linked_changed = document.getElementById("personal_thoughts_name").linked !== (currentProfile.personal_thoughts_name_linked || false);
                const personal_thoughts_name_locked_changed = document.getElementById("personal_thoughts_name").locked !== (currentProfile.personal_thoughts_name_locked || false);
                const personal_thoughts_name_disabled_changed = document.getElementById("personal_thoughts_name").disabled !== (currentProfile.personal_thoughts_name_disabled || false);
                // COMMENTS LATER
                const personal_thoughts_name_history_changed = document.getElementById("personal_thoughts_name").history !== (currentProfile.personal_thoughts_name_history || true);

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
                    full_name_history_changed ||

                    // first_name
                    first_name_changed ||
                    first_name_verified_source_icon_changed ||
                    first_name_time_changed ||
                    first_name_highlighted_changed ||
                    first_name_linked_changed ||
                    first_name_locked_changed ||
                    first_name_disabled_changed ||
                    // COMMENTS LATER
                    first_name_history_changed ||

                    // middle_name
                    middle_name_changed ||
                    middle_name_verified_source_icon_changed ||
                    middle_name_time_changed ||
                    middle_name_highlighted_changed ||
                    middle_name_linked_changed ||
                    middle_name_locked_changed ||
                    middle_name_disabled_changed ||
                    // COMMENTS LATER
                    middle_name_history_changed ||

                    // last_name
                    last_name_changed ||
                    last_name_verified_source_icon_changed ||
                    last_name_time_changed ||
                    last_name_highlighted_changed ||
                    last_name_linked_changed ||
                    last_name_locked_changed ||
                    last_name_disabled_changed ||
                    // COMMENTS LATER
                    last_name_history_changed ||

                    // nickname
                    nickname_changed ||
                    nickname_verified_source_icon_changed ||
                    nickname_time_changed ||
                    nickname_highlighted_changed ||
                    nickname_linked_changed ||
                    nickname_locked_changed ||
                    nickname_disabled_changed ||
                    // COMMENTS LATER
                    nickname_history_changed ||

                    // alias
                    alias_changed ||
                    alias_verified_source_icon_changed ||
                    alias_time_changed ||
                    alias_highlighted_changed ||
                    alias_linked_changed ||
                    alias_locked_changed ||
                    alias_disabled_changed ||
                    // COMMENTS LATER
                    alias_history_changed ||

                    // alter_ego
                    alter_ego_changed ||
                    alter_ego_verified_source_icon_changed ||
                    alter_ego_time_changed ||
                    alter_ego_highlighted_changed ||
                    alter_ego_linked_changed ||
                    alter_ego_locked_changed ||
                    alter_ego_disabled_changed ||
                    // COMMENTS LATER
                    alter_ego_history_changed ||

                    // prefix
                    prefix_changed ||
                    prefix_verified_source_icon_changed ||
                    prefix_time_changed ||
                    prefix_highlighted_changed ||
                    prefix_linked_changed ||
                    prefix_locked_changed ||
                    prefix_disabled_changed ||
                    // COMMENTS LATER
                    prefix_history_changed ||

                    // suffix
                    suffix_changed ||
                    suffix_verified_source_icon_changed ||
                    suffix_time_changed ||
                    suffix_highlighted_changed ||
                    suffix_linked_changed ||
                    suffix_locked_changed ||
                    suffix_disabled_changed ||
                    // COMMENTS LATER
                    suffix_history_changed ||

                    // former_name
                    former_name_changed ||
                    former_name_verified_source_icon_changed ||
                    former_name_time_changed ||
                    former_name_highlighted_changed ||
                    former_name_linked_changed ||
                    former_name_locked_changed ||
                    former_name_disabled_changed ||
                    // COMMENTS LATER
                    former_name_history_changed ||

                    // name_origin
                    name_origin_changed ||
                    name_origin_verified_source_icon_changed ||
                    name_origin_time_changed ||
                    name_origin_highlighted_changed ||
                    name_origin_linked_changed ||
                    name_origin_locked_changed ||
                    name_origin_disabled_changed ||
                    // COMMENTS LATER
                    name_origin_history_changed ||

                    // personal_thoughts_name
                    personal_thoughts_name_changed ||
                    personal_thoughts_name_verified_source_icon_changed ||
                    personal_thoughts_name_time_changed ||
                    personal_thoughts_name_highlighted_changed ||
                    personal_thoughts_name_linked_changed ||
                    personal_thoughts_name_locked_changed ||
                    personal_thoughts_name_disabled_changed ||
                    // COMMENTS LATER
                    personal_thoughts_name_history_changed
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
            document.getElementById("full_name_verified_source_icon").href = currentProfileData.full_name_verified_source_icon || "";
            document.getElementById("full_name_time").textContent = currentProfileData.full_name_time || "";
            TimestampPosition('full_name');
            document.getElementById("full_name").highlighted = currentProfileData.full_name_highlighted || false;
            const full_name_highlighted = currentProfileData.full_name_highlighted || false;
            color_option2('full_name', full_name_highlighted);
            document.getElementById("full_name").linked = currentProfileData.full_name_linked || false;
            const full_name_linked =  currentProfileData.full_name_linked || false;
            source_option2('full_name', full_name_linked, currentProfileData.full_name_verified_source_icon || "");
            document.getElementById("full_name").locked = currentProfileData.full_name_locked || false;
            const full_name_locked =  currentProfileData.full_name_locked || false;
            lock_option2('full_name', full_name_locked)
            document.getElementById("full_name").disabled = currentProfileData.disabled || "";
            const full_name_disabled = currentProfileData.full_name_disabled || false;
            disable_option2('full_name', full_name_disabled);
            // COMMENTS LATER
            document.getElementById("full_name").history = currentProfileData.full_name_history || false;
            const full_name_history = currentProfileData.full_name_history || false;
            history_option2('full_name', full_name_history);

            // first_name
            document.getElementById("first_name").value = currentProfileData.first_name || "";
            document.getElementById("first_name_verified_source_icon").href = currentProfileData.first_name_verified_source_icon || "";
            document.getElementById("first_name_time").textContent = currentProfileData.first_name_time || "";
            TimestampPosition('first_name');
            document.getElementById("first_name").highlighted = currentProfileData.first_name_highlighted || false;
            const first_name_highlighted = currentProfileData.first_name_highlighted || false;
            color_option2('first_name', first_name_highlighted);
            document.getElementById("first_name").linked = currentProfileData.first_name_linked || false;
            const first_name_linked =  currentProfileData.first_name_linked || false;
            source_option2('first_name', first_name_linked, currentProfileData.first_name_verified_source_icon || "");
            document.getElementById("first_name").locked = currentProfileData.first_name_locked || false;
            const first_name_locked =  currentProfileData.first_name_locked || false;
            lock_option2('first_name', first_name_locked)
            document.getElementById("first_name").disabled = currentProfileData.disabled || "";
            const first_name_disabled = currentProfileData.first_name_disabled || false;
            disable_option2('first_name', first_name_disabled);
            // COMMENTS LATER
            document.getElementById("first_name").history = currentProfileData.first_name_history || false;
            const first_name_history = currentProfileData.first_name_history || false;
            history_option2('first_name', first_name_history);

            // middle_name
            document.getElementById("middle_name").value = currentProfileData.middle_name || "";
            document.getElementById("middle_name_verified_source_icon").href = currentProfileData.middle_name_verified_source_icon || "";
            document.getElementById("middle_name_time").textContent = currentProfileData.middle_name_time || "";
            TimestampPosition('middle_name');
            document.getElementById("middle_name").highlighted = currentProfileData.middle_name_highlighted || false;
            const middle_name_highlighted = currentProfileData.middle_name_highlighted || false;
            color_option2('middle_name', middle_name_highlighted);
            document.getElementById("middle_name").linked = currentProfileData.middle_name_linked || false;
            const middle_name_linked =  currentProfileData.middle_name_linked || false;
            source_option2('middle_name', middle_name_linked, currentProfileData.middle_name_verified_source_icon || "");
            document.getElementById("middle_name").locked = currentProfileData.middle_name_locked || false;
            const middle_name_locked =  currentProfileData.middle_name_locked || false;
            lock_option2('middle_name', middle_name_locked)
            document.getElementById("middle_name").disabled = currentProfileData.disabled || "";
            const middle_name_disabled = currentProfileData.middle_name_disabled || false;
            disable_option2('middle_name', middle_name_disabled);
            // COMMENTS LATER
            document.getElementById("middle_name").history = currentProfileData.middle_name_history || false;
            const middle_name_history = currentProfileData.middle_name_history || false;
            history_option2('middle_name', middle_name_history);

            // last_name
            document.getElementById("last_name").value = currentProfileData.last_name || "";
            document.getElementById("last_name_verified_source_icon").href = currentProfileData.last_name_verified_source_icon || "";
            document.getElementById("last_name_time").textContent = currentProfileData.last_name_time || "";
            TimestampPosition('last_name');
            document.getElementById("last_name").highlighted = currentProfileData.last_name_highlighted || false;
            const last_name_highlighted = currentProfileData.last_name_highlighted || false;
            color_option2('last_name', last_name_highlighted);
            document.getElementById("last_name").linked = currentProfileData.last_name_linked || false;
            const last_name_linked =  currentProfileData.last_name_linked || false;
            source_option2('last_name', last_name_linked, currentProfileData.last_name_verified_source_icon || "");
            document.getElementById("last_name").locked = currentProfileData.last_name_locked || false;
            const last_name_locked =  currentProfileData.last_name_locked || false;
            lock_option2('last_name', last_name_locked)
            document.getElementById("last_name").disabled = currentProfileData.disabled || "";
            const last_name_disabled = currentProfileData.last_name_disabled || false;
            disable_option2('last_name', last_name_disabled);
            // COMMENTS LATER
            document.getElementById("last_name").history = currentProfileData.last_name_history || false;
            const last_name_history = currentProfileData.last_name_history || false;
            history_option2('last_name', last_name_history);

            // nickname
            document.getElementById("nickname").value = currentProfileData.nickname || "";
            document.getElementById("nickname_verified_source_icon").href = currentProfileData.nickname_verified_source_icon || "";
            document.getElementById("nickname_time").textContent = currentProfileData.nickname_time || "";
            TimestampPosition('nickname');
            document.getElementById("nickname").highlighted = currentProfileData.nickname_highlighted || false;
            const nickname_highlighted = currentProfileData.nickname_highlighted || false;
            color_option2('nickname', nickname_highlighted);
            document.getElementById("nickname").linked = currentProfileData.nickname_linked || false;
            const nickname_linked =  currentProfileData.nickname_linked || false;
            source_option2('nickname', nickname_linked, currentProfileData.nickname_verified_source_icon || "");
            document.getElementById("nickname").locked = currentProfileData.nickname_locked || false;
            const nickname_locked =  currentProfileData.nickname_locked || false;
            lock_option2('nickname', nickname_locked)
            document.getElementById("nickname").disabled = currentProfileData.disabled || "";
            const nickname_disabled = currentProfileData.nickname_disabled || false;
            disable_option2('nickname', nickname_disabled);
            // COMMENTS LATER
            document.getElementById("nickname").history = currentProfileData.nickname_history || false;
            const nickname_history = currentProfileData.nickname_history || false;
            history_option2('nickname', nickname_history);

            // alias
            document.getElementById("alias").value = currentProfileData.alias || "";
            document.getElementById("alias_verified_source_icon").href = currentProfileData.alias_verified_source_icon || "";
            document.getElementById("alias_time").textContent = currentProfileData.alias_time || "";
            TimestampPosition('alias');
            document.getElementById("alias").highlighted = currentProfileData.alias_highlighted || false;
            const alias_highlighted = currentProfileData.alias_highlighted || false;
            color_option2('alias', alias_highlighted);
            document.getElementById("alias").linked = currentProfileData.alias_linked || false;
            const alias_linked =  currentProfileData.alias_linked || false;
            source_option2('alias', alias_linked, currentProfileData.alias_verified_source_icon || "");
            document.getElementById("alias").locked = currentProfileData.alias_locked || false;
            const alias_locked =  currentProfileData.alias_locked || false;
            lock_option2('alias', alias_locked)
            document.getElementById("alias").disabled = currentProfileData.disabled || "";
            const alias_disabled = currentProfileData.alias_disabled || false;
            disable_option2('alias', alias_disabled);
            // COMMENTS LATER
            document.getElementById("alias").history = currentProfileData.alias_history || false;
            const alias_history = currentProfileData.alias_history || false;
            history_option2('alias', alias_history);

            // alter_ego
            document.getElementById("alter_ego").value = currentProfileData.alter_ego || "";
            document.getElementById("alter_ego_verified_source_icon").href = currentProfileData.alter_ego_verified_source_icon || "";
            document.getElementById("alter_ego_time").textContent = currentProfileData.alter_ego_time || "";
            TimestampPosition('alter_ego');
            document.getElementById("alter_ego").highlighted = currentProfileData.alter_ego_highlighted || false;
            const alter_ego_highlighted = currentProfileData.alter_ego_highlighted || false;
            color_option2('alter_ego', alter_ego_highlighted);
            document.getElementById("alter_ego").linked = currentProfileData.alter_ego_linked || false;
            const alter_ego_linked =  currentProfileData.alter_ego_linked || false;
            source_option2('alter_ego', alter_ego_linked, currentProfileData.alter_ego_verified_source_icon || "");
            document.getElementById("alter_ego").locked = currentProfileData.alter_ego_locked || false;
            const alter_ego_locked =  currentProfileData.alter_ego_locked || false;
            lock_option2('alter_ego', alter_ego_locked)
            document.getElementById("alter_ego").disabled = currentProfileData.disabled || "";
            const alter_ego_disabled = currentProfileData.alter_ego_disabled || false;
            disable_option2('alter_ego', alter_ego_disabled);
            // COMMENTS LATER
            document.getElementById("alter_ego").history = currentProfileData.alter_ego_history || false;
            const alter_ego_history = currentProfileData.alter_ego_history || false;
            history_option2('alter_ego', alter_ego_history);

            // prefix
            document.getElementById("prefix").value = currentProfileData.prefix || "";
            document.getElementById("prefix_verified_source_icon").href = currentProfileData.prefix_verified_source_icon || "";
            document.getElementById("prefix_time").textContent = currentProfileData.prefix_time || "";
            TimestampPosition('prefix');
            document.getElementById("prefix").highlighted = currentProfileData.prefix_highlighted || false;
            const prefix_highlighted = currentProfileData.prefix_highlighted || false;
            color_option2('prefix', prefix_highlighted);
            document.getElementById("prefix").linked = currentProfileData.prefix_linked || false;
            const prefix_linked =  currentProfileData.prefix_linked || false;
            source_option2('prefix', prefix_linked, currentProfileData.prefix_verified_source_icon || "");
            document.getElementById("prefix").locked = currentProfileData.prefix_locked || false;
            const prefix_locked =  currentProfileData.prefix_locked || false;
            lock_option2('prefix', prefix_locked)
            document.getElementById("prefix").disabled = currentProfileData.disabled || "";
            const prefix_disabled = currentProfileData.prefix_disabled || false;
            disable_option2('prefix', prefix_disabled);
            // COMMENTS LATER
            document.getElementById("prefix").history = currentProfileData.prefix_history || false;
            const prefix_history = currentProfileData.prefix_history || false;
            history_option2('prefix', prefix_history);

            // suffix
            document.getElementById("suffix").value = currentProfileData.suffix || "";
            document.getElementById("suffix_verified_source_icon").href = currentProfileData.suffix_verified_source_icon || "";
            document.getElementById("suffix_time").textContent = currentProfileData.suffix_time || "";
            TimestampPosition('suffix');
            document.getElementById("suffix").highlighted = currentProfileData.suffix_highlighted || false;
            const suffix_highlighted = currentProfileData.suffix_highlighted || false;
            color_option2('suffix', suffix_highlighted);
            document.getElementById("suffix").linked = currentProfileData.suffix_linked || false;
            const suffix_linked =  currentProfileData.suffix_linked || false;
            source_option2('suffix', suffix_linked, currentProfileData.suffix_verified_source_icon || "");
            document.getElementById("suffix").locked = currentProfileData.suffix_locked || false;
            const suffix_locked =  currentProfileData.suffix_locked || false;
            lock_option2('suffix', suffix_locked)
            document.getElementById("suffix").disabled = currentProfileData.disabled || "";
            const suffix_disabled = currentProfileData.suffix_disabled || false;
            disable_option2('suffix', suffix_disabled);
            // COMMENTS LATER
            document.getElementById("suffix").history = currentProfileData.suffix_history || false;
            const suffix_history = currentProfileData.suffix_history || false;
            history_option2('suffix', suffix_history);

            // former_name
            document.getElementById("former_name").value = currentProfileData.former_name || "";
            document.getElementById("former_name_verified_source_icon").href = currentProfileData.former_name_verified_source_icon || "";
            document.getElementById("former_name_time").textContent = currentProfileData.former_name_time || "";
            TimestampPosition('former_name');
            document.getElementById("former_name").highlighted = currentProfileData.former_name_highlighted || false;
            const former_name_highlighted = currentProfileData.former_name_highlighted || false;
            color_option2('former_name', former_name_highlighted);
            document.getElementById("former_name").linked = currentProfileData.former_name_linked || false;
            const former_name_linked =  currentProfileData.former_name_linked || false;
            source_option2('former_name', former_name_linked, currentProfileData.former_name_verified_source_icon || "");
            document.getElementById("former_name").locked = currentProfileData.former_name_locked || false;
            const former_name_locked =  currentProfileData.former_name_locked || false;
            lock_option2('former_name', former_name_locked)
            document.getElementById("former_name").disabled = currentProfileData.disabled || "";
            const former_name_disabled = currentProfileData.former_name_disabled || false;
            disable_option2('former_name', former_name_disabled);
            // COMMENTS LATER
            document.getElementById("former_name").history = currentProfileData.former_name_history || false;
            const former_name_history = currentProfileData.former_name_history || false;
            history_option2('former_name', former_name_history);

            // name_origin
            document.getElementById("name_origin").value = currentProfileData.name_origin || "";
            document.getElementById("name_origin_verified_source_icon").href = currentProfileData.name_origin_verified_source_icon || "";
            document.getElementById("name_origin_time").textContent = currentProfileData.name_origin_time || "";
            TimestampPosition('name_origin');
            document.getElementById("name_origin").highlighted = currentProfileData.name_origin_highlighted || false;
            const name_origin_highlighted = currentProfileData.name_origin_highlighted || false;
            color_option2('name_origin', name_origin_highlighted);
            document.getElementById("name_origin").linked = currentProfileData.name_origin_linked || false;
            const name_origin_linked =  currentProfileData.name_origin_linked || false;
            source_option2('name_origin', name_origin_linked, currentProfileData.name_origin_verified_source_icon || "");
            document.getElementById("name_origin").locked = currentProfileData.name_origin_locked || false;
            const name_origin_locked =  currentProfileData.name_origin_locked || false;
            lock_option2('name_origin', name_origin_locked)
            document.getElementById("name_origin").disabled = currentProfileData.disabled || "";
            const name_origin_disabled = currentProfileData.name_origin_disabled || false;
            disable_option2('name_origin', name_origin_disabled);
            // COMMENTS LATER
            document.getElementById("name_origin").history = currentProfileData.name_origin_history || false;
            const name_origin_history = currentProfileData.name_origin_history || false;
            history_option2('name_origin', name_origin_history);

            // personal_thoughts_name
            document.getElementById("personal_thoughts_name").value = currentProfileData.personal_thoughts_name || "";
            document.getElementById("personal_thoughts_name_verified_source_icon").href = currentProfileData.personal_thoughts_name_verified_source_icon || "";
            document.getElementById("personal_thoughts_name_time").textContent = currentProfileData.personal_thoughts_name_time || "";
            TimestampPosition('personal_thoughts_name');
            document.getElementById("personal_thoughts_name").highlighted = currentProfileData.personal_thoughts_name_highlighted || false;
            const personal_thoughts_name_highlighted = currentProfileData.personal_thoughts_name_highlighted || false;
            color_option2('personal_thoughts_name', personal_thoughts_name_highlighted);
            document.getElementById("personal_thoughts_name").linked = currentProfileData.personal_thoughts_name_linked || false;
            const personal_thoughts_name_linked =  currentProfileData.personal_thoughts_name_linked || false;
            source_option2('personal_thoughts_name', personal_thoughts_name_linked, currentProfileData.personal_thoughts_name_verified_source_icon || "");
            document.getElementById("personal_thoughts_name").locked = currentProfileData.personal_thoughts_name_locked || false;
            const personal_thoughts_name_locked =  currentProfileData.personal_thoughts_name_locked || false;
            lock_option2('personal_thoughts_name', personal_thoughts_name_locked)
            document.getElementById("personal_thoughts_name").disabled = currentProfileData.disabled || "";
            const personal_thoughts_name_disabled = currentProfileData.personal_thoughts_name_disabled || false;
            disable_option2('personal_thoughts_name', personal_thoughts_name_disabled);
            // COMMENTS LATER
            document.getElementById("personal_thoughts_name").history = currentProfileData.personal_thoughts_name_history || false;
            const personal_thoughts_name_history = currentProfileData.personal_thoughts_name_history || false;
            history_option2('personal_thoughts_name', personal_thoughts_name_history);

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
    const activeuniverse = universes[selecteduniverseIndex];
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

    // first_name
    profile.first_name = document.getElementById("first_name").value;
    profile.first_name_verified_source_icon = document.getElementById("first_name_verified_source_icon").href;
    profile.first_name_time = document.getElementById("first_name_time").textContent;
    profile.first_name_highlighted = document.getElementById("first_name").highlighted || false;
    profile.first_name_linked = document.getElementById("first_name").linked || false;
    profile.first_name_locked = document.getElementById("first_name").locked || false;
    profile.first_name_disabled = document.getElementById("first_name").disabled || false;
    profile.first_name_history = document.getElementById("first_name").history || false;

    // middle_name
    profile.middle_name = document.getElementById("middle_name").value;
    profile.middle_name_verified_source_icon = document.getElementById("middle_name_verified_source_icon").href;
    profile.middle_name_time = document.getElementById("middle_name_time").textContent;
    profile.middle_name_highlighted = document.getElementById("middle_name").highlighted || false;
    profile.middle_name_linked = document.getElementById("middle_name").linked || false;
    profile.middle_name_locked = document.getElementById("middle_name").locked || false;
    profile.middle_name_disabled = document.getElementById("middle_name").disabled || false;
    profile.middle_name_history = document.getElementById("middle_name").history || false;

    // last_name
    profile.last_name = document.getElementById("last_name").value;
    profile.last_name_verified_source_icon = document.getElementById("last_name_verified_source_icon").href;
    profile.last_name_time = document.getElementById("last_name_time").textContent;
    profile.last_name_highlighted = document.getElementById("last_name").highlighted || false;
    profile.last_name_linked = document.getElementById("last_name").linked || false;
    profile.last_name_locked = document.getElementById("last_name").locked || false;
    profile.last_name_disabled = document.getElementById("last_name").disabled || false;
    profile.last_name_history = document.getElementById("last_name").history || false;

    // nickname
    profile.nickname = document.getElementById("nickname").value;
    profile.nickname_verified_source_icon = document.getElementById("nickname_verified_source_icon").href;
    profile.nickname_time = document.getElementById("nickname_time").textContent;
    profile.nickname_highlighted = document.getElementById("nickname").highlighted || false;
    profile.nickname_linked = document.getElementById("nickname").linked || false;
    profile.nickname_locked = document.getElementById("nickname").locked || false;
    profile.nickname_disabled = document.getElementById("nickname").disabled || false;
    profile.nickname_history = document.getElementById("nickname").history || false;

    // alias
    profile.alias = document.getElementById("alias").value;
    profile.alias_verified_source_icon = document.getElementById("alias_verified_source_icon").href;
    profile.alias_time = document.getElementById("alias_time").textContent;
    profile.alias_highlighted = document.getElementById("alias").highlighted || false;
    profile.alias_linked = document.getElementById("alias").linked || false;
    profile.alias_locked = document.getElementById("alias").locked || false;
    profile.alias_disabled = document.getElementById("alias").disabled || false;
    profile.alias_history = document.getElementById("alias").history || false;

    // alter_ego
    profile.alter_ego = document.getElementById("alter_ego").value;
    profile.alter_ego_verified_source_icon = document.getElementById("alter_ego_verified_source_icon").href;
    profile.alter_ego_time = document.getElementById("alter_ego_time").textContent;
    profile.alter_ego_highlighted = document.getElementById("alter_ego").highlighted || false;
    profile.alter_ego_linked = document.getElementById("alter_ego").linked || false;
    profile.alter_ego_locked = document.getElementById("alter_ego").locked || false;
    profile.alter_ego_disabled = document.getElementById("alter_ego").disabled || false;
    profile.alter_ego_history = document.getElementById("alter_ego").history || false;

    // prefix
    profile.prefix = document.getElementById("prefix").value;
    profile.prefix_verified_source_icon = document.getElementById("prefix_verified_source_icon").href;
    profile.prefix_time = document.getElementById("prefix_time").textContent;
    profile.prefix_highlighted = document.getElementById("prefix").highlighted || false;
    profile.prefix_linked = document.getElementById("prefix").linked || false;
    profile.prefix_locked = document.getElementById("prefix").locked || false;
    profile.prefix_disabled = document.getElementById("prefix").disabled || false;
    profile.prefix_history = document.getElementById("prefix").history || false;

    // suffix
    profile.suffix = document.getElementById("suffix").value;
    profile.suffix_verified_source_icon = document.getElementById("suffix_verified_source_icon").href;
    profile.suffix_time = document.getElementById("suffix_time").textContent;
    profile.suffix_highlighted = document.getElementById("suffix").highlighted || false;
    profile.suffix_linked = document.getElementById("suffix").linked || false;
    profile.suffix_locked = document.getElementById("suffix").locked || false;
    profile.suffix_disabled = document.getElementById("suffix").disabled || false;
    profile.suffix_history = document.getElementById("suffix").history || false;

    // former_name
    profile.former_name = document.getElementById("former_name").value;
    profile.former_name_verified_source_icon = document.getElementById("former_name_verified_source_icon").href;
    profile.former_name_time = document.getElementById("former_name_time").textContent;
    profile.former_name_highlighted = document.getElementById("former_name").highlighted || false;
    profile.former_name_linked = document.getElementById("former_name").linked || false;
    profile.former_name_locked = document.getElementById("former_name").locked || false;
    profile.former_name_disabled = document.getElementById("former_name").disabled || false;
    profile.former_name_history = document.getElementById("former_name").history || false;

    // name_origin
    profile.name_origin = document.getElementById("name_origin").value;
    profile.name_origin_verified_source_icon = document.getElementById("name_origin_verified_source_icon").href;
    profile.name_origin_time = document.getElementById("name_origin_time").textContent;
    profile.name_origin_highlighted = document.getElementById("name_origin").highlighted || false;
    profile.name_origin_linked = document.getElementById("name_origin").linked || false;
    profile.name_origin_locked = document.getElementById("name_origin").locked || false;
    profile.name_origin_disabled = document.getElementById("name_origin").disabled || false;
    profile.name_origin_history = document.getElementById("name_origin").history || false;

    // personal_thoughts_name
    profile.personal_thoughts_name = document.getElementById("personal_thoughts_name").value;
    profile.personal_thoughts_name_verified_source_icon = document.getElementById("personal_thoughts_name_verified_source_icon").href;
    profile.personal_thoughts_name_time = document.getElementById("personal_thoughts_name_time").textContent;
    profile.personal_thoughts_name_highlighted = document.getElementById("personal_thoughts_name").highlighted || false;
    profile.personal_thoughts_name_linked = document.getElementById("personal_thoughts_name").linked || false;
    profile.personal_thoughts_name_locked = document.getElementById("personal_thoughts_name").locked || false;
    profile.personal_thoughts_name_disabled = document.getElementById("personal_thoughts_name").disabled || false;
    profile.personal_thoughts_name_history = document.getElementById("personal_thoughts_name").history || false;

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
                <div class="delete_button" onclick="removeProfile(${index})" title="Delete Profile">
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
    load_dynamic_elements_scheme(current_scheme);
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

    // first_name
    document.getElementById("first_name").value = "";
    document.getElementById("first_name_verified_source_icon").href = "";
    document.getElementById("first_name_time").textContent = "";
    TimestampPosition('first_name');
    document.getElementById("first_name").highlighted = false;
    const first_name_highlighted = false;
    color_option2('first_name', first_name_highlighted);
    document.getElementById("first_name").linked = false;
    const first_name_linked = false;
    source_option2('first_name', first_name_linked);
    document.getElementById("first_name").locked = false;
    const first_name_locked = false;
    lock_option2('first_name', first_name_locked)
    document.getElementById("first_name").disabled = false;
    const first_name_disabled = false;
    disable_option2('first_name', first_name_disabled)
    // COMMENTS LATER
    document.getElementById("first_name").history = true;
    const first_name_history = true;
    history_option2('first_name', first_name_history);

    // middle_name
    document.getElementById("middle_name").value = "";
    document.getElementById("middle_name_verified_source_icon").href = "";
    document.getElementById("middle_name_time").textContent = "";
    TimestampPosition('middle_name');
    document.getElementById("middle_name").highlighted = false;
    const middle_name_highlighted = false;
    color_option2('middle_name', middle_name_highlighted);
    document.getElementById("middle_name").linked = false;
    const middle_name_linked = false;
    source_option2('middle_name', middle_name_linked);
    document.getElementById("middle_name").locked = false;
    const middle_name_locked = false;
    lock_option2('middle_name', middle_name_locked)
    document.getElementById("middle_name").disabled = false;
    const middle_name_disabled = false;
    disable_option2('middle_name', middle_name_disabled)
    // COMMENTS LATER
    document.getElementById("middle_name").history = true;
    const middle_name_history = true;
    history_option2('middle_name', middle_name_history);

    // last_name
    document.getElementById("last_name").value = "";
    document.getElementById("last_name_verified_source_icon").href = "";
    document.getElementById("last_name_time").textContent = "";
    TimestampPosition('last_name');
    document.getElementById("last_name").highlighted = false;
    const last_name_highlighted = false;
    color_option2('last_name', last_name_highlighted);
    document.getElementById("last_name").linked = false;
    const last_name_linked = false;
    source_option2('last_name', last_name_linked);
    document.getElementById("last_name").locked = false;
    const last_name_locked = false;
    lock_option2('last_name', last_name_locked)
    document.getElementById("last_name").disabled = false;
    const last_name_disabled = false;
    disable_option2('last_name', last_name_disabled)
    // COMMENTS LATER
    document.getElementById("last_name").history = true;
    const last_name_history = true;
    history_option2('last_name', last_name_history);

    // nickname
    document.getElementById("nickname").value = "";
    document.getElementById("nickname_verified_source_icon").href = "";
    document.getElementById("nickname_time").textContent = "";
    TimestampPosition('nickname');
    document.getElementById("nickname").highlighted = false;
    const nickname_highlighted = false;
    color_option2('nickname', nickname_highlighted);
    document.getElementById("nickname").linked = false;
    const nickname_linked = false;
    source_option2('nickname', nickname_linked);
    document.getElementById("nickname").locked = false;
    const nickname_locked = false;
    lock_option2('nickname', nickname_locked)
    document.getElementById("nickname").disabled = false;
    const nickname_disabled = false;
    disable_option2('nickname', nickname_disabled)
    // COMMENTS LATER
    document.getElementById("nickname").history = true;
    const nickname_history = true;
    history_option2('nickname', nickname_history);

    // alias
    document.getElementById("alias").value = "";
    document.getElementById("alias_verified_source_icon").href = "";
    document.getElementById("alias_time").textContent = "";
    TimestampPosition('alias');
    document.getElementById("alias").highlighted = false;
    const alias_highlighted = false;
    color_option2('alias', alias_highlighted);
    document.getElementById("alias").linked = false;
    const alias_linked = false;
    source_option2('alias', alias_linked);
    document.getElementById("alias").locked = false;
    const alias_locked = false;
    lock_option2('alias', alias_locked)
    document.getElementById("alias").disabled = false;
    const alias_disabled = false;
    disable_option2('alias', alias_disabled)
    // COMMENTS LATER
    document.getElementById("alias").history = true;
    const alias_history = true;
    history_option2('alias', alias_history);

    // alter_ego
    document.getElementById("alter_ego").value = "";
    document.getElementById("alter_ego_verified_source_icon").href = "";
    document.getElementById("alter_ego_time").textContent = "";
    TimestampPosition('alter_ego');
    document.getElementById("alter_ego").highlighted = false;
    const alter_ego_highlighted = false;
    color_option2('alter_ego', alter_ego_highlighted);
    document.getElementById("alter_ego").linked = false;
    const alter_ego_linked = false;
    source_option2('alter_ego', alter_ego_linked);
    document.getElementById("alter_ego").locked = false;
    const alter_ego_locked = false;
    lock_option2('alter_ego', alter_ego_locked)
    document.getElementById("alter_ego").disabled = false;
    const alter_ego_disabled = false;
    disable_option2('alter_ego', alter_ego_disabled)
    // COMMENTS LATER
    document.getElementById("alter_ego").history = true;
    const alter_ego_history = true;
    history_option2('alter_ego', alter_ego_history);

    // prefix
    document.getElementById("prefix").value = "";
    document.getElementById("prefix_verified_source_icon").href = "";
    document.getElementById("prefix_time").textContent = "";
    TimestampPosition('prefix');
    document.getElementById("prefix").highlighted = false;
    const prefix_highlighted = false;
    color_option2('prefix', prefix_highlighted);
    document.getElementById("prefix").linked = false;
    const prefix_linked = false;
    source_option2('prefix', prefix_linked);
    document.getElementById("prefix").locked = false;
    const prefix_locked = false;
    lock_option2('prefix', prefix_locked)
    document.getElementById("prefix").disabled = false;
    const prefix_disabled = false;
    disable_option2('prefix', prefix_disabled)
    // COMMENTS LATER
    document.getElementById("prefix").history = true;
    const prefix_history = true;
    history_option2('prefix', prefix_history);

    // suffix
    document.getElementById("suffix").value = "";
    document.getElementById("suffix_verified_source_icon").href = "";
    document.getElementById("suffix_time").textContent = "";
    TimestampPosition('suffix');
    document.getElementById("suffix").highlighted = false;
    const suffix_highlighted = false;
    color_option2('suffix', suffix_highlighted);
    document.getElementById("suffix").linked = false;
    const suffix_linked = false;
    source_option2('suffix', suffix_linked);
    document.getElementById("suffix").locked = false;
    const suffix_locked = false;
    lock_option2('suffix', suffix_locked)
    document.getElementById("suffix").disabled = false;
    const suffix_disabled = false;
    disable_option2('suffix', suffix_disabled)
    // COMMENTS LATER
    document.getElementById("suffix").history = true;
    const suffix_history = true;
    history_option2('suffix', suffix_history);

    // former_name
    document.getElementById("former_name").value = "";
    document.getElementById("former_name_verified_source_icon").href = "";
    document.getElementById("former_name_time").textContent = "";
    TimestampPosition('former_name');
    document.getElementById("former_name").highlighted = false;
    const former_name_highlighted = false;
    color_option2('former_name', former_name_highlighted);
    document.getElementById("former_name").linked = false;
    const former_name_linked = false;
    source_option2('former_name', former_name_linked);
    document.getElementById("former_name").locked = false;
    const former_name_locked = false;
    lock_option2('former_name', former_name_locked)
    document.getElementById("former_name").disabled = false;
    const former_name_disabled = false;
    disable_option2('former_name', former_name_disabled)
    // COMMENTS LATER
    document.getElementById("former_name").history = true;
    const former_name_history = true;
    history_option2('former_name', former_name_history);

    // name_origin
    document.getElementById("name_origin").value = "";
    document.getElementById("name_origin_verified_source_icon").href = "";
    document.getElementById("name_origin_time").textContent = "";
    TimestampPosition('name_origin');
    document.getElementById("name_origin").highlighted = false;
    const name_origin_highlighted = false;
    color_option2('name_origin', name_origin_highlighted);
    document.getElementById("name_origin").linked = false;
    const name_origin_linked = false;
    source_option2('name_origin', name_origin_linked);
    document.getElementById("name_origin").locked = false;
    const name_origin_locked = false;
    lock_option2('name_origin', name_origin_locked)
    document.getElementById("name_origin").disabled = false;
    const name_origin_disabled = false;
    disable_option2('name_origin', name_origin_disabled)
    // COMMENTS LATER
    document.getElementById("name_origin").history = true;
    const name_origin_history = true;
    history_option2('name_origin', name_origin_history);

    // personal_thoughts_name
    document.getElementById("personal_thoughts_name").value = "";
    document.getElementById("personal_thoughts_name_verified_source_icon").href = "";
    document.getElementById("personal_thoughts_name_time").textContent = "";
    TimestampPosition('personal_thoughts_name');
    document.getElementById("personal_thoughts_name").highlighted = false;
    const personal_thoughts_name_highlighted = false;
    color_option2('personal_thoughts_name', personal_thoughts_name_highlighted);
    document.getElementById("personal_thoughts_name").linked = false;
    const personal_thoughts_name_linked = false;
    source_option2('personal_thoughts_name', personal_thoughts_name_linked);
    document.getElementById("personal_thoughts_name").locked = false;
    const personal_thoughts_name_locked = false;
    lock_option2('personal_thoughts_name', personal_thoughts_name_locked)
    document.getElementById("personal_thoughts_name").disabled = false;
    const personal_thoughts_name_disabled = false;
    disable_option2('personal_thoughts_name', personal_thoughts_name_disabled)
    // COMMENTS LATER
    document.getElementById("personal_thoughts_name").history = true;
    const personal_thoughts_name_history = true;
    history_option2('personal_thoughts_name', personal_thoughts_name_history);
}

updateuniverseList();
updateProfileList(null);