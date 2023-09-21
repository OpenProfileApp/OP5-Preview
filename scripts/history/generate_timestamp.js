document.addEventListener('DOMContentLoaded', function () {
  let currentClickedElement = null; // Store the currently clicked group

  // List of disabled group IDs
  const disabledGroupIDs = ["page_author_1", "name_information", "written_date_1"]; // Add the IDs of groups you want to disable here

  const inputElements = document.querySelectorAll("input, textarea");

  // Attach a focus event listener to each input element
  inputElements.forEach((inputElement) => {
      inputElement.addEventListener("focus", function (e) {
          const focusedElement = e.target;
          console.log("Input focused:", focusedElement.id);
          handleEvent(e);
      });
  });

  function handleEvent(e) {
      const clickedGroup = e.target.closest(".group");
      console.log("Timestamp Group:", clickedGroup);

      if (clickedGroup) {
          e.preventDefault();
          currentClickedElement = clickedGroup; // Store the clicked group

          const groupId = clickedGroup.id.replace("_group", "");

          if (disabledGroupIDs.includes(groupId)) {
              return; // Exit the function for disabled groups
          }

          const textInput = document.getElementById(groupId);
          const writtenDateInput = document.getElementById('written_date_1');
          const lastModified = document.getElementById(`${groupId}_time`);
          const targetElement = document.getElementById(`${groupId}_history_tab`);
          const history_group = document.getElementById(`${groupId}_history_group`);
          const currentDate = new Date();
          let previousInputValueOld = '';
          let previousInputValueNew = '';
          let isTextInputFocused = false;

          function updateLastModified() {
              const enteredText = textInput.value;
              const formattedDate = currentDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
              });

              const loggedDates = parseDatesFromText(writtenDateInput.value);

              if (
                  (!containsDate(loggedDates, currentDate) && enteredText !== previousInputValueOld)
                  && enteredText.trim() !== ''
              ) {
                  lastModified.textContent = `${formattedDate}`;
                  previousInputValueNew = enteredText; // Update the new value
                  lastModified.style.opacity = '1';
                  targetElement.style.height = '15px';
                  targetElement.style.width = '59px';
                  history_group.style.left = (109.5 - 44) + "px";
              } else {
                  lastModified.textContent = '';
                  lastModified.style.opacity = '0';
                  targetElement.style.height = '11px';
                  targetElement.style.width = '15px';
                  history_group.style.left = '109.5px';
              }

              updateConsoleLog2(enteredText);
          }

          function containsDate(dates, date) {
              return dates.some((d) => isSameDay(d, date));
          }

          function isSameDay(date1, date2) {
              return (
                  date1.getDate() === date2.getDate() &&
                  date1.getMonth() === date2.getMonth() &&
                  date1.getFullYear() === date2.getFullYear()
              );
          }

          function parseDatesFromText(text) {
              const dateStrings = text.split(',').map((str) => str.trim());
              const dates = dateStrings
                  .map((dateStr) => new Date(dateStr))
                  .filter((date) => !isNaN(date.getTime()));

              return dates;
          }

          function updateInput() {
              if (!isTextInputFocused) {
                  const loggedDates = parseDatesFromText(writtenDateInput.value);
                  const isLoggedDateEqualToLocal = containsDate(loggedDates, currentDate);

                  if (isLoggedDateEqualToLocal) {
                      previousInputValueOld = textInput.value;
                  }
              }
          }

          function updateConsoleLog(enteredText) {
              consoleLog.textContent = `Entered Text: ${enteredText}\nPrevious Input Old: ${previousInputValueOld}\nPrevious Input New: ${previousInputValueNew}`;
          }

          // Add an event listener to the "Generate" option button
          const generateOptionButton = document.querySelector("#generate_option");
          if (generateOptionButton) {
              generateOptionButton.addEventListener("click", () => {
                  updateInput();
                  updateLastModified(); // Call the updateLastModified function when "Generate" is clicked
              });
          }

          // Add an input event listener to update the date whenever text is entered
          textInput.addEventListener('input', () => {
              updateLastModified();
          });

          // Add focus and blur event listeners to track input focus
          textInput.addEventListener('focus', () => isTextInputFocused = true);
          textInput.addEventListener('blur', () => {
              isTextInputFocused = false;
              updateInput();
          });

          // Function to handle left or right-click action
          function handleMouseClick(groupId, button) {
              // Add your logic here for handling the left or right-click action for the specified group (groupId).
              // You can use the 'button' parameter to check which button was clicked (0 for left, 2 for right).
          }
      }
  }
});