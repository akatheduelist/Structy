# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None
​
# Approach: Iterative - Keep a count while traversing the linked list. If the count matches the index, return the current node's value. Else, we increment the counter. If the index does not match the count and the next node is "None" then we know we have reached the end of the list without finding the falue and we return False.
def get_node_value(head, index):
  count = 0
  current = head
​
  while count <= index:
    if count == index:
      return current.val
    else:
      count += 1
    if current.next == None:
      return None
    else:
      current = current.next
​
# Approach: Recursive - Pass along the index given and decrease by one when passing through the the recursive call. Once the index is 0 we return the value up the stack.   
# def get_node_value(head, index):
#     if head is None:
#        return None
#     if index == 0:
#        return head.val
#     return get_node_value(head.next, index - 1)
​
  
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
​
# a.next = b
# b.next = c
# c.next = d
​
# # a -> b -> c -> d
​
# get_node_value(a, 2) # 'c'
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
​
# a.next = b
# b.next = c
# c.next = d