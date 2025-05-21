let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");
let result = document.getElementById("result");
let Num1 = document.querySelector("#num1");
let Num2 = document.querySelector("#num2");
let Operation = document.querySelector("#operator");
let check = document.querySelector("#check");

if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
    alert("Неправильный оператор");
}
check.onclick = function() {
    if (num1 === NaN || num2 === NaN) {
    result.textContent = 'Введи число'
    } else if (num1 === null || num2 === null) {
        result.textContent = 'Введи число '
    } else if (operation === "+") {
        result.textContent = num1 + num2;
    } else if (operation === "-") {
        result.textContent = num1 - num2;
    } else if (operation === "*") {
        result.textContent = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result.textContent = num1 / num2;
        } else {
            result.textContent = "Разлелять на ноль нельзя!";
        }
    } else {
        result.textContent = "Ошибка";
    }
}
Num1.textContent = num1;
Num2.textContent = num2;
Operation.textContent = operation;
