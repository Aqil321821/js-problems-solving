// Problem #4: Group Objects by a Property using .reduce()
const people = [
  { name: 'Ali', age: 20 },
  { name: 'Sara', age: 25 },
  { name: 'Ahmed', age: 20 },
  { name: 'Zara', age: 25 },
  { name: 'Asad', age: 30 },
];

const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(person);
  return acc;
}, {});

console.log(groupedByAge);
