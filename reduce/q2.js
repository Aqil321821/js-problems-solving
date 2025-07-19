// Find the Maximum Number in an Array using .reduce()
const numbers = [5, 10, 25, 8, 3];

const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max); // Output: 25
