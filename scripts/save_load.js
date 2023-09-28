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
PAGE-AUTHOR-1 {
  page_author_1: ${page_author_1.value || ""}
}

WRITTEN-DATE-1 {
    written_date_1: ${written_date_1.value || ""}
  }

FULL-NAME {
  full_name: ${full_name.value || ""}
  full_name_verified_source_icon: ${full_name_verified_source_icon.href || ""}
  full_name_time: ${full_name_time.textContent || ""}
  full_name_highlighted: ${full_name.highlighted || undefined == "false"}
  full_name_linked: ${full_name.linked || undefined == "false"}
  full_name_locked: ${full_name.locked || undefined == "false"}
  full_name_disabled: ${full_name.disabled || undefined == "false"}
  full_name_comments: NOT YET AVAILABLE
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
    first_name_comments: NOT YET AVAILABLE
    first_name_history: ${!first_name.history || undefined == "true"}
}

MIDDLE-NAME {
    middle_name: ${middle_name.value || ""}
    middle_name_verified_source_icon: ${middle_name_verified_source_icon.href || ""}
    middle_name_time: ${middle_name_time.textContent || ""}
    middle_name_highlighted: ${middle_name.highlighted || undefined == "false"}
    middle_name_linked: ${middle_name.linked || undefined == "false"}
    middle_name_locked: ${middle_name.locked || undefined == "false"}
    middle_name_disabled: ${middle_name.disabled || undefined == "false"}
    middle_name_comments: NOT YET AVAILABLE
    middle_name_history: ${!middle_name.history || undefined == "true"}
}

LAST-NAME {
    last_name: ${last_name.value || ""}
    last_name_verified_source_icon: ${last_name_verified_source_icon.href || ""}
    last_name_time: ${last_name_time.textContent || ""}
    last_name_highlighted: ${last_name.highlighted || undefined == "false"}
    last_name_linked: ${last_name.linked || undefined == "false"}
    last_name_locked: ${last_name.locked || undefined == "false"}
    last_name_disabled: ${last_name.disabled || undefined == "false"}
    last_name_comments: NOT YET AVAILABLE
    last_name_history: ${!last_name.history || undefined == "true"}
}

NICKNAME {
    nickname: ${nickname.value || ""}
    nickname_verified_source_icon: ${nickname_verified_source_icon.href || ""}
    nickname_time: ${nickname_time.textContent || ""}
    nickname_highlighted: ${nickname.highlighted || undefined == "false"}
    nickname_linked: ${nickname.linked || undefined == "false"}
    nickname_locked: ${nickname.locked || undefined == "false"}
    nickname_disabled: ${nickname.disabled || undefined == "false"}
    nickname_comments: NOT YET AVAILABLE
    nickname_history: ${!nickname.history || undefined == "true"}
}

ALIAS {
    alias: ${alias.value || ""}
    alias_verified_source_icon: ${alias_verified_source_icon.href || ""}
    alias_time: ${alias_time.textContent || ""}
    alias_highlighted: ${alias.highlighted || undefined == "false"}
    alias_linked: ${alias.linked || undefined == "false"}
    alias_locked: ${alias.locked || undefined == "false"}
    alias_disabled: ${alias.disabled || undefined == "false"}
    alias_comments: NOT YET AVAILABLE
    alias_history: ${!alias.history || undefined == "true"}
}

ALTER-EGO {
    alter_ego: ${alter_ego.value || ""}
    alter_ego_verified_source_icon: ${alter_ego_verified_source_icon.href || ""}
    alter_ego_time: ${alter_ego_time.textContent || ""}
    alter_ego_highlighted: ${alter_ego.highlighted || undefined == "false"}
    alter_ego_linked: ${alter_ego.linked || undefined == "false"}
    alter_ego_locked: ${alter_ego.locked || undefined == "false"}
    alter_ego_disabled: ${alter_ego.disabled || undefined == "false"}
    alter_ego_comments: NOT YET AVAILABLE
    alter_ego_history: ${!alter_ego.history || undefined == "true"}
}

