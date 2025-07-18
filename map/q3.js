// Convert Array of Strings to Numbered Items
const fruits = ['Apple', 'Banana', 'Mango'];

const numberedFruits = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`;
});

console.log(numberedFruits);
