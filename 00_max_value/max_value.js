const maxValue = (nums) => {
    let max = Number.NEGATIVE_INFINITY
    
    for (const num of nums) {
      if(num > max) max = num
    }
   
    return max
  };
  
  module.exports = {
    maxValue,
  };
  