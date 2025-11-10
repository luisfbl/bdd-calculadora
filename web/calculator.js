const SAFE_INPUT = /^[0-9+\-*/. ]+$/;

const normalize = (value) => {
  if (typeof value === "number" && Number.isInteger(value)) {
    return String(value);
  }
  return String(value);
};

export function createCalculator() {
  let expression = "";
  let display = "0";

  const updateDisplay = (text) => {
    display = text;
  };

  const evaluate = () => {
    if (!expression) {
      updateDisplay("0");
      return;
    }
    if (!SAFE_INPUT.test(expression)) {
      expression = "";
      updateDisplay("Erro");
      return;
    }
    try {
      const result = eval(expression);
      const text = normalize(result);
      expression = text;
      updateDisplay(text);
    } catch (_error) {
      expression = "";
      updateDisplay("Erro");
    }
  };

  const press = (symbol) => {
    if (symbol === "C") {
      expression = "";
      updateDisplay("0");
      return display;
    }
    if (symbol === "=") {
      evaluate();
      return display;
    }
    expression += symbol;
    updateDisplay(expression);
    return display;
  };

  return {
    press,
    clear: () => press("C"),
    equals: () => press("="),
    getDisplay: () => display,
  };
}
