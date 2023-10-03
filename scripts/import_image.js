const mediaInput = document.getElementById('media_input');
const selectedImage = document.getElementById('selected_image');
const blurredImage = document.getElementById('blurred_image');
const selectedVideo = document.getElementById('selected_video');
const iconImage = document.getElementById('icon_image');
let fileInputOpened = false;

mediaInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const mediaType = selectedFile.type;
            if (mediaType.startsWith('image/')) {
                // Handle images
                selectedImage.src = e.target.result;
                selectedImage.style.display = 'block';
                blurredImage.src = e.target.result;
                blurredImage.style.display = 'block';
                selectedVideo.style.display = 'none';
            } else if (mediaType.startsWith('video/')) {
                // Handle videos
                selectedVideo.src = e.target.result;
                selectedVideo.style.display = 'block';
                selectedImage.style.display = 'none';
                blurredImage.style.display = 'none';
            }

            // Hide the plus icon
            iconImage.style.display = 'none';
        };

        reader.readAsDataURL(selectedFile);
    }
});
