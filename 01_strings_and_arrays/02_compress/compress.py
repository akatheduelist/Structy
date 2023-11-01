def compress(s):
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
        
  return res