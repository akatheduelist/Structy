
const anagrams = (s1, s2) => {
  /*
  --Compare Sorted Arrays--
  Instead of putting letters from the string into a hash map and iterating over
  those to compare, I am going to cast both strings into an array of chars. First,
  if two strings are not the same length, they are not anagrams, we can reaturn False
  early. Since we do not care about order of chars we can take the two char arrays and
  run sort on them to sort them into any order as long as they are the same. We then 
  "join" our two sorted arrays back into strings and ff they are the same then they are 
  anagrams and we get true, else we get false.
  */
  
  if (s1.length != s2.length) return false;
  
  console.log(s1.split("").sort().join("") === s2.split("").sort().join(""))
  return s1.split("").sort().join("") === s2.split("").sort().join("")
};
​
anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false
​
module.exports = {
  anagrams,