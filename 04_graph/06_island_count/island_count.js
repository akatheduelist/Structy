const islandCount = grid => {
  const visited = new Set()
  let islands = 0

  for (let row = 0; row < grid.length; row++) {
    // console.log(grid[row])
    for (let col = 0; col < grid[row].length; col++) {
      // 0 1
      const x = row
      const y = col
      islands += exploreLand(grid, x, y, visited)
    }
  }
  return islands
}

const exploreLand = (grid, x, y, visited) => {
  // Depth First Recursive call on explore
  // Remember we are starting search at (0,0) in the top right so we are looking at the graph plane at a 90deg angle. Ex: graph[2][3] is actually x/y coordinate (3, -2) in our visual graph.
  // explore(x-1, y) left
  // explore(x+1, y) right
  // explore(x, y-1) down
  // explore(x, y+1) up
  const inbound = x >= 0 && y >= 0 && x < grid.length && y < grid[x].length // 0,1
  if (!inbound) return 0
  
  const currentXY = x + ',' + y // String -> 0,1
  if (visited.has(currentXY)) return 0
  visited.add(currentXY) // Visited Add -> 0,1
  
  const currentVal = grid[x][y] // String -> W
  if (currentVal === 'W') return 0

  exploreLand(grid, x - 1, y, visited) // -1, 1
  exploreLand(grid, x + 1, y, visited) // 1, 1
  exploreLand(grid, x, y - 1, visited) // 0, 0
  exploreLand(grid, x, y + 1, visited) // 0, 1

  return 1
}

module.exports = {
  islandCount
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]

console.log(islandCount(grid)) // -> 3
