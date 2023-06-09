import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import UserScreen from "./User.screen";
import RentScreen from "./Rent.screen";
import CarScreen from "./Car.screen";
const HomeTabsScreen = () => {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //lo que hace es no mostrar cada tittulo del componente....
        tabBarActiveTintColor: "",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#b5b5b5",
        tabBarInactiveBackgroundColor: "#8b0000",
      }}
    >
      <Tab.Screen
        name="User" // !THIS IS THE NAME OF THE ROUTE , WHEN USING NAVIGATION.NAVIGATE USE THIS
        component={CarScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: (tabInfo) => <MaterialIcons name="home" size={22} />,
        }}
      />

      <Tab.Screen
        name="CarList"
        component={CarScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <MaterialIcons name="car-rental" size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Rent"
        component={RentScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <MaterialIcons name="car-rental" size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsScreen;
