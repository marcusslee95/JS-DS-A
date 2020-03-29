function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0 || arr.length === 1) {
      return arr.length;
  }
  let j = 1;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
      if (j === arr.length){
          return count;
      }
      if (arr[i] !== arr[j]){
          count++;

      }
      j++;
  }
}
