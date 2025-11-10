import assert from "node:assert/strict";
import { Given, When, Then } from "@cucumber/cucumber";
import { createCalculator } from "../../src/calculator.js";

Given("que a calculadora web foi carregada", function () {
  this.calculator = createCalculator();
  this.display = this.calculator.getDisplay();
});

When("eu digito {string}", function (sequencia) {
  for (const symbol of sequencia) {
    if (symbol.trim() === "") {
      continue;
    }
    this.display = this.calculator.press(symbol);
  }
});

Then("eu vejo {string} no visor", function (esperado) {
  assert.equal(this.display, esperado);
});
