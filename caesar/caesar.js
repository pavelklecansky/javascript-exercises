const MIN_UPPERCASE_LETTER_CODE_POINT = "A".codePointAt(0);
const MAX_UPPERCASE_LETTER_CODE_POINT = "Z".codePointAt(0);
const MIN_LOWWERCASE_LETTER_CODE_POINT = "a".codePointAt(0);
const MAX_LOWWERCASE_LETTER_CODE_POINT = "z".codePointAt(0);

function sumOrWrap(min, max, number, shift) {
  let sum = number + shift;
  //Testování jestli je suma v rozsahu mezi min a max jestli ne provádí se wrap znovu dokud není
  while (!(sum >= min && sum <= max)) {
    if (sum > max) {
      //wrap když je číslo vetší než max
      sum = sum - max + min - 1;
    }
    if (sum < min) {
      //wrap když je číslo menší než min
      sum = sum - min + max + 1;
    }
  }

  return sum;
}

function shiftLetter(letter, shift) {
  let letterCodePoint = letter.codePointAt(0);
  //Testování jestli je písmeno v anglické abecedě když ne vrátí se nezměněné
  if (
    (letterCodePoint >= MIN_UPPERCASE_LETTER_CODE_POINT && letterCodePoint <= MAX_UPPERCASE_LETTER_CODE_POINT) ||
    (letterCodePoint >= MIN_LOWWERCASE_LETTER_CODE_POINT && letterCodePoint <= MAX_LOWWERCASE_LETTER_CODE_POINT)
  ) {
    //Zjistí jestli je písmeno malé nebo ne. Protože malá písmena jsou v ascii až za velkými písmeni stačí otestovat jen jestli je větší než nejmenší malý
    const isLowerCase = letterCodePoint >= MIN_LOWWERCASE_LETTER_CODE_POINT;
    if (!isLowerCase) {
      //Malé a velké písmena mají v ascii od sebe rozestup 32 míst
      letterCodePoint += 32;
    }

    let sum = sumOrWrap(MIN_LOWWERCASE_LETTER_CODE_POINT, MAX_LOWWERCASE_LETTER_CODE_POINT, letterCodePoint, shift);
    if (!isLowerCase) {
      sum -= 32;
    }
    return String.fromCodePoint(sum);
  }
  return letter;
}

const caesar = function (sentance, shift) {
  let shiftedSentence = "";
  for (let index = 0; index < sentance.length; index++) {
    const shiftedLetter = shiftLetter(sentance[index], shift);
    shiftedSentence += shiftedLetter;
  }
  return shiftedSentence;
};

console.log(caesar("Hello, World!", 75));
module.exports = caesar;
