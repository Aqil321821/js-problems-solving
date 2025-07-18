// Q:Mark All Tasks as Done Where Status Is “pending”
const tasks = [
  { title: "Clean room", status: "pending" },
  { title: "Do homework", status: "done" },
  { title: "Buy groceries", status: "pending" },
  { title: "Pay bills", status: "done" }
];

tasks.forEach(task => {
  if (task.status === "pending") {
    task.status = "done";
  }
});

console.log(tasks);
