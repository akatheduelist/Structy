class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
    
'''
Approach: Iterative -> While head is not null, add the increment the value of head to a results var and return results.
'''
def sum_list(head):
  res = 0
  current = head
​
  while current is not None:
    res += current.val
    current = current.next
  
  print(res)
  return res
​
'''
Approach: Recursive -> Recursively call adding head.next to the current value until the list is empty in which case we return 0 and process the stack.
'''
# def sum_list(head):
#   if head is None:
#         return 0
#     return head.val + sum_list(head.next)
  
a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)
​
a.next = b