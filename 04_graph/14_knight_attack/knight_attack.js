/* 
  Inputs = Listed below
  -> n = the length of the chess board
  -> kr = the starting row of the knight
  -> kc = the starting column of the knight
  -> pr = the row of the pawn
  -> pc = the column of the pawn

  Output = Int
  -> Min number of moves for Knight to land on top of pawn.
  -> If no attack possible return Null.

  Knight can move in "L" shape, 2 spaces in any direction then 1 space perpendicular to first direction.
  -> Knight has 8 possible positions it can move to.
*/
const knightAttack = (n, kr, kc, pr, pc) => {
  // Make the Chess Board
  const board = [];

  // Create a grid array with n sub-arrays, filled with n "0"s giving us an n*n grid.
  for(let i = 0; i < n; i++) {
    board.push(new Array(n).fill(0));
  }
  board[kr][kc] = "K"; // Knight positioned at kr,kc
  board[pr][pc] = "P"; // Pawn positioned at pr,pc

  // Create a queue of moves the Knight can make. Initialized to move 0.
  const visited = new Set();
  const queue = [[kr, kc, 0]];

  while(queue.length) {
    const [currentX, currentY, moveNumber] = queue.shift();
    const currentCoordinate = currentX + "," + currentY;
    const inbound = currentX >= 0 && currentY >= 0 && currentX < board.length && currentY < board[currentX].length;
    const visitedAlready = visited.has(currentCoordinate);
    
    visited.add(currentCoordinate);
    
    if(!visitedAlready && inbound) {
      const currentValue = board[currentX][currentY];
      
      if(currentValue === "P") return moveNumber; // Found Pawn!
      
      const directions = [[-1, -2], [-1, +2], [-2, -1], [-2, +1], [+2, +1], [+2, -1], [+1, +2], [+1, -2]];

      for(let [deltaX, deltaY] of directions) {
        const moveX = currentX + deltaX;
        const moveY = currentY + deltaY;
        const nextMove = [moveX, moveY, moveNumber + 1]; // Possible move in 8 directions
        queue.push(nextMove);
      }
    }
  }

  return null;
};

module.exports = {
  knightAttack,
};

// console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
// console.log(knightAttack(8, 1, 1, 2, 3)); // -> 1
// console.log(knightAttack(8, 0, 3, 4, 2)); // -> 3
// console.log(knightAttack(8, 0, 3, 5, 2)); // -> 4
console.log(knightAttack(24, 4, 7, 19, 20)); // -> 10
console.log(knightAttack(100, 21, 10, 0, 0)); // -> 11
console.log(knightAttack(3, 0, 0, 1, 2)); // -> 1
console.log(knightAttack(3, 0, 0, 1, 1)); // -> null