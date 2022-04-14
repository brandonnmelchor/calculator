// Operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => parseFloat((a * b).toFixed(2));
const divide = (a, b) => parseFloat((a / b).toFixed(2));
const modulus = (a, b) => parseFloat((a % b).toFixed(2));

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

// Click Event Listeners

numbers.forEach((number) => number.addEventListener("click", inputNumber));
operations.forEach((operation) => operation.addEventListener("click", inputOperation));
calculateButton.addEventListener("click", inputCalculation);
allClear.addEventListener("click", clearAll);
clear.addEventListener("click", clearCurrentNumber);

// Key Event Listeners

document.addEventListener("keydown", inputKey);
function inputKey(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === ".") inputNumber();
  if (e.key === "%" || e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+") inputOperation();
  if (e.key === "Enter") inputCalculation();
  if (e.key === "Escape") clearAll();
  if (e.key === "Backspace") clearCurrentNumber();
}

// Event Listener Functions

let lastInput = "";
let lastNumber = "";
let operator = "";

function inputNumber() {
  let number = this.textContent ? this.textContent : event.key;

  if (lastInput === "calculation") clearAll();
  if (lastInput === "operation" || currentNumber.textContent === "0") currentNumber.textContent = "";
  if (currentNumber.textContent.includes(".") && number === ".") return;
  if (currentNumber.textContent.length >= 10) return;

  currentNumber.textContent += number;
  lastInput = "number";
}

function inputOperation() {
  if (lastInput === "number" && lastNumber !== "") {
    let a = parseFloat(lastNumber);
    let b = parseFloat(currentNumber.textContent);
    let output = calculate(a, b, operator);

    currentNumber.textContent = output.toString().length >= 10 ? output.toExponential(2) : output;
  }

  lastNumber = currentNumber.textContent;
  operator = this.textContent ? this.textContent : event.key === "/" ? "\u00f7" : event.key === "*" ? "\u00d7" : event.key;
  calculations.textContent = `${lastNumber} ${operator} `;
  lastInput = "operation";
}

function inputCalculation() {
  if (lastInput === "calculation" || operator === "") return;

  lastNumber = parseFloat(lastNumber);
  let a = lastNumber.toString().length >= 10 ? lastNumber.toExponential(2) : lastNumber;
  let b = parseFloat(currentNumber.textContent);
  let output = calculate(a, b, operator);

  calculations.textContent = `${a} ${operator} ${b} =`;
  currentNumber.textContent = output.toString().length >= 10 ? output.toExponential(2) : output;
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

// Vanta Background

VANTA.NET({
  el: document.querySelector("html"),
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xfcfcfc,
  backgroundColor: 0xa3c2bb,
  points: 15.0,
  maxDistance: 22.0,
  spacing: 15.0,
  showDots: false,
});
