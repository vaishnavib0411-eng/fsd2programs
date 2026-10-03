let dob = "06/01/2007";   // Input

// Remove / from DOB
let date = dob.replace(/\//g, "");

let sum = 0;

// Add individual digits
for (let digit of date) {
    sum += Number(digit);
}

// Convert into a single digit
while (sum >= 10) {
    let temp = 0;

    while (sum > 0) {
        temp += sum % 10;
        sum = Math.floor(sum / 10);
    }

    sum = temp;
}

console.log("Date of Birth:", dob);
console.log("Lucky Number:", sum);

// Print description
switch (sum) {
    case 1:
        console.log("Born Leader");
        break;

    case 2:
        console.log("Beautiful");
        break;

    case 3:
        console.log("Adjustable");
        break;

    case 4:
        console.log("Kindhearted");
        break;

    case 5:
        console.log("Lazy");
        break;

    case 6:
        console.log("Happiest");
        break;

    case 7:
        console.log("overthinker");
        break;

    case 8:
        console.log("Joyful");
        break;

    case 9:
        console.log("Princess");
        break;
}
