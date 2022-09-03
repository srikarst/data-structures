// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  if (n <= 1) return n;
  let count = 2,
    curr = 1,
    prev = 0;
  while (count <= n) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
    count++;
  }
  return curr;
}
console.log(fibonacciIterative(2));

function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));
