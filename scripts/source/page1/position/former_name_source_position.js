function updateVerifiedSourcePosition() {
    const firstNameGroup = document.getElementById('former_name_label_tab');
    const firstNameVerifiedSourceGroup = document.getElementById('former_name_verified_source_group');
    
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
  