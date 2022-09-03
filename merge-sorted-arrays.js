function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const result = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] > arr2[j] || i == arr1.length) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
}

const arr1 = [],
  arr2 = [0, 3, 4, 31];
const result = mergeSortedArrays(arr1, arr2);
console.log(result);
