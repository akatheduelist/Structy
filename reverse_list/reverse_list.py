
class Node:
  def __init__(self, val):
    self.val = val
    self.next = None
​
'''
Approach: Iterative -> We need to keep track of the current, next, and previous pointers of the list in order to reverse it in place. Current will initiate to Head and previous will initiate to null. For each iteration we point the current.next to current.prev, then we move all 3 pointers up one space. Once current is null we have reached the end of the list and we return the head of the the list now which will be the end of the previous list.
'''
def reverse_list(head):
  current = head
  prev = None
​
  while current != None:
    next = current.next
    current.next = prev
    prev = current
    current = next
​
  return prev
​
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")
​
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
​
# a -> b -> c -> d -> e -> f
​
reverse_list(a) # f -> e -> d -> c -> b -> a
x = Node("x")
y = Node("y")
​
x.next = y
​
# x -> y
​
reverse_list(x) # y -> x
p = Node("p")
​
# p
​
reverse_list(p) # p