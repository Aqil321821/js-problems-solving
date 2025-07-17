// Capitalize the first letter of a string
const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);


console.log(capitalizeFirstLetter("pakistan"));   // "Pakistan"
console.log(capitalizeFirstLetter("hello world")); // "Hello world"
console.log(capitalizeFirstLetter("a"));           // "A"
