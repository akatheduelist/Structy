class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def is_univalue_list(head):
  target = heard.val
  current = head

  while current is not None:
    if current.val != target:
      return False
    current = current.next

  return True
