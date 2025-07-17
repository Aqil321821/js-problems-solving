//check a specif word in a string
let sentence = 'My name is Aaqil and I love coding';
let wordToCheck = 'love';

// let result = sentence.includes(wordToCheck);
// console.log(result);

let result = sentence.match(/love/);
console.log(result);
