
// Challenge 13: Sum numbers from 1 to n
/*
Understand: Calculate the sum of whole numbers from 1 through n.
Examples: Test n = 4, n = 1, and n = 0.
Plan:
1. Start the sum at zero.
2. Loop from 1 through n.
3. Add each number to the sum.
4. Return the total.
*/

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
/*
Comparison:
The loop solution is easier to follow step by step because it adds
each number one at a time. The formula solution is shorter and faster
for large values, but someone reading it needs to understand the formula.
Both solutions should produce the same sum for valid inputs.
*/

console.log(sumTo(4)); 
console.log(sumTo(1)); 
console.log(sumTo(0)); 

console.log(sumToFormula(4)); 
console.log(sumToFormula(1)); 
console.log(sumToFormula(0)); 

console.log(sumTo(5) === sumToFormula(5)); 

// Challenge 14: Check whether a number is prime
/*
Understand: Determine whether a number is prime.
Examples: Test a prime number, a composite number, and 1.
Plan:
1. If the number is less than 2, return false.
2. Check possible divisors starting at 2.
3. If a divisor divides evenly, return false.
4. If no divisor is found, return true.
*/

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

console.log(isPrime(7));  
console.log(isPrime(9)); 
console.log(isPrime(1));  
console.log(isPrime(0));  



// Challenge 15: Print a pyramid
/*
Understand: Create a pyramid pattern with the requested number of rows.
Examples: Test one row, several rows, and zero rows.
Plan:
1. Start with an empty pattern.
2. Loop through each row.
3. Calculate the spaces and symbols needed for that row.
4. Add each row to the pattern and display or return it as required.
*/

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(2 * i - 1));
    }
}

printPyramid(1);
printPyramid(3);
printPyramid(0);


// Challenge 16: Generate Fibonacci numbers
/*
Understand: Generate the required number of Fibonacci sequence values.
Examples: Test a small sequence, one value, and zero values.
Plan:
1. Handle small input values.
2. Start with the sequence's first two values.
3. Generate each next value by adding the previous two.
4. Stop at the required length and return the result.
*/

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
console.log(fibonacci(1)); 
console.log(fibonacci(5)); 
console.log(fibonacci(0)); 

// Challenge 17: Simulate guessing with binary search
/*
Understand: Simulate guesses until the target is found, using the assignment's rules.
Examples: Test a target found immediately, a target needing more guesses,
and a boundary target.
Plan:
1. Initialize the allowed range and guess count.
2. Make a guess according to the required strategy.
3. Compare the guess with the target.
4. Update the range based on whether the guess is too low or too high.
5. Stop when the target is found or the stopping condition is reached.
6. Return the result in the required format.
*/

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

console.log("Total guesses:", guessingGameSimulator(50));
console.log("Total guesses:", guessingGameSimulator(73));
console.log("Total guesses:", guessingGameSimulator(1));



