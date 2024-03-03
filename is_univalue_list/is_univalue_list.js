// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const isUnivalueList = (head) => {
  const target = head.val;
  let current = head;
​
  while(current != null) {
    if(current.val != target) return false
    current = current.next;
  }
​
  return true;
};
​
module.exports = {
  isUnivalueList,
};
​