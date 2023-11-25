class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let prev = null;
  let curr = head;
  let currStreak = 0;
  let maxStreak = 0;

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

  return maxStreak
};

module.exports = {
  longestStreak,
};

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3