const nextPage = document.getElementById('next_page');
const previousPage = document.getElementById('previous_page');
let currentPosition = 0;
let animationId; // Store the animation frame ID

function scrollToTop() {
  const currentY = window.scrollY;
  const easeIn = t => t * t;
  const newY = currentY - 100 * easeIn(currentY / 300);
  window.scrollTo(0, newY);
  if (newY > 0) {
    animationId = requestAnimationFrame(scrollToTop);
  }
}

window.addEventListener('wheel', () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
});

// You can add other scroll-related events here, like touch events or keyboard events

function switchToPage(pageId, target) {
  const pageElement = document.getElementById(`page_${pageId}`);
  if (pageElement) {
    const currentPage = document.getElementById(`page_${currentPosition}`);
    setTimeout(() => {
      scrollToTop(); // Smoothly scroll to the top
    }, 300);
    if (target === "next") {
    currentPage.style.animation = "page_slide_out 0.4s linear";
    currentPage.style.left = "-100vw";
    } else {
    pageElement.style.animation = "page_slide_in 0.4s linear";
    pageElement.style.left = "0vw";
    }
    currentPosition = pageId;
  }
}

nextPage.addEventListener('click', () => {
  const nextPageId = currentPosition + 1;
  switchToPage(nextPageId, "next");
});

previousPage.addEventListener('click', () => {
  const previousPageId = currentPosition - 1;
  if (previousPageId >= 0) {
    switchToPage(previousPageId, "previous");
  }
});
