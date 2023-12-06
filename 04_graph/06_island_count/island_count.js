const islandCount = (grid) => {
  const visited = new Set([])
  const islands = 0;

  for(let row of grid) { // row 0
    for(let item of row) { // col 0
      if(item != 'W') {
        const coordinates = [grid.indexOf(row), row.indexOf(item)]
        exploreLand(grid, coordinates, visited);
      }
    }
  }
  return visited;
};

const exploreLand = (grid, start, visited) => {
  const queue = [start]

  while(queue.length) {
    const current = queue.shift();

    if(!visited.has(current)){
      // Do Stufff
      visited.add(current)
    }

  }

  return queue
} 

module.exports = {
  islandCount,
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3