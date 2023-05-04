import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../styles/styles";
const cars2 = [
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


const CarListComponent = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cars")) {
      setCarList(JSON.parse(localStorage.getItem("cars")));
    }
  }, [localStorage.getItem("cars")]);
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
