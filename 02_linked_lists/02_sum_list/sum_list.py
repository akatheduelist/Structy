class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# Algorithm: Increment res for each node in the linked list
# Initiate a results variable
# Set the current pointer to the head
# *While current is not null
# **Add current value to res
# **Set current to current.next
# When current is finally at the tail (null) return the number res

# Approach: Iterative -> While head is not null, add the increment the value of head to a results var and return results.
# def sum_list(head):
#   res = 0
#   current = head

#   while current is not None:
#     res += current.val
#     current = current.next

#   return res

# Approach: Recursive -> Recursively call adding head.next to the current value until the list is empty in which case we return 0 and process the stack.
def sum_list(head):
    if head is None:
        return 0
    return head.val + sum_list(head.next)

a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

# 2 -> 8 -> 3 -> -1 -> 7
print(sum_list(a)) # 19
x = Node(38)
y = Node(4)

x.next = y

# 38 -> 4
print(sum_list(x)) # 42
z = Node(100)

# 100
print(sum_list(z)) # 100
print(sum_list(None)) # 0