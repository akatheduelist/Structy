def intersection(a, b):
    store = set()
    res = []

    for num in a:
        store.add(num)

    for num in b:
        if num in store:
            res.append(num)
    
    return res    

print(intersection([4,2,1,6], [3,6,9,2,10])) # -> [2,6]
print(intersection([2,4,6], [4,2])) # -> [2,4]
print(intersection([4,2,1], [1,2,4,6])) # -> [1,2,4]
print(intersection([0,1,2], [10,11])) # -> []