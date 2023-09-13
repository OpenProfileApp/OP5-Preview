document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('first_name');
  const writtenDateInput = document.getElementById('written_date_1');
  const lastModified = document.getElementById('first_name_time');
  const targetElement = document.getElementById('first_name_history_tab');
  const currentDate = new Date();
  let previousInputValueOld = '';
  let previousInputValueNew = '';
  let isTextInputFocused = false;

  function getRandomName(namesArray) {
      const randomIndex = Math.floor(Math.random() * namesArray.length);
      return namesArray[randomIndex];
  }

  function generate_first_name() {
      // Fetch the names from a text file (replace 'names.txt' with your file path)
      fetch('databases/first_name_database.txt')
          .then(response => response.text())
          .then(data => {
              const namesArray = data.split('; ');

              if (namesArray.length > 0) {
                  const randomName = getRandomName(namesArray);
                  textInput.value = randomName;
                  updateLastModified(); // Call updateLastModified after generating the name
              } else {
                  alert('No names found in the file.');
              }
          })
          .catch(error => {
              console.error('Error fetching names:', error);
          });
  }

  // Add an event listener to the "Generate Name" button
  const generateButton = document.getElementById('generate_button');
  generateButton.addEventListener('click', generate_first_name);

  function updateLastModified() {
      const formattedDate = currentDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
      });

      const loggedDate = new Date(writtenDateInput.value);
      const isLoggedDateEqualToLocal = isDateEqualToLocal(loggedDate);

      if (!isLoggedDateEqualToLocal) {
          lastModified.textContent = `${formattedDate}`;
          previousInputValueNew = textInput.value;
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

      updateConsoleLog(textInput.value);
  }

  function isDateEqualToLocal(date) {
      const formattedLoggedDates = [
          date.toLocaleDateString('en-US'),
          `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
          `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      ];

      return formattedLoggedDates.some(format => format === currentDate.toLocaleDateString('en-US'));
  }

  function updateConsoleLog(enteredText) {
      consoleLog.textContent = `Entered Text: ${enteredText}\nPrevious Input Old: ${previousInputValueOld}\nPrevious Input New: ${previousInputValueNew}`;
  }
});