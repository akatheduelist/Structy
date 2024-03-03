# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None
​
def zipper_lists(head_1, head_2):
  res = head_1
  curr1 = head_1.next
  curr2 = head_2
  count = 0
​
  while curr1 and curr2 is not None:
    if count % 2 == 0:
      res.next = curr2
      curr2 = curr2.next
    else:
      res.next = curr1
      curr1 = curr1.next
    res = res.next
    count += 1
​
  if curr1 is None:
    res.next = curr2
  if curr2 is None:
    res.next = curr1
​
  return head_1
​