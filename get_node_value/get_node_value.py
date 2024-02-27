# def get_node_value(head, index):
#     if head is None:
#        return None
#     if index == 0:
#        return head.val
#     return get_node_value(head.next, index - 1)
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
# get_node_value(a, 2) # 'c'
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
# get_node_value(a, 3) # 'd'
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
# get_node_value(a, 7) # None
# node1 = Node("banana")
# node2 = Node("mango")
​
# node1.next = node2
​
# # banana -> mango
​
# get_node_value(node1, 0) # 'banana'
# node1 = Node("banana")
# node2 = Node("mango")
​
# node1.next = node2
​
# # banana -> mango
​
# get_node_value(node1, 1) # 'mango'