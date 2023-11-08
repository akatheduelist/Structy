def pair_product(numbers, target_product):
  map = {}

  for index, num in enumerate(numbers):
    target_value = target_product / num

    if target_value in map:
      return (index, map[target_value])
    else:
      map[num] = index

print(pair_product([3, 2, 5, 4, 1], 8)); # -> [1, 3]
print(pair_product([3, 2, 5, 4, 1], 10)); # -> [1, 2]
print(pair_product([4, 7, 9, 2, 5, 1], 5)); # -> [4, 5]
print(pair_product([4, 7, 9, 2, 5, 1], 35)); # -> [1, 4]
print(pair_product([3, 2, 5, 4, 1], 10)); # -> [1, 2]
print(pair_product([4, 6, 8, 2], 16)); # -> [2, 3]