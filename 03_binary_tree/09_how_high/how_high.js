class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Depth First Traversal -> Ignore leafs
// +1 count for each side of the tree
// Return the higher of the two counts at each node
const howHigh = (node) => {
  if(node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

module.exports = {
  howHigh,
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(howHigh(a)); // -> 2