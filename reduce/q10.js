//  Group elements by first letter using reduce()
/*
const names = ['Ali', 'Ahsan', 'Bilal', 'Babar', 'Adeel', 'Zara'];


{
  A: ['Ali', 'Ahsan', 'Adeel'],
  B: ['Bilal', 'Babar'],
  Z: ['Zara']
}


*/
const names = ['Ali', 'Ahsan', 'Bilal', 'Babar', 'Adeel', 'Zara'];

const grouped = names.reduce((acc, curr) => {
  const firstLetter = curr[0].toUpperCase();

  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }

  acc[firstLetter].push(curr);
  return acc;
}, {});

console.log(grouped);
