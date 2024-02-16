const uncompress = (s) => {
  let str = ''
  let pointer1 = 0
  let pointer2 = 0
  
  while(pointer1 < s.length) {
    if(!isNaN(s[pointer1])) {
      pointer1++;
    }
    else {
      const qty = Number(s.slice(pointer2, pointer1));
      str += s[pointer1].repeat(qty)
      pointer1++;
      pointer2 = pointer1;
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