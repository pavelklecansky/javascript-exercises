const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  num--;
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

console.log(fibonacci(2));

module.exports = fibonacci;
