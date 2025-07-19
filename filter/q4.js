// : Filter active users from an array of users
const users = [
  { name: "Ali", isActive: true },
  { name: "Zara", isActive: false },
  { name: "Hassan", isActive: true },
  { name: "Maha", isActive: false }
];

const activeUsers = users.filter(function(user) {
  return user.isActive === true;
});

console.log(activeUsers);
// Output: [{ name: "Ali", isActive: true }, { name: "Hassan", isActive: true }]

//arrow function
const activeUsers2 = users.filter(user => user.isActive);
