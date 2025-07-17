// Find the first non-repeating character in a string.
function firstNonRepeatingChar(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

firstNonRepeatingChar('aabbcde'); // "c"
