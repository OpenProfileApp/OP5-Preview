document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('user_check_hello');
    let isVibrating = false;
    let vibrationInterval;

    // Check if message is already sent to prevent multiple sends
    if (localStorage.getItem('discordwavesent') === 'sent') {
        button.style.display = "none";
        stopVibration();
        return;
    }

    // Function to start vibrating the button
    function startVibration() {
        if (!isVibrating) {
            isVibrating = true;
            vibrationInterval = setInterval(() => {
                button.style.transform = 'translateX(-5px)translateY(-50%)'; // Move the button to the left
                setTimeout(() => {
                    button.style.transform = 'translateX(5px)translateY(-50%)'; // Move the button to the right
                }, 50); // Duration of the movement to the left (adjust as needed)
            }, 100); // Interval between each vibration (adjust as needed)
        }
    }

    // Function to stop vibrating the button
    function stopVibration() {
        isVibrating = false;
        clearInterval(vibrationInterval);
        button.style.transform = 'translateX(0)'; // Reset button position
    }

    // Start vibrating the button when the page loads
    startVibration();
    
    // Add event listener to stop vibration when the button is clicked
    button.addEventListener('click', function() {
        let name = prompt('Send a wave to our Discord server! Enter your username so we can know who said hello.');
        if (name !== null && name !== '') {
            // Check if the username contains only Latin characters, spaces, and digits
            const latinAndNumbersRegex = /^[a-zA-Z0-9 ]+$/;
            if (!latinAndNumbersRegex.test(name)) {
                alert('Username must contain only Latin characters, numbers, and spaces.');
                return; // Exit the function if the username is invalid
            }
            // Truncate the name if it exceeds 16 characters
            if (name.length > 16) {
                name = name.substring(0, 16);
                alert('Username has been truncated to 16 characters.');
            }
            redactAndSendMessage(name);
        }
    });

    function redactAndSendMessage(name) {
        localStorage.setItem('discordwavesent', 'sent');
        button.style.display = "none";
        stopVibration();
        alert('Thanks for your wave!');
        redactName(name)
            .then(redactedName => {
                const message = `👋 **${redactedName}** sent a wave from web!`;
                sendMessageToDiscord(message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function redactName(name) {
        // Fetching words from the text file
        return fetch('blacklist.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch blacklist');
                }
                return response.text();
            })
            .then(data => {
                const blacklist = data.split(',').map(word => word.trim());
                // Checking if the name contains any blacklisted words
                for (const word of blacklist) {
                    const pattern = new RegExp(`\\b${word}\\b`, 'gi');
                    name = name.replace(pattern, '#');
                }
                return name;
            });
    }

    function getDiscordWebhookURL() {
        return fetch('webhook.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch Discord webhook URL');
                }
                return response.text();
            });
    }

    function sendMessageToDiscord(message) {
        getDiscordWebhookURL()
            .then(webhookURL => {
                fetch(webhookURL.trim(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: message }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to send message to Discord');
                    }
                    console.log('Message sent to Discord successfully');
    
                    // Auto-react with wave emoji
                    const messageData = response.json();
                    if (messageData && messageData.id) {
                        const reactionURL = `${webhookURL.trim()}/messages/${messageData.id}/reactions/👋/@me`;
                        fetch(reactionURL, {
                            method: 'PUT',
                        })
                        .then(() => {
                            console.log('Auto reaction added');
                        })
                        .catch(error => {
                            console.error('Error adding auto reaction:', error);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error sending message to Discord:', error);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }    
});