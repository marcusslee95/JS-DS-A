class HashTable{
  constructor(size = 53){
    this.keyMap = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % this.keyMap.length;
    }
    return total;
  }
  //methods I implemented
  set(k, v){
    //hash key to find right position
    let correctIndex = this.hash(k);

    //if - else for if there's something already there or not
    if (this.keyMap[correctIndex] === null){
      this.keyMap[correctIndex] = [];
      this.keyMap[correctIndex].push([key, value]);
    } else {
      this.keyMap[correctIndex].push([key, value]);
    }
    return correctIndex;
  }
  get(k){
    //hash key to find right position
    let correctIndex = this.hash(k);

    if (this.keyMap[correctIndex] !== null){
      //find k-v pair with matching key
      for (let kvPair of this.keyMap[correctIndex]){
        if (kvPair[0] === k){
          return kvPair[1]; //aka. just the value
        }
      }
    }
    return undefined; //if computer comes to this line means that never matched.
  }
  keys(){
    let arrOfKeys = [];
    // go through the hash table and at each index go through the array in that index
    for (let nestedArray of this.keyMap){
      for (let kvPair of nestedArray){
        if (!arrOfKeys.includes(kvPair[0])){
          arrOfKeys.push(kvPair[0]);
        }
      }
    }
    return arrOfKeys;
  }
  values(){
    let arrOfVals = [];
    // go through the hash table and at each index go through the array in that index
    for (let nestedArray of this.keyMap){
      for (let kvPair of nestedArray){
        //check for if value is a duplicate in which case we don't want to include it. Not sure why but that's the standard practice
        if (!arrOfVals.includes(kvPair[1])){
          arrOfVals.push(kvPair[1]);
        }
      }
    }
    return arrOfVals;
  }
}

let ht = new HashTable(10);
ht.set("dogs", "are loud");
ht.set("cats", "are silent");
