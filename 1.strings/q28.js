// Find how many times each word appears in a sentence.
function countWords(sentence) {
  const words = sentence.split(' ');
  const wordCount = {};

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

countWords('this is a test this is only a test');
// Output:
// { this: 2, is: 2, a: 2, test: 2, only: 1 }
