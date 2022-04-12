// Operations

const add = (a, b) => (a + b).toFixed(3);
const subtract = (a, b) => (a - b).toFixed(3);
const multiply = (a, b) => (a * b).toFixed(3);
const divide = (a, b) => (a / b).toFixed(3);
const modulus = (a, b) => (a % b).toFixed(3);

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
  let a = parseFloat(previousNumber).toFixed(3);
  let b = parseFloat(currentNumber.textContent).toFixed(3);

  if (operator !== "") {
    calculations.textContent += currentNumber.textContent;
    calculations.textContent += ` ${this.textContent} `;
    currentNumber.textContent = calculate(a, b, operator);
    operator = "";
  }
}

function clearAll() {
  calculations.textContent = "";
  currentNumber.textContent = "0";
}

// Work Area

let previousNumber = "";
let operator = "";
