//  Filter users based on city and age (nested objects)
const users = [
  { name: 'Ali', age: 30, address: { city: 'Karachi', country: 'Pakistan' } },
  { name: 'Zara', age: 22, address: { city: 'Lahore', country: 'Pakistan' } },
  { name: 'Hassan', age: 28, address: { city: 'Karachi', country: 'Pakistan' } },
  { name: 'Maha', age: 20, address: { city: 'Islamabad', country: 'Pakistan' } },
];

const filteredUsers = users.filter(function (user) {
  return user.age > 25 && user.address.city === 'Karachi';
});

console.log(filteredUsers);
