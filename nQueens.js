/*
    define function that can determine whether a position can be attacked by a queen.
    place a queen
    queen needs to be placed in an array where we track the positions of queens
    iterate each square until a square which is not covered by any queen
    on each square we run the queen position function for each queen placed.
    if square not covered, place queen.
    if get to end of board without all queens placed, restart algo but with +1 starting position

*/

const log = console.log;

const getX = (pos, width) => {
  const mod = pos % width;
  return mod === 0 ? width : mod;
};

const getY = (pos, width) => Math.ceil(pos / width);

//determines whether a position is safe from a queen

const safe = (pos, queenPos, width, debug = false) => {
  const [x, y] = [getX(pos, width), getY(pos, width)];
  const [qX, qY] = [getX(queenPos, width), getY(queenPos, width)];

  //vert and horiz lines
  if (x === qX || y === qY) return false;
  //diags
  if (x - y === qX - qY || x + y === qX + qY) return false;

  if (debug) log({ x, y, qX, qY });

  return true;
};

/*
    places a queen at an arbitrary position then iterates through 
    every position on the board, placing a queen if the position is safe 
    from other queens
*/

const placeQueens = (start, width) => {
  const queens = [start];
  for (let i = 1; i <= width * width; i++) {
    const results = queens.map((queen) => safe(i, queen, width));
    if (results.filter((res) => res === false).length === 0) {
      queens.push(i);
    }
  }
  return queens;
};

/*
    prints an ascii board
*/

const printBoard = (queens, width) => {
  const boardString = [];
  for (let i = 1; i <= width * width; i++) {
    if (i % width === 1) {
      boardString.push("\n");
    }
    queens.includes(i) ? boardString.push("@") : boardString.push("_");
  }
  log(boardString.join(","));
};

/*
  runs placeQueens starting at the first position on the board then
  moves the starting position by one until it finds a possible correct
  board or exhausts every starting position
*/

const solveQueens = (n) => {
  for (let start = 1; start <= n * n; start++) {
    const result = placeQueens(start, n);
    if (result.length === n) {
      printBoard(result, n);
      break;
    }
  }
};

module.exports = {
  getX,
  getY,
  safe,
  placeQueens,
  solveQueens,
};
