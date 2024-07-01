document.querySelector(".maxBtn").addEventListener("click", findMaxValue);
document.querySelector(".minBtn").addEventListener("click", findMinValue);

const display = document.querySelector(".result-container");
const inputs = document.querySelectorAll("input");

function findMaxValue() {
  let max = 5e-324;

  inputs.forEach((input) => {
    let inputValue = parseFloat(input.value);

    if (inputValue > max) {
      max = inputValue;
    }
  });

  console.log("Highest value is : " + max);
  display.textContent = "Higest value is : " + max;
}

function findMinValue() {
  let min = 1.7976931348623157e308;

  inputs.forEach((input) => {
    let inputValue = parseFloat(input.value);

    if (inputValue < min) {
      min = inputValue;
    }
  });

  console.log("Least value is : " + min);
  display.textContent = "Least value is : " + min;
}

document.querySelector(".clrBtn").addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
    display.textContent = "";
  });
});
