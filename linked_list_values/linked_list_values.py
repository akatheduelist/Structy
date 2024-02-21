class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
​
# def linked_list_values(head):
#   '''
#   --Iterative Approach-- Time=O(n) Space=O(n)
#   Create an empty array. While the link list item is not null (end of the linked list),
#   we push the current value into the array and set the current pointer to the next pointer.     
#   Return the array when we have reached the end of the linked list (current val is null).
#   '''
#   res = []
#   current_node = head
#   while current_node != None:
#     res.append(current_node.val)
#     current_node = current_node.next
#   print(res)
#   return res
​
​
def linked_list_values(head):
  '''
  --Recursive Approach--
  Use a helper function to recursively pass in the value and pointer to res array until current
  value is null. Once "head" is null, there are no more nodes in the list and the recursive
  function can return. Recursive approach would have the same run time and space complexity due
  to the call stack but since we split the recursive call into separate functions we don't get 
  multiple copies of arrays on the stack keeping us at O(n) space.
  '''
  res = []
  insert_value(head, res)
  print(res)
  return res
​