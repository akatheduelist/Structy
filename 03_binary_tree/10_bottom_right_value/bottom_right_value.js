class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Breadth First -> Iterative Queue
// Add each nodes left and right to queue in that order
// Eventually you will get to the bottom level and the last remaining item in your queue will be the right most item at the lowest level.
// Return the last item in the queue.
const bottomRightValue = (root) => {
  let queue = [root];
  let answer = null;

  while(queue.length) {
    let current = queue.pop();
    answer = current.val;
    if(current.left != null) queue.unshift(current.left);
    if(current.right != null) queue.unshift(current.right);
  }

  return answer;
};

module.exports = {
  bottomRightValue,
};

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     10
// //  / \      \
// // 4   -2     1

// console.log(bottomRightValue(a)); // -> 1

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);
const i = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \    /   
//    -2  6  7 

console.log(bottomRightValue(a)); // -> 7