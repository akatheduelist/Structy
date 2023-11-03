def pair_sum(numbers, target_sum):
  store = {}
  
  for index, num in enumerate(numbers):
    target_num = target_sum - num

    if target_num in store:
      return (index, store[target_num])
    
    store[num] = index
    # print(num, index)
    # print(store)
      

print(pair_sum([3, 2, 5, 4, 1], 8)) # -> (0, 2)
print(pair_sum([4, 7, 9, 2, 5, 1], 5)) # -> (0, 5)
print(pair_sum([4, 7, 9, 2, 5, 1], 3)) # -> (3, 5)
print(pair_sum([1, 6, 7, 2], 13)) # -> (1, 2)
print(pair_sum([9, 9], 18)) # -> (0, 1)
print(pair_sum([6, 4, 2, 8 ], 12)) # -> (1, 3)