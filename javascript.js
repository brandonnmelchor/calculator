// Operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;

const calculate = (a, b, operation) => {
  if (operation === "+") return add(a, b);
  else if (operation === "-") return subtract(a, b);
  else if (operation === "\u00d7") return multiply(a, b);
  else if (operation === "\u00f7") return divide(a, b);
  else if (operation === "%") return modulus(a, b);
};

// Selectors

let calculations = document.querySelector(".calculations");
let currentNumber = document.querySelector(".current-number");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const calculateButton = document.querySelector(".calculate-button");
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");

// Event Listeners

numbers.forEach((number) => number.addEventListener("click", inputNumber));
operations.forEach((operation) => operation.addEventListener("click", inputOperation));
calculateButton.addEventListener("click", inputCalculation);
allClear.addEventListener("click", clearAll);

// Event Listener Functions

function inputNumber() {
  if (lastInput === "calculation") clearAll();
  if (lastInput === "operation" || currentNumber.textContent === "0") currentNumber.textContent = "";
  currentNumber.textContent += this.textContent;
  lastInput = "number";
}

function inputOperation() {
  if (lastInput === "number" && lastNumber !== "") {
    let a = parseInt(lastNumber);
    let b = parseInt(currentNumber.textContent);
    currentNumber.textContent = calculate(a, b, operator);
  }

  lastNumber = currentNumber.textContent;
  operator = this.textContent;
  calculations.textContent = `${lastNumber} ${operator} `;

  lastInput = "operation";
}

function inputCalculation() {
  if (lastInput === "calculation" || operator === "") return;
  let a = parseInt(lastNumber);
  let b = parseInt(currentNumber.textContent);

  calculations.textContent = `${a} ${operator} ${b} =`;
  currentNumber.textContent = calculate(a, b, operator);

  lastInput = "calculation";
}

function clearAll() {
  calculations.textContent = "";
  currentNumber.textContent = "0";
  lastInput = "";
  lastNumber = "";
  operator = "";
}

// Work in Progress

let lastInput = "";
let lastNumber = "";
let operator = "";
