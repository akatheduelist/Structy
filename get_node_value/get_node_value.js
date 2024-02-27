class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
// Approach: Iterative -> Keep a count while traversing the linked list. If the count matches the index, return the current node's value. Else, we increment the counter. If the index does not match the count and the next node is "None" then we know we have reached the end of the list without finding the falue and we return None.
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
​
  while (count <= index) {
    if(count === index) {
      return current.val
    } else {
      count++
    }
    if(current.next === null) {
      return null
    } else {
      current = current.next
    }
  }
};
​
// Approach: Recursive -> Pass along the index given and decrease by one when passing through the the recursive call. Once the index is 0 we return the value up the stack. If we reach the head the of the list before the index has been decremented to 0 we return None because the index is out of bounds to the linked list length.
// const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index - 1);
//   };
​
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
​
// a.next = b;
// b.next = c;
// c.next = d;
​
// // a -> b -> c -> d
​
// getNodeValue(a, 2); // 'c'
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
​