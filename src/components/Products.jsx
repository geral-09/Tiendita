import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { productsApi } from "../data/products";
import { CardContainer, ProductContainer } from "../styles/main";
import ProductCard from "./ProductCard";

const Products = ({ urlData, sectionTitle }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [products, setProducts] = useState([]);
  const productos = productsApi;

  useEffect(() => {
    // setProducts(productos);
    getProducts()
      .then((products) => setProducts(products))
      .catch((message) => console.error(message));
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (productos.length > 0) {
        setProducts(productos);
        resolve(productos);
      } else {
        reject("no hay productos");
      }
    });
  };

  return (
    <ProductContainer className="">
      <h2>{sectionTitle}</h2>

      <CardContainer className="mb-3">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </CardContainer>
    </ProductContainer>
  );
};

export default Products;
