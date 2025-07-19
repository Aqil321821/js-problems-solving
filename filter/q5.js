// Filter users above a certain age
const users = [
  { name: 'Ali', age: 20 },
  { name: 'Zara', age: 30 },
  { name: 'Hassan', age: 25 },
  { name: 'Maha', age: 18 },
];

const filteredUsers = users.filter(function (user) {
  return user.age > 20;
});

console.log(filteredUsers);
// Output: [{ name: "Zara", age: 30 }, { name: "Hassan", age: 25 }]
