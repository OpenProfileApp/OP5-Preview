(async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/openprofiledevs/op5-preview/releases/latest`);
      
      if (response.status === 200) {
        const release = await response.json();
        const changelog = release.body;
        
        // Display the changelog in a div with the ID "changelog"
        const changelogDiv = document.getElementById('changelog');
        changelogDiv.innerHTML = `<pre>${changelog}</pre>`;
      } else {
        console.error('Error fetching latest release:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching latest release:', error);
    }
  })();
  