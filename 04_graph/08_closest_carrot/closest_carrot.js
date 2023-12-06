// Input: Int -> Starting row and starting column
// X = Walls / O = Open Space / C = Carrot
// Movement can be wsad but cannot go through walls
// Output: Int -> -1 (no path) || Length of shortest path from start to destination (carrot)
// Shortest Path = Breadth First marking each as visited or walls until first carrot is found.
// Retrun path length of first carrot found.
const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]] // [[0, 1, 1], [2, 2, 1], ]
  const visited = new Set(); // {}

  while(queue.length) {
    const [x, y, level] = queue.shift(); // [1,2,0]
    const inbound = (x >= 0) && (y >= 0) && (x < grid.length) && (y < grid[x].length) // True
    const currentXY = x + ',' + y; // '1,2'
    
    if(!visited.has(currentXY) && inbound) {
      const currentVal = grid[x][y] // O
      if(currentVal === 'C') return level;
      if(currentVal != 'X'){
        queue.push([x-1, y, level+1])
        queue.push([x+1, y, level+1])
        queue.push([x, y+1, level+1])
        queue.push([x, y-1, level+1])
      }
    }

    visited.add(currentXY)
  }

  return -1;
};

module.exports = {
  closestCarrot,
};

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];
console.log(closestCarrot(grid, 1, 2)); // -> 4