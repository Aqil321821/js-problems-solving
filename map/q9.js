//  Convert User Status Codes to Labels
/*
const users = [
  { name: 'Ali', status: 'A' },
  { name: 'Zara', status: 'P' },
  { name: 'Ahmed', status: 'B' },
  { name: 'Sara', status: 'A' }
];
to:
[
  { name: 'Ali', statusLabel: 'Active' },
  { name: 'Zara', statusLabel: 'Pending' },
  { name: 'Ahmed', statusLabel: 'Blocked' },
  { name: 'Sara', statusLabel: 'Active' }
]


*/
const users = [
  { name: 'Ali', status: 'A' },
  { name: 'Zara', status: 'P' },
  { name: 'Ahmed', status: 'B' },
  { name: 'Sara', status: 'A' },
];

const statusMap = {
  A: 'Active',
  P: 'Pending',
  B: 'Blocked',
};

const updatedUsers = users.map((user) => {
  return {
    name: user.name,
    statusLabel: statusMap[user.status] || 'Unknown',
  };
});

console.log(updatedUsers);
