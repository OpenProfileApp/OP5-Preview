const languageOption = document.getElementById("language_option");
const languageSubMenu = document.getElementById("languageSubMenu");
const rmenu = document.getElementById("right_click_menu")

let language_menu_timer;

languageOption.addEventListener("mouseover", () => {
    // Assuming you have references to the elements
  const languageSubMenu = document.getElementById('languageSubMenu');
  const right_click_menu = document.getElementById('right_click_menu');

  // Get the width of the right_click_menu element
  const right_click_menuWidth = right_click_menu.offsetWidth; // You can use offsetWidth or getBoundingClientRect().width

  clearTimeout(language_menu_timer);
  languageSubMenu.style.left = `${right_click_menuWidth + 0}px`;
  languageSubMenu.style.width = "105px";
  languageSubMenu.style.top = "147px"; // Maintain the same vertical position
  languageSubMenu.style.display = "block";
});

languageOption.addEventListener("mouseout", () => {
  language_menu_timer = setTimeout(() => {
    languageSubMenu.style.display = "none";
  }, 100); // 0.1 seconds
});

languageSubMenu.addEventListener("mouseover", () => {
  clearTimeout(language_menu_timer);
});

languageSubMenu.addEventListener("mouseout", () => {
  language_menu_timer = setTimeout(() => {
    languageSubMenu.style.display = "none";
  }, 100); // 0.1 seconds
});

// Add global event listeners to close the context menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
      closelanguageSubMenu();
  }
});

document.addEventListener("click", (e) => {
  const languageSubMenu = document.querySelector("#languageSubMenu");
  if (languageSubMenu.style.display === "block" && !languageSubMenu.contains(e.target)) {
      e.preventDefault();
      closelanguageSubMenu();
  }
});

  // Event listener to close the context menu when scrolling
window.addEventListener("scroll", () => {
  closelanguageSubMenu();
});

// Helper function to close the context menu
function closelanguageSubMenu() {
  const languageSubMenu = document.querySelector("#languageSubMenu");
  languageSubMenu.style.display = "none";
}
