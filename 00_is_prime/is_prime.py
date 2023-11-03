import math

def is_prime(n):
  end = int(math.sqrt(n)) + 1
  
  if n < 2:
    return False
  
  for num in range(2, end):
    if n % num == 0: 
      return False
    
  return True