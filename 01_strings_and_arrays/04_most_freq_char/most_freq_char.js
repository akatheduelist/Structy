const mostFrequentChar = (s) => {
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
    
    return highestChar
  };
  
  module.exports = {
    mostFrequentChar,
  };
  