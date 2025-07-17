// Convert a camelCase string to snake_case.

function camelToSnake(str) {
  let result = '';

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += '_' + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

camelToSnake('myVariableName'); // "my_variable_name"
