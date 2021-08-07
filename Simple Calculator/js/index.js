let number1 = 6;
let number2 = 8;
let number3 = 0;

let number1Label = document.getElementById("number-one");
let number2Label = document.getElementById("number-two");
let number3Label = document.getElementById("fin-number");

number1Label.textContent = number1;
number2Label.textContent = number2;

function add(){
    number3Label.textContent = number1 + number2;
}

function subtract(){
    number3Label.textContent = number1 - number2;
}

function multiply(){
    number3Label.textContent = number1 * number2;
}

function divide(){
    number3Label.textContent = number1 / number2;
}

