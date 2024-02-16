
def most_frequent_char(s):
  '''
  --Dictionary Check--
  We iterate over each char of the string and add it as a key to to the 
  "count" dictionary with an initial value of 1. If a char is found that is already
  in count we increament the value. Then we walk through the string and check
  each char for its corresponding value, if its the highest we replace highestChar
  if its the same we skip it, because the prompt wants the first occurance of the char.
  '''
  count = {}
  highest_char = ''
  char_count = 0
​
  for char in s:
    if char not in count:
        count[char] = 1
    else:
        count[char] += 1
        
  for char in count:
      if count[char] > char_count:
          char_count = count[char]
          highest_char = char
  
  print(highest_char)
  return highest_char
​
most_frequent_char('bookeeper') # -> 'e'
most_frequent_char('david') # -> 'd'
most_frequent_char('abby') # -> 'b'
most_frequent_char('mississippi') # -> 'i'
most_frequent_char('potato') # -> 'o'
most_frequent_char('eleventennine') # -> 'e'
most_frequent_char('riverbed') # -> 'r'
​