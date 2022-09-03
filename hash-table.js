class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address] || [[]];
    return (bucket.filter((e) => e[0] === key)[0] || [])[1];
  }

  keys() {
    const flatArray = [].concat(...this.data);
    const nonNullArray = flatArray.filter((e) => e);
    console.log(nonNullArray.map((e) => e[0]));
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
myHashTable.keys();
