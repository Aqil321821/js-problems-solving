//Find users who have at least one pending AND one completed task
const users = [
  {
    name: 'Ali',
    tasks: [
      { title: 'Task 1', status: 'completed' },
      { title: 'Task 2', status: 'pending' },
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
    ],
  },
  {
    name: 'Sara',
    tasks: [
      { title: 'Task 1', status: 'pending' },
      { title: 'Task 2', status: 'completed' },
    ],
  },
];

const mixedStatusUsers = users
  .filter((user) => {
    const hasPending = user.tasks.some((task) => task.status === 'pending');
    const hasCompleted = user.tasks.some((task) => task.status === 'completed');
    return hasPending && hasCompleted;
  })
  .map((user) => user.name);

console.log(mixedStatusUsers);
// ["Ali", "Sara"]
