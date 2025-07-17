// Compress a string by replacing repeated characters with the character followed by
 // the count. (aaabbc → a3b2c1)

 function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

compressString("aaabbc");   // "a3b2c1"
compressString("xxxxxx");   // "x6"
compressString("abc");      // "a1b1c1"

