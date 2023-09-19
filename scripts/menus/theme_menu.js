const themeOption = document.getElementById("theme_option");
const themeSubMenu = document.getElementById("themeSubMenu");
const rmenutheme = document.getElementById("contextmenu")

let theme_menu_timer;

themeOption.addEventListener("mouseover", () => {
  clearTimeout(theme_menu_timer);
  themeSubMenu.style.left = "95.5px"; // Position to the right of the option
  themeSubMenu.style.width = "100px";
  themeSubMenu.style.top = "166px"; // Maintain the same vertical position
  themeSubMenu.style.display = "block";
});

themeOption.addEventListener("mouseout", () => {
  theme_menu_timer = setTimeout(() => {
    themeSubMenu.style.display = "none";
  }, 0); // 0.1 seconds
});

themeSubMenu.addEventListener("mouseover", () => {
  clearTimeout(theme_menu_timer);
});

themeSubMenu.addEventListener("mouseout", () => {
  theme_menu_timer = setTimeout(() => {
    themeSubMenu.style.display = "none";
  }, 100); // 0.1 seconds
});

// Add global event listeners to close the context menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
      closethemeSubMenu();
  }
});

document.addEventListener("click", (e) => {
  const themeSubMenu = document.querySelector("#themeSubMenu");
  if (themeSubMenu.style.display === "block" && !themeSubMenu.contains(e.target)) {
      e.preventDefault();
      closethemeSubMenu();
  }
});

  // Event listener to close the context menu when scrolling
window.addEventListener("scroll", () => {
  closethemeSubMenu();
});

// Helper function to close the context menu
function closethemeSubMenu() {
  const themeSubMenu = document.querySelector("#themeSubMenu");
  themeSubMenu.style.display = "none";
}