import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  }, 
  text:{
    color: "#fff",
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  }
});