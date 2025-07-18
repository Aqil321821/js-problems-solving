// Extracting Usernames from an Array of Objects
/*
const users = [
  { id: 1, username: 'ali123', age: 25 },
  { id: 2, username: 'sara_k', age: 22 },
  { id: 3, username: 'ahmed.dev', age: 30 }
];
to:

['ali123', 'sara_k', 'ahmed.dev']

*/

const users = [
  { id: 1, username: 'ali123', age: 25 },
  { id: 2, username: 'sara_k', age: 22 },
  { id: 3, username: 'ahmed.dev', age: 30 },
];

const usernames = users.map((user) => user.username);

console.log(usernames);
