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
    const disableOptionIcon = document.querySelector("#disable_option_icon");
    const lockOption = document.querySelector("#lock_option");
    const generateOption = document.querySelector("#generate_option");
    const generateOptionIcon = document.querySelector("#generate_option_icon");
    const colorOption = document.querySelector("#color_option");
    const colorOptionIcon = document.querySelector("#color_option_icon");
    const history_option = document.querySelector("#history_option");
    const historyOptionIcon = document.querySelector("#history_option_icon");
    const sourceOptionIcon = document.querySelector("#source_option_icon");

    if (textBox) {
      // Toggle the locked property based on the current state
      textBox.locked = !textBoxStatesLocked[textBox.id]; // Toggle based on stored state

      // Update the state for this textbox
      textBoxStatesLocked[textBox.id] = textBox.locked;

      // Update the text and lock option accordingly
      if (textBox.locked) {
        textBox.readOnly = true;
        lockOption.setAttribute('option', 'option_2');
        textBox.value = (textBox.value + "🔒");
        generateOption.style.opacity = "0.35"; // Fade the generate option
        generateOption.style.pointerEvents = "none"; // Disable pointer events
        generateOptionIcon.style.opacity = "0.35";
        disableOptionIcon.style.opacity = "0.35";
        colorOptionIcon.style.opacity = "0.35";
        sourceOptionIcon.style.opacity = "0.35";
        historyOptionIcon.style.opacity = "0.35";
        colorOption.style.opacity = "0.35"; // Fade the color option
        colorOption.style.pointerEvents = "none"; // Disable pointer events
        disableOption.style.opacity = "0.35"; // Fade the lock option
        disableOption.style.pointerEvents = "none"; // Disable pointer events
        history_option.style.opacity = "0.35"; // Fade the color option
        history_option.style.pointerEvents = "none"; // Disable pointer events
      } else {
        textBox.readOnly = false;
        lockOption.setAttribute('option', 'option_1')
        textBox.value = textBox.value.replace("🔒", "");
        generateOption.style.opacity = "1"; // Restore generate option opacity
        generateOption.style.pointerEvents = "auto"; // Enable pointer events
        generateOptionIcon.style.opacity = "1";
        disableOptionIcon.style.opacity = "1";
        colorOptionIcon.style.opacity = "1";
        sourceOptionIcon.style.opacity = "1";
        historyOptionIcon.style.opacity = "1";
        colorOption.style.opacity = "1"; // Restore color option opacity
        colorOption.style.pointerEvents = "auto"; // Enable pointer events
        disableOption.style.opacity = "1"; // Restore lock option opacity
        disableOption.style.pointerEvents = "auto"; // Enable pointer events
        history_option.style.opacity = "1"; // Fade the color option
        history_option.style.pointerEvents = "auto"; // Disable pointer events
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

// Handle "Lock" option click
function lock_option2(groupId, locked) {
  // Use the ID to target the associated text box and group
    const textBox = document.getElementById(groupId);
    const disableOption = document.querySelector("#disable_option");
    const lockOption = document.querySelector("#lock_option");
    const generateOption = document.querySelector("#generate_option");
    const colorOption = document.querySelector("#color_option");
    const history_option = document.querySelector("#history_option");

  if (textBox) {

      // Toggle the locked property based on the provided highlighted parameter
      textBox.locked = locked;

      // Update the state for this textbox
      textBoxStatesLocked[textBox.id] = textBox.locked;

      // Update the text and lock option accordingly
      if (textBox.locked) {
        textBox.readOnly = true;
        lockOption.setAttribute('option', 'option_2');
        textBox.value = (textBox.value + "🔒");
        generateOption.style.opacity = "0.35"; // Fade the generate option
        generateOption.style.pointerEvents = "none"; // Disable pointer events
        colorOption.style.opacity = "0.35"; // Fade the color option
        colorOption.style.pointerEvents = "none"; // Disable pointer events
        disableOption.style.opacity = "0.35"; // Fade the lock option
        disableOption.style.pointerEvents = "none"; // Disable pointer events
        history_option.style.opacity = "0.35"; // Fade the color option
        history_option.style.pointerEvents = "none"; // Disable pointer events
      } else {
        textBox.readOnly = false;
        lockOption.setAttribute('option', 'option_1')
        textBox.value = textBox.value.replace("🔒", "");
        generateOption.style.opacity = "1"; // Restore generate option opacity
        generateOption.style.pointerEvents = "auto"; // Enable pointer events
        colorOption.style.opacity = "1"; // Restore color option opacity
        colorOption.style.pointerEvents = "auto"; // Enable pointer events
        disableOption.style.opacity = "1"; // Restore lock option opacity
        disableOption.style.pointerEvents = "auto"; // Enable pointer events
        history_option.style.opacity = "1"; // Fade the color option
        history_option.style.pointerEvents = "auto"; // Disable pointer events
      }

    console.log("Locked Group ID:", groupId);
    console.log("Locked TextBox:", textBox.locked);

    closeContextMenu();
  }
}
