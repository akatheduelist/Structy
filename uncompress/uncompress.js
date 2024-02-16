
const uncompress = (s) => {
  /*
  --Two Pointer Strategy--
  Init two pointers to index 0
  Increment over each char until a non int is found. This is needed becuase the 
  "number" of repeats for a compressed string may be multiple digits. It could be 
  7f or it could be 7000f, so we increment the first pointer until we find the "f".
  Once an string is found you slice the entire number section of the input and 
  cast it to an int 7 or 7000. Then we repeat the string char that many times,
  increment the "i" pointer to the next number and bring the "j" pointer up
  to meet the i pointer to i the loop again.
  */
  let str = ''
  let j = 0
  let i = 0
  
  while(j < s.length) {
    if(!isNaN(s[j])) {
      j++;
    }
    else {
      const qty = Number(s.slice(i, j));
      str += s[j].repeat(qty)
      j++;
      i = j;
    } 
  }
  
  console.log(str)
  return str  
};
​
uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
​
module.exports = {
  uncompress,
};
​