import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [cartData, setCartData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

  const store = {
    searchValue,
    setSearchValue,
    cartData,
    setCartData,
    cartItems,
    setCartItems,
  };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};


