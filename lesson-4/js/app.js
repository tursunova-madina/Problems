"use strict";
const result = document.querySelector("#result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const add = () => {
  return (result.textContent = num1.value * 1 + num2.value * 1);
};

const minus = () => {
  return (result.textContent = num1.value * 1 - num2.value * 1);
};
const multiply = () => {
  return (result.textContent = num1.value * 1 * num2.value * 1);
};
const divide = () => {
  return (result.textContent = ((num1.value * 1) / num2.value) * 1);
};
function dell() {
  return (
    (result.textContent = " "),
    (num1.value = " "),
    (num2.value = " "),
    alert("O'chirasizmi?")
  );
}
