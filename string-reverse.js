//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) reversed += str[i];
  return reversed;
}
function reverseStringRecursive(str) {
  if (str.length <= 1) return str;
  return (
    str[str.length - 1] +
    reverseStringRecursive(str.substring(0, str.length - 1))
  );
}

console.log(reverseStringIterative("yoyo mastery"));
console.log(reverseStringRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'
