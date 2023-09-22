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

// Function to apply style to history tab based on firstNameTime content
//function applyStyleBasedOnContent() {
  //const content = firstNameTime.textContent.trim(); // Trim whitespace

 // if (content !== '') {
    // Apply a style to firstNameHistoryTab when there is content
  //  firstNameTime.style.opacity = '1';
   // firstNameHistoryTab.style.height = '15px';
   // firstNameHistoryTab.style.width = '59px';
   // firstNameHistoryTab.style.left = '5px';
  //} else {
    // Remove the style when there is no content
   // firstNameTime.style.opacity = '0';
   // firstNameHistoryTab.style.height = '11px';
   // firstNameHistoryTab.style.width = '15px';
   // firstNameHistoryTab.style.left = '49px';
//  }
//}

//function applyStyleBasedOnContent2() {
 // const content = firstNameLink.href.trim(); // Trim whitespace

 // if (content !== '') {
//    firstNameLinkGroup.style.top ='6px';
//    firstNameLink.style.top ='4.5px';
//    firstNameLinkTab.style.height = '15px';
//  } else {
//    firstNameLinkGroup.style.top ='10px';
 //   firstNameLink.style.top ='2.5px';
 //   firstNameLinkTab.style.height = '11px';
 // }
//}

// Function to save and download data
function saveAndDownloadData() {
  // Retrieve the value from the input element

  // Prompt the user for a custom file name
  const fileName = prompt("Enter a file name for saving and downloading (e.g., data.op5):");

  if (fileName === null) {
    return;
  }

  // Validate the filename extension
  const validatedFilename = fileName.toLowerCase().endsWith('.op5') ? fileName : fileName + '.op5';

  const data = {
    // ids of page author
    page_author_1: page_author_1.value,
    // ids of written date
    written_date_1: written_date_1.value,
    // ids of full name
    full_name: full_name.value,
    full_name_verified_source_icon: full_name_verified_source_icon.href,
    full_name_time: full_name_time.textContent,

    full_name_highlighted: full_name.highlighted,
    full_name_comments: full_name.comments,
    full_name_linked: full_name.linked,
    full_name_history: full_name.history,
    full_name_locked: full_name.locked,
    full_name_disabled: full_name.disabled,
    // ids of first_name
    first_name: first_name.value,
    first_name_verified_source_icon: first_name_verified_source_icon.href,
    first_name_time: first_name_time.textContent,
    // ids of middle_name
    middle_name: middle_name.value,
    middle_name_verified_source_icon: middle_name_verified_source_icon.href,
    middle_name_time: middle_name_time.textContent,
    // ids of last_name
    last_name: last_name.value,
    last_name_verified_source_icon: last_name_verified_source_icon.href,
    last_name_time: last_name_time.textContent,
    // ids of nickname
    nickname: nickname.value,
    nickname_verified_source_icon: nickname_verified_source_icon.href,
    nickname_time: nickname_time.textContent,
    // ids of alias
    alias: alias.value,
    alias_verified_source_icon: alias_verified_source_icon.href,
    alias_time: alias_time.textContent,
    // ids of alter_ego
    alter_ego: alter_ego.value,
    alter_ego_verified_source_icon: alter_ego_verified_source_icon.href,
    alter_ego_time: alter_ego_time.textContent,
    // ids of prefix
    prefix: prefix.value,
    prefix_verified_source_icon: prefix_verified_source_icon.href,
    prefix_time: prefix_time.textContent,
    // ids of suffix
    suffix: suffix.value,
    suffix_verified_source_icon: suffix_verified_source_icon.href,
    suffix_time: suffix_time.textContent,
    // ids of former_name
    former_name: former_name.value,
    former_name_verified_source_icon: former_name_verified_source_icon.href,
    former_name_time: former_name_time.textContent,
    // ids of name_origin
    name_origin: name_origin.value,
    name_origin_verified_source_icon: name_origin_verified_source_icon.href,
    name_origin_time: name_origin_time.textContent,
    // ids of personal_thoughts_name
    personal_thoughts_name: personal_thoughts_name.value,
    personal_thoughts_name_verified_source_icon: personal_thoughts_name_verified_source_icon.href,
    personal_thoughts_name_time: personal_thoughts_name_time.textContent,
  };

  const op5Content = generateOp5FileContent(data);
  
  // Create a Blob containing the data
  const blob = new Blob([op5Content], { type: 'text/plain' });

  // Create an object URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an anchor element to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = validatedFilename;

  // Trigger a click event on the anchor element
  a.click();

  // Clean up by revoking the Object URL
  URL.revokeObjectURL(url);
}

