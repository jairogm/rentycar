import React, { useEffect } from "react";
import { View } from "react-native";
import LoginComponent from "../components/LoginComponent";
import { styles } from "../styles/styles";
const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginComponent navigation={navigation} />
    </View>
  );
};

export default UserScreen;
