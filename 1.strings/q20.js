// Extract domain name from email address
function extractDomain(email) {
  return email.split('@')[1];
}
extractDomain('john.doe@gmail.com'); // "gmail.com"
