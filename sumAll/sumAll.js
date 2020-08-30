const sumAll = function (startNumber, endNumber) {
  if (
    (typeof startNumber != "number" || typeof endNumber != "number") ||
    (startNumber < 0 || endNumber < 0)
  ) {
    return "ERROR";
  }
  let sum = 0;
  let biggerNumber = startNumber > endNumber ? startNumber : endNumber;
  let smallerNumber = startNumber < endNumber ? startNumber : endNumber;

  for (let index = smallerNumber; index <= biggerNumber; index++) {
    sum += index;
  }
  return sum;
};

module.exports = sumAll;
