export const findUser = (formValues) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const { userName, password } = formValues;
  let findUser = users.find(
    (usr) => usr.userName === userName
    );
    if (findUser == undefined) {
      return {
        errorMsg: "El nombre de usuario no existe",
      };
    } else if (findUser.password !== password) {
      return {
        errorMsg: "La contraseña es incorrecta",
      };
    } else {
      return findUser;
    }
  }
  export const registerUser = (formValues) => {
  const users = JSON.parse(localStorage.getItem('users'))
  const newUser = {
    name: formValues.name,
    userName: formValues.userName,
    password: formValues.password,
  };
  localStorage.setItem("users", JSON.stringify([...users, newUser]))
  return {
    successMsg: "Usuario registrado exitosamente",
  };
};