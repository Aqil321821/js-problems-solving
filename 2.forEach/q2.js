// Problem #2: Count How Many Even Numbers Are in an Array
const nums = [2, 5, 8, 13, 21, 4];
let evenCount = 0;

nums.forEach((n) => {
  if (n % 2 === 0) {
    evenCount++;
  }
});

console.log("Total Even Numbers:", evenCount);