// Function to generate .op5 file contents
function generateOp5FileContent(data) {
    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry14 = document.createElement("div");
    logEntry14.textContent = `[Save] Highlighted: ${JSON.parse(data.full_name_highlighted) || false}`;
    logEntry14.style.color = "#ffffff"
    consoleLog.appendChild(logEntry14);
  
  const op5Content = 
`———————————————————————————————————————————————————————
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
app_version: ${escapeNewlines(configVersion) || ""}
profile_version:
language:
theme:

CREDITS {
    openprofile_developer: AvatarKage (developer)
    openprofile_translator:  (translator)
}

———————————————————————————————————————————————————————
———————————————————[ PAGE-AUTHOR-1 ]———————————————————
———————————————————————————————————————————————————————
PAGE-AUTHOR-1-DATA {
    page_author_1: ${escapeNewlines(data.page_author_1) || ""}
}

———————————————————————————————————————————————————————
——————————————————[ WRITTEN-DATE-1 ]———————————————————
———————————————————————————————————————————————————————
WRITTEN-DATE-1-DATA {
    written_date_1: ${escapeNewlines(data.written_date_1) || ""}
}

———————————————————————————————————————————————————————
—————————————————————[ FULL-NAME ]—————————————————————
———————————————————————————————————————————————————————
FULL-NAME-DATA {
    full_name: ${escapeNewlines(data.full_name) || ""}
    full_name_verified_source_icon: ${escapeNewlines(data.full_name_verified_source_icon) || ""}
    full_name_time: ${escapeNewlines(data.full_name_time) || ""}
}

FULL-NAME-GROUP {
    full_name.highlighted: ${data.full_name_highlighted || "false"}
    full_name.comments: ${data.full_name_comments || "true"}
    full_name.linked: ${data.full_name_linked || "false"}
    full_name.history: ${data.full_name_history || "true"}
    full_name.locked: ${data.full_name_locked || "false"}
    full_name.disabled: ${data.full_name_disabled || "false"}
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
FIRST-NAME-DATA {
    first_name: ${escapeNewlines(data.first_name) || ""}
    first_name_verified_source_icon: ${escapeNewlines(data.first_name_verified_source_icon) || ""}
    first_name_time: ${escapeNewlines(data.first_name_time) || ""}
}

FIRST-NAME-GROUP {
    first_name.highlighted: false
    first_name.linked: false
    first_name.locked: false
    first_name.disabled: false
    first_name.comments: false
    first_name.history: true
    first_name.history_visible: true
}

FIRST-NAME-COMMENTS {
    N/A
}

FIRST-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
————————————————————[ MIDDLE-NAME ]————————————————————
———————————————————————————————————————————————————————
MIDDLE-NAME-DATA {
    middle_name: ${escapeNewlines(data.middle_name) || ""}
    middle_name_verified_source_icon: ${escapeNewlines(data.middle_name_verified_source_icon) || ""}
    middle_name_time: ${escapeNewlines(data.middle_name_time) || ""}
}

MIDDLE-NAME-GROUP {
    middle_name.highlighted: false
    middle_name.linked: false
    middle_name.locked: false
    middle_name.disabled: false
    middle_name.comments: false
    middle_name.history: true
    middle_name.history_visible: true
}

MIDDLE-NAME-COMMENTS {
    N/A
}

MIDDLE-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
—————————————————————[ LAST-NAME ]—————————————————————
———————————————————————————————————————————————————————
LAST-NAME-DATA {
    last_name: ${escapeNewlines(data.last_name) || ""}
    last_name_verified_source_icon: ${escapeNewlines(data.last_name_verified_source_icon) || ""}
    last_name_time: ${escapeNewlines(data.last_name_time) || ""}
}

LAST-NAME-GROUP {
    last_name.highlighted: false
    last_name.linked: false
    last_name.locked: false
    last_name.disabled: false
    last_name.comments: false
    last_name.history: true
    last_name.history_visible: true
}

LAST-NAME-COMMENTS {
    N/A
}

LAST-NAME-HISTORY {
    N/A
}

———————————————————————————————————————————————————————
—————————————————————[ NICKNAME ]——————————————————————
———————————————————————————————————————————————————————
NICKNAME-DATA {
    nickname: ${escapeNewlines(data.nickname) || ""}
    nickname_verified_source_icon: ${escapeNewlines(data.nickname_verified_source_icon) || ""}
    nickname_time: ${escapeNewlines(data.nickname_time) || ""}
}

NICKNAME-GROUP {
    nickname.highlighted: false
    nickname.linked: false
    nickname.locked: false
    nickname.disabled: false
    nickname.comments: false
    nickname.history: true
    nickname.history_visible: true
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
ALIAS-DATA {
    alias: ${escapeNewlines(data.alias) || ""}
    alias_verified_source_icon: ${escapeNewlines(data.alias_verified_source_icon) || ""}
    alias_time: ${escapeNewlines(data.alias_time) || ""}
}

ALIAS-GROUP {
    alias.highlighted: false
    alias.linked: false
    alias.locked: false
    alias.disabled: false
    alias.comments: false
    alias.history: true
    alias.history_visible: true
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
ALTER-EGO-DATA {
    alter_ego: ${escapeNewlines(data.alter_ego) || ""}
    alter_ego_verified_source_icon: ${escapeNewlines(data.alter_ego_verified_source_icon) || ""}
    alter_ego_time: ${escapeNewlines(data.alter_ego_time) || ""}
}

ALTER-EGO-GROUP {
    alter_ego.highlighted: false
    alter_ego.linked: false
    alter_ego.locked: false
    alter_ego.disabled: false
    alter_ego.comments: false
    alter_ego.history: true
    alter_ego.history_visible: true
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
PREFIX-DATA {
    prefix: ${escapeNewlines(data.prefix) || ""}
    prefix_verified_source_icon: ${escapeNewlines(data.prefix_verified_source_icon) || ""}
    prefix_time: ${escapeNewlines(data.prefix_time) || ""}
}

PREFIX-GROUP {
    prefix.highlighted: false
    prefix.linked: false
    prefix.locked: false
    prefix.disabled: false
    prefix.comments: false
    prefix.history: true
    prefix.history_visible: true
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
SUFFIX-DATA {
    suffix: ${escapeNewlines(data.suffix) || ""}
    suffix_verified_source_icon: ${escapeNewlines(data.suffix_verified_source_icon) || ""}
    suffix_time: ${escapeNewlines(data.suffix_time) || ""}
}

SUFFIX-GROUP {
    suffix.highlighted: false
    suffix.linked: false
    suffix.locked: false
    suffix.disabled: false
    suffix.comments: false
    suffix.history: true
    suffix.history_visible: true
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
FORMER-NAME-DATA {
    former_name: ${escapeNewlines(data.former_name) || ""}
    former_name_verified_source_icon: ${escapeNewlines(data.former_name_verified_source_icon) || ""}
    former_name_time: ${escapeNewlines(data.former_name_time) || ""}
}

FORMER-NAME-GROUP {
    former_name.highlighted: false
    former_name.linked: false
    former_name.locked: false
    former_name.disabled: false
    former_name.comments: false
    former_name.history: true
    former_name.history_visible: true
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
NAME-ORIGIN-DATA {
    name_origin: ${escapeNewlines(data.name_origin) || ""}
    name_origin_verified_source_icon: ${escapeNewlines(data.name_origin_verified_source_icon) || ""}
    name_origin_time: ${escapeNewlines(data.name_origin_time) || ""}
}

NAME-ORIGIN-GROUP {
    name_origin.highlighted: false
    name_origin.linked: false
    name_origin.locked: false
    name_origin.disabled: false
    name_origin.comments: false
    name_origin.history: true
    name_origin.history_visible: true
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
PERSONAL-THOUGHTS-NAME-DATA {
    personal_thoughts_name: ${escapeNewlines(data.personal_thoughts_name) || ""}
    personal_thoughts_name_verified_source_icon: ${escapeNewlines(data.personal_thoughts_name_verified_source_icon) || ""}
    personal_thoughts_name_time: ${escapeNewlines(data.personal_thoughts_name_time) || ""}
}

PERSONAL-THOUGHTS-NAME-GROUP {
    personal_thoughts_name.highlighted: false
    personal_thoughts_name.linked: false
    personal_thoughts_name.locked: false
    personal_thoughts_name.disabled: false
    personal_thoughts_name.comments: false
    personal_thoughts_name.history: true
    personal_thoughts_name.history_visible: true
}

PERSONAL-THOUGHTS-NAME-COMMENTS {
    N/A
}

PERSONAL-THOUGHTS-NAME-HISTORY {
    N/A
}`;
  return op5Content;
}

