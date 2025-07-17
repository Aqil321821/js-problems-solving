// Check if a string is a Palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false


/*
 //Case Insensitive
function isPalindrome(str) {
  const cleaned = str.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

*/