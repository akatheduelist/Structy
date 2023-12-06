const minimumIsland = (grid) => {
  const visited = new Set();
  let smallest = Infinity;

  for(let x=0; x<grid.length; x++){
    for(let y=0; y<grid[x].length; y++) {
      islandSize = explorer(grid, x, y, visited); // Is this land or not? If it is.. How big is the island? -> 0 or size of island;
      if(islandSize > 0 && islandSize < smallest) smallest = islandSize;
    }
  }

  return smallest;
};

const explorer = (grid, x, y, visited) => {
  const inbound = (x >= 0) && (y >= 0) && (x < grid.length) && (y < grid[x].length);
  if(!inbound) return 0;

  const currentVal = grid[x][y]
  if(currentVal === 'W') return 0;

  const currentXY = x + ',' + y;
  if(visited.has(currentXY)) {
    return 0;
  } else {
    visited.add(currentXY);
  };
  
  let islandSize = 1;

  islandSize += explorer(grid, x-1, y, visited)
  islandSize += explorer(grid, x+1, y, visited)
  islandSize += explorer(grid, x, y+1, visited)
  islandSize += explorer(grid, x, y-1, visited)

  // console.log(islandSize)
  return islandSize
}

module.exports = {
  minimumIsland,
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2