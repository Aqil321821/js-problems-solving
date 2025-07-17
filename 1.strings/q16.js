//Count the number of words in a sentence
function countWords(sentence) {
  return sentence.trim().split(' ').filter(Boolean).length;
}

countWords('   Hello world   '); // 2
countWords('This is  a    sentence'); // 4
