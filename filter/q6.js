// Filter users based on multiple conditions
const users = [
  { name: 'Ali', age: 20, status: 'inactive' },
  { name: 'Zara', age: 30, status: 'active' },
  { name: 'Hassan', age: 25, status: 'active' },
  { name: 'Maha', age: 18, status: 'inactive' },
];

const filteredUsers = users.filter(function (user) {
  return user.age > 18 && user.status === 'active';
});

console.log(filteredUsers);
