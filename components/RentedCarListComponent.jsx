import React, { useContext } from "react";
import { View } from "react-native-web";
import { AppContext } from "../context/AppProvider";
import { styles } from "../styles/styles";

export const RentedCarListComponent = () => {
  const { rentedList } = useContext(AppContext);
  if (!rentedList) {
    return <Text style={styles.carPlate}>No hay carros rentados</Text>;
  }
  return (
    <View style={styles.carsContainer}>
      {rentedList.map((car, index) => {
        return (
          <View key={index} style={styles.carContainer}>
            <Image source={{ uri: car.imageUrl }} style={styles.carImage} />
            <View style={styles.carDetailsContainer}>
              <Text style={styles.carPlate}>{car.plateNumber}</Text>
              <Text style={styles.carBrand}>{car.brand}</Text>
              <Text style={styles.carState}>{car.state}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
