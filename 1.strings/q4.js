//Count the number of vowels in a string
let str = "Aaqil Rao is coding JS";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("Vowel count:", count);
