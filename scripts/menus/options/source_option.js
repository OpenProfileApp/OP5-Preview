// Store the state of each textbox (linked/unlinked)
const textBoxStatesSource = {};

// Handle "Lock" option click
function source_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const source_tab = document.getElementById(`${groupId}_verified_source_tab`);
    const source_icon = document.getElementById(`${groupId}_verified_source_icon`);
    const source_option = document.querySelector("#source_option");

    
    if (textBox) {
      if (!textBox.locked) {
        if (!textBoxStatesSource[textBox.id]) {
          // Prompt the user for a link
          const link = prompt("Enter the link:");

          // Check if the link is valid (you can implement your validation logic here)
          if (isValidLink(link)) {
            // Link the source to the href attribute
            source_icon.href = link;
            source_icon.target = "_blank"
            displayFavicon();

            // Update the state for this textbox
            textBoxStatesSource[textBox.id] = textBox.linked = true;

            // Update the text and lock option accordingly
            source_option.setAttribute('option', 'option_2');
            source_tab.style.top = "6px";
            source_tab.style.opacity = "1";
            source_tab.style.height = "15px";
          } else {
            alert("Invalid link. Please enter a valid URL.");
          }
        } else {
          // Toggle the link state
          textBoxStatesSource[textBox.id] = textBox.linked = false;

          // Clear the href
          source_icon.href = "";

          // Update the text and lock option accordingly
          source_option.setAttribute('option', 'option_1');
          source_tab.style.top = "18px";
          source_tab.style.opacity = "0";
          source_tab.style.height = "11px"
        }
      } else {
        source_option.style.opacity = "0.35"; // Fade the color option
        source_option.style.pointerEvents = "none"; // Disable pointer events
      }

      console.log("Group ID:", groupId);
      console.log("Text Box Linked:", textBoxStatesSource[textBox.id]);

      closeContextMenu();
    }
  }
}

// Add a click event listener to trigger source_option
document.querySelector("#source_option").addEventListener("click", () => {
  closeContextMenu();
  source_option();
});

// Handle "Lock" option click
function source_option2(groupId, linked, link) {
  // Use the ID to target the associated text box and group
  const textBox = document.getElementById(`${groupId}`);
  const source_tab = document.getElementById(`${groupId}_verified_source_tab`);
  const source_option = document.querySelector("#source_option");
  const faviconElement = document.getElementById(`${groupId}_verified_source_favicon`);

  if (textBox) {
    if (!textBox.locked) {
      // Toggle the locked property based on the provided highlighted parameter
      textBox.linked = linked;

      // Update the state for this textbox
      textBoxStatesSource[textBox.id] = textBox.linked;

      // Update the text and lock option accordingly
      if (textBox.linked) {
        source_option.setAttribute('option', 'option_2');
        translateIndividualElement('source_option', textBox.linked, selectedLanguage);
        source_tab.style.top = "6px";
        source_tab.style.opacity = "1";
        source_tab.style.height = "15px";
        closeContextMenu();

        if (isValidLink(link)) {
          // Display the favicon if the link is valid
          displayFavicon(link, faviconElement);
        } else {
          // Handle invalid link here
          console.error("Invalid link:", link);
          // You can set a default or display an error icon
        }
      } else {
        source_option.setAttribute('option', 'option_1');
        translateIndividualElement('source_option', textBox.linked, selectedLanguage);
        source_tab.style.top = "18px";
        source_tab.style.opacity = "0";
        source_tab.style.height = "11px";
        // Clear the favicon when unlocking
        faviconElement.src = "";
        closeContextMenu();
      }
    } else {
      source_option.style.opacity = "0.35"; // Fade the color option
      source_option.style.pointerEvents = "none"; // Disable pointer events
    }
    console.log("Source Group ID:", groupId);
    console.log("Source TextBox:", textBox.linked);

    closeContextMenu();
  }
}

function displayFavicon(url, faviconElement) {
  // Generate the favicon URL using favicon.io
  const faviconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=64`;

  // Set the src attribute of the image element to the favicon URL
  faviconElement.src = faviconUrl;
  updateVerifiedSourcePosition();
}

// Function to check if a link is valid (you can customize this function)
function isValidLink(link) {
  // Implement your link validation logic here
  // For example, you can use regular expressions to check for a valid URL format
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(link);
}