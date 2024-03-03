# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None
​
def longest_streak(head):
  current = head
  prev = None
  max_streak = 0
  current_streak = 0
​
  while current is not None:
    if current.val == prev:
      prev = current.val
      current_streak += 1
      if current_streak > max_streak:
        max_streak = current_streak
    else:
      prev = current.val
      current_streak = 1
      if current_streak > max_streak:
        max_streak = current_streak
    current = current.next
​
  return max_streak
​