// Function to pick a random name from an array of names
function getRandomName(namesArray) {
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  return namesArray.splice(randomIndex, 1)[0];
}

// Function to populate the "alias" input with a random full name
function generate_former_name() {
  // Fetch the names from a text file (replace 'names.txt' with your file path)
  fetch('scripts/generations/page1/databases/first_name_database.txt')
    .then(response => response.text())
    .then(data => {
      const firstNamesArray = data.split('; ').map(name => name.trim());

      return fetch('scripts/generations/page1/databases/last_name_database.txt')
        .then(response => response.text())
        .then(data => {
          const lastNamesArray = data.split('; ').map(name => name.trim());

          if (firstNamesArray.length > 0 && lastNamesArray.length > 0) {
            const randomFirstName = getRandomName(firstNamesArray);
            const randomLastName = getRandomName(lastNamesArray);

            // Combine the random first name and last name to form a full name
            const randomFullName = `${randomFirstName} ${randomLastName}`;

            document.getElementById('former_name').value = randomFullName;
          } else {
            alert('No names found in one or both of the files.');
          }
        });
    })
    .catch(error => {
      console.error('Error fetching names:', error);
    });
}
