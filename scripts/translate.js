// Automatically collect the IDs of elements with the "group" class
const groupElements = Array.from(document.getElementsByClassName("group"));
const groupIDs = groupElements.map(element => element.id);

// Rest of the code remains the same
function translateAllGroups(groupIDs, language) {
    // Save the selected language in local storage
    localStorage.setItem('selectedLanguage', language);

    groupIDs.forEach((groupID) => {
        // Define the translation file based on the selected language and group
        const translationFile = `translations/${language}.json`;

        // Fetch and use the translation data
        fetch(translationFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load translation file');
                }                
                return response.json();
            })
            .then((translations) => {
                // Adjust groupID to remove "group" and add "ID_"
                const adjustedGroupID = `${groupID.replace('_group', '')}`;

                // Check if translation data exists for the adjusted group ID
                if (translations[adjustedGroupID]) {
                    const translation = translations[adjustedGroupID];

                    // Replace text with translated text for the group
                    document.getElementById(`${adjustedGroupID}_label_tab`).textContent = translation.label_tab;
                    document.getElementById(`${adjustedGroupID}`).placeholder = translation.placeholder;
                    document.getElementById(`${adjustedGroupID}_help_box`).textContent = translation.help_box;
                } else {
                    console.error(`Translation not found for group: ${adjustedGroupID}`);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
}



// Predefined list of element IDs to translate
const elementsToTranslate = ['popup_0_text1', 'popup_0_text2', 'popup_0_text3', 'popup_0_text4', 'name_information'];

// Function to translate specific elements
function translateSpecificElements(elementIDs, language) {
    // Define the translation file based on the selected language
    const translationFile = `translations/${language}.json`;

    // Fetch and use the translation data for the individual element
    fetch(translationFile)
        .then((response) => {
            if (!response.ok) {
                throw Error('Failed to load translation file');
            }
            return response.json();
        })
        .then((translations) => {
            elementIDs.forEach((elementID) => {
                // Check if translation data exists for the individual element
                if (translations[elementID]) {
                    const translation = translations[elementID];
                    const element = document.getElementById(elementID);

                    // Replace the value of the individual element with the translation
                    if (translation.value !== undefined) {
                        element.value = translation.value;
                    }
                    element.textContent = translation.text_content;
                } else {
                    console.error(`Translation not found for element: ${elementID}`);
                }
            });
        })
        .catch((error) => {
            console.error(error);
        });
}



// Function to translate an individual element with options
function translateIndividualElement(elementID, data, language) {
    // Define the translation file based on the selected language and element
    const translationFile = `translations/${language}.json`;

    console.log("Fetching translation data for:", elementID);

    // Fetch and use the translation data for the individual element
    fetch(translationFile)
        .then((response) => {
            if (!response.ok) {
                console.error("Failed to load translation file for:", elementID);
                throw new Error('Failed to load translation file');
            }
            return response.json();
        })
        .then((translations) => {
            console.log("Fetched translation data for:", elementID);
            if (translations[elementID]) {
                console.log("Found translation for:", elementID);

                const translation = translations[elementID];
                const optionKey = data ? 'option_2' : 'option_1';

                if (translation[optionKey]) {
                    console.log("Found translation for option:", optionKey);
                    const optionTranslation = translation[optionKey];
                    document.getElementById(elementID).textContent = optionTranslation.text_content;
                } else {
                    console.error(`Translation not found for option ${optionKey} of element: ${elementID}`);
                }
            } else {
                console.error(`Translation not found for element: ${elementID}`);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}



// Get a reference to the language buttons by their IDs
const EnUsButton = document.getElementById('en-us');
const deDeButton = document.getElementById("de-de");
const frChButton = document.getElementById("fr-ch");

// Add event listeners to the language buttons
EnUsButton.addEventListener('click', () => {
    translateAllGroups(groupIDs, 'en-us');
    translateAllElements('en-us');
});

deDeButton.addEventListener('click', () => {
    translateAllGroups(groupIDs, 'de-de');
    translateAllElements('de-de');
});

frChButton.addEventListener('click', () => {
    translateAllGroups(groupIDs, 'fr-ch');
    translateAllElements('fr-ch');
});