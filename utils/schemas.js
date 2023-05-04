import * as Yup from "yup";
const users = JSON.parse(localStorage.getItem('users')) || [];

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Solo se permiten letras y espacios")
    .required("Campo obligatorio"),
  userName: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, "Solo se permiten letras y números")
    .required("Campo obligatorio")
    .test("uniqueUserName", "El nombre de usuario ya existe", function (value) {
      return !users.some((user) => user.userName === value);
    }),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "La contraseña debe contener al menos 6 caracteres, letras y números")
    .required("Campo obligatorio"),
})


export const LoginSchema = Yup.object().shape({
  userName: Yup
    .string()
    .required("Ingresa un nombre de usuario")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "El nombre de usuario solo puede contener letras y números"
    ),
  password: Yup
    .string()
    .required("Ingresa una contraseña")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
      "La contraseña debe contener al menos una letra y un número"
    ),
});