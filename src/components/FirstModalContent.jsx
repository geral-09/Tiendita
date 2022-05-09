import React, { useContext, useState } from "react";
import { LocationContext } from "../context/Location";

const FirstModalContent = ({ setShowNextModal, showNextModal }) => {
  const [subShowModal, setsubShowModal] = useState(false);
  const { local, setLocal } = useContext(LocationContext);
  return (
    <>
      <h3>¿Dónde quieres recibir tu pedido?</h3>
      <p>
        Para poder ofrecerte productos dentro de tu área, necesitamos tu
        dirección
      </p>

      <div className="country " onClick={() => setsubShowModal(!subShowModal)}>
        <i className="icon-locationIcon"></i>
        <p className="mb-0 ml-1">{local}</p>
      </div>

      {subShowModal && (
        <div className="subCountry ">
          <div
            className="local-subCountry "
            onClick={() => setLocal("México City Marriott Reforma Hotel")}
          >
            <i className="icon-locationIcon ml-1"></i>
            <p className="mb-0 ml-1">México City Marriott Reforma Hotel </p>
          </div>
          <div
            className="local-subCountry"
            onClick={() => setLocal("México City International Airport")}
          >
            <i className="icon-locationIcon ml-1"></i>
            <p className="mb-0 ml-1">México City International Airport</p>
          </div>{" "}
          <div
            className="local-subCountry"
            onClick={() => setLocal("México City Mexico")}
          >
            <i className="icon-locationIcon ml-1"></i>
            <p className="mb-0 ml-1">México City Mexico</p>
          </div>
        </div>
      )}
      <button onClick={() => setShowNextModal(!showNextModal)}>Buscar</button>
    </>
  );
};

export default FirstModalContent;
