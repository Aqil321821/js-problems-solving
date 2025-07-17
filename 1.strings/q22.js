// Check if a string ends with a specific substring.
function endsWith(str, target) {
  return str.slice(-target.length) === target;
}

endsWith('javascript', 'script'); // true
