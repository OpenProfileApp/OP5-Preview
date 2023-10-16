// Function to fetch and display the favicon as an image
function displayFavicon() {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const faviconElement = document.getElementById(`${groupId}_verified_source_favicon`);
    const linkElement = document.getElementById(`${groupId}_verified_source_icon`);
    const url = linkElement.getAttribute('href'); // Get the URL from the href attribute

    // Generate the favicon URL using favicon.io
    const faviconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=64`;

    // Set the src attribute of the image element to the favicon URL
    faviconElement.src = faviconUrl;
    updateVerifiedSourcePosition()
    };

function updateVerifiedSourcePosition() {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const Group = document.getElementById(`${groupId}_label_tab`);
    const VerifiedSourceGroup = document.getElementById(`${groupId}_verified_source_tab`);
    
    if (Group && VerifiedSourceGroup) {
      const labelWidthStr = getComputedStyle(Group).width; // Get the width of the label as a string
      const labelWidth = parseInt(labelWidthStr, 10); // Parse the width as an integer
      
      // Set the left position of the verified source group to be 10 pixels to the right of the label
      VerifiedSourceGroup.style.left = (labelWidth + 14) + "px";
      VerifiedSourceGroup.style.opacity = "1";
      VerifiedSourceGroup.style.display = "block";
    }
}
  
  // Call the function to initially position the verified source group
  updateVerifiedSourcePosition();
  
  // You can also call the function whenever the window is resized to reposition the group
  window.addEventListener('resize', updateVerifiedSourcePosition);
  
  document.addEventListener('DOMContentLoaded', function() {
    updateVerifiedSourcePosition();
  });

// Call the function to display the favicon and set up the click event
displayFavicon();
