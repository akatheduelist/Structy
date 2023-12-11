const fib = (n, memo={}) => {
  if(n === 0) return 0;
  if(n === 1) return 1;
  
  if(n in memo){
    return memo[n]
  }
  
  memo[n] = fib(n-2, memo) + fib(n-1, memo)
  return memo[n]
};

module.exports = {
  fib,
};

module.exports = {
  fib,
};

// console.log(fib(0)); // -> 0
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(3)); // -> 2
// console.log(fib(4)); // -> 3
// console.log(fib(5)); // -> 5
// console.log(fib(35)); // -> 9227465
console.log(fib(46)); // -> 1836311903