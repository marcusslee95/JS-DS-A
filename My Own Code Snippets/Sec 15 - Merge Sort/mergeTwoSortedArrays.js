//START: finalized copy pasted to notes
function mergeTwoSortedArrays(arr1, arr2){
  let results = [];

  let something = 0;
  let somethingelse = 0; 

  while (something + somethingelse <= arr1.length + arr2.length){//you want to look at all the elements so you should loop all the elements amount of times
    if (!arr1[something]){ //you've gone through all the things in arr1
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
    if (!arr2[somethingelse]){//you've gone through all the things in arr2
      results.push(arr1[something]);
      something++;
    }
    if (arr1[something] < arr2[somethingelse]){
      results.push(arr1[something]);
      something++; //look at next element in arr1
    } else {
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
  }




  return results;
}

// W/Proper Loop condition
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

mergeTwoSortedArrays([1,10,50], [2,14,99,100])
//END


//START: My Chrome Snippets implementation
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





mergeTwoSortedArrays([1,10,50], [2,14,99,100])

//END



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




function mergeTwoSortedArrays(arr1, arr2){
  let results = [];

  let something = 0;
  let somethingelse = 0;

  while (something + somethingelse <= arr1.length + arr2.length){//you want to look at all the elements so you should loop all the elements amount of times
    if (!arr1[something]){ //you've gone through all the things in arr1
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
    if (!arr2[somethingelse]){//you've gone through all the things in arr2
      results.push(arr1[something]);
      something++;
    }
    if (arr1[something] < arr2[somethingelse]){
      results.push(arr1[something]);
      something++; //look at next element in arr1
    } else {
      results.push(arr2[somethingelse]);
      somethingelse++; // look at next element in arr2
    }
  }




  return results;
}






mergeTwoSortedArrays([1,10,50], [2,14,99,100])
