//  Mark Adults and Minors Separately
/*
const people = [
  { name: "Ali", age: 17 },
  { name: "Zara", age: 21 },
  { name: "Hassan", age: 15 },
  { name: "Maha", age: 25 }
];
to:
[
  "Ali is a minor",
  "Zara is an adult",
  "Hassan is a minor",
  "Maha is an adult"
]


*/
const people = [
  { name: 'Ali', age: 17 },
  { name: 'Zara', age: 21 },
  { name: 'Hassan', age: 15 },
  { name: 'Maha', age: 25 },
];

const statusArray = people.map((person) => {
  return `${person.name} is a ${person.age >= 18 ? 'adult' : 'minor'}`;
});

console.log(statusArray);
