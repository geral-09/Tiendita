import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { FormContainer } from "../styles/main";
import Form from "./Form";

const Formulario = () => {
  const { carrito } = useContext(CarritoContext);
  const { products, priceTotal } = carrito;
  return (
    <FormContainer className="">
      <div className="next">
        <div className="wrapper ">
          <div className="contentIcon left-radius">
            <Link to="/" exact>
              <i className="icon-arrowLeft"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="formContent ">
          <div className="formLeft">
            {products.map((product) => (
              <div className="productMenu">
                <div className="col-1">
                  <div className="avatarProduct ">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="infoProduct">
                    <p>{product.name}</p>
                    <strong>${product.price}</strong>
                  </div>
                </div>
                <div className="col-2 ">
                  <div className="count">
                    <span>-</span>
                    <span>1u</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="formRight">
            <Form />
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default Formulario;
