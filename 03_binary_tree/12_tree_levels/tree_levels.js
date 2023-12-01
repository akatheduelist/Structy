class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Breadth First Search -> Iterative with Queue
// While Queue is not empty
// Shift off the front of the queue
// Add current value to an array at the current level
// If current.left push to Queue
// If current.right push to Queue
// Return value array
const treeLevels = (root) => {
  if(root) {
    root.level = 0;
  } else {
    return []
  }
  
  const queue = [root]
  const answer = []

  while(queue.length) {
    const current = queue.shift();

    if(answer[current.level]) {
      answer[current.level].push(current.val)
    } else {
      answer[current.level] = [current.val]
    }

    if(current.left) {
      current.left.level = current.level + 1;
      queue.push(current.left);
    }

    if(current.right) {
      current.right.level = current.level + 1;
      queue.push(current.right);
    }
  }

  return answer;
};

module.exports = {
  treeLevels,
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

console.log(treeLevels(a)); // ->