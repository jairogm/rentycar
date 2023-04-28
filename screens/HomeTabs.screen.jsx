import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";


import LoginScreen from "./Login.screen"
import UserScreen from "./User.screen"
import RentScreen from "./Rent.screen"
const HomeTabsScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //lo que hace es no mostrar cada tittulo del componente....
        tabBarActiveTintColor: "Blue",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#b5b5b5",
        tabBarInactiveBackgroundColor: "#8b0000",
      }}
    >
      <Tab.Screen
        name="Login" // !tHIS IS THE NAME OF THE ROUTE , WHEN USING NAVIGATION.NAVIGATE USE THIS
        component={LoginScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: (tabInfo) => <MaterialIcons name="home" size={22} />,
        }}
      />
      <Tab.Screen
        name="Rent"
        component={RentScreen}
        options={{
          tabBarIcon: (tabInfo) => <MaterialIcons name="category" size={22} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: (tabInfo) => <MaterialIcons name="call" size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsScreen;
