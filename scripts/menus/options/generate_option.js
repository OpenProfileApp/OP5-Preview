// Handle "Generate" option click
function generate_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box
    const textBox = document.getElementById(`${groupId}`);

    if (textBox) {
      // Check if the input is not locked
      if (!textBox.locked) {
        const functionName = `generate_${groupId}`;

        if (typeof window[functionName] === "function") {
          const generatedValue = window[functionName]();
          // Check if generatedValue is undefined, and set the value to an empty string if it is
          textBox.value = generatedValue !== undefined ? generatedValue : '';
        } else {
          console.error(`Function ${functionName} is not defined.`);
        }
      }
    }
    closeContextMenu();
  }
}

// Add a click event listener to trigger generate_option
document.querySelector("#generate_option").addEventListener("click", () => {
  generate_option();
});