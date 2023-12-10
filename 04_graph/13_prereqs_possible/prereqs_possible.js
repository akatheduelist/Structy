// Is it possible to complete all courses?
// Build an adjList from the edge list given
// Use the adjList to do a depth first recursive traversal using the visiting and visited white-grey-black logic

const prereqsPossible = (numCourses, prereqs) => {
  // debugger;
  const visiting = new Set();
  const visited = new Set();
  const adjList = buildAdjList(prereqs);

  for(let course in adjList) {
    debugger;
    if(searchList(adjList, course, visited, visiting)) return false;
  }

  return true;
};

const buildAdjList = (prereqs) => {
  // debugger;
  const adjList = {};

  for(let [courseA, courseB] of prereqs) {
    // debugger;
    if(!(courseA in adjList)) {
      adjList[courseA] = [courseB];
    } else {
      adjList[courseA].push(courseB);
    }

    // debugger;
    if(!(courseB in adjList)) {
      adjList[courseB] = [];
    }
  }

  // debugger;
  return adjList;
};

const searchList = (adjList, course, visited, visiting) => {
  debugger;
  if(visited.has(String(course))) return false; // If we've already marked it visited then we know it's a part of a non-loop and can just return to avoid unnecessary traversals.
  if(visiting.has(String(course))) return true; // If it's a part of our current visiting set then we know it's going loop and we return true.

  visiting.add(String(course));

  for(let nextCourse of adjList[course]) {
    debugger;
    if(searchList(adjList, nextCourse, visited, visiting)) return true; // Boolean -> True if there is a loop; Else False
  }

  // If we reach the end and hit an empty nextCourse then we know we have reached a course with no pre-req and no loop.
  // We take go up the stack taking each course out of visiting and add them to visited.
  visiting.delete(String(course));
  visited.add(String(course));

  // Return False if we hit this part of the function without early returning above there are a. no loops and b. hasn't been visited before.
  return false;
};

module.exports = {
  prereqsPossible,
};

// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> false