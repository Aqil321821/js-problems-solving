//Extract First Names from Full Names
/* const fullNames = ['Ali Khan', 'Ahmed Raza', 'Sara Iqbal'];
to 
['Ali', 'Ahmed', 'Sara']
*/

const fullNames = ['Ali Khan', 'Ahmed Raza', 'Sara Iqbal'];

const firstNames = fullNames.map((name) => name.split(' ')[0]);

console.log(firstNames);
