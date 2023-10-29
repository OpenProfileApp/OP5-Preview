const range = { min: 1000000000000000, max: 9999999999999999 };

let generatedNumbers = JSON.parse(localStorage.getItem("generated_numbers")) || [];

function generate_global_id() {
    while (true) {
        const randomNumber = Math.floor(Math.random() * (range.max - range.min + 1) + range.min);
        if (!generatedNumbers.includes(randomNumber)) {
            generatedNumbers.push(randomNumber);
            if (generatedNumbers.length === range.max - range.min + 1) {
                generatedNumbers = [];
            }
            localStorage.setItem("generated_numbers", JSON.stringify(generatedNumbers));
            return randomNumber;
        }
    }
}

// Example usage:
const uniqueRandomNumber = generate_global_id();
