// Challenge 6: Reverse a string
/*
Understand: Reverse the order of characters in a string.
Examples: Test a normal word, one character, and an empty string.
Plan:
1. Start with an empty result.
2. Visit the characters from the end to the beginning.
3. Add each character to the result and return it.
*/

function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("hello"));
console.log(reverseString("Ana"));
console.log(reverseString(""));

// Challenge 7: Count a character
/*
Understand: Count how many times a character appears in a string.
Examples: Test repeated characters, a character not present, and an empty string.
Plan:
1. Start a counter at zero.
2. Check each character in the string.
3. Increase the counter when it matches the target.
4. Return the counter.
*/


function countChar(str, char) {
    let count = 0;

    str = str.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(countChar("banana", "a"));
console.log(countChar("hello", "z"));
console.log(countChar("", "a"));

// Challenge 8: Check for a palindrome
/*
Understand: Check whether text reads the same forward and backward.
Examples: Test a palindrome, a non-palindrome, and a single character.
Plan:
1. Normalize the text as required, such as ignoring letter case.
2. Reverse the normalized text.
3. Compare the original normalized text with its reverse.
4. Return true if they match; otherwise return false.
*/

function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reversed = "";

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    return cleaned === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A"));     

// Challenge 9: Capitalize every word
/*
Understand: Capitalize the first letter of each word.
Examples: Test lowercase words, mixed-case words, and an empty string.
Plan:
1. Split the text into words.
2. Capitalize the first letter of each word.
3. Make the remaining letters lowercase if required.
4. Join the words and return the result.
*/

function titleCase(str) {
    let words = str.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] =
                words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}

console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("jAVAscript")); 
console.log(titleCase(""));           


// Challenge 10: Validate and mask a phone number
/*
Understand: Hide part of a phone number while keeping the required digits visible.
Examples: Test a normal number, a short number, and an empty input.
Plan:
1. Convert the input to the expected string format.
2. Identify which digits must remain visible.
3. Replace the hidden digits with the required masking character.
4. Return the masked number.
*/

function maskPhone(phone) {
    if (!/^07\d{8}$/.test(phone)) {
        return "Invalid";
    }

    return phone.slice(0, 3) + "****" + phone.slice(7);
}

console.log(maskPhone("0788123456")); 
console.log(maskPhone("078123"));     
console.log(maskPhone("0888123456")); 
console.log(maskPhone("")); 

// Challenge 11: Find the longest word
/*
Understand: Find the longest word in a sentence.
Examples: Test words of different lengths, a one-word sentence, and empty input.
Plan:
1. Split the sentence into words.
2. Keep track of the longest word found so far.
3. Compare each word's length with the current longest.
4. Return the longest word using the required tie-breaking rule.
*/

function longestWord(sentence) {
    let words = sentence.split(/\s+/);
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i].replace(/^[^\w]+|[^\w]+$/g, "");

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("I love programming"));
console.log(longestWord("hello"));
console.log(longestWord(""));


// Challenge 12: Compress repeated characters
/*
Understand: Compress repeated consecutive characters into characters and counts.
Examples: Test repeated letters, a string with no repeats, and an empty string.
Plan:
1. Start an empty result and count consecutive matching characters.
2. Add each character and its count when a group ends.
3. Process the final group.
4. Return the compressed result in the required format.
*/
function compress(str) {
    if (str.length === 0) {
        return "";
    }

    let result = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    result += str[str.length - 1] + count;

    return result;
}

console.log(compress("aaabccdddd")); 
console.log(compress("hello"));      
console.log(compress(""));           

