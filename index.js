const {solveQueens} = require('./nQueens.js');

const n = parseInt(process.argv[2]);

if(!isNaN(n)){
    solveQueens(n);
} else {
    console.log("Invalid argument");
}
