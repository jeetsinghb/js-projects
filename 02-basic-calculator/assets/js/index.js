const inputText = document.getElementById("input_box");

function appendToDisplay(input) {
  const lastChar = inputText.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  // Replace "0" or "Error" when starting fresh
  if (inputText.value === "0" || inputText.value === "Error") {
    if (operators.includes(input)) {
      inputText.value = "0" + input; // allow "0+"
    } else {
      inputText.value = input;
    }
    return;
  }

  // Prevent multiple operators in a row
  if (operators.includes(input) && operators.includes(lastChar)) {
    return;
  }

  inputText.value += input;
}

function clearDisplay() {
  inputText.value = "0";
}

function del() {
  if (inputText.value === "Error") {
    inputText.value = "0";
    return;
  }
  inputText.value = inputText.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    const result = math.evaluate(inputText.value);
    inputText.value = result;
  } catch (error) {
    inputText.value = "Error";
  }
}

// Initialize with 0 on load
window.onload = () => {
  inputText.value = "0";
};
