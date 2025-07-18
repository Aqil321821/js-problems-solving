//  Find Duplicate Numbers in an Array
const numbers = [1, 2, 3, 2, 4, 5, 1, 6];
const seen = {};
const duplicates = [];

numbers.forEach(num => {
  if (seen[num]) {
    if (!duplicates.includes(num)) {
      duplicates.push(num);
    }
  } else {
    seen[num] = true;
  }
});

console.log(duplicates);
