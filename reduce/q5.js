// Calculate the Average of an Array using .reduce()
const marks = [80, 70, 90, 100, 60];

const average = marks.reduce((sum, curr, index, arr) => {
  sum += curr;
  if (index === arr.length - 1) {
    return sum / arr.length;
  }
  return sum;
});

console.log(average);
