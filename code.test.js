const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');


let Graph1 = [
    [1, 2, 3],
    [4, 5],
    [3, 5],
    [4],
    [6],
    [],
    [7],
    []
];

let Graph2 = [
    [1], 
    [2, 3], 
    [4, 5], 
    [], 
    [5], 
    []
];


let Graph3 = [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0]
];

let Graph4 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
];

let Graph5 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];



// Graph1
assert(JSON.stringify(depthFirstSearch(Graph1, 0, 3)) === JSON.stringify([0, 2, 3]));
assert(JSON.stringify(depthFirstSearch(Graph1, 0, 7)) === JSON.stringify([]));

// Graph2
assert(JSON.stringify(depthFirstSearch(Graph2, 0, 5)) === JSON.stringify([0, 1, 2, 4, 5]));

// Graph3
assert(JSON.stringify(depthFirstSearch(Graph3, 0, 4)) === JSON.stringify([0, 1, 4]));
assert(JSON.stringify(depthFirstSearch(Graph3, 1, 3)) === JSON.stringify([]));

// Graph4
assert(JSON.stringify(depthFirstSearch(Graph4, 0, 4)) === JSON.stringify([0, 1, 4]));
assert(JSON.stringify(depthFirstSearch(Graph4, 1, 2)) === JSON.stringify([1, 0, 2]));
assert(JSON.stringify(depthFirstSearch(Graph4, 3, 3)) === JSON.stringify([3]));

// Graph5
assert(JSON.stringify(depthFirstSearch(Graph5, 0, 2)) === JSON.stringify([0, 1, 2]));
assert(JSON.stringify(depthFirstSearch(Graph5, 2, 1)) === JSON.stringify([2, 0, 1]));
assert(JSON.stringify(depthFirstSearch(Graph5, 1, 0)) === JSON.stringify([1, 0]));
