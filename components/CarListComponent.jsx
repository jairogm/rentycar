import React, { useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../styles/styles";
import { AppContext } from "../context/AppProvider";

const CarListComponent = () => {
 const { carList } = useContext(AppContext)
  return (
    <View style={styles.carsContainer}>
      {carList.map((car, index) => {
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

export default CarListComponent;
