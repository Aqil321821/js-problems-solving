// Extract All Course Names from Students
/*
const students = [
  { name: "Ali", courses: ["Math", "Physics"] },
  { name: "Zara", courses: ["English", "Biology"] },
  { name: "Hassan", courses: ["Chemistry", "Math"] }
];
To:

[
  "Ali is enrolled in Math, Physics",
  "Zara is enrolled in English, Biology",
  "Hassan is enrolled in Chemistry, Math"
]

*/
const students = [
  { name: 'Ali', courses: ['Math', 'Physics'] },
  { name: 'Zara', courses: ['English', 'Biology'] },
  { name: 'Hassan', courses: ['Chemistry', 'Math'] },
];

const summaries = students.map((student) => {
  return `${student.name} is enrolled in ${student.courses.join(', ')}`;
});

console.log(summaries);
