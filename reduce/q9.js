// Problem: Flatten an array of arrays using .reduce()
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattened = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flattened);
