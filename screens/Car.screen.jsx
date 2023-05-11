import React, { useContext } from "react";
import { Button, Text } from "react-native-paper";
import CarListComponent from "../components/CarListComponent";
import { SaveCarScreen } from "./SaveCar.screen";
import { RentedCarListComponent } from "../components/RentedCarListComponent";
import { AppContext } from "../context/AppProvider";
import { TouchableOpacity } from "react-native-web";
import { styles } from "../styles/styles";

const CarScreen = ({ route, navigation }) => {
  // const { name } = route.params;
  const { setShowRegisterCarModal } = useContext(AppContext);
  return (
    <div>
      <h2>Welcome Back!</h2>
      <Button
        style={styles.button}
        onPress={() => setShowRegisterCarModal(true)}
      >
        <Text style={styles.buttonText}>Registrar nuevo carro</Text>
      </Button>
      <CarListComponent />
      <RentedCarListComponent />

      <SaveCarScreen />
    </div>
  );
};

export default CarScreen;
