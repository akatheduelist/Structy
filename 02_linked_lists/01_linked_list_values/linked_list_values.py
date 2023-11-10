class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# Approach: Iterative -> Push node value into arr until reaching tail.
# def linked_list_values(head):
#     res = []
#     current_node = head
#     while current_node != None:
#        res.append(current_node.val)
#        current_node = current_node.next
#     return res

# Approach: Recursive -> Use a helper function to recursively pass in the value and pointer to res array until current value is null.
def linked_list_values(head):
    res = []
    insert_value(head, res)
    return res

def insert_value(head, res):
   if head is None:
      return
   res.append(head.val)
   insert_value(head.next, res)

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d
print(linked_list_values(a)) # -> [ 'a', 'b', 'c', 'd' ]
x = Node("x")
y = Node("y")

x.next = y

# x -> y
print(linked_list_values(x)) # -> [ 'x', 'y' ]
q = Node("q")

# q
print(linked_list_values(q)) # -> [ 'q' ]
print(linked_list_values(None)) # -> [ ]