function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let letterTracker = {};
  for (let char of str1) {
      if (letterTracker[char]) {
          letterTracker[char]++;
      } else {
          letterTracker[char] = 1;
      }
  }

  for (let char of str2) {
       if (letterTracker[char] > 0) {
           letterTracker[char]--;
       }
       if (letterTracker[char] < 0) {
           return false;
       }
  }

  for (let key in letterTracker) {
      if (letterTracker[key] < 0 || letterTracker[key] > 0) {
          return false;
      }
  }
  return true;
}
