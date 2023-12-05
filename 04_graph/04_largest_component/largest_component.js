const largestComponent = (graph) => {
  let largest = 0; // 0
  const visited = new Set(); // {}

  for(let key in graph) {
    let componentLength = componentSearch(graph, key, visited);
    if(componentLength > largest) largest = componentLength;
  }

  return largest;
};

const componentSearch = (graph, node, visited) => {
  if(visited.has(String(node))) return 0;
  
  visited.add(String(node));
  let currentLength = 1;

  for(let neighbor of graph[node]) {
    currentLength += componentSearch(graph, neighbor, visited) // 8
  }

  return currentLength;
}

module.exports = {
  largestComponent,
};

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4