// Get the button and console elements by their IDs
const showConsoleButton = document.getElementById("console_tab");
const consoleElement = document.getElementById("console");

// Flag to track whether the console is open
let isConsoleOpen = false;

// Function to toggle the visibility of the console
function toggleConsole() {
    if (isConsoleOpen) {
        consoleElement.style.display = "none";
    } else {
        consoleElement.style.display = "block";
    }
    isConsoleOpen = !isConsoleOpen;
}

// Add a double-click event listener to the button
showConsoleButton.addEventListener("click", toggleConsole);

// Function to start dragging
function startDrag(e) {
    isDragging = true;
    offsetX = e.clientX - consoleElement.getBoundingClientRect().left;
    offsetY = e.clientY - consoleElement.getBoundingClientRect().top;

    // Add a class to change the cursor appearance while dragging
    consoleElement.classList.add("dragging");
}

// Function to stop dragging
function stopDrag() {
    isDragging = false;

    // Remove the dragging class to restore the cursor appearance
    consoleElement.classList.remove("dragging");
}

// Function to move the element when dragging
function drag(e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Set the new position of the draggable element
        consoleElement.style.left = x + "px";
        consoleElement.style.top = y + "px";
    }
}

// Add event listeners for mouse events
consoleElement.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);
document.addEventListener("mousemove", drag);
