// Filter users who have at least one "completed" task
const users = [
  {
    name: 'Ali',
    tasks: [
      { title: 'Task 1', status: 'pending' },
      { title: 'Task 2', status: 'completed' },
    ],
  },
  {
    name: 'Zara',
    tasks: [
      { title: 'Task 1', status: 'pending' },
      { title: 'Task 2', status: 'pending' },
    ],
  },
  {
    name: 'Hassan',
    tasks: [{ title: 'Task 1', status: 'completed' }],
  },
];

const filteredUsers = users.filter((user) => {
  return user.tasks.some((task) => task.status === 'completed');
});

console.log(filteredUsers);
