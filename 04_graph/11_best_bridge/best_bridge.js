const bestBridge = grid => {
  const visited = new Set()
  const queue = []
  const mainIsland = new Set()

  // Find the first island
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!queue.length) {
        if (grid[x][y] != 'W') {
          const firstIsland = exploreLand(grid, x, y, visited)
          queue.push(...firstIsland)
        }
      }
    }
  }

  // Mark each coordinate of firstIsland into the mainIsland set so we know to skip it
  for(let [landX, landY, level] of queue) {
    const coordinate = `${landX},${landY}` // "2,0"
    mainIsland.add(coordinate)
  }
  
  // Find smallest bridge to second island
  while(queue.length) {
    const [currentX, currentY, currentLevel] = queue.shift() // [2,0,0]
    const coordinate = `${currentX},${currentY}` // "2,0"
    const currentItem = grid[currentX][currentY] // "L"

    if(currentItem === "L" && !mainIsland.has(coordinate)) return currentLevel-1 // FOUND 2nd ISLAND
    
    const directions = [[-1, 0], [+1, 0], [0, -1], [0, +1]]

    for(let [directionX, directionY] of directions) {
      const searchX = currentX + directionX;
      const searchY = currentY + directionY;
      const searchCoordinate = `${searchX},${searchY}` // "2,0"
      const inbound = searchX >= 0 && searchY >= 0 && searchX < grid.length && searchY < grid[searchX].length // True
      
      if(inbound && !visited.has(searchCoordinate)) {
        visited.add(searchCoordinate)
        queue.push([searchX, searchY, currentLevel+1])
      }
    }
  }
}

const exploreLand = (grid, x, y, visited) => {
  const coordinate = `${x},${y}`
  const inbound = x >= 0 && y >= 0 && x < grid.length && y < grid[x].length

  if (!inbound || grid[x][y] === 'W' || visited.has(coordinate)) {
    return []
  }

  visited.add(coordinate)

  const queue = [[x, y, 0]]

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for (let [directionX, directionY] of directions) {
    const currentX = x + directionX
    const currentY = y + directionY
    const currentCoordinate = exploreLand(grid, currentX, currentY, visited)
    queue.push(...currentCoordinate)
  }

  return queue
}

module.exports = {
  bestBridge
}

const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); // -> 2
