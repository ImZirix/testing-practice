const { number } = require("yargs");

function capitalize(str) {
  if (typeof str !== "string") return str;
  if (str.length === 0) return "";

  if (!isNaN(str.charAt(0))) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (str === null || str === undefined) return str;
  return String(str).split("").reverse().join("");
}
const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function caesarCipher(str, shift) {
  if (typeof str !== "string" || typeof shift !== "number") return str;

  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(
          ((((code - base + shift) % 26) + 26) % 26) + base
        );
      }
      return char;
    })
    .join("");
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(isNaN)) {
    return null;
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
