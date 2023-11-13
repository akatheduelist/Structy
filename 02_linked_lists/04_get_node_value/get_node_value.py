class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# Brainstorm
# Create a count var init to 0
# Create a current var init to head
# *While count <= idx
# **if count == idx > return current
# **current = current.next

# Approach: Iterative - Keep a count while traversing the linked list.
# def get_node_value(head, index):
#   count = 0
#   current = head

#   while count <= index:
#     if count == index:
#       return current.val
#     else:
#       count += 1
#     if current.next == None:
#       return None
#     else:
#       current = current.next

# Approach: Recursive - Pass along the index given and decrease by one when passing through the the recursive call. Once the index is 0 we return the value up the stack.   
def get_node_value(head, index):
    if head is None:
       return None
    if index == 0:
       return head.val
    return get_node_value(head.next, index - 1)

# Testing  
# a -> b -> c -> d
a = Node("a");
b = Node("b");
c = Node("c");
d = Node("d");

a.next = b;
b.next = c;
c.next = d;

print(get_node_value(a, 2)); # 'c'
print(get_node_value(a, 3)); # 'd'
print(get_node_value(a, 7)); # null

# banana -> mango
node1 = Node("banana");
node2 = Node("mango");

node1.next = node2;

print(get_node_value(node1, 0)); # 'banana'
print(get_node_value(node1, 1)); # 'mango'