const mostFrequentChar = (s) => {
  /*
  --Hash Map Counting--
  We iterate over each char of the string and add it as a key to to the 
  "count" obj with an initial value of 1. If a char is found that is already
  in count we increament the value. Then we walk through the string and check
  each char for its corresponding value, if its the highest we replace highestChar
  if its the same we skip it, because the prompt wants the first occurance of the char.
  */
  const count = {}
  let highestChar = ''
  let charCount = 0
  
  for(let char of s) {
    if(!(char in count)) {
      count[char] = 1
    } else {
      count[char] += 1
    }
  }
  
  for(let char in count) {
    if(count[char] > charCount) {
      charCount = count[char]
      highestChar = char
    }
  }
  
  console.log(highestChar)
  return highestChar
};
​
mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'
​
module.exports = {
  mostFrequentChar,
};