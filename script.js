"use strict";

const inputResult = document.querySelector(".inputA");
const resultBtn = document.querySelector("result-key");
const numKeys = document.querySelectorAll(".numKey");
const clearKey = document.querySelector(".ac-key");
const operatorKeys = document.querySelectorAll(".operatorKey");
const backspaceKey = document.querySelector(".backspace");

let haveDot = false;

// type just one dot
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
//   appendNumber();
});
//result
function myResult() {
  inputResult.value = eval(inputResult.value);
}

// function deleteOne(item) {
//   let out = document.querySelector(".inputA");
//   let current = out.innerHTML;
//   if(out.innerHTML == "0"){
    
//     if(item!= "C" && item!="DEL"){ 
//       out.innerHTML ="";
//       out.innerHTML += item;
//     }
//   }
//   else{
//     if(item == "DEL" ){
//       console.log(current[current.length-1]);
//       out.innerText = current.slice(0,-1);
//       if(out.innerHTML.length <= 1){
//         out.innerHTML = "0";
//       }
//     }
// }
// }

// function appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }



// const display = document.querySelector(".inputA");
// const buttons = document.querySelectorAll(".operatorKey");
// const operatorKeys = document.querySelectorAll(".operatorKey");

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  //   buttons.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

// function getInputValue(){
//     let input = event.target.innerText
//     console.log(input);
//     printValue(input);
// }
// let buttons = document.getElementsByTagName('button');
// console.log(buttons.length);
// for(var i =0; i<buttons.length;i++){
//     buttons[i].setAttribute('onclick','getInputValue()');
// }

// function printValue(val){
//     let out = document.querySelector("#result");
//     let current = out.innerHTML;
//     if(out.innerHTML == "0"){

//       if(val!= "C" && val!="DEL"){
//         out.innerHTML ="";
//         out.innerHTML += val;
//       }
//     }
//     else{
//       if(val == "DEL" ){
//         console.log(current[current.length-1]);
//         out.innerText = current.slice(0,-1);
//         if(out.innerHTML.length <= 1){
//           out.innerHTML = "0";
//         }
//       }
//       if(val!= "C" && val!="DEL" && val!="="){
//         out.innerHTML += val;
//       }
//       if(val =="="){
//         let res = out.innerHTML;
//         out.innerHTML = eval(res);
//       }
//       if(val == "C"){
//         out.innerHTML = "0";
//       }
//     }

// }
