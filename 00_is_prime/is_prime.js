const isPrime = (n) => {
    const end = Math.floor(Math.sqrt(n)) + 1
    
    if(n < 2) return false;
    
    for(let i = 2; i < end; i++) {
      if(n % i === 0) return false;
    }
    
    return true
  };
  
  module.exports = {
    isPrime,
  };