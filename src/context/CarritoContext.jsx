import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState({
    products: [],
    priceTotal: 0,
  });

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
