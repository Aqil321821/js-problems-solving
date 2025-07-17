// Truncate a string if it is longer than a given number and add ... at the end

const truncateString = (str, maxLength) => {
  return str.length <= maxLength ? str : str.slice(0, maxLength) + '...';
};

console.log(truncateString('JavaScript is awesome', 10)); // "JavaScript..."
console.log(truncateString('Hi there', 10)); // "Hi there"
