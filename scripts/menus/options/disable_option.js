// Store the state of each textbox (enabled/disabled)
const textBoxStatesDisabled = {};

// Handle "Disable" option click
function disable_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const group = document.getElementById(`${groupId}_group`);
    const disableOption = document.querySelector("#disable_option");
    const lockOption = document.querySelector("#lock_option");
    const generateOption = document.querySelector("#generate_option");
    const colorOption = document.querySelector("#color_option");

    if (textBox) {
      // Toggle the disabled property based on the current state
      textBox.disabled = !textBoxStatesDisabled[textBox.id]; // Toggle based on stored state

      // Update the state for this textbox
      textBoxStatesDisabled[textBox.id] = textBox.disabled;

      // Update the text and lock option accordingly
      if (textBox.disabled) {
        disableOption.textContent = "✅ Enable Textbox";
        group.style.opacity = "0.35"; // Update the group's opacity
        generateOption.style.opacity = "0.35"; // Fade the generate option
        generateOption.style.pointerEvents = "none"; // Disable pointer events
        colorOption.style.opacity = "0.35"; // Fade the lock option
        colorOption.style.pointerEvents = "none"; // Disable pointer events
        lockOption.style.opacity = "0.35"; // Fade the lock option
        lockOption.style.pointerEvents = "none"; // Disable pointer events
        textBox.value = " "; // Set a space as the value
        textBox.highlighted = false;
      } else {
        disableOption.textContent = "❌ Disable Textbox";
        group.style.opacity = "1"; // Update the group's opacity
        generateOption.style.opacity = "1"; // Restore generate option opacity
        generateOption.style.pointerEvents = "auto"; // Enable pointer events
        colorOption.style.opacity = "1"; // Fade the lock option
        colorOption.style.pointerEvents = "auto"; // Disable pointer events
        lockOption.style.opacity = "1"; // Restore lock option opacity
        lockOption.style.pointerEvents = "auto"; // Enable pointer events
        textBox.value = ""; // Clear the value
      }
    }
    console.log("Disabled/Enabled Group ID:", groupId);
    console.log("Disabled/Enabled TextBox:", disableOption.textContent);

    closeContextMenu();
  }
}

// Add a click event listener to trigger disable_option
document.querySelector("#disable_option").addEventListener("click", () => {
  disable_option();
});