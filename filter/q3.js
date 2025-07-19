// filter strings of >5 length
const fruits = ["apple", "banana", "kiwi", "peach", "grape"];

const longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});

console.log(longFruits); // ["banana", "peach", "grape"]
