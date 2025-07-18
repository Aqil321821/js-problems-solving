//Organize Students by Grade Level
const students = [
  { name: "Ali", grade: "10th" },
  { name: "Sana", grade: "9th" },
  { name: "Ahmed", grade: "10th" },
  { name: "Zara", grade: "9th" },
  { name: "Usman", grade: "8th" }
];

const organized = {};

students.forEach(student => {
  const grade = student.grade;

  if (organized[grade]) {
    organized[grade].push(student.name);
  } else {
    organized[grade] = [student.name];
  }
});

console.log(organized);
