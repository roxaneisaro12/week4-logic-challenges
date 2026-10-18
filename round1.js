// question 1
/*
Understand: Determine whether a year is a leap year.
Examples: 2024 returns true; 2026 returns false.
Plan:
1. Check whether the year is divisible by 400.
2. Otherwise, check whether it is divisible by 4 but not 100.
3. Return true if either rule is satisfied; otherwise return false.
*/
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }

    if (year % 100 === 0) {
        return false;
    }

    return year % 4 === 0;
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2026)); 
console.log(isLeapYear(2000));

// question 2
/*
Understand: Identify the category that matches a BMI value.
Examples: Test a low BMI, a normal BMI, and a high BMI.
Plan:
1. Compare the BMI with the category boundaries in the assignment.
2. Return the matching category.
3. Handle boundary values consistently.
*/

function getBMICategory(weightKg, heightM) {
    if (heightM <= 0) {
        return "Invalid height";
    }

    let bmi = weightKg / (heightM * heightM);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(getBMICategory(45, 1.65)); 
console.log(getBMICategory(60, 1.65)); 
console.log(getBMICategory(60, 0));    

// Challenge 3: Calculate motorcycle taxi fare
/*
Understand: Calculate the moto fare for a given distance.
Examples: Test zero distance, a short trip, and a longer trip.
Plan:
1. Identify the base fare and distance rate from the assignment.
2. Calculate the fare using the required formula.
3. Return the total fare.
*/

function motoFare(km) {
    if (km <= 0) {
        return 0;
    }

    if (km <= 2) {
        return 300;
    }

    let extraKm = Math.ceil(km - 2);
    return 300 + (extraKm * 107);
}

console.log(motoFare(0)); 
console.log(motoFare(1)); 
console.log(motoFare(5)); 


// Challenge 4: Convert seconds into hours, minutes and seconds
/*
Understand: Convert a number of seconds into hours, minutes, and seconds.
Examples: Test 3661 seconds, 60 seconds, and 0 seconds.
Plan:
1. Calculate whole hours.
2. Find the remaining minutes and seconds.
3. Format and return the result as required.
*/

function convertSeconds(total) {
    let hours = Math.floor(total / 3600);
    let minutes = Math.floor((total % 3600) / 60);
    let seconds = total % 60;

    return hours + "h " +
        String(minutes).padStart(2, "0") + "m " +
        String(seconds).padStart(2, "0") + "s";
}

console.log(convertSeconds(3661));
console.log(convertSeconds(60));
console.log(convertSeconds(0));


// Challenge 5: Find the minimum number of currency pieces
/*
Understand: Find the number of each denomination needed to make an amount.
Examples: Test a typical amount, an amount needing several denominations,
and zero.
Plan:
1. Start with the largest denomination.
2. Calculate how many fit into the remaining amount.
3. Subtract that value and continue with smaller denominations.
4. Return the denomination counts in the required format.
*/

function changeMaker(amount) {
    const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];

    for (let note of denominations) {
        let count = Math.floor(amount / note);

        if (count > 0) {
            console.log(count + " x " + note + " RWF");
            amount = amount % note;
        }
    }
}

changeMaker(7385);
changeMaker(1000);
changeMaker(150);
changeMaker(0);




