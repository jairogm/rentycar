import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";

const LoginScreen = () => {
  
  //TODO: Use recat hook form here, or build a custom hook or use just one state for it
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>
        INGRESA LOS DATOS DEL USUARIO
      </Text>
      <TextInput
        label="Email:"
        mode="Flat"
        style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        label="Password:"
        mode="flat"
        style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />

      <Button
        style={{ marginTop: 40, backgroundColor: "red" }}
        mode="contained"
        onPress={() => {
          let findUser = users.find(
            (usr) => usr.email === email && usr.password === password
          );
          console.log(findUser);
          if (findUser != undefined) {
            const { name, email } = findUser;
            setErrormsg("");
            setEmail("");
            setPassword("");
            navigation.navigate("Contacts", { name, email });
          } else {
            setErrormsg("Correo y/o contraseña es incorrecto");
          }
        }}
      >
        Ingresar
      </Button>

      <Text style={{ marginTop: 25, color: "#b5b5b5" }}>{errormsg}</Text>
    </View>
  );
};

export default LoginScreen;
