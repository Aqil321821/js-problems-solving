// Swap the case of each character in a string (e.g., HeLLo → hEllO).
function swapCase(str) {
  let result = '';

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

swapCase('HeLLo'); // "hEllO"
swapCase('JavaSCRIPT'); // "jAVAscript"
