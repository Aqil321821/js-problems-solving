// Problem #3: Extract Names from User Objects 
const users = [
  { id: 1, name: 'Aqeel' },
  { id: 2, name: 'Yashfa' },
  { id: 3, name: 'Ahmed' }
];

const names = users.map(user => user.name);

console.log(names); // ['Aqeel', 'Yashfa', 'Ahmed']
