//Transform Users into Custom Objects
/*
const users = [
  { id: 1, name: { first: 'Ali', last: 'Khan' }, age: 25 },
  { id: 2, name: { first: 'Sara', last: 'Kamran' }, age: 22 },
  { id: 3, name: { first: 'Ahmed', last: 'Dev' }, age: 30 }
];
to :
[
  { fullName: 'Ali Khan', isAdult: true },
  { fullName: 'Sara Kamran', isAdult: true },
  { fullName: 'Ahmed Dev', isAdult: true }
]

*/
const users = [
  { id: 1, name: { first: 'Ali', last: 'Khan' }, age: 25 },
  { id: 2, name: { first: 'Sara', last: 'Kamran' }, age: 22 },
  { id: 3, name: { first: 'Ahmed', last: 'Dev' }, age: 30 },
];

const transformedUsers = users.map((user) => {
  const fullName = `${user.name.first} ${user.name.last}`;
  const isAdult = user.age >= 18;

  return { fullName, isAdult };
});

console.log(transformedUsers);
