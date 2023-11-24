class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// Approach: Iterative
const reverseList = (head) => {
    // Init Prev to Null, Curr to Head.val, Next to Head.next
    let prev = null; // A
    let current = head; // B > A
    let next = head.next; // C

    
    // While Curr is not Null
    while(current != null) {
        // Next is now Curr.next
        next = current.next
        // Curr.next is now Prev
        current.next = prev;
        // Prev is now Curr
        prev = current;
        // Curr is now Next
        current = next;
        // console.log("PREV>>", prev.val, "CURR>>", current.val, "NEXT>>", next.val)
    };

    // When Curr is Null Return Prev
    return prev.val
  };

  
// b -> a -> c -> d -> e -> f
// a -> b -> c -> d -> e -> f
// c=b  t=b
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

console.log(reverseList(a)) // f -> e -> d -> c -> b -> a

// x -> y
const x = new Node('x')
const y = new Node('y')

x.next = y

console.log(reverseList(x)) // y -> x

// p
const p = new Node('p')

console.log(reverseList(p)) // p

module.exports = {
  reverseList
}
