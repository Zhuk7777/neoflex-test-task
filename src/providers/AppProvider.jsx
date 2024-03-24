import React, { createContext } from 'react';
import { useSessionStorage } from '../hooks/useSessionStorage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [cart, setCart] = useSessionStorage("cart", JSON.stringify([]));

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;