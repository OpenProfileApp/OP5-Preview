// Array to store generated numbers
const generatedNumbers = [];

// Function to generate a random number within a specified range (min inclusive, max exclusive)
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to generate a unique random number
function generate_global_id(min, max) {
    let randomNumber;
    
    do {
        randomNumber = getRandomNumber(min, max);
    } while (generatedNumbers.includes(randomNumber));

    // Add the generated number to the array
    generatedNumbers.push(randomNumber);

    // Check if all possible numbers have been generated, then reset the array
    if (generatedNumbers.length === max - min) {
        generatedNumbers.length = 0; // Clear the array
    }

    return randomNumber;
}

// Example usage:
const minNumber = 1;
const maxNumber = 10;
const uniqueRandomNumber = generate_global_id(minNumber, maxNumber);