class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
/*
  Approach: Iterative -> We need to keep track of the current, next, and previous pointers of the list in order to reverse it in place. Current will initiate to Head and previous will initiate to null. For each iteration we point the current.next to current.prev, then we move all 3 pointers up one space. Once current is null we have reached the end of the list and we return the head of the the list now which will be the end of the previous list.
*/
const reverseList = (head) => {
    let prev = null;
    let current = head;
    let next = head.next;
​
    while(current != null) {
        next = current.next
        current.next = prev;
        prev = current;
        current = next;
    };
​
    return prev
  };
​
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
​
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
​
// a -> b -> c -> d -> e -> f
​
reverseList(a); // f -> e -> d -> c -> b -> a
const x = new Node("x");
const y = new Node("y");
​
x.next = y;
​
// x -> y
​
reverseList(x); // y -> x
const p = new Node("p");
​
// p
​
reverseList(p); // p
​
module.exports = {
  reverseList,
};
​