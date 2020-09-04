const palindromes = function (sentance) {
  // Odstranění tečku vykřičník a otazník a převedené na malá písmena
  const adjustedSentence = sentance.trim().replace(/[ !?.,]/g, "").toLowerCase();
  const reverseSentence = adjustedSentence.split("").reverse().join("");
  return adjustedSentence === reverseSentence;
};

module.exports = palindromes;
