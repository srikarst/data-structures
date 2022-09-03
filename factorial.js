// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  const answer = number === 1 ? 1 : number * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  let answer = number,
    curr = number;
  while (curr > 1) {
    answer = answer * --curr;
  }
  return answer;
}
console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(2));
console.log(findFactorialRecursive(3));
console.log(findFactorialRecursive(4));
console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(6));

console.log(findFactorialIterative(1));
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(3));
console.log(findFactorialIterative(4));
console.log(findFactorialIterative(5));
console.log(findFactorialIterative(6));
