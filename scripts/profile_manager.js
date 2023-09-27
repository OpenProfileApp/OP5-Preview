let galaxies = JSON.parse(localStorage.getItem("op5-galaxies")) || [];
let activeGalaxy = null; // Track the active galaxy here

// Function to create a new global galaxy
function createGlobalGalaxy() {
    createGalaxy("op5-profiles", "🌍"); // Default global galaxy with the name "op5-profiles"
}

// Function to create a new galaxy
function createGalaxy() {
    const galaxyName = prompt("Enter a name for the new galaxy:");
    if (!galaxyName) return;

    const galaxyEmoji = prompt("Enter an emoji for the new galaxy (e.g., 🌌):");

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
    const galaxy = galaxies[index];
    updateProfileList(galaxy);
}

function removeGalaxy(index) {
    const confirmDelete = confirm("Are you sure you want to delete this galaxy?");
    if (!confirmDelete) {
        return;
    }
    galaxies.splice(index, 1);
    localStorage.setItem("op5-galaxies", JSON.stringify(galaxies));
    selectedGalaxyIndex = -1; // Clear selection
    updateGalaxyList();
    updateProfileList(null); // Clear profile list
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
    };

    const activeGalaxy = galaxies[selectedGalaxyIndex];
    activeGalaxy.profiles.push(newProfile);
    localStorage.setItem(activeGalaxy.name, JSON.stringify(activeGalaxy));
    document.getElementById("profile-name").value = "";
    updateProfileList(activeGalaxy);
}

function selectProfile(index) {
    // Ask the user if they want to continue without saving changes
    const confirmChange = confirm("Changing the profile without saving changes will discard any unsaved data. Do you want to continue?");
    
    if (confirmChange) {
        // User chose to continue, so select the new profile
        const activeGalaxy = galaxies[selectedGalaxyIndex]; // Get the active galaxy
        selectedProfileIndex = index;
        const profile = activeGalaxy.profiles[index]; // Get the profile from the active galaxy
        document.getElementById("page_author_1").value = profile.page_author_1 || "";
        document.getElementById('written_date_1').value = profile.written_date_1 || "";
        // Add other field assignments here
    } else {
        // User chose to cancel, do nothing
    }
}


function removeProfile(activeGalaxy) {
    if (selectedProfileIndex >= 0 && selectedProfileIndex < activeGalaxy.profiles.length) {
        const confirmDelete = confirm("Are you sure you want to delete this profile?");
        if (!confirmDelete) {
            return;
        }
        activeGalaxy.profiles.splice(selectedProfileIndex, 1);
        localStorage.setItem(activeGalaxy.name, JSON.stringify(activeGalaxy));
        selectedProfileIndex = -1; // Clear selection
        updateProfileList(activeGalaxy);
        clearProfileForm();
    }
}

function renameProfile(activeGalaxy) {
    if (selectedProfileIndex >= 0 && selectedProfileIndex < activeGalaxy.profiles.length) {
        const newName = prompt("Enter a new name for the profile:");
        if (newName !== null && newName.trim() !== "") {
            activeGalaxy.profiles[selectedProfileIndex].name = newName;
            localStorage.setItem(activeGalaxy.name, JSON.stringify(activeGalaxy));
            updateProfileList(activeGalaxy);
            clearProfileForm();
        }
    }
}

function clearProfileForm() {
    document.getElementById("edited-profile-name").value = "";
    document.getElementById("edited-profile-version").value = "";
    document.getElementById("edited-page_author_1").value = "";
    document.getElementById("edited-written_date_1").value = "";
}

// Update the list of profiles in the active galaxy
function updateProfileList(activeGalaxy) {
    const profileList = document.getElementById("profile-list");
    profileList.innerHTML = "";

    if (activeGalaxy) {
        activeGalaxy.profiles.forEach((profile, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${profile.name}</strong><br>
                <em>Profile Version:</em> ${profile.version || ''}<br>
                <em>Page Author:</em> ${profile.page_author_1 || ''}<br>
                <em>Written Date:</em> ${profile.written_date_1 || ''}<br>
                <!-- Add other profile fields here -->
                <button onclick="selectProfile(${index})">Select Profile</button>
            `;
            profileList.appendChild(listItem);
        });
    }
}

// Initial list display
updateGalaxyList();
updateProfileList(null); // Clear profile list
