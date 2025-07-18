// 🟡 Problem #7: Calculate Total Income of Employees with Salary Above 40,000
const employees = [
  { name: "Ali", salary: 30000 },
  { name: "Zara", salary: 55000 },
  { name: "Ahmed", salary: 42000 },
  { name: "Sana", salary: 38000 },
  { name: "Usman", salary: 60000 }
];

let highIncomeTotal = 0;

employees.forEach(emp => {
  if (emp.salary > 40000) {
    highIncomeTotal += emp.salary;
  }
});

console.log("Total Income > 40k:", highIncomeTotal);
