// Convert Array of Objects into a Single Object (based on a key)
const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Ahmed' }
];

const userMap = users.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(userMap);
/*
{
  1: { id: 1, name: 'Ali' },
  2: { id: 2, name: 'Sara' },
  3: { id: 3, name: 'Ahmed' }
}
*/