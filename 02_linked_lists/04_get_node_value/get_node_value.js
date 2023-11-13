class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Brainstorm
// Create a count var init to 0
// Create a current var init to head
// *While count <= idx
// **if count == idx > return current
// **current = current.next

// Approach: Iterative - Keep a count while traversing the linked list.
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;

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
// Approach: Recursive - Pass along the index given and decrease by one when passing through the the recursive call. Once the index is 0 we return the value up the stack.

// Testing  
// a -> b -> c -> d
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 3)); // 'd'
console.log(getNodeValue(a, 7)); // null


// banana -> mango
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

console.log(getNodeValue(node1, 0)); // 'banana'
console.log(getNodeValue(node1, 1)); // 'mango'

module.exports = {
  getNodeValue,
};
