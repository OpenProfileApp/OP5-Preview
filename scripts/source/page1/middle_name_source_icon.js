// Function to fetch and display the favicon as an image
function displayFaviconmiddle_name() {
    const faviconElement = document.getElementById('middle_name_verified_source_favicon');
    const linkElement = document.getElementById('middle_name_verified_source_icon');
    const url = linkElement.getAttribute('href'); // Get the URL from the href attribute

    // Generate the favicon URL using favicon.io
    const faviconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=64`;

    // Set the src attribute of the image element to the favicon URL
    faviconElement.src = faviconUrl;

    // Add a click event listener to the image element to open the URL in a new tab
    faviconElement.addEventListener('click', function () {
        window.open(url, '_blank');
    });
}

// Call the function to display the favicon and set up the click event
displayFaviconmiddle_name();
