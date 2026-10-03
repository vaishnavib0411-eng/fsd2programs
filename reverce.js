let sentence = "my name is raja";

let words = sentence.split(" ");
let result = "";

for (let word of words) {
    result += word.split("").reverse().join("") + " ";
}

console.log("Input:", sentence);
console.log("Output:", result.trim());

