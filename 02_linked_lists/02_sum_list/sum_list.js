class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// Algorithm: Increment res for each node in the linked list
// Initiate a results variable
// Set the current pointer to the head
// *While current is not null
// **Add current value to res
// **Set current to current.next
// When current is finally at the tail (null) return the number res

// Approach: Iterative -> While head is not null, add the increment the value of head to a results var and return results.
// const sumList = head => {
//   let res = 0
//   let current = head

//   while (current != null) {
//     res += current.val
//     current = current.next
//   }

//   return res
// }

// Approach: Recursive -> Recursively call adding head.next to the current value until the list is empty in which case we return 0 and process the stack.
const sumList = head => {
    if(head === null) return 0;
    return head.val + sumList(head.next)
  }

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(-1)
const e = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

// 2 -> 8 -> 3 -> -1 -> 7
console.log(sumList(a)) // 19
const x = new Node(38)
const y = new Node(4)

x.next = y

// 38 -> 4
console.log(sumList(x)) // 42
const z = new Node(100)

// 100
console.log(sumList(z)) // 100
console.log(sumList(null)) // 0

module.exports = {
  sumList
}
