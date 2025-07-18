//Convert Array of Strings to Array of Objects
[
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Ahmed' },
  { id: 3, name: 'Sara' }
]
//to:
[
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Ahmed' },
  { id: 3, name: 'Sara' }
]


const users = ['Ali', 'Ahmed', 'Sara'];

const userObjects = users.map((name, index) => {
  return {
    id: index + 1,
    name: name
  };
});

console.log(userObjects);
