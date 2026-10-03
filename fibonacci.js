let n = 21;   // Input

let a = 0;
let b = 1;
let found = false;

while (a <= n) {
    if (a === n) {
        found = true;
        break;
    }

    let c = a + b;
    a = b;
    b = c;
}

if (found) {
    console.log(n + " is a Fibonacci number");
} else {
    console.log(n + " is not a Fibonacci number");
}