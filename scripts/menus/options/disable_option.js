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
    const source_group = document.getElementById(`${groupId}_verified_source_group`);
    const source_icon = document.getElementById(`${groupId}_verified_source_icon`);
    const source_option = document.querySelector("#source_option");
    const source_history = document.querySelector("#history_option");
    const history_group = document.getElementById(`${groupId}_history_group`);
    const timestamp = document.getElementById(`${groupId}_time`);
    const timetab = document.getElementById(`${groupId}_history_tab`);

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
        source_history.style.opacity = "0.35"; // Fade the color option
        source_history.style.pointerEvents = "none"; // Disable pointer events
        textBox.value = " "; // Set a space as the value
        source_option.textContent = "🔗 Link Source";
        history_group.style.top = "9px"
        history_group.style.opacity = "0"
        source_group.style.top = "6px";
        source_group.style.opacity = "0";
        textBox.style.backgroundColor = "#ffffff";
        textBoxStatesSource[textBox.id] = textBox.linked = false;
        textBoxStatesColored[textBox.id] = textBox.highlighted = false;
        timestamp.textContent = "";
        timetab.style.width = "15px";
        timetab.style.height = "11px";
        timetab.style.left = (parseInt(timetab.style.left, 10) + 44) + "px";
      } else {
        disableOption.textContent = "❌ Disable Textbox";
        group.style.opacity = "1"; // Update the group's opacity
        generateOption.style.opacity = "1"; // Restore generate option opacity
        generateOption.style.pointerEvents = "auto"; // Enable pointer events
        colorOption.style.opacity = "1"; // Fade the lock option
        colorOption.style.pointerEvents = "auto"; // Disable pointer events
        lockOption.style.opacity = "1"; // Restore lock option opacity
        lockOption.style.pointerEvents = "auto"; // Enable pointer events
        source_history.style.opacity = "1"; // Fade the color option
        source_history.style.pointerEvents = "auto"; // Disable pointer events
        textBox.value = ""; // Clear the value
        source_icon.href = " "; // Clear the href
        source_option.textContent = "🔗 Link Source";
        history_group.style.top = "19px"
        history_group.style.opacity = "1"
        source_group.style.top = "18px";
        source_group.style.opacity = "0";
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