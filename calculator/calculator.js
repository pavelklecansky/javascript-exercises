function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

function multiply(array) {
  return array.reduce((total, current) => (total *= current), 1);
}

function power(num1, num2) {
  return num1 ** num2;
}

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
