// Approach: 
// Input 1: Obj -> Adj List -> Graph -> Directional -> Non-Cyclic
// Input 2: Source
// Input 3: Destination
// Output: Boolean -> Is there a path from the source to dest?

const hasPath = (graph, src, dst) => {
  const stack = [src]; // ['g', 'g']
  // console.log(stack)
  while(stack.length) {
    const current = stack.pop(); // 'i'

    if(current === dst) return true;
    
    for(let neighbor of graph[current]) {
      if(neighbor === dst) return true; // 'k' -> Return True
      stack.push(neighbor);
    };
  }

  return false;
};

module.exports = {
  hasPath,
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph, 'f', 'k')); // true