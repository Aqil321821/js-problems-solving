// Remove all vowels from a string
function removeVowels(str) {
  let result = "";
  let vowels = "aeiou";
  
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}

removeVowels("Hello World"); // "Hll Wrld"
removeVowels("AEIOUaeiou");  // ""
