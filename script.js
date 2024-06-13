// Function to determine the ticket price based on age

// Prompt the user to enter their age
let userAge = prompt("what is your age:");


// Function to determine the ticket price based on age
function getTicketPrice(age) {
  if (age <= 12) {
    return "your ticket fee is $10 dollars";
  } else if (age >= 13 && age <= 17) {
    return "your ticket fee is $15 dollars";
  } else if (age >= 18) {
    return "your ticket fee is $20 dollars";
  } else {
    return "Age is not valid";
  }
}
// coverting input of age from user to a number
userAge = Number(userAge);

// checking if the input from user is not  a number
if (!isNaN(userAge)) {
  // gets ticket price base on age
  let ticketPrice = getTicketPrice(userAge);

  // dispay ticket price
  alert(`${ticketPrice}`);
} else {
  // returns an error message if input is not  a valid number
  alert("please enter a valid number");
}


/// Function to advise on clothing based on temperature and rain status
function getClothingAdvice(temperature, isRaining) {
    let advice = "";

    switch (true) {
        case (temperature <= 0):
            advice = "It's freezing outside. Wear a heavy coat, hat, scarf, and gloves.";
            break;
        case (temperature > 0 && temperature <= 10):
            advice = "It's cold outside. Wear a coat and a warm sweater.";
            break;
        case (temperature > 10 && temperature <= 20):
            advice = "It's cool outside. Wear a light jacket or sweater.";
            break;
        case (temperature > 20 && temperature <= 30):
            advice = "It's warm outside. Wear light clothing such as shorts and a t-shirt.";
            break;
        case (temperature > 30):
            advice = "It's hot outside. Wear very light clothing and stay hydrated.";
            break;
        default:
            advice = "Invalid temperature input.";
            break;
    }

    if (isRaining) {
        advice += " Don't forget to take an umbrella!";
    }

    return advice;
}

// Prompt the user to enter the current temperature
let temperature = prompt("Please enter the current temperature:");

// Convert the input to a number
temperature = Number(temperature);

// Prompt the user to enter if it is raining or not
let raining = prompt("Is it raining? (yes/no):").toLowerCase();

// Convert the raining input to a boolean
let isRaining = (raining === "yes");

// Check if the temperature input is a valid number
if (!isNaN(temperature)) {
    // Get the clothing advice based on temperature and rain status
    let advice = getClothingAdvice(temperature, isRaining);
    // Display the advice
    alert(advice);
} else {
    // Display an error message if the input is not a valid number
    alert("Please enter a valid number for temperature.");
}



// Function to clean the input string by removing non-alphanumeric characters and converting to lowercase
function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
    // Clean the input string
    str = cleanString(str);

    // Base case: A string of length 0 or 1 is a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: Check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Example usage
let inputString = prompt("Enter a string to check if it's a palindrome:");

// Check if the input string is a palindrome
let result = isPalindrome(inputString);

// Display the result
if (result) {
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
}



// Recursive function to generate the nth Fibonacci number
function fibonacci(n) {
    // Base cases: return n if n is 0 or 1
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    // Recursive case: sum of the two preceding numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
let n = prompt("Enter the position (n) to find the nth Fibonacci number:");

// Convert input to a number
n = Number(n);

// Check if the input is a valid non-negative integer
if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
    // Calculate the nth Fibonacci number
    let result = fibonacci(n);
    // Display the result
    alert("The " + n + "th Fibonacci number is " + result);
} else {
    // Display an error message if the input is not valid
    alert("Please enter a valid non-negative integer.");
}