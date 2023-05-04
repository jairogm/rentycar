import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";
import { useFormik } from "formik";

//Constants
import { INITIAL_REGISTER_STATE } from "../constants";
import { RegisterSchema } from "../utils/schemas";
import { registerUser } from "../utils/helpers";

const RegisterComponent = ({ navigation }) => {
  const [successMsg, setSuccessMsg] = useState(null);

  const formik = useFormik({
    initialValues: INITIAL_REGISTER_STATE,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    const registerUserResult = registerUser(values);
    if (registerUserResult && registerUserResult.successMsg) {
      setSuccessMsg(registerUserResult.successMsg);
    } else {
    }
  };
  const { name, userName, password } = formik.values;

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        REGISTRO
      </Text>
      <TextInput
        label="Name:"
        mode="flat"
        style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
        onChangeText={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
        value={name}
      />
      {formik.touched.name && formik.errors.name && (
        <Text style={{ color: "red" }}>{formik.errors.name}</Text>
      )}

      <TextInput
        label="username:"
        mode="Flat"
        style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
        onChangeText={formik.handleChange("userName")}
        onBlur={formik.handleBlur("userName")}
        value={userName}
      />
      {formik.touched.userName && formik.errors.userName && (
        <Text style={{ color: "red" }}>{formik.errors.userName}</Text>
      )}

      <TextInput
        label="Password:"
        mode="flat"
        style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={password}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}

      <Button
        style={{ marginTop: 40, backgroundColor: "red" }}
        mode="contained"
        onPress={formik.handleSubmit}
      >
        Registrarse
      </Button>

      {successMsg && (
        <>
          <Button
            style={{ marginTop: 40 }}
            mode="outlined"
            onPress={() => navigation.navigate("User")}
          >
            Volver al login
          </Button>
          <Text style={{ marginTop: 25, color: "#43a207fa" }}>
            {successMsg}
          </Text>
        </>
      )}
    </View>
  );
};

export default RegisterComponent;
