//Calculate Total Price of Items Where Quantity > 0
const cart = [
  { name: 'Laptop', price: 70000, quantity: 1 },
  { name: 'Mouse', price: 1500, quantity: 2 },
  { name: 'Keyboard', price: 3000, quantity: 0 },
  { name: 'Monitor', price: 20000, quantity: 1 },
];

let totalPrice = 0;

cart.forEach((item) => {
  if (item.quantity > 0) {
    totalPrice += item.price * item.quantity;
  }
});

console.log('Total Price:', totalPrice);
