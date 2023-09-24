// Store the state of each textbox (enabled/disabled)
const textBoxStatesLocked = {};

// Handle "Lock" option click
function lock_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const disableOption = document.querySelector("#disable_option");
    const lockOption = document.querySelector("#lock_option");
    const generateOption = document.querySelector("#generate_option");
    const colorOption = document.querySelector("#color_option");
    const source_history = document.querySelector("#history_option");

    if (textBox) {
      // Toggle the readOnly property based on the current state
      textBox.readOnly = !textBoxStatesLocked[textBox.id]; // Toggle based on stored state

      // Update the state for this textbox
      textBoxStatesLocked[textBox.id] = textBox.readOnly;

      // Update the text and lock option accordingly
      if (textBox.readOnly) {
        lockOption.setAttribute('option', 'option_2');
        savedvalue = textBox.value;
        textBox.value = (textBox.value + "🔒");
        generateOption.style.opacity = "0.35"; // Fade the generate option
        generateOption.style.pointerEvents = "none"; // Disable pointer events
        colorOption.style.opacity = "0.35"; // Fade the color option
        colorOption.style.pointerEvents = "none"; // Disable pointer events
        disableOption.style.opacity = "0.35"; // Fade the lock option
        disableOption.style.pointerEvents = "none"; // Disable pointer events
        source_history.style.opacity = "0.35"; // Fade the color option
        source_history.style.pointerEvents = "none"; // Disable pointer events
      } else {
        lockOption.setAttribute('option', 'option_1')
        textBox.value = savedvalue
        generateOption.style.opacity = "1"; // Restore generate option opacity
        generateOption.style.pointerEvents = "auto"; // Enable pointer events
        colorOption.style.opacity = "1"; // Restore color option opacity
        colorOption.style.pointerEvents = "auto"; // Enable pointer events
        disableOption.style.opacity = "1"; // Restore lock option opacity
        disableOption.style.pointerEvents = "auto"; // Enable pointer events
        source_history.style.opacity = "1"; // Fade the color option
        source_history.style.pointerEvents = "auto"; // Disable pointer events
      }
    }
    console.log("Locked/Unlocked Group ID:", groupId);
    console.log("Locked/Unlocked TextBox:", lockOption.textContent);

    closeContextMenu();
  }
}

// Add a click event listener to trigger lock_option
document.querySelector("#lock_option").addEventListener("click", () => {
  lock_option();
});
