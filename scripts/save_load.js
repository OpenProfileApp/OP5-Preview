// Get the input elements and buttons by their respective ids
const firstNameInput = document.getElementById('first_name');
const saveButton = document.getElementById('saveButton');
const loadFileInput = document.getElementById('loadFileInput');
const firstNameTime = document.getElementById('first_name_time');
const firstNameHistoryTab = document.getElementById('first_name_history_tab');
const fileNameInput = document.getElementById('file_name');
const downloadButton = document.getElementById('downloadButton');
const firstNameLink = document.getElementById('first_name_verified_source_icon');
const firstNameLinkGroup = document.getElementById('first_name_verified_source_group');
const firstNameLinkTab = document.getElementById('first_name_verified_source_tab');

// Function to apply style to history tab based on firstNameTime content
function applyStyleBasedOnContent() {
  const content = firstNameTime.textContent.trim(); // Trim whitespace

  if (content !== '') {
    // Apply a style to firstNameHistoryTab when there is content
    firstNameTime.style.opacity = '1';
    firstNameHistoryTab.style.height = '15px';
    firstNameHistoryTab.style.width = '59px';
    firstNameHistoryTab.style.left = '5px';
  } else {
    // Remove the style when there is no content
    firstNameTime.style.opacity = '0';
    firstNameHistoryTab.style.height = '11px';
    firstNameHistoryTab.style.width = '15px';
    firstNameHistoryTab.style.left = '49px';
  }
}

function applyStyleBasedOnContent2() {
  const content = firstNameLink.href.trim(); // Trim whitespace

  if (content !== '') {
    firstNameLinkGroup.style.top ='6px';
    firstNameLink.style.top ='4.5px';
    firstNameLinkTab.style.height = '15px';
  } else {
    firstNameLinkGroup.style.top ='10px';
    firstNameLink.style.top ='2.5px';
    firstNameLinkTab.style.height = '11px';
  }
}

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
    firstName: firstNameInput.value,
    firstNameTime: firstNameTime.textContent,
    firstNameLink: firstNameLink.href,
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
  const op5Content = `; OpenProfile 5 Preview
firstName: ${escapeNewlines(data.firstName) || ""}
firstNameTime: ${escapeNewlines(data.firstNameTime) || ""}
firstNameLink: ${escapeNewlines(data.firstNameLink) || ""}`;

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
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      parsedData[key] = value;
    }
  }

  firstNameInput.value = unescapeNewlines(parsedData.firstName) || "";
  firstNameTime.textContent = unescapeNewlines(parsedData.firstNameTime) || "";
  applyStyleBasedOnContent(); // Apply style when loaded data changes the content
  firstNameLink.href = unescapeNewlines(parsedData.firstNameLink) || "";
  applyStyleBasedOnContent2();
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