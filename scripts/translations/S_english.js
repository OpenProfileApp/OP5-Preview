// Function to translate text content and update width from JSON data
function translateToSEnglish() {
    // Define translations and properties as a JSON object
    const translations = {
        "first_name": {
            "translation": "ฬђคՇ เร Շђє ๏ς'ร ŦเгรՇ ภค๓є?",
            "width":  null
        },
        "first_name_label_text": {
            "translation": "ŦเгรՇ ภค๓є",
            "width": null
        },
        "first_name_label_tab": {
            "translation": null,
            "width": "48px"
        },
        "first_name_comment_group": {
            "translation": null,
            "left": "7px"
        },
        // Add 41 + the above last number
        "first_name_verified_source_group": {
            "translation": null,
            "left": "48px"
        },
        // Add more translations and properties as needed
    };

    // Flag to check if any translations are being applied
    let isTranslating = false;

    // Loop through the translations and update the content, width, and left position
    for (const id in translations) {
        const element = document.getElementById(id);
        if (element) {
            const { translation, width, left } = translations[id];

            if (width) {
                // Apply width change first to all elements
                element.style.width = width;
            }

            if (left) {
                // Apply left position if specified
                element.style.left = left;
            }

            if (element.tagName === 'INPUT') {
                // If the element is an input, update the placeholder with a fade effect
                const placeholderElement = element.getAttribute('placeholder');
                if (placeholderElement !== null && translation !== null) {
                    isTranslating = true; // Set the flag to true when translating text

                    // Fade out the old placeholder
                    element.setAttribute('placeholder', '');

                    setTimeout(() => {
                        // Update the placeholder
                        element.setAttribute('placeholder', translation);
                    }, 200); // Adjust the duration as needed
                }
            } else if (element.tagName !== 'INPUT' && translation !== null) {
                // If the element is not an input and translation is not null, update the content with a fade effect
                isTranslating = true; // Set the flag to true when translating text

                const currentOpacity = parseFloat(getComputedStyle(element).opacity || 1);

                // Fade out the old text
                element.style.opacity = 0;

                setTimeout(() => {
                    // Update the content
                    element.textContent = translation;
                    // Fade in the new text
                    element.style.opacity = 1;
                }, 200); // Adjust the duration as needed
            }
        }
    }

    // Check if any translations are being applied before updating the flag
    if (isTranslating) {
        // Your code to handle translation completion here
    }
}

// Get a reference to the "s_english" button by its ID
const englishsButton = document.getElementById('s_english');

// Add a click event listener to the "s_english" button to trigger translation
if (englishsButton) {
    englishsButton.addEventListener('click', translateToSEnglish);
}
