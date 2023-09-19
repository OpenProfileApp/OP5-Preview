const languageOption = document.getElementById("language_option");
const languageSubMenu = document.getElementById("languageSubMenu");
const rmenu = document.getElementById("contextmenu")

let language_menu_timer;

languageOption.addEventListener("mouseover", () => {
  clearTimeout(language_menu_timer);
  languageSubMenu.style.left = "95.5px"; // Position to the right of the option
  languageSubMenu.style.width = "100px";
  languageSubMenu.style.top = "147px"; // Maintain the same vertical position
  languageSubMenu.style.display = "block";
});

languageOption.addEventListener("mouseout", () => {
  language_menu_timer = setTimeout(() => {
    languageSubMenu.style.display = "none";
  }, 0); // 0.1 seconds
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
