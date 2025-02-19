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

module.exports = { capitalize, reverseString, calculator };
