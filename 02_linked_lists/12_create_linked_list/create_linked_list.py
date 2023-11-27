class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def create_linked_list(values):
  new_list = Node(None)
  tail = new_list

  for value in values:
    tail.next = Node(value)
    tail = tail.next

  return new_list.next