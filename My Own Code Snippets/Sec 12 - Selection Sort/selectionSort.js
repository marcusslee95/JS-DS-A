//START: finalized version I'd copy pasted to notes
function selectionSort(arr) {
  //1. want to loop such that I see the first n terms then the next n - 1 terms excluding the beginning etc.
  // Know it's not one pass aka. it's not just one loop that you need
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    //how to go through n then n - 1 excluding first element etc.
    for (let j = i + 1; j < arr.length; j++) {
      //go down the loop and if current element is less than minimum than set minimum to current value s.t. by end of loop you'll have the minimum value
      if (arr[j] < arr[min]){ min = j;}

      //IGNORE: Problem here was I was just immediately swapping values instead of going through the whole loop first to decide what's the min.
      // if (arr[j] < arr[min]) {
      //   let temp = arr[min];
      //   arr[min] = arr[j];
      //   arr[j] = temp;
      //   min = j;
      // }

    }

    //have the min val
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
// 
// W/check for if min was same as first index you looked at:
function selectionSort(arr) {
  //1. want to loop such that I see the first n terms then the next n - 1 terms excluding the beginning etc.
  // Know it's not one pass aka. it's not just one loop that you need
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    //how to go through n then n - 1 excluding first element etc.
    for (let j = i + 1; j < arr.length; j++) {
      //go down the loop and if current element is less than minimum than set minimum to current value s.t. by end of loop you'll have the minimum value
      if (arr[j] < arr[min]){ min = j;}
    }
    //have the min val
    if (i !== min){
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }

  }
  return arr;
}
//END


function selectionSort(arr) {
  //1. want to loop such that I see the first n terms then the next n - 1 terms excluding the beginning etc.
  // Know it's not one pass aka. it's not just one loop that you need
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    //how to go through n then n - 1 excluding first element etc.
    for (let j = i + 1; j < arr.length; j++) {
      //go down the loop and if current element is less than minimum than set minimum to current value s.t. by end of loop you'll have the minimum value
      if (arr[j] < arr[min]){ min = j;}
      //Problem here was I was just immediately swapping values instead of going through the whole loop first to decide what's the min.
      // if (arr[j] < arr[min]) {
      //   let temp = arr[min];
      //   arr[min] = arr[j];
      //   arr[j] = temp;
      //   min = j;
      // }

    }
    //have the min val
    if (i !== min){
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }

  }
  return arr;
}

//Implementation I had as chrome snippet
function selectionSort(arr) {
  //1. want to loop such that I see the first n terms then the next n - 1 terms excluding the beginning etc.
  // Know it's not one pass aka. it's not just one loop that you need
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    //how to go through n then n - 1 excluding first element etc.
    for (let j = i + 1; j < arr.length; j++) {
      //go down the loop and if current element is less than minimum than set minimum to current value s.t. by end of loop you'll have the minimum value
      if (arr[j] < arr[min]){ min = j;}
      //Problem here was I was just immediately swapping values instead of going through the whole loop first to decide what's the min.
      // if (arr[j] < arr[min]) {
      //   let temp = arr[min];
      //   arr[min] = arr[j];
      //   arr[j] = temp;
      //   min = j;
      // }

    }
    //have the min val
    if (i !== min){
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }

  }
  return arr;
}

selectionSort([60, 120, 10, 500, 3]);

//
// function selectionSort(arr) {
//   //1. want to loop such that I see the first n terms then the next n - 1 terms excluding the beginning etc.
//   // Know it's not one pass aka. it's not just one loop that you need
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     //how to go through n then n - 1 excluding first element etc.
//     for (let j = i; j < arr.length; j++) {
//       //go down the loop and if current element is less than minimum than set minimum to current value s.t. by end of loop you'll have the minimum value
//
//       //Problem here was I was just immediately swapping values instead of going through the whole loop first to decide what's the min.
//       if (arr[j] < arr[min]) {
//         let temp = arr[min];
//         arr[min] = arr[j];
//         arr[j] = temp;
//         min = j;
//       }
//     }
//   }
//   return arr;
// }
//
// selectionSort([60, 120, 10, 500, 3]);
//
//
