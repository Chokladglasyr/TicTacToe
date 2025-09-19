import { useEffect, useState } from "react";
import { Text } from "react-native";


type Board = {
  row1: ["", "", ""];
  row2: ["", "", ""];
  row3: ["", "", ""];
};
export default function StartGame() {
  const [player, setPlayer] = useState<"x" | "o">("x");
  const [board, setBoard] = useState<Board>({
    row1: ["", "", ""],
    row2: ["", "", ""],
    row3: ["", "", ""],
  });
  const [winner, setWinner] = useState("none")

  useEffect(() => {
    changeTurn(player);
    checkRows(player);
  }, [board]);

  const checkRows = (turn: string) => {
    const isWinner = (currentValue: string) => currentValue === turn;
    if (
      board?.row1.every(isWinner) ||
      board?.row2.every(isWinner) ||
      board?.row3.every(isWinner)
    ) {
      setWinner(turn)
    }
  };
  const makeMove = (player: string) => {
    const newRow2 = [...board.row2]

  }
  const changeTurn = (turn: string) => {
    return turn ? setPlayer("x") : setPlayer("o");
  };
  return (
    <>
    <Text>{player}</Text>
    <Text>{board.row1}</Text>
    <Text>{board.row2}</Text>
    <Text>{board.row3}</Text>
    <Text>{winner}</Text>




    </>
  )
}
