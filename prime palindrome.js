
let n = 7;

let prime = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}

if (prime && n > 1) {
    console.log("Prime");

    let num = n + 1;

    while (true) {
        let str = String(num);
        let rev = str.split("").reverse().join("");

        if (str == rev) {
            console.log("Next Palindrome:", num);
            break;
        }

        num++;
    }
} else {
    console.log("Not Prime");
}
