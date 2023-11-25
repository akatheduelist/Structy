class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const mergeLists = (head1, head2) => {
  let temp
  let curr1
  let curr2
  let res

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

  // console.log("TEMP >>", temp.val)
  // console.log("CURR1 >>", curr1.val)
  // console.log("CURR2 >>", curr2.val)

  while (curr1 && curr2 != null) {
    if (curr1.val < curr2.val) {
      temp.next = curr1
      curr1 = curr1.next
    } else {
      temp.next = curr2
      curr2 = curr2.next
    }
    temp = temp.next
    // console.log(temp.val)
  }

  if (curr1 === null) temp.next = curr2
  if (curr2 === null) temp.next = curr1

  // console.log(res.val)
  return res
}

module.exports = {
  mergeLists
}

// const a = new Node(5)
// const b = new Node(7)
// const c = new Node(10)
// const d = new Node(12)
// const e = new Node(20)
// const f = new Node(28)
// a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6)
// const r = new Node(8)
// const s = new Node(9)
// const t = new Node(25)
// q.next = r
// r.next = s
// s.next = t
// // 6 -> 8 -> 9 -> 25

// console.log(mergeLists(a, q))
// // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

console.log(mergeLists(a, q));
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 
