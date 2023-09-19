function translateToActive(language) {
    // Define the translation file based on the selected language
    const translationFile = `translations/${language}.json`;

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

                    if (option && translation !== null) {
                        // If the element has a data-option attribute and translation is not null, check if the data-option matches
                        if (option in translations[id] && translations[id][option] !== undefined) {
                            // Apply translation to the content with a fade effect
                            isTranslating = true; // Set the flag to true when translating text

                            // Fade out the old text

                            setTimeout(() => {
                                // Update the content
                                element.textContent = translations[id][option];
                                // Fade in the new text
    
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

                        setTimeout(() => {
                            // Update the content
                            element.textContent = translation;
                            // Fade in the new text

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