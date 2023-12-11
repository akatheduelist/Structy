const sumPossible = (amount, numbers, memo={}) => {
  if(amount in memo) return memo[amount];
  if(amount === 0) return true;
  if(amount < 0) return false;

  for(let number of numbers) {
    if(sumPossible(amount - number, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  
  memo[amount] = false;
  return false;
};

module.exports = {
  sumPossible,
};

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false
console.log(sumPossible(13, [6, 2, 1])); // -> true
console.log(sumPossible(103, [6, 20, 1])); // -> true
console.log(sumPossible(12, [])); // -> false
console.log(sumPossible(12, [12])); // -> true*
console.log(sumPossible(0, [])); // -> true*
console.log(sumPossible(271, [10, 8, 265, 24])); // -> false
console.log(sumPossible(2017, [4, 2, 10])); // -> false
console.log(sumPossible(13, [3, 5])); // -> true
