function updateVerifiedSourcePosition() {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const firstNameGroup = document.getElementById(`${groupId}_tab`);
    const firstNameVerifiedSourceGroup = document.getElementById(`${groupId}_verified_source_group`);
    
    if (firstNameGroup && firstNameVerifiedSourceGroup) {
      const labelWidth = firstNameGroup.offsetWidth; // Get the width of the label
      
      // Set the left position of the verified source group to be after the label
      firstNameVerifiedSourceGroup.style.left = labelWidth + 'px';
    }
  }
  
  // Call the function to initially position the verified source group
  updateVerifiedSourcePosition();
  
  // You can also call the function whenever the window is resized to reposition the group
  window.addEventListener('resize', updateVerifiedSourcePosition);
  
  document.addEventListener('DOMContentLoaded', function() {
    updateVerifiedSourcePosition();
  });
  