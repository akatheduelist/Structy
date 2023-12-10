// Input 1: Array of edges in sub-arrays.
// Input 2 & 3: Src (nodeA) & Dst (nodeB) in that order.
// Output: Lenght of the shortest path from src to dst. Lenght is the number of edges (not nodes). If no path between return -1.

// *Create an adjList using a helper function.
// Traverse the adjList (depth first or breadth first manner).
// While traversing the list if dst is not found return 0, if dst is found return 1 + a counter going to that level.
// ? In order to find the shortest path do we need to traverse all paths ?
const shortestPath = (edges, nodeA, nodeB) => {
  const adjList = makeList(edges);
  const visited = new Set();

  return graphSearch(adjList, nodeA, nodeB, visited)
};

const makeList = (edges) => {
  const adjList = {};

  // Convert edges into key value pair hash map
  for(let edge of edges) { // What is edge? ['w', 'x']
    const start = edge[0]; // 'w'
    const end = edge[1]; // 'x'

    if(!adjList[start]){
      adjList[start] = [end];
    } else {
      adjList[start].push(end);
    };

    if(!adjList[end]){
      adjList[end] = [start];
    } else {
      adjList[end].push(start);
    }
  }

  return adjList;
};

const graphSearch = (adjList, src, dst, visited) => {
  const queue = [[src, 0]]

  while(queue.length) {
    const [currentVal, currentLevel] = queue.shift()

    if(currentVal === dst) return currentLevel;
    if(!visited.has(String(currentVal))) {
      visited.add(String(currentVal));
      for(let neighbor of adjList[currentVal]) {
        queue.push([neighbor, currentLevel+1])
      }
    }
  }

  return -1;
}

module.exports = {
  shortestPath,
};

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2