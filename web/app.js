import { createCalculator } from "./calculator.js";

const calculator = createCalculator();
const display = document.getElementById("display");

const render = () => {
  display.value = calculator.getDisplay();
};

const attachButtons = () => {
  document.querySelectorAll("button[data-value]").forEach((button) => {
    button.addEventListener("click", () => {
      calculator.press(button.dataset.value);
      render();
    });
  });

  document.getElementById("clear").addEventListener("click", () => {
    calculator.clear();
    render();
  });

  document.getElementById("equals").addEventListener("click", () => {
    calculator.equals();
    render();
  });
};

attachButtons();
render();
