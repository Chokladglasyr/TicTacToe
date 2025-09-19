const board = { row1: ["", "", ""], row2: ["", "", ""], row3: ["", "", ""] };

let player1 = "x";
let player2 = "o";

const checkRows = (player: string) => {
  const isWinner = (currentValue: string) => currentValue === player;
  if (
    board?.row1.every(isWinner) ||
    board?.row2.every(isWinner) ||
    board?.row3.every(isWinner)
  ) {
    return true;
  }
};
const newBoard = { ...board };

const makeMove = (
  board: any,
  player: string,
  placement: string[],
  index: number
) => {
  const newRow = [...placement];
  newRow[index] = player;
 const updatedBoard = {
    row1: placement === board.row1 ? newRow : board.row1,
    row2: placement === board.row2 ? newRow : board.row2,
    row3: placement === board.row3 ? newRow : board.row3,
  };
  return updatedBoard;
};
let updatedBoard = (makeMove(newBoard, player1, newBoard.row2, 1));
updatedBoard = (makeMove(updatedBoard, player1, updatedBoard.row2, 0));
updatedBoard = (makeMove(updatedBoard, player1, updatedBoard.row1, 0));
updatedBoard = (makeMove(updatedBoard, player2, updatedBoard.row3, 3));
console.log(updatedBoard)
const changeTurn = (player: string) => {};
checkRows("x");
