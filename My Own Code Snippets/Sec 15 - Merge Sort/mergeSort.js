//START: FINZALIZED COPY PASTED TO NOTES
// 1st attempt: most simple / bare bones

function mergeSort(arr){
  if (arr.length <= 1){//it is sorted by default
    return arr;
  }
  return mergeTwoSortedArrays(mergeSort(firsthalfofarray), mergeSort(secondhalfofarray))
}

// **2nd attempt: replacing the pseudocode in the 1st attempt
function mergeSort(arr){
  if (arr.length <= 1){//it is sorted by default
    return arr;
  }
//   console.log(arr);
    return mergeTwoSortedArrays(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}
// mergeSort([2,1,9,76,4]);
mergeSort([60, 120, 10, 500, 3]);
//END



//START: chrome snippet implementation
function mergeSort(arr){
  if (arr.length <= 1){//it is sorted by default
    return arr;
  }
//   console.log(arr);
    return mergeTwoSortedArrays(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}


function mergeTwoSortedArrays(arr1, arr2){
  let results = [];

  let something = 0;
  let somethingelse = 0;

  while (something < arr1.length &&  somethingelse < arr2.length){//you want to look at all the elements so you should loop all the elements amount of times
    if (arr1[something] < arr2[somethingelse]){
      results.push(arr1[something]);
      something++; //look at next element in arr1
    } else {
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
  }
  if (something >= arr1.length){ //you've gone through all the things in arr1
    while (somethingelse < arr2.length){//there's something left in arr2 to look at
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
  }else {//you've gone through all the things in arr2
    while (something < arr1.length){
      results.push(arr1[something]);
      something++;
    }
  }
  return results;
}


// mergeSort([2,1,9,76,4]);
mergeSort([60, 120, 10, 500, 3]);

//END



function mergeSort(arr){
  if (arr.length <= 1){//it is sorted by default
    return arr;
  }
  return mergeTwoSortedArrays(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2)+1)));
}

// return mergeTwoSortedArrays(mergeSort(arr.slice(0,Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2)+1)));
// return mergeTwoSortedArrays(mergeSort(arr.slice(0)), mergeSort(arr.slice(1)));
