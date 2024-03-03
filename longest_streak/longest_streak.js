// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const longestStreak = (head) => {
  let prev = null;
  let curr = head;
  let currStreak = 0;
  let maxStreak = 0;
​
  while(curr != null) {
    if(curr.val === prev) {
      currStreak++
      prev = curr.val;
      if(currStreak > maxStreak) maxStreak = currStreak;
    } else {
      currStreak = 1;
      prev = curr.val;
      if(currStreak > maxStreak) maxStreak = currStreak;
    } 
    curr = curr.next;
  }
​
  return maxStreak
};
​
module.exports = {
  longestStreak,
};
​