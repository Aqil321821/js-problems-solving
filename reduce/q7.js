//Group Data by a Property (Group by Age)
/*
const people = [
  { name: 'Ali', age: 20 },
  { name: 'Sara', age: 25 },
  { name: 'Ahmed', age: 20 },
  { name: 'Zara', age: 30 },
  { name: 'Bilal', age: 25 }
];
{
  20: [{ name: 'Ali', age: 20 }, { name: 'Ahmed', age: 20 }],
  25: [{ name: 'Sara', age: 25 }, { name: 'Bilal', age: 25 }],
  30: [{ name: 'Zara', age: 30 }]
}

*/

const people = [
  { name: 'Ali', age: 20 },
  { name: 'Sara', age: 25 },
  { name: 'Ahmed', age: 20 },
  { name: 'Zara', age: 30 },
  { name: 'Bilal', age: 25 },
];

const groupedByAge = people.reduce((acc, curr) => {
  const age = curr.age;

  if (!acc[age]) {
    acc[age] = [];
  }

  acc[age].push(curr);

  return acc;
}, {});

console.log(groupedByAge);
