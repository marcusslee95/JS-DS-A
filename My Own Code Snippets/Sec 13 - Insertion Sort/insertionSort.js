//START: finalized copy pasted to the notes version
function insertionSort(arr) {
  //main thing: grow the sorted part of your array by adding element next to sorted part in it's proper place
  //1. you know you have to loop through array in order to at least look at every element so just add a for loop
  for (let i = 0; i < arr.length; i++){
    //**2. if you set i to be the next to the sorted part value then you can use j to represent the sorted part via....
    let valNextToSortedPart = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > valNextToSortedPart; j--){
      //3. j >= 0 -> cuz in worst case you'd have to compare next value to the start of the sorted part aka. index 0
      //**4. if sorted part value is > then next to sorted part then want to move it up (this way you're making space for when you want to place next to sorted part)
        arr[j+1] = arr[j];
    }
    //5. by now we're at the correct spot for val next to sorted part to go into.
    arr[j+1] = valNextToSortedPart; //6. it's j+1 instead of j since we looped once more.
    //
  }
  return arr;
}
insertionSort([2,1,9,76,4])
insertionSort([60, 120, 10, 500, 3])
//End


function insertionSort(arr) {
  //main thing: grow the sorted part of your array by adding element next to sorted part in it's proper place
  //you know you have to loop through array in order to at least look at every element so just add a for loop
  for (let i = 0; i < arr.length; i++){
    //if you set i to be the next to the sorted part value then you can use j to represent the sorted part via....
    let valNextToSortedPart = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > valNextToSortedPart; j--){
      //j >= 0 -> cuz in worst case you'd have to compare next value to the start of the sorted part aka. index 0
      //if sorted part value is > then next to sorted part then want to move it up (this way you're making space for when you want to place next to sorted part)
        arr[j+1] = arr[j];
    }
    //by now we're at the correct spot for val next to sorted part to go into.
    arr[j+1] = valNextToSortedPart; //it's j+1 instead of j since we looped once more.
    //
  }
  return arr;
}

//my implementation in chrome snippets
function insertionSort(arr) {
  //main thing: grow the sorted part of your array by adding element next to sorted part in it's proper place
  //you know you have to loop through array in order to at least look at every element so just add a for loop
  for (let i = 0; i < arr.length; i++){
    //if you set i to be the next to the sorted part value then you can use j to represent the sorted part via....
    let valNextToSortedPart = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > valNextToSortedPart; j--){
      //j >= 0 -> cuz in worst case you'd have to compare next value to the start of the sorted part aka. index 0
      //if sorted part value is > then next to sorted part then want to move it up (this way you're making space for when you want to place next to sorted part)
        arr[j+1] = arr[j];
    }
    //by now we're at the correct spot for val next to sorted part to go into.
    arr[j+1] = valNextToSortedPart; //it's j+1 instead of j since we looped once more.
    //
  }
  return arr;
}

insertionSort([2,1,9,76,4])
insertionSort([60, 120, 10, 500, 3])
