const nextPage = document.getElementById('next_page');
const previousPage = document.getElementById('previous_page');

const page0 = document.getElementById('page_0');
const page1 = document.getElementById('page_1');

let currentPosition = 0;

let animationId; // Store the animation frame ID

function scrollToTop() {
  const currentY = window.scrollY;

  // Define an easing function (e.g., ease-in)
  const easeIn = t => t * t;

  // Calculate the new scroll position with the easing function
  const newY = currentY - 100 * easeIn(currentY / 300); // You can adjust the values as needed

  // Scroll to the new position
  window.scrollTo(0, newY);

  // Request the next frame if the scroll isn't complete
  if (newY > 0) {
    animationId = requestAnimationFrame(scrollToTop);
  }
}

// Event listener for mouse wheel scrolling
window.addEventListener('wheel', () => {
  if (animationId) {
    // If an animation is running, cancel it when mouse wheel scrolling is detected
    cancelAnimationFrame(animationId);
    animationId = null;
  }
});

// You can add other scroll-related events here, like touch events or keyboard events


nextPage.addEventListener('click', () => {
  if (currentPosition === 0) {
    setTimeout(() => {
      scrollToTop(); // Smoothly scroll to the top
    }, 300);    page0.style.animation = "page_slide_out 0.4s linear";
    page0.style.left = "-100vw";
    currentPosition = 1;
  }
});

previousPage.addEventListener('click', () => {
  if (currentPosition === 1) {
    setTimeout(() => {
      scrollToTop(); // Smoothly scroll to the top
    }, 300);
    page0.style.animation = "page_slide_in 0.4s linear";
    page0.style.left = "0vw";
    currentPosition = 0;
  }
});
