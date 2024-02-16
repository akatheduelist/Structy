const uncompress = (s) => {
  let str = ''
  let i = 0
  let j = 0
  
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
  
  return str  
};
​
module.exports = {
  uncompress,
};
​