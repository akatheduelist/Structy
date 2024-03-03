// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const zipperLists = (head1, head2) => {
  let count = 0 // 2
  let res = head1 // B
  let curr1 = head1.next // C
  let curr2 = head2 // Y
​
  while (curr1 && curr2 != null) {
    if (count % 2 == 0) {
        res.next = curr2
        curr2 = curr2.next
    } else {
        res.next = curr1
        curr1 = curr1.next
    }
    res = res.next
    count++
  }
​
  if(curr1 === null) res.next = curr2
  if(curr2 === null) res.next = curr1
​
  return head1;
}
​
module.exports = {
  zipperLists,
};
​