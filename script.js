"use strict";

const inputResult = document.querySelector(".inputA");
const resultBtn = document.querySelector("result-key");
const numKeys = document.querySelectorAll(".numKey");
const clearKey = document.querySelector(".ac-key");
const operatorKeys = document.querySelectorAll(".operatorKey");
const backspaceKey = document.querySelector(".backspace");
const percentKey = document.querySelector(".percent");

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
// minus plus
function minusPlus() {
  inputResult.value.includes == "+/-";
  inputResult.value *= -1;
}
// Decimal
function decimal() {
  inputResult.value.includes == ".";
  console.log("test");
  return;
  
}
// let dotReset = true;
// function decimal() {
//   if (inputResult.value.includes == ".") {
//     if (dotReset) {
//       inputResult.value += ".";
//       dotReset = false;
//     }
//   }
// }


// clear one by one
function clearOne() {
  if (inputResult.value.length >= 0) {
    inputResult.value = inputResult.value.slice(0, -1);
  }
}

// percentage
function percentage(numKeys) {
  
  // return inputResult.value = (numKeys/100)*numKeys;
  if(inputResult.value.includes == "%"){
    inputResult.value = eval((inputResult.value*100) / inputResult.value);

  }
  
}


// light and dark mode
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const allButton = document.querySelector(".buttons");
const statusBar = document.querySelector(".statusbar");
const numberOne = document.querySelector(".number1");
const numberTwo = document.querySelector(".number2");
const numberThree = document.querySelector(".number3");
const numberFour = document.querySelector(".number4");
const numberFive = document.querySelector(".number5");
const numberSix = document.querySelector(".number6");
const numberSeven = document.querySelector(".number7");
const numberEight = document.querySelector(".number8");
const numberNine = document.querySelector(".number9");
const numberZero = document.querySelector(".number0");
const numberDot = document.querySelector(".numberdot");
const numberEqual = document.querySelector(".numberequal");
const result = document.querySelector(".inputA");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  allButton.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  allButton.classList.toggle("active");
  statusBar.classList.toggle("active");
  numberOne.classList.toggle("active");
  numberTwo.classList.toggle("active");
  numberThree.classList.toggle("active");
  numberFour.classList.toggle("active");
  numberFive.classList.toggle("active");
  numberSix.classList.toggle("active");
  numberSeven.classList.toggle("active");
  numberEight.classList.toggle("active");
  numberNine.classList.toggle("active");
  numberZero.classList.toggle("active");
  numberDot.classList.toggle("active");
  numberEqual.classList.toggle("active");
  result.classList.toggle("dark");
  result.classList.toggle("active");

  isDark = !isDark;
};
