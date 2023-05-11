import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [rentedList, setrentedList] = useState([]);
  const [showRegisterCarModal, setShowRegisterCarModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cars")) {
      setCarList(JSON.parse(localStorage.getItem("cars")));
    }
  }, []);
  const contextValues = {
    carList,
    setCarList,
    rentedList,
    setrentedList,
    showRegisterCarModal,
    setShowRegisterCarModal
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export { AppProvider };
