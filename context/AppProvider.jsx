import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cars")) {
      setCarList(JSON.parse(localStorage.getItem("cars")));
    }
  }, []);
  const contextValues = {
    carList,
    setCarList
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export { AppProvider };
