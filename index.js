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

// breath first search
function buildSearchArray(board, startIndex) {
  let array = [];
  for (let i = 0; i < board.length; i++) {
    array[i] = {
      distance: null,
      parent: null,
    };
  }
  array[startIndex].distance = 0;
  return array;
}

// return list of all neighbors of the next moves
function buildAdjacentList(board) {
  let adjacentList = [];
  for (let i = 0; i < board.length; i++) {
    let neighbors = [];
    for (let j = 0; j < 8; j++) {
      let neighbor = findNextMove(j, board[i][0], board[i][1]);
      if (containsSpot(neighbor)) {
        neighbors.push(getIndex(board, neighbor));
      }
    }
    adjacentList[i] = neighbors;
  }
  return adjacentList;
}

// All possible moves
function findNextMove(index, x, y) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  return [x + directions[index][0], y + directions[index][1]];
}

// move exist?
function containsSpot(target) {
  return target[0] > 0 && target[0] < 8 && target[1] > 0 && target[1] < 8;
}

// create Path
function createPath(board, infoArray, item, index, newArray) {
  if (item.parent !== null) {
    newArray.push(board[index]);
    createPath(board, infoArray, infoArray[item.parent], item.parent, newArray);
  }
}

// KnightMoves()
function KnightMoves(start, end) {
  const board = buildBoard();
  const startIndex = getIndex(board, start);
  const endIndex = getIndex(board, end);
}
