// Check if two strings are anagrams.
function areAnagrams(str1, str2) {
  const a = str1.toLowerCase().split('').sort().join('');
  const b = str2.toLowerCase().split('').sort().join('');
  return a === b;
}

areAnagrams('Listen', 'Silent');
areAnagrams('Hello', 'World');
