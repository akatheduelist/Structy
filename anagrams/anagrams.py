
def anagrams(s1, s2):
  '''
  --Compare Sorted Arrays--
  Instead of putting letters from the string into a dictionary and iterating over
  those to compare, I am going to cast both strings into an array of chars. First,
  if two strings are not the same length, they are not anagrams, we can reaturn False
  early. Since we do not care about order of chars we can take the two char arrays and
  run sort on them to sort them into any order as long as they are the same. We then 
  "join" our two sorted arrays back into strings and ff they are the same then they are 
  anagrams and we get true, else we get false.
  '''
  
  if len(s1) != len(s2):
    print(False)
    return False
  
  string1_array = [char for char in s1]
  string2_array = [char for char in s2]
​
  print(sorted(string1_array) == sorted(string2_array))
  return sorted(string1_array) == sorted(string2_array)
  
anagrams('restful', 'fluster') # -> True
anagrams('cats', 'tocs') # -> False
anagrams('monkeyswrite', 'newyorktimes') # -> True
anagrams('paper', 'reapa') # -> False
anagrams('elbow', 'below') # -> True
anagrams('tax', 'taxi') # -> False
anagrams('taxi', 'tax') # -> False
anagrams('night', 'thing') # -> True
anagrams('abbc', 'aabc') # -> False
anagrams('po', 'popp') # -> false
anagrams('pp', 'oo') # -> false