PREFIX {
    prefix: ${prefix.value || ""}
    prefix_verified_source_icon: ${prefix_verified_source_icon.href || ""}
    prefix_time: ${prefix_time.textContent || ""}
    prefix_highlighted: ${prefix.highlighted || undefined == "false"}
    prefix_linked: ${prefix.linked || undefined == "false"}
    prefix_locked: ${prefix.locked || undefined == "false"}
    prefix_disabled: ${prefix.disabled || undefined == "false"}
    prefix_comments: NOT YET AVAILABLE
    prefix_history: ${!prefix.history || undefined == "true"}
}

SUFFIX {
    suffix: ${suffix.value || ""}
    suffix_verified_source_icon: ${suffix_verified_source_icon.href || ""}
    suffix_time: ${suffix_time.textContent || ""}
    suffix_highlighted: ${suffix.highlighted || undefined == "false"}
    suffix_linked: ${suffix.linked || undefined == "false"}
    suffix_locked: ${suffix.locked || undefined == "false"}
    suffix_disabled: ${suffix.disabled || undefined == "false"}
    suffix_comments: NOT YET AVAILABLE
    suffix_history: ${!suffix.history || undefined == "true"}
}

FORMER-NAME {
    former_name: ${former_name.value || ""}
    former_name_verified_source_icon: ${former_name_verified_source_icon.href || ""}
    former_name_time: ${former_name_time.textContent || ""}
    former_name_highlighted: ${former_name.highlighted || undefined == "false"}
    former_name_linked: ${former_name.linked || undefined == "false"}
    former_name_locked: ${former_name.locked || undefined == "false"}
    former_name_disabled: ${former_name.disabled || undefined == "false"}
    former_name_comments: NOT YET AVAILABLE
    former_name_history: ${!former_name.history || undefined == "true"}
}

NAME-ORIGIN {
    name_origin: ${escapeNewlines(name_origin.value) || ""}
    name_origin_verified_source_icon: ${name_origin_verified_source_icon.href || ""}
    name_origin_time: ${name_origin_time.textContent || ""}
    name_origin_highlighted: ${name_origin.highlighted || undefined == "false"}
    name_origin_linked: ${name_origin.linked || undefined == "false"}
    name_origin_locked: ${name_origin.locked || undefined == "false"}
    name_origin_disabled: ${name_origin.disabled || undefined == "false"}
    name_origin_comments: NOT YET AVAILABLE
    name_origin_history: ${!name_origin.history || undefined == "true"}
}

PERSONAL-THOUGHTS-NAME {
    personal_thoughts_name: ${escapeNewlines(personal_thoughts_name.value) || ""}
    personal_thoughts_name_verified_source_icon: ${personal_thoughts_name_verified_source_icon.href || ""}
    personal_thoughts_name_time: ${personal_thoughts_name_time.textContent || ""}
    personal_thoughts_name_highlighted: ${personal_thoughts_name.highlighted || undefined == "false"}
    personal_thoughts_name_linked: ${personal_thoughts_name.linked || undefined == "false"}
    personal_thoughts_name_locked: ${personal_thoughts_name.locked || undefined == "false"}
    personal_thoughts_name_disabled: ${personal_thoughts_name.disabled || undefined == "false"}
    personal_thoughts_name_comments: NOT YET AVAILABLE
    personal_thoughts_name_history: ${!personal_thoughts_name.history || undefined == "true"}
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
author: user-alice
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
  full_name_comments: NOT YET AVAILABLE
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
  first_name_comments: NOT YET AVAILABLE
  first_name_history: ${!first_name.history || undefined == "true"}
}

FIRST-NAME-COMMENTS {
    N/A
}

