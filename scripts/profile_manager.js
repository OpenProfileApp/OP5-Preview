let galaxies = JSON.parse(localStorage.getItem("op5-galaxies")) || [];
let selectedGalaxyIndex = -1;
let selectedProfileIndex = -1;
let currentProfileData = {};

function createGlobalGalaxy() {
    createGalaxy("op5-profiles", "🌍");
}

function createGalaxy(name, emoji) {
    const galaxyName = name || prompt("Enter a name for the new galaxy:");
    if (!galaxyName) return;

    const galaxyEmoji = emoji || prompt("Enter an emoji for the new galaxy (e.g., 🌌):");

    const newGalaxy = {
        name: galaxyName,
        emoji: galaxyEmoji,
        profiles: [],
    };

    galaxies.push(newGalaxy);
    localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));
    updateGalaxyList();
}

function selectGalaxy(index) {
    selectedGalaxyIndex = index;
    localStorage.setItem("selectedGalaxyIndex", selectedGalaxyIndex.toString());
    const galaxy = galaxies[index];
    updateProfileList(galaxy);
}

function removeGalaxy(index) {
    const galaxy = galaxies[index];
    const galaxyName = galaxy.name;
    const userInput = prompt(`To confirm deletion, please enter the name of the galaxy "${galaxyName}"`);

    if (userInput === galaxyName) {
        const confirmDelete = confirm("Are you sure you want to delete this galaxy?");
        if (confirmDelete) {
            galaxies.splice(index, 1);
            localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));
            selectedGalaxyIndex = -1;
            updateGalaxyList();
            updateProfileList(null);
        }
    } else {
        alert("Galaxy name does not match. Deletion canceled.");
    }
}

function updateGalaxyList() {
    const galaxyList = document.getElementById("galaxy-list");
    galaxyList.innerHTML = galaxies.map((galaxy, index) => `
        <li>
            <strong>${galaxy.name}</strong> ${galaxy.emoji || ''} 
            <button onclick="selectGalaxy(${index})">Select Galaxy</button>
            <button onclick="removeGalaxy(${index})">Remove Galaxy</button>
        </li>
    `).join("");
}

function addProfile() {
    if (selectedGalaxyIndex < 0 || selectedGalaxyIndex >= galaxies.length) {
        alert("Please select a galaxy to add a profile.");
        return;
    }

    const profileName = document.getElementById("profile-name").value.trim();
    if (profileName === "") {
        alert("Please enter a profile name.");
        return;
    }

    const newProfile = {
        name: profileName,
        version: "v1.0.0",
        page_author_1: document.getElementById("page_author_1").value,
        written_date_1: document.getElementById('written_date_1').value,
        full_name: document.getElementById("full_name").value,
        full_name_verified_source_icon: document.getElementById("full_name_verified_source_icon").href,
        full_name_time: document.getElementById("full_name_time").textContent,
        full_name_highlighted: document.getElementById("full_name").highlighted || false,
        full_name_linked: document.getElementById("full_name").linked || false,
        full_name_locked: document.getElementById("full_name").locked || false,
        full_name_disabled: document.getElementById("full_name").disabled || false,
        full_name_comments: "NOT YET AVAILABLE",
        full_name_history: !document.getElementById("full_name").history || false,
    };

    const activeGalaxy = galaxies[selectedGalaxyIndex];
    activeGalaxy.profiles.push(newProfile);
    localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));

    document.getElementById("profile-name").value = "";
    updateProfileList(activeGalaxy);
}

function removeProfile(index) {
    if (selectedGalaxyIndex >= 0 && selectedGalaxyIndex < galaxies.length) {
        const confirmDelete = confirm("Are you sure you want to delete this profile?");
        if (!confirmDelete) {
            return;
        }
        galaxies[selectedGalaxyIndex].profiles.splice(index, 1);
        localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));
        selectedProfileIndex = -1;
        updateProfileList(galaxies[selectedGalaxyIndex]);
        clearProfileForm();
    }
}

function renameProfile(index) {
    if (selectedGalaxyIndex >= 0 && selectedGalaxyIndex < galaxies.length) {
        const newName = prompt("Enter a new name for the profile:");
        if (newName !== null && newName.trim() !== "") {
            galaxies[selectedGalaxyIndex].profiles[index].name = newName;
            localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));
            updateProfileList(galaxies[selectedGalaxyIndex]);
            clearProfileForm();
        }
    }
}

function clearEditedProfileForm() {
    document.getElementById("page_author_1").value = "";
    document.getElementById('written_date_1').value = "";
    document.getElementById("full_name").value = "";
    document.getElementById("full_name_verified_source_icon").href = "";
    document.getElementById("full_name_time").textContent = "";
    document.getElementById("full_name").highlighted = false;
    document.getElementById("full_name").linked = false;
    document.getElementById("full_name").locked = false;
    document.getElementById("full_name").disabled = false;
}

