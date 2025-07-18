//  Apply Discount and Calculate Final Price
/*
const products = [
  { name: "Laptop", price: 1000, discount: 10 },   // 10% off
  { name: "Phone", price: 600, discount: 5 },      // 5% off
  { name: "Tablet", price: 800, discount: 15 }     // 15% off
];
to:
[
  { name: "Laptop", finalPrice: 900 },
  { name: "Phone", finalPrice: 570 },
  { name: "Tablet", finalPrice: 680 }
]

*/
const products = [
  { name: 'Laptop', price: 1000, discount: 10 },
  { name: 'Phone', price: 600, discount: 5 },
  { name: 'Tablet', price: 800, discount: 15 },
];

const discountedProducts = products.map((product) => {
  const discountAmount = (product.price * product.discount) / 100;
  const finalPrice = product.price - discountAmount;
  return { name: product.name, finalPrice };
});

console.log(discountedProducts);
