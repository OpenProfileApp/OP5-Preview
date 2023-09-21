function updateLabelPositions() {
    // Get all elements with the class "label_group"
    const groupElements = document.querySelectorAll('.group');

    groupElements.forEach(groupElement => {
        // Extract the ID from the group element
        const groupId = groupElement.id.replace("_group", "");

        // Use the ID to target the associated text box and tab
        const labelText = document.getElementById(`${groupId}_label_text`);
        const labelTab = document.getElementById(`${groupId}_label_tab`);
        const written = document.getElementById(`written_date_1_label_tab`);
        const helpboxtab = document.getElementById(`${groupId}_help_box_tab`);
        const helpboxtext = document.getElementById(`${groupId}_help_box_text`);
        const input = document.getElementById(`${groupId}`);

        if (labelText && labelTab) {
            // Calculate the new width based on the text content
            const textWidth = labelText.scrollWidth;

            // Add some extra padding, e.g., 5 pixels
            const newWidth = textWidth + 10 + 'px';

            // Set the width of LabelTab to the calculated width
            labelTab.style.width = newWidth;
        }

        if (written) {
            // Calculate the new width based on the text content
            const textWidth = written.scrollWidth;

            // Add some extra padding, e.g., 5 pixels
            const newWidth = 183 - textWidth + 'px';

            // Set the width of LabelTab to the calculated width
            written.style.left = newWidth;
        }

        if (helpboxtext && helpboxtab && input) {
            // Calculate the new height based on the text content
            const helptextHeight = helpboxtext.scrollHeight;

            // Calculate the new width based on the input element's width
            const inputWidth = input.offsetWidth;

            // Add some extra padding, e.g., 10 pixels
            const helpNewHeight = helptextHeight + 5 + 'px';
            const helpNewWidth = inputWidth + 0 + 'px';
            const helpNewWidthtext = inputWidth - 10 + 'px';

            // Set the height and width of helpboxtab and helpboxtext
            helpboxtab.style.height = helpNewHeight;
            helpboxtab.style.width = helpNewWidth;
            helpboxtext.style.width = helpNewWidthtext;
        }
    });
}

// Call the function to initially position all the group elements
updateLabelPositions();

// You can also call the function whenever the window is resized to reposition the elements
window.addEventListener('resize', updateLabelPositions);

document.addEventListener('DOMContentLoaded', function () {
    updateLabelPositions();
});