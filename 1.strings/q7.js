// Replace all spaces in a string with dashes
function replaceSpacesWithDash(str) {
  return str.replace(/ /g, "-");
}

console.log(replaceSpacesWithDash("Hello world today")); 
 // Output: Hello-world-today

 /*
 function replaceSpacesWithDash(str) {
  return str.split(" ").join("-");
}
 */
