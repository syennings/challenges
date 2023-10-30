import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

describe("addition function", () => {
  test("adds the numbers 2 and 3 correctly", () => {
    const resultPositive = add(2, 3);
    expect(resultPositive).toBe(5);
  });

  test("returns a negative value if the greater argument is negative", () => {
    const resultNegative = add(2, -3);
    expect(resultNegative).toBeLessThan(0);
  });

  test("returns a value close to 0.3 if called with add (0.1, 0.2)", () => {
    const resultDecimal = add(0.1, 0.2);
    expect(resultDecimal).toBeCloseTo(0.3);
  });
});

describe("substraction function", () => {
  test("subtracts the number 15 and 5 correctly", () => {
    const resultSubtract = subtract(15, 5);
    expect(resultSubtract).toBe(10);
  });

  test("returns a negative value if the second argument is greater than the first one", () => {
    const resultSubtractNegative = subtract(5, 15);
    expect(resultSubtractNegative).toBeLessThan(0);
  });
});

describe("multiplication function", () => {
  test("multiplies the number 2 and 4 correctly", () => {
    const resultMultiply = multiply(2, 4);
    expect(resultMultiply).toBe(8);
  });

  test("returns a negative value if only the first argument is negative", () => {
    const resultMultiplyNegative = multiply(-2, 4);
    expect(resultMultiplyNegative).toBeLessThan(0);
  });

  test("returns a negative value if only the first argument is negative", () => {
    const resultMultiplyNegative = multiply(-2, 4);
    expect(resultMultiplyNegative).toBeLessThan(0);
  });

  test("returns a negative value if only the second argument is negative", () => {
    const resultMultiplyNegative2 = multiply(2, -4);
    expect(resultMultiplyNegative2).toBeLessThan(0);
  });

  test("returns a positive value if called with two negative arguments", () => {
    const resultMultiplPositive = multiply(-2, -4);
    expect(resultMultiplPositive).toBeGreaterThan(0);
  });
});

describe("division function", () => {
  test("Divides 9 by 3 correctly", () => {
    const resultDivide = divide(9, 3);
    expect(resultDivide).toBe(3);
  });

  test("returns message if called with 0 as second argument", () => {
    const resultDivide0 = divide(9, 0);
    expect(resultDivide0).toBe("You should not do this!");
  });
});
