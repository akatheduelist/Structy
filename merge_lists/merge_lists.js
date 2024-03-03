
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const mergeLists = (head1, head2) => {
  let temp
  let curr1
  let curr2
  let res
​
  if (head1.val < head2.val) {
    temp = head1
    curr1 = head1.next
    curr2 = head2
    res = head1
  } else {
    temp = head2
    curr1 = head2.next
    curr2 = head1
    res = head2
  }
​
  // console.log("TEMP >>", temp.val)
  // console.log("CURR1 >>", curr1.val)
  // console.log("CURR2 >>", curr2.val)
​
  while (curr1 && curr2 != null) {
    if (curr1.val < curr2.val) {
      temp.next = curr1
      curr1 = curr1.next
    } else {
      temp.next = curr2