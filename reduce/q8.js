/*

 Convert array of objects into a lookup table using .reduce()

const users = [
  { id: 1, name: 'Aaqil' },
  { id: 2, name: 'Zain' },
  { id: 3, name: 'Taha' }
];
outcome:
{
  1: { id: 1, name: 'Aaqil' },
  2: { id: 2, name: 'Zain' },
  3: { id: 3, name: 'Taha' }
}

*/

const users = [
  { id: 1, name: 'Aaqil' },
  { id: 2, name: 'Zain' },
  { id: 3, name: 'Taha' },
];

const lookup = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(lookup);

const lookup2 = users.reduce((acc, { id, ...rest }) => {
  acc[id] = { id, ...rest };
  return acc;
}, {});
