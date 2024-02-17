
const pairSum = (numbers, targetSum) => {
  /*
  --Can we do better than a nested loop?--
  I think this can very obviously be solved with nested looping but can we do better?
  We can use a hash map to store each number element and it's corresponding index into
  a Hash Map, because we know that the lookup time will be much more effecient over
  nested looping. We iterate over each number in the array, if the number is not a key
  in the hash map we add it with its corresponding index value. Since we know that the
  the problem is going to be the sum of two numbers we can check the difference of the 
  current number to each key in the hash map, improving the lookup time. If we find the
  corresponding difference we can return the values of the two indecies from the object.
  */
  const store = {}
​
  for(let i = 0; i < numbers.length; i++) {
    const targetNum = targetSum - numbers[i]
​
      if(targetNum in store) {
        console.log([i, store[targetNum]])  
        return([i, store[targetNum]])
      } else {
          store[numbers[i]] = i
      }
  }
};
​
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
​
module.exports = {