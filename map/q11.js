//  Update User Status to “Online”
/*
const users = [
  { name: "Ali", isOnline: false },
  { name: "Zara", isOnline: false },
  { name: "Hassan", isOnline: false }
];
to:
[
  { name: "Ali", isOnline: true },
  { name: "Zara", isOnline: true },
  { name: "Hassan", isOnline: true }
]

*/

const users = [
  { name: 'Ali', isOnline: false },
  { name: 'Zara', isOnline: false },
  { name: 'Hassan', isOnline: false },
];

const updatedUsers = users.map((user) => {
  return { ...user, isOnline: true };
});

console.log(updatedUsers);
