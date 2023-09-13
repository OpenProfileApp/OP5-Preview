document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('first_name');
  const writtenDateInput = document.getElementById('written_date_1');
  const lastModified = document.getElementById('first_name_time');
  const targetElement = document.getElementById('first_name_history_tab');
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
      targetElement.style.left = '5px';
    } else {
      lastModified.textContent = '';
      lastModified.style.opacity = '0';
      targetElement.style.height = '11px';
      targetElement.style.width = '15px';
      targetElement.style.left = '49px';
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

  // Add an event listener for changes in the writtenDateInput
  writtenDateInput.addEventListener('input', () => {
    updateLastModified();
  });
});
