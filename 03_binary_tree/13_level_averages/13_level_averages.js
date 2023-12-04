class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Depth First -> Recursive
// Get the values of each level and divide them by the number of values at each level.
// Creating an array with a sub-array for each level of the tree.
// Use the index of each sub-array as the "level" indicator.
// Divide the values based on the array length - 1 for final output.
// Input -> Binary Tree containing numbers.
// Output -> Array continaing avg value of each level.

const levelAverages = (root) => {
  const levels = [];
  getLevelNumbers(root, levels, 0)
  return levels.map(element => {
    let sum = 0;
    let length = element.length;
    for(let value of element) {
      sum += value;
    }
    return sum / length;
  })
};

const getLevelNumbers = (root, levels, levelNumber) => {
  if(root === null) return;

  if(levels.length === levelNumber) {
    levels[levelNumber] = [root.val]
  } else {
    levels[levelNumber].push(root.val)
  }

  getLevelNumbers(root.left, levels, levelNumber + 1);
  getLevelNumbers(root.right, levels, levelNumber + 1);
}

module.exports = {
  levelAverages,
};


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 