// Input: Object -> AdjList -> Directed Graph
// Output: Boolean -> Does the graph have a cycle?
// Check each key of Obj and if there are no empty keys it might have a loop?
// Depth First Traversal on each node.
// if a node's neighbor is in a visited set then it loops return True
// if all traversals end properly return False
const hasCycle = graph => {
  debugger
  const visiting = new Set();
  const visited = new Set();

  for(let node in graph) {
    if(searchGraph(graph, node, visiting, visited)) return true;
  }

  return false;
};

const searchGraph = (graph, node, visiting, visited) => {
  debugger
  if(visited.has(node)) return false;
  if(visiting.has(node)) return true;

  visiting.add(node);

  for(let neighbor of graph[node]) {
    if(searchGraph(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  // We pass if there are no values in the graph[node] meaning we have hit the end of a traversal.
  visiting.delete(node);
  visited.add(node);

  return false;
};

module.exports = {
  hasCycle
};

// console.log(hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
// })); // -> true

console.log(
  hasCycle({
    b: ['c'],
    c: ['d'],
    d: [],
    a: ['b', 'c']
  })
); // -> false

// console.log(hasCycle({
//   b: [],
//   c: [],
//   e: ["f"],
//   a: ["b", "c"],
//   f: ["e"],
// })); // -> true

// console.log(hasCycle({
//   r: ["t", "u"],
//   s: [],
//   t: [],
//   q: ["r", "s"],
//   u: [],
//   v: ["w"],
//   w: [],
//   x: ["w"],
// })); // -> false

// console.log(hasCycle({
//   b: ["c"],
//   c: ["a"],
//   g: [],
//   a: ["b"],
// })); // -> true

// console.log(hasCycle({
//   b: ["c"],
//   c: ["d"],
//   d: ["b"],
//   a: ["b"],
// })); // -> true
