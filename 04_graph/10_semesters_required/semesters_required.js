const semestersRequired = (numCourses, prereqs) => {
  let minSemesters = 0
  const distance = {};
  const adjList = makeAdjList(numCourses, prereqs)

  for(let key in adjList) {
    distance[key] = findLength(adjList, key, distance);
  }

  return Math.max(...Object.values(distance))
};

const makeAdjList = (numCourses, prereqs) => {
  const adjList = {}

  for(let i=0; i<numCourses; i++) {
    adjList[i] = []
  }

    for(let prereq of prereqs) { // [A, B]
      const [prev, next] = prereq;
      adjList[next].push(prev)
    }

  return adjList
}

const findLength = (adjList, key, distance) => {
  if(!adjList[key].length) return 1

  let longest = 1
  for(let currentNode of adjList[key]){
    const currentPath = 1 + findLength(adjList, currentNode);
    // console.log("node", currentNode, adjList[currentNode], currentPath)
    if(currentPath > longest) longest = currentPath
  }

  return longest
}

module.exports = {
  semestersRequired,
};

// const numCourses = 6;
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ];

// console.log(semestersRequired(numCourses, prereqs)); // -> 3

// const numCourses = 7;
// const prereqs = [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ];
// console.log(semestersRequired(numCourses, prereqs)); // -> 5

const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 2