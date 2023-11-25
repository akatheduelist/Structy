class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  const target = head.val;
  let current = head;

  while(current != null) {
    if(current.val != target) return false
    current = current.next;
  }

  return true;
};

module.exports = {
  isUnivalueList,
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true