class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

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

  while curr1 and curr2 is not None:
    if curr1.val < curr2.val:
      temp.next = curr1
      curr1 = curr1.next
    else:
      temp.next = curr2
      curr2 = curr2.next
    temp = temp.next

  if curr1 is None:
    temp.next = curr2
  if curr2 is None:
    temp.next = curr1
  
  return res

a = Node(5)
b = Node(7)
c = Node(10)
d = Node(12)
e = Node(20)
f = Node(28)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
# 5 -> 7 -> 10 -> 12 -> 20 -> 28

q = Node(6)
r = Node(8)
s = Node(9)
t = Node(25)
q.next = r
r.next = s
s.next = t
# 6 -> 8 -> 9 -> 25

print(merge_lists(a, q))
# 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 