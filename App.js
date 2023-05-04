import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import HomeTabsScreen from "./screens/HomeTabs.screen";
import RegisterScreen from "./screens/Register.screen";

export default function App() {

  const INITIAL_CARS_VALUE = [
    {
      plateNumber: "123ABC",
      brand: "Ford",
      state: "available",
      imageUrl:
        "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      plateNumber: "456DEF",
      brand: "Toyota",
      state: "unavailable",
      imageUrl:
        "https://images.pexels.com/photos/13662314/pexels-photo-13662314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // add more cars here
  ];

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    if (!localStorage.getItem("cars")) {
      localStorage.setItem("cars", JSON.stringify(INITIAL_CARS_VALUE));
    }
  }, []);
  return (
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
