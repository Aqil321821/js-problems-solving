// 🔴 Problem #16: Flatten 1-Level Nested Array
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const flatArr = [];

nestedArr.forEach(innerArr => {
  innerArr.forEach(num => {
    flatArr.push(num);
  });
});

console.log(flatArr);
