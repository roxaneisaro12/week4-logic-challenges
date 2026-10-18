
// Challenge 18: Validate a password

function validatePassword(pw) {
    let errors = [];

    if (pw.length < 8) {
        errors.push("Password must have at least 8 characters.");
    }

    if (!/[A-Z]/.test(pw)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(pw)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/[0-9]/.test(pw)) {
        errors.push("Password must contain a digit.");
    }

    if (!/[!@#$%^&*]/.test(pw)) {
        errors.push("Password must contain a special character.");
    }

    if (/\s/.test(pw)) {
        errors.push("Password must not contain spaces.");
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));


// Challenge 19: Convert numbers to Roman numerals

function romanNumeral(n) {
    if (!Number.isInteger(n) || n < 1 || n > 3999) {
        return "Invalid number";
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (n >= values[i]) {
            result += symbols[i];
            n -= values[i];
        }
    }

    return result;
}

console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(2026)); // MMXXVI
console.log(romanNumeral(4));    // IV
console.log(romanNumeral(0));    // Invalid number


// Challenge 20: Simplified national ID validation

function nationalIdCheck(id) {
    if (!/^\d{16}$/.test(id)) {
        return "Invalid ID: must contain exactly 16 digits.";
    }

    if (id[0] !== "1") {
        return "Invalid ID: first digit must be 1.";
    }

    let birthYear = Number(id.substring(1, 5));
    let currentYear = new Date().getFullYear();

    if (birthYear < 1900 || birthYear > currentYear) {
        return "Invalid ID: birth year is out of range.";
    }

    if (id[5] !== "7" && id[5] !== "8") {
        return "Invalid ID: sixth digit must be 7 or 8.";
    }

    return true;
}

console.log(nationalIdCheck("1200071234567890"));
console.log(nationalIdCheck("2200071234567890"));
console.log(nationalIdCheck("12345"));

