import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "Oops! Sin coincidencias..."}}></Stack.Screen>
    <View style={styles.container}>
      <Text style={styles.text}>Oops...</Text>
      <Link href={"/"} style={styles.button}>Regresar</Link>
    </View>
    </>
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