//Count How Many Times the Letter 'a' Appears in an Array of Words
const words = ["apple", "banana", "mango", "avocado"];
let aCount = 0;

words.forEach((word) => {
  for (let char of word) {
    if (char === 'a') {
      aCount++;
    }
  }
});

console.log("Total 'a' letters:", aCount);
