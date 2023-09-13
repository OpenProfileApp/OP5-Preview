document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('first_name');
  const writtenDateInput = document.getElementById('written_date_1');
  const lastModified = document.getElementById('first_name_time');
  const targetElement = document.getElementById('first_name_history_tab'); // Change 'target_element' to the actual ID of the element you want to modify
  const currentDate = new Date();
  let isTextInputFocused = false;

  // Function to pick a random name from an array of names
  function getRandomName(namesArray) {
    const randomIndex = Math.floor(Math.random() * namesArray.length);
    return namesArray[randomIndex];
  }

  // Function to set a random name in the input field
  function generate_first_name() {
    // Fetch the names from a text file (replace 'names.txt' with your file path)
    fetch('databases/first_name_database.txt')
      .then(response => response.text())
      .then(data => {
        const namesArray = data.split('; '); // Split names by semicolon

        if (namesArray.length > 0) {
          const randomName = getRandomName(namesArray);
          textInput.value = randomName;
          updateLastModified(); // Call updateLastModified after setting the name
        } else {
          alert('No names found in the file.');
        }
      })
      .catch(error => {
        console.error('Error fetching names:', error);
      });
  }

  // Add an event listener to the "Generate Name" button (if you have one)
  const generateButton = document.getElementById('generate_button');
  if (generateButton) {
    generateButton.addEventListener('click', generate_first_name);
  }

  textInput.addEventListener('input', updateLastModified);
  textInput.addEventListener('focus', () => isTextInputFocused = true);
  textInput.addEventListener('blur', () => {
    isTextInputFocused = false;
  });

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
  }

  function isDateEqualToLocal(date) {
    const formattedLoggedDates = [
      date.toLocaleDateString('en-US'),
      `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    ];

    return formattedLoggedDates.some(format => format === currentDate.toLocaleDateString('en-US'));
  }
});