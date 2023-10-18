// Store the state of each textbox (enabled/disabled)
const textBoxStatesHistory = {};

// Handle "Lock" option click
function history_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const historyOption = document.querySelector("#history_option");
    const history_group = document.getElementById(`${groupId}_history_group`);

    if (textBox) {
      if (!textBox.locked) {
        // Toggle the locked property based on the current state
        textBox.history = !textBoxStatesHistory[textBox.id]; // Toggle based on stored state

        // Update the state for this textbox
        textBoxStatesHistory[textBox.id] = textBox.history;

        // Update the text and lock option accordingly
        if (textBox.history) {
          textBox.history = true;
          historyOption.setAttribute('option', 'option_2');
          history_group.style.top = "9px";
          history_group.style.opacity = "0";
        }
        if (!textBox.history) {
          textBox.history = false;
          historyOption.setAttribute('option', 'option_1');
          history_group.style.top = "19px";
          history_group.style.opacity = "1";
        }
      } else {
        historyOption.style.opacity = "0.35"; // Fade the color option
        historyOption.style.pointerEvents = "none"; // Disable pointer events
    }
      console.log("History Group ID:", groupId);
      console.log("History TextBox:", textBox.history);

      closeContextMenu();
    }
  }
}

// Add a click event listener to trigger lock_option
document.querySelector("#history_option").addEventListener("click", () => {
  history_option();
});


// Handle "Lock" option click
function history_option2(groupId, history) {
  // Use the ID to target the associated text box and group
  const textBox = document.getElementById(`${groupId}`);
  const historyOption = document.querySelector("#history_option");
  const history_group = document.getElementById(`${groupId}_history_group`);

  if (textBox) {
    if (!textBox.locked) {
      // Toggle the locked property based on the provided highlighted parameter
      textBox.history = history;

      // Update the state for this textbox
      textBoxStatesHistory[textBox.id] = textBox.history;

      // Update the text and lock option accordingly
      if (!textBox.history) {
        textBox.history = true;
        historyOption.setAttribute('option', 'option_2');
        history_group.style.top = "9px";
        history_group.style.opacity = "0";
      } else {
        textBox.history = false;
        historyOption.setAttribute('option', 'option_1');
        history_group.style.top = "19px";
        history_group.style.opacity = "1";
      }
    } else {
      historyOption.style.opacity = "0.35"; // Fade the color option
      historyOption.style.pointerEvents = "none"; // Disable pointer events
    }
    console.log("Color Group ID:", groupId);
    console.log("Color TextBox:", textBox.history);

    closeContextMenu();
  }
}
