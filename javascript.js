// Operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;

const operator = (a, b) => {
  add(a, b);
};

// Selectors and Event Listeners

let calculation = document.querySelector(".calculation");
let result = document.querySelector(".result");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => number.addEventListener("click", inputNumber));

const operations = document.querySelectorAll(".operation");
operations.forEach((operation) => operation.addEventListener("click", inputOperation));

const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", calculateInputs);

//

let currentNumber = "";
let values = [];

function inputNumber() {
  calculation.textContent += this.textContent;
  currentNumber += this.textContent;
}

function inputOperation() {
  calculation.textContent += ` ${this.textContent} `;

  values.push(currentNumber);
  currentNumber = "";

  values.push(this.attributes["id"].nodeValue);
}

function calculateInputs() {
  values.push(currentNumber);
  result.textContent = "DONE";
  console.log(values);
}
