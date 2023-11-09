import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Pagina2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagina2</Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate("PaginaPrincipal")}
      />
      <Button title="Pagina 1" onPress={() => navigation.navigate("Pagina1")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Pagina2;
