function naiveStringSearch (longStr, shortStr){
  let count = 0;
  for (let i = 0; i < longStr.length; i++){
    //check if next consecutive letters match the short string
    for (let j = 0; j < shortStr.length; j++){
      if (longStr[i+j] !== shortStr[j]){
        break;
      }
      if (j === shortStr.length - 1){
          count++;

      }
    }

  }
  return count;
}

naiveStringSearch("babybaby", "baby");
naiveStringSearch("simon sicko is a slacious sicko", "si");
