// Input: ajdList -> Directed
// Output: Int -> Length longest path in the graph
// Depth first recrsive traversal returning the length of the traversal
// Do not need to keep track of visisted to prevent loops but do need to keep track of all paths.
// If return is larger replace counter
// Return counter
const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = 1 + maxDistance;
  return distance[node];
};

module.exports = {
  longestPath,
};

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

console.log(longestPath(graph)); // -> 2

// const graph = {
//   a: ['c', 'b'],
//     b: ['c'],
//     c: [],
//     q: ['r'],
//     r: ['s', 'u', 't'],
//     s: ['t'],
//     t: ['u'],
//     u: []
//   };
  
// console.log(longestPath(graph)); // -> 4