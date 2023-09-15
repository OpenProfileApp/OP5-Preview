const movableElement = document.getElementById('page_0');
const edit = document.getElementById('page_1');
const moveButton = document.getElementById('page_switcher');
const moveButton2 = document.getElementById('page_switcher2');
let currentPosition = 0;

moveButton.addEventListener('click', () => {
  movableElement.style.left = "-800px"
  movableElement.style.opacity = "0"
  edit.style.opacity = "1"
});

moveButton2.addEventListener('click', () => {
    movableElement.style.left = "365px"
    movableElement.style.opacity = "1"
    edit.style.opacity = "0"
  });
  
