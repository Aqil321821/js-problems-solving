//Problem #2: Create a New Array of Simplified User Info
const users = [
  { id: 1, name: 'Ahmed', age: 21 },
  { id: 2, name: 'Zara', age: 24 },
  { id: 3, name: 'Bilal', age: 19 }
];

const simplifiedUsers = users.map(user => {
  return {
    userName: user.name,
    userAge: user.age
  };
});

console.log(simplifiedUsers);
