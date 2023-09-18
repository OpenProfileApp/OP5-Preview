const languageOption = document.getElementById("language_option");
const languageSubMenu = document.getElementById("languageSubMenu");
const rmenu = document.getElementById("contextMenu")

let timer;

languageOption.addEventListener("mouseover", () => {
  clearTimeout(timer);
  languageSubMenu.style.left = "95.5px"; // Position to the right of the option
  languageSubMenu.style.width = "75px";
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
