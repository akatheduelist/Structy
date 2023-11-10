class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Initiate a res to empty array
// Initial current node to head
// *While current not eq null
// **Push current node value into res
// **Assign current to head.next
// Return res array

// Approach: Itterative -> Push node value into arr until reaching tail.
// const linkedListValues = head => {
//     const res = [];
//     let current = head;
//     while(current != null) {
//         res.push(current.val);
//         current = current.next
//     }
//     return res;
// }

// Approach: Recursive -> Use a helper function to recursively pass in the value and pointer to res array until current value is null.

// Note: Need to use helper function because when passing a primitive like an array (res) into a helper function it references the pointer to res. If the recursive call was in the main function it would create copies of the array increasing the time and space complexity unneccesarrily. By using the helper function we can manipulate the array in place keeping the time and space to O(n) like the iterative approach.
const linkedListValues = head => {
    const res = [];
    insertValue(head, res)
    return res;
}

const insertValue = (head, res) => {
    if(head === null) return
    res.push(head.val)
    insertValue(head.next, res)
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