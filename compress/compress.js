const compress = (s) => {
  /*
  
  */
  let str = '';
  let i = 0;
  let j = 0;
  
  while(j < s.length) {
    if(s[j] === s[i]) {
      j++;
    }
    if(s[j] != s[i] || j == s.length){
      let num = j - i
      if(num == 1) {
        str += s[i];
        i = j;
      } else {
        str += num.toString() + s[i];
        i = j; 
      }
    }
  }
  
  console.log(str)
  return str;
};
​
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
​
module.exports = {
  compress,
};
​