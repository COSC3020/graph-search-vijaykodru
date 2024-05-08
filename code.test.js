const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Updated graph structures

let Graph1 = [
  [1, 2, 3],
  [4, 5],
  [6],
  [5],
  [],
  [4],
  []
];

let Graph2 = [[1, 2, 3, 4, 5, 6], [], [], [], [], [], []];

let Graph3 = [
  [1], 
  [2], 
  [3], 
  [4], 
  [5], 
  [6]
];

let Graph4 = [[1,2], [3,4], [5,6], [], [], [], []];

let Graph5 = [
  [1], 
  [2, 3], 
  [4], 
  [5, 6], 
  [], 
  []
];

assert(JSON.stringify(depthFirstSearch(Graph1,0,3)) === JSON.stringify([0, 3]));
assert(JSON.stringify(depthFirstSearch(Graph1,0,7)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([],0,0)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([[]],0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(Graph2,0,6)) === JSON.stringify([0, 6]));
assert(JSON.stringify(depthFirstSearch(Graph2, 0, 0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(Graph3,0,4)) === JSON.stringify([0, 1, 2, 3, 4]));
assert(JSON.stringify(depthFirstSearch(Graph4,0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(Graph4,0,5)) === JSON.stringify([0, 2, 5]));
assert(JSON.stringify(depthFirstSearch(Graph5,3,5)) === JSON.stringify([3, 5]));
assert(JSON.stringify(depthFirstSearch(Graph5,0,5)) === JSON.stringify([0, 1, 3, 5]));
