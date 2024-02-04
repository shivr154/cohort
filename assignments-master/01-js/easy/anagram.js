/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
// To rule out any issues because of casing, converting both of them in lower-case.
  // e.g. 'b' should be equal to 'B.
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Let's check if their length is equal, if NOT they will not be an Anagram.
  if (str1.length == str2.length) {
    // Length is equal.

    // Now, let's check if all the characters in str1 are present in str2;
    // That will obviously confirm if they are Anagram or not.
    for (let i = 0; i < str1.length; i++) {
      
      // Checking on str2 has this char: str1[i]
      if (str2.includes(str1[i])) {
        // Yes? Continue to check the next char;
        continue;
      } else {
        // No? Obviosuly they are NOT an Anagram.
        return false;
      }
    }
    // Complete 'for' loop has run, that means all the chars in str1 & str2 match;
    // Hence, they are an Anagram.
    return true;

  } else {
    // Length is NOT equal.
    return false;
  }

}

module.exports = isAnagram;
