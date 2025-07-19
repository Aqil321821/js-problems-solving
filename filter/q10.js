// Return names of users who have more than 1 "completed" task

const users = [
  {
    name: 'Ali',
    tasks: [
      { title: 'Task 1', status: 'completed' },
      { title: 'Task 2', status: 'pending' },
      { title: 'Task 3', status: 'completed' },
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
    tasks: [
      { title: 'Task 1', status: 'completed' },
      { title: 'Task 2', status: 'completed' },
      { title: 'Task 3', status: 'completed' },
    ],
  },
  {
    name: 'Sara',
    tasks: [{ title: 'Task 1', status: 'completed' }],
  },
];
const userNames = users
  .filter((user) => {
    const completedTasks = user.tasks.filter((task) => task.status === 'completed');
    return completedTasks.length >= 2;
  })
  .map((user) => user.name);

console.log(userNames);
