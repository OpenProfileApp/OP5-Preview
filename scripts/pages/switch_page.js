const nextPage = document.getElementById('next_page');
const previousPage = document.getElementById('previous_page');

const page0 = document.getElementById('page_0');
const page1 = document.getElementById('page_1');

let currentPosition = 0;

nextPage.addEventListener('click', () => {
  if (currentPosition === 0) {
    page0.style.left = "-100vw"
    currentPosition = 1;
  }
});

previousPage.addEventListener('click', () => {
  if (currentPosition === 1) {
    page0.style.left = "0px";
    currentPosition = 0;
  }
});