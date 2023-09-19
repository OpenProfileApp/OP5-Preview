const languageOption = document.getElementById("language_option");
const languageSubMenu = document.getElementById("languageSubMenu");
const rmenu = document.getElementById("contextmenu")

let timer;

languageOption.addEventListener("mouseover", () => {
  clearTimeout(timer);
  languageSubMenu.style.left = "95.5px"; // Position to the right of the option
  languageSubMenu.style.width = "100px";
  languageSubMenu.style.scale = "110%"; // Position to the right of the option
  languageSubMenu.style.top = "145px"; // Maintain the same vertical position
  languageSubMenu.style.display = "block";
});

languageOption.addEventListener("mouseout", () => {
  timer = setTimeout(() => {
    languageSubMenu.style.display = "none";
  }, 0); // 0.1 seconds
});

languageSubMenu.addEventListener("mouseover", () => {
  clearTimeout(timer);
});

languageSubMenu.addEventListener("mouseout", () => {
  timer = setTimeout(() => {
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
