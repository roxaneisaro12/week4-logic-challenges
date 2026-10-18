# JavaScript Logic Challenges

## Project Overview

This project contains JavaScript logic challenges completed to practise problem-solving, loops, conditions, strings, number operations, validation, and algorithms.

## Challenges Completed

- [x] Challenge 1: Check leap year
- [x] Challenge 2: Calculate BMI category
- [x] Challenge 3: Calculate motorcycle taxi fare
- [x] Challenge 4: Convert seconds into hours, minutes, and seconds
- [x] Challenge 5: Find the minimum number of currency pieces
- [x] Challenge 6: Reverse a string
- [x] Challenge 7: Count a character
- [x] Challenge 8: Check for a palindrome
- [x] Challenge 9: Capitalize every word
- [x] Challenge 10: Validate and mask a phone number
- [x] Challenge 11: Find the longest word
- [x] Challenge 12: Compress repeated characters
- [x] Challenge 13: Sum numbers from 1 to n
- [x] Challenge 14: Check whether a number is prime
- [x] Challenge 15: Print a pyramid
- [x] Challenge 16: Generate Fibonacci numbers
- [x] Challenge 17: Simulate guessing with binary search
- [x] Challenge 18: Validate a password
- [x] Challenge 19: Convert numbers to Roman numerals
- [x] Challenge 20: Validate a national ID using simplified rules

**Total: 20 challenges completed.**

## Project Structure

- `round1.js` — Challenges 1–5
- `round2.js` — Challenges 6–12
- `round3.js` — Challenges 13–17
- `boss.js` — Challenges 18–20
- `README.md` — Project documentation

## How to Run the Code

Make sure Node.js is installed. Open a terminal in the project folder and run:

```bash
node round1.js
node round2.js
node round3.js
node boss.js
```

Each command runs the challenges in that file and displays their test results in the terminal.

## Problem-Solving Approach

For each challenge, I used the following approach:

1. **Understand:** Identify what the problem asks me to solve.
2. **Examples:** Consider sample inputs, expected outputs, and edge cases.
3. **Plan:** Write simple steps before implementing the solution.
4. **Code:** Translate the plan into JavaScript.
5. **Test:** Run the function with different inputs and check the results.

## Testing

I used `console.log()` to test the functions with normal inputs and edge cases, including empty strings, zero values, invalid inputs, and boundary values where appropriate.

I ran the JavaScript files with Node.js and corrected mistakes when the output did not match the expected result.

## Comparing Solutions

### Challenge 13: `sumTo()` vs `sumToFormula()`

Both functions calculate the sum of whole numbers from 1 through n.

- **Loop solution (`sumTo`):** Adds each number one at a time. It is easy for a beginner to follow because the steps are explicit.
- **Formula solution (`sumToFormula`):** Uses the formula `n * (n + 1) / 2`. It is shorter and takes constant time for valid numeric inputs.

Both solutions return the same result for the tested inputs. The formula is more efficient for large inputs, while the loop makes the addition process easier to see.

### Challenge 6: `reverseString()` vs a loop-based alternative

A string can be reversed by visiting its characters from the end to the beginning and building a new string. This approach is straightforward because the loop clearly shows the order in which characters are added.

Using a built-in method can make the code shorter, but the loop helps demonstrate how string traversal works.

## Debugging Experience

While testing `sumTo()`, I changed the loop condition from `i <= n` to `i < n` by mistake.

When I tested `sumTo(5)`, it returned `10` instead of the expected `15` because the loop stopped before adding 5.

I fixed the condition by changing it back to `i <= n`. After running the test again, `sumTo(5)` returned `15`, which was correct.

This taught me that a small change in a loop condition can cause an incorrect result. Testing with a known example helped me identify and fix the bug.

## What I Learned

Through these challenges, I practised:

- Using variables, conditions, and loops.
- Working with strings and arrays.
- Writing and calling functions.
- Handling invalid inputs and edge cases.
- Breaking problems into smaller steps.
- Testing, debugging, and comparing solutions.
- Using Git and GitHub to track and submit my work.


