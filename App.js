import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaginaPrincipal from "./PaginaPrincipal";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaPrincipal">
        <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
