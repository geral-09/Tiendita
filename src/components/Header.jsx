import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { LocationContext } from "../context/Location";
import { HeaderContainer } from "../styles/main";
import BarMenu from "./BarMenu";
import ModalLocation from "./ModalLocation";

const Header = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { priceTotal } = carrito;
  const { local, setLocal } = useContext(LocationContext);
  const [showModal, setShowModal] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <>
      <HeaderContainer className="">
        <div className="title ">
          <h1 className="">Tiendita</h1>
        </div>

        <div className="menuHeader  ">
          <div className="location " onClick={() => setShowModal(!showModal)}>
            <i className="icon-locationIcon"></i>
            <p className="ml-1 mb-0">{local}</p>
          </div>
          <div className="separateColumn"></div>
          <button onClick={() => setSideMenu(!sideMenu)}>
            <i className="icon-cart"></i>
            <span className="ml-1">{carrito.products.length}</span>
          </button>
        </div>
      </HeaderContainer>

      {showModal && <ModalLocation setShowModal={setShowModal} />}
      {sideMenu && <BarMenu setSideMenu={setSideMenu} sideMenu={sideMenu} />}
    </>
  );
};

export default Header;
