// Count how many times a specific character appears in a string.
function countChar(str, targetChar) {
  let count = 0;

  for (let char of str) {
    if (char === targetChar) {
      count++;
    }
  }

  return count;
}

console.log(countChar('javascript', 'a'));

//case insensitive:

/*
function countCharInsensitive(str, targetChar) {
    let count = 0;
    str = str.toLowerCase();
    targetChar = targetChar.toLowerCase();
    
  for (let char of str) {
    if (char === targetChar) {
      count++;
    }
  }
  
  return count;
}

console.log(countCharInsensitive("JavaScript", "J"));  // Output: 1

*/
