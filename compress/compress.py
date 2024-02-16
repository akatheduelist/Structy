
def compress(s):
  '''
  --Two Pointer Strategy--
  This is essentially the opposite of the "uncompress" problem so we init
  two pointers to index 0. The first pointer (j) will navigate the array and second
  pointer (i) will follow. We need to iterate over each char and if it is the same as
  previous char we keep going and increment pointer1 (j). Once a different char is found
  we calculate the distance between pointer1 (j) and pointer2 (i) by subtracting. There may 
  be repeating chars at the end of the string like "ccaaatsss". We wouldn't get the compressed
  number because the while loop would end, so we add a random char to the end of the string
  so we can do the final pointer1 - pointer2 before ending the loop.
  '''
  s += '!'
  res = ''
  i = 0
  j = 0
  
  while j < len(s):
    if s[j] == s[i]:
      j += 1
    else:
      num = j - i
      if num == 1:
        res += s[i]
        i = j
      else:
        res += str(num) + s[i]
        i = j
  
  print(res)
  return res
​
compress('ccaaatsss') # -> '2c3at3s'
compress('ssssbbz') # -> '4s2bz'
compress('ppoppppp') # -> '2po5p'
compress('nnneeeeeeeeeeeezz') # -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
​