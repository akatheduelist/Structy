// Input: adjList -> Undirected Graph
// Output: Number of connected components in the graph

// Approach: Depth First -> Recursive using helper function
const connectedComponentsCount = (graph) => {
  let count = 0; // 0
  const visited = new Set(); // {}

  for(let key in graph){
    if(traverseComponent(graph, key, visited)) {
      count++;
    }  
  }
  return count;
};

const traverseComponent = (graph, current, visited) => {
  if(visited.has(String(current))) return;
  visited.add(String(current))

  for(let neighbor of graph[current]) {
    traverseComponent(graph, neighbor, visited)
  }
  return true;
}

module.exports = {
  connectedComponentsCount,
};

console.log(connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
})); // -> 3