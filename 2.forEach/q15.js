// Extract Unique Emails from Array
const emails = [
  "a@x.com",
  "b@x.com",
  "a@x.com",
  "c@x.com",
  "b@x.com",
  "d@x.com"
];

const uniqueEmails = [];

emails.forEach(email => {
  if (!uniqueEmails.includes(email)) {
    uniqueEmails.push(email);
  }
});

console.log(uniqueEmails);
