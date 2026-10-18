
// Challenge 13: Sum numbers from 1 to n

function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Using the formula n(n + 1) / 2
function sumToFormula(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(5));        // 15
console.log(sumToFormula(5)); // 15

console.log(sumTo(10));        // 55
console.log(sumToFormula(10)); // 55

console.log(sumTo(5) === sumToFormula(5)); // true


// Challenge 14: Check whether a number is prime

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));   // true
console.log(isPrime(7));   // true
console.log(isPrime(9));   // false
console.log(isPrime(1));   // false
console.log(isPrime(0));   // false
console.log(isPrime(-5));  // false


// Challenge 15: Print a pyramid

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(2 * i - 1));
    }
}

printPyramid(4);


// Challenge 16: Generate Fibonacci numbers

function fibonacci(n) {
    let numbers = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        numbers.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return numbers.join(", ");
}

console.log(fibonacci(8));
// 0, 1, 1, 2, 3, 5, 8, 13

console.log(fibonacci(5));
// 0, 1, 1, 2, 3


// Challenge 17: Simulate guessing with binary search

function guessingGameSimulator(secret) {
    let low = 1;
    let high = 100;
    let guesses = 0;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        guesses++;

        console.log("Guess " + guesses + ": " + middle);

        if (middle === secret) {
            return guesses;
        } else if (middle < secret) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return -1;
}

console.log("Total guesses:", guessingGameSimulator(73));



