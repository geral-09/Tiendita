import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { Menu, ModalBg } from "../styles/main";
import MapProducts from "./MapProducts";
import familyIcon from "../images/family-shopping.svg";

const BarMenu = ({ sideMenu, setSideMenu }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { products, priceTotal } = carrito;
  console.log(products);
  const handleClick = () => {
    console.log(sideMenu);
    setSideMenu(!sideMenu);
  };

  const resetCar = () => {
    console.log("hehehehey");

    setCarrito({
      products: [],
      priceTotal: 0,
    });
  };

  return (
    <ModalBg>
      <Menu>
        <div className="titleMenu">
          <p>
            Entregar en: <span>Mexico City Marriott Reforma Hotel...</span>
          </p>
          <div className="closeIcon contentIcon" onClick={handleClick}>
            <i className="icon-closeIcon"></i>
          </div>
        </div>
        {products.length > 0 ? (
          <>
            <MapProducts products={products} />
            <div className="totalInfo ">
              <button className="btn" onClick={resetCar}>
                Vaciar canasta
              </button>
              <Link className="goTopay" to="/formulario" exact>
                <span className="countProduct">{products.length}</span>
                <span className="text">Ir a pagar</span>
                <p className="totalPrice">${priceTotal}</p>
              </Link>
            </div>
          </>
        ) : (
          <div className="cartEmpty">
            <img src={familyIcon} alt="imagen de no hay productos" />
            <p onClick={resetCar}>Tu canasta está vacía</p>
            <button className="btn-primary text-center">
              Agregar Productos
            </button>
          </div>
        )}
      </Menu>
    </ModalBg>
  );
};

export default BarMenu;
