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

let calculationDisplay = document.querySelector(".calculation-display");
let currentNumber = document.querySelector(".current-number");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const calculateButton = document.querySelector(".calculate-button");
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");

// Event Listeners

numbers.forEach((number) => number.addEventListener("click", inputNumber));
operations.forEach((operation) => operation.addEventListener("click", inputOperation));
calculateButton.addEventListener("click", calculate);
allClear.addEventListener("click", clearAll);

// Event Listener Functions

function inputNumber() {
  if (currentNumber.textContent === "0") currentNumber.textContent = "";
  currentNumber.textContent += this.textContent;
}

function inputOperation() {
  calculationDisplay.textContent += `${currentNumber.textContent} ${this.textContent} `;
  operator = this.attributes["id"].nodeValue;
  currentNumber.textContent = "";
}

function clearAll() {
  calculationDisplay.textContent = "";
  currentNumber.textContent = "0";
}

// Work Area

let previousNumber = "";
let operator = "";
