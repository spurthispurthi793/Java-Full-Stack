let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

console.log("a > b:", a > b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

let num = 7;

if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

let x = 10;
let y = 20;
let z = 15;

if (x > y && x > z) {
    console.log("Largest Number:", x);
} else if (y > x && y > z) {
    console.log("Largest Number:", y);
} else {
    console.log("Largest Number:", z);
}

for (let i = 1; i <= 20; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}

let evenCount = 0;

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        evenCount++;
    }
}

console.log("Count of Even Numbers:", evenCount);
