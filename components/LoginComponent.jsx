import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

//Constants
import { INITIAL_LOGIN_STATE } from "../constants";
import { findUser } from "../utils/helpers";
import { LoginSchema } from "../utils/schemas";

const LoginComponent = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const handleLogin = (values) => {
    const findUserResult = findUser(values);
    if (findUserResult && findUserResult.errorMsg) {
      setErrorMsg(findUserResult.errorMsg);
    } else {
      const { name } = findUserResult;
      localStorage.setItem("isloggedIn", true);
      navigation.navigate("CarList", { name });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>
        INGRESA LOS DATOS DEL USUARIO
      </Text>
      <Formik
        initialValues={INITIAL_LOGIN_STATE}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="username:"
              mode="Flat"
              style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("userName")}
              value={values.userName}
              error={touched.userName && errors.userName}
            />
            <TextInput
              label="Password:"
              mode="flat"
              style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("password")}
              value={values.password}
              error={touched.password && errors.password}
              secureTextEntry={true}
            />

            <View style={styles.buttonsContainer}>
              <Button
                style={{ backgroundColor: "red" }}
                mode="contained"
                onPress={handleSubmit}
              >
                Ingresar
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => navigation.navigate('Register') }
              >
                Registrarse
              </Button>
            </View>
            {errorMsg && (
              <Text style={{ marginTop: 25, color: "#ff0303" }}>
                {errorMsg}
              </Text>
            )}
            {errors.userName && touched.userName && (
              <Text style={{ marginTop: 25, color: "#b5b5b5" }}>
                {errors.userName}
              </Text>
            )}
            {errors.password && touched.password && (
              <Text style={{ marginTop: 25, color: "#b5b5b5" }}>
                {errors.password}
              </Text>
            )}
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginComponent;
