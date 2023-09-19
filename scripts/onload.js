// ————————————————————[ LOAD-CONFIG ]————————————————————— //
// Load config data when the document is ready
document.addEventListener('DOMContentLoaded', loadConfig);

// Define global variables to store config data
let configLanguage = '';
let configVersion = '';
let selectedLanguage = '';

// Function to load and set config data
function loadConfig() {
    fetch('config.json') // Replace with the correct path to your config file
        .then((response) => response.json())
        .then((config) => {
            // Set global variables based on config data
            configLanguage = config.language;
            configVersion = config.version;

            setTimeout(() => {
                const versionPlaceholder = document.getElementById('version_placeholder');
                if (versionPlaceholder) {
                    versionPlaceholder.textContent = configVersion;
                }
                translateTo(selectedLanguage) //config language later
            }, 500); // Adjust the duration as needed

            // Now you can use configLanguage and configVersion in your script
            // or throughout your document as needed

            // Load the selected language from local storage
            selectedLanguage = localStorage.getItem('selectedLanguage');

            // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
            const logEntry445 = document.createElement("div");
            logEntry445.textContent = '[Local] Language: ' + selectedLanguage;
            logEntry445.style.color = "#ffffff";
            consoleLog.appendChild(logEntry445);

            // Call your translateTo function with the selected language
            if (selectedLanguage) {
                translateTo(selectedLanguage);
            }
        })
        .catch((error) => {
            console.error('Error loading config:', error);
        });
}

// ————————————————————[ LOAD-EMOJIS ]————————————————————— //
function onLoadEmojis() {
    page_author_1_emojis();
    written_date_1_emojis();
    full_name_emojis();
    first_name_emojis();
    middle_name_emojis();
    last_name_emojis();
    nickname_emojis();
    alias_emojis();
    alter_ego_emojis();
    prefix_emojis();
    suffix_emojis();
    former_name_emojis();
    name_origin_emojis();
    personal_thoughts_name_emojis();

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Emojis] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);
}

function onLoadElse() {
    showTextPopup();
}

function onLoadAll() {
    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry4 = document.createElement("div");
    logEntry4.textContent = "[OP5] OpenProfile is loading...";
    logEntry4.style.color = "#ffffff"
    consoleLog.appendChild(logEntry4);
    
    setTimeout(() => {
        onLoadEmojis();
    }, 800); // Adjust the duration as needed
    onLoadElse();

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Page] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);

    const logEntry2 = document.createElement("div");
    logEntry2.textContent = "[Page] This is a test error - nothing happened!";
    logEntry2.style.color = "#c60719"
    consoleLog.appendChild(logEntry2);

    const logEntry3 = document.createElement("div");
    logEntry3.textContent = "[Page] This is a test warning - nothing happened!";
    logEntry3.style.color = "#c29d00"
    consoleLog.appendChild(logEntry3);
}

window.onload = onLoadAll;