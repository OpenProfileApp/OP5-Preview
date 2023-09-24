// ids of required buttons
const saveButton = document.getElementById('saveButton');
const loadFileInput = document.getElementById('loadFileInput');
const downloadButton = document.getElementById('downloadButton');
// ids of page author 1
const page_author_1 = document.getElementById('page_author_1');
// ids of written date 1
const written_date_1 = document.getElementById('written_date_1');
// ids of full name
const full_name = document.getElementById('full_name');
const full_name_verified_source_icon = document.getElementById('full_name_verified_source_icon');
const full_name_time = document.getElementById('full_name_time');
// ids of first_name
const first_name = document.getElementById('first_name');
const first_name_verified_source_icon = document.getElementById('first_name_verified_source_icon');
const first_name_time = document.getElementById('first_name_time');
// ids of middle_name
const middle_name = document.getElementById('middle_name');
const middle_name_verified_source_icon = document.getElementById('middle_name_verified_source_icon');
const middle_name_time = document.getElementById('middle_name_time');
// ids of last_name
const last_name = document.getElementById('last_name');
const last_name_verified_source_icon = document.getElementById('last_name_verified_source_icon');
const last_name_time = document.getElementById('last_name_time');
// ids of nickname
const nickname = document.getElementById('nickname');
const nickname_verified_source_icon = document.getElementById('nickname_verified_source_icon');
const nickname_time = document.getElementById('nickname_time');
// ids of alias
const alias = document.getElementById('alias');
const alias_verified_source_icon = document.getElementById('alias_verified_source_icon');
const alias_time = document.getElementById('alias_time');
// ids of alter_ego
const alter_ego = document.getElementById('alter_ego');
const alter_ego_verified_source_icon = document.getElementById('alter_ego_verified_source_icon');
const alter_ego_time = document.getElementById('alter_ego_time');
// ids of prefix
const prefix = document.getElementById('prefix');
const prefix_verified_source_icon = document.getElementById('prefix_verified_source_icon');
const prefix_time = document.getElementById('prefix_time');
// ids of suffix
const suffix = document.getElementById('suffix');
const suffix_verified_source_icon = document.getElementById('suffix_verified_source_icon');
const suffix_time = document.getElementById('suffix_time');
// ids of former_name
const former_name = document.getElementById('former_name');
const former_name_verified_source_icon = document.getElementById('former_name_verified_source_icon');
const former_name_time = document.getElementById('former_name_time');
// ids of name_origin
const name_origin = document.getElementById('name_origin');
const name_origin_verified_source_icon = document.getElementById('name_origin_verified_source_icon');
const name_origin_time = document.getElementById('name_origin_time');
// ids of personal_thoughts_name
const personal_thoughts_name = document.getElementById('personal_thoughts_name');
const personal_thoughts_name_verified_source_icon = document.getElementById('personal_thoughts_name_verified_source_icon');
const personal_thoughts_name_time = document.getElementById('personal_thoughts_name_time');
// Add more field elements here for other fields if needed

// Function to escape newlines in a string
function escapeNewlines(text) {
    return text.replace(/\n/g, '\\n');
}

// Function to unescape newlines in a string
function unescapeNewlines(text) {
    return text.replace(/\\n/g, '\n');
}

