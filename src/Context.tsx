import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";
import { API } from "./api";

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
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const MyContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Context: React.FC<ProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post(`${API}/auth/login`, { email, password });
    setToken(response.data.token);
  };

  const register = async (email: string, password: string) => {
    await axios.post(`${API}/auth/register`, { email, password });
  };

  const logout = () => {
    setToken(null);
  };
  const addToCart = (item: Cart) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item: Cart) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== item._id)
    );
  };

  return (
    <MyContext.Provider value={{ cart, setCart, addToCart, removeFromCart,token, login, register, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
