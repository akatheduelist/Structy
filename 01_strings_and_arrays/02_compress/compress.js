const compress = (s) => {
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
        
    return str;
  };