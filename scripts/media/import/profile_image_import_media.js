const profile_image_mediaInput = document.getElementById('profile_image_media_input');
const profile_image_selectedImage = document.getElementById('profile_image_selected_image');
const profile_image_blurredImage = document.getElementById('profile_image_blurred_image');
const profile_image_selectedVideo = document.getElementById('profile_image_selected_video');
const profile_image_iconImage = document.getElementById('profile_image_icon_image');
let profile_image_fileInputOpened = false;

profile_image_mediaInput.addEventListener('change', (event) => {
    const profile_image_selectedFile = event.target.files[0];

    if (profile_image_selectedFile) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const profile_image_mediaType = profile_image_selectedFile.type;
            if (profile_image_mediaType.startsWith('image/')) {
                // Handle images
                profile_image_selectedImage.src = e.target.result;
                profile_image_selectedImage.style.display = 'block';
                profile_image_blurredImage.src = e.target.result;
                profile_image_blurredImage.style.display = 'block';
                profile_image_selectedVideo.style.display = 'none';
            } else if (mediaType.startsWith('video/')) {
                // Handle videos
                profile_image_selectedVideo.src = e.target.result;
                profile_image_selectedVideo.style.display = 'block';
                profile_image_selectedImage.style.display = 'none';
                profile_image_blurredImage.style.display = 'none';
            }

            // Hide the plus icon
            profile_image_iconImage.style.display = 'none';
        };

        reader.readAsDataURL(profile_image_selectedFile);
    }
});

console.log("Brand Icon Media Script is running");

