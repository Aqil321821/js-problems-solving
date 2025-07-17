// Insert dashes between each even digit in a string of numbers
function isEven(char) {
  return parseInt(char) % 2 === 0;
}

function insertDashes(str) {
  let result = '';

  for (let i = 0; i < str.length - 1; i++) {
    result += str[i];
    if (isEven(str[i]) && isEven(str[i + 1])) {
      result += '-';
    }
  }

  result += str[str.length - 1];
  return result;
}

console.log(insertDashes('025468')); // "0-254-6-8"