function loadProfile(index) {
    const activeGalaxy = galaxies[selectedGalaxyIndex];
    const loadButton = document.querySelector("#profile-list li:nth-child(" + (index + 1) + ") button:nth-of-type(1)");

    if (loadButton.textContent === "Load Profile") {
        if (selectedProfileIndex !== index) {
            if (selectedProfileIndex !== -1) {
                const currentProfile = activeGalaxy.profiles[selectedProfileIndex];
                const page_author_1_changed = document.getElementById("page_author_1").value !== (currentProfile.page_author_1 || "");
                const written_date_1_changed = document.getElementById('written_date_1').value !== (currentProfile.written_date_1 || "");
                const full_name_changed = document.getElementById("full_name").value !== (currentProfile.full_name || "");
                const full_name_time_changed = document.getElementById("full_name_time").textContent !== (currentProfile.full_name || "");
                const full_name_highlighted_changed = document.getElementById("full_name").highlighted !== (currentProfile.full_name_highlighted || false);
                const full_name_linked_changed = document.getElementById("full_name").linked !== (currentProfile.full_name_linked || false);
                const full_name_locked_changed = document.getElementById("full_name").locked !== (currentProfile.full_name_locked || false);
                const full_name_disabled_changed = document.getElementById("full_name").disabled !== (currentProfile.full_name_disabled || false);

                if (
                    page_author_1_changed ||
                    written_date_1_changed ||
                    full_name_changed ||
                    full_name_time_changed ||
                    full_name_highlighted_changed ||
                    full_name_linked_changed ||
                    full_name_locked_changed ||
                    full_name_disabled_changed
                ) {
                    const confirmLoad = confirm("Loading a new profile without saving changes will discard any unsaved data. Do you want to continue?");
                    if (!confirmLoad) {
                        return;
                    }
                }
            }

            selectedProfileIndex = index;
            currentProfileData = { ...activeGalaxy.profiles[selectedProfileIndex] };

            document.getElementById("page_author_1").value = currentProfileData.page_author_1 || "";
            document.getElementById('written_date_1').value = currentProfileData.written_date_1 || "";
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
            // COMMENTS LATER
            document.getElementById("full_name").disabled = currentProfileData.full_name_disabled || false;
            const full_name_history = !currentProfileData.full_name_disabled || false;
            history_option2('full_name', full_name_history);

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
    const activeGalaxy = galaxies[selectedGalaxyIndex];
    const profile = activeGalaxy.profiles[selectedProfileIndex];
    profile.page_author_1 = document.getElementById("page_author_1").value;
    profile.written_date_1 = document.getElementById('written_date_1').value;
    profile.full_name = document.getElementById("full_name").value;
    profile.full_name_verified_source_icon = document.getElementById("full_name_verified_source_icon").href;
    profile.full_name_time = document.getElementById("full_name_time").textContent;
    profile.full_name_highlighted = document.getElementById("full_name").highlighted || false;
    profile.full_name_linked = document.getElementById("full_name").linked || false;
    profile.full_name_locked = document.getElementById("full_name").locked || false;
    profile.full_name_disabled = document.getElementById("full_name").disabled || false;
    profile.full_name_history = document.getElementById("full_name").history || false;

    // Save the updated data to localStorage
    localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));

    selectedProfileIndex = -1;
    currentProfileData = {};

    const loadButton = document.querySelector("#profile-list li:nth-child(" + (selectedProfileIndex + 1) + ") button:nth-of-type(1)");
    if (loadButton) {
        loadButton.textContent = "Load Profile";
        loadButton.onclick = () => loadProfile(selectedProfileIndex);
    }

    updateProfileList(activeGalaxy);
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

function updateProfileList(activeGalaxy) {
    const profileList = document.getElementById("profile-list");
    profileList.innerHTML = "";

    if (activeGalaxy) {
        activeGalaxy.profiles.forEach((profile, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${profile.name}</strong><br>
                Page Author: ${profile.page_author_1 || ''}<br>
                Written Date: ${profile.written_date_1 || ''}<br>
                Profile Version: ${profile.version || ''}<br>
                Full Name: ${profile.full_name || ''}<br>
                Full Name Verified Source Icon: ${profile.full_name_verified_source_icon || ''}<br>
                Full Name Time: ${profile.full_name_time || ''}<br>
                <button onclick="loadProfile(${index})">Load Profile</button>
                <button onclick="renameProfile(${index})">Rename</button>
                <button onclick="removeProfile(${index})">Remove</button>
            `;
            profileList.appendChild(listItem);
        });
    }
}

function clearProfileForm() {
    document.getElementById("page_author_1").value = "";
    document.getElementById('written_date_1').value = "";
    document.getElementById("full_name").value = "";
    document.getElementById("full_name_verified_source_icon").href = "";
    document.getElementById("full_name_time").textContent = "";
    document.getElementById("full_name").highlighted = false;
    const full_name_highlighted = document.getElementById("full_name").highlighted = false;
    color_option2('full_name', full_name_highlighted);
    document.getElementById("full_name").linked = false;
    const full_name_linked = document.getElementById("full_name").linked = false;
    source_option2('full_name', full_name_linked);
    document.getElementById("full_name").locked = false;
    const full_name_locked =  document.getElementById("full_name").locked = false;
    lock_option2('full_name', full_name_locked)
    //document.getElementById("full_name").disabled = false;
    //const full_name_disabled = document.getElementById("full_name").disabled = false;
    //disabled_option2('full_name', full_name_disabled);
    // COMMENTS LATER
    document.getElementById("full_name").history = true;
    const full_name_history = document.getElementById("full_name").history = true;
    history_option2('full_name', full_name_history);
}

updateGalaxyList();
updateProfileList(null);