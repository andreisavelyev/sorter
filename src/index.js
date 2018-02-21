class Sorter {
  constructor() {
    this.arr = [];
    this.temp=[];
    this.compareFunction = function(a,b){
      return a-b;
    }
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
      return this.arr[index];// your implementation
  }

  get length() {
      return this.arr.length;// your implementation
  }

  toArray() {
    return this.arr;// your implementation
  }

  sort(indices) {

    for(var i = 0; i < indices.length; i++){
      this.temp[i] = this.arr[indices[i]];
    };

    this.temp.sort(this.compareFunction);

    indices=indices.sort(function(a, b){
      return a-b;
    });

    for (var j = 0; j<indices.length; j++){
      this.arr[indices[j]]=this.temp[j];
    };
    // your implementation
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
    // your implementation
  }
}

module.exports = Sorter;
