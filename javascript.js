// Operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => parseFloat((a * b).toFixed(3));
const divide = (a, b) => parseFloat((a / b).toFixed(3));
const modulus = (a, b) => parseFloat((a % b).toFixed(3));

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
clear.addEventListener("click", clearCurrentNumber);

// Event Listener Functions

function inputNumber() {
  if (lastInput === "calculation") clearAll();
  if (lastInput === "operation" || currentNumber.textContent === "0") currentNumber.textContent = "";
  if (currentNumber.textContent.includes(".") && this.textContent === ".") return;
  if (currentNumber.textContent.length >= 10) return;

  currentNumber.textContent += this.textContent;
  lastInput = "number";
}

function inputOperation() {
  if (lastInput === "number" && lastNumber !== "") {
    let a = parseFloat(lastNumber);
    let b = parseFloat(currentNumber.textContent);
    let output = calculate(a, b, operator);

    currentNumber.textContent = output.toString().length >= 10 ? output.toExponential(3) : output;
  }

  lastNumber = currentNumber.textContent;
  operator = this.textContent;
  calculations.textContent = `${lastNumber} ${operator} `;

  lastInput = "operation";
}

function inputCalculation() {
  if (lastInput === "calculation" || operator === "") return;
  lastNumber = parseFloat(lastNumber);

  let a = lastNumber.toString().length >= 10 ? lastNumber.toExponential(3) : lastNumber;
  let b = parseFloat(currentNumber.textContent);
  let output = calculate(a, b, operator);

  calculations.textContent = `${a} ${operator} ${b} =`;
  currentNumber.textContent = output.toString().length >= 10 ? output.toExponential(3) : output;

  lastInput = "calculation";
}

function clearAll() {
  calculations.textContent = "";
  currentNumber.textContent = "0";
  lastInput = "";
  lastNumber = "";
  operator = "";
}

function clearCurrentNumber() {
  if (lastInput === "calculation") clearAll();
  currentNumber.textContent = "0";
}

// Work in Progress

let lastInput = "";
let lastNumber = "";
let operator = "";
