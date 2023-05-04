import React from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const RegisterCarComponent = () => {
  const validationSchema = yup.object().shape({
    plateNumber: yup
      .string()
      .required("Ingresa el número de placa")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "El número de placa solo puede contener letras y números"
      ),
    brand: yup.string().required("Ingresa la marca del vehículo"),
    state: yup.string().required("Ingresa el estado del vehículo"),
    imageUrl: yup.string().required("Ingresa la URL de la imagen del vehículo"),
  });

  const handleRegister = (values) => {
  const cars = JSON.parse(localStorage.getItem('cars'))
  const newCar = {
    plateNumber: values.plateNumber,
    brand: values.brand,
    state: values.state,
    imageUrl: values.imageUrl
  }
    console.log(values);

    localStorage.setItem("cars", JSON.stringify([...cars, newCar]));
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>
        REGISTRA UN NUEVO VEHÍCULO
      </Text>
      <Formik
        initialValues={{
          plateNumber: "",
          brand: "",
          state: "",
          imageUrl: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="Número de placa:"
              mode="Flat"
              style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("plateNumber")}
              value={values.plateNumber}
              error={touched.plateNumber && errors.plateNumber}
            />
            {errors.plateNumber && touched.plateNumber && (
              <Text style={{ marginTop: 25, color: "#da3333" }}>
                {errors.plateNumber}
              </Text>
            )}
            <TextInput
              label="Marca:"
              mode="flat"
              style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("brand")}
              value={values.brand}
              error={touched.brand && errors.brand}
            />

            {errors.brand && touched.brand && (
              <Text style={{ marginTop: 25, color: "#da3333" }}>
                {errors.brand}
              </Text>
            )}
            <TextInput
              label="Estado:"
              mode="flat"
              style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("state")}
              value={values.state}
              error={touched.state && errors.state}
            />
            {errors.state && touched.state && (
              <Text style={{ marginTop: 25, color: "#da3333" }}>
                {errors.state}
              </Text>
            )}
            <TextInput
              label="URL de la imagen:"
              mode="flat"
              style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
              onChangeText={handleChange("imageUrl")}
              value={values.imageUrl}
              error={touched.imageUrl && errors.imageUrl}
            />
            {errors.imageUrl && touched.imageUrl && (
              <Text style={{ marginTop: 25, color: "#da3333" }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button
              style={{ marginTop: 40, backgroundColor: "red" }}
              mode="contained"
              onPress={handleSubmit}
            >
              Registrar vehículo
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterCarComponent;
