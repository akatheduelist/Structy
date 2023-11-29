class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  if(root === null) return [];
  const queue = [root];
  const res = [];

  while(queue.length > 0) {
    const current = queue.pop();
    res.push(current.val);
    
    if(current.left != null) queue.unshift(current.left);
    if(current.right != null) queue.unshift(current.right);
  }

  return res;
};

module.exports = {
  breadthFirstValues,
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

console.log(breadthFirstValues(a)); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']