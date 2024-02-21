
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
/*
  --Iterative Approach-- Time=O(n) Space=O(n)
  Create an empty array. While the link list item is not null (end of the linked list),
  we push the current value into the array and set the current pointer to the next pointer.     
  Return the array when we have reached the end of the linked list (current val is null).
*/
// const linkedListValues = head => {
//     const res = [];
//     let current = head;
//     while(current != null) {
//         res.push(current.val);
//         current = current.next
//     }
//   console.log(res)  
//   return res;
// }
​
/*
  --Recursive Approach--
  Use a helper function to recursively pass in the value and pointer to res array until current
  value is null. Once "head" is null, there are no more nodes in the list and the recursive
  function can return. Recursive approach would have the same run time and space complexity due
  to the call stack but since we split the recursive call into separate functions we don't get 
  multiple copies of arrays on the stack keeping us at O(n) space.
*/
​
const linkedListValues = (head) => {
  const res = [];
  insertValue(head, res)
  console.log(res)  
  return res;
}
​
const insertValue = (head, res) => {
  if(head === null) return
  res.push(head.val)
  insertValue(head.next, res)
}
​
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
​
a.next = b;
b.next = c;
c.next = d;
​
// a -> b -> c -> d
​
linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
​
const x = new Node("x");
const y = new Node("y");
​
x.next = y;