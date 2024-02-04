/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   //    const len = str.length
  //    str = str.toLowerCase()
  //    str = str.replace(/[^a-z0-9]/g, '');
     

  //    for(let i=0; i<len/2; i++){
  //     if(str[i] !== str[len - i -1]){
  //       return false;
  //     }
  //    }
  // return true;

  testString = testString.toLowerCase();
  indexes = testString.length - 1;
  let testString1 = "";
  let testString2 = "";
  for (let i = indexes; i >= 0 ; i--) {
    if (testString[indexes - i].match(/[a-z]/i)) {
      testString1 = testString1 + testString[indexes - i];
    }
    if (testString[i].match(/[a-z]/i)) {
      testString2 = testString2 + testString[i];
    }
  }
  if (testString1 == testString2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
