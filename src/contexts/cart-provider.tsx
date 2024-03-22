import { ReactNode, createContext } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({});

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value="">{children}</CartContext.Provider>;
}
