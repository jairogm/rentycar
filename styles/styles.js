import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      gap: 10,
    },
    carsContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#f0f0f0",
    },
    carContainer: {
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    carImage: {
      width: 80,
      height: 80,
      borderRadius: 0,
      marginRight: 10,
      resizeMode: "contain",
    },
    carDetailsContainer: {
      flex: 1,
    },
    carPlate: {
      fontSize: 18,
      fontWeight: "bold",
    },
    carBrand: {
      fontSize: 16,
      marginTop: 5,
    },
    carState: {
      fontSize: 14,
      color: "gray",
      marginTop: 5,
    },
    imgstyle:{
      width:120,
      height:100,
      marginBottom:35
    }
  });
  