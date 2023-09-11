document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('prefix');
  const writtenDateInput = document.getElementById('written_date_1');
  const lastModified = document.getElementById('prefix_time');
  const targetElement = document.getElementById('prefix_history_tab'); // Change 'target_element' to the actual ID of the element you want to modify
  const currentDate = new Date();
  let previousInputValueOld = '';
  let previousInputValueNew = '';
  let isTextInputFocused = false;

  textInput.addEventListener('input', updateLastModified);
  textInput.addEventListener('focus', () => isTextInputFocused = true);
  textInput.addEventListener('blur', () => {
    isTextInputFocused = false;
    updateInput();
  });

  function updateLastModified() {
    const enteredText = textInput.value;
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const loggedDate = new Date(writtenDateInput.value);
    const isLoggedDateEqualToLocal = isDateEqualToLocal(loggedDate);

    if (!isLoggedDateEqualToLocal && enteredText !== previousInputValueOld) {
      setTimeout(() => {
        lastModified.textContent = `${formattedDate}`;
    }, 150);
      previousInputValueNew = enteredText; // Update the new value
      lastModified.style.opacity = '1';
      targetElement.style.height = '15px';
      targetElement.style.width = '59px';
      targetElement.style.left = '198px';
    } else {
      lastModified.textContent = '';
      lastModified.style.opacity = '0';
      targetElement.style.height = '11px';
      targetElement.style.width = '15px';
      targetElement.style.left = '242px';
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
});