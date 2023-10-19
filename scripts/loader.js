document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader_outer");
    const loader3 = document.querySelector(".loader_inner_color");
    const loader4 = document.getElementById("loading_message_maintenance")

    const simulatePageLoad = () => {
        let progress = 0;
        const interval = 10; // Adjust the interval as needed (milliseconds)
        const totalDuration = interval * 200; // Total loading time based on 100% progress

        const updateProgress = () => {
            if (progress <= 100) {
                loader3.style.width = `${progress}%`;
                progress += (interval / totalDuration) * 50;
                setTimeout(updateProgress, interval);
            }

            if (progress === 100) {
                // Hide the loaders when loading is complete
                loader.style.display = "none";
            }
        };

        updateProgress();
    };

    // Start the loading simulation when the DOM is fully loaded
    simulatePageLoad();
    //loader4.style.display = "block";
});