function escapeNewlines(text) {
  return text.replace(/\n/g, '\\n');
}

// Load data
function loadData() {
  const fileInput = document.getElementById("loadFileInput");
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    if (fileExtension === 'op5') {
      readFile(selectedFile, function (data) {
        populateFormFields(data);
        // Call displayFavicon() here to display the favicon when data is loaded
        displayFavicon();
      });
    } else {
      alert("Please select a valid .op5 file.");
    }
  } else {
    alert("Please select a file to load.");
  }
}

function populateFormFields(data) {
  const lines = data.split('\n');
  const parsedData = {};

  for (const line of lines) {
    const parts = line.split(': ');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      parsedData[key] = value;
    }
  }

  console.log('Parsed Data:', parsedData); // Log the parsed data

//author page 1
page_author_1.value = unescapeNewlines(parsedData.page_author_1) || "";
//written date 1
written_date_1.value = unescapeNewlines(parsedData.written_date_1) || "";
//full_name
full_name.value = unescapeNewlines(parsedData.full_name) || "";
full_name_verified_source_icon.href = unescapeNewlines(parsedData.full_name_verified_source_icon) || "";
full_name_time.textContent = unescapeNewlines(parsedData.full_name_time) || "";
full_name.highlighted = parsedData.full_name_highlighted || "";
//first_name
first_name.value = unescapeNewlines(parsedData.first_name) || "";
first_name_verified_source_icon.href = unescapeNewlines(parsedData.first_name_verified_source_icon) || "";
first_name_time.textContent = unescapeNewlines(parsedData.first_name_time) || "";
//middle_name
middle_name.value = unescapeNewlines(parsedData.middle_name) || "";
middle_name_verified_source_icon.href = unescapeNewlines(parsedData.middle_name_verified_source_icon) || "";
middle_name_time.textContent = unescapeNewlines(parsedData.middle_name_time) || "";
//last_name
last_name.value = unescapeNewlines(parsedData.last_name) || "";
last_name_verified_source_icon.href = unescapeNewlines(parsedData.last_name_verified_source_icon) || "";
last_name_time.textContent = unescapeNewlines(parsedData.last_name_time) || "";
//nickname
nickname.value = unescapeNewlines(parsedData.nickname) || "";
nickname_verified_source_icon.href = unescapeNewlines(parsedData.nickname_verified_source_icon) || "";
nickname_time.textContent = unescapeNewlines(parsedData.nickname_time) || "";
//alias
alias.value = unescapeNewlines(parsedData.alias) || "";
alias_verified_source_icon.href = unescapeNewlines(parsedData.alias_verified_source_icon) || "";
alias_time.textContent = unescapeNewlines(parsedData.alias_time) || "";
//alter_ego
alter_ego.value = unescapeNewlines(parsedData.alter_ego) || "";
alter_ego_verified_source_icon.href = unescapeNewlines(parsedData.alter_ego_verified_source_icon) || "";
alter_ego_time.textContent = unescapeNewlines(parsedData.alter_ego_time) || "";
//prefix
prefix.value = unescapeNewlines(parsedData.prefix) || "";
prefix_verified_source_icon.href = unescapeNewlines(parsedData.prefix_verified_source_icon) || "";
prefix_time.textContent = unescapeNewlines(parsedData.prefix_time) || "";
//suffix
suffix.value = unescapeNewlines(parsedData.suffix) || "";
suffix_verified_source_icon.href = unescapeNewlines(parsedData.suffix_verified_source_icon) || "";
suffix_time.textContent = unescapeNewlines(parsedData.suffix_time) || "";
//former_name
former_name.value = unescapeNewlines(parsedData.former_name) || "";
former_name_verified_source_icon.href = unescapeNewlines(parsedData.former_name_verified_source_icon) || "";
former_name_time.textContent = unescapeNewlines(parsedData.former_name_time) || "";
//name_origin
name_origin.value = unescapeNewlines(parsedData.name_origin) || "";
name_origin_verified_source_icon.href = unescapeNewlines(parsedData.name_origin_verified_source_icon) || "";
name_origin_time.textContent = unescapeNewlines(parsedData.name_origin_time) || "";
//personal_thoughts_name
personal_thoughts_name.value = unescapeNewlines(parsedData.personal_thoughts_name) || "";
personal_thoughts_name_verified_source_icon.href = unescapeNewlines(parsedData.personal_thoughts_name_verified_source_icon) || "";
personal_thoughts_name_time.textContent = unescapeNewlines(parsedData.personal_thoughts_name_time) || "";

applyStyleBasedOnContent2();
color_optionForElement(elementId);
displayFavicon();
}

function unescapeNewlines(text) {
  return text.replace(/\\n/g, '\n');
}

function readFile(file, callback) {
  const reader = new FileReader();
  reader.onload = function (event) {
    callback(event.target.result);
  };
  reader.readAsText(file);
}

// Event listener for the "Save" button
saveButton.addEventListener('click', saveAndDownloadData);

// Event listeners for other buttons
loadFileInput.addEventListener('change', loadData);
downloadButton.addEventListener('click', saveAndDownloadData);
firstNameTime.addEventListener('input', applyStyleBasedOnContent);