class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def remove_node(head, target_val):
  if head.val == target_val:
    return head.next;

  prev = None
  current = head

  while current is not None:
    if current.val == target_val:
      prev.next = current.next
      break
    prev = current
    current = current.next

  return head

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

# a -> b -> c -> d -> e -> f

print(remove_node(a, "c"))

q = Node("q")
r = Node("r")
s = Node("s")

q.next = r
r.next = s

# q -> r -> s

print(remove_node(q, "q"))