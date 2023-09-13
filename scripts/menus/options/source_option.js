// Store the state of each textbox (linked/unlinked)
const textBoxStatesSource = {};

// Handle "Lock" option click
function source_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const source_group = document.getElementById(`${groupId}_verified_source_group`);
    const source_icon = document.getElementById(`${groupId}_verified_source_icon`);
    const source_tab = document.getElementById(`${groupId}_verified_source_tab`);
    const source_option = document.querySelector("#source_option");

    if (textBox) {
      if (!textBox.readOnly) {
        if (!textBoxStatesSource[textBox.id]) {
          // Prompt the user for a link
          const link = prompt("Enter the link:");

          // Check if the link is valid (you can implement your validation logic here)
          if (isValidLink(link)) {
            // Link the source to the href attribute
            source_icon.href = link;
            source_icon.target = "_blank"
            source_icons_page1();

            // Update the state for this textbox
            textBoxStatesSource[textBox.id] = textBox.linked = true;

            // Update the text and lock option accordingly
            source_option.textContent = "🔗 Unlink Source";
            source_group.style.top = "6px";
            source_icon.style.top = "4.5px";
            source_group.style.opacity = "1";
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
          source_option.textContent = "🔗 Link Source";
          source_group.style.top = "18px";
          source_icon.style.top = "2.5px";
          source_group.style.opacity = "0";
          source_tab.style.height = "11px"
        }
      } else {
        source_option.style.opacity = "0.35"; // Fade the color option
        source_option.style.pointerEvents = "none"; // Disable pointer events
      }

      console.log("Color Group ID:", groupId);
      console.log("Color TextBox:", textBoxStatesSource[textBox.id]);

      closeContextMenu();
    }
  }
}

// Add a click event listener to trigger source_option
document.querySelector("#source_option").addEventListener("click", () => {
  source_option();
});

// Validation function (you can customize this function to suit your needs)
function isValidLink(link) {
  // Implement your link validation logic here
  // For example, you can use regular expressions to check for a valid URL format
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(link);
}