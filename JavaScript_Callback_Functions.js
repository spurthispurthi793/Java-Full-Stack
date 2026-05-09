function greetUser(name, callback) {
    callback(name);
}

function greeting(name) {
    console.log("Hello, " + name);
}

greetUser("Rahul", greeting);



function calculate(a, b, callback) {

    let result = a + b;

    callback(result);
}

function displayResult(result) {
    console.log("Calculation Result:", result);
}

calculate(10, 5, displayResult);



function showMessage(callback) {

    setTimeout(function () {
        callback();
    }, 3000);
}

function delayedMessage() {
    console.log("This message appeared after 3 seconds");
}

showMessage(delayedMessage);
