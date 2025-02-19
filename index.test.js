const exp = require("constants");
const { capitalize, reverseString, calculator } = require("./index.js");

describe("capitalize function", () => {
  test("Capitalize first letter", () => {
    expect(capitalize("zirix")).toBe("Zirix");
  });
  test("Handles already capitalized words", () => {
    expect(capitalize("ZIRIX")).toBe("ZIRIX");
  });
  test("Handle empty string", () => {
    expect(capitalize("")).toBe("");
  });
  test("Handle non-stirng input", () => {
    expect(capitalize("123abc")).toBe("123abc");
    expect(capitalize(123)).toBe(123);
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });
});

describe("reverse function", () => {
  test("Reverse a string", () => {
    expect(reverseString("Zirix")).toBe("xiriZ");
  });
  test("Handle empty string", () => {
    expect(reverseString("")).toBe("");
  });
  test("Handle numbers", () => {
    expect(reverseString(123)).toBe("321");
  });
  test("Handle null and undifined", () => {
    expect(reverseString(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });
});

describe("Calculator functions", () => {
  test("Addition", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, -1)).toBe(-2);
    expect(calculator.add(0, 5)).toBe(5);
  });

  test("Subtraction", () => {
    expect(calculator.sub(5, 3)).toBe(2);
    expect(calculator.sub(10, 20)).toBe(-10);
    expect(calculator.sub(0, 0)).toBe(0);
  });

  test("Multiplication", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 5)).toBe(-5);
    expect(calculator.multiply(0, 10)).toBe(0);
  });

  test("Division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 10)).toBe(0);
  });

  test("Handles division by zero", () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
    expect(calculator.divide(-10, 0)).toBe(-Infinity);
  });
});
