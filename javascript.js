// Operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;

const calculate = (a, b, operation) => {
  if (operation === "+") return add(a, b);
  else if (operation === "-") return subtract(a, b);
  else if (operation === "*") return multiply(a, b);
  else if (operation === "/") return divide(a, b);
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
  if (newStart === true) clearAll();
  if (currentNumber.textContent === "0") currentNumber.textContent = "";
  currentNumber.textContent += this.textContent;
}

function inputOperation() {
  calculations.textContent += currentNumber.textContent;
  if (currentNumber.textContent === "") calculations.textContent = calculations.textContent.slice(0, calculations.textContent.length - 3);
  calculations.textContent += ` ${this.textContent} `;

  previousNumber = currentNumber.textContent;
  currentNumber.textContent = "";

  operator = this.attributes["id"].nodeValue;
}

function inputCalculation() {
  if (operator === "") return;
  let a = parseInt(previousNumber);
  let b = parseInt(currentNumber.textContent);

  calculations.textContent += `${a} =`;
  currentNumber.textContent = calculate(a, b, operator);
  operator = "";
  newStart = true;
}

function clearAll() {
  calculations.textContent = "";
  currentNumber.textContent = "0";
  previousNumber = "";
  operator = "";
  newStart = false;
}

// Work In Progress

let previousNumber = "";
let operator = "";
let newStart = false;
