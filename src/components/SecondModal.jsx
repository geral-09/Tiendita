import React, { useState } from "react";
import { SecondModalContainer } from "../styles/main";
import image from "../images/tomate.png";
import Products from "./Products";

const SecondModal = () => {
  const [subShowModal, setSubShowModal] = useState(false);

  return (
    <SecondModalContainer>
      <div className="columns ">
        <div className="imageModal">
          <img src={image} className="" alt="" />
        </div>
        <div className="infoProduct">
          <h3>Tomate jugosa</h3>
          <span>$5.00 /kg</span>
          <p>Precios con IVA incluido</p>
          <p>
            Peso aproximado por pieza, puede variar de acuerdo al peso real.
          </p>
          <h4>Selecciona la madurez que deseas</h4>

          <select name="" id="">
            <option value="">Por elegir</option>
            <option value="hoy">Maduro (Para hoy)</option>
            <option value="3-5">Normal (3-5 días)</option>
            <option value="verde">Verde (7 días)</option>
          </select>
          <div className="blockForm ">
            <div className="count">
              <span>-</span>
              <span>250</span>
              <span>+</span>
            </div>
            <button>Agregar</button>
          </div>
        </div>
      </div>
      <Products
        sectionTitle={"Los más populares"}
        urlData={`http://localhost:1337/api/lacteos?populate=image,lacteos`}
      />
    </SecondModalContainer>
  );
};

export default SecondModal;
