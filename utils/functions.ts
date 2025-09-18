import { useState } from "react";

const [turn, setTurn] = useState("player1");

const row = {
  row1: ["", "", ""],
  row2: ["", "", ""],
  row3: ["", "", ""],
};

const newBoard = row;
export const checkRows = (turn: string) => {
  console.log(newBoard);

  const isWinner = (currentValue: string) => currentValue === turn;
  if (
    newBoard.row2.every(isWinner) ||
    newBoard.row2.every(isWinner) ||
    newBoard.row3.every(isWinner)
  ) {
    return true;
  }
};

export const changeTurn = (turn: string) => {
  return turn ? setTurn("player1") : setTurn("player2");
};
changeTurn(turn)
checkRows("x");
console.log(turn)
