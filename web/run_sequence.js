import { createCalculator } from "./calculator.js";

const sequence = process.argv[2] ?? "";
const calculator = createCalculator();

for (const symbol of sequence) {
  if (symbol.trim() === "") {
    continue;
  }
  calculator.press(symbol);
}

process.stdout.write(calculator.getDisplay());
