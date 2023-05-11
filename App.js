import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import HomeTabsScreen from "./screens/HomeTabs.screen";
import RegisterScreen from "./screens/Register.screen";
import { AppProvider } from "./context/AppProvider";

export default function App() {

 

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    if (!localStorage.getItem("cars")) {
      localStorage.setItem("cars", JSON.stringify([]));
    }
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabsScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
