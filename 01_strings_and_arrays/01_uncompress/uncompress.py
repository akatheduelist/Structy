def uncompress(s):
  str = ""
  start = 0 # 0
  end = 0 # 0
  
  while end < len(s):
    if s[end].isnumeric():
      end += 1
    else:
      num = int(s[start:end])
      str += s[end] * num
      end += 1
      start = end

  return str