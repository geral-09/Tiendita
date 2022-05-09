import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Card } from "../styles/main";

const ProductCard = ({ product }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const { id, name, discount, image, price } = product;
  // const { name, price, discount, image } = attributes;
  // const { data } = image;

  const addProduct = (product) => {
    console.log(product);
    setCarrito({
      ...carrito,
      products: carrito.products.some((p) => p.name === product.name)
        ? [...carrito.products]
        : [
            ...carrito.products,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              discount: product.discount,
              image: product.image,
            },
          ],
      priceTotal: carrito.priceTotal + parseInt(product.price),
    });
  };

  return (
    <Card className="" key={id}>
      <div className="discount">{discount}%dsct.</div>
      <img src={image} alt="" />
      <p>${price}/kg</p>
      <p>{name}</p>
      <button onClick={() => addProduct(product)}>Agregar</button>
    </Card>
  );
};

export default ProductCard;
