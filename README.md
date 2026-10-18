# Week 4 — JavaScript Logic Challenges

## Overview

This project contains my solutions to the Week 4 JavaScript Logic Challenges. The challenges helped me practise functions, conditions, loops, strings, mathematical operations, and problem-solving.

## Project Structure

- round1.js — Numbers and Conditions (Challenges 1–5)
- `round2.js` — Strings (Challenges 6–12)
- `round3.js` — Loops and Patterns (Challenges 13–17)
- `boss.js` — Boss Round (Challenges 18–20)
- `README.md` — Project documentation

## Challenges

### Round 1: Numbers and Conditions

- [ ] Challenge 1: isLeapYear(year)
- [ ] Challenge 2: getBMICategory(weightKg, heightM)
- [ ] Challenge 3: motoFare(km)
- [ ] Challenge 4: convertSeconds(total)
- [ ] Challenge 5: changeMaker(amount)

### Round 2: Strings

- [ ] Challenge 6: reverseString(str)
- [ ] Challenge 7: countChar(str, char)
- [ ] Challenge 8: isPalindrome(str)
- [ ] Challenge 9: titleCase(str)
- [ ] Challenge 10: maskPhone(phone)
- [ ] Challenge 11: longestWord(sentence)
- [ ] Challenge 12: compress(str)

### Round 3: Loops and Patterns

- [ ] Challenge 13: sumTo(n)
- [ ] Challenge 14: isPrime(n)
- [ ] Challenge 15: printPyramid(rows)
- [ ] Challenge 16: fibonacci(n)
- [ ] Challenge 17: guessingGameSimulator(secret)

### Boss Round

- [ ] Challenge 18: validatePassword(pw)
- [ ] Challenge 19: romanNumeral(n)
- [ ] Challenge 20: nationalIdCheck(id)



## Testing

I ran my JavaScript files using Node.js in the VS Code terminal.

Commands used:

- node round1.js
- node round2.js
- node round3.js
- node boss.js

## Debugging Reflection

**Bug:** My sumTo() function returned 10 instead of 15 when I tested sumTo(5).

**How I found it:** I compared the actual output with the expected answer and checked the loop condition.

**Fix:** I changed i < n to i <= n so that the loop includes the final number.

**Lesson learned:** I learned that a small mistake in a loop condition can change the result. Testing with sample inputs helps me find and fix logic errors.
## What I Learned

Through these challenges, I practised:

- Writing and calling JavaScript functions.
- Using if , else, and comparison operators.
- Working with strings and string methods.
- Using loops to solve problems.
- Applying mathematical formulas.
- Testing code and debugging errors.