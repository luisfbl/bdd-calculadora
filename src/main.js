import "./style.css";
import { createCalculator } from "./calculator.js";

const container = document.getElementById("app");
container.innerHTML = `
  <div class="calculator">
    <input id="display" class="display" type="text" value="0" disabled />
    <div class="grid">
      <button data-value="7">7</button>
      <button data-value="8">8</button>
      <button data-value="9">9</button>
      <button class="operator" data-value="/">÷</button>
      <button data-value="4">4</button>
      <button data-value="5">5</button>
      <button data-value="6">6</button>
      <button class="operator" data-value="*">×</button>
      <button data-value="1">1</button>
      <button data-value="2">2</button>
      <button data-value="3">3</button>
      <button class="operator" data-value="-">−</button>
      <button data-value="0">0</button>
      <button id="clear">C</button>
      <button id="equals">=</button>
      <button class="operator" data-value="+">+</button>
    </div>
  </div>
`;

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
