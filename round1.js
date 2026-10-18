// question 1
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
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 

// question 2
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

console.log(getBMICategory(60, 1.7));

// Challenge 3: Calculate motorcycle taxi fare

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

console.log(motoFare(1));    
console.log(motoFare(2));    
console.log(motoFare(3));    
console.log(motoFare(2.5));  
console.log(motoFare(0));  


// Challenge 4: Convert seconds into hours, minutes and seconds

function convertSeconds(total) {
    let hours = Math.floor(total / 3600);
    let minutes = Math.floor((total % 3600) / 60);
    let seconds = total % 60;

    return hours + "h " +
        String(minutes).padStart(2, "0") + "m " +
        String(seconds).padStart(2, "0") + "s";
}

console.log(convertSeconds(7509)); // 2h 05m 09s
console.log(convertSeconds(65));   // 0h 01m 05s


// Challenge 5: Find the minimum number of currency pieces

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