// Function to save and download data
function saveAndDownloadData() {
    const fileName = prompt("Enter a file name for saving and downloading (e.g., data.op5)");
    if (!fileName) return;

    // Create data string based on whether full_name is highlighted
    const data = `
FULL-NAME {
  full_name: ${full_name.value || ""}
  full_name_verified_source_icon: ${full_name_verified_source_icon.href || ""}
  full_name_time: ${full_name_time.textContent || ""}
  full_name_highlighted: ${full_name.highlighted || undefined == "false"}
  full_name_linked: ${full_name.linked || undefined == "false"}
  full_name_locked: ${full_name.locked || undefined == "false"}
  full_name_disabled: ${full_name.disabled || undefined == "false"}
  full_name_comments: NOT YET AVALIABLE
  full_name_history: ${!full_name.history || undefined == "true"}
}

FIRST-NAME {
    first_name: ${first_name.value || ""}
    first_name_verified_source_icon: ${first_name_verified_source_icon.href || ""}
    first_name_time: ${first_name_time.textContent || ""}
    first_name_highlighted: ${first_name.highlighted || undefined == "false"}
    first_name_linked: ${first_name.linked || undefined == "false"}
    first_name_locked: ${first_name.locked || undefined == "false"}
    first_name_disabled: ${first_name.disabled || undefined == "false"}
    first_name_comments: NOT YET AVALIABLE
    first_name_history: ${!first_name.history || undefined == "true"}
}`;

// Merge custom download content with data
const mergedData = `———————————————————————————————————————————————————————
———————————————————————————————————————————————————————
———————————————————————————————————————————————————————
   ___                 ___          __ _ _       ___ 
  / _ \ _ __  ___ _ _ | _ \_ _ ___ / _(_) |___  | __|
 | (_) | '_ \/ -_) ' \|  _/ '_/ _ \  _| | / -_) |__ \
  \___/| .__/\___|_||_|_| |_| \___/_| |_|_\___| |___/
       |_|                                              
           ->  https://op5.avatarkage.com  <-

———————————————————————————————————————————————————————
———————————————[ OPENPROFILE-CHARACTER ]———————————————
———————————————————————————————————————————————————————
app_version: ${escapeNewlines(configVersion)}
profile_version: v1.0.0
character_id: op5-perseus
verified: false
language: ${escapeNewlines(configLanguage)}
theme: ${escapeNewlines(configTheme)}

CREDITS {
    openprofile_developer: AvatarKage (developer)
    openprofile_translator:  (translator)
}

———————————————————————————————————————————————————————
———————————————————[ PAGE-AUTHOR-1 ]———————————————————
———————————————————————————————————————————————————————
PAGE-AUTHOR-1 {
    page_author_1: ${page_author_1.value || ""}
}

———————————————————————————————————————————————————————
——————————————————[ WRITTEN-DATE-1 ]———————————————————
———————————————————————————————————————————————————————
WRITTEN-DATE-1 {
    written_date_1: ${written_date_1.value || ""}
}

———————————————————————————————————————————————————————
—————————————————————[ FULL-NAME ]—————————————————————
———————————————————————————————————————————————————————
FULL-NAME {
  full_name: ${full_name.value || ""}
  full_name_verified_source_icon: ${full_name_verified_source_icon.href || ""}
  full_name_time: ${full_name_time.textContent || ""}
  full_name_highlighted: ${full_name.highlighted || undefined == "false"}
  full_name_linked: ${full_name.linked || undefined == "false"}
  full_name_locked: ${full_name.locked || undefined == "false"}
  full_name_disabled: ${full_name.disabled || undefined == "false"}
  full_name_comments: NOT YET AVALIABLE
  full_name_history: ${!full_name.history || undefined == "true"}
}

FULL-NAME-COMMENTS {
    N/A
}

FULL-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ FIRST-NAME ]—————————————————————
———————————————————————————————————————————————————————
FIRST-NAME {
  first_name: ${first_name.value || ""}
  first_name_verified_source_icon: ${first_name_verified_source_icon.href || ""}
  first_name_time: ${first_name_time.textContent || ""}
  first_name_highlighted: ${first_name.highlighted || undefined == "false"}
  first_name_linked: ${first_name.linked || undefined == "false"}
  first_name_locked: ${first_name.locked || undefined == "false"}
  first_name_disabled: ${first_name.disabled || undefined == "false"}
  first_name_comments: NOT YET AVALIABLE
  first_name_history: ${!first_name.history || undefined == "true"}
}

FIRST-NAME-COMMENTS {
    N/A
}

FIRST-NAME-HISTORY {
    N/A
}`;

    const blob = new Blob([mergedData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: fileName.endsWith('.op5') ? fileName : fileName + '.op5' });
    a.click();
    URL.revokeObjectURL(url);
}

function loadData() {
    const fileInput = document.getElementById("loadFileInput");
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
        if (fileExtension === 'op5') {
            const reader = new FileReader();
            reader.onload = (event) => populateFormFields(event.target.result);
            reader.readAsText(selectedFile);
        } else {
            alert("Please select a valid .op5 file.");
        }
    } else {
        alert("Please select a file to load.");
    }
}

