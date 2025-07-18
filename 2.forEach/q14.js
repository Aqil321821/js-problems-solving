//🔴 Problem #14: Group Products by Category
const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "TV", category: "Electronics" },
  { name: "Apple", category: "Grocery" }
];

const grouped = {};

products.forEach(product => {
  const cat = product.category;
  const name = product.name;

  if (grouped[cat]) {
    grouped[cat].push(name);
  } else {
    grouped[cat] = [name];
  }
});

console.log(grouped);
