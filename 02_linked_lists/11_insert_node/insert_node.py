class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def insert_node(head, value, index):
  current = head
  prev = None
  new_node = Node(value)
  currentIndex = 0

  if currentIndex == index:
    new_node.next = head
    return new_node

  while current is not None:
    if currentIndex == index:
      prev.next = new_node
      new_node.next = current
      break
    if current.next is None and currentIndex + 1 == index:
      current.next = new_node
      break
    currentIndex += 1
    prev = current
    current = current.next

  return head