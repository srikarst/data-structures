const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    let smallest = j;
    for (let i = j + 1; i < array.length; i++)
      if (array[i] < array[smallest]) smallest = i;
    if (smallest != j) {
      let temp = array[smallest];
      array[smallest] = array[j];
      array[j] = temp;
    }
  }
}

selectionSort(numbers);
console.log(numbers);
