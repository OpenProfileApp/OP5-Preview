// Function to show the modal dialog on page load
function showTextPopup() {
  const modal = document.getElementById('popup_0');
  modal.style.display = 'block';

  // Close the modal with delay and opacity transition on left-click
  modal.addEventListener('click', () => {
    modal.style.transition = 'opacity 0.5s'; // Apply a 0.5s opacity transition
    modal.style.opacity = '0'; // Set opacity to 0 for the transition effect

    setTimeout(() => {
      modal.style.display = 'none'; // Hide the modal after the transition
    }, 500); // Wait for the transition duration (0.5s) + additional delay (0.5s)
  });
}

// Trigger the modal on page load
showTextPopup();