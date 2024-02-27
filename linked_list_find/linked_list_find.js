
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
// Approach: Iterative -> While head is not null, check if head value is equal to target and return true if it is else set the current node to next. If while loop completes to null, return false.
const linkedListFind = (head, target) => {
  let current = head
  while(current != null) {
    if(current.val == target) return true
    current = current.next
  }
  return false
}
​
// Approach: Recursive -> Base case, if head is None we return false. Base case, if head val is eq to target we return true. Recursive step, return the function calling the head.next and passing the target.
// const linkedListFind = (head, target) => {
//   if (head === null) return false
//   if (head.val === target) return true
//   return linkedListFind(head.next, target)
// }
​
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
​
// a.next = b;
// b.next = c;
// c.next = d;