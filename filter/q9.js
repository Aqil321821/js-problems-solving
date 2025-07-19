// Filter users who have at least one task that is "completed" and marked as "high priority"
const users = [
  {
    name: 'Ali',
    tasks: [
      { title: 'Task 1', status: 'completed', priority: 'low' },
      { title: 'Task 2', status: 'pending', priority: 'high' },
    ],
  },
  {
    name: 'Zara',
    tasks: [
      { title: 'Task 1', status: 'completed', priority: 'high' },
      { title: 'Task 2', status: 'pending', priority: 'low' },
    ],
  },
  {
    name: 'Hassan',
    tasks: [{ title: 'Task 1', status: 'completed', priority: 'high' }],
  },
  {
    name: 'Sara',
    tasks: [{ title: 'Task 1', status: 'completed', priority: 'low' }],
  },
];

const filteredUsers = users.filter((user) =>
  user.tasks.some((task) => task.status === 'completed' && task.priority === 'high')
);

console.log(filteredUsers);
