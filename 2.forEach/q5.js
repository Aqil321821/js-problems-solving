// Problem #5: Add a New Property to Each Object in an Array
const employees = [
  { name: "Ali", salary: 30000 },
  { name: "Zara", salary: 45000 },
  { name: "Ahmed", salary: 50000 }
];

employees.forEach(emp => {
  emp.tax = emp.salary * 0.1;
});

console.log(employees);
