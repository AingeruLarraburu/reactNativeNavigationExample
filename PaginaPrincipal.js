import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function PaginaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Principal</Text>
      <Button title="Pagina 1" onPress={() => navigation.navigate("Pagina1")} />
      <Button title="Pagina 2" onPress={() => navigation.navigate("Pagina2")} />
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

export default PaginaPrincipal;