FIRST-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ MIDDLE-NAME ]—————————————————————
———————————————————————————————————————————————————————
MIDDLE-NAME {
  middle_name: ${middle_name.value || ""}
  middle_name_verified_source_icon: ${middle_name_verified_source_icon.href || ""}
  middle_name_time: ${middle_name_time.textContent || ""}
  middle_name_highlighted: ${middle_name.highlighted || undefined == "false"}
  middle_name_linked: ${middle_name.linked || undefined == "false"}
  middle_name_locked: ${middle_name.locked || undefined == "false"}
  middle_name_disabled: ${middle_name.disabled || undefined == "false"}
  middle_name_comments: NOT YET AVAILABLE
  middle_name_history: ${!middle_name.history || undefined == "true"}
}

MIDDLE-NAME-COMMENTS {
    N/A
}

MIDDLE-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ LAST-NAME ]—————————————————————
———————————————————————————————————————————————————————
LAST-NAME {
  last_name: ${last_name.value || ""}
  last_name_verified_source_icon: ${last_name_verified_source_icon.href || ""}
  last_name_time: ${last_name_time.textContent || ""}
  last_name_highlighted: ${last_name.highlighted || undefined == "false"}
  last_name_linked: ${last_name.linked || undefined == "false"}
  last_name_locked: ${last_name.locked || undefined == "false"}
  last_name_disabled: ${last_name.disabled || undefined == "false"}
  last_name_comments: NOT YET AVAILABLE
  last_name_history: ${!last_name.history || undefined == "true"}
}

LAST-NAME-COMMENTS {
    N/A
}

LAST-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
———————————————————————[ NICKNAME ]————————————————————
———————————————————————————————————————————————————————
NICKNAME {
  nickname: ${nickname.value || ""}
  nickname_verified_source_icon: ${nickname_verified_source_icon.href || ""}
  nickname_time: ${nickname_time.textContent || ""}
  nickname_highlighted: ${nickname.highlighted || undefined == "false"}
  nickname_linked: ${nickname.linked || undefined == "false"}
  nickname_locked: ${nickname.locked || undefined == "false"}
  nickname_disabled: ${nickname.disabled || undefined == "false"}
  nickname_comments: NOT YET AVAILABLE
  nickname_history: ${!nickname.history || undefined == "true"}
}

NICKNAME-COMMENTS {
    N/A
}

NICKNAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
———————————————————————[ ALIAS ]———————————————————————
———————————————————————————————————————————————————————
ALIAS {
  alias: ${alias.value || ""}
  alias_verified_source_icon: ${alias_verified_source_icon.href || ""}
  alias_time: ${alias_time.textContent || ""}
  alias_highlighted: ${alias.highlighted || undefined == "false"}
  alias_linked: ${alias.linked || undefined == "false"}
  alias_locked: ${alias.locked || undefined == "false"}
  alias_disabled: ${alias.disabled || undefined == "false"}
  alias_comments: NOT YET AVAILABLE
  alias_history: ${!alias.history || undefined == "true"}
}

ALIAS-COMMENTS {
    N/A
}

ALIAS-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
—————————————————————[ ALTER-EGO ]—————————————————————
———————————————————————————————————————————————————————
ALTER-EGO {
  alter_ego: ${alter_ego.value || ""}
  alter_ego_verified_source_icon: ${alter_ego_verified_source_icon.href || ""}
  alter_ego_time: ${alter_ego_time.textContent || ""}
  alter_ego_highlighted: ${alter_ego.highlighted || undefined == "false"}
  alter_ego_linked: ${alter_ego.linked || undefined == "false"}
  alter_ego_locked: ${alter_ego.locked || undefined == "false"}
  alter_ego_disabled: ${alter_ego.disabled || undefined == "false"}
  alter_ego_comments: NOT YET AVAILABLE
  alter_ego_history: ${!alter_ego.history || undefined == "true"}
}

ALTER-EGO-COMMENTS {
    N/A
}

