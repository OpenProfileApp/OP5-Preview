// Function to show the modal dialog
function showTextPopup() {
  const modal = document.getElementById('popup_0');
  modal.style.display = 'block';
  load_current_scheme();

  // Close the modal with delay and opacity transition on left-click
  modal.addEventListener('click', (event) => {
    if (!event.target.classList.contains('social_buttons')) {
      // Trigger the confetti blast
      triggerConfetti();

      modal.style.opacity = '0'; // Set opacity to 0 for the transition effect

      setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after the transition
      }, 100); // Wait for the transition duration (0.2s) + additional delay (0.2s)
    }
  });
}

// Function to trigger the confetti blast
function triggerConfetti() {
  const duration = 3500; // How long the confetti blast will last (in milliseconds)

  // Configure confetti options
  const options = {
    particleCount: 200, // Number of confetti particles
    spread: 1000, // Spread of the particles
    origin: { y: 0.5 }, // Origin point (top of the screen)
    zIndex: 2000,
  };

  // Trigger the confetti animation
  confetti(options);

  // Stop the animation after the specified duration
  setTimeout(() => {
    confetti.reset();
  }, duration);
}
