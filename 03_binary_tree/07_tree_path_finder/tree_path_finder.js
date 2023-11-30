class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Depth First Traversal > Recursion
// Find the target
// Return the found node.val up the tree
const pathFinder = (root, target) => {
  if(root === null) return null;
  if(root.val === target) return [root.val];
  const left = pathFinder(root.left, target);
  const right = pathFinder(root.right, target);

  if(left != null) return [root.val, ...left];
  if(right != null) return [root.val, ...right];

  return null;
};

module.exports = {
  pathFinder,
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]
