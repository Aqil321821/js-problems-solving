// Remove duplicate characters from a string.
function removeDuplicates(str) {
  const seen = {};
  let result = '';

  for (let char of str) {
    if (!seen[char]) {
      result += char;
      seen[char] = true;
    }
  }

  return result;
}

removeDuplicates('aabbccdd'); // "abcd"
