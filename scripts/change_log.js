(async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/openprofiledevs/op5-preview/releases/latest`);

    if (response.status === 200) {
      const release = await response.json();
      const changelog = release.body;
      const name = release.name;
      // Only take the version ID
      const versionString = `${name}`;
      const releaseId = versionString.replace(/ Preview$/, '');
      const releaseLink = `https://github.com/OpenProfileDevs/OP5-Preview/releases/tag/${releaseId}`;

      // Replace "*" or "+" or "-" with "*<br>", "+<br>", or "-<br>"
      const formattedChangelog = changelog.replace(/(\n\()|(\* |\+ |\- |\()/g, '<br>$1$2').replace(/<br>\(/g, '(');

      // Split the changelog text by "<br>" to process each line
      const changelogLines = formattedChangelog.split('<br>');

      // Format the text based on the character following "<br>"
      const formattedHTML = changelogLines.map(line => {
        let color = '#BBBBBB';
        if (line.startsWith('+')) {
          color = '#558423';
        } else if (line.startsWith('-')) {
          color = '#d12828';
        } else if (line.startsWith('\n(')) {
          color = '#5C6AE3';
        }
        return `<span style="color: ${color}">${line}</span>`;
      }).join('<br>');

      // Display the formatted changelog in a div with the ID "changelog"
      const changelogDiv = document.getElementById('changelog');
      const changelogName = document.getElementById('changelog_name');
      changelogDiv.innerHTML = `${formattedHTML}`;
      changelogName.innerHTML = `What's new in <a href="${releaseLink}" target="_blank" style="text-decoration: none; color: #5C6AE3;">${name}</a>?`;
    } else {
      console.error('Error fetching latest release:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching latest release:', error);
  }
})();