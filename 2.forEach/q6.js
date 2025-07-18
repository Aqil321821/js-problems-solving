//Q: Count How Many Users Are in Each Role
const users = [
  { name: 'Ali', role: 'admin' },
  { name: 'Zara', role: 'user' },
  { name: 'Ahmed', role: 'user' },
  { name: 'Sana', role: 'admin' },
  { name: 'Usman', role: 'guest' },
];

const roleCount = {};

users.forEach((user) => {
  if (roleCount[user.role]) {
    roleCount[user.role]++;
  } else {
    roleCount[user.role] = 1;
  }
});

console.log(roleCount);
