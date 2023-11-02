def anagrams(s1, s2):
  # 2 input strings, check to see if they are anagrams, anagrams are words that contain the same chars in any order
  # GOD and DOG are anagrams, GOD and DAD are not
  # 1. If s1 length != s2 length, return False -- Not an anagrams
  # 2. Loop over s1 while s1 has lenght and check each char
  # 3. If char is not in s2, return False -- Not an anagrams
  # 4. Else continue
  # 5. Return True if end of while statement
  
  if len(s1) != len(s2):
    return False
  else:
    for char in s1:
      if char not in s2:
        return False
      else:
        s2 = s2.replace(char,"",1)
  
  return True