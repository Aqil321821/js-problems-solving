//Group Products by Category Using forEach

const products = [
  { name: 'Shampoo', category: 'Personal Care' },
  { name: 'Toothpaste', category: 'Personal Care' },
  { name: 'Bread', category: 'Grocery' },
  { name: 'Eggs', category: 'Grocery' },
  { name: 'Laptop', category: 'Electronics' },
];

const grouped = {};

products.forEach((product) => {
  const cat = product.category;

  if (grouped[cat]) {
    grouped[cat].push(product.name);
  } else {
    grouped[cat] = [product.name];
  }
});

console.log(grouped);
