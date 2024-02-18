
def pair_product(numbers, target_product):
  '''
  This is a variant of the last problem except slightly different since we need to
  find the product ot two ints. Our target value is the current number divided by the
  target number we are trying to find. If the value of the division between the current
  number and the target number is in the hash map then we return the index of those two
  numbers, else we will add the current number to the hash map.
  '''
  map = {}
​
  for index, num in enumerate(numbers):
    target_value = target_product / num
​
    if target_value in map:
      print(index, map[target_value])
      return (index, map[target_value])
    else:
      map[num] = index
​
pair_product([3, 2, 5, 4, 1], 8) # -> (1, 3)
pair_product([3, 2, 5, 4, 1], 10) # -> (1, 2)
pair_product([4, 7, 9, 2, 5, 1], 5) # -> (4, 5)
pair_product([4, 7, 9, 2, 5, 1], 35) # -> (1, 4)
pair_product([3, 2, 5, 4, 1], 10) # -> (1, 2)
pair_product([4, 6, 8, 2], 16) # -> (2, 3)
​