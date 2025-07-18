// Extract Full Names from Nested User Data
/*
const users = [
  { id: 1, name: { first: 'Ali', last: 'Khan' }, age: 25 },
  { id: 2, name: { first: 'Sara', last: 'Kamran' }, age: 22 },
  { id: 3, name: { first: 'Ahmed', last: 'Dev' }, age: 30 }
];
to:
['Ali Khan', 'Sara Kamran', 'Ahmed Dev']

*/
const users = [
  { id: 1, name: { first: 'Ali', last: 'Khan' }, age: 25 },
  { id: 2, name: { first: 'Sara', last: 'Kamran' }, age: 22 },
  { id: 3, name: { first: 'Ahmed', last: 'Dev' }, age: 30 },
];

const fullNames = users.map((user) => `${user.name.first} ${user.name.last}`);

console.log(fullNames);
