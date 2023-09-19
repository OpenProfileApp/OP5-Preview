const bodyContext = document.body;
let currentClickedElement = null; // Store the currently clicked group

// List of disabled group IDs
const disabledGroupIDs = ["page_author_1", "name_information", "written_date_1"]; // Add the IDs of groups you want to disable here
const consoleLog = document.getElementById("console_log");

// Add a context menu event listener to the entire page
document.addEventListener("contextmenu", (e) => {
    const clickedGroup = e.target.closest(".group");
    if (clickedGroup) {
        e.preventDefault();
        currentClickedElement = clickedGroup; // Store the clicked group
        
        // Get the ID of the clicked group (remove "group" from the ID)
        const groupId = clickedGroup.id.replace("_group", "");

        // Check if the clicked group should have the context menu disabled
        if (disabledGroupIDs.includes(groupId)) {
            return; // Exit the function for disabled groups
        }

        const contextMenu = document.querySelector("#contextMenu");
        contextMenu.style.left = `${e.clientX}px`;
        contextMenu.style.top = `${e.clientY}px`;
        contextMenu.style.display = "block";
        bodyContext.classList.remove("show");

        // Check if the textbox is disabled and update the context menu accordingly
            const textBox = document.getElementById(`${groupId}`);
            const disableOption = document.querySelector("#disable_option");
            const lockOption = document.querySelector("#lock_option");
            const generateOption = document.querySelector("#generate_option");
            const colorOption = document.querySelector("#color_option");
            const source_option = document.querySelector("#source_option");
            const source_history = document.querySelector("#history_option");
            const settings_option = document.querySelector("#settings_option");

            settings_option.style.opacity = "0.35";

            if (textBox.highlighted) {
                colorOption.setAttribute('option', 'option_2');
                translateToActive(configLanguage);
              } else {
                colorOption.setAttribute('option', 'option_1');
                translateToActive(configLanguage);
              }

            if (textBox.readOnly) {
                lockOption.setAttribute('option', 'option_2');
                translateToActive(configLanguage);
                generateOption.style.opacity = "0.35"; // Fade the generate option
                generateOption.style.pointerEvents = "none"; // Disable pointer events
                colorOption.style.opacity = "0.35"; // Fade the color option
                colorOption.style.pointerEvents = "none"; // Disable pointer events
                disableOption.style.opacity = "0.35"; // Fade the lock option
                disableOption.style.pointerEvents = "none"; // Disable pointer events
                source_option.style.opacity = "0.35"; // Fade the color option
                source_option.style.pointerEvents = "none"; // Disable pointer events
                source_history.style.opacity = "0.35"; // Fade the color option
                source_history.style.pointerEvents = "none"; // Disable pointer events
            } else {
                lockOption.setAttribute('option', 'option_1');
                translateToActive(configLanguage);
                generateOption.style.opacity = "1"; // Restore generate option opacity
                generateOption.style.pointerEvents = "auto"; // Enable pointer events
                colorOption.style.opacity = "1"; // Restore color option opacity
                colorOption.style.pointerEvents = "auto"; // Enable pointer events
                disableOption.style.opacity = "1"; // Restore lock option opacity
                disableOption.style.pointerEvents = "auto"; // Enable pointer events
                source_option.style.opacity = "1"; // Fade the color option
                source_option.style.pointerEvents = "auto"; // Disable pointer events
                source_history.style.opacity = "1"; // Fade the color option
                source_history.style.pointerEvents = "auto"; // Disable pointer events
            }
            
            if (textBox.disabled) {
                disableOption.setAttribute('option', 'option_2');
                translateToActive(configLanguage);
                generateOption.style.opacity = "0.35"; // Fade the generate option
                generateOption.style.pointerEvents = "none"; // Disable pointer events
                colorOption.style.opacity = "0.35"; // Fade the color option
                colorOption.style.pointerEvents = "none"; // Disable pointer events
                lockOption.style.opacity = "0.35"; // Fade the lock option
                lockOption.style.pointerEvents = "none"; // Disable pointer events
                source_option.style.opacity = "0.35"; // Fade the color option
                source_option.style.pointerEvents = "none"; // Disable pointer events
                source_history.style.opacity = "0.35"; // Fade the color option
                source_history.style.pointerEvents = "none"; // Disable pointer events
            } else {
                disableOption.setAttribute('option', 'option_1');
                translateToActive(configLanguage);
                generateOption.style.opacity = "1"; // Restore generate option opacity
                generateOption.style.pointerEvents = "auto"; // Enable pointer events
                colorOption.style.opacity = "1"; // Restore color option opacity
                colorOption.style.pointerEvents = "auto"; // Enable pointer events
                lockOption.style.opacity = "1"; // Restore lock option opacity
                lockOption.style.pointerEvents = "auto"; // Enable pointer events
                source_option.style.opacity = "1"; // Fade the color option
                source_option.style.pointerEvents = "auto"; // Disable pointer events
                source_history.style.opacity = "1"; // Fade the color option
                source_history.style.pointerEvents = "auto"; // Disable pointer events
            }

            if (textBox.readOnly) {
                textBox.setAttribute('option', 'option_2');
                generateOption.style.opacity = "0.35"; // Fade the generate option
                generateOption.style.pointerEvents = "none"; // Disable pointer events
                colorOption.style.opacity = "0.35"; // Fade the color option
                colorOption.style.pointerEvents = "none"; // Disable pointer events
                disableOption.style.opacity = "0.35"; // Fade the lock option
                disableOption.style.pointerEvents = "none"; // Disable pointer events
                source_option.style.opacity = "0.35"; // Fade the color option
                source_option.style.pointerEvents = "none"; // Disable pointer events
                source_history.style.opacity = "0.35"; // Fade the color option
                source_history.style.pointerEvents = "none"; // Disable pointer events
            }

            if (textBox.linked) {
                source_option.setAttribute('option', 'option_2');
                translateToActive(configLanguage);
              } else {
                translateToActive(configLanguage);
                source_option.setAttribute('option', 'option_1');
              }

            if (textBox.history) {
                source_history.setAttribute('option', 'option_2');
                translateToActive(configLanguage);
              } else {
                source_history.setAttribute('option', 'option_1');
                translateToActive(configLanguage);
              }
        
        console.log("disabledGroupIDs:", disabledGroupIDs);
        // Create a new <div> element for the log entry
        const logEntry = document.createElement("div");
        logEntry.textContent = "[RMenu] Selected: " + groupId;
        logEntry.style.color = "#ffffff"
        consoleLog.appendChild(logEntry);

        console.log("Associated TextBox:", textBox);
        console.log("textBox.readOnly:", textBox.readOnly);
        console.log("textBox.disabled:", textBox.disabled);
    }
});

// Add global event listeners to close the context menu
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeContextMenu();
    }
});

document.addEventListener("click", (e) => {
    const contextMenu = document.querySelector("#contextMenu");
    if (contextMenu.style.display === "block" && !contextMenu.contains(e.target)) {
        e.preventDefault();
        closeContextMenu();
    }
});

    // Event listener to close the context menu when scrolling
window.addEventListener("scroll", () => {
    closeContextMenu();
});

// Helper function to close the context menu
function closeContextMenu() {
    const contextMenu = document.querySelector("#contextMenu");
    contextMenu.style.display = "none";
}