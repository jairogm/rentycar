import React from "react";
import { Button } from "react-native-paper";
import CarListComponent from "../components/CarListComponent";
import { SaveCarScreen } from "./SaveCar.screen";

const CarScreen = ({ route, navigation }) => {
  // const { name } = route.params;

  return (
    <div>
      <h2>Welcome Back!</h2>

      <CarListComponent />
      <SaveCarScreen />
    </div>
  );
};

export default CarScreen;
