class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Iterative
// const depthFirstValues = (root) => {
//   if(root === null) return [];
//   let stack = [root]
//   let res = []

//   while(stack.length > 0) {
//     const curr = stack.pop();

//     res.push(curr.val);

//     if(curr.right != null) stack.push(curr.right);
//     if(curr.left != null) stack.push(curr.left);
//   }

//   return res;
// };

const depthFirstValues = (root) => {
  
};

module.exports = {
  depthFirstValues,
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

console.log(depthFirstValues(a)); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']