ALTER-EGO-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
——————————————————————[ PREFIX ]———————————————————————
———————————————————————————————————————————————————————
PREFIX {
  prefix: ${prefix.value || ""}
  prefix_verified_source_icon: ${prefix_verified_source_icon.href || ""}
  prefix_time: ${prefix_time.textContent || ""}
  prefix_highlighted: ${prefix.highlighted || undefined == "false"}
  prefix_linked: ${prefix.linked || undefined == "false"}
  prefix_locked: ${prefix.locked || undefined == "false"}
  prefix_disabled: ${prefix.disabled || undefined == "false"}
  prefix_comments: NOT YET AVAILABLE
  prefix_history: ${!prefix.history || undefined == "true"}
}

PREFIX-COMMENTS {
    N/A
}

PREFIX-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
——————————————————————[ SUFFIX ]———————————————————————
———————————————————————————————————————————————————————
SUFFIX {
  suffix: ${suffix.value || ""}
  suffix_verified_source_icon: ${suffix_verified_source_icon.href || ""}
  suffix_time: ${suffix_time.textContent || ""}
  suffix_highlighted: ${suffix.highlighted || undefined == "false"}
  suffix_linked: ${suffix.linked || undefined == "false"}
  suffix_locked: ${suffix.locked || undefined == "false"}
  suffix_disabled: ${suffix.disabled || undefined == "false"}
  suffix_comments: NOT YET AVAILABLE
  suffix_history: ${!suffix.history || undefined == "true"}
}

SUFFIX-COMMENTS {
    N/A
}

SUFFIX-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ FORMER-NAME ]————————————————————
———————————————————————————————————————————————————————
FORMER-NAME {
  former_name: ${former_name.value || ""}
  former_name_verified_source_icon: ${former_name_verified_source_icon.href || ""}
  former_name_time: ${former_name_time.textContent || ""}
  former_name_highlighted: ${former_name.highlighted || undefined == "false"}
  former_name_linked: ${former_name.linked || undefined == "false"}
  former_name_locked: ${former_name.locked || undefined == "false"}
  former_name_disabled: ${former_name.disabled || undefined == "false"}
  former_name_comments: NOT YET AVAILABLE
  former_name_history: ${!former_name.history || undefined == "true"}
}

FORMER-NAME-COMMENTS {
    N/A
}

FORMER-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ NAME-ORIGIN ]————————————————————
———————————————————————————————————————————————————————
NAME-ORIGIN {
  name_origin: ${escapeNewlines(name_origin.value) || ""}
  name_origin_verified_source_icon: ${name_origin_verified_source_icon.href || ""}
  name_origin_time: ${name_origin_time.textContent || ""}
  name_origin_highlighted: ${name_origin.highlighted || undefined == "false"}
  name_origin_linked: ${name_origin.linked || undefined == "false"}
  name_origin_locked: ${name_origin.locked || undefined == "false"}
  name_origin_disabled: ${name_origin.disabled || undefined == "false"}
  name_origin_comments: NOT YET AVAILABLE
  name_origin_history: ${!name_origin.history || undefined == "true"}
}

NAME-ORIGIN-COMMENTS {
    N/A
}

NAME-ORIGIN-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
——————————————[ PERSONAL-THOUGHTS-NAME ]———————————————
———————————————————————————————————————————————————————
PERSONAL-THOUGHTS-NAME {
  personal_thoughts_name: ${escapeNewlines(personal_thoughts_name.value) || ""}
  personal_thoughts_name_verified_source_icon: ${personal_thoughts_name_verified_source_icon.href || ""}
  personal_thoughts_name_time: ${personal_thoughts_name_time.textContent || ""}
  personal_thoughts_name_highlighted: ${personal_thoughts_name.highlighted || undefined == "false"}
  personal_thoughts_name_linked: ${personal_thoughts_name.linked || undefined == "false"}
  personal_thoughts_name_locked: ${personal_thoughts_name.locked || undefined == "false"}
  personal_thoughts_name_disabled: ${personal_thoughts_name.disabled || undefined == "false"}
  personal_thoughts_name_comments: NOT YET AVAILABLE
  personal_thoughts_name_history: ${!personal_thoughts_name.history || undefined == "true"}
}

PERSONAL-THOUGHTS-NAME-COMMENTS {
    N/A
}

