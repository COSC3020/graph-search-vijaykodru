const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


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

let Graph6 = [];


// Graph1
assert.deepStrictEqual(depthFirstSearch(Graph1, 0, 3), [0, 2, 3]);

// Graph2
assert.deepStrictEqual(depthFirstSearch(Graph2, 0, 5), [0, 1, 2, 4, 5]);

// Graph3
assert.deepStrictEqual(depthFirstSearch(Graph3, 0, 4), []);

// Graph4
assert.deepStrictEqual(depthFirstSearch(Graph4, 0, 4), []);
assert.deepStrictEqual(depthFirstSearch(Graph4, 3, 3), [3]);

// Graph5
assert.deepStrictEqual(depthFirstSearch(Graph5, 2, 2), [2]);
assert.deepStrictEqual(depthFirstSearch(Graph5, 2, 1), []);
assert.deepStrictEqual(depthFirstSearch(Graph5, 1, 3), []);

// Graph6
assert.deepStrictEqual(depthFirstSearch(Graph6, 0, 1), []);