
import { StyleSheet, Text, View } from "react-native";
import StartGame from "./utils/functions";


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
    <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  toe: {
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
    margin: 5,
  },
  tac: {
    flexDirection: "row",
  },
  tic: {

  }
});
