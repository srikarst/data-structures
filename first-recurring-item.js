const getFirstRecurringItem = (arr) => {
  const itemsSet = new Set();
  for (let i of arr) {
    if (!itemsSet.has(i)) itemsSet.add(i);
    else return i;
  }
};

const getFirstRecurringItemIteratively = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
};

const testData = [2, 5, 5, 2, 6, 7, 9];
console.log(getFirstRecurringItem(testData));
console.log(getFirstRecurringItemIteratively(testData));
