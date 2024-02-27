
class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
​
# Approach: Iterative -> While head is not null, check if head value is equal to target and return true if it is else set the current node to next. If while loop completes to null, return false.
def linked_list_find(head, target):
    current = head
    while current is not None:
       if current.val == target:
          return True
       current = current.next
    return False
​
# Approach: Recursive -> Base case, if head is None we return false. Base case, if head val is eq to target we return true. Recursive step, return the function calling the head.next and passing the target.
# def linked_list_find(head, target):
#     if head is None:
#        return False
#     if head.val == target:
#        return True
#     return linked_list_find(head.next, target)
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
# linked_list_find(a, "c") # True
​
# a = Node("a")
# b = Node("b")