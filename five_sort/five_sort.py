
def five_sort(nums):
  '''
  --Two Pointer Sort--
  We just want the 5's to bubble up to the top of the array, so we implement two pointers.
  One at the beginning of the array and another at the end of the array. If the end pointer
  is a 5 we decrement until we find a non five. The first pointer moves forward and if it
  finds a five it swaps the two elements in place and decreases both couters.
  '''
  start = 0
  end = len(nums) - 1
​
  while start <= end:
    if nums[end] == 5:
      end -= 1
    elif nums[start] != 5:
      start += 1
    else:
      nums[start], nums[end] = nums[end], nums[start]
      end -= 1
      start += 1
  
  # print(nums)
  return nums
​
five_sort([12, 5, 1, 5, 12, 7])
# -> [12, 7, 1, 12, 5, 5]
five_sort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])
# -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
five_sort([5, 5, 5, 1, 1, 1, 4])
# -> [4, 1, 1, 1, 5, 5, 5] 
five_sort([5, 5, 6, 5, 5, 5, 5])
# -> [6, 5, 5, 5, 5, 5, 5]
five_sort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])
# -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
fours = [4] * 20000
fives = [5] * 20000
nums = fours + fives
five_sort(nums)
# twenty-thousand 4s followed by twenty-thousand 5s
# -> [4, 4, 4, 4, ..., 5, 5, 5, 5]