const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const left = array.splice(0, array.length / 2);
  return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
  let i = 0,
    j = 0;
  const result = [];
  while (i < left.length || j < right.length) {
    if (left[i] > right[j] || i == left.length) {
      result.push(right[j]);
      j++;
    } else {
      result.push(left[i]);
      i++;
    }
  }
  return result;
}
const answer = mergeSort(numbers);
console.log(answer);
