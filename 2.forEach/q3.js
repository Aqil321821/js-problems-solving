//Q: Create a List of User Emails from User Objects
const users = [
  { name: "Ali", email: "ali@example.com" },
  { name: "Zara", email: "zara@example.com" },
  { name: "Ahmed", email: "ahmed@example.com" }
];

const emails = [];

users.forEach(user => {
  emails.push(user.email);
});

console.log(emails);
