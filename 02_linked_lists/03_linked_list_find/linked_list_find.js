class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative -> While head is not null, check if head value is equal to target and return true if it is else set the current node to next. If while loop completes to null, return false.
const linkedListFind = (head, target) => {
  let current = head
  while(current != null) {
    if(current.val == target) return true
    current = current.next
  }
  return false
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true

module.exports = {
  linkedListFind
}
