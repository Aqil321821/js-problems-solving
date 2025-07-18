//  Nested Map — Extract Scores from Multiple Exams
/*
const students = [
  {
    name: "Ali",
    exams: [
      { subject: "Math", score: 85 },
      { subject: "Physics", score: 78 }
    ]
  },
  {
    name: "Zara",
    exams: [
      { subject: "Math", score: 92 },
      { subject: "Physics", score: 88 }
    ]
  }
];
to:
[
  { name: "Ali", scores: [85, 78] },
  { name: "Zara", scores: [92, 88] }
]


*/

const students = [
  {
    name: 'Ali',
    exams: [
      { subject: 'Math', score: 85 },
      { subject: 'Physics', score: 78 },
    ],
  },
  {
    name: 'Zara',
    exams: [
      { subject: 'Math', score: 92 },
      { subject: 'Physics', score: 88 },
    ],
  },
];

const result = students.map((student) => {
  return {
    name: student.name,
    scores: student.exams.map((exam) => exam.score),
  };
});

console.log(result);
