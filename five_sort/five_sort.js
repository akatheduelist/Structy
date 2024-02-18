
const fiveSort = (nums) => {
  /*
  --Two Pointer Sort--
  We just want the 5's to bubble up to the top of the array, so we implement two pointers.
  One at the beginning of the array and another at the end of the array. If the end pointer
  is a 5 we decrement until we find a non five. The first pointer moves forward and if it
  finds a five it swaps the two elements in place and decreases both couters.
  */
  let start = 0
  let end = nums.length - 1
​
  while(start < end) {
    if(nums[end] === 5) {
      end--
    } else if(nums[start] !== 5) {
      start++
    } else {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
  
  console.log(nums)
  return nums
};
​
fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5] 
fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5] 
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
​
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
​
module.exports = {
  fiveSort,
};
​