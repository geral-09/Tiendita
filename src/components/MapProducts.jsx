import React from "react";

const MapProducts = ({ products }) => {
  return (
    <>
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
    </>
  );
};

export default MapProducts;
