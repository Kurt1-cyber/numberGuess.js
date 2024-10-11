const correctNumber = Math.floor(Math.random() * 10) + 1;

let guess = null;

while (guess !== correctNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));
    
    if (guess > correctNumber) {
        console.log("Too high! Try again.");
    } else if (guess < correctNumber) {
        console.log("Too low! Try again.");
    } else if (guess === correctNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log("Invalid input. Please enter a number between 1 and 10.");
    }
}
