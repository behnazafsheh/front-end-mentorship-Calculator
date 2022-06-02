"use strict";

const inputResult = document.querySelector(".inputA");
const resultBtn = document.querySelector("result-key");
const numKeys = document.querySelectorAll(".numKey");
const clearKey = document.querySelector(".ac-key");
const operatorKeys = document.querySelectorAll(".operatorKey");
const backspaceKey = document.querySelector(".backspace");

let haveDot = false;

//  type just one dot!
numKeys.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.textContent === "." && haveDot) {
      return;
    }
  });
});

// shows number in input
numKeys.forEach((el) => {
  el.addEventListener("click", () => {
    inputResult.value += el.textContent;
  });
});
// clear all the input
clearKey.addEventListener("click", () => {
  inputResult.value = "";
});
// show operators in input
operatorKeys.forEach((op) => {
  op.addEventListener("click", () => {
    inputResult.value += op.textContent;
  });
});
//result
function myResult() {
  inputResult.value = eval(inputResult.value);
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const allButton = document.querySelector(".buttons");
const statusBar = document.querySelector(".statusbar");
const numKey = document.querySelector(".numbers");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  allButton.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  allButton.classList.toggle("active");
  statusBar.classList.toggle("active");
  numKey.classList.toggle("active");

  isDark = !isDark;
};