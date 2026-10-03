let n = 7;   // Input

let prime = true;

// Check prime
if (n < 2) {
    prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
}

if (!prime) {
    console.log("Not Prime");
} else {
    let num = n + 1;

    while (true) {
        let str = num.toString();
        let rev = str.split("").reverse().join("");

        if (str === rev) {
            console.log("Next Palindrome:", num);
            break;
        }

        num++;
    }
}


