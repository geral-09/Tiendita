import React, { useContext, useState } from "react";
import cardIcon from "../images/mastercard.svg";
import cvcIcon from "../images/cvc.svg";
import { CarritoContext } from "../context/CarritoContext";
import { ModalBg, ModalLocalContainer } from "../styles/main";
import imageSuccess from "../images/hands-buying.svg";
import { Link } from "react-router-dom";

const Form = () => {
  const { carrito } = useContext(CarritoContext);
  const { priceTotal } = carrito;
  const [tarjeta, setTarjeta] = useState({
    email: "",
    number: "",
    date: "",
    cvc: "",
    name: "",
  });
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { email, number, date, cvc, name } = tarjeta;

  const handleChange = (e) => {
    setTarjeta({
      ...tarjeta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (!name.trim(), !number.trim(), !date.trim(), !cvc.trim(), !email.trim())
    ) {
      setError(true);
      console.log("campo vacío!");
      return;
    }
    console.log("heyyy");
    setShowModal(true);

    setError(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="alert-danger text-center">
            Todos los campos son obligatorios
          </p>
        )}
        <label>Correo electrónico</label>
        <div className="inputContent ">
          <input
            type="text"
            placeholder="anthonysa0813@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <label className="mt-3">Información de la tarjeta</label>
        <div className="inputContent mt-3">
          <input
            type="text"
            placeholder="1111 2222 3333 4444"
            name="number"
            onChange={handleChange}
          />
          <img src={cardIcon} alt="" />
        </div>
        <div className="inputContent blockInput mt-2">
          <div className="inputLeft">
            <input
              type="text"
              placeholder="mm/yy"
              name="date"
              onChange={handleChange}
            />
          </div>
          <div className="inputRight">
            <input
              type="text"
              placeholder="cvc"
              name="cvc"
              onChange={handleChange}
            />
            <img src={cvcIcon} alt="cvc icon" />
          </div>
        </div>
        <label className="mt-4">Nombre de la Tarjeta</label>
        <div className="inputContent ">
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <button className="btn-primary mt-3 mb-3" type="submit">
          <span>Pagar ${priceTotal}.00 </span>
        </button>
      </form>
      {showModal && (
        <ModalBg>
          <ModalLocalContainer>
            <div className="imageSuccess ">
              <img src={imageSuccess} alt="Success process" />
              <h3>¡Gracias por tu compra!</h3>
              <Link className="btn-primary  text-center  " to="/" exact>
                Seguir comprando
              </Link>
            </div>
          </ModalLocalContainer>
        </ModalBg>
      )}
    </>
  );
};

export default Form;