function populateFormFields(data) {
    const sections = data.split('\n\n');

    for (const section of sections) {
        const lines = section.split('\n');
        const parsedData = {};

        for (const line of lines) {
            const parts = line.split(': ');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join(':').trim();

                parsedData[key] = value;
            }
        }

        if (parsedData.hasOwnProperty('app_version')) {
            
        }

        if (parsedData.hasOwnProperty('full_name')) {
            full_name.value = unescapeNewlines(parsedData['full_name']) || "";
            full_name_verified_source_icon.href = unescapeNewlines(parsedData['full_name_verified_source_icon']) || "";
            full_name_time.textContent = unescapeNewlines(parsedData['full_name_time']) || "";
            TimestampPosition('full_name');
            const full_name_highlighted = parsedData['full_name_highlighted'] === "true";
            color_option2('full_name', full_name_highlighted);
            const full_name_linked = parsedData['full_name_linked'] === "true";
            source_option2('full_name', full_name_linked, unescapeNewlines(parsedData['full_name_verified_source_icon']));
            const full_name_locked = parsedData['full_name_locked'] === "true";
            lock_option2('full_name', full_name_locked);
            const full_name_disabled = parsedData['full_name_disabled'] === "true";
            disable_option2('full_name', full_name_disabled);
            ///COMMENTS LATER
            const full_name_history = parsedData['full_name_history'] === "true";
            history_option2('full_name', full_name_history);
        }

        if (parsedData.hasOwnProperty('first_name')) {
            first_name.value = unescapeNewlines(parsedData['first_name']) || "";
            first_name_verified_source_icon.href = unescapeNewlines(parsedData['first_name_verified_source_icon']) || "";
            first_name_time.textContent = unescapeNewlines(parsedData['first_name_time']) || "";
            TimestampPosition('first_name');
            const first_name_highlighted = parsedData['first_name_highlighted'] === "true";
            color_option2('first_name', first_name_highlighted);
            const first_name_linked = parsedData['first_name_linked'] === "true";
            source_option2('first_name', first_name_linked, unescapeNewlines(parsedData['first_name_verified_source_icon']));
            const first_name_locked = parsedData['first_name_locked'] === "true";
            lock_option2('first_name', first_name_locked);
            const first_name_disabled = parsedData['first_name_disabled'] === "true";
            disable_option2('first_name', first_name_disabled);
            ///COMMENTS LATER
            const first_name_history = parsedData['first_name_history'] === "true";
            history_option2('first_name', first_name_history);
        }

        if (parsedData.hasOwnProperty('QIUJYFGIFOP')) {
            QIUJYFGIFOP.value = unescapeNewlines(parsedData['QIUJYFGIFOP']) || "";
            QIUJYFGIFOP_verified_source_icon.href = unescapeNewlines(parsedData['QIUJYFGIFOP_verified_source_icon']) || "";
            QIUJYFGIFOP_time.textContent = unescapeNewlines(parsedData['QIUJYFGIFOP_time']) || "";
            TimestampPosition('QIUJYFGIFOP');
            const QIUJYFGIFOP_highlighted = parsedData['QIUJYFGIFOP_highlighted'] === "true";
            color_option2('QIUJYFGIFOP', QIUJYFGIFOP_highlighted);
            const QIUJYFGIFOP_linked = parsedData['QIUJYFGIFOP_linked'] === "true";
            source_option2('QIUJYFGIFOP', QIUJYFGIFOP_linked, unescapeNewlines(parsedData['QIUJYFGIFOP_verified_source_icon']));
            const QIUJYFGIFOP_locked = parsedData['QIUJYFGIFOP_locked'] === "true";
            lock_option2('QIUJYFGIFOP', QIUJYFGIFOP_locked);
            const QIUJYFGIFOP_disabled = parsedData['QIUJYFGIFOP_disabled'] === "true";
            disable_option2('QIUJYFGIFOP', QIUJYFGIFOP_disabled);
            ///COMMENTS LATER
            const QIUJYFGIFOP_history = parsedData['QIUJYFGIFOP_history'] === "true";
            history_option2('QIUJYFGIFOP', QIUJYFGIFOP_history);
        }
    }
}

saveButton.addEventListener('click', saveAndDownloadData);
loadFileInput.addEventListener('change', loadData);