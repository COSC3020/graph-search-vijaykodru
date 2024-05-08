const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Updated graph structures

let classGraph = [
  [1, 2, 3],
  [4, 5],
  [6],
  [5],
  [],
  [4],
  []
];

let ferrisWheel = [[1, 2, 3, 4, 5, 6], [], [], [], [], [], []];

let linear = [
  [1], 
  [2], 
  [3], 
  [4], 
  [5], 
  [6]
];

let tree = [[1,2], [3,4], [5,6], [], [], [], []];

let A = [
  [1], 
  [2, 3], 
  [4], 
  [5, 6], 
  [], 
  []
];

// Updated assertions with new test cases

assert(JSON.stringify(depthFirstSearch(classGraph,0,3)) === JSON.stringify([0, 1, 2, 5, 4, 3]));
assert(JSON.stringify(depthFirstSearch(classGraph,0,7)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([],0,0)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([[]],0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(ferrisWheel,0,6)) === JSON.stringify([0, 1, 2, 3, 4, 5, 6]));
assert(JSON.stringify(depthFirstSearch(ferrisWheel, 0, 0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(linear,0,4)) === JSON.stringify([0, 1, 2, 3, 4]));
assert(JSON.stringify(depthFirstSearch(linear,4,3)) === JSON.stringify([4, 3]));
assert(JSON.stringify(depthFirstSearch(tree,0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(tree,0,5)) === JSON.stringify([0, 2, 5]));
assert(JSON.stringify(depthFirstSearch(A,3,5)) === JSON.stringify([3, 5]));
assert(JSON.stringify(depthFirstSearch(A,0,5)) === JSON.stringify([0, 1, 2, 3, 5]));
