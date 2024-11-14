"use-strict";

const numbers = document.querySelectorAll(".num");
const input = document.querySelectorAll(".input");

// console.log(inputs.innerHTML);

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    console.log(`clicked${numbers[i].textContent}`);

    for (let e = 0; e < 9; e++) {
      input[i].textContent = numbers[i].textContent;
      input[i].classList.remove("input");
    }
  });
}

// console.log(number);

//   numbers.forEach(() => {

//     numbers.addEventListener("click", function () {

//     inputs.classList.remove("input");

//     inputs.innerHTML = number.innerHTML;
//   });
// });
