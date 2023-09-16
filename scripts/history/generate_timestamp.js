document.addEventListener('DOMContentLoaded', function() {
    let currentClickedElement = null; // Store the currently clicked group
  
    // List of disabled group IDs
    const disabledGroupIDs = ["page_author_1", "name_information", "written_date_1"]; // Add the IDs of groups you want to disable here

    const inputElements = document.querySelectorAll("input, textarea");

    // Attach a focus event listener to each input element
    inputElements.forEach((inputElement) => {
        inputElement.addEventListener("focus", function (e) {
            // Your code to handle the focus event for input elements goes here
            // You can access the focused input element using 'inputElement'
            const focusedElement = e.target;
            // Perform any desired actions when an input is focused
            // For example, collect data or trigger an event
            console.log("Input focused:", focusedElement.id);
            handleEvent(e)
        });
    });
    
    function handleEvent(e) {
    const clickedGroup = e.target.closest(".group");
    console.log("Timestamp Group:", clickedGroup);


    if (clickedGroup) {
        e.preventDefault();
        currentClickedElement = clickedGroup; // Store the clicked group

        // Get the ID of the clicked group (remove "group" from the ID)
        const groupId = clickedGroup.id.replace("_group", "");

        // Check if the clicked group should have the context menu disabled
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

        const loggedDate = new Date(writtenDateInput.value);
        const isLoggedDateEqualToLocal = isDateEqualToLocal(loggedDate);

        if ((!isLoggedDateEqualToLocal && enteredText !== previousInputValueOld) && enteredText !== '') {
            setTimeout(() => {
            lastModified.textContent = `${formattedDate}`;
            }, 150);
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

        updateConsoleLog(enteredText);
        }

        function isDateEqualToLocal(date) {
        const formattedLoggedDates = [
            date.toLocaleDateString('en-US'),
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
            `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        ];

        return formattedLoggedDates.some(format => format === currentDate.toLocaleDateString('en-US'));
        }

        function isDateEqualToLocal(date) {
            const formattedLoggedDates = [
              date.toLocaleDateString('en-US'),
              `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
              `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
            ];
        
            return formattedLoggedDates.some(format => format === currentDate.toLocaleDateString('en-US'));
          }
        
          function updateInput() {
            if (!isTextInputFocused) {
              const loggedDate = new Date(writtenDateInput.value);
              const isLoggedDateEqualToLocal = isDateEqualToLocal(loggedDate);
        
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
              updateInput()
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