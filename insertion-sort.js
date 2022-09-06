// const numbers = [99, 44, 6, 2, 0];
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // let temp = null;
    if (array[i - 1] > array[i])
      for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
        //   if (!temp && array[i] < array[j]) {
        //     temp = array[j];
        //     array[j] = array[i];
        //   }
        //   if (temp) {
        //     let temp2 = temp;
        //     temp = array[j + 1];
        //     array[j + 1] = temp2;
        //   }
      }
  }
}

insertionSort(numbers);
console.log(numbers);