PERSONAL-THOUGHTS-NAME-HISTORY {
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

        if (parsedData.hasOwnProperty('page_author_1')) {
            page_author_1.value = unescapeNewlines(parsedData['page_author_1']) || "";
        }

        if (parsedData.hasOwnProperty('written_date_1')) {
            written_date_1.value = unescapeNewlines(parsedData['written_date_1']) || "";
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

       if (parsedData.hasOwnProperty('middle_name')) {
            middle_name.value = unescapeNewlines(parsedData['middle_name']) || "";
            middle_name_verified_source_icon.href = unescapeNewlines(parsedData['middle_name_verified_source_icon']) || "";
            middle_name_time.textContent = unescapeNewlines(parsedData['middle_name_time']) || "";
            TimestampPosition('middle_name');
            const middle_name_highlighted = parsedData['middle_name_highlighted'] === "true";
            color_option2('middle_name', middle_name_highlighted);
            const middle_name_linked = parsedData['middle_name_linked'] === "true";
            source_option2('middle_name', middle_name_linked, unescapeNewlines(parsedData['middle_name_verified_source_icon']));
            const middle_name_locked = parsedData['middle_name_locked'] === "true";
            lock_option2('middle_name', middle_name_locked);
            const middle_name_disabled = parsedData['middle_name_disabled'] === "true";
            disable_option2('middle_name', middle_name_disabled);
            ///COMMENTS LATER
            const middle_name_history = parsedData['middle_name_history'] === "true";
            history_option2('middle_name', middle_name_history);
        }

        if (parsedData.hasOwnProperty('last_name')) {
            last_name.value = unescapeNewlines(parsedData['last_name']) || "";
            last_name_verified_source_icon.href = unescapeNewlines(parsedData['last_name_verified_source_icon']) || "";
            last_name_time.textContent = unescapeNewlines(parsedData['last_name_time']) || "";
            TimestampPosition('last_name');
            const last_name_highlighted = parsedData['last_name_highlighted'] === "true";
            color_option2('last_name', last_name_highlighted);
            const last_name_linked = parsedData['last_name_linked'] === "true";
            source_option2('last_name', last_name_linked, unescapeNewlines(parsedData['last_name_verified_source_icon']));
            const last_name_locked = parsedData['last_name_locked'] === "true";
            lock_option2('last_name', last_name_locked);
            const last_name_disabled = parsedData['last_name_disabled'] === "true";
            disable_option2('last_name', last_name_disabled);
            ///COMMENTS LATER
            const last_name_history = parsedData['last_name_history'] === "true";
            history_option2('last_name', last_name_history);
        }

        if (parsedData.hasOwnProperty('nickname')) {
            nickname.value = unescapeNewlines(parsedData['nickname']) || "";
            nickname_verified_source_icon.href = unescapeNewlines(parsedData['nickname_verified_source_icon']) || "";
            nickname_time.textContent = unescapeNewlines(parsedData['nickname_time']) || "";
            TimestampPosition('nickname');
            const nickname_highlighted = parsedData['nickname_highlighted'] === "true";
            color_option2('nickname', nickname_highlighted);
            const nickname_linked = parsedData['nickname_linked'] === "true";
            source_option2('nickname', nickname_linked, unescapeNewlines(parsedData['nickname_verified_source_icon']));
            const nickname_locked = parsedData['nickname_locked'] === "true";
            lock_option2('nickname', nickname_locked);
            const nickname_disabled = parsedData['nickname_disabled'] === "true";
            disable_option2('nickname', nickname_disabled);
            ///COMMENTS LATER
            const nickname_history = parsedData['nickname_history'] === "true";
            history_option2('nickname', nickname_history);
        }

        if (parsedData.hasOwnProperty('alias')) {
            alias.value = unescapeNewlines(parsedData['alias']) || "";
            alias_verified_source_icon.href = unescapeNewlines(parsedData['alias_verified_source_icon']) || "";
            alias_time.textContent = unescapeNewlines(parsedData['alias_time']) || "";
            TimestampPosition('alias');
            const alias_highlighted = parsedData['alias_highlighted'] === "true";
            color_option2('alias', alias_highlighted);
            const alias_linked = parsedData['alias_linked'] === "true";
            source_option2('alias', alias_linked, unescapeNewlines(parsedData['alias_verified_source_icon']));
            const alias_locked = parsedData['alias_locked'] === "true";
            lock_option2('alias', alias_locked);
            const alias_disabled = parsedData['alias_disabled'] === "true";
            disable_option2('alias', alias_disabled);
            ///COMMENTS LATER
            const alias_history = parsedData['alias_history'] === "true";
            history_option2('alias', alias_history);
        }

        if (parsedData.hasOwnProperty('alter_ego')) {
            alter_ego.value = unescapeNewlines(parsedData['alter_ego']) || "";
            alter_ego_verified_source_icon.href = unescapeNewlines(parsedData['alter_ego_verified_source_icon']) || "";
            alter_ego_time.textContent = unescapeNewlines(parsedData['alter_ego_time']) || "";
            TimestampPosition('alter_ego');
            const alter_ego_highlighted = parsedData['alter_ego_highlighted'] === "true";
            color_option2('alter_ego', alter_ego_highlighted);
            const alter_ego_linked = parsedData['alter_ego_linked'] === "true";
            source_option2('alter_ego', alter_ego_linked, unescapeNewlines(parsedData['alter_ego_verified_source_icon']));
            const alter_ego_locked = parsedData['alter_ego_locked'] === "true";
            lock_option2('alter_ego', alter_ego_locked);
            const alter_ego_disabled = parsedData['alter_ego_disabled'] === "true";
            disable_option2('alter_ego', alter_ego_disabled);
            ///COMMENTS LATER
            const alter_ego_history = parsedData['alter_ego_history'] === "true";
            history_option2('alter_ego', alter_ego_history);
        }

        if (parsedData.hasOwnProperty('prefix')) {
            prefix.value = unescapeNewlines(parsedData['prefix']) || "";
            prefix_verified_source_icon.href = unescapeNewlines(parsedData['prefix_verified_source_icon']) || "";
            prefix_time.textContent = unescapeNewlines(parsedData['prefix_time']) || "";
            TimestampPosition('prefix');
            const prefix_highlighted = parsedData['prefix_highlighted'] === "true";
            color_option2('prefix', prefix_highlighted);
            const prefix_linked = parsedData['prefix_linked'] === "true";
            source_option2('prefix', prefix_linked, unescapeNewlines(parsedData['prefix_verified_source_icon']));
            const prefix_locked = parsedData['prefix_locked'] === "true";
            lock_option2('prefix', prefix_locked);
            const prefix_disabled = parsedData['prefix_disabled'] === "true";
            disable_option2('prefix', prefix_disabled);
            ///COMMENTS LATER
            const prefix_history = parsedData['prefix_history'] === "true";
            history_option2('prefix', prefix_history);
        }

        if (parsedData.hasOwnProperty('suffix')) {
            suffix.value = unescapeNewlines(parsedData['suffix']) || "";
            suffix_verified_source_icon.href = unescapeNewlines(parsedData['suffix_verified_source_icon']) || "";
            suffix_time.textContent = unescapeNewlines(parsedData['suffix_time']) || "";
            TimestampPosition('suffix');
            const suffix_highlighted = parsedData['suffix_highlighted'] === "true";
            color_option2('suffix', suffix_highlighted);
            const suffix_linked = parsedData['suffix_linked'] === "true";
            source_option2('suffix', suffix_linked, unescapeNewlines(parsedData['suffix_verified_source_icon']));
            const suffix_locked = parsedData['suffix_locked'] === "true";
            lock_option2('suffix', suffix_locked);
            const suffix_disabled = parsedData['suffix_disabled'] === "true";
            disable_option2('suffix', suffix_disabled);
            ///COMMENTS LATER
            const suffix_history = parsedData['suffix_history'] === "true";
            history_option2('suffix', suffix_history);
        }

        if (parsedData.hasOwnProperty('former_name')) {
            former_name.value = unescapeNewlines(parsedData['former_name']) || "";
            former_name_verified_source_icon.href = unescapeNewlines(parsedData['former_name_verified_source_icon']) || "";
            former_name_time.textContent = unescapeNewlines(parsedData['former_name_time']) || "";
            TimestampPosition('former_name');
            const former_name_highlighted = parsedData['former_name_highlighted'] === "true";
            color_option2('former_name', former_name_highlighted);
            const former_name_linked = parsedData['former_name_linked'] === "true";
            source_option2('former_name', former_name_linked, unescapeNewlines(parsedData['former_name_verified_source_icon']));
            const former_name_locked = parsedData['former_name_locked'] === "true";
            lock_option2('former_name', former_name_locked);
            const former_name_disabled = parsedData['former_name_disabled'] === "true";
            disable_option2('former_name', former_name_disabled);
            ///COMMENTS LATER
            const former_name_history = parsedData['former_name_history'] === "true";
            history_option2('former_name', former_name_history);
        }

        if (parsedData.hasOwnProperty('name_origin')) {
            name_origin.value = unescapeNewlines(parsedData['name_origin']) || "";
            name_origin_verified_source_icon.href = unescapeNewlines(parsedData['name_origin_verified_source_icon']) || "";
            name_origin_time.textContent = unescapeNewlines(parsedData['name_origin_time']) || "";
            TimestampPosition('name_origin');
            const name_origin_highlighted = parsedData['name_origin_highlighted'] === "true";
            color_option2('name_origin', name_origin_highlighted);
            const name_origin_linked = parsedData['name_origin_linked'] === "true";
            source_option2('name_origin', name_origin_linked, unescapeNewlines(parsedData['name_origin_verified_source_icon']));
            const name_origin_locked = parsedData['name_origin_locked'] === "true";
            lock_option2('name_origin', name_origin_locked);
            const name_origin_disabled = parsedData['name_origin_disabled'] === "true";
            disable_option2('first_name', name_origin_disabled);
            ///COMMENTS LATER
            const name_origin_history = parsedData['name_origin_history'] === "true";
            history_option2('name_origin', name_origin_history);
        }

        if (parsedData.hasOwnProperty('personal_thoughts_name')) {
            personal_thoughts_name.value = unescapeNewlines(parsedData['personal_thoughts_name']) || "";
            personal_thoughts_name_verified_source_icon.href = unescapeNewlines(parsedData['personal_thoughts_name_verified_source_icon']) || "";
            personal_thoughts_name_time.textContent = unescapeNewlines(parsedData['personal_thoughts_name_time']) || "";
            TimestampPosition('personal_thoughts_name');
            const personal_thoughts_name_highlighted = parsedData['personal_thoughts_name_highlighted'] === "true";
            color_option2('personal_thoughts_name', personal_thoughts_name_highlighted);
            const personal_thoughts_name_linked = parsedData['personal_thoughts_name_linked'] === "true";
            source_option2('personal_thoughts_name', personal_thoughts_name_linked, unescapeNewlines(parsedData['personal_thoughts_name_verified_source_icon']));
            const personal_thoughts_name_locked = parsedData['personal_thoughts_name_locked'] === "true";
            lock_option2('personal_thoughts_name', personal_thoughts_name_locked);
            const personal_thoughts_name_disabled = parsedData['personal_thoughts_name_disabled'] === "true";
            disable_option2('personal_thoughts_name', personal_thoughts_name_disabled);
            ///COMMENTS LATER
            const personal_thoughts_name_history = parsedData['personal_thoughts_name_history'] === "true";
            history_option2('personal_thoughts_name', personal_thoughts_name_history);
        }
    }
}

saveButton.addEventListener('click', saveAndDownloadData);
loadFileInput.addEventListener('change', loadData);