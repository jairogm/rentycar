import React from "react";
import { Button } from "react-native-paper";
import CarListComponent from "../components/CarListComponent";
import { SaveCarScreen } from "./SaveCar.screen";
import { RentedCarListComponent } from "../components/RentedCarListComponent";

const CarScreen = ({ route, navigation }) => {
  // const { name } = route.params;

  return (
    <div>
      <h2>Welcome Back!</h2>

      <CarListComponent />
      <RentedCarListComponent />

      <SaveCarScreen />
    </div>
  );
};

export default CarScreen;
