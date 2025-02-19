const exp = require("constants");
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index.js");

//capitalize test
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

//reverse test
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

//calculator test
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

//caesar cipher test
describe("Caesar Cipher function", () => {
  test("Shifts letters correctly", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("Handles negative shift (left shift)", () => {
    expect(caesarCipher("khoor", -3)).toBe("hello");
  });

  test("Wraps around at end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Preserves uppercase and lowercase letters", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test("Does not modify numbers or special characters", () => {
    expect(caesarCipher("1234!@#", 5)).toBe("1234!@#");
  });

  test("Handles large shift values", () => {
    expect(caesarCipher("abc", 52)).toBe("abc");
    expect(caesarCipher("abc", -52)).toBe("abc");
  });

  test("Handles empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });
});

//analyzeArray test
describe("analyzeArray function", () => {
  test("Correctly analyzes an array of positive numbers", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("Handles an array with negative numbers", () => {
    expect(analyzeArray([-2, -1, 0, 1, 2])).toEqual({
      average: 0,
      min: -2,
      max: 2,
      length: 5,
    });
  });

  test("Works with a single-element array", () => {
    expect(analyzeArray([10])).toEqual({
      average: 10,
      min: 10,
      max: 10,
      length: 1,
    });
  });

  test("Returns null for empty array", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("Returns null for non-numeric values", () => {
    expect(analyzeArray([1, "hello", 3])).toBeNull();
    expect(analyzeArray(["abc", {}])).toBeNull();
  });
});
