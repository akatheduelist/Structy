class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root) => {
  if(root === null) return [];
  if(!root.left && !root.right) {
    return [root.val]
  };

  const left = leafList(root.left);
  const right = leafList(root.right);
  
  return [...left, ...right]
};

module.exports = {
  leafList,
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

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ] 