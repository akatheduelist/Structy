
def pair_sum(numbers, target_sum):
  '''
  --Can we do better than a nested loop?--
  I think this can very obviously be solved with nested looping but can we do better?
  We can use a hash map to store each number element and it's corresponding index into
  a Hash Map, because we know that the lookup time will be much more effecient over
  nested looping. We iterate over each number in the array, if the number is not a key
  in the hash map we add it with its corresponding index value. Since we know that the
  the problem is going to be the sum of two numbers we can check the difference of the 
  current number to each key in the hash map, improving the lookup time. If we find the
  corresponding difference we can return the values of the two indecies from the dictionary.
  '''
  store = {}
  
  for index, num in enumerate(numbers):
    target_num = target_sum - num
​
    if target_num in store:
      print(index, store[target_num])
      return (index, store[target_num])
    
    store[num] = index
    
pair_sum([3, 2, 5, 4, 1], 8) # -> (0, 2)
pair_sum([4, 7, 9, 2, 5, 1], 5) # -> (0, 5)
pair_sum([4, 7, 9, 2, 5, 1], 3) # -> (3, 5)
pair_sum([1, 6, 7, 2], 13) # -> (1, 2)
pair_sum([9, 9], 18) # -> (0, 1)
pair_sum([6, 4, 2, 8 ], 12) # -> (1, 3)
​