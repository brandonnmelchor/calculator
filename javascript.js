let calculation = document.querySelector(".calculation");
let result = document.querySelector(".result");

const caculatorKeys = document.querySelectorAll("div:not(.display, .calculator)");
caculatorKeys.forEach((key) => key.addEventListener("click", test));

function test() {
  calculation.textContent += this.textContent;
}
