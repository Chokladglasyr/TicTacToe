import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export const Box = ({turn}: {turn: string}) => {
  const [color, setColor] = useState("#d9d9d9")
  const [nextTurn, setNextTurn] = useState(turn) 
  const checkBoxes = () => {
    if(turn === "red") {
      setColor("#ff0000")
      setNextTurn("blue")
    } else {
      setColor("#0000ff")
      setNextTurn("red")
    }
  }

  return (
    <>
      <Pressable
      onPress={checkBoxes}
        style={[styles.toe, {backgroundColor: color} ]}
      ></Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  toe: {
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
    margin: 5,
  },
});
