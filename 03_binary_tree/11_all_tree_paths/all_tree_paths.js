class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
  if(root === null) return [];
  if(!root.left && !root.right) return [[root.val]]

  const res = [];

  const left = allTreePaths(root.left);
  for(let subPath of left) {
    res.push([root.val, ...subPath])
  }
  
  const right = allTreePaths(root.right);
  for(let subPath of right) {
    res.push([root.val, ...subPath])
  }

  return res;
};

module.exports = {
  
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

console.log(allTreePaths(a)); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 