function translateTo(language) {
    // Define the translation file based on the selected language
    const translationFile = `translations/${language}.json`;

    // Save the selected language in local storage
    localStorage.setItem('selectedLanguage', language);

     // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
     const logEntry45 = document.createElement("div");
     logEntry45.textContent = '[Local] Language: ' + language;
     logEntry45.style.color = "#ffffff"
     consoleLog.appendChild(logEntry45);

    // Fetch the translations from the JSON file
    fetch(translationFile)
        .then((response) => response.json())
        .then((translations) => {
            // Loop through the translations and update the content
            for (const id in translations) {
                const element = document.getElementById(id);
                if (element) {
                    const { translation } = translations[id];
                    const option = element.getAttribute('option');

                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        // If the element is an input or textarea, update the placeholder or value
                        if (translation !== null) {
                            isTranslating = true; // Set the flag to true when translating text

                            if (element.tagName === 'INPUT') {
                                // Fade out the old placeholder
                                element.setAttribute('placeholder', '');
                                // Update the placeholder with translation
                                element.setAttribute('placeholder', translation);
                            } else if (element.tagName === 'TEXTAREA') {
                                // Update the textarea's placeholder with translation
                                element.setAttribute('placeholder', translation);
                            } else {
                                // Update the value with translation
                                element.setAttribute('value', translation);
                            }
                        }
                    } else if (option && translation !== null) {
                        // If the element has a data-option attribute and translation is not null, check if the data-option matches
                        if (option in translations[id] && translations[id][option] !== undefined) {
                            // Apply translation to the content with a fade effect
                            isTranslating = true; // Set the flag to true when translating text

                            // Fade out the old text
                            element.style.opacity = 0;

                            setTimeout(() => {
                                // Update the content
                                element.textContent = translations[id][option];
                                // Fade in the new text
                                element.style.opacity = 1;
                                updateLabelPositions();
                            }, 200); // Adjust the duration as needed
                        }
                    } else if (
                        element.tagName !== 'INPUT' &&
                        element.tagName !== 'TEXTAREA' &&
                        translation !== null
                    ) {
                        // If the element is not an input or textarea and translation is not null, update the content with a fade effect
                        isTranslating = true; // Set the flag to true when translating text

                        // Fade out the old text
                        element.style.opacity = 0;

                        setTimeout(() => {
                            // Update the content
                            element.textContent = translation;
                            // Fade in the new text
                            element.style.opacity = 1;
                            updateLabelPositions();
                        }, 200); // Adjust the duration as needed
                    }
                }
            }

            // Check if any translations are being applied before updating the flag
            if (isTranslating) {
                // Your code to handle translation completion here
                console.log('Translation completed.');
            }
        })
        .catch((error) => {
            console.error('Error fetching translations:', error);
        });
}

// Get a reference to the language buttons by their IDs
const EnUsButton = document.getElementById('en-us');
const Button = document.getElementById('coming-soon');
const deDeButton = document.getElementById("de-de");
const frChButton = document.getElementById("fr-ch");
const pirateButton = document.getElementById("pirate");

// Add click event listeners to the language buttons to trigger translation
if (EnUsButton) {
    EnUsButton.addEventListener('click', () => {
        translateTo('en-us');
        // Call onLoadEmojis() at the end when needed
        setTimeout(() => {
            onLoadEmojis();
        }, 300); // Adjust the duration as needed
    });
}
//I dont see a need for a if statement soooo yaa.
deDeButton.addEventListener('click', () => {
    translateTo("de-de");
    setTimeout(() => {
        onLoadEmojis();
    }, 300) //This actually is great, good job ava. This reduces much loading time/lag (something like that!!!)
})

frChButton.addEventListener('click', () => {
    translateTo("fr-ch");
    setTimeout(() => {
        onLoadEmojis();
    }, 300)
})



if (Button) {
    Button.addEventListener('click', () => translateTo('coming-soon'));
}