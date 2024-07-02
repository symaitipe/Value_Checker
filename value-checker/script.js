document.querySelector(".maxBtn").addEventListener("click", findMaxValue);
document.querySelector(".minBtn").addEventListener("click", findMinValue);
document.querySelector(".clrBtn").addEventListener("click", clearInputs);

const display = document.querySelector(".result-container");
const add_button = document.querySelector(".addBtn");
let inputCount = document.querySelectorAll(".list li").length;

//-----------------function for finding Max value -----------------------------------
function findMaxValue() {
  let max = Number.MIN_VALUE;
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    let inputValue = parseFloat(input.value);
    if (inputValue > max) {
      max = inputValue;
    }
  });

  console.log("Highest value is: " + max);
  display.textContent = "Highest value is: " + max;
}

//-----------------function for finding Min value -----------------------------------
function findMinValue() {
  let min = Number.MAX_VALUE;
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    let inputValue = parseFloat(input.value);
    if (inputValue < min) {
      min = inputValue;
    }
  });

  console.log("Least value is: " + min);
  display.textContent = "Least value is: " + min;
}

//-----------------function for clear button -----------------------------------
function clearInputs() {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => {
    input.value = "";
  });
  display.textContent = "";
}

//----------------- add new input field -------------------------------------------
add_button.addEventListener("click", () => {
  const newLine = document.createElement("li");
  inputCount += 1;

  const newLabel = document.createElement("span");
  newLabel.textContent = `Enter Value `;

  const newNumberInput = document.createElement("input");
  newNumberInput.type = "number";
  newNumberInput.className = "number";
  newNumberInput.disabled = true;
  newNumberInput.value = inputCount;

  const colon = document.createElement("span");
  colon.textContent = " : ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "input";
  newInput.placeholder = `Number ${inputCount}`;

  const removeButton = document.createElement("button");
  removeButton.className = "removeBtn";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeInput(removeButton));

  newLine.appendChild(newLabel);
  newLine.appendChild(newNumberInput);
  newLine.appendChild(colon);
  newLine.appendChild(newInput);
  newLine.appendChild(removeButton);

  const unorderedList = document.querySelector(".list");
  unorderedList.appendChild(newLine);
});

//----------------- remove input field -------------------------------------------
function removeInput(button) {
  const li = button.parentNode;
  li.parentNode.removeChild(li);
  updateNumbers();
}

//----------------- support function for update the input fields numbering -------------------------------------------
function updateNumbers() {
  const numberInputs = document.querySelectorAll(".number");
  inputCount = numberInputs.length;
  numberInputs.forEach((input, index) => {
    input.value = index + 1;
  });

  const textInputs = document.querySelectorAll(".input");
  textInputs.forEach((input, index) => {
    input.placeholder = `Number ${index + 1}`;
  });
}
