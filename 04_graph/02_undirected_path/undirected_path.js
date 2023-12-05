// Input 1: Array of edges -> Undirected graph
// Input 2 & 3: Two nodes
// Output: Boolean -> Is there a path between nodeA and nodeB?

// Approach: Depth First -> Recursive using getPath() helper function
const undirectedPath = (edges, nodeA, nodeB) => {
  const adjList = buildAdjList(edges);
  return getPath(adjList, nodeA, nodeB);
};

const buildAdjList = (edges) => {
  const adjList = {};

  for(let edge of edges) {
    // edge = [i, j]
    if(!adjList[edge[0]]) {
      adjList[edge[0]] = [edge[1]] // adjList = {i: j}
    } else {
      adjList[edge[0]].push(edge[1])
    }
    
    if(!adjList[edge[1]]) {
      adjList[edge[1]] = [edge[0]] // adjList = {i: j, j: i}
    } else {
      adjList[edge[1]].push(edge[0])
    }
  }

  return adjList;
}

const getPath = (adjList, src, dst) => {
  if(src === dst) return true;

  while(adjList[src].length) {
    const current = adjList[src].pop()
    if(getPath(adjList, current, dst)) return true;
  }

  return false;
}

module.exports = {
  undirectedPath,
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true