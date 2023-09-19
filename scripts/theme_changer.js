function changeTheme(theme) {
    // Define the theme file based on the selected theme
    const themeFile = `themes/${theme}.json`;

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', theme);
    selectedTheme = localStorage.getItem('selectedTheme');

    // Fetch and apply the selected theme
    fetch(themeFile)
        .then(response => response.json())
        .then(theme => {
            // Get all elements with the class "inner"
            const elementsToChange = document.querySelectorAll(".inner, .left, .right");

            // Iterate through the elements and apply the theme to each one
            elementsToChange.forEach(element => {
                element.style.backgroundColor = theme.backgroundColor;
                element.style.color = theme.textColor;
            });
        })
        .catch(error => {
            console.error("Error loading theme:", error);
        });
}

const releaseButton = document.getElementById('release');
const betaButton = document.getElementById('beta');
const previewButton = document.getElementById('preview');

if (releaseButton) {
    releaseButton.addEventListener('click', () => {
        changeTheme("release");
    });
}

if (betaButton) {
    betaButton.addEventListener('click', () => {
        changeTheme("beta");
    });
}

if (previewButton) {
    previewButton.addEventListener('click', () => {
        changeTheme("preview");
    });
}