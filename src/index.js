class Sorter {
  constructor() {
    this.arr = [];
    this.temp = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    const length = indices.length;

    for (let i = 0; i < length; i++) {
      this.temp[i] = this.arr[indices[i]];
    }

    this.temp.sort(this.compareFunction);

    indices = indices.sort(this.comapreFunction);

    for (let i = 0; i < length; i++) {
      this.arr[indices[i]] = this.temp[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
