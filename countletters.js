function countLetters (stringToCount) {
  // set empty object to return
  var countedLetters = {};
  //split string into array of words and joined it back together
  stringToCount = stringToCount.split(" ").join("");
  // created var char to go through all the characters of the string)
  for (var char of stringToCount) {
    // if character isn't in the object it will be assigned to 1
    if (countedLetters[char] === undefined) {
      countedLetters[char] = 1;
    } else {
      // if value is not undefined, we increase the value by 1
      countedLetters[char] += 1;
    }
  }
  return countedLetters;
}



console.log(countLetters("lighthouse in the house"));