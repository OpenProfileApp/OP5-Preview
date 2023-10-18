(async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/openprofiledevs/op5-preview/releases/latest`);

    if (response.status === 200) {
      const release = await response.json();
      const changelog = release.body;
      const name = release.name;

      // Replace "*" or "+" or "-" with "*<br>", "+<br>", or "-<br>"
      const formattedChangelog = changelog.replace(/(\* |\+ |\- |\()/g, '<br>$1');

      // Split the changelog text by "<br>" to process each line
      const changelogLines = formattedChangelog.split('<br>');

      // Format the text based on the character following "<br>"
      const formattedHTML = changelogLines.map(line => {
        let color = 'white';
        if (line.startsWith('+')) {
          color = 'green';
        } else if (line.startsWith('-')) {
          color = 'red';
        } else if (line.startsWith('(')) {
          color = 'blue';
        }
        return `<span style="color: ${color}">${line}</span>`;
      }).join('<br>');

      // Display the formatted changelog in a div with the ID "changelog"
      const changelogDiv = document.getElementById('changelog');
      const changelogName = document.getElementById('changelog_name');
      changelogDiv.innerHTML = `${formattedHTML}`;
      changelogName.innerHTML = `What's new in ${name}?`;
    } else {
      console.error('Error fetching latest release:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching latest release:', error);
  }
})();
