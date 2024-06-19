import React, { createContext, ReactNode, useState } from "react";

interface Cart {
  _id: number;
  name: string;
  poster: string[];
  price: number;
  description: string;
  size: string[];
}

interface ContextProps {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (item: Cart) => void;
  removeFromCart: (item: Cart) => void;
}

export const MyContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Context: React.FC<ProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (item: Cart) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item: Cart) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== item._id));
  };

  return (
    <MyContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
