// Build a board representing a board representing all spots
function buildBoard() {
  let board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }
  return board;
}
console.log(buildBoard());

// Traverse board
function getIndex(board, target) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === target[0] && board[i][1] === target[1]) {
      return i;
    }
  }
}
