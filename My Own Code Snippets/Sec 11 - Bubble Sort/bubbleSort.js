//START: Finalized code I'd copy pasted into my notes
// -Code itself
//   -
//   1. Correct Code
  //Adding the optimization to stop looping if it was already sorted - MY VERSION
  function bubbleSort (arr){
    // let isSorted = false;
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--){
      //how do you always start from 0 -> have another loop that starts from 0
      //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
      for (let j = 0; j <= i - 1; j++){
        // if (isSorted) {return arr;}
        console.log(arr[j], arr);
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        } else {
          count++;
        }

      }
      if (count === i){return arr;}
    }
    return arr;
  }

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    //how do you always start from 0 -> have another loop that starts from 0
    //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([60, 120, 10, 500, 3]) -
  2. Code that was correct except swap
function didn’ t change actual array values

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      swap(arr[j], arr[j + 1]);
    }
  }
  return arr;
}

function swap(val1, val2) {
  if (val1 > val2) {
    let temp = val1;
    val1 = val2;
    val2 = temp;
  }
}

bubbleSort([3,10,60,120,500]);
bubbleSort([8,1,2,3,4,5,6,7])
//END




function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    //how do you always start from 0 -> have another loop that starts from 0
    //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
    for (let j = 0; j <= i - 1; j++) {
      // if (isSorted) {return arr;}
      console.log(arr[j], arr);
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}
bubbleSort([3, 10, 60, 120, 500]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])


//Adding the optimiztion to stop looping if it was already sorted
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    //how do you always start from 0 -> have another loop that starts from 0
    //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
    for (let j = 0; j <= i - 1; j++) {
      // if (isSorted) {return arr;}
      console.log(arr[j], arr);
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}


//
//
//
//
//
//
//
// //Adding the optimiztion to stop looping if it was already sorted
// function bubbleSort(arr) {
//   // let isSorted = false;
//   let count = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     //how do you always start from 0 -> have another loop that starts from 0
//     //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
//     for (let j = 0; j <= i - 1; j++) {
//       // if (isSorted) {return arr;}
//       console.log(arr[j], arr);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       } else {
//         count++;
//       }
//
//     }
//     if (count === i) {
//       return arr;
//     }
//   }
//   return arr;
// }
//
//
//
//
//
//
//
//
//
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     //how do you always start from 0 -> have another loop that starts from 0
//     //how do you loop to whatever you looped through before - 1 everytime -> make outer loop decrement and inner loop go till outer loop every time
//     for (let j = 0; j <= i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
//
// bubbleSort([60, 120, 10, 500, 3])
//
// //Problem w/below -> does everything I want it to but swap function doesn't actually change the values in the array. When the arguments in the swap function get evalaluated they're just #s not seen as the #s in the array
// // function bubbleSort (arr){
// //   for (let i = arr.length - 1; i >= 0; i--){
// //     for (let j = 0; j <= i - 1; j++){
// //       swap(arr[j], arr[j+1]);
// //     }
// //   }
// //   return arr;
// // }
// //
// // function swap(val1, val2){
// //   if (val1 > val2){
// //     let temp = val1;
// //     val1 = val2;
// //     val2 = temp;
// //   }
// // }
// //
// // bubbleSort([60,29,10,3,5])
//
//
// // bubbleSort([60,29,10,3,5]) [3,5,10,29,60]
// //loop length of array times. then length - 1 then length - 2....
// //each time gi through uncemented poart of array and swap from start
