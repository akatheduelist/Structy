def intersection(a, b):
  store = set()
  res = []
​
  for num in a:
    store.add(num)
​
  for num in b:
    if num in store:
      res.append(num)
  
  # print(res)
  return res    
  
intersection([4,2,1,6], [3,6,9,2,10]) # -> [2,6]
intersection([2,4,6], [4,2]) # -> [2,4]
intersection([4,2,1], [1,2,4,6]) # -> [1,2,4]
intersection([0,1,2], [10,11]) # -> []
a = [ i for i in range(0, 50000) ]
b = [ i for i in range(0, 50000) ]
intersection(a, b) # -> [0,1,2,3,..., 49999]