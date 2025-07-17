// Convert a kebab-case string to camelCase
function kebabToCamel(str) {
  const words = str.split('-');
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return result;
}

kebabToCamel('my-name-is-aaQil'); // "myNameIsAaqil"
