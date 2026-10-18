// Challenge 6: Reverse a string

function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("Kigali")); // ilagiK
console.log(reverseString("Hello"));  // olleH

// Challenge 7: Count a character

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

console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "l"));  // 2

// Challenge 8: Check for a palindrome

function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reversed = "";

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    return cleaned === reversed;
}

console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello"));             // false

// Challenge 9: Capitalize every word

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


// Challenge 10: Validate and mask a phone number

function maskPhone(phone) {
    if (!/^07\d{8}$/.test(phone)) {
        return "Invalid";
    }

    return phone.slice(0, 3) + "****" + phone.slice(7);
}

console.log(maskPhone("0788123456")); 
console.log(maskPhone("078123"));     
console.log(maskPhone("0888123456")); 

// Challenge 11: Find the longest word

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

console.log(longestWord("I love learning JavaScript"));


console.log(longestWord("Kigali is very beautiful"));


// Challenge 12: Compress repeated characters

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

