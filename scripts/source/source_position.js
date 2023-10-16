function updateVerifiedSourcePosition() {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const Group = document.getElementById(`${groupId}_label_tab`);
    const VerifiedSourceGroup = document.getElementById(`${groupId}_verified_source_tab`);
    
    if (Group && VerifiedSourceGroup) {
      const labelwidth = Group.offsetWidth; // Get the width of the label
      
      // Set the left position of the verified source group to be after the label
      VerifiedSourceGroup.style.left = labelwidth + 'px';
    }
  }
  
  // Call the function to initially position the verified source group
  updateVerifiedSourcePosition();
  
  // You can also call the function whenever the window is resized to reposition the group
  window.addEventListener('resize', updateVerifiedSourcePosition);
  
  document.addEventListener('DOMContentLoaded', function() {
    updateVerifiedSourcePosition();
  });
  