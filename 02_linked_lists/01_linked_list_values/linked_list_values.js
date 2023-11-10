class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Approach: Itterative -> Push node value into arr until reaching tail.
// Initiate a res to empty array
// Initial current node to head
// *While current not eq null
// **Push current node value into res
// **Assign current to head.next
// Return res array

const linkedListValues = head => {
    const res = [];
    let current = head;
    while(current != null) {
        res.push(current.val);
        current = current.next
    }
    return res;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// a -> b -> c -> d
console.log(linkedListValues(a)) // -> [ 'a', 'b', 'c', 'd' ]
const x = new Node('x')
const y = new Node('y')

x.next = y

// x -> y
console.log(linkedListValues(x)) // -> [ 'x', 'y' ]

const q = new Node('q') 

// q
console.log(linkedListValues(q)) // -> [ 'q' ]
console.log(linkedListValues(null)) // -> [ ]

module.exports = {
    linkedListValues
}