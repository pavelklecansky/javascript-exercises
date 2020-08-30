const ftoc = function (fahrenheit) {
  //Přepočet fahrenheita na celsia
  let calculation = ((fahrenheit - 32) * 5) / 9;
  //Zaokrouhlení na jedno desetiné místo
  return Math.round(calculation * 10) / 10;
};

const ctof = function (celsius) {
  //Přepočet celsia na fahrenheita
  let calculation = celsius * 1.8 + 32;
  //Zaokrouhlení na jedno desetiné místo
  return Math.round(calculation * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};
