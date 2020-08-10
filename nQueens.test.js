const {getX, getY, safe, solveQueens} = require("./nQueens.js");
const {isEqual} = require("lodash");

const assert = (func, params, expected, message) => {
   const result = func(...params);
   let testStr = isEqual(result, expected) ? "Success" : "Failure";
   console.log(`${message}: ${testStr}`);
}

//getX tests

assert(getX, [6, 4], 2, "getX Test 1");
assert(getX, [10, 4], 2, "getX Test 2");

//getY tests

assert(getY, [12, 4], 3, "getY Test 1");
assert(getY, [9, 4], 3, "getY Test 2");

//safe tests

assert(safe, [1, 10], true, "safe Test 1");
assert(safe, [1, 6, 4], false, "safe Test 2");
assert(safe, [5, 15, 4], false, "safe Test 3");
assert(safe, [1, 12, 4], true, "safe Test 4");
assert(safe, [8, 11, 4], false, "safe Test 5");

// safe(8, 11, 4, true);
// solveQueens(4);