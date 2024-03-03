class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
​
def merge_lists(head_1, head_2):
  if head_1.val < head_2.val:
    temp = head_1
    curr1 = head_1.next
    curr2 = head_2
    res = head_1
  else:
    temp = head_2
    curr1 = head_2.next
    curr2 = head_1
    res = head_2
​
  while curr1 and curr2 is not None:
    if curr1.val < curr2.val:
      temp.next = curr1
      curr1 = curr1.next
    else:
      temp.next = curr2
      curr2 = curr2.next
    temp = temp.next
​
  if curr1 is None:
    temp.next = curr2
  if curr2 is None:
    temp.next = curr1
  
  return res
​