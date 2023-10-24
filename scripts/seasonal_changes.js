// Function to update elements based on the time of year
function updateElementsByTimeOfYear() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-
  
    // Define the date ranges for each season (you can adjust these)
    const January = 1;
    const February = 2;
    const March = 3;
    const April = 4;
    const May = 5;
    const June = 6;
    const July = 7;
    const August = 8;
    const September = 9;
    const October = 10;
    const November = 11;
    const December = 12;
  
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Determine the current season
    if (currentMonth === October) {
        // Enable seasonal features
        const messageElement = document.querySelector(`#loading_message_spooky_${randomNumber}`);
        if (messageElement) {
        messageElement.style.display = "block";
        }
        
        const loaded_scheme_json = localStorage.getItem('local_selected_scheme');
        if (loaded_scheme_json !== null) {
            // The 'local_selected_scheme' value is not empty
            // You can run code here
        } else {
            // The 'local_selected_scheme' value is empty
            // You can handle this case or run other code here
            load_specific_scheme("scheme_spooky");
        }
    }
}
