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
    });
}

// Call the function to initially position all the group elements
updateLabelPositions();

// You can also call the function whenever the window is resized to reposition the elements
window.addEventListener('resize', updateLabelPositions);

document.addEventListener('DOMContentLoaded', function() {
    updateLabelPositions();
});
