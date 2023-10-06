document.addEventListener('DOMContentLoaded', () => {
    const brand_icon_mediaInput = document.getElementById('brand_icon_media_input');
    const brand_icon_container = document.getElementById('brand_icon_container');
    const brand_icon_selectedImage = document.getElementById('brand_icon_selected_image');
    const brand_icon_selectedVideo = document.getElementById('brand_icon_selected_video');
    const brand_icon_iconImage = document.getElementById('brand_icon_icon_image');
    const brand_icon_label_text = document.getElementById('brand_icon_label_text');
    const input_text = document.querySelectorAll('.input_text');
    const textarea = document.querySelectorAll('textarea');
    const page_outer = document.querySelectorAll('.page_outer');
    const page_inner = document.querySelectorAll('.page_inner');
    const image_input = document.querySelectorAll('.image_input');
    const brand_icon_icon_image = document.querySelectorAll('.brand_icon_icon_image');
    const label_tab = document.querySelectorAll('.label_tab');
    const page_indicator = document.querySelectorAll('.page_indicator');
    let brand_icon_fileInputOpened = false;

    // Function to convert RGB values to a hex color code
    function rgbToHex(r, g, b) {
        return `#${((1 << 8) | r).toString(16).slice(1)}${((1 << 8) | g).toString(16).slice(1)}${((1 << 8) | b).toString(16).slice(1)}`;
    }

    // Function to darken a hex color
    function darkenHexColor(hexColor, factor) {
        // Remove the '#' symbol
        hexColor = hexColor.replace(/^#/, '');

        // Convert to RGB
        const r = parseInt(hexColor.slice(0, 2), 16);
        const g = parseInt(hexColor.slice(2, 4), 16);
        const b = parseInt(hexColor.slice(4, 6), 16);

        // Darken the color
        const newR = Math.max(0, r - factor);
        const newG = Math.max(0, g - factor);
        const newB = Math.max(0, b - factor);

        // Convert back to hex
        return rgbToHex(newR, newG, newB);
    }

    brand_icon_mediaInput.addEventListener('change', (event) => {
        const brand_icon_selectedFile = event.target.files[0];

        if (brand_icon_selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const brand_icon_mediaType = brand_icon_selectedFile.type;
                if (brand_icon_mediaType.startsWith('image/')) {
                    // Handle images
                    brand_icon_container.style.backgroundColor = '#76809900'
                    brand_icon_selectedImage.src = e.target.result;
                    brand_icon_selectedImage.style.display = 'block';
                    brand_icon_selectedVideo.style.display = 'none';
                    brand_icon_label_text.textContent = '';

                    // Create an image object to handle the load event
                    const image = new Image();
                    image.src = e.target.result;

                    // When the image is fully loaded, extract the dominant colors
                    image.onload = () => {
                        // Create a canvas element
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = image.width;
                        canvas.height = image.height;

                        // Apply blur filter to the image
                        ctx.filter = 'blur(50px)';
                        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                        // Reset the filter to apply saturate filter to the same canvas
                        ctx.filter = 'saturate(100%)';
                        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

                        // Extract colors from the blurred image
                        const colorThief = new ColorThief();
                        const palette = colorThief.getPalette(canvas, 3); // Get the top 3 dominant colors

                        // Convert the dominant colors to hex codes
                        const hexColors = palette.map(color => rgbToHex(color[0], color[1], color[2]));

                        // Apply the hex colors to elements with different IDs
                        page_outer.forEach((element) => {
                            const shadingFactor = 35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                        });

                        label_tab.forEach((element) => {
                            const shadingFactor = 35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                        });

                        page_indicator.forEach((element) => {
                            const shadingFactor = 35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                            element.style.border = `2px solid ${shadedColor || 'transparent'}`;
                        });

                        page_inner.forEach((element) => {
                            const shadingFactor = 0;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                        });

                        input_text.forEach((element) => {
                            const shadingFactor = -35; // Adjust the shading based on the element's position
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                            element.style.border = `2px solid ${shadedColor || 'transparent'}`;
                        });

                        textarea.forEach((element) => {
                            const shadingFactor = -35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                            element.style.border = `2px solid ${shadedColor || 'transparent'}`;
                        });

                        image_input.forEach((element) => {
                            const shadingFactor = -35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                        });

                        brand_icon_icon_image.forEach((element) => {
                            const shadingFactor = -35;
                            const shadedColor = darkenHexColor(hexColors[0], shadingFactor);
                            element.style.backgroundColor = shadedColor || 'transparent';
                        });

                        // Hide the plus icon
                        brand_icon_iconImage.style.display = 'none';
                    };
                } else if (brand_icon_mediaType.startsWith('video/')) {
                    // Handle videos
                    brand_icon_container.style.backgroundColor = '#76809900'
                    brand_icon_selectedVideo.src = e.target.result;
                    brand_icon_selectedVideo.style.display = 'block';
                    brand_icon_selectedImage.style.display = 'none';
                    brand_icon_label_text.textContent = ''
                }
            };

            reader.readAsDataURL(brand_icon_selectedFile);
        }
    });

    // Function to determine if a color is close to black or white
function isCloseToBlackOrWhite(color) {
    // Calculate the luminance of the color
    const luminance = (0.299 * color[0] + 0.587 * color[1] + 0.114 * color[2]) / 255;
    
    // Define thresholds for black and white
    const blackThreshold = 0.1;
    const whiteThreshold = 0.9;
    
    // Check if the color is close to black or white
    return luminance < blackThreshold || luminance > whiteThreshold;
}

brand_icon_mediaInput.addEventListener('change', (event) => {
    const brand_icon_selectedFile = event.target.files[0];

    if (brand_icon_selectedFile) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const brand_icon_mediaType = brand_icon_selectedFile.type;
            if (brand_icon_mediaType.startsWith('image/')) {
                // Handle images
                brand_icon_container.style.backgroundColor = '#76809900'
                brand_icon_selectedImage.src = e.target.result;
                brand_icon_selectedImage.style.display = 'block';
                brand_icon_selectedVideo.style.display = 'none';
                brand_icon_label_text.textContent = '';

                // Create an image object to handle the load event
                const image = new Image();
                image.src = e.target.result;

                // When the image is fully loaded, extract the dominant colors
                image.onload = () => {
                    const colorThief = new ColorThief();
                    const palette = colorThief.getPalette(image, 3); // Get the top 3 dominant colors

                    // Filter out colors that are close to black or white
                    const filteredColors = palette.filter(color => !isCloseToBlackOrWhite(color));

                    // Convert the filtered dominant colors to hex codes
                    const hexColors = filteredColors.map(color => rgbToHex(color[0], color[1], color[2]));

                    // Apply the hex colors to elements with different IDs
                    // (same code as before)
                };
            } else if (brand_icon_mediaType.startsWith('video/')) {
                // Handle videos
                brand_icon_container.style.backgroundColor = '#76809900'
                brand_icon_selectedVideo.src = e.target.result;
                brand_icon_selectedVideo.style.display = 'block';
                brand_icon_selectedImage.style.display = 'none';
                brand_icon_label_text.textContent = ''
            }
        };

        reader.readAsDataURL(brand_icon_selectedFile);
    }
});


    console.log("Brand Icon Media Script is running");
});