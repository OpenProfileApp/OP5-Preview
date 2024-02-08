function createLoginRegisterPopup() {
    const popupLoginRegisterManager = document.getElementById("login_register_account_manager");

    // HTML code for the login/register popup
    const popupHTML = `
        <div class="popup_background" id="register_popup" style="display: block; z-index: 900000;">
            <div class="popup_prompt">
                <img class="icon" id="register_close" src="media/icons/feather_icons/x.svg" style="position: absolute; cursor: pointer; top: 0px; right: 0px; scale: 0.30; margin: 10px; transform-origin: top right; z-index: 3000;">
                <div class="row" style="top: 30%; left: calc(50% - 85px); transform: translate(-50%);">
                    <div class="group" id="register_email_group" style="top: 0px; left: 0px; z-index: 17;">
                        <div class="label_tab_popup_prompt" id="register_email_label_tab">Email</div>
                        <div><input type="text" class="input_text_popup_prompt" id="register_email" style="width: 175px; text-align: center;" autocomplete="off" autocorrect="off" placeholder="Enter your email"></div>
                    </div>
                </div>
                <div class="row" style="top: 40%; left: calc(50% - 85px); transform: translate(-50%);">
                    <div class="group" id="register_password_group" style="top: 0px; left: 0px; z-index: 17;">
                        <div class="label_tab_popup_prompt" id="register_password_label_tab">Password</div>
                        <div><input type="password" class="input_text_popup_prompt" id="register_password" style="width: 175px; text-align: center;" autocomplete="off" autocorrect="off" placeholder="Enter your password"></div>
                    </div>
                </div>
                <button onclick="registerUser()" style="top: 50%; left: 0px; z-index: 4999;">Register</button>
                <div class="information_text" id="information_text_register" style="top: 59%; font-size: 9px; z-index: 4999;">Already have an account? <a href="#" onclick="switchToLogin()">Login</a></div>
            </div>
        </div>
    `;

    // Set the HTML code to the popupLoginRegisterManager element
    popupLoginRegisterManager.innerHTML = popupHTML;

    // Define the variables needed to make the code work
    const registerClose = document.getElementById("register_close");

    // Close the popup when the close button is clicked
    registerClose.addEventListener("click", function() {
        const registerPopup = document.getElementById("register_popup");
        registerPopup.style.display = "none";
    });
}

// Function to handle the login/register button click event
document.getElementById("login_register_account").addEventListener("click", function() {
    createLoginRegisterPopup();
});

// Function to switch to the login form
function switchToLogin() {
    // Implement switch to login form if needed
}

// Function to register a user
function registerUser() {
    const registerEmailInput = document.getElementById('register_email').value.trim();
    const registerPasswordInput = document.getElementById('register_password').value.trim();
    const registrationMessage = document.getElementById('registrationMessage');

    if (!registerEmailInput || !registerPasswordInput) {
        registrationMessage.textContent = 'Please fill in all fields.';
        return;
    }

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: registerEmailInput, password: registerPasswordInput })
    })
    .then(response => response.json())
    .then(data => {
        registrationMessage.textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        registrationMessage.textContent = 'Error registering user.';
    });
}

// Function to log in a user
function loginUser() {
    const loginEmailInput = document.getElementById('loginEmail').value.trim();
    const loginPasswordInput = document.getElementById('loginPassword').value.trim();
    const loginMessage = document.getElementById('loginMessage');

    if (!loginEmailInput || !loginPasswordInput) {
        loginMessage.textContent = 'Please fill in all fields.';
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: loginEmailInput, password: loginPasswordInput })
    })
    .then(response => response.json())
    .then(data => {
        loginMessage.textContent = data.message;
        // Redirect to index.html or another page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    })
    .catch(error => {
        console.error('Error:', error);
        loginMessage.textContent = 'Error logging in.';
    });
}